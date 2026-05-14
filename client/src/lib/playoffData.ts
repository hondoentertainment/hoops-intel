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
    seriesId: "E2-DET-CLE",
    conference: "east",
    round: "conference-semifinals",
    higherSeed: 1,
    lowerSeed: 4,
    higherTeam: "DET",
    lowerTeam: "CLE",
    higherWins: 2,
    lowerWins: 3,
    status: "active",
    summary: "CLE leads 3-2",
    games: [
      { gameNumber: 1, date: "2026-05-05", homeTeam: "DET", awayTeam: "CLE", homeScore: 111, awayScore: 101, status: "final", topPerformer: "Cade Cunningham", topLine: "28 PTS · 10 AST · 5 REB" },
      { gameNumber: 2, date: "2026-05-07", homeTeam: "DET", awayTeam: "CLE", homeScore: 108, awayScore: 102, status: "final", topPerformer: "Caris LeVert", topLine: "22 PTS off bench" },
      { gameNumber: 3, date: "2026-05-09", homeTeam: "CLE", awayTeam: "DET", homeScore: 116, awayScore: 109, status: "final", topPerformer: "Donovan Mitchell", topLine: "35 PTS · 13-24 FG" },
      { gameNumber: 4, date: "2026-05-11", homeTeam: "CLE", awayTeam: "DET", homeScore: 112, awayScore: 103, status: "final", topPerformer: "Donovan Mitchell", topLine: "43 PTS · 39 in 2nd half" },
      { gameNumber: 5, date: "2026-05-13", homeTeam: "DET", awayTeam: "CLE", homeScore: 113, awayScore: 117, status: "final", topPerformer: "James Harden", topLine: "30 PTS · 8 REB · 6 AST · 3 BLK (OT)" },
      { gameNumber: 6, date: "2026-05-15", homeTeam: "CLE", awayTeam: "DET", homeScore: null, awayScore: null, status: "scheduled", time: "TBD", tv: "ESPN" },
    ],
  },
  {
    seriesId: "E2-NYK-PHI",
    conference: "east",
    round: "conference-semifinals",
    higherSeed: 3,
    lowerSeed: 7,
    higherTeam: "NYK",
    lowerTeam: "PHI",
    higherWins: 4,
    lowerWins: 0,
    status: "complete",
    winner: "NYK",
    summary: "NYK wins 4-0",
    games: [
      { gameNumber: 1, date: "2026-05-05", homeTeam: "NYK", awayTeam: "PHI", homeScore: 108, awayScore: 94, status: "final", topPerformer: "Jalen Brunson", topLine: "29 PTS · 7 AST" },
      { gameNumber: 2, date: "2026-05-07", homeTeam: "NYK", awayTeam: "PHI", homeScore: 112, awayScore: 101, status: "final", topPerformer: "Karl-Anthony Towns", topLine: "26 PTS · 12 REB" },
      { gameNumber: 3, date: "2026-05-09", homeTeam: "PHI", awayTeam: "NYK", homeScore: 94, awayScore: 108, status: "final", topPerformer: "Jalen Brunson", topLine: "33 PTS · 11-22 FG" },
      { gameNumber: 4, date: "2026-05-11", homeTeam: "PHI", awayTeam: "NYK", homeScore: 114, awayScore: 144, status: "final", topPerformer: "Miles McBride", topLine: "25 PTS · 7-9 3PT" },
    ],
  },
  {
    seriesId: "W2-OKC-LAL",
    conference: "west",
    round: "conference-semifinals",
    higherSeed: 1,
    lowerSeed: 4,
    higherTeam: "OKC",
    lowerTeam: "LAL",
    higherWins: 4,
    lowerWins: 0,
    status: "complete",
    winner: "OKC",
    summary: "OKC wins 4-0",
    games: [
      { gameNumber: 1, date: "2026-05-05", homeTeam: "OKC", awayTeam: "LAL", homeScore: 118, awayScore: 102, status: "final", topPerformer: "Shai Gilgeous-Alexander", topLine: "30 PTS · 7 AST" },
      { gameNumber: 2, date: "2026-05-07", homeTeam: "OKC", awayTeam: "LAL", homeScore: 122, awayScore: 108, status: "final", topPerformer: "Shai Gilgeous-Alexander", topLine: "28 PTS · 6 AST" },
      { gameNumber: 3, date: "2026-05-09", homeTeam: "LAL", awayTeam: "OKC", homeScore: 108, awayScore: 131, status: "final", topPerformer: "Ajay Mitchell", topLine: "24 PTS · 10 AST" },
      { gameNumber: 4, date: "2026-05-11", homeTeam: "LAL", awayTeam: "OKC", homeScore: 110, awayScore: 115, status: "final", topPerformer: "Shai Gilgeous-Alexander", topLine: "35 PTS · 8 AST" },
    ],
  },
  {
    seriesId: "W2-SAS-MIN",
    conference: "west",
    round: "conference-semifinals",
    higherSeed: 2,
    lowerSeed: 6,
    higherTeam: "SAS",
    lowerTeam: "MIN",
    higherWins: 3,
    lowerWins: 2,
    status: "active",
    summary: "SAS leads 3-2",
    games: [
      { gameNumber: 1, date: "2026-05-05", homeTeam: "SAS", awayTeam: "MIN", homeScore: 108, awayScore: 99, status: "final", topPerformer: "Victor Wembanyama", topLine: "28 PTS · 12 REB · 4 BLK" },
      { gameNumber: 2, date: "2026-05-07", homeTeam: "SAS", awayTeam: "MIN", homeScore: 104, awayScore: 110, status: "final", topPerformer: "Anthony Edwards", topLine: "32 PTS · 7 REB" },
      { gameNumber: 3, date: "2026-05-09", homeTeam: "MIN", awayTeam: "SAS", homeScore: 108, awayScore: 115, status: "final", topPerformer: "Victor Wembanyama", topLine: "39 PTS · 15 REB · 5 BLK" },
      { gameNumber: 4, date: "2026-05-11", homeTeam: "MIN", awayTeam: "SAS", homeScore: 114, awayScore: 109, status: "final", topPerformer: "Anthony Edwards", topLine: "36 PTS · 6 REB (Wemby ejected)" },
      { gameNumber: 5, date: "2026-05-12", homeTeam: "SAS", awayTeam: "MIN", homeScore: 126, awayScore: 97, status: "final", topPerformer: "Victor Wembanyama", topLine: "27 PTS · 17 REB · 3 BLK" },
      { gameNumber: 6, date: "2026-05-15", homeTeam: "MIN", awayTeam: "SAS", homeScore: null, awayScore: null, status: "scheduled", time: "TBD", tv: "TBD" },
    ],
  },
];
// END_PLAYOFF_SERIES_SYNC

export const playoffMovers: PlayoffPulseMover[] = [
  {
    player: "James Harden",
    team: "CLE",
    direction: "riser",
    delta: 14,
    playoffLine: "30.0 PPG · 8.0 RPG · 6.0 APG · 3 BLK (Game 5)",
    note: "Playoff-best 30 points with 11-14 FT and 3 blocks drove Cleveland's 9-point comeback in the final minutes. The Beard's best game in two years puts CLE one win from the East Finals.",
  },
  {
    player: "Max Strus",
    team: "CLE",
    direction: "riser",
    delta: 12,
    playoffLine: "20.0 PPG · 8.0 RPG · 6-8 3PT (Game 5)",
    note: "6-of-8 from three (75%) for 20 points in the OT win — the most efficient three-point shooting performance of the 2026 playoffs. CLE's X-factor.",
  },
  {
    player: "Cade Cunningham",
    team: "DET",
    direction: "riser",
    delta: 8,
    playoffLine: "39.0 PPG · 7.0 RPG · 9.0 APG (Game 5)",
    note: "39/7/9 with 6 threes in 48 minutes — the best individual performance by a losing player in the 2026 playoffs. Facing elimination despite his brilliance.",
  },
  {
    player: "Tobias Harris",
    team: "DET",
    direction: "faller",
    delta: -10,
    playoffLine: "13.0 PPG · 6.0 RPG · 6-19 FG (Game 5)",
    note: "Shot 6-of-19 (31.6%) including 1-of-7 from three while Cunningham scored 39. Detroit's second option disappeared when it mattered most.",
  },
  {
    player: "Anthony Edwards",
    team: "MIN",
    direction: "faller",
    delta: -8,
    playoffLine: "20.0 PPG · 6-13 FG (Game 5)",
    note: "Quietest game of the series in a 29-point blowout loss. Faces elimination Friday at home — needs a legacy-defining response.",
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
    regularSeasonH2H: "The Knicks and 76ers split their 2024-25 regular-season meetings competitively, with both teams trading wins in a rivalry defined by physicality and contested half-court possessions.",
    playoffHistory: "These franchises have met multiple times in the playoffs, most notably in the 2023 first round when New York outlasted Philadelphia in six games, with Julius Randle and Jalen Brunson powering the Knicks past a Joel Embiid-led Sixers squad.",
    keyMatchup: "Jalen Brunson against Philadelphia's primary ball-handler defender is the axis of the series — Brunson averaged over 28 points per game in the 2023 playoff meeting and his ability to create in the mid-range and at the rim dictates New York's offensive ceiling.",
    narrative: "With New York up 1-0 and holding home-court momentum, Philadelphia must solve its defensive identity crisis and get consistent production beyond its star players to claw back into the series. The Sixers are vulnerable to New York's suffocating switching defense and relentless offensive rebounding, schemes Tom Thibodeau has weaponized against this franchise before. For Philadelphia to survive, it needs a vintage performance from its cornerstone and must eliminate the turnover lapses that have gifted the Knicks easy transition opportunities.",
  },
  "E1-DET-ORL": {
    regularSeasonH2H: "Detroit and Orlando split their regular-season meetings in 2024-25, with both teams trading home wins in a pair of competitive, defense-first contests that offered little separation between two young, rebuilding rosters.",
    playoffHistory: "The Pistons and Magic have virtually no meaningful shared playoff history in the modern era, making this a fresh postseason rivalry defined by youth rather than institutional memory.",
    keyMatchup: "Cade Cunningham vs. Franz Wagner is the series-defining duel, with Cunningham averaging over 25 points and 9 assists per game this season against Wagner's 25-point scoring punch and versatile two-way presence that can guard multiple positions.",
    narrative: "Orlando enters as the team that must reclaim home-court momentum after dropping Game 1, and their path back runs through Paolo Banchero imposing his will in the post while the Magic's defense locks down Detroit's transition attack. The Pistons, buoyed by an electric Game 1 performance and the confidence of a franchise snapping a historic playoff drought, are vulnerable if Cunningham faces consistent double-teams that force role players into pressure moments. If Orlando can slow the pace and turn this into a half-court grind, their length and defensive versatility make them capable of taking the next three — but one more road loss may prove insurmountable.",
  },
  "E1-TOR-CLE": {
    regularSeasonH2H: "Toronto and Cleveland split their 2024-25 regular-season meetings, with neither team establishing clear dominance heading into the postseason.",
    playoffHistory: "The Cavaliers hold the edge in playoff history between these franchises, most memorably eliminating Toronto in the 2017 and 2018 Eastern Conference Finals en route to NBA Finals appearances.",
    keyMatchup: "Darius Garland against Toronto's backcourt defenders is the series' defining battle, as Garland's pick-and-roll orchestration and mid-range efficiency — he averaged over 21 points per game this season — will dictate Cleveland's offensive rhythm on a nightly basis.",
    narrative: "With Cleveland already up 1-0, Toronto must tighten its defensive rotations against a Cavaliers offense that feasts on miscommunication in drop coverage — the Raptors' path back into this series runs through limiting Garland in the pick-and-roll and finding consistent secondary scoring beyond their own lead guard. Cleveland, however, is not invulnerable: if Toronto can push pace, crash the offensive glass, and force Evan Mobley into foul trouble, the series could shift quickly. The Raptors need a defining home performance in Game 2 to reset the psychological tenor before this series gets away from them entirely.",
  },
  "W1-OKC-LAL": {
    regularSeasonH2H: "OKC won the season series against the Lakers in 2024-25, with Shai Gilgeous-Alexander consistently torching LA's perimeter defense in each meeting.",
    playoffHistory: "The Thunder and Lakers have a storied postseason rivalry dating back to the Westbrook-Durant era, with Los Angeles holding the historical edge, though OKC's current core has no shared playoff history with this Lakers squad.",
    keyMatchup: "Shai Gilgeous-Alexander against LeBron James and the Lakers' defensive scheme is the series' defining chess match, with SGA averaging 32+ points per game this season and the Lakers lacking a credible one-on-one stopper for him.",
    narrative: "For the Lakers to claw back in this series, LeBron James must assert vintage playmaking authority while Anthony Davis dominates the paint against OKC's younger frontcourt — any passive performance from either star and the Thunder's suffocating defensive system will bury them. OKC is vulnerable only at the free-throw line and in half-court sets where veteran savvy can slow their transition-heavy attack, meaning LA must grind this into a halfcourt slug fest. If the Lakers can't solve Gilgeous-Alexander and get consistent secondary scoring from Austin Reaves, OKC's depth and defensive IQ make a quick series exit for LA a very real possibility.",
  },
  "W1-MIN-DEN": {
    regularSeasonH2H: "Minnesota and Denver split their regular-season meetings in 2024-25, with each team winning on the other's floor, signaling a closely contested series from the jump.",
    playoffHistory: "These franchises met in the 2024 Western Conference Semifinals, where the Timberwolves stunned the defending-champion Nuggets in five games, ending Denver's title defense and giving Minnesota its first series win over Denver in franchise playoff history.",
    keyMatchup: "Nikola Jokić versus Rudy Gobert is the series' defining battle — Jokić averaged 29.7 points, 13.7 rebounds, and 10.2 assists against Minnesota in the 2024 playoff series, but Gobert's rim protection and physicality remain the Wolves' best deterrent to limiting his damage in the paint.",
    narrative: "Denver enters this series as the more vulnerable favorite, having lost Anthony Murray Jr. to injury concerns and now facing a Wolves team that has already cracked the Jokić code in recent memory. For the Nuggets to claw back from a 0-1 hole, Jamal Murray must recapture his clutch-shot identity and Michael Porter Jr. needs to impose himself as a third offensive weapon before Minnesota's length and pace smother Denver's half-court offense. Minnesota's path to a sweep of the series runs directly through sustaining the defensive pressure and transition game that dominated Game 1, making Anthony Edwards' aggression and the Wolves' bench depth the two variables that could make this a short series.",
  },
  "W1-POR-SA": {
    regularSeasonH2H: "Portland and San Antonio split their regular-season meetings this year, with each team defending home court in a pair of competitive, low-stakes late-season games.",
    playoffHistory: "The Spurs have historically held the upper hand in playoff meetings with Portland, most notably eliminating the Trail Blazers in the 1999 and 2014 postseasons on their way to championships, giving San Antonio a commanding edge in the all-time series.",
    keyMatchup: "The most critical individual battle is Portland's primary ball-handler against San Antonio's defensive anchor in the pick-and-roll — the Blazers' ability to generate clean mid-range and three-point looks off that action will largely dictate offensive efficiency for the series.",
    narrative: "With San Antonio holding a 1-0 lead, Portland must tighten its transition defense and limit second-chance opportunities, areas where the Spurs exploited them in Game 1. The Trail Blazers are most dangerous when their offense flows through pace and three-point volume, so slowing San Antonio's deliberate half-court execution to force a track-meet style is their clearest path back into the series. If Portland can steal one on the road and return home with momentum, the series resets entirely — but another slow start could make the deficit insurmountable quickly.",
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
