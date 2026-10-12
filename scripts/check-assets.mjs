#!/usr/bin/env node
// Asset completeness checker.
//
// Verifies that every asset path the project depends on exists:
//   1. every `assets/...` reference in src/** and index.html
//   2. every `localPath` recorded in RECON/*-manifest.json (harvest trail)
//   3. the dist/ runtime copies of assets/img + assets/media (after a build)
//
// Usage:
//   node scripts/check-assets.mjs            # report only, exit 1 when missing
//   node scripts/check-assets.mjs --restore  # re-fetch missing manifest files
//                                            # from their recorded source URLs
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const project = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const restore = process.argv.includes("--restore");
const UA =
  "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36";

let checked = 0;
const missing = [];

// 1. site source references ------------------------------------------------
const srcFiles = [];
(function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    e.isDirectory() ? walk(p) : srcFiles.push(p);
  }
})(path.join(project, "src"));
srcFiles.push(path.join(project, "index.html"));

const refs = new Set();
for (const f of srcFiles) {
  for (const m of fs.readFileSync(f, "utf8").matchAll(/assets\/[A-Za-z0-9._/-]+/g)) {
    refs.add(m[0].replace(/[)",.;'\\]+$/, ""));
  }
}
for (const ref of refs) {
  checked++;
  if (!fs.existsSync(path.join(project, ref))) missing.push({ kind: "site", localPath: ref });
}

// 2. harvest manifests ------------------------------------------------------
const reconDir = path.join(project, "RECON");
const manifestFiles = fs
  .readdirSync(reconDir)
  .filter((n) => n.endsWith("-manifest.json"))
  .sort();
for (const mf of manifestFiles) {
  const json = JSON.parse(fs.readFileSync(path.join(reconDir, mf), "utf8"));
  for (const a of json.assets ?? []) {
    if (!a.localPath) continue;
    checked++;
    if (!fs.existsSync(path.join(project, "assets", a.localPath))) {
      missing.push({ kind: "manifest", mf, localPath: a.localPath, url: a.url, bytes: a.bytes });
    }
  }
}

// 3. dist runtime copies ----------------------------------------------------
for (const dir of ["img", "media"]) {
  const srcDir = path.join(project, "assets", dir);
  const distDir = path.join(project, "dist/assets", dir);
  if (!fs.existsSync(distDir)) {
    console.log(`note: dist/assets/${dir} not built yet — run "npm run build"`);
    continue;
  }
  for (const rel of fs.readdirSync(srcDir, { recursive: true })) {
    const r = String(rel);
    if (!fs.statSync(path.join(srcDir, r)).isFile()) continue;
    checked++;
    if (!fs.existsSync(path.join(distDir, r))) {
      missing.push({ kind: "dist", localPath: `dist/assets/${dir}/${r}` });
    }
  }
}

// report --------------------------------------------------------------------
console.log(`checked ${checked} paths | missing ${missing.length}`);
for (const m of missing) {
  console.log(`  MISSING ${m.kind}: ${m.localPath}${m.url ? `  <- ${m.url}` : ""}`);
}

// optional restore ----------------------------------------------------------
if (restore && missing.length) {
  const fetchable = missing.filter((m) => m.url);
  let restored = 0;
  let failed = 0;
  for (const m of fetchable) {
    try {
      const res = await fetch(m.url, { headers: { "user-agent": UA } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const buf = Buffer.from(await res.arrayBuffer());
      const dest = path.join(project, "assets", m.localPath);
      fs.mkdirSync(path.dirname(dest), { recursive: true });
      fs.writeFileSync(dest, buf);
      restored++;
      console.log(`  restored ${m.localPath} (${buf.length} bytes)`);
    } catch (err) {
      failed++;
      console.log(`  FAILED to restore ${m.localPath}: ${err}`);
    }
  }
  console.log(`restore: ${restored} restored, ${failed} failed`);
}

const unrecovered = missing.filter((m) => !restore || !m.url);
if (unrecovered.length) process.exitCode = 1;
