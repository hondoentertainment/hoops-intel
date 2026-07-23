# Hoops Intel — Competitive Enhancement Recommendations

> Authored: March 24, 2026 · Last review: May 3, 2026
>
> **Status:** Most Tier 1 and Tier 2 items have shipped. **Data trust / CI:** playoff
> pulse drift guard, `verify-edition-season-alignment.mjs`, synced **final-score ticker
> wire**, and **series-intel** retry/validation are in-repo. For execution backlog and
> ops checklist, see [`NEXT-STEPS.md`](./NEXT-STEPS.md).

---

## Competitive Landscape Summary

| Competitor | Strength | Weakness Hoops Intel Can Exploit |
|---|---|---|
| ESPN / NBA.com | Data breadth, video | Cluttered UI, no narrative, no AI |
| The Athletic | Premium journalism | Paywalled, slow, no real-time data |
| Bleacher Report | Social virality | Low editorial quality, hot-take noise |
| The Ringer | Podcast/long-form | No daily dashboard, no data layer |
| RotoWire / FantasyPros | Fantasy depth | No narrative, transactional UX |
| Sleeper | Social fantasy | Weak news and analysis layer |
| StatMuse | AI stat queries | No editorial voice or daily cadence |

Core moat: **AI-generated narrative + real-time data + editorial curation in one lean, fast dashboard.**

---

## Enhancement Tracker

| # | Enhancement | Status | Notes |
|---|---|---|---|
| 1.1 | Personalized Daily Edition | **Shipped** | `MyPulse` + client-side re-sort by `user.favorites` |
| 1.2 | Prediction Accuracy Leaderboard | **Shipped** | `/pick-em` + per-game picks + playoff bracket picks |
| 1.3 | Smart Fantasy Alerts via Push | **Shipped** | `notify-fantasy-alerts.mjs` + `topic: fantasy` + Account Fantasy-only preset; dispatch-log idempotency + `#fantasy` deep link |
| 1.4 | Shareable Player Cards | **Shipped** | `@vercel/og` edge function + Share button component |
| 2.1 | Hoops IQ Trivia & Quizzes | **Shipped** | `/trivia` + daily Hoops IQ questions in each edition |
| 2.2 | Trade Value Index | **Shipped** | `/trade-value` + weekly regeneration |
| 2.3 | Head-to-Head Intelligence | **Shipped** | `seriesIntel` map rendered inside playoff game previews |
| 2.4 | Creator Program — Guest Pulse Index | **Shipped** | `/guest-pulse` + queue insert without Resend gate; `/creator-queue` moderation + SLAs |
| 2.5 | Home ticker — ESPN-synced finals + editorial wire | **Shipped** | `playoffTickerWireItems()` prepends `playoffSeries` final scores; Finals schedule rows follow |
| 2.6 | Series intel robustness | **Shipped** | `generate-series-intel.mjs` — parse + quality validation + retry; `resolveSeriesIntel` fallback |
| 3.1 | "Ask Hoops Intel" Conversational AI | **Shipped** | `/ask` backed by `api/ask.ts` with archive RAG |
| 3.2 | Hoops Intel Embed Widgets | **Shipped (polish)** | Publisher handbook + CSP / widget matrix on `/widgets` |
| 3.3 | Season-Long Player Trajectory | **Shipped** | Player pages render trajectory from `pulse_snapshots` |
| 3.4 | Betting Intelligence Layer | **Shipped (MVP+)** | `/betting-intel` + `lineMovementData` / Odds API pipeline; education copy matches open→close sync |

---

## Quick Wins — Status Check

| Enhancement | Status |
|---|---|
| Edition timestamp | **Shipped** |
| Player comparison tool | **Shipped** (`/compare-players`) |
| "This day in NBA history" | **Shipped** (in `pulseData.ts` + Home) |
| Share to X button | **Shipped** |
| Streak indicators on standings | **Shipped** |
| Print/PDF edition | **Shipped** — multi-page `/print-edition` packet (Print → Save as PDF; `?print=1` auto) |
| "Why is this player ranked here?" | **Shipped** — `rationale` field on each Pulse Index player |
| Rival game alerts | **Shipped** — `/rivals` + `check-rival-tonight` + Account sync on save topics |

---

## Remaining opportunities (recommended prioritization)

High leverage next bets:

1. **Production ops flip** — secrets + migrations through `20260723` (readiness still false in prod).
2. **Dependabot npm #242** — merge after Vercel preview is green.
3. **Live X / Bluesky** — set GitHub social secrets (dry-run already green).

**Ops:** see [`NEXT-STEPS.md`](./NEXT-STEPS.md) P0 and [`PRODUCTION-OPS.md`](./PRODUCTION-OPS.md).

Shipped: Guest Pulse feed + edit-before-publish, multi-favorite push (`team_abbrs`), multi-pair rivals, opener archive, multi-book consensus UI, game-start defaults, digest quiet hours, `/print-edition`, `/creator-queue`, `/embed-stats`.
