// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 6, 2026
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
  date: "May 6, 2026",
  gameOfTheNight: "CLE-DET-20260505",
  topClutchPerformer: { 
    player: "Cade Cunningham", 
    team: "DET", 
    clutchRating: 89, 
    description: "Cunningham's fourth-quarter masterpiece sealed Detroit's playoff statement with 11 points and 3 assists in the final frame"
  },
  games: [
    {
      gameId: "CLE-DET-20260505",
      teams: { home: "DET", away: "CLE" },
      finalScore: { home: 111, away: 101 },
      swings: [
        {
          quarter: "1Q",
          timestamp: "7:42",
          description: "Mitchell opens with three consecutive triples as Cavaliers storm to early lead",
          runScore: "11-2 CLE",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "significant"
        },
        {
          quarter: "2Q",
          timestamp: "4:15",
          description: "Cunningham orchestrates 16-4 run with pinpoint passing and transition buckets",
          runScore: "16-4 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing"
        },
        {
          quarter: "3Q",
          timestamp: "8:30",
          description: "Stewart dominates the paint with back-to-back offensive rebounds and putbacks",
          runScore: "10-2 DET",
          momentum: "home",
          keyPlayer: "Isaiah Stewart",
          impact: "significant"
        },
        {
          quarter: "4Q",
          timestamp: "6:45",
          description: "Mitchell keeps Cleveland alive with clutch three-pointer and steal",
          runScore: "7-0 CLE",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "notable"
        },
        {
          quarter: "4Q",
          timestamp: "2:18",
          description: "Cunningham delivers dagger three and assist to Duren for emphatic dunk",
          runScore: "8-2 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Step-back three over defender cuts deficit to 8",
          timeRemaining: "4:33",
          winProbabilityShift: -12
        },
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Pull-up three from 28 feet with shot clock winding down",
          timeRemaining: "2:18",
          winProbabilityShift: 18
        },
        {
          player: "Isaiah Stewart",
          team: "DET",
          description: "And-one finish through contact seals the victory",
          timeRemaining: "1:42",
          winProbabilityShift: 15
        }
      ],
      narrative: "The Little Caesars Arena crowd witnessed a coming-of-age performance from Cade Cunningham, who dissected Cleveland's defense with surgical precision in his playoff debut. After Mitchell's early barrage threatened to silence the home crowd, Detroit's young core responded with the poise of seasoned veterans. The Pistons' balanced attack and suffocating defense in the final frame turned what looked like a potential upset into a statement victory. This wasn't just a win—it was Detroit announcing their arrival as legitimate championship contenders."
    },
    {
      gameId: "LAL-OKC-20260505",
      teams: { home: "OKC", away: "LAL" },
      finalScore: { home: 108, away: 90 },
      swings: [
        {
          quarter: "1Q",
          timestamp: "5:20",
          description: "LeBron and Davis connect for back-to-back alley-oops to energize Lakers",
          runScore: "8-0 LAL",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "notable"
        },
        {
          quarter: "2Q",
          timestamp: "9:15",
          description: "Thunder's defensive pressure forces five consecutive Lakers turnovers",
          runScore: "15-3 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing"
        },
        {
          quarter: "3Q",
          timestamp: "3:42",
          description: "Williams explodes for 12 points in quarter-closing run",
          runScore: "18-6 OKC",
          momentum: "home",
          keyPlayer: "Jalen Williams",
          impact: "game-changing"
        },
        {
          quarter: "4Q",
          timestamp: "8:30",
          description: "Paycom Center erupts as Thunder push lead to 25 with dominant paint presence",
          runScore: "12-2 OKC",
          momentum: "home",
          keyPlayer: "Chet Holmgren",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "The Thunder's defensive symphony reached crescendo levels as they methodically dismantled the Lakers' championship dreams. What began as a competitive playoff battle devolved into a masterclass in team defense, with Oklahoma City's young wolves hunting in perfect harmony. LeBron and Davis, two future Hall of Famers, looked their age for the first time all season as relentless defensive pressure forced uncharacteristic mistakes. The Paycom Center became a house of horrors for Los Angeles, where every possession felt like swimming upstream against an Oklahoma City tsunami that never relented."
    }
  ]
};