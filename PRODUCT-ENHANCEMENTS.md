# Hoops Intel — Competitive Enhancement Recommendations

> Authored: March 24, 2026 · Last review: May 2, 2026
>
> **Status:** Most Tier 1 and Tier 2 items have shipped. See the "Status"
> column. For current priorities, see [`NEXT-STEPS.md`](./NEXT-STEPS.md).

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
| 1.3 | Smart Fantasy Alerts via Push | **Partial** | `scripts/notify-fantasy-alerts.mjs` + `topic: fantasy` in `push-notify` (team-targeted blast after digest); granular “fantasy-only” subs remain future migration |
| 1.4 | Shareable Player Cards | **Shipped** | `@vercel/og` edge function + Share button component |
| 2.1 | Hoops IQ Trivia & Quizzes | **Shipped** | `/trivia` + daily Hoops IQ questions in each edition |
| 2.2 | Trade Value Index | **Shipped** | `/trade-value` + weekly regeneration |
| 2.3 | Head-to-Head Intelligence | **Shipped** | `seriesIntel` map rendered inside playoff game previews |
| 2.4 | Creator Program — Guest Pulse Index | **Partial** | `/guest-pulse` intake + `api/contact-intake.ts` → Resend when env configured |
| 3.1 | "Ask Hoops Intel" Conversational AI | **Shipped** | `/ask` backed by `api/ask.ts` with archive RAG |
| 3.2 | Hoops Intel Embed Widgets | **Shipped (polish)** | Publisher handbook + CSP / widget matrix on `/widgets` |
| 3.3 | Season-Long Player Trajectory | **Shipped** | Player pages render trajectory from `pulse_snapshots` |
| 3.4 | Betting Intelligence Layer | **MVP shipped** | `/betting-intel` summarizes preview spreads + predictions; sharper price-tracking narrative still backlog |

---

## Quick Wins — Status Check

| Enhancement | Status |
|---|---|
| Edition timestamp | **Shipped** |
| Player comparison tool | **Shipped** (`/compare-players`) |
| "This day in NBA history" | **Shipped** (in `pulseData.ts` + Home) |
| Share to X button | **Shipped** |
| Streak indicators on standings | **Shipped** |
| Print/PDF edition | **Partial** (`/print-edition`) |
| "Why is this player ranked here?" | **Shipped** — `rationale` field on each Pulse Index player |
| Rival game alerts | **Partial** (`/rivals` + Home banner) |

---

## Remaining opportunities

Deepest moats still evolving:

1. **Publisher analytics** — referrers / embed loads (no productized dashboard yet).
2. **Creator moderation workflow** — pitches land via Resend but need queue + SLAs.
3. **Betting depth** — automated line movement + sharp/public thesis (today: static preview snapshot at `/betting-intel`).
4. **Fantasy-only push cohorts** — migrations to tag subscribers who want fantasy minus injury noise.
5. **Richer print/PDF exports** — branded multi-page packet vs. single print sheet.
6. **Rival-aware server pushes** — extend `push_subscriptions` metadata beyond team filters.

Previously “embed docs / comparison / rivals / guest form” friction is now covered in-repo—see `/widgets`, `/compare-players`, `/rivals`, `/guest-pulse`.
