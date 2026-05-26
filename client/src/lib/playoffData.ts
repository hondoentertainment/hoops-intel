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
    seriesId: "E3-NYK-CLE",
    conference: "east",
    round: "conference-finals",
    higherSeed: 3,
    lowerSeed: 4,
    higherTeam: "NYK",
    lowerTeam: "CLE",
    higherWins: 4,
    lowerWins: 0,
    status: "complete",
    winner: "NYK",
    summary: "NYK wins 4-0",
    games: [
      { gameNumber: 1, date: "2026-05-19", homeTeam: "NYK", awayTeam: "CLE", homeScore: 115, awayScore: 104, status: "final", time: "Final/OT", tv: "ESPN", topPerformer: "Jalen Brunson", topLine: "38 PTS · 5 REB · 6 AST" },
      { gameNumber: 2, date: "2026-05-21", homeTeam: "NYK", awayTeam: "CLE", homeScore: 109, awayScore: 93, status: "final", time: "Final", tv: "ESPN", topPerformer: "Donovan Mitchell", topLine: "26 PTS · 4 REB · 1 AST" },
      { gameNumber: 3, date: "2026-05-23", homeTeam: "CLE", awayTeam: "NYK", homeScore: 108, awayScore: 121, status: "final", time: "Final", tv: "ABC", topPerformer: "Jalen Brunson", topLine: "30 PTS · 3 REB · 6 AST" },
      { gameNumber: 4, date: "2026-05-25", homeTeam: "CLE", awayTeam: "NYK", homeScore: 93, awayScore: 130, status: "final", time: "Final", tv: "ESPN", topPerformer: "Donovan Mitchell", topLine: "31 PTS · 4 REB · 1 AST" }
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
    lowerWins: 1,
    status: "complete",
    winner: "SAS",
    summary: "SAS wins 4-1",
    games: [
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
    regularSeasonH2H: "Cleveland held the edge in the regular season series against Detroit, with the Cavaliers' offensive firepower and home-court dominance proving difficult for the Pistons to consistently overcome across their four meetings.",
    playoffHistory: "These franchises have limited deep playoff history against one another, making this seven-game Eastern semifinals clash a landmark series that has already exceeded most preseason expectations for both rebuilding rosters.",
    keyMatchup: "Cade Cunningham vs. Donovan Mitchell has defined the series — Cunningham averaging north of 25 points and 8 assists per game but Mitchell's clutch-time scoring and veteran poise have been the difference in close possessions when the series was on the line.",
    narrative: "Detroit, the surprise No. 1 seed, now faces elimination after squandering a series lead, exposing their youth and inexperience in high-leverage moments on the road. To force a comeback that no longer exists — having lost Game 7 — the Pistons' Cinderella run ends here, and Cleveland advances as the more battle-tested and star-driven squad. Mitchell and the Cavaliers proved that regular-season pedigree and playoff composure ultimately trump seeding when it matters most.",
  },
  "E3-NYK-CLE": {
    regularSeasonH2H: "The Knicks and Cavaliers split their 2024-25 regular-season meetings, with each team defending home court effectively and the series offering little predictive clarity heading into the postseason.",
    playoffHistory: "These franchises have met rarely in the playoffs, with their most notable postseason clashes coming in the 1990s when New York generally held the upper hand in a rivalry defined by physical, defensive basketball.",
    keyMatchup: "Jalen Brunson's relentless pick-and-roll mastery against Darius Garland's offensive counterattack defined the series pulse, with Brunson consistently outproducing Garland in clutch moments across all four games to fuel the sweep.",
    narrative: "The Cavaliers, despite owning the league's best regular-season record, were exposed by New York's suffocating defensive scheme and Brunson's veteran poise, never finding an answer for the Knicks' physical interior presence and transition discipline. Cleveland's inability to protect the paint or generate consistent secondary scoring outside Garland proved fatal, and the sweep underscores that regular-season dominance can evaporate when a battle-tested opponent imposes its identity. New York advances to the NBA Finals riding a formula—grit, half-court execution, and elite shot creation—that looks increasingly difficult to crack.",
  },
  "W2-OKC-LAL": {
    regularSeasonH2H: "OKC dominated the 2024-25 regular-season series against the Lakers, winning three of four meetings behind Shai Gilgeous-Alexander's consistent scoring and the Thunder's suffocating team defense.",
    playoffHistory: "These franchises have met in the playoffs previously during the Kevin Durant era in Oklahoma City, with the Thunder and Lakers splitting memorable postseason encounters in the early 2010s, but this current incarnation of OKC represents a far more complete and cohesive unit than those earlier squads.",
    keyMatchup: "Shai Gilgeous-Alexander vs. LeBron James defined the series' marquee billing, but SGA rendered the matchup moot by averaging over 30 points per game while LeBron, despite flashes of brilliance, could not drag an overmatched Lakers roster to a single win.",
    narrative: "The Lakers never found an answer for OKC's depth, switching versatility, and SGA's relentless creation — Los Angeles needed LeBron and Anthony Davis to be simultaneously transcendent while also receiving elite supporting play, a combination that never materialized across four games. OKC's youth, cohesion, and defensive IQ made this feel less like an upset than a coronation, sweeping the iconic franchise without a moment of real danger. The Thunder close out the series having issued a statement to the rest of the West: this is no longer a rebuilding project.",
  },
  "W3-OKC-SAS": {
    regularSeasonH2H: "OKC held the edge in the regular season series against San Antonio, leveraging their top-ranked defense and Shai Gilgeous-Alexander's scoring to control pace in most meetings.",
    playoffHistory: "These franchises have limited modern playoff history against each other, with San Antonio's dynasty-era teams rarely crossing paths with OKC's current core, making this Western Conference Finals a largely uncharted rivalry.",
    keyMatchup: "Shai Gilgeous-Alexander against the Spurs' perimeter defenders is the defining chess match of the series — SGA averaging north of 30 points through four games, but San Antonio's switching scheme has forced him into contested mid-range territory far more than Oklahoma City's coaching staff anticipated.",
    narrative: "San Antonio's path to an upset runs through forcing OKC into the half-court grind, where Victor Wembanyama's interior presence can erase the Thunder's transition advantages and make every possession a negotiation; the Spurs have proven in Games 3 and 4 that they can compete when they control tempo. OKC is vulnerable precisely because their youth shows up in crunch-time shot selection, and a veteran Spurs team operating in close games is a fundamentally different problem than anything the Thunder faced in the early rounds. For OKC to close it out, Gilgeous-Alexander must shake free late in games and the Thunder's supporting cast needs to re-establish the three-point shooting that went cold in the middle two games.",
  },
  "W2-SAS-MIN": {
    regularSeasonH2H: "San Antonio held the edge in the regular-season series against Minnesota, leveraging their superior half-court execution and depth to win the majority of their meetings in 2024-25.",
    playoffHistory: "These franchises have minimal meaningful playoff history against one another, making this Western Conference Semifinals matchup a relatively fresh postseason rivalry.",
    keyMatchup: "Victor Wembanyama vs. Karl-Anthony Towns has defined the series, with Wembanyama's rim protection and offensive versatility overwhelming Towns on both ends and rendering Minnesota's traditional pick-and-roll attack largely ineffective.",
    narrative: "Down 4-1 and facing elimination, Minnesota would need an extraordinary performance from Anthony Edwards — a 35-plus-point, high-efficiency effort — paired with Wembanyama foul trouble to have any prayer of extending the series. San Antonio, however, has looked anything but vulnerable, using Wembanyama's two-way dominance and Gregg Popovich's system discipline to suffocate the Wolves' transition and three-point opportunities; unless Minnesota can manufacture chaos and push pace beyond San Antonio's comfort zone, the Spurs appear positioned to close this series efficiently and advance.",
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
