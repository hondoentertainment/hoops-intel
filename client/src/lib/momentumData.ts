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
    clutchRating: 94, 
    description: "Ice-cold killer with 12 clutch points in the final five minutes, hitting contested shots that silenced Philly's comeback dreams" 
  },
  games: [
    {
      gameId: "MIN-SAS-20260506",
      teams: { home: "SAS", away: "MIN" },
      finalScore: { home: 133, away: 95 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:42",
          description: "Wembanyama's rim protection ignites fast break surge",
          runScore: "17-5",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "Q1",
          timestamp: "2:15",
          description: "Edwards responds with three straight buckets",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "8:30",
          description: "Chris Paul masterclass begins - 5 assists in 3 minutes",
          runScore: "15-4",
          momentum: "home",
          keyPlayer: "Chris Paul",
          impact: "game-changing"
        },
        {
          quarter: "Q3",
          timestamp: "4:07",
          description: "Wembanyama unleashes 13-point explosion to break it wide open",
          runScore: "20-6",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "This wasn't just a victory - it was a statement etched in playoff history. After Minnesota stunned them in Game 1, the Spurs unleashed their young superstar like never before, with Wembanyama delivering a postseason masterpiece that had Frost Bank Center erupting. Chris Paul turned back the clock with vintage floor generalship, conducting a symphony of ball movement that left the Timberwolves dizzy. The 38-point demolition served notice that this Spurs team, led by their otherworldly French phenom, isn't going quietly into any good night."
    },
    {
      gameId: "PHI-NYK-20260506",
      teams: { home: "NYK", away: "PHI" },
      finalScore: { home: 108, away: 102 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:23",
          description: "Embiid dominates the paint early with 8 straight points",
          runScore: "8-0",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "9:15",
          description: "Madison Square Garden erupts as Hart ignites 12-0 run",
          runScore: "12-0",
          momentum: "home",
          keyPlayer: "Josh Hart",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "6:42",
          description: "Maxey catches fire from three - four triples in five minutes",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Tyrese Maxey",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "3:18",
          description: "Brunson takes over with clutch scoring barrage",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Step-back three over Maxey with shot clock winding down",
          timeRemaining: "4:47",
          winProbabilityShift: 18
        },
        {
          player: "Joel Embiid",
          team: "PHI", 
          description: "Thunderous dunk plus foul cuts deficit to 4",
          timeRemaining: "3:52",
          winProbabilityShift: -12
        },
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Driving layup through contact with Embiid in drop coverage",
          timeRemaining: "2:31",
          winProbabilityShift: 15
        },
        {
          player: "OG Anunoby",
          team: "NYK",
          description: "Steal and transition dunk seals the victory",
          timeRemaining: "1:08",
          winProbabilityShift: 22
        }
      ],
      narrative: "The Garden was electric and Jalen Brunson fed off every decibel, delivering clutch bucket after clutch bucket when Philadelphia mounted their desperate fourth-quarter charge. Despite Joel Embiid's herculean effort and Tyrese Maxey's explosive shooting, the Knicks refused to buckle under playoff pressure. Brunson's late-game composure was the difference - each shot more audacious than the last, each make sending the crowd into delirium. Now the Sixers return home facing an 0-2 deficit that feels more like a mountain than a molehill."
    }
  ]
};