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
    clutchRating: 97, 
    description: "32 second-half points including three straight threes in the final quarter to silence the Frost Bank Center and steal Game 1 on the road"
  },
  games: [
    {
      gameId: "PHI-NYK-20260504",
      teams: { home: "NYK", away: "PHI" },
      finalScore: { home: 137, away: 98 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:42",
          description: "Brunson scores 11 straight points to start the game, MSG erupts as Knicks take early command",
          runScore: "15-4",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "4:17",
          description: "Randle dominates inside with 12 points in 3 minutes, Sixers call desperate timeout",
          runScore: "18-5",
          momentum: "home",
          keyPlayer: "Julius Randle",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "9:31",
          description: "Embiid briefly awakens with back-to-back threes, but Knicks answer immediately",
          runScore: "8-12",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "notable"
        },
        {
          quarter: "4th",
          timestamp: "6:45",
          description: "Knicks empty the bench as MSG celebrates their biggest playoff win ever",
          runScore: "22-8",
          momentum: "home",
          keyPlayer: "Team Effort",
          impact: "notable"
        }
      ],
      clutchPlays: [],
      narrative: "Madison Square Garden witnessed basketball poetry in motion as Jalen Brunson conducted a 41-point symphony that left Philadelphia shell-shocked. The Knicks' 39-point demolition was less a basketball game than a statement of championship intent, with every possession flowing like clockwork from the opening tip. Julius Randle bulldozed through Philly's defense like a man possessed, while the crowd's electricity reached fever pitch with each thunderous dunk. This wasn't just a Game 1 victory—it was a psychological massacre that may have broken the Sixers' spirit before the series truly began."
    },
    {
      gameId: "MIN-SAS-20260504",
      teams: { home: "SAS", away: "MIN" },
      finalScore: { home: 102, away: 104 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:23",
          description: "Wembanyama blocks three straight shots, Spurs crowd roars as San Antonio takes early lead",
          runScore: "12-4",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "2:45",
          description: "Spurs extend lead to 15 behind Wemby's dominance, Timberwolves look overwhelmed",
          runScore: "15-6",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "0:33",
          description: "Edwards explodes for 8 points in final minute, suddenly it's a game again",
          runScore: "2-11",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "4:12",
          description: "Edwards hits three straight threes, Frost Bank Center falls silent as Minnesota takes lead",
          runScore: "6-18",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Step-back three over Wembanyama to tie the game",
          timeRemaining: "2:47",
          winProbabilityShift: 28
        },
        {
          player: "Karl-Anthony Towns",
          team: "MIN",
          description: "Clutch offensive rebound and putback for the lead",
          timeRemaining: "1:33",
          winProbabilityShift: 35
        },
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Steal and fast-break dunk to seal the victory",
          timeRemaining: "0:41",
          winProbabilityShift: 42
        },
        {
          player: "Victor Wembanyama",
          team: "SAS",
          description: "Desperation three-pointer misses, Spurs season on brink",
          timeRemaining: "0:08",
          winProbabilityShift: -15
        }
      ],
      narrative: "Anthony Edwards authored one of the great playoff heists in recent memory, transforming from invisible to unstoppable in the span of 20 breathtaking minutes. Down 15 in the third quarter with the Frost Bank Center rocking, Edwards channeled his inner assassin and systematically dismantled the league's best defense with a barrage of impossible shots. Victor Wembanyama's early dominance became a footnote as Ant-Man took over the building, hitting three straight threes that sucked the life out of 19,000 stunned Spurs fans. This wasn't just a road victory—it was a star-making performance that announced Edwards as a legitimate championship catalyst, capable of stealing games in the most hostile environments."
    }
  ]
};