# Hoops Intel — Cursor agent guide

This repository is **`hoops-intel/`**. Use this file alongside **[`CLAUDE.md`](./CLAUDE.md)** — `CLAUDE.md` is the source of truth for architecture, pipelines, Supabase patterns, conventions, and known quirks.

---

## Doc map

| Doc | Purpose |
|-----|---------|
| [`PRD.md`](./PRD.md) | Product requirements & scope |
| [`ROADMAP.md`](./ROADMAP.md) | Shipped vs horizon + architecture snapshot |
| [`NEXT-STEPS.md`](./NEXT-STEPS.md) | Current prioritized backlog |
| [`PRODUCT-ENHANCEMENTS.md`](./PRODUCT-ENHANCEMENTS.md) | Competitive tracker & remaining enhancements |
| [`references/data-schema.md`](./references/data-schema.md) | Edition & playoff TypeScript schemas for generators |
| [`references/playoff-metrics-process.md`](./references/playoff-metrics-process.md) | Playoff metrics inventory & update cadence |

---

## Commands (repo root = `hoops-intel`)

```bash
npm install
npm run dev
npm run build
npm run test:unit       # Vitest
npm run test            # validate-content + assembly (CI-style)
npm run test:watch      # Vitest watch
npm run playoff:sync    # ESPN → playoffData.ts (fetch + sync; postseason upkeep)
npm run test:drift      # pulse vs playoff edition guard (also in CI)
npm run site-review     # Production URL review (optional ANTHROPIC_API_KEY for AI section)
```

Pipeline scripts require **`ANTHROPIC_API_KEY`** in `.env` (see **`scripts/load-local-env.mjs`**).

---

## Cursor-specific hints

1. **Vite root:** `client/` is the frontend root; imports cannot escape above it casually.
2. **Generated domains:** Prefer editing **`scripts/`** + **`references/`** for persistent changes to **`pulseData.ts`**, **`archiveData.ts`**, and section payloads — daily automation overwrites handwritten edits inside generated blobs.
3. **Keep docs in sync** when adding routes, Stripe/Pro gates, playoff models, or push topics — touch **`references/data-schema.md`**, **`PRD.md`** (if scope changes), and **`NEXT-STEPS.md`** as appropriate.

---

## Product & code hotspots

| Area | Where to start |
|------|----------------|
| Routing | `client/src/App.tsx` → `pages/*` |
| Today’s edition | `client/src/lib/pulseData.ts` |
| Playoffs data | `client/src/lib/playoffData.ts`; sync `npm run playoff:sync` / process [`references/playoff-metrics-process.md`](./references/playoff-metrics-process.md) |
| Pick ’Em | `client/src/pages/PickEm.tsx`, `components/PickEm`, `BracketPicker` |
| Ask | `api/ask.ts`, `client/src/pages/AskAI.tsx`, `components/AskHoopsIntel.tsx` |
| Pro / Stripe | `pages/Pro.tsx`, `api/create-checkout.ts`, `api/stripe-webhook.ts` |
| Embed | `pages/Embed.tsx`, `public/embed.js` |
| Pushes | `api/push-notify.ts`; injury + playoffs + **`scripts/notify-fantasy-alerts.mjs`** |

When in doubt, read **`CLAUDE.md`** § Repository layout through § Current priorities.
