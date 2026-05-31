// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 31, 2026
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
  date: "May 31, 2026",
  gameOfTheNight: "SAS-OKC-20260530",
  topClutchPerformer: {
    player: "Victor Wembanyama",
    team: "SAS",
    clutchRating: 94,
    description:
      "Wembanyama was unguardable at both ends when the game was on the line — a go-ahead block-and-outlet in the third quarter and back-to-back mid-range jumpers in the fourth sealed OKC's fate and put San Antonio one win from the Finals.",
  },
  games: [
    {
      gameId: "SAS-OKC-20260530",
      teams: { home: "OKC", away: "SAS" },
      finalScore: { home: 103, away: 111 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:12",
          description:
            "SGA ignited Paycom Center with back-to-back pull-up threes, capping a 10-2 Thunder run that seized early control and forced a San Antonio timeout.",
          runScore: "10-2 OKC run",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:34",
          description:
            "Wembanyama answered with a personal 7-0 stretch — a mid-post turnaround, a corner three, and a finger-roll through contact — erasing OKC's lead and swinging the crowd into uneasy silence.",
          runScore: "7-0 SAS run",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:51",
          description:
            "Stephon Castle detonated the game open with three consecutive three-pointers in 97 seconds, turning a two-possession contest into a 14-point Spurs advantage and draining all remaining oxygen from the building.",
          runScore: "16-4 SAS run",
          momentum: "away",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "8:05",
          description:
            "OKC mounted a desperate comeback behind SGA, trimming the deficit to seven on a floater-and-one that briefly made the crowd believe, but a visibly hobbled Jalen Williams could not provide the secondary scoring needed to complete the rally.",
          runScore: "9-2 OKC run",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "3:28",
          description:
            "De'Aaron Fox drove baseline for a contested layup, then drew a charge on OKC's next possession — a two-play sequence that killed the Thunder's momentum entirely and allowed the Spurs bench to ice the game from the free-throw line.",
          runScore: "8-2 SAS run",
          momentum: "away",
          keyPlayer: "De'Aaron Fox",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Victor Wembanyama",
          team: "SAS",
          description:
            "With OKC cutting to seven and the crowd surging, Wembanyama pinned Isaiah Hartenstein's putback attempt against the glass, triggered the fast break with a full-court outlet, and finished with a reverse layup on the other end — an 11-point swing moment in under five seconds.",
          timeRemaining: "4:47 Q4",
          winProbabilityShift: 18,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description:
            "SGA drew a four-point foul opportunity after a crafty shot-fake on Wembanyama, converting all four free throws to pull OKC within six and signal one final push.",
          timeRemaining: "3:55 Q4",
          winProbabilityShift: -9,
        },
        {
          player: "De'Aaron Fox",
          team: "SAS",
          description:
            "Fox took a charge from SGA driving left — his second of the night — turning OKC's best scoring sequence of the fourth quarter into a San Antonio possession and effectively ending the game as a contest.",
          timeRemaining: "3:21 Q4",
          winProbabilityShift: 14,
        },
      ],
      narrative:
        "This was the game where San Antonio served notice that they are not just a good story — they are a legitimate dynasty in formation. Oklahoma City, the league's best regular-season team, threw everything at the Spurs on their home floor and still found themselves dismantled in the third quarter by a 19-year-old point guard hitting threes with zero hesitation. Wembanyama was the gravitational center of it all, present for every critical sequence whether he was scoring, blocking, or simply occupying two defenders and creating space for others. The Thunder now face elimination in Game 6, and the haunting reality is that Jalen Williams — their second-best player — looked like a shadow of himself with 12 minutes left. If he can't go in San Antonio, this series is already over.",
    },
  ],
};