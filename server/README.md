# Deploying the landing page (dream-team.works) to the server

How the site gets from a push to `master` onto the server:

```
GitHub push to master
└─ GitHub Actions  (.github/workflows/deploy.yml)
   └─ npm ci && npm run build   (Vite → dist/)
      └─ rsync over SSH  (deploy key, pinned host key)
         └─ 139.99.88.23:/var/www/dream-team.works
            └─ nginx → Cloudflare Tunnel → visitors
```

- CI builds the site from source and rsyncs `dist/`; the server needs no git,
  no Node and no webhook.
- The webroot becomes an **exact mirror** of the build output — anything else
  in it (except `.well-known/`) is deleted on each deploy.
- Same server as the portfolio (`139.99.88.23`), same secret names. The nginx
  vhost is already installed (`/etc/nginx/sites-enabled/dream-team.works.conf`,
  `root /var/www/dream-team.works`) and already answering `Host:
  dream-team.works` with 200. The vhost + security headers are kept in the
  portfolio repo (`server/nginx/`).
- Cloudflare stays in front of the site; cloudflared tunnels
  `dream-team.works` → nginx.

## 0. What is already done (server, verified 2026-10-13)

- `deploy` user exists and `/var/www/dream-team.works` is owned by it.
- nginx vhost enabled and serving (placeholder `index.html` in place).
- CI key pair generated (`deploy_dreamteam`); its public half is
  `github-actions-deploy`.
- The deploy path was validated with a dry-run rsync from the repo checkout.

The only remaining one-time step is **setting the repository secrets** (§1).

## 1. GitHub secrets

`dream-team-workspace/landing-page` → Settings → Secrets and variables →
Actions → New repository secret:

| Secret | Value |
|---|---|
| `DEPLOY_HOST` | `139.99.88.23` (the original server IP) |
| `DEPLOY_USER` | `deploy` |
| `DEPLOY_SSH_KEY` | full contents of the `deploy_dreamteam` private key |
| `DEPLOY_KNOWN_HOSTS` | full contents of `dreamteam_known_hosts` (`ssh-keyscan -p 22 139.99.88.23`) |
| `DEPLOY_PORT` | optional, defaults to `22` |

Or with `gh` (run where the key files are):

```bash
gh auth login    # once
gh secret set DEPLOY_HOST --body '139.99.88.23'
gh secret set DEPLOY_USER --body 'deploy'
gh secret set DEPLOY_PORT --body '22'          # skip if using port 22
gh secret set DEPLOY_SSH_KEY < ~/.ssh/deploy_dreamteam
gh secret set DEPLOY_KNOWN_HOSTS < ~/.ssh/dreamteam_known_hosts
```

The portfolio repo uses the same names/values; secrets cannot be read back, so
set them here from the key files (or paste the same values).

## 2. How the workflow deploys

`.github/workflows/deploy.yml` runs on every push to `master` (and manually via
Actions → Deploy → Run workflow):

1. checks out the repo;
2. installs Node 24 and builds (`npm ci && npm run build` → `dist/`);
3. writes `DEPLOY_SSH_KEY` / `DEPLOY_KNOWN_HOSTS` into `~/.ssh` on the runner
   (missing secrets fail the job with a clear error);
4. rsyncs `dist/` to `/var/www/dream-team.works/`.

rsync flags in use: `--delete` mirrors the webroot, `.well-known/` is
protected, `-c` compares checksums (so same-size edits can never be skipped),
`-i` lists exactly what changed in the log. The job is green only if rsync
succeeds.

## 3. First deploy

Merge `feat/ci-cd` (or any commit) to `master`, then push — or run
Actions → Deploy → Run workflow.

Verify:

- the Actions run is green and its rsync output lists the transferred files;
- on the server: `ls -la /var/www/dream-team.works` (index.html + `assets/`);
- `curl -sI https://dream-team.works` → `200`.

## Day-to-day

- **Push to master → live in about a minute.** The webroot mirrors the build
  output only; repo docs/scripts never land there.
- **Manual deploy:** Actions → Deploy → Run workflow.
- **Rollback:** revert the bad commit on `master` and push (deploys always
  mirror master).
- **Rotate the SSH key:** generate a new pair, replace the `github-actions-deploy`
  line in `/home/deploy/.ssh/authorized_keys`, update `DEPLOY_SSH_KEY`.
- **Server rebuilt / new host key:** refresh `DEPLOY_KNOWN_HOSTS` with a new
  `ssh-keyscan`.
- If new top-level asset directories are added to the build, update the cache
  rules in the portfolio's `server/nginx/dream-team.works.conf` to match.

## Troubleshooting

| Symptom | Fix |
|---|---|
| `Permission denied (publickey)` | key missing from `authorized_keys` or wrong user — test with `ssh -i ~/.ssh/deploy_dreamteam deploy@139.99.88.23 'echo ok'` |
| `Host key verification failed` | `DEPLOY_KNOWN_HOSTS` is stale — re-run `ssh-keyscan` and update the secret |
| `rsync: command not found` | install rsync on the server (`sudo apt install rsync`) |
| Deploy green but site unchanged | confirm you pushed to `master`, and that nginx `root` is `/var/www/dream-team.works` |
| HTTP 521 | tunnel/nginx issue — `systemctl status cloudflared`, `curl -sI -H 'Host: dream-team.works' http://127.0.0.1/` on the server |

## Security notes

- The SSH key is scoped to the `deploy` user only; revoke access by removing
  its `authorized_keys` line.
- The host key is pinned via `DEPLOY_KNOWN_HOSTS`, so there is no
  trust-on-first-use window.
- Optionally scope the key further with
  `restrict,command="rrsync -wo /var/www/dream-team.works"` in
  `authorized_keys`; test a deploy afterwards (rrsync may reject the
  `--filter` option — drop it if so).
