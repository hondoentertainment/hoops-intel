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
    clutchRating: 95, 
    description: "Scored 12 points in the fourth quarter of Game 7, including a devastating 3-pointer with 2:47 remaining that silenced TD Garden and put Philadelphia ahead for good in their historic comeback series victory."
  },
  games: [
    {
      gameId: "PHI-BOS-20260502",
      teams: { home: "BOS", away: "PHI" },
      finalScore: { home: 100, away: 109 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:23",
          description: "Jayson Tatum opens with 11 straight points, hitting three consecutive threes to ignite TD Garden and give Boston early control",
          runScore: "11-0 BOS",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "4:15",
          description: "VJ Edgecombe catches fire with four threes in 3 minutes, stunning the crowd and bringing Philadelphia back from 15 down",
          runScore: "16-4 PHI",
          momentum: "away",
          keyPlayer: "VJ Edgecombe",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "2:08",
          description: "Embiid takes over with 8 straight points in the paint, punishing Boston's small lineup and seizing momentum",
          runScore: "8-0 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "6:42",
          description: "Marcus Smart leads desperate Boston rally with two steals and layups, cutting deficit to 3 and giving Celtics life",
          runScore: "6-0 BOS",
          momentum: "home",
          keyPlayer: "Marcus Smart",
          impact: "notable"
        },
        {
          quarter: "4th",
          timestamp: "2:47",
          description: "Embiid drains clutch three-pointer over Al Horford, his first of the night, crushing Boston's comeback hopes",
          runScore: "7-2 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "Step-back three-pointer over Al Horford with shot clock winding down",
          timeRemaining: "2:47",
          winProbabilityShift: 23
        },
        {
          player: "Tyrese Maxey",
          team: "PHI",
          description: "Drives through traffic for and-one layup to extend lead",
          timeRemaining: "1:54",
          winProbabilityShift: 18
        },
        {
          player: "Marcus Smart",
          team: "BOS",
          description: "Steal and fast-break three-pointer keeps Boston's hopes alive",
          timeRemaining: "3:28",
          winProbabilityShift: -12
        },
        {
          player: "VJ Edgecombe",
          team: "PHI",
          description: "Corner three off Maxey assist with Boston closing the gap",
          timeRemaining: "4:15",
          winProbabilityShift: 15
        }
      ],
      narrative: "In one of the most stunning Game 7 upsets in recent memory, Joel Embiid authored a masterclass performance to complete Philadelphia's historic 3-1 series comeback at the hostile TD Garden. The 76ers became just the sixth team since 2010 to overcome such a deficit, with rookie sensation VJ Edgecombe providing the spark that ignited their championship dreams. Boston's season ended in heartbreak as their championship window may have slammed shut, falling victim to one of the great playoff collapses in franchise history. Embiid's clutch three-pointer with 2:47 remaining will be remembered as the dagger that silenced Boston's faithful and announced Philadelphia's arrival as a legitimate championship contender."
    }
  ]
};