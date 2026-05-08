// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 8, 2026
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
  date: "May 8, 2026",
  gameOfTheNight: "LAL-OKC-20260507",
  topClutchPerformer: { 
    player: "Shai Gilgeous-Alexander", 
    team: "OKC", 
    clutchRating: 94, 
    description: "Delivered a masterful third quarter performance with 15 points in 8 minutes, turning a competitive contest into a Thunder rout and effectively ending the Lakers' championship hopes." 
  },
  games: [
    {
      gameId: "LAL-OKC-20260507",
      teams: { home: "OKC", away: "LAL" },
      finalScore: { home: 125, away: 107 },
      swings: [
        {
          quarter: "1Q",
          timestamp: "6:32",
          description: "LeBron James scored 8 straight points to give Lakers early 18-12 advantage",
          runScore: "8-0",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "notable"
        },
        {
          quarter: "2Q",
          timestamp: "3:45",
          description: "Thunder responded with suffocating defense, forcing 5 turnovers in a 14-2 run",
          runScore: "14-2",
          momentum: "home",
          keyPlayer: "Jalen Williams",
          impact: "significant"
        },
        {
          quarter: "3Q",
          timestamp: "8:15",
          description: "Shai Gilgeous-Alexander erupted for 15 points in 8 minutes, turning 6-point halftime deficit into commanding 15-point lead",
          runScore: "21-0",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing"
        },
        {
          quarter: "4Q",
          timestamp: "9:20",
          description: "Thunder's bench unit extended lead with pristine ball movement, outscoring Lakers reserves 18-7",
          runScore: "18-7",
          momentum: "home",
          keyPlayer: "Isaiah Joe",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "The Thunder delivered a championship-caliber beatdown that exposed every weakness in the Lakers' aging roster. Shai Gilgeous-Alexander's third-quarter explosion was poetry in motion, systematically dismantling LA's defense with an unstoppable blend of drives and pull-up jumpers. The 18-point margin doesn't tell the full story of Oklahoma City's suffocating dominance on both ends. With a 2-0 stranglehold, the Thunder have positioned themselves as legitimate title contenders while the Lakers face potential elimination and uncomfortable questions about their championship window."
    },
    {
      gameId: "CLE-DET-20260507",
      teams: { home: "DET", away: "CLE" },
      finalScore: { home: 107, away: 97 },
      swings: [
        {
          quarter: "1Q",
          timestamp: "4:18",
          description: "Donovan Mitchell connected on three consecutive threes to put Cavaliers up 19-11",
          runScore: "9-2",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "notable"
        },
        {
          quarter: "2Q",
          timestamp: "7:30",
          description: "Cade Cunningham orchestrated 16-4 run with perfect playmaking and mid-range shooting",
          runScore: "16-4",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "significant"
        },
        {
          quarter: "3Q",
          timestamp: "5:45",
          description: "Isaiah Stewart dominated the paint on both ends, scoring 10 points and grabbing 6 rebounds in decisive stretch",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "Isaiah Stewart",
          impact: "game-changing"
        },
        {
          quarter: "4Q",
          timestamp: "6:12",
          description: "Pistons defense clamped down, forcing Cleveland into 1-of-8 shooting during crucial final minutes",
          runScore: "8-1",
          momentum: "home",
          keyPlayer: "Ausar Thompson",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Detroit's suffocating defense and balanced offensive attack has completely neutralized Cleveland's playoff aspirations through two masterful home performances. Cade Cunningham's evolution into a true floor general was on full display, conducting the Pistons' symphony with surgical precision. The Cavaliers' road struggles have been magnified by Detroit's championship-level execution and Little Caesars Arena's electric atmosphere. Cleveland now faces the daunting task of winning four straight against a Pistons team that looks destined for deeper playoff glory."
    }
  ]
};