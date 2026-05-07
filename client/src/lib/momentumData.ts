// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 7, 2026
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
  date: "May 7, 2026",
  gameOfTheNight: "PHI-NYK-20260506",
  topClutchPerformer: { 
    player: "Jalen Brunson", 
    team: "NYK", 
    clutchRating: 92, 
    description: "Ice-cold execution in the final minutes, hitting the dagger three and managing the offense to perfection under playoff pressure" 
  },
  games: [
    {
      gameId: "MIN-SAS-20260506",
      teams: { home: "SAS", away: "MIN" },
      finalScore: { home: 133, away: 95 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:23",
          description: "Wembanyama announces his presence with three straight blocks and a thunderous dunk",
          runScore: "11-2 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "6:45",
          description: "Edwards tries to rally Minnesota with back-to-back threes and a steal",
          runScore: "8-0 MIN",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "2:18",
          description: "Chris Paul orchestrates perfection with 7 straight assists as Spurs blow the game open",
          runScore: "18-4 SAS",
          momentum: "home",
          keyPlayer: "Chris Paul",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "9:12",
          description: "Wembanyama's dominant stretch: 14 points in 4 minutes with impossible shots over helpless defenders",
          runScore: "20-7 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Victor Wembanyama authored a playoff masterpiece that will be replayed for generations, completely dismantling Minnesota with surgical precision and athletic dominance. The French phenom turned Game 2 into his personal highlight reel, erasing memories of the shocking Game 1 upset with the most dominant performance of these playoffs. Chris Paul's veteran brilliance provided the perfect complement, orchestrating an offensive symphony that left the Timberwolves shell-shocked and searching for answers. The 38-point demolition job announced that the Spurs are very much alive in this series, with Wembanyama looking every bit the generational talent capable of carrying San Antonio deep into May."
    },
    {
      gameId: "PHI-NYK-20260506",
      teams: { home: "NYK", away: "PHI" },
      finalScore: { home: 108, away: 102 },
      swings: [
        {
          quarter: "1st",
          timestamp: "5:34",
          description: "Embiid dominates early with three straight post scores, silencing MSG crowd",
          runScore: "9-2 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "7:21",
          description: "Brunson heats up with pull-up magic as Knicks find their rhythm at home",
          runScore: "12-3 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "4:45",
          description: "Maxey explodes for 11 straight points, giving Sixers their biggest lead",
          runScore: "13-2 PHI",
          momentum: "away",
          keyPlayer: "Tyrese Maxey",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "6:18",
          description: "Hart sparks crucial run with hustle plays and timely threes",
          runScore: "10-2 NYK",
          momentum: "home",
          keyPlayer: "Josh Hart",
          impact: "significant"
        }
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Step-back three over Maxey with ice in his veins",
          timeRemaining: "3:42",
          winProbabilityShift: 18
        },
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "Fadeaway jumper to keep Sixers within striking distance",
          timeRemaining: "2:51",
          winProbabilityShift: -12
        },
        {
          player: "OG Anunoby",
          team: "NYK",
          description: "Steal and slam to essentially seal the victory",
          timeRemaining: "1:23",
          winProbabilityShift: 22
        }
      ],
      narrative: "Madison Square Garden witnessed playoff basketball at its finest as Jalen Brunson outdueled Joel Embiid and Tyrese Maxey in a heavyweight battle that lived up to every ounce of hype. The Knicks' composed execution in crunch time showcased their championship maturity, with Brunson delivering dagger after dagger while the crowd reached deafening levels. Philadelphia fought valiantly behind Embiid's warrior performance, but their championship window is rapidly closing as they face a daunting 0-2 deficit. This was playoff basketball poetry in motion, with every possession carrying the weight of season-defining consequences."
    }
  ]
};