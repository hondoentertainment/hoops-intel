// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 13, 2026
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
  date: string;
  games: MomentumSwing[];
  gameOfTheNight: string;
  topClutchPerformer: { player: string; team: string; clutchRating: number; description: string };
}

export const momentumData: MomentumData = {
  date: "May 13, 2026",
  gameOfTheNight: "MIN-SAS-20260512",
  topClutchPerformer: {
    player: "Victor Wembanyama",
    team: "SAS",
    clutchRating: 94,
    description:
      "Wembanyama didn't just respond to his Game 4 ejection — he buried it. Twenty-seven points, 17 rebounds, 3 blocks, and a +24 in 34 minutes of surgical, composed basketball. He controlled every possession that mattered, finished at the rim over Minnesota's helpless rotations, and kept his emotions surgically contained in a game where the Spurs needed a statement, not a spectacle.",
  },
  games: [
    {
      gameId: "MIN-SAS-20260512",
      teams: { home: "SAS", away: "MIN" },
      finalScore: { home: 126, away: 97 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:31",
          description:
            "Wembanyama opens the game with back-to-back bucket-and-foul sequences, punctuated by a rejection of Edwards at the rim on Minnesota's first real scoring attempt. The AT&T Center crowd reaches full roar inside three minutes. San Antonio's defensive identity is established immediately — this is not a team rattled by Game 4's chaos.",
          runScore: "14-4 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:15",
          description:
            "Minnesota strings together an 11-2 run fueled by Edwards mid-range pull-ups and a pair of Randle post conversions, briefly trimming the deficit to single digits and quieting the Frost Bank crowd. For a four-minute stretch the Timberwolves look like the team that pushed this series to five games, and Edwards finds some of his early-series rhythm.",
          runScore: "11-2 MIN",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "2:08",
          description:
            "Keldon Johnson explodes off the bench with five consecutive points — a transition dunk off a Wembanyama block outlet and a step-back three — immediately neutralizing Minnesota's run and pushing the lead back to 16 at the half. Johnson's energy resets San Antonio's identity as a deep, dangerous team rather than a one-star show.",
          runScore: "12-3 SAS",
          momentum: "home",
          keyPlayer: "Keldon Johnson",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:44",
          description:
            "Stephon Castle orchestrates a devastating 18-5 third-quarter run that effectively ends the competitive portion of the game. Castle knifes through Minnesota's scrambled rotations for two floaters, dishes a no-look lob to Wembanyama, and forces two turnovers in transition. The lead swells to 29 and the Target Center crowd goes silent on the road feed.",
          runScore: "18-5 SAS",
          momentum: "home",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:02",
          description:
            "Dylan Harper posts his double-double with a putback slam and two free throws in the fourth quarter's opening minutes, a symbolic coda confirming that San Antonio's rebuild has depth beyond its franchise cornerstone. The Spurs empty the bench minutes later with the outcome never in doubt.",
          runScore: "10-4 SAS",
          momentum: "home",
          keyPlayer: "Dylan Harper",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative:
        "This was less a basketball game than a public reckoning. Wembanyama walked into Frost Bank Center carrying the weight of a Game 4 ejection and the narrative that his emotions might be his ceiling — and he systematically dismantled every version of that story. Minnesota had no answer defensively for his length and no coherent offensive identity once Edwards went cold in the second quarter, with Randle's -22 night encapsulating the Timberwolves' supporting cast collapse. Eight Spurs in double figures wasn't a fluke; it was the architecture of a 62-win team executing at its highest level on its biggest stage. San Antonio is one win away from advancing, and after tonight, it feels less like a question of if and more like a question of when.",
    },
  ],
};