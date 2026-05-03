// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 3, 2026
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
  date: "May 3, 2026",
  gameOfTheNight: "PHI-BOS-20260502",
  topClutchPerformer: { 
    player: "Joel Embiid", 
    team: "PHI", 
    clutchRating: 94, 
    description: "Delivered a masterclass in playoff basketball with 28 points on elite efficiency, seizing control in hostile territory when his team needed him most" 
  },
  games: [
    {
      gameId: "PHI-BOS-20260502",
      teams: { home: "BOS", away: "PHI" },
      finalScore: { home: 100, away: 109 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:42",
          description: "Embiid establishes early dominance with back-to-back post scores and a steal",
          runScore: "8-2 run",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "3:15",
          description: "Jayson Tatum erupts for 9 quick points, including two threes, to energize TD Garden",
          runScore: "12-4 run",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "6:30",
          description: "Maxey catches fire with three consecutive buckets as Sixers seize control",
          runScore: "10-2 run",
          momentum: "away",
          keyPlayer: "Tyrese Maxey",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "4:45",
          description: "Boston rallies within 5 points as the crowd reaches fever pitch",
          runScore: "8-1 run",
          momentum: "home",
          keyPlayer: "Derrick White",
          impact: "notable"
        },
        {
          quarter: "4th",
          timestamp: "1:28",
          description: "Embiid delivers the dagger with a step-back three and emphatic block on Tatum",
          runScore: "7-1 run",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "Step-back three over Al Horford to extend lead to 8",
          timeRemaining: "1:28",
          winProbabilityShift: 18.5
        },
        {
          player: "Tyrese Maxey",
          team: "PHI",
          description: "Driving layup through contact after Boston timeout",
          timeRemaining: "2:47",
          winProbabilityShift: 12.3
        },
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "Rejection of Jayson Tatum's potential game-tying three attempt",
          timeRemaining: "0:52",
          winProbabilityShift: 24.7
        }
      ],
      narrative: "The basketball gods scripted pure theater at TD Garden as Joel Embiid delivered a virtuoso performance that may have saved Philadelphia's championship dreams. With the hostile Boston crowd reaching decibel levels that could shake the foundation, Embiid answered with the poise of a seasoned champion, methodically dismantling the Celtics' defense while his young co-star Tyrese Maxey provided the explosive scoring bursts. The stunning 109-100 road victory flipped the series narrative entirely—transforming the 76ers from desperate underdogs into confident aggressors who now smell blood in the water. As confetti preparations were quietly canceled and the Garden fell eerily silent, one truth echoed through the arena: this Philadelphia team refuses to surrender their season without an epic fight."
    }
  ]
};