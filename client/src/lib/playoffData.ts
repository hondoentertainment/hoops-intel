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
    regularSeasonH2H: "Cleveland swept the season series 3-0 against Toronto, outscoring them by an average of 12 points per game behind dominant frontcourt play.",
    playoffHistory: "The Cavaliers have historically owned this matchup, winning their previous playoff series 4-0 in 2018 during LeBron's final Cleveland run.",
    keyMatchup: "Donovan Mitchell vs. Scottie Barnes will define this series, as Mitchell averaged 28.5 points on 47% shooting in the regular season meetings while Barnes struggled with his outside shot.",
    narrative: "Toronto's championship experience means nothing without the core that delivered it, and their inconsistent offense has been exposed by Cleveland's length and athleticism. For the Raptors to avoid another early exit, they need Barnes to step up as a legitimate first option and find ways to generate easy baskets against a Cavs defense that's suffocating in half-court sets. Cleveland's biggest vulnerability remains their fourth-quarter execution, where their youth sometimes shows in crucial moments.",
  },
  "E1-DET-ORL": {
    regularSeasonH2H: "Detroit and Orlando split their regular season series 2-2, with both teams struggling through disappointing campaigns that saw them miss the playoffs entirely.",
    playoffHistory: "These franchises have never met in the postseason, making this a historic first-time playoff matchup between two rebuilding Eastern Conference teams.",
    keyMatchup: "Cade Cunningham versus Paolo Banchero represents the clash of two young franchise cornerstones, with Cunningham averaging 22.7 PPG to Banchero's 20.0 PPG this season.",
    narrative: "Both teams enter as massive underdogs having somehow squeezed into playoff contention despite sub-.500 records. Detroit's early series lead suggests their veteran additions around Cunningham are paying dividends, but Orlando's youth and athleticism could wear down the Pistons over a seven-game grind. This series will likely be decided by which young core can handle the playoff pressure better.",
  },
  "E1-BOS-PHI": {
    regularSeasonH2H: "Boston dominated the regular season series 3-1, outscoring Philadelphia by an average of 8.5 points per game with their superior depth and execution in clutch moments.",
    playoffHistory: "The Celtics have owned this matchup historically, winning their last three playoff series meetings including a 4-1 dismantling in 2020 and a 4-3 thriller in 2023.",
    keyMatchup: "Jayson Tatum versus Joel Embiid will dictate everything, as Tatum's 27.0 PPG regular season average against Philly suggests he can exploit their perimeter defense while Embiid's dominant Game 1 (32 points, 13 rebounds) showed he's healthy enough to carry Philadelphia.",
    narrative: "Philadelphia's championship window hinges on Embiid staying healthy and Paul George finding his playoff rhythm after an inconsistent regular season. Boston's deeper roster should wear down the Sixers over seven games, but if Embiid can dominate the paint and Tyrese Maxey continues his explosive scoring, this series could flip quickly. The Celtics' championship pedigree means nothing if they can't solve Philadelphia's newfound defensive intensity.",
  },
  "E1-NY-ATL": {
    regularSeasonH2H: "The Knicks and Hawks split their regular season series 2-2, with each team protecting home court in a competitive season series that featured close games and similar offensive efficiency.",
    playoffHistory: "New York holds a 2-1 advantage in their limited playoff meetings, including a memorable first-round victory in 2021 when the Knicks dispatched Atlanta 4-1 behind strong home court play at Madison Square Garden.",
    keyMatchup: "Jalen Brunson versus Trae Young will determine this series, as Brunson's improved playoff efficiency (24.8 PPG on 47% shooting last postseason) must counter Young's explosive scoring ability and court vision that makes Atlanta's offense click.",
    narrative: "Atlanta's path to evening this series runs directly through containing Brunson's pick-and-roll mastery while getting Young consistent help from their inconsistent supporting cast. The Knicks' defensive improvements under Tom Thibodeau make them dangerous, but their offensive ceiling remains capped if role players can't step up beyond their top two scorers.",
  },
  "W1-LAL-HOU": {
    regularSeasonH2H: "The Lakers and Rockets split their regular season series 2-2, with both teams struggling with consistency throughout the campaign.",
    playoffHistory: "Houston holds a slight 7-6 edge in their playoff meetings, including memorable battles in the 1980s Showtime era and the Rockets' championship runs of the 1990s.",
    keyMatchup: "LeBron James versus whoever Houston throws at him defensively will dictate pace and tempo, as the 39-year-old averaged 25.7 PPG this season while the Rockets allowed just 110.9 points per game.",
    narrative: "For Houston to steal this series, they must force the Lakers into their frenetic pace while exploiting LA's defensive inconsistencies that plagued them all season. The Lakers' championship experience gives them the edge, but their aging roster and chemistry questions make them vulnerable to a hungry young Rockets team that has nothing to lose.",
  },
  "W1-DEN-MIN": {
    regularSeasonH2H: "Minnesota took 3 of 4 regular season meetings against Denver, including a dominant 27-point victory in their final matchup that showcased their ability to neutralize the defending champions.",
    playoffHistory: "These Western Conference rivals have never met in the playoffs despite both franchises' long histories, making this a fresh postseason storyline.",
    keyMatchup: "Nikola Jokic versus Rudy Gobert in the paint will define possessions, as the reigning Finals MVP averaged 29.7 points on 58.7% shooting against Minnesota this season while Gobert anchors the league's stingiest defense.",
    narrative: "Denver's championship pedigree means nothing if they can't solve Minnesota's suffocating defense that held them to just 98 points in Game 1. The Nuggets' supporting cast must step up to complement Jokic, while the Timberwolves need Anthony Edwards to maintain his explosive scoring to pull off what would be a seismic upset of the defending champions.",
  },
  "W1-SA-POR": {
    regularSeasonH2H: "San Antonio and Portland split their regular season series 2-2, with each team protecting home court in tightly contested games that averaged just 4.5 points separation.",
    playoffHistory: "These franchises have limited postseason history against each other, with their most notable clash coming in the 1999 Western Conference semifinals when the Spurs swept Portland en route to their first championship.",
    keyMatchup: "Damian Lillard versus the Spurs' defensive schemes will be decisive, as Portland's offense flows through their All-Star guard who averaged 28.8 points against San Antonio this season while shooting 38% from deep.",
    narrative: "Portland must find consistent secondary scoring beyond Lillard to avoid the predictable late-game traps that have historically plagued their playoff runs. San Antonio's veteran savvy and defensive discipline give them edges in execution, but their aging core could be exploited if Portland pushes pace and creates transition opportunities.",
  },
  "W1-OKC-PHX": {
    regularSeasonH2H: "Phoenix took the season series 3-1 against Oklahoma City, but three of those four games were decided by single digits in what proved to be competitive matchups between two young, athletic teams.",
    playoffHistory: "This marks the first playoff meeting between these franchises since the Thunder relocated from Seattle, giving this series a fresh-slate dynamic without historical baggage.",
    keyMatchup: "Shai Gilgeous-Alexander versus Devin Booker will determine the series outcome, with SGA averaging 30.1 PPG this season compared to Booker's 27.1 PPG in a battle of elite scoring guards.",
    narrative: "Phoenix entered as the betting favorite but now faces the hostile environment of Paycom Center down 0-1, where OKC's young core has shown they can match the Suns' veteran savvy. The Thunder's depth and defensive intensity could overwhelm a Phoenix team that has struggled with consistency all season. For the Suns to recover, they need Kevin Durant to assert his playoff pedigree and take over games while hoping Chris Paul can still orchestrate their offense at age 38.",
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
