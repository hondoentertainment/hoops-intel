// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 21, 2026
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
  date: "April 21, 2026",
  gameOfTheNight: "ATL-NYK-20260420",
  topClutchPerformer: { 
    player: "Trae Young", 
    team: "ATL", 
    clutchRating: 98, 
    description: "Ice-cold step-back three over Brunson with 8.4 seconds left to steal victory at MSG" 
  },
  games: [
    {
      gameId: "ATL-NYK-20260420",
      teams: { home: "NYK", away: "ATL" },
      finalScore: { home: 106, away: 107 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:32",
          description: "Brunson catches fire with three straight threes to give Knicks early control",
          runScore: "11-2",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "3:15",
          description: "Young answers back with deep bombs, Hawks close gap before halftime",
          runScore: "8-15",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "9:41",
          description: "Randle dominates the paint as Knicks build commanding 12-point cushion",
          runScore: "18-8",
          momentum: "home",
          keyPlayer: "Julius Randle",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "4:22",
          description: "Hawks rally with lockdown defense and transition buckets to tie it up",
          runScore: "6-16",
          momentum: "away",
          keyPlayer: "Dejounte Murray",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "0:08",
          description: "Young delivers the knockout punch with step-back dagger over Brunson",
          runScore: "0-3",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Drives through traffic for crucial layup to tie game at 104",
          timeRemaining: "1:42",
          winProbabilityShift: 15
        },
        {
          player: "Trae Young",
          team: "ATL",
          description: "Step-back three over Brunson with ice in his veins for the win",
          timeRemaining: "0:08",
          winProbabilityShift: 85
        }
      ],
      narrative: "Trae Young authored one of the most dramatic finishes of the season, silencing Madison Square Garden with a cold-blooded step-back three that will haunt Knicks fans all summer. After trailing by 12 in the third quarter, the Hawks showed championship-level composure in their fourth-quarter comeback. Young's dagger over Brunson was pure theater—the kind of moment that separates superstars from mere scorers. The loss stings even more for New York, who controlled the game for three quarters only to watch their playoff seeding hopes take a devastating hit."
    },
    {
      gameId: "MIN-DEN-20260420",
      teams: { home: "DEN", away: "MIN" },
      finalScore: { home: 114, away: 119 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:15",
          description: "Edwards explodes early with back-to-back threes to stun the home crowd",
          runScore: "4-12",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "5:43",
          description: "Jokić takes over with his full arsenal, Nuggets storm back to tie",
          runScore: "16-8",
          momentum: "home",
          keyPlayer: "Nikola Jokić",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "7:28",
          description: "Murray and Gordon combine for blistering run to push Denver ahead",
          runScore: "13-4",
          momentum: "home",
          keyPlayer: "Jamal Murray",
          impact: "notable"
        },
        {
          quarter: "Q4",
          timestamp: "6:12",
          description: "Edwards refuses to let streak continue, leads Wolves charge with clutch buckets",
          runScore: "8-18",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Stepback three over Kentavious Caldwell-Pope extends lead to 5",
          timeRemaining: "3:28",
          winProbabilityShift: 22
        },
        {
          player: "Nikola Jokić",
          team: "DEN",
          description: "Impossible fadeaway over Gobert keeps streak hopes alive",
          timeRemaining: "2:14",
          winProbabilityShift: -18
        },
        {
          player: "Jaden McDaniels",
          team: "MIN",
          description: "Corner three off Edwards assist puts the dagger in historic streak",
          timeRemaining: "1:03",
          winProbabilityShift: 31
        }
      ],
      narrative: "Anthony Edwards played the role of streak-breaker to perfection, ending Denver's magical 13-game home winning streak with a performance that announced his arrival among the NBA's elite closers. The young star was relentless in the fourth quarter, consistently answering every Nuggets surge with contested threes and athletic finishes that left Ball Arena deflated. Even Jokić's superhuman efforts couldn't extend the streak, as father time finally caught up with the Nuggets' incredible run. Sometimes the most historic streaks end not with a whimper, but with a future superstar making his statement on the biggest stage."
    },
    {
      gameId: "CLE-TOR-20260420",
      teams: { home: "TOR", away: "CLE" },
      finalScore: { home: 105, away: 115 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "9:22",
          description: "Barnes and Siakam combine for early barrage to energize home crowd",
          runScore: "12-4",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "8:31",
          description: "Mobley dominates the paint while Mitchell heats up from deep",
          runScore: "4-15",
          momentum: "away",
          keyPlayer: "Evan Mobley",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "5:17",
          description: "Cavaliers length overwhelms Raptors offense, lead balloons to 18",
          runScore: "6-21",
          momentum: "away",
          keyPlayer: "Evan Mobley",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "7:45",
          description: "Raptors make desperate push but Cleveland's defense holds firm",
          runScore: "11-6",
          momentum: "home",
          keyPlayer: "Pascal Siakam",
          impact: "notable"
        }
      ],
      clutchPlays: [],
      narrative: "Evan Mobley put on a defensive clinic that reminded everyone why he's the future of Cleveland's championship aspirations, completely neutralizing Toronto's interior attack with his otherworldly length and timing. The young big man was equally devastating on offense, using his smooth touch and mobility to carve up the Raptors' defense with surgical precision. Cleveland's suffocating length became too much for Toronto to handle, as the Cavaliers pulled away in the third quarter and never looked back. This was the kind of statement win that could propel the Cavs deep into the playoffs—dominant on both ends with their franchise cornerstone leading the way."
    }
  ]
};