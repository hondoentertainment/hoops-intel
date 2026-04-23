// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 23, 2026
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
  date: "April 23, 2026",
  gameOfTheNight: "ORL-DET-20260423",
  topClutchPerformer: { 
    player: "Shai Gilgeous-Alexander", 
    team: "OKC", 
    clutchRating: 87, 
    description: "Closed the door on Phoenix with 11 fourth-quarter points including back-to-back threes" 
  },
  games: [
    {
      gameId: "ORL-DET-20260423",
      teams: { home: "DET", away: "ORL" },
      finalScore: { home: 98, away: 83 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:42",
          description: "Orlando opens with aggressive defense, forcing 5 early turnovers",
          runScore: "11-4 ORL",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "4:15",
          description: "Pistons respond with suffocating paint defense and transition scoring",
          runScore: "18-6 DET",
          momentum: "home",
          keyPlayer: "Isaiah Stewart",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "8:30",
          description: "Detroit locks down defensively, holding Orlando to 2-of-14 shooting",
          runScore: "14-4 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "6:22",
          description: "Magic mount desperate comeback attempt with full-court pressure",
          runScore: "9-2 ORL",
          momentum: "away",
          keyPlayer: "Franz Wagner",
          impact: "notable"
        }
      ],
      clutchPlays: [],
      narrative: "Detroit's dominant defensive performance turned Little Caesars Arena into a fortress as the Pistons suffocated Orlando's offense in a statement playoff-style victory. The Magic managed just 36.8% shooting against Detroit's swarming defense, with the home crowd feeding off every steal and blocked shot. This was vintage Pistons basketball - physical, relentless, and built on defensive identity. The 15-point margin hardly tells the story of Detroit's complete defensive domination that had Orlando searching for answers all night long."
    },
    {
      gameId: "PHX-OKC-20260423",
      teams: { home: "OKC", away: "PHX" },
      finalScore: { home: 120, away: 107 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:18",
          description: "Devin Booker catches fire early with three consecutive threes",
          runScore: "11-2 PHX",
          momentum: "away",
          keyPlayer: "Devin Booker",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "9:45",
          description: "Thunder unleash devastating fast break attack off turnovers",
          runScore: "16-4 OKC",
          momentum: "home",
          keyPlayer: "Jalen Williams",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "2:33",
          description: "Suns battle back with methodical halfcourt execution",
          runScore: "12-4 PHX",
          momentum: "away",
          keyPlayer: "Kevin Durant",
          impact: "notable"
        },
        {
          quarter: "Q4",
          timestamp: "8:15",
          description: "SGA takes over completely, scoring on four straight possessions",
          runScore: "12-2 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "Step-back three over Booker to extend lead to 9",
          timeRemaining: "4:47",
          winProbabilityShift: 15.2
        },
        {
          player: "Devin Booker",
          team: "PHX",
          description: "Contested pull-up jumper keeps Suns within striking distance",
          timeRemaining: "3:28",
          winProbabilityShift: -8.7
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "Drives through traffic for and-one finish",
          timeRemaining: "2:14",
          winProbabilityShift: 18.9
        }
      ],
      narrative: "The Paycom Center exploded as Shai Gilgeous-Alexander put on a fourth-quarter masterclass, outdueling Kevin Durant and Devin Booker when the stakes were highest. What started as a back-and-forth battle between two explosive offenses became SGA's personal showcase in the final frame, as he scored seemingly at will against Phoenix's desperate defensive adjustments. The Thunder's young core showed they're ready for any challenge, turning a competitive game into a statement victory with pure clutch execution. Oklahoma City's 64-win season continues to look more and more legitimate with performances like this against elite competition."
    }
  ]
};