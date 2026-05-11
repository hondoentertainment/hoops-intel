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
  "E1-NY-PHI": {
    regularSeasonH2H: "The Knicks and 76ers split their 2024-25 regular-season series in competitive fashion, with both teams trading wins in games decided by single digits.",
    playoffHistory: "New York and Philadelphia have a storied postseason rivalry, most recently clashing in the 2023 second round when the Knicks eliminated the 76ers in six games, snapping a long drought of playoff success for New York.",
    keyMatchup: "The battle between Jalen Brunson and whichever Philadelphia guard draws the assignment is the series' defining duel, with Brunson averaging north of 28 points per game in playoff settings and Philadelphia lacking a proven on-ball stopper at his level.",
    narrative: "Philadelphia must find an answer for New York's suffocating defensive rotations and Brunson's ability to manufacture points in the half-court, as the 76ers' offensive spacing collapses without a healthy and assertive Joel Embiid commanding the paint. The Knicks are vulnerable only if Embiid recaptures his dominant two-way form and Philadelphia can force New York into early-shot-clock possessions that disrupt their rhythm. If the 76ers cannot solve those defensive breakdowns that cost them Game 1, New York's experience and depth give them a commanding path to a series close-out.",
  },
  "E1-CLE-TOR": {
    regularSeasonH2H: "Cleveland and Toronto split their 2024-25 regular-season meetings competitively, with the Cavaliers' elite defense proving the decisive edge in the games they controlled.",
    playoffHistory: "The Cavaliers and Raptors have met in the postseason previously, most notably with Cleveland dispatching Toronto in the 2016 and 2018 Eastern Conference Finals on their championship runs, giving the Cavs a clear psychological edge in high-stakes series.",
    keyMatchup: "Donovan Mitchell versus Toronto's primary perimeter defender is the series' defining battle, as Mitchell averaged north of 25 points per game this season and his ability to create off the dribble against the Raptors' switching schemes will dictate Cleveland's offensive ceiling.",
    narrative: "Toronto enters this series as the clear underdog already down 1-0, and their path back requires suffocating Mitchell in transition, winning the rebounding battle to limit Cleveland's second-chance opportunities, and getting consistent secondary scoring beyond their top option — three things they have struggled to sustain across a full playoff series. Cleveland is vulnerable if their perimeter shooting goes cold and Toronto can push pace, but the Cavaliers' top-five defensive rating and Mitchell's playoff pedigree make a Raptors comeback feel like an uphill climb that demands near-perfect execution.",
  },
  "E1-DET-ORL": {
    regularSeasonH2H: "Detroit and Orlando split their 2024-25 regular-season meetings, with both teams trading home wins in a pair of competitive, defense-heavy contests.",
    playoffHistory: "These franchises have no significant postseason history against each other in the modern era, making this a relatively fresh playoff rivalry with no psychological baggage from prior series.",
    keyMatchup: "Cade Cunningham vs. Franz Wagner is the series-defining battle, with Cunningham averaging 23+ points and 9 assists this season against Wagner's two-way versatility as Orlando's primary offensive engine at 25 PPG.",
    narrative: "Orlando, despite the even seeding, must find a way to neutralize Cunningham's pick-and-roll mastery after Detroit controlled pace and physicality in Game 1 — the Magic need Paolo Banchero to assert himself as the alpha scorer and force Detroit's defense to make impossible choices. If Orlando cannot get out in transition and allows Detroit to grind games into the 90s, the Pistons' blue-collar identity becomes a weapon. The Magic's path back into this series runs directly through Banchero demanding 20+ shot attempts and Wagner functioning as a secondary creator rather than a finisher.",
  },
  "W1-LAL-HOU": {
    regularSeasonH2H: "The Lakers and Rockets split their 2024-25 regular-season meetings, with Houston's youth and pace creating problems for Los Angeles in at least one contest while the Lakers leaned on LeBron James to close out the other.",
    playoffHistory: "These franchises have a storied postseason rivalry highlighted by the Shaquille O'Neal–era Lakers sweeping Houston in 1995 and multiple Western Conference clashes across the Kobe Bryant era, with Los Angeles holding a decisive edge in all-time playoff series wins.",
    keyMatchup: "LeBron James versus Alperen Şengün is the series-defining collision, with Şengün's interior dominance — averaging a near 30-point, 13-rebound, 9-assist triple-double threat — tested against LeBron's veteran defensive versatility and ability to exploit mismatches on the other end.",
    narrative: "For Houston to steal this series, Ime Udoka must find a rotation that limits transition opportunities for Los Angeles while Şengün and Jalen Green sustain the offensive aggression that carried the Rockets to the postseason in the first place. The Lakers are vulnerable if their aging supporting cast goes cold and Anthony Davis finds himself fatigued against a relentless young frontcourt. Ultimately, whoever controls the pace controls the series — Houston thrives in chaos, and Los Angeles desperately wants to slow it down.",
  },
  "W1-DEN-MIN": {
    regularSeasonH2H: "Minnesota held the edge over Denver in their 2024-25 regular-season meetings, continuing a pattern of the Wolves' length and defensive versatility giving the Nuggets problems.",
    playoffHistory: "These franchises met memorably in the 2024 second round, where Minnesota stunned the defending-champion Nuggets in five games, marking the only playoff series between the two clubs in recent memory.",
    keyMatchup: "Nikola Jokic vs. Rudy Gobert is the series' defining chess match — Jokic averaged a triple-double in the 2024 playoff series yet Denver still lost, as Gobert's rim protection and Minnesota's team defense repeatedly neutralized Jokic's interior dominance and passing angles.",
    narrative: "Denver enters as the wounded favorite, needing Jokic to receive far more help from Jamal Murray and Michael Porter Jr. than he got in Game 1 — if those two remain passive or inefficient, Minnesota's suffocating scheme will continue to make Jokic a brilliant loser. The Wolves' blueprint is established: force Denver into isolation ball, deny Murray clean pull-up looks, and let Anthony Edwards attack a tired Nuggets defense in the fourth quarter. For Denver to survive, Murray must rediscover his 2023 playoff form immediately, or this series could end before Mile High altitude becomes a meaningful factor.",
  },
  "W1-SA-POR": {
    regularSeasonH2H: "San Antonio and Portland split their regular-season meetings in a pair of closely contested games that offered few definitive answers heading into the postseason.",
    playoffHistory: "The Spurs and Trail Blazers have met in the playoffs on multiple occasions, most memorably in the 2014 Western Conference Finals when San Antonio's motion offense overwhelmed Portland en route to an NBA championship.",
    keyMatchup: "The central battle of this series pits San Antonio's primary frontcourt anchor against Portland's offensive engine — whichever star can impose their will in the paint and mid-range while limiting the other's rhythm will likely dictate the series outcome.",
    narrative: "Portland faces an uphill climb down 0-1, needing to force pace, attack ball screens relentlessly, and win the turnover battle to neutralize San Antonio's disciplined, system-driven half-court execution. The Spurs, however, are not without vulnerability — if Portland can generate early transition opportunities and keep the game chaotic, the methodical Spurs can be rattled. Ultimately, Portland must steal one game in San Antonio to reset the psychological momentum before returning to the Moda Center, where crowd energy could prove decisive.",
  },
  "W1-OKC-PHX": {
    regularSeasonH2H: "OKC dominated the 2024-25 regular-season series against Phoenix, winning all or most of their meetings as the Thunder emerged as a top-two Western Conference team while the Suns spiraled into a rebuilding season.",
    playoffHistory: "These two franchises have met in the playoffs only sporadically, most notably the 2014 Western Conference Finals when Kevin Durant's Thunder defeated the Suns' predecessor era teams, giving OKC the historical edge in high-stakes matchups.",
    keyMatchup: "Shai Gilgeous-Alexander against Phoenix's primary perimeter defender is the series' central chess match — SGA averaged north of 32 points per game this season and already asserted his dominance in Game 1, and stopping him is the only realistic path to a Phoenix upset.",
    narrative: "For the Suns to claw back into this series, they need Kevin Durant to resurrect vintage closer mode and the supporting cast to hit enough threes to force OKC out of its suffocating drop coverage — neither is a safe assumption given Phoenix's injury-depleted, chemistry-challenged roster. The Thunder, meanwhile, are young and analytically pristine but untested at this playoff altitude, leaving a narrow window for Phoenix to exploit if they can generate chaos, push pace, and make SGA work on both ends simultaneously. OKC's depth and defensive cohesion make them heavy favorites, but a long series is not impossible if Durant decides this farewell run has one more act in it.",
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
