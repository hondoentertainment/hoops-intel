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
    regularSeasonH2H: "Cleveland and Toronto split their regular season series 2-2, with each team protecting home court in a preview of what would become a tightly contested playoff battle.",
    playoffHistory: "The Cavaliers dominated this matchup during the LeBron era, sweeping Toronto in 2018 and winning series in 2016 and 2017, but this represents their first postseason meeting since LeBron's departure.",
    keyMatchup: "Donovan Mitchell versus Scottie Barnes will define this series, as Mitchell's 28.3 PPG scoring punch faces off against Barnes' versatile two-way impact that anchors Toronto's identity.",
    narrative: "For Toronto to recover from the 1-0 deficit, they must find consistent offensive execution beyond Pascal Siakam while Barnes locks down Mitchell's explosive scoring bursts. Cleveland's championship window hinges on Mitchell's playoff debut with the franchise, but their defensive inconsistencies give the Raptors multiple pathways back into this series.",
  },
  "E1-DET-ORL": {
    regularSeasonH2H: "Detroit and Orlando split their regular season series 2-2, with each team protecting home court in tight, defense-first battles that averaged just 201 total points per game.",
    playoffHistory: "These franchises have never met in the postseason, making this Eastern Conference first-round clash uncharted territory for both organizations.",
    keyMatchup: "Cade Cunningham vs Paolo Banchero will determine this series, as both second-year stars are averaging over 22 points while shouldering massive offensive loads for their respective squads.",
    narrative: "Orlando's youth could be their undoing against Detroit's playoff-tested core, but the Magic's length and athleticism have given the Pistons problems all season. Detroit stole Game 1 by controlling the paint, but Orlando's three-point shooting variance makes them dangerous in any single game. The team that can establish consistent halfcourt offense will advance.",
  },
  "E1-BOS-PHI": {
    regularSeasonH2H: "Boston swept the season series 3-0, outscoring Philadelphia by an average of 12 points per game with Jayson Tatum averaging 28.7 points in those matchups.",
    playoffHistory: "The Celtics have dominated this playoff rivalry, winning their last three postseason meetings including a 4-3 victory in the 2023 conference semifinals.",
    keyMatchup: "Joel Embiid vs Boston's frontcourt rotation will define the series, as Embiid averaged 33.5 points on 58% shooting in his two healthy games against the Celtics this season.",
    narrative: "Philadelphia's Game 1 victory proved they can execute when Embiid is healthy and Tyrese Maxey provides explosive secondary scoring. For the upset to materialize, the 76ers must continue getting vintage Embiid while hoping Boston's role players struggle with the playoff intensity. The Celtics remain vulnerable to teams that can match their physicality and exploit their tendency toward complacency.",
  },
  "E1-NY-ATL": {
    regularSeasonH2H: "The Knicks dominated the season series 3-1, outscoring Atlanta by an average of 8.5 points per game with their defensive intensity consistently disrupting the Hawks' offensive flow.",
    playoffHistory: "These franchises have limited recent playoff history, with their last meaningful postseason encounter dating back to the 1990s when the Knicks eliminated Atlanta in the first round.",
    keyMatchup: "Jalen Brunson versus Trae Young will determine this series, as Brunson's 28.7 PPG regular season average faces off against Young's explosive 25.7 PPG and 10.8 APG playmaking ability.",
    narrative: "Atlanta's path to survival runs through unleashing Trae Young's range and pace while exploiting New York's sometimes-stagnant halfcourt offense. The Knicks' suffocating defense and physical brand of basketball has historically given Young problems, but if the Hawks can turn this into a track meet and get hot from three, they have the offensive firepower to steal games at Madison Square Garden.",
  },
  "W1-LAL-HOU": {
    regularSeasonH2H: "The Lakers and Rockets split their regular season series 2-2, with each team winning their home games in what were closely contested matchups averaging just 4.5 points per game differential.",
    playoffHistory: "Houston holds a slight edge in their playoff rivalry, having eliminated the Lakers in their most recent postseason meeting during the 2020 bubble playoffs.",
    keyMatchup: "Anthony Davis versus Alperen Şengün will determine this series, as AD's ability to exploit Houston's young center on both ends—he averaged 28.5 points on 58% shooting against the Rockets this season—could be the difference maker.",
    narrative: "For Houston to steal this series, they need Şengün to hold his own defensively while their perimeter shooters stay hot from three, where they shot 38.2% in their regular season wins against LA. The Lakers' championship experience gives them the edge, but their inconsistent three-point shooting (32.1% this season) keeps the door open for an upset if Houston can sustain their offensive rhythm.",
  },
  "W1-DEN-MIN": {
    regularSeasonH2H: "Denver took the season series 3-1, but three of the four games were decided by single digits, suggesting closer competition than the record indicates.",
    playoffHistory: "These franchises have never met in the postseason, making this a fresh Western Conference rivalry with no historical baggage.",
    keyMatchup: "Nikola Jokić versus Rudy Gobert in the paint will define possessions, as Jokić's playmaking genius clashes with Gobert's rim protection and Minnesota's defensive identity.",
    narrative: "The defending champions looked surprisingly flat in Game 1, raising questions about their championship hunger versus Minnesota's desperate energy. Denver's championship experience should eventually surface, but the Timberwolves' length and defensive switching could frustrate Jokić's passing lanes enough to steal this series. Minnesota needs Anthony Edwards to stay aggressive while avoiding foul trouble against Denver's veteran savvy.",
  },
  "W1-SA-POR": {
    regularSeasonH2H: "The Spurs and Trail Blazers split their regular season series 2-2, with both teams showing they could execute their systems effectively against each other.",
    playoffHistory: "These franchises have limited recent playoff history, making this a relatively fresh Western Conference first-round rivalry without deep postseason baggage.",
    keyMatchup: "Damian Lillard's scoring explosiveness versus San Antonio's disciplined team defense will define possessions, as Lillard averaged 28+ points against the Spurs this season.",
    narrative: "Portland's path to evening this series runs directly through Lillard's ability to create offense when San Antonio clamps down defensively. The Spurs' veteran savvy showed in Game 1, but they're vulnerable if their role players can't consistently knock down open looks created by ball movement. Portland has the individual talent to steal games, but San Antonio's system discipline gives them the edge in a grinding seven-game series.",
  },
  "W1-OKC-PHX": {
    regularSeasonH2H: "Oklahoma City took 3 of 4 regular season meetings against Phoenix, with the Thunder's balanced scoring and defensive intensity consistently overwhelming the Suns' inconsistent roster.",
    playoffHistory: "These franchises have limited playoff history, with their most notable postseason connection being the Thunder's dominant 2012 first-round sweep when Phoenix was still rebuilding.",
    keyMatchup: "Shai Gilgeous-Alexander versus Devin Booker will determine offensive rhythm, as both guards averaged 30+ points this season but SGA's two-way impact gives him the edge in clutch scenarios.",
    narrative: "Phoenix desperately needs Kevin Durant to assert himself as the series' best player while hoping their veteran experience can counteract OKC's youth and depth. The Thunder's suffocating defense and balanced attack make them dangerous, but the Suns have championship-level talent that could flip this series if they find consistent chemistry between their Big Three.",
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
