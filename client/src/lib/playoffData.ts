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
    seriesId: "E1-DET-CLE",
    conference: "east",
    round: "first-round",
    higherSeed: 1,
    lowerSeed: 4,
    higherTeam: "DET",
    lowerTeam: "CLE",
    higherWins: 0,
    lowerWins: 1,
    status: "active",
    summary: "CLE leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-05-17", homeTeam: "DET", awayTeam: "CLE", homeScore: 94, awayScore: 125, status: "final", time: "Final", tv: "Prime Video", topPerformer: "Donovan Mitchell", topLine: "26 PTS · 6 REB · 8 AST" }
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
  "E1-DET-CLE": {
    regularSeasonH2H: "Cleveland held the edge in the regular-season series against Detroit, winning three of four meetings and establishing early dominance that carried into their Game 1 playoff victory.",
    playoffHistory: "These two franchises have minimal meaningful postseason history against each other, making this a relatively fresh rivalry with no deep psychological baggage for either side.",
    keyMatchup: "Donovan Mitchell vs. Cade Cunningham is the series-defining duel — Mitchell averaged 25+ points this season and delivered in Game 1, while Cunningham (averaging 22.7 points and 8.0 assists this year) must elevate his two-way impact to keep Detroit alive.",
    narrative: "Detroit, despite earning the top seed on the back of a breakout regular season, now faces a steep climb after dropping home-court advantage in Game 1 — a stark reminder that seeding means little if a team cannot protect its building. For the Pistons to engineer an upset, Cunningham must assert himself as a closer and the young supporting cast must limit the self-inflicted turnovers that Cleveland's defense consistently forces. Cleveland is quietly vulnerable in transition defense, and if Detroit can push pace and get J.B. Bickerstaff's group into uncomfortable territory, the series could swing dramatically before returning to Cleveland.",
  },
  "E1-NYK-PHI": {
    regularSeasonH2H: "New York won three of four regular-season meetings against Philadelphia in 2024-25, establishing early dominance over a 76ers squad that cycled through injuries and roster uncertainty all season.",
    playoffHistory: "These franchises have met five times in the playoffs, most memorably in 2022 when the Knicks upset the top-seeded 76ers in six games, giving New York a psychological edge in this rivalry.",
    keyMatchup: "Jalen Brunson vs. Tyrese Maxey is the series-defining guard battle, with Brunson averaging 26+ points per game this season against Philadelphia and Maxey needing to both outscore and outplay him to keep the 76ers alive.",
    narrative: "Philadelphia's path to an upset runs entirely through Maxey shouldering a superstar burden without Joel Embiid at full health, forcing the supporting cast — particularly Paul George — to sustain effort and efficiency across a full series rather than in flashes. The Knicks are vulnerable in transition and when their half-court offense stagnates, giving Philadelphia's athletic wings a window to manufacture easy buckets and shift momentum. If the 76ers cannot control the pace and force New York into uncomfortable defensive rotations, a short series increasingly favors the deeper, more cohesive Knicks.",
  },
  "W1-OKC-LAL": {
    regularSeasonH2H: "OKC held the edge over LAL in their 2024-25 regular-season meetings, with Shai Gilgeous-Alexander consistently outplaying whatever defensive assignment the Lakers threw at him.",
    playoffHistory: "These franchises have a storied postseason rivalry dating back to the Kobe-Durant era, most notably the 2012 Western Conference Finals when OKC eliminated the Lakers in four games on the way to the NBA Finals.",
    keyMatchup: "Shai Gilgeous-Alexander against LeBron James is the series' defining individual battle — SGA averaged 32+ points per game this season and his ability to draw fouls at an elite rate puts enormous defensive pressure on an aging LeBron who can't afford foul trouble at both ends.",
    narrative: "For the Lakers to steal this series, LeBron and Anthony Davis must simultaneously have vintage performances — AD controlling the paint against Chet Holmgren and LeBron orchestrating enough half-court offense to keep pace with OKC's relentless scoring engine. The Thunder are vulnerable if their youth shows up in late-game moments, as LAL's championship experience could exploit any hesitation in crunch-time possessions, but OKC's depth, home-court advantage, and the best record in the West make an upset a steep climb starting from a Game 1 deficit.",
  },
  "W1-SAS-MIN": {
    regularSeasonH2H: "San Antonio and Minnesota split their two regular-season meetings in 2024-25, with each team winning on the other's floor, offering little clarity heading into the postseason.",
    playoffHistory: "San Antonio and Minnesota have virtually no meaningful postseason history against one another, making this a rare first-round matchup without a significant rivalry chapter to draw from.",
    keyMatchup: "Victor Wembanyama vs. Karl-Anthony Towns is the series-defining battle in the frontcourt, with Wembanyama averaging 24.2 points, 10.6 rebounds, and 3.6 blocks per game this season against a Towns who must establish post presence early to keep Minnesota's offense from stalling.",
    narrative: "For the Timberwolves to claw back into this series, Anthony Edwards must assert himself as the unquestioned alpha scorer while the Minnesota defense finds a credible answer for Wembanyama's impossibly versatile skill set — two things that have so far proven elusive. San Antonio, despite the youth of its core, has shown poise in execution under Gregg Popovich's successor, but the Spurs remain vulnerable to Minnesota's transition pace and three-point volume if their defense lapses for stretches. If Edwards goes nuclear and the Wolves push tempo, this series could shift quickly — but the burden of proof is entirely on Minnesota's shoulders.",
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
