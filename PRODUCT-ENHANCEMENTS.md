# Hoops Intel — Competitive Enhancement Recommendations

> Authored: March 24, 2026 · Last review: April 20, 2026
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
| 1.2 | Prediction Accuracy Leaderboard | **Shipped** | `/pickem` with per-game picks + playoff bracket picks |
| 1.3 | Smart Fantasy Alerts via Push | **Partial** | Infra exists (VAPID + injury diff); extend coverage to fantasy-only users |
| 1.4 | Shareable Player Cards | **Shipped** | `@vercel/og` edge function + Share button component |
| 2.1 | Hoops IQ Trivia & Quizzes | **Shipped** | `/trivia` + daily Hoops IQ questions in each edition |
| 2.2 | Trade Value Index | **Shipped** | `/trade-value` + weekly regeneration |
| 2.3 | Head-to-Head Intelligence | **Shipped** | `seriesIntel` map rendered inside playoff game previews |
| 2.4 | Creator Program — Guest Pulse Index | **Not started** | P2 — defer until post-playoffs |
| 3.1 | "Ask Hoops Intel" Conversational AI | **Shipped** | `/ask` backed by `api/ask.ts` with archive RAG |
| 3.2 | Hoops Intel Embed Widgets | **Partial** | Widgets built (`/widgets`), but no embeddable `<script>` bundle yet |
| 3.3 | Season-Long Player Trajectory | **Shipped** | Player pages render trajectory from `pulse_snapshots` |
| 3.4 | Betting Intelligence Layer | **Not started** | Deferred; affiliate links only today |

---

## Quick Wins — Status Check

| Enhancement | Status |
|---|---|
| Edition timestamp | **Shipped** |
| Player comparison tool | **Not started** — still a quick win |
| "This day in NBA history" | **Shipped** (in `pulseData.ts` + Home) |
| Share to X button | **Shipped** |
| Streak indicators on standings | **Shipped** |
| Print/PDF edition | **Not started** |
| "Why is this player ranked here?" | **Shipped** — `rationale` field on each Pulse Index player |
| Rival game alerts | **Not started** |

---

## Remaining Opportunities

The items below from the original document have **not shipped** and remain the
most valuable unfinished work:

1. **Hoops Intel Embed Widgets** — the product exists, but the embeddable
   `<script>` tag bundle does not. Tracked as P2.8 in `NEXT-STEPS.md`.
2. **Creator Program / Guest Pulse Index** — no submission flow.
3. **Betting Intelligence Layer** — line tracking + sharp-vs-public narrative.
4. **Player comparison tool** — a single quick-win still on the table.
5. **Print/PDF edition** — nice-to-have for newsletter redistribution.
6. **Rival game alerts** — natural extension of the playoff push infra.

Everything else in the original document has shipped in some form.
