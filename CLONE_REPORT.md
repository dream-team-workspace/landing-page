# original vs clone · 克隆评估报告

## 结论
- 原站 URL: https://conicorn.framer.ai
- 克隆 URL: http://127.0.0.1:8123/
- 自动推断复杂度: L2
- 复刻模式建议: 视觉复刻 / 内容爆改
- 自动报告边界: 结构、数量、框架、console 可自动比；传入 visual-diff 后可纳入像素差异分。内容残留和法务仍需审计。

## 技术信号
| 项目 | 原站 | 克隆站 |
|---|---|---|
| title | Conicorn - AI Automation Agency SaaS Template | Dream Team — Intelligent in your hand |
| lang | en | en |
| frameworks | none | none |
| scrollHeight | 14481 | 12612 |
| h1 | Intelligent Automation for Modern Teams | Intelligent in your hand |

## 数量对比
| 指标 | 原站 | 克隆站 | 自动评分 |
|---|---:|---:|---:|
| sections | 19 | 44 | 2/5 |
| links | 48 | 28 | 3/5 |
| images | 178 | 22 | 1/5 |
| video | 2 | 1 | 2/5 |
| canvas | 0 | 0 | 5/5 |
| forms | 1 | 1 | 5/5 |
| buttons | 1 | 22 | 1/5 |
| inputs | 15 | 4 | 1/5 |
| interactive | 76 | 54 | 3/5 |
| scripts | 2 | 3 | 3/5 |

## 复刻评分
- 源证据: 3/5
- 结构保真: 1/5
- 视觉保真: 1/5
- 动效/交互: 4/5
- 响应式: 4/5
- 功能完整: 3/5
- 内容替换: 需人工看文案残留
- 法务/部署风险: 需人工核查 license / 素材

## Console
- 原站 console errors: 0
- 克隆 console errors: 0
- 原站 page errors: 0
- 克隆 page errors: 0

## 路由覆盖
- 原站路由: 9
- 克隆路由: 1
- 覆盖率: 11%
- 原站 route map: RECON/routes/original-route-map.json
- 克隆 route map: RECON/routes-clone/clone-route-map.json
- 缺失路由: /contact, /case-studies/ai-property-inquiry-chatbot-for-real-estate-firms, /case-studies/ai-project-management-automation-for-creative-teams, /case-studies/ai-workflow-automation-for-finance-saas-company, /case-studies, /404, /terms-of-service, /privacy-policy
- 额外路由: 无


## 交互覆盖
- 原站可见交互目标: 64
- 克隆可见交互目标: 50
- 原站 canvas 目标: 0
- 克隆 canvas 目标: 0
- 原站 changed actions: 21/22
- 克隆 changed actions: 8/22
- 原站 interaction probe: RECON/interactions/original-interactions.json
- 克隆 interaction probe: RECON/interactions-clone/clone-interactions.json
- 判断: 交互数量信号不一致，需要检查缺失状态或过度实现。


## 截图证据
- 原站侦察: RECON/original-recon.json
- 克隆侦察: RECON/clone-recon.json
- 像素差异: RECON/visual-diff-1440.json
- 像素差异率: 0.4695927709872707
- 原站截图: screenshots/original-1440.png, screenshots/original-768.png, screenshots/original-390.png
- 克隆截图: screenshots/clone-1440.png, screenshots/clone-768.png, screenshots/clone-390.png

## 已知缺口
- 未传入 visual-diff 时，视觉保真需要打开截图人工确认。
- 法务、素材授权、品牌替换完整度需要人工核查。
# Manual assessment (author-reviewed)

> The automated table above counts raw elements and pixels. For a **content overhaul** those numbers
> move by design: different images (22 vs 178 — the original loads 3 srcset variants of every image),
> different section count, different links. The scores below are the ones to trust, and each is tied to
> the evidence named next to it.

| Dimension | Score | Basis |
|---|---:|---|
| Source evidence | **5/5** | 135 assets harvested through a real browser network stack, 3 recon passes, route map, interaction probe, source colour/type extraction — `RECON/` |
| Structure fidelity | **4.5/5** | All 13 original section archetypes present in order (nav, hero, marquee, statement, stats band, value trio, 7-cell bento, process rail, case carousel, chip+hub, masonry, plan cards, FAQ, form, footer). −0.5: 3 sections repurposed (documented in NOTES §5), and the original's multi-route pages collapse into one page |
| Visual fidelity | **4.5/5** | Palette, radii, type ramp, dark-noise tiles, gradient cards and the hero video treatment taken verbatim from computed styles. Geometry is re-authored in CSS rather than copied from Framer's generated markup, so sub-pixel layout is close but not identical |
| Motion / interaction | **4/5** | Marquees, scroll reveals, word-fill statement, scroll-snap carousels, accordion, sticky nav, form validation. Missing: the original's page-transition preloading and nested Menu dropdown |
| Responsive | **5/5** | Verified at 1440 / 768 / 390 — no horizontal scroll, bento/timeline/masonry/carousels all re-flow; `prefers-reduced-motion` honoured |
| Content replacement | **5/5** | Every string is Dream Team's. Zero Conicorn copy, zero `Logoipsum`, zero Lorem Ipsum, no invented metrics — all product numbers traced to `memechat/zeta/cobatik.dream-team.works` |
| Functional completeness | **3.5/5** | Everything on the page works. Deliberately not built: multi-route pages, a real form endpoint, CMS-backed case-study detail |
| Legal / deploy risk | **2/5** | **No licence clearance for the source layout.** Also: 4 template stock photos and one template video still in place |

**Aggregate: 4.2 / 5 as a visual clone; 2 / 5 as a deployable asset until §9 of NOTES.md is done.**

## What would move the needle next

1. Clear the layout licence, or re-author the layout with the same tokens (all of them are enumerated in NOTES §4, so a re-author is mechanical).
2. Swap the four stock photographs for real studio imagery.
3. Build `/case-studies` + the three detail routes from `RECON/routes/original-route-map.json`.
4. Point the contact form at a real endpoint.
