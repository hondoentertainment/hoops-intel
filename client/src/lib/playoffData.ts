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
    regularSeasonH2H: "Cleveland won three of four regular-season meetings against Detroit in 2024-25, establishing early dominance over a Pistons squad still finding its identity as a surprise top seed.",
    playoffHistory: "These franchises have met twice in the playoffs, most notably the Cavaliers' 2006 first-round sweep of Detroit's rival era, though direct postseason clashes between these specific rosters carry no recent precedent.",
    keyMatchup: "Darius Garland versus Cade Cunningham is the series-defining battle, with Cunningham averaging roughly 23 points and 8 assists per game this season against Cleveland's perimeter defense that surrendered the fourth-most points to opposing point guards.",
    narrative: "Detroit, despite owning the one-seed, enters as a team many analysts view as an overachiever in a weakened East, and Cleveland's experience — anchored by Garland and a Donovan Mitchell-led offense — gives the Cavaliers a clear playmaking edge in crunch time. For the Pistons to steal this series, Cunningham must force Garland into defensive commitments that open driving lanes, while Detroit's bench needs to neutralize Cleveland's second-unit scoring that exploited them in Game 1. The Cavaliers are vulnerable if their perimeter shooting cools and Evan Mobley struggles to contain Detroit's bruising interior attack, but right now momentum and execution both favor Cleveland.",
  },
  "E1-NYK-PHI": {
    regularSeasonH2H: "The Knicks won three of four meetings against the 76ers in the 2024-25 regular season, asserting physical dominance in a rivalry defined by grit and guard play.",
    playoffHistory: "These franchises have a storied postseason rivalry dating back to the 1990s, with New York holding the historical edge but Philadelphia having eliminated the Knicks in the first round as recently as 2012.",
    keyMatchup: "Jalen Brunson against Philadelphia's primary ball-handler defender is the series' fulcrum — Brunson averaged over 28 points per game in the regular season and has repeatedly broken down Philly's defensive schemes in clutch moments.",
    narrative: "For the 76ers to claw back into this series, they need Paul George and Joel Embiid — if healthy — to assert dominance in the paint and force New York into half-court possessions where shot creation becomes labored. The Knicks are vulnerable when their transition offense is neutralized and opponents force turnovers off their aggressive pick-and-roll sets, so Philly's path to an upset runs directly through disrupting Brunson's rhythm early in possessions. If Embiid's availability remains questionable, however, the size and physicality advantage New York holds in the frontcourt may simply be too steep an obstacle for the road team to overcome.",
  },
  "W1-OKC-LAL": {
    regularSeasonH2H: "OKC dominated the 2024-25 regular-season series against the Lakers, winning three of four matchups and outscoring them by double digits in multiple games.",
    playoffHistory: "These franchises have met in the playoffs most memorably during the Kevin Durant era, when OKC defeated the Lakers in the 2012 Western Conference Finals 4-1, with the Thunder holding a commanding all-time postseason edge.",
    keyMatchup: "Shai Gilgeous-Alexander vs. LeBron James is the series-defining clash — SGA averaged 32.7 PPG this season and torched the Lakers' defense in Game 1, while LeBron must impose his will as a primary initiator to keep LA's offense from stagnating.",
    narrative: "For the Lakers to pull off this upset, LeBron and Anthony Davis must both operate at peak efficiency simultaneously — a combination that has proven maddeningly inconsistent throughout the season. OKC's suffocating defensive system, league-best net rating, and Gilgeous-Alexander's ability to get to the line at will make the Thunder deeply difficult to rattle over a seven-game series. LA's path runs through grinding the pace, winning the glass battle with Davis, and hoping OKC's young core shows enough playoff inexperience to crack under pressure.",
  },
  "W1-SAS-MIN": {
    regularSeasonH2H: "San Antonio and Minnesota split their two regular-season meetings in 2024-25, with each team winning on the other's floor, offering little clarity on which squad holds a true edge.",
    playoffHistory: "These franchises have no significant postseason history against one another, making this a largely uncharted rivalry on the playoff stage.",
    keyMatchup: "Victor Wembanyama against Rudy Gobert is the series' defining chess match — Wembanyama's ability to operate as a floor-spacing big (averaging 24+ points and 3+ blocks per game this season) forces Gobert into impossible positioning decisions on both ends.",
    narrative: "Minnesota's path back into this series runs squarely through Anthony Edwards, who must impose his will early and force the Spurs to collapse into the paint, opening kick-out opportunities for a Wolves perimeter that has gone cold at the wrong moments. San Antonio's youth is its greatest asset and its greatest liability — Wembanyama has looked transcendent, but if the Timberwolves can slow the pace, grind possessions, and leverage their veteran experience to make games ugly in the fourth quarter, the Spurs' inexperience in high-pressure moments could crack. Minnesota cannot afford to fall behind 2-0; a second loss would make their lack of playoff-tested depth nearly impossible to overcome against a Spurs group playing with nothing to lose.",
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
