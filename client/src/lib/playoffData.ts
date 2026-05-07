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
    seriesId: "E1-CLE-TOR",
    conference: "east",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "CLE",
    lowerTeam: "TOR",
    higherWins: 1,
    lowerWins: 0,
    status: "active",
    summary: "CLE leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-05-03", homeTeam: "CLE", awayTeam: "TOR", homeScore: 114, awayScore: 102, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Scottie Barnes", topLine: "24 PTS · 9 REB · 6 AST" }
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
    higherWins: 1,
    lowerWins: 0,
    status: "active",
    summary: "DET leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-05-03", homeTeam: "DET", awayTeam: "ORL", homeScore: 116, awayScore: 94, status: "final", time: "Final", tv: "ABC", topPerformer: "Paolo Banchero", topLine: "38 PTS · 9 REB · 6 AST" }
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
    lowerWins: 1,
    status: "active",
    summary: "PHI leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-05-02", homeTeam: "BOS", awayTeam: "PHI", homeScore: 100, awayScore: 109, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Joel Embiid", topLine: "34 PTS · 12 REB · 6 AST" }
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
    higherWins: 1,
    lowerWins: 0,
    status: "active",
    summary: "NY leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-04-30", homeTeam: "ATL", awayTeam: "NY", homeScore: 89, awayScore: 140, status: "final", time: "Final", tv: "ESPN", topPerformer: "OG Anunoby", topLine: "29 PTS · 7 REB · 2 AST" }
    ],
  },
  {
    seriesId: "W1-LAL-HOU",
    conference: "west",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "LAL",
    lowerTeam: "HOU",
    higherWins: 1,
    lowerWins: 0,
    status: "active",
    summary: "LAL leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-05-01", homeTeam: "HOU", awayTeam: "LAL", homeScore: 78, awayScore: 98, status: "final", time: "Final", tv: "Prime Video", topPerformer: "LeBron James", topLine: "28 PTS · 7 REB · 8 AST" }
    ],
  },
  {
    seriesId: "W1-DEN-MIN",
    conference: "west",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "DEN",
    lowerTeam: "MIN",
    higherWins: 0,
    lowerWins: 1,
    status: "active",
    summary: "MIN leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-04-30", homeTeam: "MIN", awayTeam: "DEN", homeScore: 110, awayScore: 98, status: "final", time: "Final", tv: "ESPN", topPerformer: "Jaden McDaniels", topLine: "32 PTS · 10 REB · 3 AST" }
    ],
  },
  {
    seriesId: "W1-SA-POR",
    conference: "west",
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
      { gameNumber: 1, date: "2026-04-28", homeTeam: "SA", awayTeam: "POR", homeScore: 114, awayScore: 95, status: "final", time: "Final", tv: "ESPN", topPerformer: "Deni Avdija", topLine: "22 PTS · 3 REB · 3 AST" }
    ],
  },
  {
    seriesId: "W1-OKC-PHX",
    conference: "west",
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
      { gameNumber: 1, date: "2026-04-27", homeTeam: "PHX", awayTeam: "OKC", homeScore: 122, awayScore: 131, status: "final", time: "Final", tv: "NBCSN, Peacock", topPerformer: "Shai Gilgeous-Alexander", topLine: "31 PTS · 2 REB · 8 AST" }
    ],
  }
];
// END_PLAYOFF_SERIES_SYNC

export const playoffMovers: PlayoffPulseMover[] = [
  {
    player: "Joel Embiid",
    team: "PHI",
    direction: "riser",
    delta: 8,
    playoffLine: "34.0 PPG · 12.0 RPG · 6.0 APG",
    note: "Game 1 statement in Boston—Embiid set the physical tone and closed late as Philly stole home court from the Celtics.",
  },
  {
    player: "Jaylen Brown",
    team: "BOS",
    direction: "riser",
    delta: 6,
    playoffLine: "33.0 PPG · 9.0 RPG · 4.0 APG",
    note: "Kept Boston within striking distance despite the loss; two-way work on the wing matched Philly's star volume.",
  },
  {
    player: "Jaden McDaniels",
    team: "MIN",
    direction: "riser",
    delta: 7,
    playoffLine: "32.0 PPG · 10.0 RPG · 3.0 APG",
    note: "Paced Minnesota's upset opener—length and shot-making on the perimeter tilted the Denver matchup early.",
  },
  {
    player: "Karl-Anthony Towns",
    team: "NY",
    direction: "faller",
    delta: -5,
    playoffLine: "12.0 PPG · 25.0% FG",
    note: "Cold shooting night in the rout at Atlanta; Knicks still piled up points behind the wings as the bigs fed the blender.",
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

/** Keys MUST match `seriesId` from synced `playoffSeries` (E1-/W1-/F… + round). */
export const seriesIntel: Record<string, SeriesIntel> = {
  "E1-CLE-TOR": {
    regularSeasonH2H: "Cleveland and Toronto split their regular season series 2-2, with both teams showing they could match each other's intensity in closely contested games.",
    playoffHistory: "The Cavaliers have dominated this postseason rivalry, sweeping Toronto in both 2017 and 2018 while LeBron James systematically dismantled the Raptors' championship hopes.",
    keyMatchup: "Donovan Mitchell versus Scottie Barnes will define this series, as Mitchell's 28.3 PPG scoring ability battles Barnes' versatile defense and playmaking that anchors Toronto's identity.",
    narrative: "For Toronto to overcome their psychological scars against Cleveland, they must win the rebounding battle and force Mitchell into difficult shots while hoping their depth can exploit Cleveland's inconsistent bench production. The Cavaliers remain vulnerable when their offense stagnates, but their size advantage with Jarrett Allen and Evan Mobley could prove decisive if they control the paint throughout the series.",
  },
  "E1-DET-ORL": {
    regularSeasonH2H: "Detroit and Orlando split their regular season series 2-2, with each team protecting home court in a preview of what would become a grinding, defense-first playoff battle.",
    playoffHistory: "These franchises have never met in the postseason, making this Eastern Conference first round clash a clean slate for both organizations.",
    keyMatchup: "Paolo Banchero vs. Isaiah Stewart in the paint will determine tempo, as Banchero averaged 23.1 PPG on 45.5% shooting while Stewart anchored Detroit's interior defense at 8.1 rebounds per game.",
    narrative: "Orlando's youth showed in Game 1's fourth quarter collapse, but their athleticism and Paolo's emergence give them the higher ceiling if they can solve Detroit's physical, grind-it-out approach. The Pistons know they need to steal road games early because their veteran-laden roster doesn't have the legs for a seven-game war. Detroit's experience advantage is real, but Orlando's talent gap closer than the Game 1 result suggests.",
  },
  "E1-BOS-PHI": {
    regularSeasonH2H: "Boston dominated the regular season series 3-1, with the Celtics' superior depth and offensive efficiency consistently overwhelming Philadelphia's top-heavy roster.",
    playoffHistory: "These Atlantic Division rivals have split their last two playoff meetings, with Philadelphia stunning Boston in 2018 before the Celtics returned the favor in 2020's first round.",
    keyMatchup: "Jayson Tatum versus Joel Embiid will define this series, as Tatum's 27.0 PPG regular season average faces off against Embiid's dominant 28.5 PPG and rim protection.",
    narrative: "Philadelphia's Game 1 victory exposed Boston's persistent road woes and over-reliance on three-point shooting. For the upset to materialize, the Sixers must continue getting dominant paint scoring from Embiid while James Harden rediscovers his playoff magic. Boston remains vulnerable when their role players disappear and they abandon ball movement for hero-ball possessions.",
  },
  "E1-NY-ATL": {
    regularSeasonH2H: "The Knicks took 3 of 4 regular season meetings against Atlanta, including a dominant 36-point blowout at Madison Square Garden that showcased their defensive intensity.",
    playoffHistory: "These franchises haven't met in the postseason since the Knicks eliminated Atlanta in the 1999 Eastern Conference semifinals, ending a brief but competitive 90s rivalry.",
    keyMatchup: "Jalen Brunson versus Trae Young will determine this series, as Brunson's efficient scoring (28.7 PPG in regular season) must continue to outweigh Young's explosive but inconsistent playmaking.",
    narrative: "Atlanta's path to an upset runs through Young finding his three-point stroke and the Hawks generating enough stops against New York's methodical halfcourt attack. The Knicks' suffocating defense and superior depth make them heavy favorites, but Young's ability to single-handedly torch elite defenses keeps this from being a complete mismatch.",
  },
  "W1-LAL-HOU": {
    regularSeasonH2H: "The Lakers and Rockets split their regular season series 2-2, with each team winning their home games in closely contested matchups.",
    playoffHistory: "Houston holds a slight 3-2 edge in their previous playoff series meetings, including their memorable 2009 Western semifinals clash where the Lakers prevailed in seven games en route to their championship.",
    keyMatchup: "Anthony Davis versus Alperen Şengün in the paint will determine this series, as AD's 24.7 PPG and elite rim protection faces off against the Rockets' versatile big man who averaged 11.0 rebounds and 5.0 assists this season.",
    narrative: "For Houston to steal this series, they must continue their relentless pace that pushed them into the playoffs and hope their young core can handle the Lakers' playoff experience. The Rockets' biggest vulnerability remains their youth in crucial moments, while LA's aging stars need to prove they can sustain energy over a grueling seven-game series against Houston's fresh legs.",
  },
  "W1-DEN-MIN": {
    regularSeasonH2H: "Denver took the season series 2-1, but Minnesota's lone win came in their final meeting when they dominated by 21 points at home in March.",
    playoffHistory: "These franchises have never met in the postseason, making this Western Conference first-round clash a fresh chapter in their rivalry.",
    keyMatchup: "Nikola Jokic versus Rudy Gobert will define this series, as the reigning Finals MVP averaged 29.7 points on 58% shooting against Minnesota this season while Gobert anchored the league's best defense.",
    narrative: "Minnesota's shocking Game 1 upset proves they can neutralize Denver's offensive flow when their defense forces contested shots and limits second chances. For the Wolves to complete this monumental upset, they must continue making Jokic work for every possession while Anthony Edwards stays aggressive attacking Denver's suspect perimeter defense. The defending champions are most vulnerable when their role players go cold and they rely too heavily on their two-man game.",
  },
  "W1-SA-POR": {
    regularSeasonH2H: "The Spurs and Trail Blazers split their regular season series 2-2, with each team protecting home court in a back-and-forth battle that foreshadowed this tight playoff matchup.",
    playoffHistory: "These franchises have limited playoff history against each other, with their most notable postseason meeting coming in the 1999 Western Conference Finals when San Antonio swept Portland en route to their first championship.",
    keyMatchup: "Damian Lillard vs the Spurs' switching defense will define this series, as Portland's superstar guard averaged 28.9 PPG on 37% from three against San Antonio this season.",
    narrative: "Portland needs Lillard to stay nuclear from deep while CJ McCollum provides consistent secondary scoring to overcome San Antonio's playoff experience. The Spurs are vulnerable if their aging core can't match Portland's pace over seven games, but their championship DNA and superior depth make them dangerous in any extended series.",
  },
  "W1-OKC-PHX": {
    regularSeasonH2H: "The Thunder took the season series 3-1 against Phoenix, with their balanced offensive attack consistently overwhelming the Suns' inconsistent defense.",
    playoffHistory: "These franchises have limited postseason history, with their most notable clash coming in the 2010 Western Conference semifinals when Phoenix eliminated OKC 4-2.",
    keyMatchup: "Shai Gilgeous-Alexander versus Devin Booker will define this series, as SGA's two-way excellence (30.1 PPG, 6.2 AST) must continue to outshine Booker's explosive scoring bursts.",
    narrative: "Phoenix's championship window is rapidly closing, and they need Kevin Durant to channel his vintage playoff magic while the supporting cast finally shows up consistently. The Thunder's youth and depth make them dangerous, but their inexperience in high-pressure moments could be exploited by a desperate Suns team with nothing left to lose.",
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
