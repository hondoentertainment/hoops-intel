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
    description: "Connected on back-to-back threes in the fourth quarter and sealed the win with a clutch assist to Stewart with 1:42 remaining" 
  },
  games: [
    {
      gameId: "CLE-DET-20260505",
      teams: { home: "DET", away: "CLE" },
      finalScore: { home: 111, away: 101 },
      swings: [
        {
          quarter: "1st",
          timestamp: "6:23",
          description: "Mitchell opens with 9 straight points, giving Cavaliers early command",
          runScore: "CLE 9-0 run",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "3:47",
          description: "Cunningham finds his rhythm with 11 points in 4 minutes, Pistons surge ahead",
          runScore: "DET 15-4 run",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "8:12",
          description: "Stewart dominates inside while Duren controls the glass, Detroit pulls away",
          runScore: "DET 12-2 run",
          momentum: "home",
          keyPlayer: "Isaiah Stewart",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "4:23",
          description: "Cleveland makes final push as Mitchell hits consecutive threes",
          runScore: "CLE 8-0 run",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "significant"
        }
      ],
      clutchPlays: [
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Drilled contested three-pointer to answer Mitchell's rally",
          timeRemaining: "3:14",
          winProbabilityShift: 18.2
        },
        {
          player: "Isaiah Stewart",
          team: "DET",
          description: "Powerful dunk off Cunningham assist to ice the game",
          timeRemaining: "1:42",
          winProbabilityShift: 22.7
        }
      ],
      narrative: "The Little Caesars Arena was electric as Cade Cunningham orchestrated a playoff symphony that announced Detroit's championship intentions. After Cleveland's early surge behind Mitchell's hot shooting, the Pistons' young core responded with poise beyond their years. Stewart and Duren's interior dominance in the third quarter broke Cleveland's spirit, while Cunningham's clutch shooting sealed a statement victory. This wasn't just a Game 1 win—it was a declaration that Detroit's rebuild has reached championship-level maturity."
    },
    {
      gameId: "LAL-OKC-20260505",
      teams: { home: "OKC", away: "LAL" },
      finalScore: { home: 108, away: 90 },
      swings: [
        {
          quarter: "1st",
          timestamp: "4:18",
          description: "Lakers jump out early as Davis dominates inside for quick 8-0 lead",
          runScore: "LAL 8-0 run",
          momentum: "away",
          keyPlayer: "Anthony Davis",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "9:31",
          description: "Thunder defense locks in, forcing 7 turnovers in devastating stretch",
          runScore: "OKC 16-2 run",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "5:44",
          description: "Williams catches fire with 14 third-quarter points, crowd erupts",
          runScore: "OKC 18-6 run",
          momentum: "home",
          keyPlayer: "Jalen Williams",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "What was supposed to be a heavyweight playoff battle turned into a defensive clinic that left the Lakers looking like shell-shocked veterans. Oklahoma City's swarming defense made LeBron and Davis look mortal, forcing turnovers and contested shots all night long. The Paycom Center became a house of horrors for Los Angeles as the Thunder's young legs and fresh energy overwhelmed the Lakers' championship experience. By the fourth quarter, this wasn't a game—it was a changing of the guard announcement from the NBA's next dynasty."
    }
  ]
};