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
  // ═══ EAST SECOND ROUND ═══
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
      { gameNumber: 1, date: "2026-05-03", homeTeam: "NYK", awayTeam: "PHI", homeScore: 137, awayScore: 98, status: "final", tv: "ABC", topPerformer: "Jalen Brunson", topLine: "NYK 137-98" },
      { gameNumber: 2, date: "2026-05-05", homeTeam: "NYK", awayTeam: "PHI", homeScore: 108, awayScore: 102, status: "final", tv: "NBC", topPerformer: "Jalen Brunson", topLine: "NYK 108-102" },
      { gameNumber: 3, date: "2026-05-08", homeTeam: "PHI", awayTeam: "NYK", homeScore: 94, awayScore: 108, status: "final", tv: "ESPN", topPerformer: "Jalen Brunson", topLine: "NYK 108-94" },
      { gameNumber: 4, date: "2026-05-10", homeTeam: "PHI", awayTeam: "NYK", homeScore: 114, awayScore: 144, status: "final", tv: "ABC", topPerformer: "Miles McBride", topLine: "25 PTS · 7-9 3PT" }
    ],
  },
  {
    seriesId: "E2-DET-CLE",
    conference: "east",
    round: "conference-semifinals",
    higherSeed: 1,
    lowerSeed: 4,
    higherTeam: "DET",
    lowerTeam: "CLE",
    higherWins: 2,
    lowerWins: 1,
    status: "active",
    eliminationGame: false,
    summary: "DET leads 2-1",
    games: [
      { gameNumber: 1, date: "2026-05-04", homeTeam: "DET", awayTeam: "CLE", homeScore: null, awayScore: null, status: "final", tv: "NBC" },
      { gameNumber: 2, date: "2026-05-06", homeTeam: "DET", awayTeam: "CLE", homeScore: null, awayScore: null, status: "final", tv: "NBC" },
      { gameNumber: 3, date: "2026-05-09", homeTeam: "CLE", awayTeam: "DET", homeScore: null, awayScore: null, status: "final", tv: "NBC" },
      { gameNumber: 4, date: "2026-05-11", homeTeam: "CLE", awayTeam: "DET", homeScore: null, awayScore: null, status: "scheduled", time: "8:00 PM ET", tv: "NBC, Peacock" }
    ],
  },
  // ═══ WEST SECOND ROUND ═══
  {
    seriesId: "W2-OKC-LAL",
    conference: "west",
    round: "conference-semifinals",
    higherSeed: 1,
    lowerSeed: 4,
    higherTeam: "OKC",
    lowerTeam: "LAL",
    higherWins: 3,
    lowerWins: 0,
    status: "active",
    eliminationGame: true,
    summary: "OKC leads 3-0",
    games: [
      { gameNumber: 1, date: "2026-05-04", homeTeam: "OKC", awayTeam: "LAL", homeScore: null, awayScore: null, status: "final", tv: "Prime Video" },
      { gameNumber: 2, date: "2026-05-06", homeTeam: "OKC", awayTeam: "LAL", homeScore: null, awayScore: null, status: "final", tv: "Prime Video" },
      { gameNumber: 3, date: "2026-05-09", homeTeam: "LAL", awayTeam: "OKC", homeScore: null, awayScore: null, status: "final", tv: "Prime Video" },
      { gameNumber: 4, date: "2026-05-11", homeTeam: "LAL", awayTeam: "OKC", homeScore: null, awayScore: null, status: "scheduled", time: "10:30 PM ET", tv: "Prime Video" }
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
    higherWins: 2,
    lowerWins: 2,
    status: "active",
    summary: "Series tied 2-2",
    games: [
      { gameNumber: 1, date: "2026-05-04", homeTeam: "SAS", awayTeam: "MIN", homeScore: null, awayScore: null, status: "final", tv: "NBC" },
      { gameNumber: 2, date: "2026-05-06", homeTeam: "SAS", awayTeam: "MIN", homeScore: null, awayScore: null, status: "final", tv: "NBC" },
      { gameNumber: 3, date: "2026-05-08", homeTeam: "MIN", awayTeam: "SAS", homeScore: null, awayScore: null, status: "final", tv: "NBC" },
      { gameNumber: 4, date: "2026-05-10", homeTeam: "MIN", awayTeam: "SAS", homeScore: 114, awayScore: 109, status: "final", tv: "NBC, Peacock", topPerformer: "Anthony Edwards", topLine: "36 PTS · 6 REB · 13-22 FG" },
      { gameNumber: 5, date: "2026-05-12", homeTeam: "SAS", awayTeam: "MIN", homeScore: null, awayScore: null, status: "scheduled", time: "8:00 PM ET", tv: "NBC" }
    ],
  },
  // ═══ EAST FIRST ROUND (complete) ═══
  {
    seriesId: "E1-DET-ORL",
    conference: "east",
    round: "first-round",
    higherSeed: 1,
    lowerSeed: 8,
    higherTeam: "DET",
    lowerTeam: "ORL",
    higherWins: 4,
    lowerWins: 3,
    status: "complete",
    winner: "DET",
    summary: "DET wins 4-3 (came back from 1-3)",
    games: [],
  },
  {
    seriesId: "E1-BOS-PHI",
    conference: "east",
    round: "first-round",
    higherSeed: 2,
    lowerSeed: 7,
    higherTeam: "BOS",
    lowerTeam: "PHI",
    higherWins: 3,
    lowerWins: 4,
    status: "complete",
    winner: "PHI",
    summary: "PHI wins 4-3 (BOS blew 3-1 lead)",
    games: [],
  },
  {
    seriesId: "E1-NYK-TOR",
    conference: "east",
    round: "first-round",
    higherSeed: 3,
    lowerSeed: 6,
    higherTeam: "NYK",
    lowerTeam: "TOR",
    higherWins: 4,
    lowerWins: 0,
    status: "complete",
    winner: "NYK",
    summary: "NYK wins series",
    games: [],
  },
  {
    seriesId: "E1-CLE-ATL",
    conference: "east",
    round: "first-round",
    higherSeed: 4,
    lowerSeed: 5,
    higherTeam: "CLE",
    lowerTeam: "ATL",
    higherWins: 4,
    lowerWins: 0,
    status: "complete",
    winner: "CLE",
    summary: "CLE wins series",
    games: [],
  },
  // ═══ WEST FIRST ROUND (complete) ═══
  {
    seriesId: "W1-OKC-PHX",
    conference: "west",
    round: "first-round",
    higherSeed: 1,
    lowerSeed: 8,
    higherTeam: "OKC",
    lowerTeam: "PHX",
    higherWins: 4,
    lowerWins: 0,
    status: "complete",
    winner: "OKC",
    summary: "OKC wins series",
    games: [],
  },
  {
    seriesId: "W1-SAS-POR",
    conference: "west",
    round: "first-round",
    higherSeed: 2,
    lowerSeed: 7,
    higherTeam: "SAS",
    lowerTeam: "POR",
    higherWins: 4,
    lowerWins: 0,
    status: "complete",
    winner: "SAS",
    summary: "SAS wins series",
    games: [],
  },
  {
    seriesId: "W1-DEN-MIN",
    conference: "west",
    round: "first-round",
    higherSeed: 3,
    lowerSeed: 6,
    higherTeam: "DEN",
    lowerTeam: "MIN",
    higherWins: 0,
    lowerWins: 4,
    status: "complete",
    winner: "MIN",
    summary: "MIN wins series (upset)",
    games: [],
  },
  {
    seriesId: "W1-LAL-HOU",
    conference: "west",
    round: "first-round",
    higherSeed: 4,
    lowerSeed: 5,
    higherTeam: "LAL",
    lowerTeam: "HOU",
    higherWins: 4,
    lowerWins: 0,
    status: "complete",
    winner: "LAL",
    summary: "LAL wins series",
    games: [],
  },
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
  "E1-DET-ORL": {
    regularSeasonH2H: "Detroit won the regular-season series behind Cade Cunningham's playmaking and a defense that held Orlando's offense below its season average in three of four meetings.",
    playoffHistory: "First playoff meeting between these franchises since the 2008 first round, when the Pistons dispatched the Magic in five games during the final year of Detroit's mid-2000s dynasty.",
    keyMatchup: "Cade Cunningham vs. Paolo Banchero headlined the series, with Cunningham's all-around play ultimately wearing down Orlando's defense across seven games.",
    narrative: "Detroit completed one of the most dramatic comebacks in recent playoff history, rallying from a 3-1 deficit to win Games 5, 6, and 7 and eliminate Orlando. The Pistons' resilience proved prophetic — a team forged in comeback fire entered the second round with a confidence few opponents can match.",
  },
  "E1-BOS-PHI": {
    regularSeasonH2H: "Boston held the regular-season edge as the East's No. 2 seed, but Philadelphia's inconsistency masked a playoff ceiling that proved dangerously high when Embiid, Maxey, and George all hit form simultaneously.",
    playoffHistory: "A rivalry renewed — Boston and Philadelphia have a deep playoff history stretching from the Bird-Erving era to the Tatum-Embiid clashes of the 2020s. The Sixers stunned the NBA world by coming back from 1-3.",
    keyMatchup: "Joel Embiid's two-way dominance and Tyrese Maxey's scoring explosiveness eventually overwhelmed Boston's defensive schemes, as the Celtics' historic 3-1 collapse became the defining upset of Round 1.",
    narrative: "Philadelphia pulled off the biggest upset of the first round, coming back from a 3-1 series deficit to eliminate the defending-era Celtics. The Sixers rode Embiid's dominant interior play and Maxey's fearless shot-making to win three consecutive elimination games — only to run into the Knicks buzzsaw in the second round.",
  },
  "E1-NYK-TOR": {
    regularSeasonH2H: "New York controlled the regular-season series with superior depth and Brunson's consistent scoring, setting the tone for a playoff matchup the Knicks entered as heavy favorites.",
    playoffHistory: "New York and Toronto have limited direct playoff history, making this a relatively fresh first-round matchup without the emotional baggage of deeper rivalries.",
    keyMatchup: "Jalen Brunson's scoring versatility proved too much for Toronto's defensive schemes as the Knicks dispatched the Raptors efficiently to set up their dominant second-round sweep.",
    narrative: "The Knicks handled Toronto with the clinical efficiency of a team built for deeper playoff runs. New York's balanced attack and suffocating defense dismissed the Raptors and advanced to face Philadelphia in a second-round matchup they would dominate even more completely.",
  },
  "E1-CLE-ATL": {
    regularSeasonH2H: "Cleveland's home-court advantage proved decisive in the regular season, with the Cavaliers winning three of four meetings behind Donovan Mitchell's scoring and Evan Mobley's defensive versatility.",
    playoffHistory: "A first-round matchup between two teams seeking deeper playoff runs — Cleveland's 2024 second-round exit and Atlanta's inconsistent postseason history gave both franchises something to prove.",
    keyMatchup: "Donovan Mitchell's scoring explosiveness overwhelmed Trae Young's offense-first approach, as Cleveland's defensive structure neutralized Atlanta's pick-and-roll attack.",
    narrative: "Cleveland advanced through Atlanta with Mitchell leading the way, setting up a second-round collision with Detroit that has produced one of the most compelling series in the East. The Cavaliers' balanced approach worked against the Hawks but faces a sterner test against the Pistons' comeback mentality.",
  },
  "W1-OKC-PHX": {
    regularSeasonH2H: "OKC dominated the regular-season series with their league-best defense holding Phoenix's trio of stars below their scoring averages in every meeting.",
    playoffHistory: "Oklahoma City and Phoenix met in the 2024 first round where the Thunder's young core gained invaluable experience. The 2026 edition was even more lopsided in OKC's favor.",
    keyMatchup: "SGA's two-way dominance rendered Kevin Durant, Devin Booker, and Bradley Beal ineffective — the Thunder's defensive system turned Phoenix's star power into a liability.",
    narrative: "The Thunder's first-round dismissal of Phoenix was a statement of intent — the league's best regular-season team validated their credentials against a star-laden Suns roster that never found its footing. OKC's depth and defensive excellence carried seamlessly into the postseason.",
  },
  "W1-SAS-POR": {
    regularSeasonH2H: "San Antonio's 62-win season included convincing regular-season victories over Portland, with Wembanyama's two-way impact proving insurmountable for the Trail Blazers' young roster.",
    playoffHistory: "A classic franchise matchup revived — the Spurs and Trail Blazers have deep playoff history from the Duncan-era West, but the 2026 edition featured Wembanyama establishing his own postseason legacy.",
    keyMatchup: "Victor Wembanyama's combination of scoring, shot-blocking, and playmaking overwhelmed Portland's frontcourt — a preview of the dominance he would display even more spectacularly in Round 2.",
    narrative: "San Antonio dispatched Portland efficiently behind Wembanyama's generational talent, advancing to face Minnesota in a second-round series that has become the most dramatic matchup in the West. The Trail Blazers' young core gained experience but was simply overmatched.",
  },
  "W1-DEN-MIN": {
    regularSeasonH2H: "Denver held the regular-season series advantage as the West's No. 3 seed, but Minnesota's late-season surge and defensive identity made them a dangerous first-round opponent.",
    playoffHistory: "Minnesota and Denver met in the 2024 Western Conference Semifinals where the Timberwolves won in seven. That experience proved decisive as Minnesota pulled off the first-round upset.",
    keyMatchup: "Rudy Gobert's interior defense and Anthony Edwards' scoring explosiveness overwhelmed Nikola Jokic's playmaking — Denver's MVP couldn't overcome Minnesota's collective defensive effort.",
    narrative: "Minnesota pulled off the West's biggest first-round upset, eliminating the third-seeded Nuggets behind Edwards' scoring and Gobert's rim protection. The Timberwolves' playoff experience from their 2024 run proved invaluable, and they carried that momentum into a second-round battle with San Antonio that is now tied 2-2.",
  },
  "W1-LAL-HOU": {
    regularSeasonH2H: "The Lakers held the regular-season edge behind LeBron and Luka's combined star power, though Houston's young roster pushed Los Angeles in multiple competitive meetings.",
    playoffHistory: "The Lakers and Rockets have deep playoff history from the Kobe-era and the 2020 bubble. The 2026 edition was a passing-of-the-torch moment as LA's veterans outlasted Houston's rebuilding core.",
    keyMatchup: "LeBron James and Luka Doncic's combined playmaking proved too much for Houston's young defense, though the Rockets' competitive effort signaled a franchise on the rise.",
    narrative: "The Lakers advanced past Houston behind their veteran star power, but the series took a physical toll. Doncic's hamstring issues that surfaced during the Rockets series have lingered into the second round against OKC, where the Thunder's 3-0 lead suggests the Lakers' run is nearly over.",
  },
  "E2-NYK-PHI": {
    regularSeasonH2H: "The Knicks and 76ers met four times in the regular season with New York holding the overall edge in competitive games decided by tight margins.",
    playoffHistory: "New York eliminated Philadelphia in the 2023 second round in six games. The Knicks have now swept the Sixers in the 2026 Conference Semifinals 4-0, their most dominant playoff series performance in decades.",
    keyMatchup: "Jalen Brunson vs. Tyrese Maxey was the marquee matchup but Brunson's supporting cast — especially McBride's 7-of-9 Game 4 — made it a mismatch across the board.",
    narrative: "Philadelphia never found an answer for New York's three-point barrage. The Knicks tied the NBA playoff record with 25 threes in the clincher while the Sixers' Big Three of Embiid, Maxey, and George combined for one of the most disappointing postseason performances in franchise history. New York advances to the Eastern Conference Finals with momentum, depth, and the most dangerous offense in the East.",
  },
  "E2-DET-CLE": {
    regularSeasonH2H: "Detroit and Cleveland split their regular-season meetings, with both teams demonstrating elite defensive capabilities in tightly contested games.",
    playoffHistory: "These franchises have limited recent playoff history, making this second-round matchup a fresh rivalry without the baggage of past series failures.",
    keyMatchup: "Cade Cunningham vs. Donovan Mitchell is the defining duel — Cunningham's playmaking versatility against Mitchell's scoring explosiveness will determine which team advances to face New York.",
    narrative: "Detroit leads 2-1 after their stunning first-round comeback from 3-1 down against Orlando gave them battlefield confidence that few teams can match. Cleveland is talented but faces a Pistons team that has already proven 3-1 deficits don't faze them. Tonight's Game 4 at Rocket Arena is pivotal — a Cavaliers win ties the series, while a Pistons win puts them one game from the Conference Finals.",
  },
  "W2-OKC-LAL": {
    regularSeasonH2H: "OKC dominated the regular-season series against the Lakers, winning the majority of their meetings as the Thunder's defensive system proved problematic for LA's half-court offense.",
    playoffHistory: "Oklahoma City and Los Angeles have a deep playoff history dating to the Kevin Durant era, but the current Thunder squad has established a different identity — younger, more disciplined, and analytically precise.",
    keyMatchup: "Shai Gilgeous-Alexander's dominance on both ends has rendered the Lakers' defensive schemes irrelevant. Luka Doncic's hamstring has limited his ability to match SGA's two-way impact.",
    narrative: "The Thunder hold a commanding 3-0 lead and can complete the sweep tonight at Crypto.com Arena. No team in NBA history has ever come back from a 3-0 deficit, and OKC's defensive suffocation of the Lakers gives LA virtually no path forward. The question is whether the Lakers can at least salvage one game and some dignity.",
  },
  "W2-SAS-MIN": {
    regularSeasonH2H: "San Antonio and Minnesota played competitive regular-season games with the Spurs holding the edge behind Wembanyama's two-way dominance in most meetings.",
    playoffHistory: "These teams met indirectly through Minnesota's 2024 playoff run that included eliminating Denver. This is their first direct postseason matchup in the modern era.",
    keyMatchup: "Wembanyama vs. Gobert is the defining battle — but Game 4's ejection added Edwards vs. everyone as the emotional X-factor. Edwards' 36-point eruption showed he can carry Minnesota when the Spurs' star is absent.",
    narrative: "The series is tied 2-2 after Edwards' emotional 36-point performance following Wembanyama's 12-minute ejection. San Antonio played valiantly without their franchise player — losing by just five — but the momentum has swung decisively to Minnesota. Game 5 in San Antonio on Tuesday is the most consequential game remaining in the West, with Wembanyama's availability, mindset, and potential suspension the biggest variables in the entire playoff bracket.",
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
