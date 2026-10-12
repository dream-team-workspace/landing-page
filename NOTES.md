# Dream Team — site notes

Marketing site for **Dream Team** — a mobile-specific AI studio (brief:
`projects/dream-team/about.md`). Built as a **React + TypeScript (Vite)** app;
`src/` is the source of truth and `dist/` is what OpenDesign previews.

**Current theme: `https://conicorn.framer.ai`** (an AI-agency SaaS Framer
template), reproduced as a template with Dream Team's own content, entirely in
English. See §7 for the theme history and how to switch between builds.

---

## 1. Source & legal

- Design source: `https://conicorn.framer.ai` — "Conicorn — AI Automation
  Agency SaaS Template" (a **paid Framer template** by N!nh). No open licence:
  treat as **all rights reserved**. This is a local design study / internal
  rebuild. **Do not deploy publicly until the layout licence is cleared or the
  design is re-authored.**
- Content: Dream Team's own brand, copy and product facts, from the brief and
  the product sites (`memechat` / `zeta` / `cobatik` `.dream-team.works`).
  All copy is English; no Conicorn copy ships.
- Imagery: local, harvested/resized (see §5). Some template stock photography
  remains — see §9.

## 2. Stack

- **React 18.3.1 + TypeScript**, bundled by **Vite 7**; `npm run build` runs
  `tsc` then Vite, then the `odPreviewContract` plugin (see README).
- `src/` layout: `main.tsx` (mount + CSS imports), `App.tsx` (section order),
  `content.tsx` (all copy/data), `hooks.ts` (reveal-on-scroll, sticky nav,
  scroll-snap scroller), `anchors.ts` (smooth anchor scroll),
  `components/` (Nav, Hero, Studio, StatsBand, Values, Stack, Process, Cases,
  Tech, InsideApps, GetApps, Beliefs, Faq, Contact, Footer, Icons).
- `assets/site.css` is the design system (§3); `assets/fonts/fonts.css`
  self-hosts Geist + Inter (60 `@font-face` rules, no remote URLs).
- Zero remote requests at runtime: fonts, images, video and JS are local.
- The OpenDesign preview contract (Vite dev entry → `dist/index.html`
  substitution, `/assets/` rewrite, `assets/img` + `assets/media` copied into
  `dist/`) is unchanged — see README and `vite.config.ts`.

### Run it

```bash
cd <project>
npm install

npm run dev        # dev server with HMR  → http://localhost:5173/
npm run build      # tsc + vite build     → dist/ (OpenDesign previews this)
npm run preview    # serve the build      → http://localhost:4173/
npm run typecheck  # tsc --noEmit
```

## 3. Design tokens — copied verbatim from the source

Every value comes from `RECON/original-recon.json` (computed styles) and inline
`rgb()` declarations in the original Framer HTML:

| Token | Value |
|---|---|
| body bg / colour | `#ffffff` / `#1a1a1a` |
| ink / muted | `#1a1a1a` / `#525252` |
| surfaces | `#f2f2f2` / `#e6e6e6`; footer `#b7b7b7` |
| hairline | `rgba(0,0,0,0.1)` / `rgba(0,0,0,0.12)` |
| accent | `#0099ff` |
| hero gradient stops | `#b3e1ff #8399ff #c9aaff #ffccfd #fdffbc` |
| radii | `80px`, `999px`, `48px`, `99px` (pills) |
| type scale | 114 · 80 · 72 · 64 · 56 · 48 · 40 · 32 · 28 · 24 · 21 · 16px (reproduced as `clamp()` ramps) |
| fonts | **Geist** (400–900) for everything; Inter faces are self-hosted for parity with the source |

`assets/fonts/fonts.css` is **re-derived from the live source site** (60
`@font-face` rules; src URLs mapped back to the harvested files via
`RECON/asset-manifest.json`). All 60 references resolve to local files under
`assets/fonts/`; no remote URLs.

## 4. Section map (Conicorn → Dream Team)

| # | Conicorn | Dream Team | Change |
|---|---|---|---|
| — | nav pill + *Get this Template* | nav pill + *Get the apps* | relabelled; scroll-spy solid state + menu sheet |
| hero | *Intelligent Automation for Modern Teams* | **Intelligent in your hand** | tagline from the brief; blob video + gray frame + scrim reproduced |
| — | Logoipsum marquee | platform marquee | ANDROID · iOS · ON-DEVICE · … |
| 001 | "We help startups, SMEs & enterprises…" | "We build AI-driven, local-friendly mobile applications…" | word-by-word scroll reveal kept |
| — | 500+ / 80% / 5x stats band | 100 % on-device · 3 apps · 0 uploads · 504 MB | real product facts, photo pills kept |
| 002 | Why Choose Us? | Why Dream Team? | 3 value cards, dark noise tiles |
| 003 | Our AI-Driven Services (bento) | Our AI-Driven Stack | same 7-cell bento; on-device inference diagram; chat / mobile / retrieval / memory mocks; *Your Data. Stays Yours.* |
| 004 | How We Work (5-step rail) | How We Work | same rail + alternating cards |
| 005 | What We've Built (carousel) | What We've Built | the three real products with real specs |
| 006 | Technology Ecosystem (chips + hub) | Runs On The Device | chip grid 6 + hub + 6 |
| 007 | What They're Saying (masonry) | Inside the Apps | real product facts instead of quotes |
| 008 | Pricing (2 plans + gradient CTA) | Get the Apps (3 cards + gradient CTA) | real download specs instead of price ladder |
| 009 | Meet the Conicorn's Minds | What We Believe | studio principles instead of stock portraits |
| 010 | Common Questions | Common Questions | answers from the products' own docs |
| — | Contact form | "Your next app should run on the phone." | glass card; client-side validation + success state |
| — | Footer | Footer | product links + live-type wordmark |

## 5. Imagery

| Asset | Origin | Local path |
|---|---|---|
| Hero twisting blob | original `framerusercontent.com` mp4 | `assets/media/hero-blob.mp4` |
| Case-study art ×3 | original template art | `assets/img/case-*.jpg` |
| Bento UI mocks ×5 | original template art | `assets/img/bento-*.png` |
| CoBatik archive photography | `cobatik.dream-team.works` | `assets/img/batik-*.jpg` |
| MemeChat screens + mascot | `memechat.dream-team.works` | `assets/img/app-memechat-*.webp`, `memechat-mascot.png` |
| ZetaAI avatar art | `zeta.dream-team.works` | `assets/img/app-zeta-*.jpg` |
| CoBatik app screen | `cobatik.dream-team.works` | `assets/img/app-cobatik.webp` |
| Studio / portrait photos | original template stock | `assets/img/studio-meeting.jpg`, `portrait-*.jpg` |
| Harvest originals (all four sites) | conicorn + product sites | `assets/{images,fonts,css}/<host>/…` — every `localPath` in `RECON/*-manifest.json` resolves; re-check with `node scripts/check-assets.mjs` |

## 6. Interactions (all verified in-browser)

- Sticky glass nav that solidifies on scroll; full menu sheet (Esc / backdrop).
- Hero background video (muted, looped, `playsInline`, autoplay guarded).
- Infinite platform + stats marquees (`prefers-reduced-motion` stops both).
- `IntersectionObserver` reveals; the 001 statement fills word-by-word.
- Case carousel: native scroll-snap + dots + arrows; remembers the slide
  (`localStorage` `dt.case.index`).
- Principles carousel with progress bar and counter (`dt.belief.index`).
- FAQ accordion (`grid-template-rows: 0fr→1fr`, single-open, `aria-expanded`).
- Contact form: inline validation, `aria-invalid`, success panel (client-side).
- Anchor navigation with fixed-nav offset; `:focus-visible` rings.
- `data-od-id` attributes on sections/controls are OpenDesign element hooks —
  keep them when editing.

## 7. Theme history (both builds preserved)

| Theme | Source | Preserved at | Notes |
|---|---|---|---|
| **Current** | `conicorn.framer.ai` | live in `src/` | agency template, Dream Team content |
| Alternate | `newcomer.framer.website` | `RECON/newcomer-build/` | mobile-app launch page; also copied to `projects/memechat` |

To switch back to the newcomer build: copy `RECON/newcomer-build/src` over
`src/`, `site.css` → `assets/site.css`, `fonts.css` → `assets/fonts/fonts.css`,
`index.html` → `index.html`, then `npm run build`. (The previous-build folder
holds the conicorn build; both folders carry their own README.)

## 8. Verification

The current build was rendered through the OpenDesign preview simulation
(`scripts/od-preview-sim.mjs`) with the project's own tooling:

| Check | Result |
|---|---|
| Console / page errors (1440, 768, 390) | **0 / 0 / 0** |
| Page heights | 12 612 / 17 441 / 17 887 px — identical to the original clone |
| Visual diff vs the earlier React build | **0.83 % / 0.85 % / 0.48 %** (only the English rewrites + video/marquee phases) |
| Screenshots | `RECON/screenshots/conicornbuild-{1440,768,390}.png` |
| Asset audit | `node scripts/check-assets.mjs` → 0 missing (45/45 font files resolve) |
| `npm run typecheck` / `build` | pass |

Historical evidence: `RECON/clone-*.png`, `RECON/reactbuild-*.png`,
`RECON/visual-diff-conicornbuild.json`, `RECON/interactions-clone/`.

## 9. Replace before deploying

1. **Layout licence** — clear it with the Framer template author, or re-author
   the layout. Until then this build is internal-only.
2. **Portraits** (`portrait-1/2/3.jpg`, `studio-meeting.jpg`) are the template's
   stock photography — swap for real studio photos.
3. Confirm product facts (specs, platforms, feature lines) before launch; last
   harvested 2026-10-11/12.
4. Contact form posts nowhere (client-side only); legal pages are not built.
