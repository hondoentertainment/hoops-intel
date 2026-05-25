// Hoops Intel — Playoff series state
//
// Updated by scripts/fetch-playoff-series.mjs alongside the daily edition.
// When `playoffSeries` is empty the app falls back to regular-season UI and
// `PlayoffBracket` renders projections from standings.

export type PlayoffRound =
  | "first-round"
  | "conference-semifinals"
  | "conference-finals"
  | "finals";

export interface PlayoffSeriesGame {
  gameNumber: number;
  date: string;
  homeTeam: string;
  awayTeam: string;
  homeScore: number | null;
  awayScore: number | null;
  status: "scheduled" | "live" | "final";
  time?: string;
  tv?: string;
  topPerformer?: string;
  topLine?: string;
}

export interface PlayoffSeries {
  seriesId: string;
  conference: "east" | "west" | "finals";
  round: PlayoffRound;
  higherSeed: number;
  lowerSeed: number;
  higherTeam: string;
  lowerTeam: string;
  higherWins: number;
  lowerWins: number;
  status: "upcoming" | "active" | "complete";
  winner?: string;
  eliminationGame?: boolean;
  summary: string;
  games: PlayoffSeriesGame[];
}

export interface PlayoffPulseMover {
  player: string;
  team: string;
  direction: "riser" | "faller";
  delta: number;
  playoffLine: string;
  note: string;
}

// ═══════════════════════════════════════════════════════════
// PLAYOFF BOARD — synced from ESPN (see references/playoff-metrics-process.md).
// Editorial blocks below: playoffMovers, seriesIntel.
// ═══════════════════════════════════════════════════════════

// BEGIN_PLAYOFF_SERIES_SYNC
export const playoffSeries: PlayoffSeries[] = [
  {
    seriesId: "E2-DET-CLE",
    conference: "east",
    round: "conference-semifinals",
    higherSeed: 1,
    lowerSeed: 4,
    higherTeam: "DET",
    lowerTeam: "CLE",
    higherWins: 3,
    lowerWins: 4,
    status: "complete",
    winner: "CLE",
    summary: "CLE wins 4-3",
    games: [
      { gameNumber: 1, date: "2026-05-05", homeTeam: "DET", awayTeam: "CLE", homeScore: 111, awayScore: 101, status: "final", time: "Final", tv: "NBCSN, Peacock", topPerformer: "Donovan Mitchell", topLine: "23 PTS · 4 REB · 2 AST" },
      { gameNumber: 2, date: "2026-05-07", homeTeam: "DET", awayTeam: "CLE", homeScore: 107, awayScore: 97, status: "final", time: "Final", tv: "Prime Video", topPerformer: "Donovan Mitchell", topLine: "31 PTS · 6 REB · 3 AST" },
      { gameNumber: 3, date: "2026-05-09", homeTeam: "CLE", awayTeam: "DET", homeScore: 116, awayScore: 109, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Donovan Mitchell", topLine: "35 PTS · 10 REB · 4 AST" },
      { gameNumber: 4, date: "2026-05-11", homeTeam: "CLE", awayTeam: "DET", homeScore: 112, awayScore: 103, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Donovan Mitchell", topLine: "43 PTS · 5 REB · 2 AST" },
      { gameNumber: 5, date: "2026-05-13", homeTeam: "DET", awayTeam: "CLE", homeScore: 113, awayScore: 117, status: "final", time: "Final/OT", tv: "ESPN", topPerformer: "Cade Cunningham", topLine: "39 PTS · 7 REB · 9 AST" },
      { gameNumber: 6, date: "2026-05-15", homeTeam: "CLE", awayTeam: "DET", homeScore: 94, awayScore: 115, status: "final", time: "Final", tv: "Prime Video", topPerformer: "James Harden", topLine: "23 PTS · 7 REB · 4 AST" },
      { gameNumber: 7, date: "2026-05-17", homeTeam: "DET", awayTeam: "CLE", homeScore: 94, awayScore: 125, status: "final", time: "Final", tv: "Prime Video", topPerformer: "Donovan Mitchell", topLine: "26 PTS · 6 REB · 8 AST" }
    ],
  },
  {
    seriesId: "E2-NYK-PHI",
    conference: "east",
    round: "conference-semifinals",
    higherSeed: 3,
    lowerSeed: 7,
    higherTeam: "NYK",
    lowerTeam: "PHI",
    higherWins: 4,
    lowerWins: 0,
    status: "complete",
    winner: "NYK",
    summary: "NYK wins 4-0",
    games: [
      { gameNumber: 1, date: "2026-05-04", homeTeam: "NYK", awayTeam: "PHI", homeScore: 137, awayScore: 98, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Jalen Brunson", topLine: "35 PTS · 1 REB · 3 AST" },
      { gameNumber: 2, date: "2026-05-06", homeTeam: "NYK", awayTeam: "PHI", homeScore: 108, awayScore: 102, status: "final", time: "Final", tv: "ESPN", topPerformer: "Tyrese Maxey", topLine: "26 PTS · 3 REB · 6 AST" },
      { gameNumber: 3, date: "2026-05-08", homeTeam: "PHI", awayTeam: "NYK", homeScore: 94, awayScore: 108, status: "final", time: "Final", tv: "Prime Video", topPerformer: "Jalen Brunson", topLine: "33 PTS · 5 REB · 9 AST" },
      { gameNumber: 4, date: "2026-05-10", homeTeam: "PHI", awayTeam: "NYK", homeScore: 114, awayScore: 144, status: "final", time: "Final", tv: "ABC", topPerformer: "Miles McBride", topLine: "25 PTS · 4 REB · 0 AST" }
    ],
  },
  {
    seriesId: "E3-NYK-CLE",
    conference: "east",
    round: "conference-finals",
    higherSeed: 3,
    lowerSeed: 4,
    higherTeam: "NYK",
    lowerTeam: "CLE",
    higherWins: 3,
    lowerWins: 0,
    status: "active",
    eliminationGame: true,
    summary: "NYK leads 3-0",
    games: [
      { gameNumber: 1, date: "2026-05-19", homeTeam: "NYK", awayTeam: "CLE", homeScore: 115, awayScore: 104, status: "final", time: "Final/OT", tv: "ESPN", topPerformer: "Jalen Brunson", topLine: "38 PTS · 5 REB · 6 AST" },
      { gameNumber: 2, date: "2026-05-21", homeTeam: "NYK", awayTeam: "CLE", homeScore: 109, awayScore: 93, status: "final", time: "Final", tv: "ESPN", topPerformer: "Donovan Mitchell", topLine: "26 PTS · 4 REB · 1 AST" },
      { gameNumber: 3, date: "2026-05-23", homeTeam: "CLE", awayTeam: "NYK", homeScore: 108, awayScore: 121, status: "final", time: "Final", tv: "ABC", topPerformer: "Jalen Brunson", topLine: "30 PTS · 3 REB · 6 AST" },
      { gameNumber: 4, date: "2026-05-25", homeTeam: "CLE", awayTeam: "NYK", homeScore: null, awayScore: null, status: "scheduled", time: "5/25 - 8:00 PM EDT", tv: "ESPN" },
      { gameNumber: 5, date: "2026-05-27", homeTeam: "NYK", awayTeam: "CLE", homeScore: null, awayScore: null, status: "scheduled", time: "5/27 - 8:00 PM EDT", tv: "ESPN" },
      { gameNumber: 6, date: "2026-05-29", homeTeam: "CLE", awayTeam: "NYK", homeScore: null, awayScore: null, status: "scheduled", time: "5/29 - 8:00 PM EDT", tv: "ESPN" },
      { gameNumber: 7, date: "2026-05-31", homeTeam: "NYK", awayTeam: "CLE", homeScore: null, awayScore: null, status: "scheduled", time: "5/31 - 8:00 PM EDT", tv: "ESPN" }
    ],
  },
  {
    seriesId: "W2-OKC-LAL",
    conference: "west",
    round: "conference-semifinals",
    higherSeed: 1,
    lowerSeed: 4,
    higherTeam: "OKC",
    lowerTeam: "LAL",
    higherWins: 4,
    lowerWins: 0,
    status: "complete",
    winner: "OKC",
    summary: "OKC wins 4-0",
    games: [
      { gameNumber: 1, date: "2026-05-05", homeTeam: "OKC", awayTeam: "LAL", homeScore: 108, awayScore: 90, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "LeBron James", topLine: "27 PTS · 4 REB · 6 AST" },
      { gameNumber: 2, date: "2026-05-07", homeTeam: "OKC", awayTeam: "LAL", homeScore: 125, awayScore: 107, status: "final", time: "Final", tv: "Prime Video", topPerformer: "Austin Reaves", topLine: "31 PTS · 2 REB · 6 AST" },
      { gameNumber: 3, date: "2026-05-09", homeTeam: "LAL", awayTeam: "OKC", homeScore: 108, awayScore: 131, status: "final", time: "Final", tv: "ABC", topPerformer: "Ajay Mitchell", topLine: "24 PTS · 4 REB · 10 AST" },
      { gameNumber: 4, date: "2026-05-11", homeTeam: "LAL", awayTeam: "OKC", homeScore: 110, awayScore: 115, status: "final", time: "Final", tv: "Prime Video", topPerformer: "Shai Gilgeous-Alexander", topLine: "35 PTS · 1 REB · 8 AST" }
    ],
  },
  {
    seriesId: "W3-OKC-SAS",
    conference: "west",
    round: "conference-finals",
    higherSeed: 1,
    lowerSeed: 2,
    higherTeam: "OKC",
    lowerTeam: "SAS",
    higherWins: 2,
    lowerWins: 2,
    status: "active",
    summary: "Series tied 2-2",
    games: [
      { gameNumber: 1, date: "2026-05-18", homeTeam: "OKC", awayTeam: "SAS", homeScore: 115, awayScore: 122, status: "final", time: "Final/2OT", tv: "NBC, Peacock", topPerformer: "Victor Wembanyama", topLine: "41 PTS · 24 REB · 3 AST" },
      { gameNumber: 2, date: "2026-05-20", homeTeam: "OKC", awayTeam: "SAS", homeScore: 122, awayScore: 113, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Shai Gilgeous-Alexander", topLine: "30 PTS · 4 REB · 9 AST" },
      { gameNumber: 3, date: "2026-05-22", homeTeam: "SAS", awayTeam: "OKC", homeScore: 108, awayScore: 123, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Shai Gilgeous-Alexander", topLine: "26 PTS · 2 REB · 12 AST" },
      { gameNumber: 4, date: "2026-05-24", homeTeam: "SAS", awayTeam: "OKC", homeScore: 103, awayScore: 82, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Victor Wembanyama", topLine: "33 PTS · 8 REB · 5 AST" },
      { gameNumber: 5, date: "2026-05-26", homeTeam: "OKC", awayTeam: "SAS", homeScore: null, awayScore: null, status: "scheduled", time: "5/26 - 8:30 PM EDT", tv: "NBC, Peacock" },
      { gameNumber: 6, date: "2026-05-28", homeTeam: "SAS", awayTeam: "OKC", homeScore: null, awayScore: null, status: "scheduled", time: "5/28 - 8:30 PM EDT", tv: "NBC, Peacock" },
      { gameNumber: 7, date: "2026-05-30", homeTeam: "OKC", awayTeam: "SAS", homeScore: null, awayScore: null, status: "scheduled", time: "5/30 - 8:00 PM EDT", tv: "NBC, Peacock" }
    ],
  },
  {
    seriesId: "W2-SAS-MIN",
    conference: "west",
    round: "conference-semifinals",
    higherSeed: 2,
    lowerSeed: 6,
    higherTeam: "SAS",
    lowerTeam: "MIN",
    higherWins: 4,
    lowerWins: 2,
    status: "complete",
    winner: "SAS",
    summary: "SAS wins 4-2",
    games: [
      { gameNumber: 1, date: "2026-05-04", homeTeam: "SAS", awayTeam: "MIN", homeScore: 102, awayScore: 104, status: "final", time: "Final", tv: "NBCSN, Peacock", topPerformer: "Julius Randle", topLine: "21 PTS · 10 REB · 2 AST" },
      { gameNumber: 2, date: "2026-05-06", homeTeam: "SAS", awayTeam: "MIN", homeScore: 133, awayScore: 95, status: "final", time: "Final", tv: "ESPN", topPerformer: "Stephon Castle", topLine: "21 PTS · 4 REB · 4 AST" },
      { gameNumber: 3, date: "2026-05-08", homeTeam: "MIN", awayTeam: "SAS", homeScore: 108, awayScore: 115, status: "final", time: "Final", tv: "Prime Video", topPerformer: "Victor Wembanyama", topLine: "39 PTS · 15 REB · 1 AST" },
      { gameNumber: 4, date: "2026-05-10", homeTeam: "MIN", awayTeam: "SAS", homeScore: 114, awayScore: 109, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Anthony Edwards", topLine: "36 PTS · 6 REB · 2 AST" },
      { gameNumber: 5, date: "2026-05-12", homeTeam: "SAS", awayTeam: "MIN", homeScore: 126, awayScore: 97, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Victor Wembanyama", topLine: "27 PTS · 17 REB · 5 AST" },
      { gameNumber: 6, date: "2026-05-15", homeTeam: "MIN", awayTeam: "SAS", homeScore: 109, awayScore: 139, status: "final", time: "Final", tv: "Prime Video", topPerformer: "Stephon Castle", topLine: "32 PTS · 11 REB · 6 AST" }
    ],
  }
];
// END_PLAYOFF_SERIES_SYNC

export const playoffMovers: PlayoffPulseMover[] = [
  {
    player: "Stephon Castle",
    team: "SAS",
    direction: "riser",
    delta: 18,
    playoffLine: "32 PTS · 11 REB · 6 AST · 11-16 FG · +28 (Game 6)",
    note: "The series-clinching masterpiece — 32/11/6 on 69% shooting in a 30-point road blowout. Castle is a star. Period.",
  },
  {
    player: "Paul Reed",
    team: "DET",
    direction: "riser",
    delta: 15,
    playoffLine: "17 PTS · 6 REB · 7-9 FG · +8 (Game 6)",
    note: "Detroit's bench catalyst in the 21-point road blowout that forced Game 7. Reed's energy and efficiency broke Cleveland.",
  },
  {
    player: "De'Aaron Fox",
    team: "SAS",
    direction: "riser",
    delta: 10,
    playoffLine: "21 PTS · 9 AST · 8-10 FG · +26 (Game 6)",
    note: "Surgical 80% shooting in the clincher with 9 assists. Fox was the steady hand that let Castle go supernova.",
  },
  {
    player: "Donovan Mitchell",
    team: "CLE",
    direction: "faller",
    delta: -14,
    playoffLine: "18 PTS · 6-20 FG · -25 (Game 6)",
    note: "From 43 points in Game 4 to 18 on 30% shooting with a -25. The worst Game 6 collapse by a star this postseason.",
  },
  {
    player: "James Harden",
    team: "CLE",
    direction: "faller",
    delta: -12,
    playoffLine: "23 PTS · 8 TOs · -5 (Game 6)",
    note: "Eight turnovers in a clinch game at home, two days after his vintage 30-point OT masterpiece. Peak playoff Harden duality.",
  },
];

// ═══════════════════════════════════════════════════════════
// HEAD-TO-HEAD SERIES INTEL
// Regenerated daily by scripts/generate-series-intel.mjs using the archive
// and ESPN team schedule. Keyed by seriesId.
// ═══════════════════════════════════════════════════════════

export interface SeriesIntel {
  regularSeasonH2H: string;       // "Split 2-2; teams combined for 5-point margin across the series"
  playoffHistory: string;         // "First playoff meeting since 2019 Eastern Conference Finals (BOS won 4-2)"
  keyMatchup: string;             // "Jayson Tatum vs. Joel Embiid — Tatum averaged 31 PPG over his last 4 games vs PHI"
  narrative: string;              // 2-3 sentence editorial framing of the series storyline
}

/** Keys MUST match `seriesId` from synced `playoffSeries` (E1-/W1-/E2-/W2-/E3-/W3-… + round). */
export const seriesIntel: Record<string, SeriesIntel> = {
  "E2-DET-CLE": {
    regularSeasonH2H: "Cleveland held the edge in the regular season series against Detroit, winning three of their four meetings and establishing early dominance in the paint that foreshadowed playoff tensions.",
    playoffHistory: "These franchises have limited deep playoff history against one another, making this 2025 Eastern Conference Semifinals clash a rare and significant chapter in what is an otherwise thin postseason rivalry.",
    keyMatchup: "Cade Cunningham versus Donovan Mitchell has defined this series, with both stars trading explosive scoring nights — Mitchell averaging north of 28 points per game while Cunningham has answered with clutch shot-making and playmaking that kept Detroit alive deep into a seven-game war.",
    narrative: "Detroit, entering as the one seed, now faces the ultimate indignity of a Game 7 loss, having squandered home-court advantage against a Cavaliers squad that simply would not break. Cleveland's defensive rotations and Mitchell's relentless aggression in crunch time proved that seeding can be misleading, and the Cavaliers' experience navigating adversity made them the more battle-tested team when it mattered most.",
  },
  "E2-NYK-PHI": {
    regularSeasonH2H: "The Knicks held the edge over Philadelphia in their 2024-25 regular-season meetings, reinforcing their status as the superior team heading into the playoffs.",
    playoffHistory: "The Knicks and 76ers have a storied playoff rivalry, most recently clashing in the 2023 first round where New York prevailed 4-2 behind Julius Randle's dominance, ending Philadelphia's hopes of a deeper run.",
    keyMatchup: "Jalen Brunson vs. Tyrese Maxey has defined the series, with Brunson controlling pace and repeatedly outdueling Maxey in clutch moments to fuel New York's commanding 4-0 sweep.",
    narrative: "With the series already complete at 4-0 in favor of New York, Philadelphia's season is over — the 76ers never solved Brunson's pick-and-roll wizardry, got nothing sustainable from an injury-diminished Joel Embiid, and had no answer for the Knicks' suffocating defensive rotations. New York advances to the Eastern Conference Finals as the clear, dominant force, with Brunson cementing his reputation as one of the most clutch postseason performers in the league.",
  },
  "E3-NYK-CLE": {
    regularSeasonH2H: "Cleveland held the edge in the regular season series, winning three of four matchups behind Donovan Mitchell's consistent scoring, but those results have proven meaningless in a playoff setting where New York has seized complete control.",
    playoffHistory: "These franchises have met sporadically in the postseason across decades, most notably in the late 1990s, but this 2025 Eastern Conference Finals represents their most consequential series in the modern era, and New York has dominated every minute of it.",
    keyMatchup: "Jalen Brunson against Donovan Mitchell has been the series' defining duel, with Brunson outplaying his counterpart through three games by consistently attacking Cleveland's drop coverage while Mitchell has struggled to generate quality looks against New York's disciplined rotational defense.",
    narrative: "For Cleveland to avoid the sweep, Mitchell must recapture the relentless, isolation-heavy aggression that carried the Cavaliers through earlier rounds, while the frontcourt — particularly Evan Mobley — needs to assert physicality in the paint to disrupt New York's rhythm and force Thibs to adjust. New York is vulnerable only in moments of offensive stagnation, when their half-court sets stall and Cleveland can generate transition opportunities, but Brunson's clutch playmaking has repeatedly bailed the Knicks out before Cleveland can capitalize. Everything points toward a historic collapse or a historic close-out, and right now history is squarely on New York's side.",
  },
  "W2-OKC-LAL": {
    regularSeasonH2H: "OKC dominated the 2024-25 regular-season series against the Lakers, winning three of four meetings behind Shai Gilgeous-Alexander's consistent scoring superiority over any LA counterpart.",
    playoffHistory: "These franchises have a storied postseason rivalry dating back to the Kobe-Durant era, including the 2012 Western Conference Finals when OKC eliminated the Lakers in five games, though the current Thunder core is meeting this Lakers group for the first time in the playoffs.",
    keyMatchup: "Shai Gilgeous-Alexander against the Lakers' rotating cast of primary defenders was the defining chess match of the series, with SGA averaging north of 30 points per game and rendering every defensive scheme LA deployed essentially obsolete.",
    narrative: "The sweep tells the full story — the Lakers had no credible answer for OKC's youth, depth, or defensive intensity, and LeBron James, despite flashes of vintage brilliance, could not carry a roster with too many holes against the West's most complete team. For LA to have extended this series, they would have needed Austin Reaves to catch fire from three, Anthony Davis to outmuscle Chet Holmgren in the post consistently, and LeBron to log 40-minute nights at age 40 — an impossible ask over a full series. OKC's sweep served as a coronation moment for Gilgeous-Alexander and a sobering signal that the Thunder are the class of the Western Conference.",
  },
  "W3-OKC-SAS": {
    regularSeasonH2H: "OKC held the edge in the regular season series, leveraging their elite defense and Shai Gilgeous-Alexander's scoring to control most matchups against a San Antonio side still building postseason cohesion.",
    playoffHistory: "These franchises have limited direct playoff history in the modern era, making this Western Conference Finals a largely fresh chapter with no deep scar tissue on either side.",
    keyMatchup: "Shai Gilgeous-Alexander against the Spurs' collective defensive scheme is the axis of the series — SGA averaging north of 30 points per game forces San Antonio to commit extra attention that opens cracks for Chet Holmgren and Jalen Williams.",
    narrative: "San Antonio has earned this tie by forcing OKC into uncomfortable half-court possessions and getting production from Victor Wembanyama on both ends, proving the Spurs are no accident at seed 2. To steal the series, the Spurs must keep limiting OKC's transition opportunities and have Wembanyama deliver 30-plus-point performances in at least one of the final three games. OKC remains the favorite because of depth and home-court advantage in a decisive Game 7 scenario, but their youth and susceptibility to slow, physical play give San Antonio a genuine path.",
  },
  "W2-SAS-MIN": {
    regularSeasonH2H: "San Antonio held the edge in the regular-season series against Minnesota, leveraging their depth and defensive continuity to split or win the season set heading into the postseason.",
    playoffHistory: "These franchises have limited direct playoff history, making this Western Conference Semifinals clash a relatively fresh rivalry without a deep postseason ledger between them.",
    keyMatchup: "Victor Wembanyama's rim-protecting presence against Karl-Anthony Towns has defined the series, with Wembanyama averaging elite block and altered-shot numbers that have forced Towns into his least efficient postseason stretches.",
    narrative: "Minnesota's only path back from a 4-2 deficit that has already ended their series is irrelevant — the Spurs have closed out the Timberwolves and advance. San Antonio's disciplined scheme, Wembanyama's generational two-way impact, and the Wolves' inability to solve Gregg Popovich's rotational chess proved to be the decisive gap. This series served as a coming-out statement for a Spurs rebuild that has arrived ahead of schedule.",
  },
};

export function fallbackSeriesIntel(
  s: Pick<PlayoffSeries, "seriesId" | "higherTeam" | "lowerTeam" | "summary">,
): SeriesIntel {
  const a = s.higherTeam;
  const b = s.lowerTeam;
  return {
    regularSeasonH2H:
      "H₂H recap regenerates daily when keyed intel scripts run for this matchup; meanwhile the board mirrors live ESPN totals.",
    playoffHistory: `${a} vs ${b} — follow the synced series ledger on /playoffs for scores and elimination context.`,
    keyMatchup: `${s.summary} The next pivot is half-court efficiency, turnovers, and second-chance points.`,
    narrative: `${s.summary} Fuller tape-room copy unlocks once \`seriesIntel['${s.seriesId}']\` is generated; you still get live Signals + summaries from the synced row.`,
  };
}

/** Prefer Claude-generated keyed intel when present; never return undefined for UI surfaces. */
export function resolveSeriesIntel(
  series: Pick<PlayoffSeries, "seriesId" | "higherTeam" | "lowerTeam" | "summary">,
): SeriesIntel {
  return seriesIntel[series.seriesId] ?? fallbackSeriesIntel(series);
}

// ═══════════════════════════════════════════════════════════
// DERIVED HELPERS
// ═══════════════════════════════════════════════════════════

/** Normalize ESPN/sync abbreviations to app standings codes (Knicks, Spurs). */
function canonPlayoffTeamCode(t: string): string {
  const u = t.toUpperCase();
  if (u === "NY") return "NYK";
  if (u === "SA") return "SAS";
  return u;
}

export function playoffSeriesForMatchup(awayTeam: string, homeTeam: string): PlayoffSeries | undefined {
  const a = canonPlayoffTeamCode(awayTeam);
  const h = canonPlayoffTeamCode(homeTeam);
  return playoffSeries.find(
    (s) =>
      (canonPlayoffTeamCode(s.higherTeam) === a && canonPlayoffTeamCode(s.lowerTeam) === h) ||
      (canonPlayoffTeamCode(s.higherTeam) === h && canonPlayoffTeamCode(s.lowerTeam) === a),
  );
}

export function playoffSeriesOpponent(series: PlayoffSeries, teamAbbr: string): string {
  const t = canonPlayoffTeamCode(teamAbbr);
  return canonPlayoffTeamCode(series.higherTeam) === t ? series.lowerTeam : series.higherTeam;
}

export const isPlayoffsActive = (): boolean => playoffSeries.length > 0;

/** True when the synced board has only NBA Finals series (or at least one finals-round matchup). */
export function isFinalsActive(): boolean {
  return playoffSeries.some((s) => s.round === "finals");
}

/** Team codes still playing in the NBA Finals (when `isFinalsActive()`). */
export function finalistTeams(): string[] {
  const teams = new Set<string>();
  for (const s of playoffSeries) {
    if (s.round !== "finals") continue;
    if (s.higherTeam !== "TBD") teams.add(canonPlayoffTeamCode(s.higherTeam));
    if (s.lowerTeam !== "TBD") teams.add(canonPlayoffTeamCode(s.lowerTeam));
  }
  return [...teams];
}

export function seriesById(seriesId: string): PlayoffSeries | undefined {
  return playoffSeries.find((s) => s.seriesId === seriesId);
}

export function activeSeries(): PlayoffSeries[] {
  return playoffSeries.filter((s) => s.status !== "complete");
}

export function eliminationSeries(): PlayoffSeries[] {
  return playoffSeries.filter((s) => {
    if (s.status === "complete") return false;
    return s.higherWins === 3 || s.lowerWins === 3;
  });
}

export function seriesForTeam(team: string): PlayoffSeries | undefined {
  const t = canonPlayoffTeamCode(team);
  return playoffSeries.find(
    (s) =>
      s.higherTeam !== "TBD" &&
      s.lowerTeam !== "TBD" &&
      (canonPlayoffTeamCode(s.higherTeam) === t || canonPlayoffTeamCode(s.lowerTeam) === t),
  );
}
