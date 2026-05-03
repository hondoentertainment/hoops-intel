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
    description: "Delivered in the ultimate pressure cooker with 12 fourth-quarter points to close out a historic Game 7 comeback" 
  },
  games: [
    {
      gameId: "PHI-BOS-20260502",
      teams: { home: "BOS", away: "PHI" },
      finalScore: { home: 100, away: 109 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:34",
          description: "Embiid dominates early with three straight post scores, silencing hostile TD Garden crowd",
          runScore: "12-4 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "4:12",
          description: "Jayson Tatum erupts for 11 quick points, sparking massive Boston crowd as Celtics seize control",
          runScore: "18-6 BOS",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing"
        },
        {
          quarter: "Q3",
          timestamp: "2:45",
          description: "VJ Edgecombe catches fire with back-to-back-to-back threes, rookie making Game 7 statement",
          runScore: "11-2 PHI",
          momentum: "away",
          keyPlayer: "VJ Edgecombe",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "6:28",
          description: "Maxey takes over with aggressive drives, putting 76ers in commanding position",
          runScore: "10-3 PHI",
          momentum: "away",
          keyPlayer: "Tyrese Maxey",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "1:15",
          description: "Brown's desperate three-pointer keeps Boston breathing, but Embiid answers immediately",
          runScore: "5-2 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "significant"
        }
      ],
      clutchPlays: [
        {
          player: "Tyrese Maxey",
          team: "PHI",
          description: "Slashes to the rim for and-one with Celtics in desperation mode",
          timeRemaining: "4:23",
          winProbabilityShift: 12.4
        },
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "Buries turnaround jumper over Horford to essentially seal historic comeback",
          timeRemaining: "2:48",
          winProbabilityShift: 18.7
        },
        {
          player: "Jaylen Brown",
          team: "BOS",
          description: "Drills contested three to cut deficit to six and ignite Garden one final time",
          timeRemaining: "1:52",
          winProbabilityShift: -8.3
        },
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "Ice-cold free throws after Brown technical foul, punctuating masterful Game 7 performance",
          timeRemaining: "0:45",
          winProbabilityShift: 15.2
        }
      ],
      narrative: "TD Garden witnessed basketball history as Joel Embiid authored one of the most dominant Game 7 performances in playoff lore, leading Philadelphia to a stunning series victory after trailing 3-1. The 76ers became just the sixth team since 2010 to complete such a comeback, doing so on the road against the favored Celtics in their own building. Tyrese Maxey was brilliant as the second star with 30 points and 11 rebounds, while rookie sensation VJ Edgecombe provided the dagger with five three-pointers that left Boston reeling. The Celtics' championship aspirations came crashing down in devastating fashion, as what seemed like a routine series win just days ago turned into one of the most shocking eliminations in franchise history."
    }
  ]
};