// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 29, 2026
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
  date: "April 29, 2026",
  gameOfTheNight: "PHI-BOS-20260428",
  topClutchPerformer: { 
    player: "Joel Embiid", 
    team: "PHI", 
    clutchRating: 94, 
    description: "Delivered when elimination loomed largest, scoring 12 fourth-quarter points to silence TD Garden and extend Philadelphia's season with a dominant road playoff performance."
  },
  games: [
    {
      gameId: "PHI-BOS-20260428",
      teams: { home: "BOS", away: "PHI" },
      finalScore: { home: 97, away: 113 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:32",
          description: "Embiid scores 8 straight points with two thunderous dunks to stun the TD Garden crowd early",
          runScore: "8-0",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "4:15",
          description: "Tatum responds with back-to-back threes as Celtics fight back to tie the game",
          runScore: "9-2",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "8:44",
          description: "Philadelphia explodes with a devastating 18-4 run to break the game wide open",
          runScore: "18-4",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "6:28",
          description: "Embiid's dominant post display completely shuts down any Boston comeback hopes",
          runScore: "12-3",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Joel Embiid delivered the performance of his playoff career when facing elimination, completely dismantling the Celtics' defense with surgical precision and brute force. The big man's dominance in the paint turned TD Garden from a raucous home advantage into a stunned silence as Philadelphia controlled every meaningful possession down the stretch. This was the kind of transcendent individual performance that legends are built upon, proving that elite talent can overcome any deficit when backed against the wall. The Sixers' stunning road victory has completely shifted the series dynamics and left Boston questioning everything they thought they knew about this matchup."
    },
    {
      gameId: "ATL-NYK-20260428",
      teams: { home: "NYK", away: "ATL" },
      finalScore: { home: 126, away: 97 },
      swings: [
        {
          quarter: "1st",
          timestamp: "9:12",
          description: "Brunson opens with 11 points in first five minutes as Madison Square Garden erupts",
          runScore: "15-4",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "6:33",
          description: "Young briefly rallies Atlanta with three consecutive assists and a deep three",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "2:47",
          description: "Knicks close the half with a suffocating 16-2 run that breaks Atlanta's spirit",
          runScore: "16-2",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "5:21",
          description: "New York's balanced attack extends lead to 30+ points with relentless ball movement",
          runScore: "14-3",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Jalen Brunson orchestrated a playoff masterpiece that transformed Madison Square Garden into an absolute cauldron of championship dreams and playoff euphoria. The Knicks' offensive execution was surgical in its precision, with Brunson's leadership setting the tone for a complete team performance that left Atlanta searching for answers. New York's suffocating defense and balanced scoring attack created the kind of playoff atmosphere that MSG is legendary for, with every possession feeling like a statement about their championship aspirations. The Hawks now face the daunting reality that they're completely outmatched by a Knicks team that looks ready to make a serious playoff run."
    },
    {
      gameId: "POR-SAS-20260428",
      teams: { home: "SAS", away: "POR" },
      finalScore: { home: 114, away: 95 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:45",
          description: "Wembanyama announces his presence with three consecutive blocks and a transition dunk",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "7:18",
          description: "Lillard heats up with back-to-back deep threes to keep Portland competitive",
          runScore: "8-0",
          momentum: "away",
          keyPlayer: "Damian Lillard",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "4:52",
          description: "Wembanyama's otherworldly sequence of blocks, assists, and scoring breaks the game open",
          runScore: "17-4",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "9:33",
          description: "San Antonio cruises as Wembanyama showcases complete two-way dominance",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Victor Wembanyama delivered a coming-of-age playoff performance that announced his arrival as a legitimate championship centerpiece with breathtaking two-way brilliance. The generational talent's combination of rim protection, offensive versatility, and court vision was simply too much for Portland to handle, creating the kind of talent disparity that decides playoff series. San Antonio's Frost Bank Center witnessed something truly special as Wembanyama showcased why he's already being mentioned alongside the game's greatest big men despite his youth. The Spurs now look like legitimate title contenders with their franchise player hitting his playoff stride at the perfect moment, while Portland faces the harsh reality of being completely overmatched."
    }
  ]
};