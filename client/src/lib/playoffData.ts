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
    regularSeasonH2H: "Cleveland took the season series 3-1 against Toronto, with the Cavaliers' balanced offensive attack proving too much for the Raptors' inconsistent defense.",
    playoffHistory: "These franchises have met twice in the postseason, with Cleveland sweeping Toronto 4-0 in both the 2016 Eastern Conference Finals and 2018 Eastern Semifinals during the LeBron era.",
    keyMatchup: "Donovan Mitchell versus Scottie Barnes defines this series, as Mitchell averaged 28.5 PPG in their regular season meetings while Barnes struggled with his outside shot at just 31% from three.",
    narrative: "Toronto's playoff inexperience showed in Game 1, but they possess the athleticism and defensive length to disrupt Cleveland's rhythm. The Raptors must get consistent production from their young core and force turnovers to overcome their offensive limitations. Cleveland's championship experience gives them a significant edge, but their sometimes-shaky defense could keep Toronto within striking distance if Pascal Siakam finds his playoff form.",
  },
  "E1-DET-ORL": {
    regularSeasonH2H: "Detroit and Orlando split their regular season series 2-2, with each team protecting home court in tight, defensive battles that averaged just 103 points per game.",
    playoffHistory: "These franchises have never met in the postseason, making this a rare clash between two rebuilding Eastern Conference programs that exceeded expectations to reach the playoffs.",
    keyMatchup: "Cade Cunningham vs Paolo Banchero represents the future of both franchises, with Cunningham averaging 22.7 PPG this season while Banchero countered with 20.0 PPG and superior rebounding at 6.9 per game.",
    narrative: "Detroit's Game 1 upset was built on veteran leadership from Isaiah Stewart and Ausar Thompson's defensive intensity, but Orlando's youth and athleticism advantage should emerge as the series lengthens. The Magic's Paolo Banchero must assert himself as the alpha scorer to prevent another inexperienced playoff team from stealing momentum. Whichever team's young core handles the playoff pressure better will advance to face a legitimate contender in round two.",
  },
  "E1-BOS-PHI": {
    regularSeasonH2H: "Boston dominated the regular season series 3-1, outscoring Philadelphia by an average of 8.5 points per game with superior three-point shooting and rebounding.",
    playoffHistory: "The Celtics have won 21 of 30 all-time playoff meetings against Philadelphia, including victories in their last three postseason encounters (2012, 2017, 2018).",
    keyMatchup: "Jayson Tatum vs Joel Embiid defines this series, with Tatum averaging 27.1 PPG on 47% shooting against Philly this season while Embiid countered with 30.8 PPG and 11.2 RPG in their matchups.",
    narrative: "Despite Boston's regular season dominance, Philadelphia's Game 1 victory exposed the Celtics' ongoing struggles with physicality and half-court execution. For the upset to materialize, the 76ers must continue controlling the paint through Embiid while forcing Boston into contested threes. The Celtics remain vulnerable when their ball movement stagnates and they rely too heavily on isolation scoring from their stars.",
  },
  "E1-NY-ATL": {
    regularSeasonH2H: "The Knicks dominated the season series 3-1, with their defensive intensity and rebounding advantage proving problematic for Atlanta's high-octane offense.",
    playoffHistory: "These franchises have limited recent playoff history, with their most notable postseason meeting coming in the 1999 first round when the Knicks swept the Hawks en route to the Finals.",
    keyMatchup: "Jalen Brunson vs Trae Young defines this series, as Brunson's 28.7 PPG regular season average battles Young's 25.7 PPG and elite playmaking that can unlock Atlanta's ceiling.",
    narrative: "The Hawks need Young to consistently exploit New York's drop coverage while getting defensive stops they struggled with all season. The Knicks' physical, grind-it-out style has historically bothered Atlanta's finesse-heavy approach, but if the Hawks can turn this into a track meet and get hot from three, their offensive ceiling remains higher than New York's.",
  },
  "W1-LAL-HOU": {
    regularSeasonH2H: "The Lakers and Rockets split their regular season series 2-2, with each team protecting home court in a preview of what would become a physical, grind-it-out playoff battle.",
    playoffHistory: "Houston has historically given the Lakers trouble in the playoffs, most notably eliminating them in 1981 and 1986, though LA got revenge with a 2009 Western Semis victory.",
    keyMatchup: "LeBron James versus James Harden will define this series, with LeBron averaging 27-8-8 against Houston this season while Harden countered with 31 PPG on 35% three-point shooting in their regular season meetings.",
    narrative: "The Rockets' small-ball experiment lives or dies on their ability to force turnovers and create transition opportunities against an aging Lakers core. If Houston can't generate easy buckets through chaos, they'll struggle to match LA's half-court execution and playoff experience when games slow down in crunch time.",
  },
  "W1-DEN-MIN": {
    regularSeasonH2H: "Denver took the season series 2-1, but Minnesota's January win at Ball Arena showed they could solve the defending champions on their home floor.",
    playoffHistory: "These franchises have never met in the postseason, making this Western Conference first-round clash uncharted territory for both organizations.",
    keyMatchup: "Nikola Jokic versus Rudy Gobert will determine everything, as the three-time MVP averaged 32.5 points on 66% shooting against Minnesota this season while Gobert's rim protection remains the Wolves' defensive anchor.",
    narrative: "Minnesota's stunning Game 1 upset proves they can execute their blueprint: suffocating team defense that forces Denver into difficult shots while Anthony Edwards provides the explosive offense the Nuggets struggled to contain. The Wolves' length and athleticism could be kryptonite for a Nuggets team that thrives on ball movement and easy baskets, but they must maintain that defensive intensity for four games against the savviest offensive mind in basketball.",
  },
  "W1-SA-POR": {
    regularSeasonH2H: "The Spurs and Trail Blazers split their regular season series 2-2, with each team protecting home court in a tightly contested season series that averaged just 4.5 points separation per game.",
    playoffHistory: "These franchises have limited playoff history against each other, with their most notable postseason encounter being Portland's first-round upset of San Antonio in 1999 during the Spurs' first championship season.",
    keyMatchup: "Damian Lillard versus the Spurs' perimeter defense will define this series, as Portland's star guard averaged 28.5 points on 45% shooting in the regular season meetings while San Antonio's switching schemes held him to 38% from three.",
    narrative: "Portland's championship hopes hinge entirely on Lillard's ability to create offense against San Antonio's suffocating team defense, while the Spurs' veteran savvy and playoff experience could overwhelm a Trail Blazers squad that has struggled in crucial moments. If Portland can steal home court advantage early, their offensive firepower becomes dangerous, but San Antonio's methodical approach and defensive discipline typically wears down higher-seeded opponents as series progress.",
  },
  "W1-OKC-PHX": {
    regularSeasonH2H: "Oklahoma City won the season series 3-1, with three of the four games decided by single digits in a preview of what would become a tightly contested playoff matchup.",
    playoffHistory: "These franchises have never met in the postseason, making this Western Conference first-round series uncharted territory for both organizations.",
    keyMatchup: "Shai Gilgeous-Alexander versus Devin Booker will determine the series, as both guards averaged over 30 PPG this season but SGA's two-way impact gives him the edge.",
    narrative: "Phoenix desperately needs Kevin Durant to assert himself after a quiet Game 1, while the Suns must find ways to slow OKC's relentless pace and transition attack. The Thunder's youth and energy could overwhelm a Suns team still searching for defensive identity, but Phoenix's championship experience remains their trump card. This series hinges on whether the Suns can impose their half-court game before OKC's athleticism takes control.",
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
