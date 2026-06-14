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
    seriesId: "F4-SAS-NYK",
    conference: "finals",
    round: "finals",
    higherSeed: 2,
    lowerSeed: 3,
    higherTeam: "SAS",
    lowerTeam: "NYK",
    higherWins: 1,
    lowerWins: 4,
    status: "complete",
    winner: "NYK",
    summary: "NYK wins 4-1",
    games: [
      { gameNumber: 1, date: "2026-06-03", homeTeam: "SAS", awayTeam: "NYK", homeScore: 95, awayScore: 105, status: "final", time: "Final", tv: "ABC" },
      { gameNumber: 2, date: "2026-06-05", homeTeam: "SAS", awayTeam: "NYK", homeScore: 104, awayScore: 105, status: "final", time: "Final", tv: "ABC" },
      { gameNumber: 3, date: "2026-06-08", homeTeam: "NYK", awayTeam: "SAS", homeScore: 111, awayScore: 115, status: "final", time: "Final", tv: "ABC" },
      { gameNumber: 4, date: "2026-06-10", homeTeam: "NYK", awayTeam: "SAS", homeScore: 107, awayScore: 106, status: "final", time: "Final", tv: "ABC" },
      { gameNumber: 5, date: "2026-06-13", homeTeam: "SAS", awayTeam: "NYK", homeScore: 90, awayScore: 94, status: "final", time: "Final", tv: "ABC" }
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
    regularSeasonH2H: "The Knicks and Cavaliers split their 2024-25 regular-season meetings evenly, with home court proving decisive in each contest.",
    playoffHistory: "These franchises have met rarely in the postseason, with their most notable prior clash coming in the 1990s when New York's physical style dominated Cleveland en route to deeper runs.",
    keyMatchup: "Jalen Brunson's relentless pick-and-roll mastery against Darius Garland's defensive limitations has been the defining engine of the series, with Brunson averaging elite scoring and shot-creation numbers that Cleveland's drop coverage has failed to contain across all four games.",
    narrative: "With the Knicks holding a commanding 4-0 series lead, Cleveland's season is effectively over, exposing how the Cavaliers' regular-season success masked real vulnerabilities in half-court defensive execution and perimeter shot creation under playoff pressure. New York's suffocating team defense and Brunson's clutch reliability have left Cleveland with no adjustments capable of reversing the tide. The Knicks advance to the NBA Finals as the clear, dominant force in the Eastern Conference.",
  },
  "F4-SAS-NYK": {
    regularSeasonH2H: "The Spurs and Knicks split their regular-season meetings this year, with each team claiming one home victory in a pair of competitive, defensively grounded contests.",
    playoffHistory: "These franchises have rarely crossed paths in the postseason, with their most notable prior meeting dating to the late 1990s Eastern-Western Conference era before conference realignment reshuffled playoff brackets.",
    keyMatchup: "The series hinges on the battle between San Antonio's ascending frontcourt presence and New York's Jalen Brunson, who has used relentless pick-and-roll creativity to average north of 28 points through the first three games and dictate the Knicks' offensive tempo.",
    narrative: "New York holds the series edge by exploiting San Antonio's defensive rotations in the mid-range and forcing the Spurs' younger pieces into foul trouble late in close games. For the Spurs to claw back, they must tighten their transition defense — the Knicks are converting over 1.15 points per fastbreak possession — and find a consistent secondary creator to take pressure off their primary ball-handler. San Antonio's championship experience gives them a structural edge, but Brunson's fourth-quarter dominance has exposed a real vulnerability: the Spurs simply have no reliable answer when the game slows down and he operates in isolation.",
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
