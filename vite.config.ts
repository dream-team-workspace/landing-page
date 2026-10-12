import { cpSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

/**
 * OpenDesign preview contract — why this plugin exists.
 *
 * OpenDesign detects a Vite project by the dev entry in `index.html`
 * (`<script type="module" src="/src/…">`) and then serves the preview from
 * `dist/index.html` instead, rewriting `href|src="/assets/…"` in that file to
 * `dist/assets/…`. Two consequences shape the build:
 *
 * 1. `base: "./"` keeps every URL *inside* the bundle (CSS `url()`, dynamic
 *    imports) relative to the file that emits it, so the preview can serve the
 *    app from the nested `/api/projects/<id>/preview/<scope>/` path. If these
 *    were root-absolute `/assets/…` URLs the nested preview would 404 them,
 *    because only URLs in dist/index.html itself get the daemon-side rewrite.
 *
 * 2. dist/index.html must therefore reference its own entries as `/assets/…`
 *    after the build, which is what the first half of `closeBundle` does.
 *    Do not generalise that rewrite to other files — `vite preview` and the
 *    OpenDesign daemon both depend on exactly this split.
 *
 * The second half of `closeBundle` copies the runtime media (`assets/img`,
 * `assets/media` — referenced as plain strings so OpenDesign previews resolve
 * them against the project root) into `dist/`, which keeps `dist/` and
 * `vite preview` self-contained.
 */
function odPreviewContract(): Plugin {
  return {
    name: "od-preview-contract",
    apply: "build",
    enforce: "post",
    closeBundle() {
      const distDir = path.resolve(projectRoot, "dist");
      const indexHtmlPath = path.resolve(distDir, "index.html");

      const html = readFileSync(indexHtmlPath, "utf8").replace(
        /((?:href|src)=")\.\/assets\//g,
        "$1/assets/",
      );
      writeFileSync(indexHtmlPath, html);

      for (const dir of ["img", "media"]) {
        cpSync(
          path.resolve(projectRoot, "assets", dir),
          path.resolve(distDir, "assets", dir),
          { recursive: true },
        );
      }
    },
  };
}

export default defineConfig({
  plugins: [react(), odPreviewContract()],
  base: "./",
  build: {
    outDir: "dist",
  },
});
