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
    seriesId: "E1-NY-PHI",
    conference: "east",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "NY",
    lowerTeam: "PHI",
    higherWins: 1,
    lowerWins: 0,
    status: "active",
    summary: "NY leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-05-10", homeTeam: "PHI", awayTeam: "NY", homeScore: 114, awayScore: 144, status: "final", time: "Final", tv: "ABC", topPerformer: "Miles McBride", topLine: "25 PTS · 4 REB · 0 AST" }
    ],
  },
  {
    seriesId: "E1-TOR-CLE",
    conference: "east",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "TOR",
    lowerTeam: "CLE",
    higherWins: 0,
    lowerWins: 1,
    status: "active",
    summary: "CLE leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-05-03", homeTeam: "CLE", awayTeam: "TOR", homeScore: 114, awayScore: 102, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Scottie Barnes", topLine: "24 PTS · 9 REB · 6 AST" }
    ],
  },
  {
    seriesId: "E1-ORL-DET",
    conference: "east",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "ORL",
    lowerTeam: "DET",
    higherWins: 0,
    lowerWins: 1,
    status: "active",
    summary: "DET leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-05-03", homeTeam: "DET", awayTeam: "ORL", homeScore: 116, awayScore: 94, status: "final", time: "Final", tv: "ABC", topPerformer: "Paolo Banchero", topLine: "38 PTS · 9 REB · 6 AST" }
    ],
  },
  {
    seriesId: "W1-OKC-LAL",
    conference: "west",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "OKC",
    lowerTeam: "LAL",
    higherWins: 1,
    lowerWins: 0,
    status: "active",
    summary: "OKC leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-05-11", homeTeam: "LAL", awayTeam: "OKC", homeScore: 110, awayScore: 115, status: "final", time: "Final", tv: "Prime Video", topPerformer: "Shai Gilgeous-Alexander", topLine: "35 PTS · 1 REB · 8 AST" }
    ],
  },
  {
    seriesId: "W1-MIN-DEN",
    conference: "west",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "MIN",
    lowerTeam: "DEN",
    higherWins: 1,
    lowerWins: 0,
    status: "active",
    summary: "MIN leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-04-30", homeTeam: "MIN", awayTeam: "DEN", homeScore: 110, awayScore: 98, status: "final", time: "Final", tv: "ESPN", topPerformer: "Jaden McDaniels", topLine: "32 PTS · 10 REB · 3 AST" }
    ],
  },
  {
    seriesId: "W1-POR-SA",
    conference: "west",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "POR",
    lowerTeam: "SA",
    higherWins: 0,
    lowerWins: 1,
    status: "active",
    summary: "SA leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-04-28", homeTeam: "SA", awayTeam: "POR", homeScore: 114, awayScore: 95, status: "final", time: "Final", tv: "ESPN", topPerformer: "Deni Avdija", topLine: "22 PTS · 3 REB · 3 AST" }
    ],
  }
];
// END_PLAYOFF_SERIES_SYNC

export const playoffMovers: PlayoffPulseMover[] = [
  {
    player: "James Harden",
    team: "CLE",
    direction: "riser",
    delta: 14,
    playoffLine: "30.0 PPG · 8.0 RPG · 6.0 APG · 3 BLK (Game 5)",
    note: "Playoff-best 30 points with 11-14 FT and 3 blocks drove Cleveland's 9-point comeback in the final minutes. The Beard's best game in two years puts CLE one win from the East Finals.",
  },
  {
    player: "Max Strus",
    team: "CLE",
    direction: "riser",
    delta: 12,
    playoffLine: "20.0 PPG · 8.0 RPG · 6-8 3PT (Game 5)",
    note: "6-of-8 from three (75%) for 20 points in the OT win — the most efficient three-point shooting performance of the 2026 playoffs. CLE's X-factor.",
  },
  {
    player: "Cade Cunningham",
    team: "DET",
    direction: "riser",
    delta: 8,
    playoffLine: "39.0 PPG · 7.0 RPG · 9.0 APG (Game 5)",
    note: "39/7/9 with 6 threes in 48 minutes — the best individual performance by a losing player in the 2026 playoffs. Facing elimination despite his brilliance.",
  },
  {
    player: "Tobias Harris",
    team: "DET",
    direction: "faller",
    delta: -10,
    playoffLine: "13.0 PPG · 6.0 RPG · 6-19 FG (Game 5)",
    note: "Shot 6-of-19 (31.6%) including 1-of-7 from three while Cunningham scored 39. Detroit's second option disappeared when it mattered most.",
  },
  {
    player: "Anthony Edwards",
    team: "MIN",
    direction: "faller",
    delta: -8,
    playoffLine: "20.0 PPG · 6-13 FG (Game 5)",
    note: "Quietest game of the series in a 29-point blowout loss. Faces elimination Friday at home — needs a legacy-defining response.",
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
  "E1-NY-PHI": {
    regularSeasonH2H: "The Knicks and 76ers split their 2024-25 regular-season meetings competitively, with both teams trading wins in a rivalry that remained tightly contested throughout the year.",
    playoffHistory: "These franchises have a storied postseason rivalry, most recently clashing in the 2023 second round when the Knicks dispatched Philadelphia in six games, fueling ongoing bad blood between the two fanbases.",
    keyMatchup: "Jalen Brunson vs. Tyrese Maxey is the series' defining duel — two elite mid-range scorers averaging north of 25 points per game this season whose ability to manufacture buckets in the half-court will dictate which team's offense has the edge in crunch time.",
    narrative: "With New York up 1-0, Philadelphia must find an answer for the Knicks' suffocating defensive versatility and their home-court crowd energy before the series shifts back to Madison Square Garden. Joel Embiid's health and availability remains the central variable — a fully engaged Embiid can single-handedly alter the series, but if he's limited or absent, the 76ers lack the depth to compensate against a Knicks team that grinds opponents into submission. Philadelphia's path back into this series runs through limiting Brunson in isolation and forcing New York into a pace they're uncomfortable playing.",
  },
  "E1-TOR-CLE": {
    regularSeasonH2H: "Toronto and Cleveland split their regular-season meetings in 2024-25, with home court proving decisive in each contest and neither team establishing a clear edge heading into the postseason.",
    playoffHistory: "The Cavaliers and Raptors have clashed memorably in the playoffs, most notably Cleveland's hard-fought second-round victories during the LeBron era, giving the Cavs a psychological edge in high-stakes series between these franchises.",
    keyMatchup: "Donovan Mitchell against Toronto's perimeter defense is the series' defining matchup — Mitchell averaged 26+ points per game in the regular season and whoever draws the primary assignment will need to force him into contested mid-range looks rather than allowing his pull-up threes and downhill drives.",
    narrative: "With Cleveland holding a 1-0 series lead, Toronto must tighten its transition defense and find a way to neutralize the Cavaliers' relentless pace before Darius Garland and Mitchell bury this series. The Raptors' best path is leaning on physicality in the paint and forcing Cleveland into a half-court grind where their length and collective defensive rotations can manufacture enough turnovers to steal games. Cleveland is vulnerable if their three-point shooting cools — they live and die by the arc, and a cold shooting night on the road in Toronto could quickly even this series.",
  },
  "E1-ORL-DET": {
    regularSeasonH2H: "Detroit and Orlando split their 2024-25 regular-season meetings, with both teams trading wins in a pair of competitive, low-scoring Eastern Conference games that previewed a tight playoff battle.",
    playoffHistory: "These franchises have rarely met in the postseason, with no recent meaningful playoff series history between them, making this first-round matchup largely uncharted territory for both organizations.",
    keyMatchup: "Cade Cunningham vs. Franz Wagner is the series' central battle — Cunningham averaged over 22 points and 9 assists this season while Wagner's two-way versatility at 23 PPG makes him Orlando's best answer and biggest weapon simultaneously.",
    narrative: "Detroit's Game 1 win signals that Cade Cunningham is ready to carry this young Pistons core into genuine playoff relevance, but Orlando's defensive infrastructure around Franz Wagner and Paolo Banchero gives them the length and switching ability to neutralize Detroit's guard-heavy attack. The Magic reclaim the series if Banchero re-establishes post dominance and Orlando's coaching staff adjusts their half-court sets to exploit Detroit's help-side rotations. Detroit remains vulnerable if Cunningham faces foul trouble or Orlando forces the Pistons into late-clock isolation basketball, where youth and inexperience can unravel a promising series lead.",
  },
  "W1-OKC-LAL": {
    regularSeasonH2H: "OKC dominated the Lakers in the 2024-25 regular season, winning three of four meetings behind Shai Gilgeous-Alexander's consistent scoring superiority over a Lakers roster that struggled with consistency all year.",
    playoffHistory: "These franchises share playoff history dating back to the Thunder's early Oklahoma City years, including the 2012 second-round series OKC won, though recent postseason meetings have been limited as the two teams cycled through rebuilds at different times.",
    keyMatchup: "The defining battle is Shai Gilgeous-Alexander against LeBron James — SGA averaged 32+ points per game this season and has the youth and quickness to make the 40-year-old James work on both ends in extended minutes.",
    narrative: "For the Lakers to claw back into this series, LeBron James must deliver a vintage performance and Anthony Davis needs to dominate the interior to neutralize OKC's pace-and-space offense, tasks that grow harder with each passing game on aging legs. OKC, as the presumptive favorite, is vulnerable only if turnovers pile up against the Lakers' length and if Jalen Williams fails to provide reliable secondary scoring alongside SGA. The Thunder's depth and defensive discipline make a Lakers comeback feel like a long shot, but LeBron's postseason pedigree ensures no lead is ever truly safe.",
  },
  "W1-MIN-DEN": {
    regularSeasonH2H: "Minnesota and Denver split their four regular-season meetings in 2024-25, with each team defending home court and the games consistently decided by single digits.",
    playoffHistory: "These franchises met in the 2024 Western Conference Semifinals, where the Timberwolves stunned the defending-champion Nuggets in seven games, marking Minnesota's most significant postseason statement in two decades.",
    keyMatchup: "Nikola Jokić against Rudy Gobert and Minnesota's defensive wall remains the series' central chess match — Jokić averaged 34.0 points on 60% shooting in the 2024 playoff series yet still lost, underscoring how collective resistance can neutralize even historic individual production.",
    narrative: "Denver is vulnerable because the Timberwolves have already cracked the psychological code on this Nuggets group, and Minnesota's Game 1 lead confirms that blueprint still applies. For Denver to flip the series, Jokić needs complementary scoring — Jamal Murray must rediscover his 2023 Finals form and Aaron Gordon must be a consistent secondary threat, because isolating Jokić against Anthony Edwards' offense-fueling transition game is a losing equation. Minnesota, now the de facto favorite with series momentum, simply needs to maintain defensive discipline and let Edwards' ascending stardom carry the offensive load.",
  },
  "W1-POR-SA": {
    regularSeasonH2H: "Portland and San Antonio split their regular-season meetings this year, with each team defending home court in a pair of competitive, low-margin games.",
    playoffHistory: "The Trail Blazers and Spurs have met several times in the playoffs, most memorably in the early 2000s Western Conference battles, with San Antonio historically holding the edge in series wins.",
    keyMatchup: "The central matchup of this series pits Portland's leading perimeter scorer against San Antonio's primary wing defender, a contest where a few points per game in efficiency could swing the outcome of any given game.",
    narrative: "San Antonio's early 1-0 lead signals they've already imposed their preferred pace and defensive structure, and Portland must find ways to push tempo and attack off the bounce before the Spurs' system fully suffocates their half-court offense. The Trail Blazers' path back into this series runs through limiting second-chance opportunities and winning the turnover battle, two areas where San Antonio has historically punished undisciplined opponents. If Portland's backcourt can string together back-to-back efficient performances and steal a road game, the pressure shifts — but San Antonio's poise in close games makes that margin for error razor thin.",
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
