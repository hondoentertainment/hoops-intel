# Hoops Intel — Product Requirements Document (PRD)

> Last updated: May 3, 2026  
> Planning stack: **`PRD.md`** (requirements & scope) → **`ROADMAP.md`** (timeline & architecture) → **`NEXT-STEPS.md`** (near-term backlog) → **`PRODUCT-ENHANCEMENTS.md`** (competitive ideas & backlog hygiene)

---

## 1. Product summary

**Hoops Intel** is a daily NBA intelligence product: editorial AI narrative, live data (ESPN), and a fast web dashboard rolled into one experience. Primary surface is **`hoopsintel.net`** (React SPA on Vercel). A deterministic pipeline commits fresh content each morning after fetching scores and invoking Claude.

**One-line value proposition:** Trusted daily NBA briefing with Pulse Index rankings, playoffs intelligence, archival search, Pick ’Em engagement, and optional Pro-tier depth — faster and more coherent than traditional sports homepages.

---

## 2. Goals

| Goal | Description |
|------|-------------|
| **Daily habit** | Users open the dashboard for recap, standings, injuries, previews, and editorial voice reliably every game day. |
| **Peak moments** | Playoffs drive traffic; bracket, series state, pushes, and series intel must match ESPN reality and feel premium. |
| **Trust & clarity** | Data (abbreviations, injury casing, editions) conforms to validators; ambiguous stats are framed as editorial judgment where appropriate. |
| **Growth surface** | SEO (meta, OG, sitemap/RSS), shareable artifacts, widgets/embeds, and Ask Hoops Intel bring return visits and backlinks. |
| **Monetization path** | Pro subscription (Stripe) gates depth and perks without degrading core free usefulness. |

---

## 3. Target users

- **NBA generalists** — want one scrollable recap and “what matters tonight.”
- **Playoff-heavy fans** — bracket, series cards, pushes, matchup narratives.
- **Engagement personas** — Pick ’Em, trivia, badges, reactions.
- **Power users / analysts** — Pulse history, trade tools, projections, `/ask`, archive depth; Pro Tier for export and extra tooling.

---

## 4. In-scope functional requirements

### 4.1 Core daily edition (`pulseData.ts` + pipeline)

- **FR-1** Edition metadata: date, edition string, subtitle bullets, `editionContext` (`regular` \| `playoffs` \| `finals`).
- **FR-2** Game results with narrative recap, stat leaders, box-level highlights.
- **FR-3** Pulse Index — top movers with rationale, trends, playoff-aware context when postseason is active.
- **FR-4** Supporting sections: ticker, injuries, tonight’s previews, rookie watch, fantasy alerts, media reactions, quizzes/Hoops IQ snippets as modeled in schema/generator. **During playoffs,** the home ticker **prepends** factual `FINAL:` lines derived from synced `playoffSeries` before editorial ticker items.
- **FR-5** Validation: content tests and schema alignment with [`references/data-schema.md`](./references/data-schema.md); **CI** also enforces playoff/edition context drift (`validate-playoff-pulse-drift.mjs`), edition vs `season-mode` prompt alignment (`verify-edition-season-alignment.mjs`), and series-intel key coverage where applicable.

### 4.2 Playoffs

- **FR-10** Canonical series model in [`client/src/lib/playoffData.ts`](./client/src/lib/playoffData.ts) synced by `scripts/fetch-playoff-series.mjs`; UI falls back only when empty.
- **FR-11** Bracket/playoffs UI exposes live series state (wins, elimination, linkage to games).
- **FR-12** Series intel narratives where generated (`seriesIntel` / Claude pipeline).
- **FR-13** Web Push topics include injury flow plus postseason hooks (`elimination-game`, `series-clincher`) where [`api/push-notify.ts`](./api/push-notify.ts) and schedulers permit.

### 4.3 Engagement & secondary surfaces

- **FR-20** Archive with search/pagination and Ask Hoops Intel (RAG over archive corpus).
- **FR-21** Pick ’Em: per-game and playoff bracket persistence (Supabase + guest fallback patterns per implementation).
- **FR-22** Account features: favorites, reactions, digest/push preference UI tied to schema.
- **FR-23** Feature pages enumerated in routing (tools, trivia, trade, momentum, widgets, `/embed/:id`, Pro checkout, etc.) remain consistent with lazy-load strategy.

### 4.4 Platform & quality

- **FR-30** PWA-ready shell (installability, offline affordances as configured).
- **FR-31** CI: Vitest + Vite build + assembly tests; advisory content validator for AI drift.
- **FR-32** Accessibility and performance budgets consistent with Tailwind-heavy SPA constraints (bundle discipline).

---

## 5. Explicit non-goals

- **NR-1** Native mobile apps (defer; PWA first) unless metrics prove inadequacy (`ROADMAP.md` aligns).
- **NR-2** Non-NBA leagues on the core product roadmap before NBA monetization is stable.
- **NR-3** Full SSR migration in the near term (`NEXT-STEPS.md`).
- **NR-4** Public third-party developer API (`ROADMAP.md` long-term only).

Detailed rationale for near-term exclusions lives in **`NEXT-STEPS.md`** — Explicit Non-Goals.

---

## 6. Success metrics (review cadence)

Use these for monthly or milestone reviews; numerical targets belong in **`NEXT-STEPS.md`** (current table rotates with season).

| Area | Representative KPI |
|------|---------------------|
| Playoffs | Share of sessions touching `/playoffs`, time on series UX |
| Retention | Returning visitors week-over-week in peak months |
| Engagement | Pick/bracket submissions, trivia completion, `/ask` queries |
| Pro | Checkout starts, conversions, churn (when Stripe keys live everywhere) |
| Reliability | CI green rate, validator noise, pipeline failure alerting |

---

## 7. Dependencies & environments

| System | Role |
|--------|------|
| **ESPN ingestion** | Scores/schedules/playoff bracket inputs |
| **Anthropic Claude** | Edition + section generation |
| **Supabase** | Auth, relational store, snapshots, picks, subscriptions |
| **Vercel** | Hosting, serverless API routes (`api/*`), previews |
| **GitHub Actions** | Scheduled pipelines, commits to `main` |

Secrets: document in deployment runbooks (`ANTHROPIC_API_KEY`, `STRIPE_*`, Supabase keys, `PUSH_*`, `VAPID_*`).

---

## 8. Document ownership

When product scope shifts, update **this file first**, then reconcile **`ROADMAP.md`** horizons and **`NEXT-STEPS.md`** execution slices. Competitive backlog rows live in **`PRODUCT-ENHANCEMENTS.md`**.

Agent/developer orientation: **`cursor.md`** and **`CLAUDE.md`**.
