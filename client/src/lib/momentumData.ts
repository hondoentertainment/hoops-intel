// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 25, 2026
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
  date: "April 25, 2026",
  gameOfTheNight: "LAL-HOU-20260424",
  topClutchPerformer: { 
    player: "Anthony Davis", 
    team: "LAL", 
    clutchRating: 96, 
    description: "Dominated overtime with 8 points and game-saving defensive stops to advance the Lakers to the conference semifinals" 
  },
  games: [
    {
      gameId: "BOS-PHI-20260424",
      teams: { home: "PHI", away: "BOS" },
      finalScore: { home: 100, away: 108 },
      swings: [
        {
          quarter: "1Q",
          timestamp: "6:42",
          description: "Embiid responds to early Boston run with dominant post sequence",
          runScore: "12-4",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "significant"
        },
        {
          quarter: "2Q",
          timestamp: "3:15",
          description: "Tatum erupts for 11 straight points to flip the script",
          runScore: "11-2",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing"
        },
        {
          quarter: "3Q",
          timestamp: "8:30",
          description: "Sixers crowd erupts as Philadelphia storms back to tie",
          runScore: "14-6",
          momentum: "home",
          keyPlayer: "Tyrese Maxey",
          impact: "significant"
        },
        {
          quarter: "4Q",
          timestamp: "7:22",
          description: "Brown and Tatum combine for devastating 13-2 closeout run",
          runScore: "13-2",
          momentum: "away",
          keyPlayer: "Jaylen Brown",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Jayson Tatum",
          team: "BOS",
          description: "Step-back three over Embiid to extend lead to 8",
          timeRemaining: "3:45",
          winProbabilityShift: 18
        },
        {
          player: "Jaylen Brown",
          team: "BOS",
          description: "Steal and transition dunk to silence Wells Fargo Center",
          timeRemaining: "1:52",
          winProbabilityShift: 22
        }
      ],
      narrative: "Jayson Tatum's redemption story reached a crescendo as he dismantled Philadelphia's championship hopes with surgical precision. The Celtics' championship DNA emerged in the crucible moments, turning a hostile Wells Fargo Center into a morgue with their devastating fourth-quarter execution. Boston's veteran composure proved the difference as they stole homecourt advantage with the kind of road playoff victory that defines championship runs."
    },
    {
      gameId: "LAL-HOU-20260424",
      teams: { home: "HOU", away: "LAL" },
      finalScore: { home: 108, away: 112 },
      swings: [
        {
          quarter: "2Q",
          timestamp: "4:18",
          description: "Rockets explode for franchise-record playoff quarter",
          runScore: "22-8",
          momentum: "home",
          keyPlayer: "Alperen Şengün",
          impact: "game-changing"
        },
        {
          quarter: "3Q",
          timestamp: "2:45",
          description: "Houston extends to largest lead with suffocating defense",
          runScore: "16-6",
          momentum: "home",
          keyPlayer: "Fred VanVleet",
          impact: "significant"
        },
        {
          quarter: "4Q",
          timestamp: "5:30",
          description: "LeBron orchestrates legendary comeback with vintage assists",
          runScore: "18-6",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "game-changing"
        },
        {
          quarter: "OT",
          timestamp: "3:15",
          description: "Davis completely takes over overtime with unstoppable dominance",
          runScore: "10-4",
          momentum: "away",
          keyPlayer: "Anthony Davis",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "LeBron James",
          team: "LAL",
          description: "Clutch three-pointer to force overtime with crowd stunned",
          timeRemaining: "0:32",
          winProbabilityShift: 45
        },
        {
          player: "Anthony Davis",
          team: "LAL",
          description: "Rim-protecting block followed by thunderous dunk",
          timeRemaining: "2:18 OT",
          winProbabilityShift: 28
        },
        {
          player: "LeBron James",
          team: "LAL",
          description: "Game-winning assist through triple coverage",
          timeRemaining: "0:12 OT",
          winProbabilityShift: 35
        }
      ],
      narrative: "The Toyota Center witnessed playoff folklore as the Lakers orchestrated one of the most improbable series-clinching victories in recent memory. Anthony Davis transformed into an overtime destroyer, completely dominating both ends while LeBron James turned back the clock with vintage playoff magic. Houston's young core learned a brutal lesson about championship experience as the Lakers' playoff pedigree emerged when elimination loomed largest."
    },
    {
      gameId: "SAS-POR-20260424",
      teams: { home: "POR", away: "SAS" },
      finalScore: { home: 108, away: 120 },
      swings: [
        {
          quarter: "1Q",
          timestamp: "7:15",
          description: "Wembanyama announces his presence with rim-rattling sequence",
          runScore: "10-2",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "2Q",
          timestamp: "9:20",
          description: "Lillard time arrives early with deep three-point barrage",
          runScore: "15-5",
          momentum: "home",
          keyPlayer: "Damian Lillard",
          impact: "game-changing"
        },
        {
          quarter: "3Q",
          timestamp: "4:45",
          description: "Spurs length overwhelms Portland with suffocating defense",
          runScore: "18-8",
          momentum: "away",
          keyPlayer: "Jeremy Sochan",
          impact: "significant"
        },
        {
          quarter: "4Q",
          timestamp: "6:30",
          description: "Wembanyama delivers knockout punch with unstoppable fourth quarter",
          runScore: "20-10",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Victor Wembanyama delivered a coming-of-age masterpiece that will be replayed for generations, completely dismantling Portland's upset dreams with otherworldly dominance. The rookie phenom showcased the kind of two-way brilliance that transforms franchises overnight, turning the Moda Center into his personal playground. San Antonio's length and athleticism proved too overwhelming for Portland's veteran guile as Wembanyama announced his arrival as a playoff superstar with thunderous authority."
    }
  ]
};