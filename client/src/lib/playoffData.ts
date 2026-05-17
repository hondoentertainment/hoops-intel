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
    regularSeasonH2H: "Detroit held the edge over Orlando in their 2024-25 regular-season meetings, consistent with the Pistons' resurgent identity as the East's top seed after their historic rebuild.",
    playoffHistory: "These franchises have no significant shared postseason history in the modern era, making this a relatively fresh playoff rivalry with no psychological baggage from prior series.",
    keyMatchup: "Cade Cunningham versus Franz Wagner is the series-defining duel — Cunningham averaged 26+ points and 9 assists this season while Wagner emerged as Orlando's most complete two-way creator, and whoever dominates this matchup will likely dictate series flow.",
    narrative: "For Orlando to steal this series, Wagner and Paolo Banchero must both go supernova simultaneously, forcing Detroit's defense to make impossible choices, while the Magic's switching scheme clogs driving lanes enough to disrupt Cunningham's rhythm. The Pistons are vulnerable if their young roster — playoff-inexperienced despite the No. 1 seed — tightens up at home in close-game moments, allowing a composed Magic team to chip away at a lead. Detroit's depth and home-court advantage make them rightful favorites, but Orlando's ceiling is high enough that a full seven games would surprise no one.",
  },
  "E1-NYK-PHI": {
    regularSeasonH2H: "The Knicks owned the season series against Philadelphia in 2024-25, reinforcing their status as the clear favorite heading into this first-round matchup.",
    playoffHistory: "These franchises have a storied postseason rivalry dating back decades, with the Knicks and Sixers meeting multiple times in the 1990s, though New York has generally held the edge in recent playoff encounters including their 2023 first-round series win.",
    keyMatchup: "Jalen Brunson versus Tyrese Maxey is the series' defining duel, with both guards capable of erupting for 30-plus points, but Brunson's playoff pedigree — including his 2023 and 2024 postseason runs — gives New York a measurable edge in high-leverage moments.",
    narrative: "For Philadelphia to pull off the upset, Maxey must dominate and Joel Embiid — if available and healthy — needs to be a true force rather than a game-time question mark, because the Sixers cannot afford to bleed possessions to a Knicks defense that suffocates in the half-court. New York is vulnerable if their bench depth falters or Brunson is neutralized by foul trouble, but the Knicks' home-court advantage and cohesion under Tom Thibodeau make a Philadelphia comeback a steep climb after falling behind 1-0.",
  },
  "E1-CLE-TOR": {
    regularSeasonH2H: "Cleveland won the season series over Toronto in 2024-25, demonstrating their edge in the paint and defensive versatility that has carried into the postseason.",
    playoffHistory: "Cleveland and Toronto have met in the playoffs previously, most notably in the LeBron-era Cavaliers' dominance of the Raptors in the 2016 and 2018 Eastern Conference playoffs, series the Cavaliers swept en route to Finals appearances.",
    keyMatchup: "Donovan Mitchell vs. Immanuel Quickley is the series' defining battle, with Mitchell averaging over 25 points per game this season and Quickley needing to both contain him and generate enough offense to keep Toronto competitive.",
    narrative: "Toronto enters as the underdog and must turn this into a grind — slowing Cleveland's transition offense, protecting the paint against Evan Mobley, and forcing Mitchell into inefficient shot selection through disciplined help defense. The Raptors' youth and lack of a genuine star-level closer makes a series upset a steep climb, particularly after dropping Game 1 and surrendering home-court advantage they never possessed. If Scottie Barnes can assert himself as a genuine two-way force and Quickley catches fire from three, Toronto has the defensive culture to steal games — but sustaining that over six or seven is a different ask entirely.",
  },
  "W1-OKC-LAL": {
    regularSeasonH2H: "OKC dominated the 2024-25 regular-season series against the Lakers, winning three of four meetings behind Shai Gilgeous-Alexander's consistent scoring and the Thunder's suffocating defense.",
    playoffHistory: "These franchises have met in the playoffs most notably in the 2012 Western Conference Finals, when Kevin Durant's Thunder eliminated Kobe Bryant's Lakers in five games on their way to the NBA Finals.",
    keyMatchup: "Shai Gilgeous-Alexander vs. LeBron James is the series' defining individual battle, with SGA averaging 32+ points per game this season against a Lakers defense that struggled to contain elite one-on-one scorers all year.",
    narrative: "For the Lakers to steal this series, LeBron James must deliver historic, ageless performances while Anthony Davis dominates the interior enough to neutralize OKC's length and athleticism — a tall order against the West's most balanced roster. The Thunder are vulnerable only if their relative playoff inexperience compounds under the weight of a hostile Crypto.com Arena crowd and LeBron's singular ability to elevate the moment. OKC's margin for error is wide, but one cold shooting stretch from their role players could hand the Lakers the foothold they desperately need to make this competitive.",
  },
  "W1-SAS-MIN": {
    regularSeasonH2H: "San Antonio and Minnesota split their two regular-season meetings in 2024-25, with each team winning on the other's floor, offering little clarity on a true edge heading into the postseason.",
    playoffHistory: "These franchises have no significant shared playoff history in the modern era, making this a largely fresh postseason rivalry without the weight of prior series baggage.",
    keyMatchup: "Victor Wembanyama vs. Karl-Anthony Towns — now a Knick — is no longer the centerpiece, so the defining matchup becomes Wembanyama's two-way dominance against Anthony Edwards, who must carry Minnesota's offense while also accepting the challenge of guarding or occupying Wembanyama's attention on both ends.",
    narrative: "Minnesota's path back into this series runs entirely through Anthony Edwards elevating to a genuine closer who can manufacture offense in the half-court against San Antonio's length and scheme, while the Wolves' defense must find a way to limit Wembanyama in the paint and as a pick-and-roll finisher — a task that exposed most teams all season. San Antonio is quietly vulnerable if Minnesota can push pace and exploit the Spurs' relative youth in high-leverage late-game moments, where inexperience can turn close games into losses. The Wolves stole home court from a better seed before; they have the talent to claw back, but it requires Edwards answering every Wembanyama statement shot with one of his own.",
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
