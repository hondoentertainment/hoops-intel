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
  }
];
// END_PLAYOFF_SERIES_SYNC

export const playoffMovers: PlayoffPulseMover[] = [
  {
    player: "Anthony Edwards",
    team: "MIN",
    direction: "riser",
    delta: 12,
    playoffLine: "36.0 PPG · 6.0 RPG · 2.0 APG (Game 4)",
    note: "Series-tying 36-point explosion after Wembanyama's ejection — 16 in the fourth, dedicated to his late mother. The defining moment of the 2026 playoffs.",
  },
  {
    player: "Miles McBride",
    team: "NYK",
    direction: "riser",
    delta: 10,
    playoffLine: "25.0 PPG · 4.0 RPG · 7-9 3PT (Game 4)",
    note: "Started for injured OG Anunoby and tied the sweep-clincher with 7 threes on 9 attempts — breakout playoff performance at the biggest moment.",
  },
  {
    player: "Dylan Harper",
    team: "SAS",
    direction: "riser",
    delta: 9,
    playoffLine: "24.0 PPG · 7.0 RPG · 8-11 FG (Game 4)",
    note: "Rookie exploded off the bench after Wembanyama's ejection — 24 points on 73% shooting in a Conference Semifinals game shows franchise-building poise.",
  },
  {
    player: "Victor Wembanyama",
    team: "SAS",
    direction: "faller",
    delta: -15,
    playoffLine: "4.0 PPG · 4.0 RPG · 12 MIN (Game 4)",
    note: "Ejected after just 12 minutes — the Spurs' franchise player left his team to fight without him in the biggest game of the series. Potential fine or suspension looms for Game 5.",
  },
  {
    player: "Paul George",
    team: "PHI",
    direction: "faller",
    delta: -8,
    playoffLine: "7.0 PPG · 1.0 RPG · -35 (Game 4)",
    note: "Season ends with 7 points on 3-of-7 and the worst plus-minus in a sweep-clinching loss. The Embiid-Maxey-George experiment ends in first-round-level disappointment.",
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
    regularSeasonH2H: "The Knicks and 76ers split their 2024-25 regular-season meetings competitively, with both teams trading home wins in a rivalry defined by physicality and late-game execution.",
    playoffHistory: "These franchises have met multiple times in the playoffs, most memorably in the early 2000s, with New York holding a slight historical edge in postseason series wins against Philadelphia.",
    keyMatchup: "Jalen Brunson vs. Tyrese Maxey is the series' defining duel, with both guards capable of creating off the dribble and shouldering 25-plus point scoring burdens that will dictate possession-by-possession momentum.",
    narrative: "Philadelphia, already down 1-0, must solve the Knicks' suffocating switching defense and get Joel Embiid into dominant two-way rhythm before New York seizes control of home-court insurance. The Sixers are vulnerable when Embiid labors under foul trouble or fatigue, opening the paint for Brunson's mid-range surgery and OG Anunoby's opportunistic cutting. If Philly can't force turnovers and push pace to neutralize Madison Square Garden's emotional lift, this series risks slipping away before it truly begins.",
  },
  "E1-DET-ORL": {
    regularSeasonH2H: "Detroit and Orlando split their 2024-25 regular-season meetings, with both teams trading home wins in a pair of competitive, defense-heavy contests.",
    playoffHistory: "The Pistons and Magic have minimal meaningful playoff history against one another, making this a largely fresh postseason rivalry with little historical baggage to draw from.",
    keyMatchup: "Cade Cunningham vs. Franz Wagner is the series-defining duel — Cunningham averaged 25.5 points and 9.2 assists this season while Wagner countered with 25.6 points per game, and whichever creator imposes his will in pick-and-roll situations will likely carry his team.",
    narrative: "Orlando enters down 1-0 and facing a Detroit team that has rediscovered its defensive identity and the clutch-time composure of a young, hungry roster; for the Magic to even the series, Paolo Banchero must reassert himself as the alpha scorer and Wagner must punish Detroit's drop coverage at the rim rather than deferring in big moments. Detroit's vulnerability lies in depth and foul trouble — if Orlando's length forces Cunningham into uncomfortable spots and the Pistons' supporting cast goes cold, the Magic's defensive infrastructure gives them every opportunity to grind this into a war of attrition they can win.",
  },
  "E1-TOR-CLE": {
    regularSeasonH2H: "Toronto and Cleveland split their 2024-25 regular-season meetings, with neither team establishing a clear dominance as both franchises navigated rebuilding and retooling phases.",
    playoffHistory: "Cleveland has historically held the upper hand in playoff meetings, most memorably sweeping Toronto in the 2018 Eastern Conference Finals behind LeBron James, giving the Cavaliers a psychological edge in high-stakes moments.",
    keyMatchup: "Darius Garland vs. Toronto's primary perimeter defender is the axis of the series — Garland averaged 22+ points in the regular season and controlled pace in Game 1, making him the player the Raptors must contain to stay alive.",
    narrative: "Down 1-0, Toronto needs Scottie Barnes to impose his physicality and expand his shot creation against Cleveland's switching schemes, while also getting consistent secondary scoring that has been elusive. The Cavaliers are vulnerable if their perimeter defense lapses and Toronto's pace-and-space offense gets into a rhythm in transition. If the Raptors can steal home-court in Game 2, this series becomes a genuine test of whether Cleveland's core has the composure for a seven-game grind.",
  },
  "W1-OKC-LAL": {
    regularSeasonH2H: "OKC held the edge over Los Angeles in their 2024-25 regular-season meetings, with Shai Gilgeous-Alexander's consistent scoring dominance setting the tone for a Thunder squad that finished as one of the West's elite seeds.",
    playoffHistory: "These franchises carry modest but meaningful playoff history, most notably their 2012 Western Conference Finals clash when Kevin Durant's Thunder eliminated Kobe Bryant's Lakers in five games, a series that still flavors the psychological backdrop of any OKC-LAL postseason collision.",
    keyMatchup: "Shai Gilgeous-Alexander versus LeBron James is the series' defining individual battle — SGA averaged north of 32 points per game this season and his ability to get to the free-throw line at will against LeBron's weakening lateral quickness will determine whether OKC can close this out efficiently.",
    narrative: "With OKC already up 1-0, the Lakers face the brutal reality that going down 2-0 on the road against the NBA's most suffocating defensive unit would effectively end their series. Los Angeles needs LeBron James to impose his will as a playmaker, force the Thunder into transition chaos, and exploit any minutes where OKC's youth shows up as inexperience rather than energy — but that window narrows rapidly if OKC's half-court defense remains as stifling as it was in Game 1. The Thunder are vulnerable only if their role players go cold from three simultaneously, gifting the Lakers a lifeline they absolutely cannot afford to waste.",
  },
  "W1-MIN-DEN": {
    regularSeasonH2H: "Minnesota and Denver split their four regular-season meetings in 2024-25, with each team winning on the other's home floor at least once, signaling a genuinely even rivalry heading into the postseason.",
    playoffHistory: "These franchises met most recently in the 2024 Western Conference semifinals, where Minnesota stunned defending champion Denver 4-3 in a series that ended with Nikola Jokić posting historic numbers but the Wolves' length and physicality ultimately proving decisive.",
    keyMatchup: "The central chess match remains Rudy Gobert and Naz Reid as a tandem against Nikola Jokić — the three-time MVP averaged 29.7 points, 13.7 rebounds, and 10.0 assists in the 2024 playoff series, yet Minnesota's scheme of throwing multiple bodies and limiting transition opportunities kept Denver from pulling away.",
    narrative: "Denver enters having already absorbed a gut-punch in Game 1, and the question is whether Jokić can drag an undermanned roster — still missing continuity around him — back to even before the series shifts back to Ball Arena. Minnesota's formula is straightforward but brutal: clog the paint, force Jokić into isolation possessions late in the shot clock, and let Anthony Edwards continue his evolution into a true closer who can end games in the fourth quarter before Denver's defense can adjust.",
  },
  "W1-SA-POR": {
    regularSeasonH2H: "San Antonio and Portland split their regular-season meetings in a competitive back-and-forth that offered few clear answers heading into the postseason.",
    playoffHistory: "The Spurs and Trail Blazers have met in the playoffs on multiple occasions, most memorably in the 1999 Western Conference Finals when San Antonio swept Portland en route to their first championship.",
    keyMatchup: "The defining battle of this series figures to be the Spurs' big man anchoring the paint against Portland's primary scoring threat, with both players averaging north of 20 points per game this season and the Game 1 outcome already shaped by that interior chess match.",
    narrative: "Portland enters Game 2 facing the uncomfortable reality that the Spurs' system and depth have already exposed their defensive vulnerabilities in the opening contest, and the Trail Blazers must find a way to push pace and manufacture transition opportunities to neutralize San Antonio's methodical half-court execution. For Portland to extend this series, their secondary playmakers must step up and ease the burden on their star, who cannot be the only engine in a best-of-seven grind. The Spurs, meanwhile, have the coaching pedigree and roster discipline to protect a series lead, making Portland's margin for error razor-thin from this point forward.",
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
