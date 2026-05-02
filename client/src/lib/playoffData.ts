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
    higherWins: 0,
    lowerWins: 0,
    status: "upcoming",
    summary: "Series tied 0-0",
    games: [
      { gameNumber: 1, date: "2026-05-03", homeTeam: "CLE", awayTeam: "TOR", homeScore: null, awayScore: null, status: "scheduled", time: "5/3 - 7:30 PM EDT", tv: "NBC, Peacock" }
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
      { gameNumber: 1, date: "2026-04-30", homeTeam: "ATL", awayTeam: "NY", homeScore: 89, awayScore: 140, status: "final", time: "Final", tv: "ESPN" }
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
    lowerWins: 0,
    status: "upcoming",
    summary: "Series tied 0-0",
    games: [
      { gameNumber: 1, date: "2026-05-02", homeTeam: "BOS", awayTeam: "PHI", homeScore: null, awayScore: null, status: "scheduled", time: "5/2 - 7:30 PM EDT", tv: "NBC, Peacock" }
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
    higherWins: 0,
    lowerWins: 0,
    status: "upcoming",
    summary: "Series tied 0-0",
    games: [
      { gameNumber: 1, date: "2026-05-03", homeTeam: "DET", awayTeam: "ORL", homeScore: null, awayScore: null, status: "scheduled", time: "5/3 - 3:30 PM EDT", tv: "ABC" }
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
      { gameNumber: 1, date: "2026-04-27", homeTeam: "PHX", awayTeam: "OKC", homeScore: 122, awayScore: 131, status: "final", time: "Final", tv: "NBCSN, Peacock" }
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
      { gameNumber: 1, date: "2026-04-30", homeTeam: "MIN", awayTeam: "DEN", homeScore: 110, awayScore: 98, status: "final", time: "Final", tv: "ESPN" }
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
      { gameNumber: 1, date: "2026-05-01", homeTeam: "HOU", awayTeam: "LAL", homeScore: 78, awayScore: 98, status: "final", time: "Final", tv: "Prime Video" }
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
      { gameNumber: 1, date: "2026-04-28", homeTeam: "SA", awayTeam: "POR", homeScore: 114, awayScore: 95, status: "final", time: "Final", tv: "ESPN" }
    ],
  },
  {
    seriesId: "W1-SA-MIN",
    conference: "west",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "SA",
    lowerTeam: "MIN",
    higherWins: 0,
    lowerWins: 0,
    status: "upcoming",
    summary: "Series tied 0-0",
    games: [
      { gameNumber: 1, date: "2026-05-08", homeTeam: "MIN", awayTeam: "SA", homeScore: null, awayScore: null, status: "scheduled", time: "5/8 - 9:30 PM EDT", tv: "Prime Video" }
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
    higherWins: 0,
    lowerWins: 0,
    status: "upcoming",
    summary: "Series tied 0-0",
    games: [
      { gameNumber: 1, date: "2026-05-09", homeTeam: "LAL", awayTeam: "OKC", homeScore: null, awayScore: null, status: "scheduled", time: "5/9 - 8:30 PM EDT", tv: "ABC" }
    ],
  }
];
// END_PLAYOFF_SERIES_SYNC

export const playoffMovers: PlayoffPulseMover[] = [
  {
    player: "Jaden McDaniels",
    team: "MIN",
    direction: "riser",
    delta: 7,
    playoffLine: "32.0 PPG · 10.0 RPG · 3.0 APG",
    note: "Explosive 32-point opener vs. Denver—Minnesota leaned on perimeter creation while Gobert battled Jokić inside.",
  },
  {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    direction: "riser",
    delta: 5,
    playoffLine: "31.0 PPG · 2.0 RPG · 8.0 APG",
    note: "MVP-caliber takeover in Phoenix; OKC piled on late behind his downhill pressure at the foul line.",
  },
  {
    player: "OG Anunoby",
    team: "NY",
    direction: "riser",
    delta: 5,
    playoffLine: "29.0 PPG · 7.0 RPG · 2.0 APG",
    note: "Game 1's scoring engine in Atlanta—efficient volume on the wing as the Knicks blew the doors open on the road.",
  },
  {
    player: "Julius Randle",
    team: "MIN",
    direction: "faller",
    delta: -4,
    playoffLine: "18.0 PPG · 35.3% FG",
    note: "Quiet 6-for-17 night as McDaniels and the supporting cast carried the offensive burden on opening night.",
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
  "E1-DET-ORL": {
    regularSeasonH2H: "DET won regular-season series 3-1; average margin +9.3 in Detroit victories",
    playoffHistory: "First playoff meeting since 2008 when Orlando upset Detroit in the second round 4-1",
    keyMatchup: "Cade Cunningham vs. Paolo Banchero — two franchise cornerstones who have combined for 48.9 PPG in H2H matchups this season",
    narrative: "Detroit enters as the East's top seed after a historic 60-22 campaign, but Orlando is the kind of long, switchy team built to give top-heavy offenses problems. If Banchero can neutralize Cunningham and force Jaden Ivey to beat them, a Magic upset isn't out of the question.",
  },
  "E1-BOS-PHI": {
    regularSeasonH2H: "Tied 2-2; both road teams won by double digits",
    playoffHistory: "Fifth postseason meeting since 2018; Boston leads the all-time series 3-1",
    keyMatchup: "Jayson Tatum vs. Joel Embiid — Tatum averaged 28.4 PPG over his last five including 31 in February's MSG matchup",
    narrative: "Philadelphia is the most dangerous seven-seed the East has produced in years because Embiid still bends the floor the moment he gets the ball at the elbow. Boston's counter is depth — but if Tatum goes cold and Al Horford can't check Embiid one-on-one, this series gets extremely interesting.",
  },
  "E1-NY-ATL": {
    regularSeasonH2H: "NY won series 3-1; Brunson averaged 28.8 in those four games",
    playoffHistory: "First playoff meeting since 1999 when NY knocked off Atlanta 4-0 en route to the Finals",
    keyMatchup: "Jalen Brunson vs. Trae Young — two elite half-court scorers with mirrored games and opposite team contexts",
    narrative: "New York's Game 1 road destruction was a total team blitz—Anunoby and Bridges combined for efficient volume while the defense strangled Atlanta's pace. Young has to create early advantage looks or this series gets away from State Farm Arena in a hurry.",
  },
  "E1-CLE-TOR": {
    regularSeasonH2H: "CLE won series 3-1 with Mobley averaging 22.4 PPG and 10.8 RPG",
    playoffHistory: "Third postseason meeting; Toronto famously swept Cleveland 4-0 in 2018 second round",
    keyMatchup: "Evan Mobley vs. Scottie Barnes — two of the East's best young two-way forwards with overlapping skillsets",
    narrative: "Game 1 in Cleveland resets the postseason script for Barnes and Barrett after a turbulent close to the season. Control the glass and limit transition—if Toronto's wings keep Mobley from living at the rim, this series has upset teeth.",
  },
  "W1-OKC-PHX": {
    regularSeasonH2H: "OKC won series 4-0 by an average margin of 12.8",
    playoffHistory: "First playoff meeting since 2010 first round when PHX won 4-2",
    keyMatchup: "Shai Gilgeous-Alexander vs. Devin Booker — both averaged 32+ in this season's four H2H meetings",
    narrative: "SGA poured in 31 with eight assists as OKC salted away a road Game 1—Holmgren's double-double on the interior kept Phoenix honest on Booker doubles. Durant and Book need cleaner late-clock turns; the Thunder swarm has answers for iso-heavy nights.",
  },
  "W1-SA-POR": {
    regularSeasonH2H: "SA won series 4-0; Wembanyama averaged 25.1 PPG and 4.6 BPG vs POR",
    playoffHistory: "First playoff meeting in franchise history",
    keyMatchup: "Victor Wembanyama vs. Deandre Ayton — size meets size, but Wemby's shot profile is in another universe",
    narrative: "Wembanyama dominated the paint in the opener (17 pts, 14 reb, 6 blk) even without a huge shot diet—Portland's interior looks vaporized. Fox's playmaking (21-9) steadied the half-court; Portland needs Avdija's downhill pressure to translate on the road in Game 2.",
  },
  "W1-DEN-MIN": {
    regularSeasonH2H: "Tied 2-2; final meeting (March 28) went to overtime",
    playoffHistory: "Rematch of 2024 Western Conference semifinals which MIN won 4-3 after famously blowing a 3-0 lead",
    keyMatchup: "Nikola Jokić vs. Rudy Gobert — the matchup that decided last year's series and will decide this one",
    narrative: "Jokić posted a vintage 28-9-10 line in the opener and still walked off with a loss—McDaniels detonated for 32 as Minnesota wrestled home court. Denver's half-court math holds; the question is whether the Wolves' collective length can keep winning the possession war when the pace tightens.",
  },
  "W1-LAL-HOU": {
    regularSeasonH2H: "LAL won series 3-1; Davis averaged 26.0 PPG and 12.3 RPG",
    playoffHistory: "First playoff meeting since 2020 bubble when LAL won 4-1 en route to the title",
    keyMatchup: "Anthony Davis vs. Alperen Şengün — finesse center meets switchable rim-protector",
    narrative: "LeBron (28-7-8) piloted a suffocating road win while Houston's half-court offense bogged down—Şengün battled but the Rockets never found secondary shot creation. If AD is back to full minutes in Game 2, the defensive ceiling only climbs for L.A.",
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
