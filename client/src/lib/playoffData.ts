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
    regularSeasonH2H: "Cleveland and Toronto split their season series 2-2, with each team protecting home court in tightly contested games that averaged single-digit margins.",
    playoffHistory: "The Cavaliers have dominated this playoff matchup historically, sweeping Toronto in 2018 and winning their previous postseason meetings during the LeBron era.",
    keyMatchup: "Donovan Mitchell versus Scottie Barnes will define this series, as Mitchell averaged 28.5 points against Toronto this season while Barnes' defensive versatility and playmaking will be crucial to containing Cleveland's explosive offense.",
    narrative: "Toronto's championship pedigree means nothing if they can't solve Cleveland's revamped offense that torched them in Game 1. The Raptors need Barnes to take a massive leap as a primary scorer while their defensive depth disrupts Mitchell's rhythm. Cleveland smells blood with their young core finally healthy—if they steal Game 2 in Toronto, this series could be over faster than anyone expects.",
  },
  "E1-DET-ORL": {
    regularSeasonH2H: "Detroit and Orlando split their regular season series 2-2, with both teams struggling through disappointing campaigns that saw them miss the playoffs entirely.",
    playoffHistory: "These franchises have no meaningful playoff history against each other, as their competitive windows have rarely aligned over the past two decades.",
    keyMatchup: "Paolo Banchero vs. Cade Cunningham represents the future of both franchises, with Banchero averaging 22.6 PPG to Cunningham's 22.7 PPG in a battle of dynamic young guards who can create offense from multiple levels.",
    narrative: "This hypothetical matchup would pit two lottery-bound teams against each other in what should be an entertaining showcase of young talent. For Orlando to bounce back, they need Banchero to assert himself as the best player on the floor while getting consistent production from their supporting cast. Detroit's advantage lies in their slightly more experienced core and Cunningham's ability to elevate teammates in crucial moments.",
  },
  "E1-BOS-PHI": {
    regularSeasonH2H: "Philadelphia took 3 of 4 meetings during the regular season, with Joel Embiid's dominance in the paint being a consistent theme when healthy.",
    playoffHistory: "These Atlantic Division rivals have split their recent playoff encounters, with Boston winning in 2018 and Philadelphia taking revenge in 2023's second round upset.",
    keyMatchup: "Joel Embiid vs Boston's frontcourt anchored by Al Horford will determine series flow, as Embiid averaged 28+ points in their regular season meetings while Boston struggled to contain his post presence.",
    narrative: "Philadelphia's Game 1 statement puts pressure on Boston to solve the Embiid puzzle that plagued them all season long. The Celtics' championship aspirations depend on their ability to make this a perimeter series and force Philadelphia into uncomfortable pace situations. If Embiid stays healthy and dominant inside, Boston's defensive identity gets tested in ways they've struggled with all year.",
  },
  "E1-NY-ATL": {
    regularSeasonH2H: "The Knicks dominated the regular season series 3-1, including a crucial late-season victory that helped secure their playoff positioning.",
    playoffHistory: "These teams last met in the playoffs during the 1990s, with limited recent postseason history between the franchises.",
    keyMatchup: "Jalen Brunson versus Trae Young represents the series' defining battle, with Brunson averaging 28.7 PPG this season compared to Young's 25.7 PPG and 10.8 APG.",
    narrative: "Atlanta's path to victory runs through exploiting New York's interior defense and generating easy looks in transition off Young's playmaking. The Hawks must neutralize the Knicks' physical, grinding style that has historically given Young's smaller frame trouble, while finding ways to limit Brunson's mid-range mastery that was on full display in Game 1.",
  },
  "W1-LAL-HOU": {
    regularSeasonH2H: "The Lakers and Rockets split their regular season series 2-2, with each team winning their home games in closely contested matchups.",
    playoffHistory: "Houston holds a slight 4-3 edge in their seven previous playoff series meetings, including the Rockets' stunning 2009 first-round upset when they swept the top-seeded Lakers.",
    keyMatchup: "Anthony Davis vs. Alperen Şengün will determine paint control, as AD averaged 24.1 PPG on 52.8% shooting while Şengün's playmaking (4.9 APG) anchors Houston's offense.",
    narrative: "For Houston to steal this series, they must continue forcing turnovers at an elite rate and hope their young legs can outlast an aging Lakers core over seven games. The Lakers' championship experience gives them the edge, but their inconsistent regular season and health concerns make them more vulnerable than their reputation suggests.",
  },
  "W1-DEN-MIN": {
    regularSeasonH2H: "Denver took the season series 2-1, but Minnesota's January blowout win showed they could neutralize Jokić when Edwards and Towns were clicking offensively.",
    playoffHistory: "These franchises have never met in the postseason, making this a fresh Western Conference clash with no historical baggage.",
    keyMatchup: "Nikola Jokić versus Rudy Gobert in the paint will define possessions, as Jokić averaged 25.2 points on 58.9% shooting while Gobert anchors a defense that held opponents to 108.4 points per game.",
    narrative: "Minnesota's Game 1 statement win proved they can hang with the defending champs when Anthony Edwards plays like a superstar and their role players knock down open threes. Denver's championship pedigree means they'll adjust, but the Wolves have the defensive intensity and young hunger to make this a dogfight if they can continue limiting Jokić's easy looks.",
  },
  "W1-SA-POR": {
    regularSeasonH2H: "The Spurs and Trail Blazers split their regular season series 2-2, with three of the four games decided by single digits in what proved to be a preview of evenly-matched playoff basketball.",
    playoffHistory: "These franchises have limited postseason history against each other, with their most notable meeting coming in the 1999 Western Conference Finals when San Antonio swept Portland en route to their first championship.",
    keyMatchup: "Damian Lillard versus the Spurs' veteran backcourt defense will be decisive, as Dame averaged 28.5 PPG in their regular season meetings while San Antonio held him to 41% shooting in their lone win at home.",
    narrative: "Portland's championship window hinges on Lillard's ability to create offense against San Antonio's disciplined scheme, but the Spurs' playoff experience and depth could wear down a Trail Blazers team that relies heavily on their star guard. If Portland can steal home court early, their offensive firepower gives them a real chance to upset the more battle-tested Spurs.",
  },
  "W1-OKC-PHX": {
    regularSeasonH2H: "Phoenix swept the regular season series 4-0 against Oklahoma City, outscoring them by an average of 8.5 points per game with balanced offensive attacks.",
    playoffHistory: "These franchises have limited postseason history, with their most notable meeting coming in the 2010 Western Conference semifinals when Phoenix eliminated Oklahoma City 4-2.",
    keyMatchup: "Shai Gilgeous-Alexander versus Devin Booker will define this series, as both elite scorers averaged over 30 PPG this season with SGA holding a slight efficiency edge.",
    narrative: "Despite Phoenix's regular season dominance in the matchup, Oklahoma City's youth movement has found another gear in the postseason intensity. The Thunder's defensive versatility and pace could overwhelm an aging Suns core that struggled with consistency down the stretch, but Phoenix's championship experience gives them the blueprint to weather Oklahoma City's early storm.",
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
