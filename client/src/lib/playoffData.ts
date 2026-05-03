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
    seriesId: "E1-BOS-PHI",
    conference: "east",
    round: "first-round",
    higherSeed: 99,
    lowerSeed: 99,
    higherTeam: "BOS",
    lowerTeam: "PHI",
    higherWins: 0,
    lowerWins: 1,
    status: "active",
    summary: "PHI leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-05-02", homeTeam: "BOS", awayTeam: "PHI", homeScore: 100, awayScore: 109, status: "final", time: "Final", tv: "NBC, Peacock", topPerformer: "Joel Embiid", topLine: "34 PTS · 12 REB · 6 AST" }
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
      { gameNumber: 1, date: "2026-04-30", homeTeam: "ATL", awayTeam: "NY", homeScore: 89, awayScore: 140, status: "final", time: "Final", tv: "ESPN", topPerformer: "OG Anunoby", topLine: "29 PTS · 7 REB · 2 AST" }
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
    higherWins: 0,
    lowerWins: 0,
    status: "upcoming",
    summary: "Series tied 0-0",
    games: [
      { gameNumber: 1, date: "2026-05-03", homeTeam: "CLE", awayTeam: "TOR", homeScore: null, awayScore: null, status: "scheduled", time: "5/3 - 7:30 PM EDT", tv: "NBC, Peacock" }
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
  "E1-BOS-PHI": {
    regularSeasonH2H: "Boston dominated the regular season series against Philadelphia, winning 3 of 4 matchups with their superior depth and execution in clutch moments.",
    playoffHistory: "These Eastern Conference rivals have met twice in recent playoff history, with Boston eliminating Philadelphia in both the 2018 and 2020 postseasons.",
    keyMatchup: "Jayson Tatum versus Joel Embiid represents the series' defining battle, as Tatum's versatility and mobility could exploit Embiid's defensive positioning while Embiid's interior dominance threatens Boston's paint protection.",
    narrative: "Philadelphia's Game 1 victory exposed Boston's vulnerability to physical playoff basketball and interior scoring dominance. For the Sixers to maintain control, Embiid must stay healthy and impose his will in the paint while role players like Tobias Harris continue stepping up. Boston's championship experience and deeper rotation should eventually surface, but they cannot afford to fall behind 2-0 at home.",
  },
  "E1-NY-ATL": {
    regularSeasonH2H: "The Knicks dominated the season series against Atlanta, winning 3 of 4 meetings with their physical defense and improved depth proving problematic for the Hawks' offensive flow.",
    playoffHistory: "These franchises have limited recent playoff history, with their most notable postseason encounter being the Hawks' first-round victory over New York in 2021.",
    keyMatchup: "Jalen Brunson versus Trae Young will define this series, as Brunson's 28.7 PPG regular season average and clutch playoff performance must counter Young's explosive scoring ability and court vision.",
    narrative: "Atlanta's path to victory runs through Trae Young's ability to create chaos and get to the free-throw line, while also finding consistent production from their supporting cast. The Knicks' suffocating defense and home-court advantage make them dangerous, but they're vulnerable if their offense stagnates and Young gets hot from deep.",
  },
  "E1-CLE-TOR": {
    regularSeasonH2H: "Cleveland and Toronto traded punches in the regular season—expect tight margins whenever two defense-minded East teams share the floor in the playoffs.",
    playoffHistory: "Previous eras featured memorable LeBron-led Cavs runs against the Raptors; this edition is a new chapter built around Cleveland's balance vs. Toronto's length.",
    keyMatchup: "Frontcourt rebounding and turnover battle—whoever wins the glass and limits live-ball mistakes likely controls pace in a low-possession series.",
    narrative: "Both clubs open the postseason with something to prove. The Cavs need their stars to hit timely jumpers when the paint packs; the Raptors must turn defense into transition and avoid late-clock stalls. Game 1 in Cleveland sets the tone for how physical the refs will let this series get.",
  },
  "E1-DET-ORL": {
    regularSeasonH2H: "Detroit and Orlando mirrored each other in stretches during the regular season—young cores, defensive intensity, and streaky shooting from the perimeter.",
    playoffHistory: "A fresh first-round pairing with limited shared postseason tape; the winner will lean on execution and depth when stars sit.",
    keyMatchup: "Cade Cunningham versus Paolo Banchero shapes half-court shot quality—both need efficient nights when the defense loads to their strong hand.",
    narrative: "This is a pace-and-paint series disguised as a guard showcase. The Pistons want downhill touches and second chances; the Magic lean on rotation length and rim protection. Whoever wins the first six minutes of each half usually holds the scoreboard when whistles tighten.",
  },
  "W1-LAL-HOU": {
    regularSeasonH2H: "The Lakers and Rockets split their regular season series 2-2, with both teams showing they could exploit each other's weaknesses in different matchups.",
    playoffHistory: "Houston holds a slight historical edge having eliminated the Lakers in their most recent playoff meeting, though these franchises have traded blows across multiple decades of postseason battles.",
    keyMatchup: "LeBron James versus whoever Houston throws at him will define possessions, as the King averaged 25.7 PPG against the Rockets this season while Houston's switching defense tries to wear him down.",
    narrative: "The Rockets' small-ball identity lives or dies by their three-point variance - they shot just 29% from deep in Game 1's loss. Houston needs to force pace and create transition chaos to steal games, because in half-court sets, the Lakers' size advantage becomes suffocating. This series hinges on whether the Rockets can recapture their regular season shooting touch before falling into an insurmountable hole.",
  },
  "W1-DEN-MIN": {
    regularSeasonH2H: "Denver won the season series 3-1, but three of the four games were decided by single digits, suggesting a closer matchup than the record indicates.",
    playoffHistory: "This marks the first playoff meeting between these franchises, adding extra intrigue to an already compelling first-round clash.",
    keyMatchup: "Nikola Jokić versus Rudy Gobert in the paint will define the series, as the reigning MVP averaged 26.4 PPG and 12.4 RPG this season while Gobert anchored the league's third-best defense.",
    narrative: "Minnesota's shocking Game 1 victory exposed Denver's road struggles and defensive vulnerabilities that plagued them all season. The Timberwolves must continue leveraging their elite defense and Anthony Edwards' explosive scoring to rattle a Nuggets team that looked championship-caliber at home but mortal away from Ball Arena. Denver's championship experience gives them the edge, but this young Minnesota core has the athleticism and defensive intensity to make this a grueling seven-game battle.",
  },
  "W1-SA-POR": {
    regularSeasonH2H: "San Antonio and Portland traded wins in the regular season—each game exposed how much the outcome swung on three-point variance and transition defense.",
    playoffHistory: "Spurs–Blazers playoff history is sparse in recent years; this first-round meeting is defined by Portland's shot-making vs. San Antonio's system and depth.",
    keyMatchup: "Deni Avdija's creation against San Antonio's disciplined shell—if the Spurs keep him off the free-throw line and run him into help, the half court tilts their way.",
    narrative: "Game 1 went San Antonio's way behind timely shot-making and control of the glass. Portland has to win the possession battle—extra possessions and fewer empty trips matter more than any one iso. A long series favors the team that sustains defensive energy through bench minutes.",
  },
  "W1-OKC-PHX": {
    regularSeasonH2H: "The Thunder took 3 of 4 regular season meetings, including a dominant 128-103 victory in their final matchup that showcased their superior depth and defensive intensity.",
    playoffHistory: "These franchises have no significant playoff history against each other, making this a fresh Western Conference clash between rising contenders.",
    keyMatchup: "Shai Gilgeous-Alexander versus Devin Booker will determine offensive pace and efficiency, with SGA averaging 30.1 PPG on superior shooting splits compared to Booker's 27.1 PPG this season.",
    narrative: "Phoenix has to keep pace with OKC's ball pressure and depth. Game 1 showed the Thunder can win the late-game shot-quality battle if the Suns' half-court offense stalls. Booker and Phoenix need cleaner two-man actions and fewer empty possessions when SGA is on the floor.",
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
