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
    seriesId: "W1-SAS-POR",
    conference: "west",
    round: "first-round",
    higherSeed: 2,
    lowerSeed: 8,
    higherTeam: "SAS",
    lowerTeam: "POR",
    higherWins: 1,
    lowerWins: 0,
    status: "active",
    summary: "SAS leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-04-28", homeTeam: "SAS", awayTeam: "POR", homeScore: 114, awayScore: 95, status: "final", time: "Final", tv: "ESPN", topPerformer: "Deni Avdija", topLine: "22 PTS · 3 REB · 3 AST" }
    ],
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
    lowerWins: 1,
    status: "active",
    summary: "MIN leads 1-0",
    games: [
      { gameNumber: 1, date: "2026-04-30", homeTeam: "MIN", awayTeam: "DEN", homeScore: 110, awayScore: 98, status: "final", time: "Final", tv: "ESPN", topPerformer: "Jaden McDaniels", topLine: "32 PTS · 10 REB · 3 AST" }
    ],
  }
];
// END_PLAYOFF_SERIES_SYNC

export const playoffMovers: PlayoffPulseMover[] = [
  {
    player: "James Harden",
    team: "CLE",
    direction: "riser",
    delta: 14,
    playoffLine: "30.0 PPG · 8.0 RPG · 6.0 APG · 3 BLK (Game 5)",
    note: "Playoff-best 30 points with 11-14 FT and 3 blocks drove Cleveland's 9-point comeback. Can clinch the East Finals tonight at home.",
  },
  {
    player: "Victor Wembanyama",
    team: "SAS",
    direction: "riser",
    delta: 10,
    playoffLine: "25.2 PPG · 12.4 RPG · 3.4 BPG (West Semis)",
    note: "27/17/3BLK redemption game after ejection in a 29-point blowout. Can clinch the West Finals tonight at Minnesota.",
  },
  {
    player: "Max Strus",
    team: "CLE",
    direction: "riser",
    delta: 12,
    playoffLine: "20.0 PPG · 8.0 RPG · 6-8 3PT (Game 5)",
    note: "6-of-8 from three (75%) for 20 points in the OT win — CLE's X-factor heading into the potential clincher tonight.",
  },
  {
    player: "Anthony Edwards",
    team: "MIN",
    direction: "faller",
    delta: -8,
    playoffLine: "20.0 PPG · 6-13 FG (Game 5)",
    note: "Quietest game of the series in a 29-point blowout loss. Faces elimination tonight at home — needs a legacy-defining response.",
  },
  {
    player: "Tobias Harris",
    team: "DET",
    direction: "faller",
    delta: -10,
    playoffLine: "13.0 PPG · 6.0 RPG · 6-19 FG (Game 5)",
    note: "Shot 6-of-19 while Cunningham scored 39. Detroit's second option must deliver tonight or the 1-seed's season ends.",
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
    regularSeasonH2H: "Detroit and Orlando split their two regular-season meetings in 2024-25, with each team winning on the other's floor, signaling a genuinely competitive dynamic heading into the postseason.",
    playoffHistory: "These franchises have no significant shared playoff history in the modern era, making this a largely uncharted postseason rivalry with no psychological baggage on either side.",
    keyMatchup: "Cade Cunningham (averaging 25-plus points and 9 assists on the season) against Orlando's Paolo Banchero is the series' defining individual battle, with both players needing to assert themselves as the best young star on the floor.",
    narrative: "Orlando's path to an upset runs through forcing Cunningham into inefficient mid-range isolation and exploiting Detroit's occasionally porous transition defense with Franz Wagner and Banchero in two-man actions. The Magic also need their role players to shoot above their averages from three, because Detroit's length and physicality will make interior life miserable. If ORL can steal home-court advantage in Game 2 and drag this into a grind-it-out series, their defensive infrastructure gives them a genuine puncher's chance.",
  },
  "E1-NYK-PHI": {
    regularSeasonH2H: "The Knicks won three of four meetings against the 76ers in the 2024-25 regular season, establishing early dominance in a rivalry renewed by roster flux on both sides.",
    playoffHistory: "These franchises have met four times in the playoffs, most memorably in the 2023 first round when New York ousted Philadelphia in six games, with Julius Randle and Jalen Brunson combining to neutralize a then-healthy Joel Embiid.",
    keyMatchup: "Jalen Brunson vs. Tyrese Maxey is the series' fulcrum — Brunson averaged 26.8 PPG in the 2023 playoff series win while Maxey, now the unquestioned alpha in Philadelphia, must outproduce him nightly just to keep the 76ers competitive.",
    narrative: "For Philadelphia to steal this series, Maxey needs historic volume and efficiency while the supporting cast — threadbare after a brutal injury season — must collectively neutralize New York's suffocating, scheme-heavy defense under Tom Thibodeau. The Knicks are vulnerable if their halfcourt offense stagnates in late-game situations and Brunson faces heavy double-teams, a wrinkle Philly used to modest effect in Game 1; if the 76ers can force enough possessions into scramble mode, their athleticism on the wings gives them a puncher's chance to extend the series past five games.",
  },
  "E1-CLE-TOR": {
    regularSeasonH2H: "Cleveland held the edge in the 2024-25 regular-season series against Toronto, consistent with the Cavaliers' status as one of the East's elite teams while the Raptors scraped into the postseason as a lower seed.",
    playoffHistory: "These franchises have limited shared postseason history, with Cleveland's LeBron-era teams overshadowing Toronto in the East during the mid-2010s, including the Cavaliers' 2017 second-round sweep of the Raptors.",
    keyMatchup: "Darius Garland vs. Immanuel Quickley is the fulcrum of this series — Garland's pick-and-roll command and mid-range efficiency against a Raptors backcourt that must pressure him into uncomfortable spots to have any chance of extending the series.",
    narrative: "Toronto's path to an upset runs entirely through defensive disruption — they must turn Cleveland's methodical halfcourt offense into a track meet, exploiting any defensive lapses while keeping Scottie Barnes aggressive as a primary engine rather than a complementary piece. The Cavaliers are vulnerable when opponents push pace and force Garland into isolation defense, which Quickley and RJ Barrett can exploit in transition. If the Raptors cannot crack Cleveland's top-five defense in efficiency and get Barnes into double-figure shot attempts consistently, the Cavaliers' depth and poise figure to close this out in five or fewer games.",
  },
  "W1-OKC-LAL": {
    regularSeasonH2H: "OKC dominated the regular-season series against the Lakers in 2024-25, winning three of four meetings behind Shai Gilgeous-Alexander's consistent scoring and the Thunder's suffocating defensive infrastructure.",
    playoffHistory: "These franchises carry significant postseason history, most notably the 2012 Western Conference Finals when Kevin Durant's Thunder eliminated Kobe Bryant's Lakers in five games, a series that signaled the passing of a generational torch.",
    keyMatchup: "Shai Gilgeous-Alexander versus LeBron James is the series' defining duel — SGA averaged 32.7 points per game this regular season and is the MVP frontrunner, while a 40-year-old LeBron must will a shorthanded Lakers roster to compete with the West's best team.",
    narrative: "For the Lakers to extend this series, LeBron James needs a performance-level reminiscent of his 2023 playoff run while Anthony Davis must dominate the paint and neutralize OKC's young interior presence — any defensive lapse or foul trouble for Davis likely spells a short series. The Thunder, however, are not invulnerable: their relative playoff inexperience as a unit, combined with the Lakers' ability to turn games into late-clock, isolation-heavy possessions, gives Los Angeles a narrow but real path to chaos. OKC's depth and defensive cohesion make them heavy favorites, but a Battle-tested LeBron in elimination-round mode remains the single most dangerous variable in this bracket.",
  },
  "W1-SAS-POR": {
    regularSeasonH2H: "San Antonio held the edge in their 2024-25 regular-season meetings, with Victor Wembanyama's otherworldly two-way impact proving too much for Portland to consistently solve across their matchups.",
    playoffHistory: "These franchises have met in the postseason before, most memorably in the 2003 and 1999 eras when Tim Duncan's Spurs dynasties dispatched Portland, giving San Antonio a historically dominant edge in this rivalry.",
    keyMatchup: "Victor Wembanyama vs. Donovan Mitchell-era Portland's best scorer is the series' defining chess match, with Wembanyama averaging north of 24 points and 3-plus blocks per game this season making him nearly unguardable while doubling as the Trail Blazers' biggest defensive nightmare.",
    narrative: "Portland's only realistic path to an upset runs through forcing Wembanyama into foul trouble early and exploiting San Antonio's relative youth in high-leverage, late-game playoff situations — a trait that has historically crept up on young rosters in their first deep postseason runs. The Spurs, however, are vulnerable only if their supporting cast goes cold and Wembanyama is asked to carry too heavy a load, which Portland's perimeter attack could theoretically manufacture. Until the Blazers show they can consistently make Wembanyama defend in space while scoring efficiently on him at the other end, San Antonio's series lead looks likely to grow.",
  },
  "W1-DEN-MIN": {
    regularSeasonH2H: "Minnesota split their 2024-25 regular-season series with Denver, with both teams trading home wins and the Timberwolves showing they could contain Nikola Jokić when their defensive scheme was dialed in.",
    playoffHistory: "These franchises met in the 2024 NBA Playoffs second round, where Minnesota stunned the defending champion Nuggets in five games — a psychological edge the Timberwolves carry into this rematch.",
    keyMatchup: "Rudy Gobert vs. Nikola Jokić is the series' defining battle, as Gobert's physicality and help-side presence are Minnesota's best deterrent against a two-time Finals MVP averaging over 30 points and 13 rebounds in recent postseason play.",
    narrative: "Denver is vulnerable because the Timberwolves have already cracked the code on their motion-heavy offense, and a Minnesota squad hungry to prove last year was no fluke has home-court momentum after stealing Game 1. For the Nuggets to flip the series, Jokić must demand more iso possessions late in shot clocks, Jamal Murray needs to recapture his postseason assassin mode, and Denver's role players must knock down perimeter shots to prevent the paint from collapsing entirely. If Minnesota's Anthony Edwards continues to impose his will on both ends, the Wolves have every ingredient to pull off back-to-back upsets over the same opponent.",
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
