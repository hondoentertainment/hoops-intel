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
// ROUND 1 — 2026 NBA PLAYOFFS (as of April 19, 2026)
// Four Game 1s played Friday night. Four more Game 1s tonight.
// ═══════════════════════════════════════════════════════════

// BEGIN_PLAYOFF_SERIES_SYNC
export const playoffSeries: PlayoffSeries[] = [
  {
    seriesId: "E1-OKC-PHX",
    conference: "east",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "OKC",
    lowerTeam: "PHX",
    higherWins: 1,
    lowerWins: 0,
    status: "active",
    summary: "OKC leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-04-27", homeTeam: "PHX", awayTeam: "OKC", homeScore: 122, awayScore: 131, status: "final", time: "Final", tv: "NBCSN, Peacock" }
    ],
  },
  {
    seriesId: "E1-CLE-TOR",
    conference: "east",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "CLE",
    lowerTeam: "TOR",
    higherWins: 0,
    lowerWins: 0,
    status: "upcoming",
    summary: "Series tied 0-0",
    games: [
      { gameNumber: 1, date: "2026-05-03", homeTeam: "CLE", awayTeam: "TOR", homeScore: null, awayScore: null, status: "scheduled", time: "TBD" }
    ],
  },
  {
    seriesId: "E1-DEN-MIN",
    conference: "east",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "DEN",
    lowerTeam: "MIN",
    higherWins: 0,
    lowerWins: 0,
    status: "upcoming",
    summary: "Series tied 0-0",
    games: [
      { gameNumber: 1, date: "2026-05-02", homeTeam: "DEN", awayTeam: "MIN", homeScore: null, awayScore: null, status: "scheduled", time: "TBD" }
    ],
  },
  {
    seriesId: "E1-NY-ATL",
    conference: "east",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "NY",
    lowerTeam: "ATL",
    higherWins: 0,
    lowerWins: 0,
    status: "upcoming",
    summary: "Series tied 0-0",
    games: [
      { gameNumber: 1, date: "2026-05-02", homeTeam: "NY", awayTeam: "ATL", homeScore: null, awayScore: null, status: "scheduled", time: "TBD" }
    ],
  },
  {
    seriesId: "E1-LAL-HOU",
    conference: "east",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "LAL",
    lowerTeam: "HOU",
    higherWins: 0,
    lowerWins: 0,
    status: "upcoming",
    summary: "Series tied 0-0",
    games: [
      { gameNumber: 1, date: "2026-05-03", homeTeam: "LAL", awayTeam: "HOU", homeScore: null, awayScore: null, status: "scheduled", time: "TBD" }
    ],
  },
  {
    seriesId: "E1-BOS-PHI",
    conference: "east",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "BOS",
    lowerTeam: "PHI",
    higherWins: 0,
    lowerWins: 0,
    status: "upcoming",
    summary: "Series tied 0-0",
    games: [
      { gameNumber: 1, date: "2026-05-02", homeTeam: "BOS", awayTeam: "PHI", homeScore: null, awayScore: null, status: "scheduled", time: "TBD" }
    ],
  },
  {
    seriesId: "E1-DET-ORL",
    conference: "east",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "DET",
    lowerTeam: "ORL",
    higherWins: 0,
    lowerWins: 0,
    status: "upcoming",
    summary: "Series tied 0-0",
    games: [
      { gameNumber: 1, date: "2026-05-03", homeTeam: "DET", awayTeam: "ORL", homeScore: null, awayScore: null, status: "scheduled", time: "TBD" }
    ],
  },
  {
    seriesId: "E1-SA-POR",
    conference: "east",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "SA",
    lowerTeam: "POR",
    higherWins: 1,
    lowerWins: 0,
    status: "active",
    summary: "SA leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-04-28", homeTeam: "SA", awayTeam: "POR", homeScore: 114, awayScore: 95, status: "final", time: "Final", tv: "ESPN" }
    ],
  }
];
// END_PLAYOFF_SERIES_SYNC

export const playoffMovers: PlayoffPulseMover[] = [
  {
    player: "Evan Mobley",
    team: "CLE",
    direction: "riser",
    delta: 6,
    playoffLine: "31.0 PPG · 12.0 RPG · 4.0 BPG",
    note: "Career-high 31 in Game 1 vs. Toronto vaults him into the Round 1 MVP conversation.",
  },
  {
    player: "Jalen Brunson",
    team: "NY",
    direction: "riser",
    delta: 4,
    playoffLine: "26.0 PPG · 7.0 APG",
    note: "Controlled Game 1 tempo at MSG; Knicks look dialed-in against Atlanta's pace.",
  },
  {
    player: "Anthony Davis",
    team: "LAL",
    direction: "riser",
    delta: 3,
    playoffLine: "25.0 PPG · 11.0 RPG · 3.0 BPG",
    note: "Rim protection anchored the Lakers' Game 1 defense; Houston had no answer inside.",
  },
  {
    player: "Anthony Edwards",
    team: "MIN",
    direction: "faller",
    delta: -5,
    playoffLine: "19.0 PPG · 35.3% FG",
    note: "Quiet Game 1 in Denver — Minnesota needs far more from their franchise guard.",
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

export const seriesIntel: Record<string, SeriesIntel> = {
  "E1-DET-ORL": {
    regularSeasonH2H: "DET won regular-season series 3-1; average margin +9.3 in Detroit victories",
    playoffHistory: "First playoff meeting since 2008 when Orlando upset Detroit in the second round 4-1",
    keyMatchup: "Cade Cunningham vs. Paolo Banchero — two franchise cornerstones who have combined for 48.9 PPG in H2H matchups this season",
    narrative: "Detroit enters as the East's top seed after a historic 60-22 campaign, but Orlando is the kind of long, switchy team built to give top-heavy offenses problems. If Banchero can neutralize Cunningham and force Jaden Ivey to beat them, a Magic upset isn't out of the question.",
  },
  "E2-BOS-PHI": {
    regularSeasonH2H: "Tied 2-2; both road teams won by double digits",
    playoffHistory: "Fifth postseason meeting since 2018; Boston leads the all-time series 3-1",
    keyMatchup: "Jayson Tatum vs. Joel Embiid — Tatum averaged 28.4 PPG over his last five including 31 in February's MSG matchup",
    narrative: "Philadelphia is the most dangerous seven-seed the East has produced in years because Embiid still bends the floor the moment he gets the ball at the elbow. Boston's counter is depth — but if Tatum goes cold and Al Horford can't check Embiid one-on-one, this series gets extremely interesting.",
  },
  "E3-NY-ATL": {
    regularSeasonH2H: "NY won series 3-1; Brunson averaged 28.8 in those four games",
    playoffHistory: "First playoff meeting since 1999 when NY knocked off Atlanta 4-0 en route to the Finals",
    keyMatchup: "Jalen Brunson vs. Trae Young — two elite half-court scorers with mirrored games and opposite team contexts",
    narrative: "New York's Game 1 win at MSG was textbook Brunson — controlled tempo, downhill attacks, killer late-clock pull-ups. Atlanta needs Young to break containment and force Tom Thibodeau to switch, but NY's physicality at the point of attack is the biggest H2H advantage of the round.",
  },
  "E4-CLE-TOR": {
    regularSeasonH2H: "CLE won series 3-1 with Mobley averaging 22.4 PPG and 10.8 RPG",
    playoffHistory: "Third postseason meeting; Toronto famously swept Cleveland 4-0 in 2018 second round",
    keyMatchup: "Evan Mobley vs. Scottie Barnes — two of the East's best young two-way forwards with overlapping skillsets",
    narrative: "Mobley's Game 1 outburst (31-12-4) was exactly the superstar leap Cleveland needed to take for this roster to matter in May. If Barnes can't counter and RJ Barrett cools down, this series ends quickly.",
  },
  "W1-OKC-PHX": {
    regularSeasonH2H: "OKC won series 4-0 by an average margin of 12.8",
    playoffHistory: "First playoff meeting since 2010 first round when PHX won 4-2",
    keyMatchup: "Shai Gilgeous-Alexander vs. Devin Booker — both averaged 32+ in this season's four H2H meetings",
    narrative: "OKC has won eight straight vs Phoenix dating back to last season. Book has to carry a volume Booker rarely carries for four games, and the Thunder's perimeter defense (Dort, Wallace, Caruso) is built specifically to take that away.",
  },
  "W2-SAS-POR": {
    regularSeasonH2H: "SAS won series 4-0; Wembanyama averaged 25.1 PPG and 4.6 BPG vs POR",
    playoffHistory: "First playoff meeting in franchise history",
    keyMatchup: "Victor Wembanyama vs. Deandre Ayton — size meets size, but Wemby's shot profile is in another universe",
    narrative: "A potential sweep candidate that could still be must-watch TV purely because Wemby appears to be approaching his playoff unlock. Portland will try to muddy the game with physicality and force Wembanyama into foul trouble; anything beyond five games should count as a win for Chauncey Billups.",
  },
  "W3-DEN-MIN": {
    regularSeasonH2H: "Tied 2-2; final meeting (March 28) went to overtime",
    playoffHistory: "Rematch of 2024 Western Conference semifinals which MIN won 4-3 after famously blowing a 3-0 lead",
    keyMatchup: "Nikola Jokić vs. Rudy Gobert — the matchup that decided last year's series and will decide this one",
    narrative: "Denver's 13-game streak came partly thanks to the easiest schedule in the league, but Jokić's passing looked generationally good throughout it. Minnesota's Gobert-Towns frontcourt matches up well on paper, but Ant Edwards' Game 1 dud (19 pts, 6-17 FG) was the worst possible start for Minnesota's hopes.",
  },
  "W4-LAL-HOU": {
    regularSeasonH2H: "LAL won series 3-1; Davis averaged 26.0 PPG and 12.3 RPG",
    playoffHistory: "First playoff meeting since 2020 bubble when LAL won 4-1 en route to the title",
    keyMatchup: "Anthony Davis vs. Alperen Şengün — finesse center meets switchable rim-protector",
    narrative: "Davis' Game 1 (25-11-3 blocks) reminded everyone why peak-AD is the best two-way big in the league when healthy. If LeBron can log 32+ minutes a night and Reaves keeps hitting threes, this series likely ends in five.",
  },
};

// ═══════════════════════════════════════════════════════════
// DERIVED HELPERS
// ═══════════════════════════════════════════════════════════

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
  const t = team.toUpperCase();
  return playoffSeries.find(
    (s) => s.higherTeam === t || s.lowerTeam === t,
  );
}
