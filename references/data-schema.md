# NBA Pulse — Data Schema Reference

Full TypeScript interface definitions for `pulseData.ts`. Every field is required unless marked optional.

---

## Edition Metadata

```ts
export interface PulseEdition {
  date: string;      // Display date: "March 3, 2026"
  edition: string;   // "Vol. 2026 · No. 62"
  subtitle: string;  // 2–3 story bullets joined by " · "
}
```

---

## Ticker Items

```ts
export interface TickerItem {
  text: string;
  type: "score" | "injury" | "news" | "alert";
}
```

**Type guide:**
- `"score"` — final scores and tonight's game times
- `"injury"` — injury updates (prefix text with `INJURY:`)
- `"alert"` — major news (returns, trades, records)
- `"news"` — general league news

**Format conventions:**
- Scores: `"FINAL: ATL 135, POR 101 — Okongwu 25 PTS, 10 REB"`
- Injuries: `"INJURY: Player (TEAM) — status and timeline"`
- Tonight: `"TONIGHT: AWAY @ HOME — 7:30 ET, NBA TV"`
- Alerts: `"TONIGHT: Giannis expected to return vs. Celtics — 7:30 ET"`

---

## Game Results

```ts
export interface GameResult {
  homeTeam: string;      // 3-letter abbreviation: "ATL"
  homeScore: number;
  awayTeam: string;
  awayScore: number;
  status: "final";
  topPerformer: string;  // Full name
  topLine: string;       // "25 PTS · 10 REB · 6 AST · 7 3PM"
  recap: string;         // 3–5 sentence narrative recap
  gameId: string;        // "ATL-POR-YYYYMMDD"
}
```

**Ordering:** Most narratively significant game first (not chronological).

---

## Pulse Index

```ts
export interface PulseIndexPlayer {
  rank: number;          // 1–10
  player: string;        // Full name
  team: string;          // Abbreviation
  teamRecord: string;    // "47-15"
  indexScore: number;    // 0–100, one decimal place
  trend: "up" | "down" | "stable";
  keyStats: string;      // "30 PTS · 6 AST · 4 REB"
  note: string;          // 1–2 sentences of context
}
```

**Index score guidance:** Not a formula — editorial judgment. Factors: performance quality, game importance, team context, injury status, streak, narrative weight. Rank 1 is typically 95–99, rank 10 is typically 75–85.

**Trend:** `"up"` = rising form/returned from injury/team winning; `"down"` = loss/poor performance/team struggling; `"stable"` = consistent, no major change.

---

## Stat Leaders

```ts
{ category: string; player: string; team: string; value: string; context: string }[]
```

**Required categories (in order):** Points, Rebounds, Assists, 3-Pointers, Blocks, +/-

**Value format:** Raw number as string (`"35"`, `"+13"`). Context is one phrase explaining significance.

---

## Media Reactions

```ts
export interface MediaReaction {
  outlet: string;    // "ESPN", "The Athletic", "The Ringer", "Bleacher Report", "CBS Sports", "NBA.com"
  author: string;    // Real journalist/analyst name
  quote: string;     // 2–4 sentence quote, written in their voice
  topic: string;     // Short topic label shown as a chip
  sentiment: "hot" | "cold" | "neutral";
}
```

**Sentiment guide:** `"hot"` = excited/positive; `"cold"` = critical/concerned; `"neutral"` = analytical/balanced.

**Aim for:** 3 hot, 1–2 cold, 1 neutral. Cover the night's top 3–4 stories across the 6 quotes.

---

## Injury Updates

```ts
export interface InjuryUpdate {
  player: string;
  team: string;       // Abbreviation
  status: "out" | "questionable" | "probable" | "day-to-day" | "returning";
  injury: string;     // Injury description: "Right Achilles surgery"
  timeline: string;   // Specific timeline: "Full-go in 5-on-5; mid-March return target"
  impact: "high" | "medium" | "low";
}
```

**Status `"returning"`:** Use when a player is expected to play tonight after missing games.

**Impact guide:** `"high"` = All-Star or starter; `"medium"` = key rotation player; `"low"` = bench depth.

---

## Game Previews

```ts
export interface GamePreview {
  homeTeam: string;    // Abbreviation
  homeRecord: string;  // "26-33"
  awayTeam: string;
  awayRecord: string;
  time: string;        // "7:30 PM ET"
  tv: string;          // "NBA TV", "ESPN", "Peacock", "Local only"
  spread: string;      // "BOS -2.5"
  overUnder: string;   // "215.5"
  keyMatchup: string;  // "Giannis vs. Derrick White / Al Horford"
  storyline: string;   // 2–3 sentences of context
  prediction: string;  // "BOS wins 112-108 — one-sentence reason"
  featured: boolean;   // true for exactly ONE game per night
}
```

**Featured game:** The game with the biggest narrative (return from injury, playoff implications, rivalry, record chase). Only one game per night should be `featured: true`.

---

## Rookie Watch

```ts
export interface RookieWatch {
  rank: number;       // 1–5
  player: string;
  team: string;
  statLine: string;   // Season averages: "19.3 PPG · 5.4 RPG · 3.5 APG"
  note: string;       // 1–2 sentences on current form / last night / ROY race
  trend: "up" | "down" | "stable";
}
```

**Ordering:** By current ROY race standing, not last night's performance.

---

## Fantasy Alerts

```ts
export interface FantasyAlert {
  player: string;
  team: string;
  action: "add" | "drop" | "hold" | "stream";
  reason: string;     // 1–2 sentences explaining the fantasy rationale
  urgency: "high" | "medium" | "low";
}
```

**Action guide:**
- `"add"` — available in most leagues, should be picked up immediately
- `"drop"` — injured or benched, safe to drop
- `"hold"` — may be tempting to drop but shouldn't be
- `"stream"` — one-night/short-term pickup for a favorable matchup

---

## Standings

```ts
export interface StandingsEntry {
  rank: number;       // 1–10 per conference
  team: string;       // Abbreviation
  wins: number;
  losses: number;
  pct: string;        // ".689"
  gb: string;         // "—" for first place, "2.5" for others
  streak: string;     // "W3" or "L2"
  last10: string;     // "7-3"
  conf: "east" | "west";
}
```

**Include:** Ranks 1–10 for each conference (top 6 playoff seeds + 4 play-in teams). Total: 20 entries.

---

## Playoff Series

```ts
export type PlayoffRound =
  | "first-round"
  | "conference-semifinals"
  | "conference-finals"
  | "finals";

export interface PlayoffSeriesGame {
  gameNumber: number;      // 1–7
  date: string;            // ISO date "2026-04-18"
  homeTeam: string;        // Higher seed is listed first overall but home varies by game number
  awayTeam: string;
  homeScore: number | null;   // null if not yet played
  awayScore: number | null;
  status: "scheduled" | "live" | "final";
  time?: string;              // "7:30 PM ET" — only for scheduled
  tv?: string;                // broadcast network
  topPerformer?: string;      // only for final games
  topLine?: string;           // "31 PTS · 12 REB"
}

export interface PlayoffSeries {
  seriesId: string;           // "E1-DET-ORL" / "W4-LAL-HOU"
  conference: "east" | "west" | "finals";
  round: PlayoffRound;
  higherSeed: number;         // 1–8 (or 1 for Finals)
  lowerSeed: number;
  higherTeam: string;         // abbreviation
  lowerTeam: string;
  higherWins: number;         // games won by higher seed (0–4)
  lowerWins: number;          // games won by lower seed (0–4)
  status: "upcoming" | "active" | "complete";
  winner?: string;            // abbreviation — only set when status === "complete"
  eliminationGame?: boolean;  // true when next game could end the series
  summary: string;            // "DET leads 1-0" / "Series tied 2-2" / "LAL wins 4-2"
  games: PlayoffSeriesGame[];
}
```

**Status guide:**
- `"upcoming"` — series scheduled but no games played yet
- `"active"` — at least one game played, neither team at 4 wins
- `"complete"` — a team has 4 wins; `winner` must be set

**`eliminationGame`:** Set to `true` whenever either team has 3 wins and the other does not yet have 4. Drives push notifications and UI treatment.

---

## Playoff Risers / Fallers

```ts
export interface PlayoffPulseMover {
  player: string;
  team: string;
  direction: "riser" | "faller";
  delta: number;              // rank change from pre-playoffs (positive = up)
  playoffLine: string;        // "28.4 PPG · 9.1 RPG" across playoff games so far
  note: string;               // 1–2 sentences of context
}
```

Shown only when `playoffSeries` is non-empty.
