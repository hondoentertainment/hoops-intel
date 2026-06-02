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
    seriesId: "E3-NYK-CLE",
    conference: "east",
    round: "conference-finals",
    higherSeed: 3,
    lowerSeed: 4,
    higherTeam: "NYK",
    lowerTeam: "CLE",
    higherWins: 4,
    lowerWins: 0,
    status: "complete",
    winner: "NYK",
    summary: "NYK wins 4-0",
    games: [
      { gameNumber: 1, date: "2026-05-19", homeTeam: "NYK", awayTeam: "CLE", homeScore: 115, awayScore: 104, status: "final", time: "Final/OT", tv: "ESPN", topPerformer: "Jalen Brunson", topLine: "38 PTS · 5 REB · 6 AST" },
      { gameNumber: 2, date: "2026-05-21", homeTeam: "NYK", awayTeam: "CLE", homeScore: 109, awayScore: 93, status: "final", time: "Final", tv: "ESPN", topPerformer: "Donovan Mitchell", topLine: "26 PTS · 4 REB · 1 AST" },
      { gameNumber: 3, date: "2026-05-23", homeTeam: "CLE", awayTeam: "NYK", homeScore: 108, awayScore: 121, status: "final", time: "Final", tv: "ABC", topPerformer: "Jalen Brunson", topLine: "30 PTS · 3 REB · 6 AST" },
      { gameNumber: 4, date: "2026-05-25", homeTeam: "CLE", awayTeam: "NYK", homeScore: 93, awayScore: 130, status: "final", time: "Final", tv: "ESPN", topPerformer: "Donovan Mitchell", topLine: "31 PTS · 4 REB · 1 AST" }
    ],
  },
  {
    seriesId: "F4-SAS-NYK",
    conference: "finals",
    round: "finals",
    higherSeed: 2,
    lowerSeed: 3,
    higherTeam: "SAS",
    lowerTeam: "NYK",
    higherWins: 0,
    lowerWins: 0,
    status: "upcoming",
    summary: "Series tied 0-0",
    games: [
      { gameNumber: 1, date: "2026-06-03", homeTeam: "SAS", awayTeam: "NYK", homeScore: null, awayScore: null, status: "scheduled", time: "6/3 - 8:30 PM EDT", tv: "ABC" },
      { gameNumber: 2, date: "2026-06-05", homeTeam: "SAS", awayTeam: "NYK", homeScore: null, awayScore: null, status: "scheduled", time: "6/5 - 8:30 PM EDT", tv: "ABC" },
      { gameNumber: 3, date: "2026-06-08", homeTeam: "NYK", awayTeam: "SAS", homeScore: null, awayScore: null, status: "scheduled", time: "6/8 - 8:30 PM EDT", tv: "ABC" }
    ],
  },
  {
    seriesId: "W3-OKC-SAS",
    conference: "west",
    round: "conference-finals",
    higherSeed: 1,
    lowerSeed: 2,
    higherTeam: "OKC",
    lowerTeam: "SAS",
    higherWins: 3,
    lowerWins: 4,
    status: "complete",
    winner: "SAS",
    summary: "SAS wins 4-3",
    games: [
      { gameNumber: 1, date: "2026-05-18", homeTeam: "OKC", awayTeam: "SAS", homeScore: 115, awayScore: 122, status: "final", time: "Final/2OT", tv: "NBC, Peacock", topPerformer: "Victor Wembanyama", topLine: "41 PTS · 24 REB · 3 AST" },
      { gameNumber: 2, date: "2026-05-20", homeTeam: "OKC", awayTeam: "SAS", homeScore: 122, awayScore: 113, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Shai Gilgeous-Alexander", topLine: "30 PTS · 4 REB · 9 AST" },
      { gameNumber: 3, date: "2026-05-22", homeTeam: "SAS", awayTeam: "OKC", homeScore: 108, awayScore: 123, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Shai Gilgeous-Alexander", topLine: "26 PTS · 2 REB · 12 AST" },
      { gameNumber: 4, date: "2026-05-24", homeTeam: "SAS", awayTeam: "OKC", homeScore: 103, awayScore: 82, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Victor Wembanyama", topLine: "33 PTS · 8 REB · 5 AST" },
      { gameNumber: 5, date: "2026-05-26", homeTeam: "OKC", awayTeam: "SAS", homeScore: 127, awayScore: 114, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Shai Gilgeous-Alexander", topLine: "32 PTS · 2 REB · 9 AST" },
      { gameNumber: 6, date: "2026-05-28", homeTeam: "SAS", awayTeam: "OKC", homeScore: 118, awayScore: 91, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Victor Wembanyama", topLine: "28 PTS · 10 REB · 2 AST" },
      { gameNumber: 7, date: "2026-05-30", homeTeam: "OKC", awayTeam: "SAS", homeScore: 103, awayScore: 111, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Shai Gilgeous-Alexander", topLine: "35 PTS · 4 REB · 9 AST" }
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
  "E3-NYK-CLE": {
    regularSeasonH2H: "Cleveland held the edge in the regular season series, splitting or winning the majority of matchups behind Donovan Mitchell's consistent scoring, but those results proved irrelevant once the playoffs began.",
    playoffHistory: "These franchises have limited deep playoff history against each other in the modern era, making this Eastern Conference Finals a genuinely fresh and significant chapter for both fan bases.",
    keyMatchup: "Donovan Mitchell vs. Jalen Brunson defined the series, with Brunson outdueling Mitchell across all four games by shouldering New York's offense in clutch moments while Mitchell was repeatedly hemmed in by the Knicks' switching defensive schemes.",
    narrative: "The Cavaliers never solved New York's physical, scheme-heavy defense — a unit that took away Cleveland's mid-range and transition opportunities and forced isolations against length. Cleveland's youth and relative inexperience at this stage showed in late-game execution, with turnovers and poor shot selection in fourth quarters handing the Knicks the margin they needed. A sweep of this magnitude signals not just a series loss but a structural gap between where Cleveland is and what it takes to survive a team playing its best basketball at the right time.",
  },
  "F4-SAS-NYK": {
    regularSeasonH2H: "San Antonio and New York split their regular-season meetings in a pair of competitive games that offered few clear answers about which club holds the edge heading into the Finals.",
    playoffHistory: "The Spurs and Knicks have rarely crossed paths in the playoffs, with San Antonio holding the historical prestige advantage built on five championship banners compared to New York's two titles from a half-century ago.",
    keyMatchup: "The series likely turns on the battle between San Antonio's primary playmaker and New York's defensive anchor in the frontcourt — whichever team wins that possession-level chess match at the point of attack should control the pace and tempo across seven games.",
    narrative: "As the 3-seed, New York must make this series ugly — grinding possessions, packing the paint, and leveraging Madison Square Garden's deafening crowd to steal home-court advantage early in the series. San Antonio is vulnerable when its ball movement stalls in the halfcourt and opponents force it into isolation situations late in the shot clock. If the Knicks can disrupt rhythm and manufacture turnovers in transition, they have the offensive firepower to make this a genuine upset, but any lapse in defensive discipline against a Spurs team this well-coached will be punished without mercy.",
  },
  "W3-OKC-SAS": {
    regularSeasonH2H: "OKC dominated the regular-season series against San Antonio, leveraging Shai Gilgeous-Alexander's elite scoring and their suffocating defense to build the top seed in the West.",
    playoffHistory: "These franchises have met in the playoffs sporadically over the decades, most notably when the Thunder — then featuring Kevin Durant and Russell Westbrook — battled San Antonio's dynasty-era Spurs in hard-fought Western Conference showdowns during the early 2010s.",
    keyMatchup: "Shai Gilgeous-Alexander vs. the Spurs' primary perimeter defenders is the series' defining battle, as SGA averaged north of 30 points per game in the postseason and San Antonio has been forced to throw multiple looks at him to keep Oklahoma City from pulling away.",
    narrative: "San Antonio, the underdog who clawed back from a 3-2 deficit to close the series in seven, has exposed OKC's vulnerability to length, disciplined ball movement, and veteran poise under pressure — elements the young Spurs core, galvanized by a rising star and Greg Popovich's fingerprints still on the organization's DNA, weaponized down the stretch. For Oklahoma City, the failure to close things out earlier reflects a recurring youth tax: moments of defensive breakdowns and shot-selection lapses that a savvy Spurs group has repeatedly punished. Now facing elimination's obverse — having been eliminated themselves — the Thunder's offseason reckoning will center on whether this group has the mental architecture to match their undeniable physical talent.",
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

/** True when the synced board has only NBA Finals series (or at least one finals-round matchup). */
export function isFinalsActive(): boolean {
  return playoffSeries.some((s) => s.round === "finals");
}

/** Team codes still playing in the NBA Finals (when `isFinalsActive()`). */
export function finalistTeams(): string[] {
  const teams = new Set<string>();
  for (const s of playoffSeries) {
    if (s.round !== "finals") continue;
    if (s.higherTeam !== "TBD") teams.add(canonPlayoffTeamCode(s.higherTeam));
    if (s.lowerTeam !== "TBD") teams.add(canonPlayoffTeamCode(s.lowerTeam));
  }
  return [...teams];
}

export function seriesById(seriesId: string): PlayoffSeries | undefined {
  return playoffSeries.find((s) => s.seriesId === seriesId);
}

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
