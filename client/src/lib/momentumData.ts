// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 5, 2026
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
  date: "May 5, 2026",
  gameOfTheNight: "MIN-SAS-20260504",
  topClutchPerformer: { 
    player: "Anthony Edwards", 
    team: "MIN", 
    clutchRating: 94, 
    description: "32 second-half points including 18 in the fourth quarter to complete a stunning road comeback victory" 
  },
  games: [
    {
      gameId: "PHI-NYK-20260504",
      teams: { home: "NYK", away: "PHI" },
      finalScore: { home: 137, away: 98 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:34",
          description: "Brunson catches fire with three straight threes as Knicks open 18-7",
          runScore: "15-2 run",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "3:21",
          description: "Randle dominates the paint with 12 quick points, extending the lead to 22",
          runScore: "16-4 run",
          momentum: "home",
          keyPlayer: "Julius Randle",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "9:15",
          description: "76ers attempt a comeback with Embiid finding rhythm, cutting deficit to 16",
          runScore: "11-3 run",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "4:07",
          description: "Knicks answer immediately with suffocating defense and transition buckets",
          runScore: "13-2 run",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The Garden witnessed a playoff massacre as the Knicks delivered their most dominant postseason performance in franchise history. Jalen Brunson was unconscious from the opening tip, setting the tone for a wire-to-wire destruction of Philadelphia. The 76ers' championship hopes took a devastating blow as their offense completely collapsed under New York's relentless pressure. This wasn't just a Game 1 victory—it was a statement that the Knicks are ready to make a serious title run."
    },
    {
      gameId: "MIN-SAS-20260504",
      teams: { home: "SAS", away: "MIN" },
      finalScore: { home: 102, away: 104 },
      swings: [
        {
          quarter: "2nd",
          timestamp: "6:42",
          description: "Wembanyama showcases his full arsenal with blocks and threes, building 12-point lead",
          runScore: "18-6 run",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "4:18",
          description: "Edwards begins his takeover with explosive drives and contested threes",
          runScore: "14-3 run",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "8:29",
          description: "Towns provides crucial support, hitting key shots to keep pace with Spurs",
          runScore: "10-6 run",
          momentum: "away",
          keyPlayer: "Karl-Anthony Towns",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "2:14",
          description: "Edwards goes into supernova mode with back-to-back impossible shots",
          runScore: "8-2 run",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Step-back three over Wembanyama from 28 feet",
          timeRemaining: "2:47",
          winProbabilityShift: 18.5
        },
        {
          player: "Victor Wembanyama",
          team: "SAS",
          description: "Turnaround fadeaway jumper to tie the game",
          timeRemaining: "1:33",
          winProbabilityShift: -12.3
        },
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Driving layup through contact with perfect body control",
          timeRemaining: "0:52",
          winProbabilityShift: 22.7
        },
        {
          player: "Karl-Anthony Towns",
          team: "MIN",
          description: "Defensive rebound and ice-cold free throws to seal victory",
          timeRemaining: "0:18",
          winProbabilityShift: 15.2
        }
      ],
      narrative: "Anthony Edwards announced himself as a bonafide superstar with one of the most electrifying playoff performances in recent memory. After San Antonio built a commanding lead behind Wembanyama's otherworldly play, Edwards single-handedly willed Minnesota back with 32 second-half points that defied physics and logic. The young Timberwolves showed championship-level composure in a hostile environment, stealing Game 1 and serving notice that they're ready to make noise in these playoffs. This instant classic featured two generational talents going toe-to-toe, with Edwards edging the battle in the most crucial moments."
    }
  ]
};