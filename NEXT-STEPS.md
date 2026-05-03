# Hoops Intel — Next steps (living doc)

_Last revised: May 3, 2026_

Near-term backlog is prioritized by **traffic impact during the postseason** plus **engineering hygiene**.

### Consolidated recommendations

| Priority | Recommendation | Owner |
|----------|----------------|-------|
| **P0** | Wire **Stripe** (`STRIPE_*`) and **webhooks** in production; confirm Pro checkout/portal | Ops |
| **P0** | Wire **VAPID** + **push API** + Supabase; smoke-test `playoff-push.yml` | Ops |
| **P0** | Monitor **Anthropic** cost/latency on `generate-series-intel.mjs` / daily edition | Ops |
| **P1** | **SSR/SEO** only if Lighthouse/organic traction regress (else stay SPA) | Product/Eng |
| **P1** | Deeper moats per [`PRODUCT-ENHANCEMENTS.md`](./PRODUCT-ENHANCEMENTS.md) — betting line movement, publisher analytics dashboard, creator queue | Product |

Non-goals this quarter: native Expo-first app, non-NBA core league, repo-native comments — see bottom of this file.

## Shipped baseline (recent)

| Area | Status |
|------|--------|
| Playoff dashboard (`/playoffs`) + ESPN-synced `playoffData.ts` | Shipped |
| Home ticker — synced **final** box scores (all rounds) + NBA Finals schedule rows | Shipped (`playoffTickerWireItems` in `playoffTickerDerived.ts`) |
| Pick’em bracket layer + leaderboard | Shipped |
| Series intel keyed copy + fallback when `seriesId` misses | Shipped (`resolveSeriesIntel`) |
| Series intel generation | Retry + JSON/quality validation (`generate-series-intel.mjs`) |
| Pulse vs playoff edition drift CI guard | Shipped (`validate-playoff-pulse-drift.mjs`) |
| Seasonal generator file resolution + **calendar sample assertions** | Shipped (`content-schedule.mjs --verify-generators`) |
| **generate-edition ↔ season-mode prompt alignment** | Shipped (`verify-edition-season-alignment.mjs` + expanded `season-mode.test.mjs`) |
| Trade Value gated preview | Shipped — **10** free ranks when weekly file has **≥30** players; Pro unlocks full list + rationales |
| Stripe unconfigured UX | Shipped — `expectedEnv` in API + Pro page callouts (`useSubscription`, `/pro`) |
| Push UX | Account `#browser-push` (HTTPS + permission notes); header bell → `/account#browser-push`; `playoff-push.yml` links maintainer doc |
| Pro checkout + portal | Shipped (`/pro`, `refreshSubscription`) |
| Digest opt-out | `/unsubscribe` + `api/unsubscribe-digest` |
| CI | `tests.yml` runs drift, series-intel keys, generators, **edition-align**, schema, build |

## P0 — Ops (production); not gated on further repo code

1. **Push pipeline** — Set `SUPABASE_*`, `PUSH_API_*`, VAPID keys in Vercel/GitHub; confirm `playoff-push.yml` runs. Checklist: [`references/push-notifications.md`](./references/push-notifications.md).
2. **Stripe Pro** — Set live `STRIPE_SECRET_KEY`, `STRIPE_PRICE_MONTHLY`, `STRIPE_PRICE_ANNUAL`, webhooks per README.
3. **seriesIntel cost/latency** — Watch Anthropic usage from `generate-series-intel.mjs`; adjust `max_tokens` / prompts if needed.

## P1 — Deferred product

4. ~~Narrative + marquee alignment~~ — **Shipped** (synced finals on wire + editorial `tickerItems`).
5. ~~Trade Value ≥30 names~~ — **Shipped** (dynamic preview count).
6. **SSR/SEO** — Deferred unless Lighthouse regresses materially (SPA default).

## P2 — Offseason

7. ~~content-schedule / daily-update guards~~ — **Shipped** (`--verify-generators`, edition-align step in `daily-update.yml` + CI).
8. ~~Draft / FA / SL prompt parity~~ — **Shipped** (verification script + `season-mode.test.mjs` coverage).

## Explicit non-goals (this quarter)

- Native Expo client (PWA first)
- New leagues beyond NBA editorial scope
- Repo-generated user comments / Giscus

---

_See [`ROADMAP.md`](./ROADMAP.md) for historical shipped inventory and broader horizon._
