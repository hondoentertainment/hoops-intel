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
  // --- EAST FIRST ROUND (complete) ---
  {
    seriesId: "E1-DET-ORL",
    conference: "east",
    round: "first-round",
    higherSeed: 1,
    lowerSeed: 8,
    higherTeam: "DET",
    lowerTeam: "ORL",
    higherWins: 4,
    lowerWins: 3,
    status: "complete",
    winner: "DET",
    summary: "DET wins 4-3 (comeback from 1-3)",
    games: [
      { gameNumber: 1, date: "2026-04-19", homeTeam: "DET", awayTeam: "ORL", homeScore: 96, awayScore: 102, status: "final" },
      { gameNumber: 2, date: "2026-04-21", homeTeam: "DET", awayTeam: "ORL", homeScore: 99, awayScore: 104, status: "final" },
      { gameNumber: 3, date: "2026-04-23", homeTeam: "ORL", awayTeam: "DET", homeScore: 105, awayScore: 101, status: "final" },
      { gameNumber: 4, date: "2026-04-25", homeTeam: "ORL", awayTeam: "DET", homeScore: 97, awayScore: 110, status: "final" },
      { gameNumber: 5, date: "2026-04-27", homeTeam: "DET", awayTeam: "ORL", homeScore: 108, awayScore: 99, status: "final" },
      { gameNumber: 6, date: "2026-04-29", homeTeam: "ORL", awayTeam: "DET", homeScore: 92, awayScore: 88, status: "final" },
      { gameNumber: 7, date: "2026-05-01", homeTeam: "DET", awayTeam: "ORL", homeScore: 118, awayScore: 95, status: "final" },
    ],
  },
  {
    seriesId: "E1-BOS-PHI",
    conference: "east",
    round: "first-round",
    higherSeed: 2,
    lowerSeed: 7,
    higherTeam: "BOS",
    lowerTeam: "PHI",
    higherWins: 3,
    lowerWins: 4,
    status: "complete",
    winner: "PHI",
    summary: "PHI wins 4-3 (upset, BOS blew 3-1)",
    games: [
      { gameNumber: 1, date: "2026-04-19", homeTeam: "BOS", awayTeam: "PHI", homeScore: 112, awayScore: 98, status: "final" },
      { gameNumber: 2, date: "2026-04-21", homeTeam: "BOS", awayTeam: "PHI", homeScore: 105, awayScore: 99, status: "final" },
      { gameNumber: 3, date: "2026-04-23", homeTeam: "PHI", awayTeam: "BOS", homeScore: 108, awayScore: 104, status: "final" },
      { gameNumber: 4, date: "2026-04-25", homeTeam: "PHI", awayTeam: "BOS", homeScore: 101, awayScore: 110, status: "final" },
      { gameNumber: 5, date: "2026-04-27", homeTeam: "BOS", awayTeam: "PHI", homeScore: 102, awayScore: 108, status: "final" },
      { gameNumber: 6, date: "2026-04-29", homeTeam: "PHI", awayTeam: "BOS", homeScore: 112, awayScore: 106, status: "final" },
      { gameNumber: 7, date: "2026-05-01", homeTeam: "BOS", awayTeam: "PHI", homeScore: 98, awayScore: 104, status: "final" },
    ],
  },
  {
    seriesId: "E1-NYK-TOR",
    conference: "east",
    round: "first-round",
    higherSeed: 3,
    lowerSeed: 6,
    higherTeam: "NYK",
    lowerTeam: "TOR",
    higherWins: 4,
    lowerWins: 2,
    status: "complete",
    winner: "NYK",
    summary: "NYK wins 4-2",
    games: [
      { gameNumber: 1, date: "2026-04-19", homeTeam: "NYK", awayTeam: "TOR", homeScore: 108, awayScore: 96, status: "final" },
      { gameNumber: 2, date: "2026-04-21", homeTeam: "NYK", awayTeam: "TOR", homeScore: 115, awayScore: 105, status: "final" },
      { gameNumber: 3, date: "2026-04-23", homeTeam: "TOR", awayTeam: "NYK", homeScore: 112, awayScore: 108, status: "final" },
      { gameNumber: 4, date: "2026-04-25", homeTeam: "TOR", awayTeam: "NYK", homeScore: 104, awayScore: 110, status: "final" },
      { gameNumber: 5, date: "2026-04-27", homeTeam: "NYK", awayTeam: "TOR", homeScore: 98, awayScore: 101, status: "final" },
      { gameNumber: 6, date: "2026-04-29", homeTeam: "TOR", awayTeam: "NYK", homeScore: 96, awayScore: 102, status: "final" },
    ],
  },
  {
    seriesId: "E1-CLE-ATL",
    conference: "east",
    round: "first-round",
    higherSeed: 4,
    lowerSeed: 5,
    higherTeam: "CLE",
    lowerTeam: "ATL",
    higherWins: 4,
    lowerWins: 2,
    status: "complete",
    winner: "CLE",
    summary: "CLE wins 4-2",
    games: [
      { gameNumber: 1, date: "2026-04-18", homeTeam: "CLE", awayTeam: "ATL", homeScore: 114, awayScore: 105, status: "final" },
      { gameNumber: 2, date: "2026-04-20", homeTeam: "CLE", awayTeam: "ATL", homeScore: 109, awayScore: 112, status: "final" },
      { gameNumber: 3, date: "2026-04-22", homeTeam: "ATL", awayTeam: "CLE", homeScore: 101, awayScore: 108, status: "final" },
      { gameNumber: 4, date: "2026-04-24", homeTeam: "ATL", awayTeam: "CLE", homeScore: 98, awayScore: 95, status: "final" },
      { gameNumber: 5, date: "2026-04-26", homeTeam: "CLE", awayTeam: "ATL", homeScore: 118, awayScore: 106, status: "final" },
      { gameNumber: 6, date: "2026-04-28", homeTeam: "ATL", awayTeam: "CLE", homeScore: 97, awayScore: 110, status: "final" },
    ],
  },
  // --- WEST FIRST ROUND (complete) ---
  {
    seriesId: "W1-OKC-PHX",
    conference: "west",
    round: "first-round",
    higherSeed: 1,
    lowerSeed: 8,
    higherTeam: "OKC",
    lowerTeam: "PHX",
    higherWins: 4,
    lowerWins: 0,
    status: "complete",
    winner: "OKC",
    summary: "OKC wins 4-0 (sweep)",
    games: [
      { gameNumber: 1, date: "2026-04-19", homeTeam: "OKC", awayTeam: "PHX", homeScore: 118, awayScore: 95, status: "final" },
      { gameNumber: 2, date: "2026-04-21", homeTeam: "OKC", awayTeam: "PHX", homeScore: 121, awayScore: 104, status: "final" },
      { gameNumber: 3, date: "2026-04-23", homeTeam: "PHX", awayTeam: "OKC", homeScore: 99, awayScore: 112, status: "final" },
      { gameNumber: 4, date: "2026-04-25", homeTeam: "PHX", awayTeam: "OKC", homeScore: 101, awayScore: 108, status: "final" },
    ],
  },
  {
    seriesId: "W1-SAS-POR",
    conference: "west",
    round: "first-round",
    higherSeed: 2,
    lowerSeed: 7,
    higherTeam: "SAS",
    lowerTeam: "POR",
    higherWins: 4,
    lowerWins: 1,
    status: "complete",
    winner: "SAS",
    summary: "SAS wins 4-1",
    games: [
      { gameNumber: 1, date: "2026-04-19", homeTeam: "SAS", awayTeam: "POR", homeScore: 112, awayScore: 101, status: "final" },
      { gameNumber: 2, date: "2026-04-21", homeTeam: "SAS", awayTeam: "POR", homeScore: 118, awayScore: 108, status: "final" },
      { gameNumber: 3, date: "2026-04-23", homeTeam: "POR", awayTeam: "SAS", homeScore: 114, awayScore: 105, status: "final" },
      { gameNumber: 4, date: "2026-04-25", homeTeam: "POR", awayTeam: "SAS", homeScore: 98, awayScore: 110, status: "final" },
      { gameNumber: 5, date: "2026-04-27", homeTeam: "SAS", awayTeam: "POR", homeScore: 120, awayScore: 104, status: "final" },
    ],
  },
  {
    seriesId: "W1-DEN-MIN",
    conference: "west",
    round: "first-round",
    higherSeed: 3,
    lowerSeed: 6,
    higherTeam: "DEN",
    lowerTeam: "MIN",
    higherWins: 2,
    lowerWins: 4,
    status: "complete",
    winner: "MIN",
    summary: "MIN wins 4-2 (upset)",
    games: [
      { gameNumber: 1, date: "2026-04-18", homeTeam: "DEN", awayTeam: "MIN", homeScore: 110, awayScore: 102, status: "final" },
      { gameNumber: 2, date: "2026-04-20", homeTeam: "DEN", awayTeam: "MIN", homeScore: 108, awayScore: 112, status: "final" },
      { gameNumber: 3, date: "2026-04-22", homeTeam: "MIN", awayTeam: "DEN", homeScore: 114, awayScore: 106, status: "final" },
      { gameNumber: 4, date: "2026-04-24", homeTeam: "MIN", awayTeam: "DEN", homeScore: 105, awayScore: 109, status: "final" },
      { gameNumber: 5, date: "2026-04-26", homeTeam: "DEN", awayTeam: "MIN", homeScore: 102, awayScore: 110, status: "final" },
      { gameNumber: 6, date: "2026-04-28", homeTeam: "MIN", awayTeam: "DEN", homeScore: 116, awayScore: 108, status: "final" },
    ],
  },
  {
    seriesId: "W1-LAL-HOU",
    conference: "west",
    round: "first-round",
    higherSeed: 4,
    lowerSeed: 5,
    higherTeam: "LAL",
    lowerTeam: "HOU",
    higherWins: 4,
    lowerWins: 2,
    status: "complete",
    winner: "LAL",
    summary: "LAL wins 4-2",
    games: [
      { gameNumber: 1, date: "2026-04-18", homeTeam: "LAL", awayTeam: "HOU", homeScore: 112, awayScore: 105, status: "final" },
      { gameNumber: 2, date: "2026-04-20", homeTeam: "LAL", awayTeam: "HOU", homeScore: 108, awayScore: 114, status: "final" },
      { gameNumber: 3, date: "2026-04-22", homeTeam: "HOU", awayTeam: "LAL", homeScore: 101, awayScore: 99, status: "final" },
      { gameNumber: 4, date: "2026-04-24", homeTeam: "HOU", awayTeam: "LAL", homeScore: 96, awayScore: 108, status: "final" },
      { gameNumber: 5, date: "2026-04-26", homeTeam: "LAL", awayTeam: "HOU", homeScore: 116, awayScore: 104, status: "final" },
      { gameNumber: 6, date: "2026-04-28", homeTeam: "HOU", awayTeam: "LAL", homeScore: 78, awayScore: 95, status: "final" },
    ],
  },
  // --- EAST CONF SEMIS ---
  {
    seriesId: "E2-DET-CLE",
    conference: "east",
    round: "conference-semifinals",
    higherSeed: 1,
    lowerSeed: 4,
    higherTeam: "DET",
    lowerTeam: "CLE",
    higherWins: 3,
    lowerWins: 3,
    status: "active",
    summary: "Tied 3-3 — Game 7 Sunday at DET",
    games: [
      { gameNumber: 1, date: "2026-05-05", homeTeam: "DET", awayTeam: "CLE", homeScore: 111, awayScore: 101, status: "final", topPerformer: "Cade Cunningham", topLine: "28 PTS · 10 AST · 5 REB" },
      { gameNumber: 2, date: "2026-05-07", homeTeam: "DET", awayTeam: "CLE", homeScore: 108, awayScore: 102, status: "final", topPerformer: "Caris LeVert", topLine: "22 PTS off bench" },
      { gameNumber: 3, date: "2026-05-09", homeTeam: "CLE", awayTeam: "DET", homeScore: 116, awayScore: 109, status: "final", topPerformer: "Donovan Mitchell", topLine: "35 PTS · 13-24 FG" },
      { gameNumber: 4, date: "2026-05-11", homeTeam: "CLE", awayTeam: "DET", homeScore: 112, awayScore: 103, status: "final", topPerformer: "Donovan Mitchell", topLine: "43 PTS (39 in 2nd half)" },
      { gameNumber: 5, date: "2026-05-13", homeTeam: "DET", awayTeam: "CLE", homeScore: 113, awayScore: 117, status: "final", tv: "ESPN", topPerformer: "James Harden", topLine: "30 PTS · 8 REB · 6 AST · 3 BLK (OT)" },
      { gameNumber: 6, date: "2026-05-15", homeTeam: "CLE", awayTeam: "DET", homeScore: 94, awayScore: 115, status: "final", tv: "Prime Video", topPerformer: "Paul Reed", topLine: "17 PTS · 6 REB · 7-9 FG" },
      { gameNumber: 7, date: "2026-05-17", homeTeam: "DET", awayTeam: "CLE", homeScore: null, awayScore: null, status: "scheduled", time: "TBD", tv: "ABC" },
    ],
    eliminationGame: false,
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
    summary: "NYK wins 4-0 (sweep)",
    games: [
      { gameNumber: 1, date: "2026-05-05", homeTeam: "NYK", awayTeam: "PHI", homeScore: 108, awayScore: 94, status: "final", topPerformer: "Jalen Brunson", topLine: "29 PTS · 7 AST" },
      { gameNumber: 2, date: "2026-05-07", homeTeam: "NYK", awayTeam: "PHI", homeScore: 112, awayScore: 101, status: "final", topPerformer: "Karl-Anthony Towns", topLine: "26 PTS · 12 REB" },
      { gameNumber: 3, date: "2026-05-09", homeTeam: "PHI", awayTeam: "NYK", homeScore: 94, awayScore: 108, status: "final", topPerformer: "Jalen Brunson", topLine: "33 PTS · 11-22 FG" },
      { gameNumber: 4, date: "2026-05-11", homeTeam: "PHI", awayTeam: "NYK", homeScore: 114, awayScore: 144, status: "final", topPerformer: "Miles McBride", topLine: "25 PTS · 7-9 3PT" },
    ],
  },
  // --- WEST CONF SEMIS ---
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
    summary: "OKC wins 4-0 (sweep, 8-0 overall)",
    games: [
      { gameNumber: 1, date: "2026-05-05", homeTeam: "OKC", awayTeam: "LAL", homeScore: 118, awayScore: 102, status: "final", topPerformer: "Shai Gilgeous-Alexander", topLine: "30 PTS · 7 AST" },
      { gameNumber: 2, date: "2026-05-07", homeTeam: "OKC", awayTeam: "LAL", homeScore: 122, awayScore: 108, status: "final", topPerformer: "Shai Gilgeous-Alexander", topLine: "28 PTS · 6 AST" },
      { gameNumber: 3, date: "2026-05-09", homeTeam: "LAL", awayTeam: "OKC", homeScore: 108, awayScore: 131, status: "final", topPerformer: "Ajay Mitchell", topLine: "24 PTS · 10 AST" },
      { gameNumber: 4, date: "2026-05-11", homeTeam: "LAL", awayTeam: "OKC", homeScore: 110, awayScore: 115, status: "final", topPerformer: "Shai Gilgeous-Alexander", topLine: "35 PTS · 8 AST" },
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
    summary: "SAS wins 4-2 — Advances to WCF vs OKC",
    games: [
      { gameNumber: 1, date: "2026-05-05", homeTeam: "SAS", awayTeam: "MIN", homeScore: 108, awayScore: 99, status: "final", topPerformer: "Victor Wembanyama", topLine: "28 PTS · 12 REB · 4 BLK" },
      { gameNumber: 2, date: "2026-05-07", homeTeam: "SAS", awayTeam: "MIN", homeScore: 104, awayScore: 110, status: "final", topPerformer: "Anthony Edwards", topLine: "32 PTS · 7 REB" },
      { gameNumber: 3, date: "2026-05-09", homeTeam: "MIN", awayTeam: "SAS", homeScore: 108, awayScore: 115, status: "final", topPerformer: "Victor Wembanyama", topLine: "39 PTS · 15 REB · 5 BLK" },
      { gameNumber: 4, date: "2026-05-11", homeTeam: "MIN", awayTeam: "SAS", homeScore: 114, awayScore: 109, status: "final", topPerformer: "Anthony Edwards", topLine: "36 PTS · 6 REB (Wemby ejected)" },
      { gameNumber: 5, date: "2026-05-12", homeTeam: "SAS", awayTeam: "MIN", homeScore: 126, awayScore: 97, status: "final", tv: "NBC, Peacock", topPerformer: "Victor Wembanyama", topLine: "27 PTS · 17 REB · 3 BLK" },
      { gameNumber: 6, date: "2026-05-15", homeTeam: "MIN", awayTeam: "SAS", homeScore: 109, awayScore: 139, status: "final", tv: "Prime Video", topPerformer: "Stephon Castle", topLine: "32 PTS · 11 REB · 6 AST · 11-16 FG" },
    ],
  },
  // --- CONFERENCE FINALS ---
  {
    seriesId: "E3-NYK-TBD",
    conference: "east",
    round: "conference-finals",
    higherSeed: 3,
    lowerSeed: 0,
    higherTeam: "NYK",
    lowerTeam: "TBD",
    higherWins: 0,
    lowerWins: 0,
    status: "upcoming",
    summary: "NYK awaits DET/CLE Game 7 winner",
    games: [],
  },
  {
    seriesId: "W3-OKC-SAS",
    conference: "west",
    round: "conference-finals",
    higherSeed: 1,
    lowerSeed: 2,
    higherTeam: "OKC",
    lowerTeam: "SAS",
    higherWins: 0,
    lowerWins: 0,
    status: "upcoming",
    summary: "OKC vs SAS — SGA vs Wembanyama, starts ~May 20",
    games: [],
  },
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
  // --- ACTIVE / UPCOMING ---
  "E2-DET-CLE": {
    regularSeasonH2H: "Detroit won the regular-season series 3-1, with Cunningham averaging 27 PPG in the head-to-head matchups.",
    playoffHistory: "First playoff meeting between these franchises since LeBron's era. Neither current roster has faced the other in the postseason.",
    keyMatchup: "Cade Cunningham vs Donovan Mitchell — Cunningham has been the series' best player across six games, but Mitchell's Game 4 (43 pts, 39 in the 2nd half) showed his otherworldly ceiling.",
    narrative: "Game 7. Sunday. Little Caesars Arena. After Cleveland took a 3-2 lead with Harden's 30-point OT masterpiece, Detroit responded with the most devastating road performance of the 2026 playoffs — a 115-94 demolition that featured six players in double figures and held Mitchell to 6-of-20 shooting. The pendulum has swung violently four times in this series. Cunningham gets the biggest game of his career at home; Mitchell and Harden need to exorcise the ghosts of Game 6's collapse. The winner faces the rested New York Knicks in the Eastern Conference Finals.",
  },
  "W3-OKC-SAS": {
    regularSeasonH2H: "Split 2-2 in the regular season, with both home teams winning their games. SGA averaged 29 PPG in the matchups; Wembanyama averaged 26 PPG with 4 BPG.",
    playoffHistory: "First playoff meeting between these franchises in the Wembanyama/SGA era. Oklahoma City hasn't lost a game yet (8-0); San Antonio hasn't reached the West Finals since 2017.",
    keyMatchup: "Shai Gilgeous-Alexander vs Victor Wembanyama — MVP vs DPOY. SGA's midrange and floater game vs Wemby's 7-4 wingspan at the rim is the most fascinating individual matchup in the NBA.",
    narrative: "The dream matchup is reality. Oklahoma City's 8-0 historic run — two sweeps without Jalen Williams — collides with San Antonio's depth and firepower. The Spurs just dropped 139 in a road closeout. Castle's emergence as a third star alongside Fox and Wemby gives Pop's team something OKC's previous opponents didn't have: three capable shot-creators who can all beat you in different ways. But the Thunder's defense has been historically elite, holding opponents to under 105 PPG across eight games. Something has to give. The basketball world has been waiting for SGA vs Wembanyama on the Conference Finals stage, and now it's here.",
  },
  "E3-NYK-TBD": {
    regularSeasonH2H: "NYK went 3-1 vs DET and 2-2 vs CLE in the regular season. Either matchup favors the Knicks.",
    playoffHistory: "The Knicks await the DET-CLE Game 7 winner. NYK vs DET would be the first playoff meeting since 2008; NYK vs CLE would be the first since 2018.",
    keyMatchup: "Jalen Brunson vs either Cunningham or Mitchell — Brunson averaged 27.8 PPG in the PHI sweep and has maximum rest advantage.",
    narrative: "The Knicks are sitting pretty. They swept Philadelphia, have been resting since May 11, and will face either a battered 1-seed (Detroit, who needed 7 games vs ORL and now 7 vs CLE) or a road-tested 4-seed (Cleveland, who would have to win Game 7 on the road). Extended rest plus preparation time gives New York a significant structural edge regardless of opponent.",
  },
  // --- COMPLETED SERIES (reference) ---
  "W2-SAS-MIN": {
    regularSeasonH2H: "SAS won the regular-season series 3-1, with Wembanyama averaging 26 PPG and 4 BPG in the four meetings.",
    playoffHistory: "First playoff meeting between these franchises. The Spurs won the series 4-2 behind Wembanyama's dominance and Castle's emergence.",
    keyMatchup: "Victor Wembanyama vs Anthony Edwards — Wemby was the series' most dominant force, but Castle's Game 6 masterpiece stole the show.",
    narrative: "San Antonio won their four games by an average of 25.5 points. Minnesota was outscored by 97 points across four losses. After Edwards and the Wolves stole two home games to make it competitive, the Spurs responded with consecutive blowouts — 126-97 and 139-109 — to end it emphatically. Castle's 32/11/6 clincher was the defining performance of the 2026 Conference Semifinals.",
  },
  "W2-OKC-LAL": {
    regularSeasonH2H: "OKC won the regular-season series 3-1 behind SGA's consistent brilliance.",
    playoffHistory: "OKC swept the Lakers 4-0 to move to 8-0 in the 2026 playoffs, the most dominant start to a playoff run since the 2017 Warriors.",
    keyMatchup: "SGA dominated LeBron and the Lakers from start to finish — there was never a real contest.",
    narrative: "The Thunder's second consecutive sweep was clinical. SGA averaged 30+ PPG, Ajay Mitchell filled Jalen Williams' role off the bench, and Chet Holmgren's clutch dunk sealed the sweep. LeBron's final Lakers playoff game ended with a whimper, not a bang.",
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
