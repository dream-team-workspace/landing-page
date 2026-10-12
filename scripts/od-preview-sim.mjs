// OpenDesign preview simulator for local verification.
// Mimics apps/daemon/src/routes/project/index.ts:
//   - Vite dev entry in a requested .html  ->  serve dist/index.html
//   - rewrite href|src="/assets/…"          ->  href|src="dist/assets/…"
// Everything else is served straight from the project root, under the
// same nested /api/projects/<id>/preview/<scope>/ URL shape the daemon uses.
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const root = path.resolve(process.argv[2] || ".");
const port = Number(process.argv[3] || 18123);
const scopePrefix = "/api/projects/a91e6638-420a-445c-80d1-c34373b5709e/preview/sim/";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ico": "image/x-icon",
  ".txt": "text/plain; charset=utf-8",
};

const isViteDevHtmlEntry = (html) =>
  /<script\b[^>]*\btype\s*=\s*["']module["'][^>]*\bsrc\s*=\s*["']\/src\/[^"']+["'][^>]*>\s*<\/script>/i.test(html);

const rewriteViteDistAssetUrls = (html) =>
  html.replace(/\b(href|src)\s*=\s*(["'])\/assets\//gi, (_m, attr, quote) => `${attr}=${quote}dist/assets/`);

const counts = { ok: 0, missing: [] };

http
  .createServer((req, res) => {
    const url = new URL(req.url, "http://placeholder");
    if (!url.pathname.startsWith(scopePrefix)) {
      res.writeHead(404, { "content-type": "text/plain" });
      res.end("outside preview scope");
      return;
    }
    let rel = decodeURIComponent(url.pathname.slice(scopePrefix.length)) || "index.html";
    const abs = path.resolve(root, rel);
    if (!abs.startsWith(root + path.sep) && abs !== root) {
      res.writeHead(400).end();
      return;
    }
    fs.readFile(abs, (err, buf) => {
      if (err) {
        counts.missing.push(rel);
        console.log("MISS", rel);
        res.writeHead(404, { "content-type": "text/plain" });
        res.end("not found");
        return;
      }
      counts.ok += 1;
      const ext = path.extname(abs).toLowerCase();
      let body = buf;
      const served = rel;
      if (ext === ".html" && isViteDevHtmlEntry(buf.toString("utf8"))) {
        body = Buffer.from(
          rewriteViteDistAssetUrls(fs.readFileSync(path.join(root, "dist", "index.html"), "utf8")),
        );
        console.log("VITE-ENTRY", rel, "-> dist/index.html (rewritten)");
      } else {
        console.log("OK  ", rel);
      }
      res.writeHead(200, {
        "content-type": MIME[ext] || "application/octet-stream",
        "cache-control": "no-store",
        "access-control-allow-origin": "*",
      });
      res.end(body);
      void served;
    });
  })
  .listen(port, "127.0.0.1", () => {
    console.log(`OD preview sim: http://127.0.0.1:${port}${scopePrefix}index.html`);
  });

process.on("SIGTERM", () => {
  console.log(JSON.stringify(counts));
  process.exit(0);
});
