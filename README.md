# Dream Team — marketing site

React + TypeScript (Vite) build of the Dream Team marketing site. The layout
language is reproduced from **conicorn.framer.ai** (an agency-SaaS Framer
template) as a template; every string and product fact is Dream Team's own and
entirely in English. `NOTES.md` holds the design tokens, section map, theme
history and verification evidence.

## Stack

- **React 18.3.1 + TypeScript**, bundled by **Vite 7** — `src/` is the source
  of truth, `dist/` is the build output.
- `assets/site.css` is the design system; `assets/fonts/fonts.css` self-hosts
  Geist + Inter (60 `@font-face` rules, no remote URLs).
- Zero remote requests at runtime: fonts, images, video and JS are all local.
- An alternate build (the newcomer.framer.website theme) is preserved in
  `RECON/newcomer-build/`; see NOTES §7 for how to switch.

## Commands

| Purpose | Command | URL |
|---|---|---|
| Install | `npm install` | — |
| Run (dev, HMR) | `npm run dev` | http://localhost:5173/ |
| Preview (built) | `npm run build && npm run preview` | http://localhost:4173/ |
| Build only | `npm run build` | writes `dist/` |
| Typecheck | `npm run typecheck` | — |
| Asset audit | `node scripts/check-assets.mjs` | verifies every site reference, harvest-manifest path and dist copy; `--restore` re-fetches missing manifest files from their recorded URLs |

## How OpenDesign previews this project

The daemon detects the Vite dev entry in `index.html`
(`<script type="module" src="/src/main.tsx">`) and, for preview, serves
`dist/index.html` instead — rewriting `href|src="/assets/…"` in it to
`dist/assets/…`. `vite.config.ts` keeps both sides of that contract stable:

1. `base: "./"` — every URL emitted *inside* the bundle (CSS `url()`, dynamic
   imports) stays relative to its own file, because the preview runs from a
   nested `/api/projects/<id>/preview/<scope>/` path where root-absolute
   `/assets/…` URLs would 404.
2. A post-build rewrite of the two entry tags in `dist/index.html` to
   `/assets/…`, which is exactly what the daemon substitution expects.
3. A copy of `assets/img` + `assets/media` into `dist/assets/`, so `dist/`
   and `vite preview` are self-contained.

Runtime media are plain string paths relative to the page (`assets/img/…`,
`assets/media/hero-blob.mp4`), so they resolve against the project root in an
OpenDesign preview and against `dist/` in `vite preview` / `npm run dev`.

`node scripts/od-preview-sim.mjs <project-dir> [port]` reproduces the daemon's
preview rewrite on a local static server — that is how the preview path is
verified without the desktop app (see NOTES §8).

> **Do not run `.od-skills/**/scripts/od-preview-rewrite.mjs` on this
> project.** That script rewrites root-absolute URLs to relative ones, which
> would turn `src="/src/main.tsx"` into `src="./src/main.tsx"` and defeat
> OpenDesign's Vite detection.

## Layout

```
index.html              Vite dev entry (do not remove the module script tag)
vite.config.ts          base "./" + odPreviewContract plugin
src/
  main.tsx              entry: imports fonts.css + site.css, mounts <App/>
  App.tsx               section composition
  content.tsx           all copy/data (apps, cases, quotes, faq, stack, values…)
  hooks.ts              reveal-on-scroll, sticky nav, scroll-snap scroller
  anchors.ts            smooth anchor scrolling + back-to-top
  components/           Nav, Hero, Studio, StatsBand, Values, Stack, Process,
                        Cases, Tech, InsideApps, GetApps, Beliefs, Faq, Contact,
                        Footer, Icons
assets/
  site.css              the design system (tokens + layout)
  fonts/…               self-hosted Geist + Inter + harvest originals per host
  img/ media/           runtime media (plain string paths)
  vendor/               legacy UMD React + Babel (unused)
scripts/                check-assets.mjs + od-preview-sim.mjs
dist/                   build output (referenced by the OpenDesign preview)
RECON/                  clone evidence, reference recon, preserved builds, logs
```

`data-od-id` attributes on sections and controls are OpenDesign's element
targeting hooks — keep them when editing markup.
