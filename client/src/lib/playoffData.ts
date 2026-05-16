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
    seriesId: "E1-DET-ORL",
    conference: "east",
    round: "first-round",
    higherSeed: 1,
    lowerSeed: 8,
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
    seriesId: "E1-NYK-PHI",
    conference: "east",
    round: "first-round",
    higherSeed: 3,
    lowerSeed: 7,
    higherTeam: "NYK",
    lowerTeam: "PHI",
    higherWins: 1,
    lowerWins: 0,
    status: "active",
    summary: "NYK leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-05-10", homeTeam: "PHI", awayTeam: "NYK", homeScore: 114, awayScore: 144, status: "final", time: "Final", tv: "ABC", topPerformer: "Miles McBride", topLine: "25 PTS · 4 REB · 0 AST" }
    ],
  },
  {
    seriesId: "E1-CLE-TOR",
    conference: "east",
    round: "first-round",
    higherSeed: 4,
    lowerSeed: 6,
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
    seriesId: "W1-OKC-LAL",
    conference: "west",
    round: "first-round",
    higherSeed: 1,
    lowerSeed: 4,
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
    seriesId: "W1-SAS-MIN",
    conference: "west",
    round: "first-round",
    higherSeed: 2,
    lowerSeed: 6,
    higherTeam: "SAS",
    lowerTeam: "MIN",
    higherWins: 1,
    lowerWins: 0,
    status: "active",
    summary: "SAS leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-05-15", homeTeam: "MIN", awayTeam: "SAS", homeScore: 109, awayScore: 139, status: "final", time: "Final", tv: "Prime Video", topPerformer: "Stephon Castle", topLine: "32 PTS · 11 REB · 6 AST" }
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
  "E1-DET-ORL": {
    regularSeasonH2H: "Detroit held the edge over Orlando in their 2024-25 regular-season meetings, with the Pistons' improved defense and Cade Cunningham's playmaking proving too much for a Magic squad still leaning on youth and rim protection.",
    playoffHistory: "These franchises have no significant shared playoff history in the modern era, making this a largely fresh postseason rivalry with no psychological baggage on either side.",
    keyMatchup: "Cade Cunningham versus Jalen Suggs is the series' defining duel — Cunningham averaged over 22 points and 9 assists this season while Suggs, Orlando's best perimeter defender, must disrupt his rhythm or the Magic's upset bid collapses before it starts.",
    narrative: "Orlando's path to a series win runs entirely through their defensive identity — Paolo Banchero must impose his will in the post while the Magic's switching schemes force Cunningham into contested mid-range looks rather than free-flowing playmaking. The Magic are vulnerable to Detroit's pace and depth, and unless they can control tempo, keep turnovers low, and get consistent secondary scoring beyond Banchero, their Game 1 deficit will deepen into an insurmountable hole. Detroit, meanwhile, is not invulnerable — their inexperience on this stage and Orlando's ability to stifle half-court offenses means a slow start in any game could flip the momentum entirely.",
  },
  "E1-NYK-PHI": {
    regularSeasonH2H: "New York won three of four meetings against Philadelphia during the 2024-25 regular season, with the Knicks' depth and physicality consistently neutralizing the Sixers' star-driven offense.",
    playoffHistory: "These franchises have met five times in the playoffs, most recently in the 2023 second round when the Knicks edged Philadelphia in six games, continuing New York's 3-2 all-time series edge in postseason play.",
    keyMatchup: "Jalen Brunson vs. Tyrese Maxey is the series' defining duel — Brunson averaged 25.9 points on elite shot creation this season while Maxey posted 25.9 of his own, and whichever lead guard controls pace and late-clock possessions will dictate the outcome.",
    narrative: "Philadelphia enters as the clear underdog after losing Joel Embiid to injury and leaning heavily on Maxey to carry an undermanned roster, meaning the Sixers must shoot exceptionally from three and force Brunson into uncomfortable pull-up situations to have any shot at an upset. The Knicks are vulnerable if their bench depth — so reliable all season — goes cold, and Karl-Anthony Towns' ability to stay out of foul trouble against a physical Sixers front is not guaranteed. If Philly can steal one in Madison Square Garden and drag this into a seven-game war of attrition, their desperation and Maxey's brilliance make them dangerous, but the margin for error is essentially zero.",
  },
  "E1-CLE-TOR": {
    regularSeasonH2H: "Cleveland won three of four regular-season meetings in 2024-25, establishing early dominance over Toronto and reinforcing their status as the clear favorite heading into the postseason.",
    playoffHistory: "These franchises met most memorably in the 2016–18 era when LeBron James-led Cavaliers swept the Raptors in back-to-back second-round series (2017, 2018), leaving Toronto with deep postseason scars against Cleveland.",
    keyMatchup: "Donovan Mitchell vs. the Toronto perimeter defense is the series' defining matchup — Mitchell averaged over 25 points per game in the regular season and will test a Raptors unit that ranks among the league's worst in opponent scoring this year.",
    narrative: "Toronto's path to a series upset runs entirely through pace disruption and forcing Mitchell into inefficient mid-range isolation while Scottie Barnes must outplay his seeding and attack Cleveland's drop coverage relentlessly. The Cavaliers are vulnerable if their three-point shooting cools from the elite clip that carried them to a top-four seed, as their half-court offense can stagnate without rhythm from depth pieces. For the Raptors, Game 1 already stolen momentum in CLE's favor, meaning Toronto likely cannot afford another slow defensive start or allow Mitchell to author a signature performance before the series shifts to Scotiabank Arena.",
  },
  "W1-OKC-LAL": {
    regularSeasonH2H: "OKC dominated the 2024-25 regular-season series against the Lakers, winning three of four meetings behind Shai Gilgeous-Alexander's consistent scoring and a suffocating Thunder defense that held Los Angeles well below its offensive averages.",
    playoffHistory: "These franchises have met in the playoffs most notably during the Kevin Durant era, with the Thunder defeating the Lakers in the 2010 first round, though the modern incarnations of both clubs make this feel like an entirely fresh rivalry.",
    keyMatchup: "Shai Gilgeous-Alexander versus LeBron James is the series' defining individual battle — SGA averaged 32+ points per game this season and has already asserted dominance in Game 1, while LeBron, still capable of 25-point playoff performances at 40, must outproduce him on both ends to shift the series.",
    narrative: "For the Lakers to claw back into this series, LeBron and Anthony Davis must simultaneously dominate — AD neutralizing OKC's relentless paint pressure while LeBron orchestrates enough playmaking to expose a Thunder rotation that, despite its youth, has shown it can be rattled by veteran pace manipulation. OKC is vulnerable only if their young core, playing deep playoff basketball for the first time as true contenders, feels the weight of expectations in a hostile Crypto.com environment. The Lakers' path is narrow but real: slow the game, target OKC's bench depth late in shot clocks, and force Gilgeous-Alexander into uncomfortable two-way possessions against a defense anchored by a fully locked-in Anthony Davis.",
  },
  "W1-SAS-MIN": {
    regularSeasonH2H: "San Antonio and Minnesota split their two regular-season meetings in 2024-25, with each team winning on the other's home floor.",
    playoffHistory: "These franchises have minimal shared postseason history, with no memorable multi-round playoff series defining their rivalry in the modern era.",
    keyMatchup: "Victor Wembanyama versus Karl-Anthony Towns — wait, KAT is now a Knick — making the true fulcrum Wembanyama against Rudy Gobert, a generational-vs-veteran big man chess match where Wembanyama is averaging monster numbers on both ends through Game 1.",
    narrative: "Minnesota needs Anthony Edwards to assert himself as the unquestioned alpha scorer and drag the Wolves through possessions where their half-court offense stagnates, because leaning on Gobert pick-and-rolls alone won't crack a Wembanyama-anchored defense. The Spurs, despite holding a 1-0 lead, are vulnerable if their young supporting cast around Wembanyama goes cold from three, as Minnesota's length and switching ability can shrink spacing and force San Antonio into isolation basketball. If Edwards finds his rhythm and the Wolves protect the paint on the other end, this series has every ingredient to stretch deep.",
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
