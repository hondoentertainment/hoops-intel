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
    regularSeasonH2H: "Cleveland won the season series against Detroit in 2024-25, with Donovan Mitchell and Darius Garland consistently exploiting a young Pistons defense that was still finding its playoff footing.",
    playoffHistory: "These franchises have limited shared postseason history of note, with no defining rivalry series in the modern era to draw from.",
    keyMatchup: "Donovan Mitchell vs. Cade Cunningham is the series-defining duel — Mitchell averaged over 25 points per game this season and already asserted his closer instincts in Game 1, while Cunningham must match that production and will-to-win on the biggest stage of his young career.",
    narrative: "Detroit, despite earning the one seed, enters unfamiliar playoff territory with a roster built on regular-season momentum rather than postseason-tested resolve, and Cleveland — the battle-hardened underdog — already drew first blood in Game 1 by leaning on Mitchell's clutch gene and a defensive scheme that bottled up Detroit's transition game. For the Pistons to win this series, Cunningham must evolve into a true playoff engine right now, the young core must stop compounding errors under pressure, and home crowd energy at Little Caesars Arena must translate into tangible defensive stops rather than just noise. Cleveland is quietly dangerous because they've been here before, and a 2-0 hole for Detroit could shatter the fragile confidence of a team still learning what it means to carry expectations.",
  },
  "E1-NYK-PHI": {
    regularSeasonH2H: "The Knicks won three of four regular-season meetings against Philadelphia in 2024-25, establishing early dominance over a 76ers squad hampered by injuries and roster flux.",
    playoffHistory: "These franchises have clashed in the playoffs multiple times, most memorably in the bruising 2012 first-round series New York won and the 2023 second-round battle the Knicks took in five games, giving New York a psychological edge in recent postseason encounters.",
    keyMatchup: "Jalen Brunson against whoever Philadelphia deploys as his primary defender is the series' central chess match, as Brunson averaged over 26 points per game in the regular season and has repeatedly tormented the 76ers with his pull-up mid-range game and late-clock shot-making.",
    narrative: "For Philadelphia to extend this series, Tyrese Maxey must not only put up big numbers but force the Knicks' defense into enough rotations to create quality looks for role players, and the 76ers' big men need to limit New York's second-chance points — an area where the Knicks have feasted. New York is vulnerable if its perimeter shooting runs cold and Philly can push pace in transition, exploiting a Knicks rotation that can get leg-weary in a compressed playoff schedule. Ultimately, the underdog's path runs directly through outscoring New York's bench unit, a contingency that demands Philly's reserves show up in a way they rarely have all season.",
  },
  "W1-OKC-LAL": {
    regularSeasonH2H: "OKC dominated the 2024-25 regular-season series against the Lakers, winning three of four meetings behind Shai Gilgeous-Alexander's consistent scoring and a suffocating team defense that ranked among the league's best.",
    playoffHistory: "These franchises have met in the playoffs previously during the Russell Westbrook era, with OKC's most notable postseason encounters against the Lakers dating to the 2010 first round when Los Angeles dispatched a young Thunder squad on the way to a championship.",
    keyMatchup: "Shai Gilgeous-Alexander vs. LeBron James is the series-defining duel — SGA averaged 32+ points per game this season while LeBron, still producing near 24 points and 8 assists per game at age 40, must both contain OKC's engine and generate enough offense to keep the Lakers alive.",
    narrative: "For the Lakers to steal this series, LeBron and Anthony Davis must dominate interior play and force OKC into half-court possessions where youth and inexperience under playoff pressure can surface. OKC is vulnerable if Davis can consistently draw fouls and the Lakers push pace selectively to neutralize the Thunder's disciplined defensive rotations. Still, the Thunder's depth, defensive versatility, and home-court advantage make them heavy favorites to advance.",
  },
  "W1-SAS-MIN": {
    regularSeasonH2H: "San Antonio and Minnesota split their two regular-season meetings in 2024-25, with each team winning on the other's floor, suggesting genuine competitive parity entering the postseason.",
    playoffHistory: "These franchises have no significant shared playoff history in the modern era, making this a largely fresh postseason rivalry with no psychological scars on either side.",
    keyMatchup: "Victor Wembanyama against Karl-Anthony Towns' replacement interior presence looms largest, but the defining individual battle is Wembanyama (averaging 24+ points and 3+ blocks this season) against Anthony Edwards, whose ability to attack the paint and draw fouls may be Minnesota's only consistent path to disrupting San Antonio's defensive ecosystem.",
    narrative: "Minnesota's road to a series comeback runs almost entirely through Anthony Edwards playing like a genuine playoff superstar and the Wolves forcing Wembanyama into foul trouble — two conditions that must coexist, not alternate. San Antonio is vulnerable on the road and in clutch late-game situations where their youth can invite doubt, but the Spurs' defensive versatility and Wembanyama's shot-alteration gravity make Minnesota's transition offense and open-floor advantages feel neutralized before they begin. The Wolves must win the rebounding battle and generate second-chance points; in Game 1 they failed to do so, and the margin between these teams could widen quickly if that trend holds.",
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
