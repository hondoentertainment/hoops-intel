// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 4, 2026
// Live at: https://hoopsintel.net/momentum

export interface MomentumSwing {
  gameId: string;
  teams: { home: string; away: string };
  finalScore: { home: number; away: number };
  swings: {
    quarter: string;
    timestamp: string;
    description: string;
    runScore: string;
    momentum: "home" | "away";
    keyPlayer: string;
    impact: "game-changing" | "significant" | "notable";
  }[];
  clutchPlays: {
    player: string;
    team: string;
    description: string;
    timeRemaining: string;
    winProbabilityShift: number;
  }[];
  narrative: string;
}

export interface MomentumData {
  generatedDate: string;
  date: string;
  games: MomentumSwing[];
  gameOfTheNight: string;
  topClutchPerformer: { player: string; team: string; clutchRating: number; description: string };
}

export const momentumData: MomentumData = {
  generatedDate: "2026-10-04",
  date: "October 4, 2026",
  gameOfTheNight: "MIA-TOR-20261003",
  topClutchPerformer: {
    player: "Jimmy Butler",
    team: "MIA",
    clutchRating: 81,
    description:
      "Butler did not need the fourth quarter to make his case. Operating on a minutes restriction, he delivered maximum efficiency in 28 minutes — setting the tone in the first half with decisive mid-range looks and defensive positioning that collapsed Toronto's half-court sets before they could develop. For a game that was never truly close after the first eight minutes, Butler's early-quarter control was the closest thing to clutch dominance this opening weekend produced.",
  },
  games: [
    {
      gameId: "MIA-TOR-20261003",
      teams: { home: "TOR", away: "MIA" },
      finalScore: { home: 105, away: 129 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "Q1 · 7:42",
          description:
            "Miami opened with an 11-2 run to seize immediate control, punctuated by a Butler pull-up jumper and back-to-back deflections that ignited Heat transition offense. Toronto never answered the opening salvo.",
          runScore: "11-2 MIA run",
          momentum: "away",
          keyPlayer: "Jimmy Butler",
          impact: "game-changing",
        },
        {
          quarter: "Q1",
          timestamp: "Q1 · 1:55",
          description:
            "Scottie Barnes converted a and-one layup through contact and briefly sparked the Scotiabank crowd, trimming the deficit to nine and threatening to make the first quarter a contested affair.",
          runScore: "7-2 TOR run",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "Q2 · 9:10",
          description:
            "The Heat's bench unit extended the lead immediately out of the first-quarter break, rattling off nine unanswered points. Toronto's reserves offered nothing in response, and the game's competitive window effectively closed.",
          runScore: "9-0 MIA run",
          momentum: "away",
          keyPlayer: "Haywood Highsmith",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "Q3 · 5:30",
          description:
            "A brief Toronto flurry — three consecutive Barnes buckets in the third — trimmed the margin to 18 and produced the only sustained noise from the home crowd all evening, before Miami's rotation resealed the game.",
          runScore: "8-2 TOR run",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "Q4 · 10:00",
          description:
            "Miami's starters sat early in the fourth with a 25-point cushion. The Heat's second unit maintained the advantage without difficulty, underscoring just how complete the victory was across all rotations.",
          runScore: "6-0 MIA run",
          momentum: "away",
          keyPlayer: "Davion Mitchell",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative:
        "This was a statement delivered in the first eight minutes and never rescinded. Miami came into Toronto with the composure of a team that had resolved its identity long before tip-off — and the Raptors, still searching for theirs, had no answer for it. Butler's efficiency on a minutes restriction was almost insulting in its ease; he did not need to force the issue because the issue was never really in doubt. The crowd at Videotron Centre made noise when Barnes surged in the third, but Miami's defense absorbed it the way a deep foundation absorbs a tremor — without visible strain. A 24-point preseason blowout rarely tells the whole story, but here it told most of it.",
    },
  ],
};