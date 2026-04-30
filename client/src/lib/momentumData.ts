// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 30, 2026
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
  date: "April 30, 2026",
  gameOfTheNight: "ORL-DET-20260429",
  topClutchPerformer: { 
    player: "Cade Cunningham", 
    team: "DET", 
    clutchRating: 92, 
    description: "Delivered consecutive clutch buckets and assists in final 4 minutes to stave off elimination, shooting 3-4 with 2 assists when it mattered most" 
  },
  games: [
    {
      gameId: "ORL-DET-20260429",
      teams: { home: "DET", away: "ORL" },
      finalScore: { home: 116, away: 109 },
      swings: [
        {
          quarter: "1st",
          timestamp: "5:42",
          description: "Orlando jumps out early with Paolo Banchero scoring 8 straight points, silencing the desperate Detroit crowd",
          runScore: "8-0 ORL",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "8:15",
          description: "Cunningham responds with authority, scoring 12 points in a 16-4 run that has Little Caesars Arena erupting",
          runScore: "16-4 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "3:28",
          description: "Magic weather the storm with a 13-2 surge, reminding everyone they're one win from history",
          runScore: "13-2 ORL",
          momentum: "away",
          keyPlayer: "Franz Wagner",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "6:45",
          description: "Detroit's championship experience finally shows as they rip off 18-6 run to seize control",
          runScore: "18-6 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Drives through traffic for and-one bucket, flexing at the crowd",
          timeRemaining: "4:12",
          winProbabilityShift: 15
        },
        {
          player: "Paolo Banchero",
          team: "ORL",
          description: "Answers with step-back three to keep Magic within striking distance",
          timeRemaining: "3:34",
          winProbabilityShift: -12
        },
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Thread-the-needle assist to Isaiah Stewart for crucial dunk",
          timeRemaining: "2:08",
          winProbabilityShift: 11
        }
      ],
      narrative: "In a do-or-die performance that exemplified championship heart, Cade Cunningham authored one of the most crucial individual performances in Pistons playoff history. The home crowd's deafening energy became a sixth man as Detroit finally matched Orlando's upset intensity that had dominated this shocking series. While the Magic proved their young core belongs on this stage, the Pistons' veteran leadership and Cunningham's clutch gene prevented what would have been the most embarrassing collapse in NBA playoff history. This was playoff basketball at its most raw and desperate."
    },
    {
      gameId: "TOR-CLE-20260429",
      teams: { home: "CLE", away: "TOR" },
      finalScore: { home: 125, away: 120 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:20",
          description: "Mitchell catches fire early, nailing three consecutive threes to set the tone",
          runScore: "11-2 CLE",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "4:15",
          description: "Siakam takes over with his signature mid-range game, leading 14-5 surge",
          runScore: "14-5 TOR",
          momentum: "away",
          keyPlayer: "Pascal Siakam",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "9:30",
          description: "Cleveland explodes out of halftime with suffocating defense fueling fast breaks",
          runScore: "17-4 CLE",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "7:22",
          description: "Raptors refuse to fold as Barnes and Siakam combine for 10 straight points",
          runScore: "10-0 TOR",
          momentum: "away",
          keyPlayer: "Scottie Barnes",
          impact: "significant"
        }
      ],
      clutchPlays: [
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Pulls up for contested three with shot clock winding down",
          timeRemaining: "3:45",
          winProbabilityShift: 8
        },
        {
          player: "Pascal Siakam",
          team: "TOR",
          description: "Spins baseline for tough fadeaway to cut deficit to three",
          timeRemaining: "1:52",
          winProbabilityShift: -6
        }
      ],
      narrative: "Donovan Mitchell's 34-point explosion was a masterclass in playoff takeover basketball, showcasing exactly why Cleveland traded for him. The Cavaliers' balanced attack and improved defensive intensity suggested they've found another gear after their Game 1 stumble. Toronto's resilience, led by Pascal Siakam's crafty veteran play, proved this series has the makings of a seven-game thriller. The back-and-forth nature of this contest exemplified playoff basketball at its finest, with both teams trading haymakers like heavyweight prizefighters."
    },
    {
      gameId: "HOU-LAL-20260429",
      teams: { home: "LAL", away: "HOU" },
      finalScore: { home: 93, away: 99 },
      swings: [
        {
          quarter: "1st",
          timestamp: "6:15",
          description: "LeBron opens with vintage aggression, scoring 8 early points as crypto.com Arena buzzes",
          runScore: "12-4 LAL",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "9:45",
          description: "Sengun takes over the paint completely, dominating both ends in stunning 16-3 run",
          runScore: "16-3 HOU",
          momentum: "away",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "2:30",
          description: "Lakers offense sputters as Houston's youth and energy overwhelms veteran legs",
          runScore: "13-4 HOU",
          momentum: "away",
          keyPlayer: "Jalen Green",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "In a stunning road victory that announced Houston's playoff arrival, Alperen Sengun's paint dominance exposed every flaw in the Lakers' aging roster. LeBron James looked his age for perhaps the first time in years, managing just 18 points as the Rockets' relentless energy wore down Los Angeles' veteran core. This wasn't just a Game 1 upset—it was a changing of the guard moment that could define both franchises' futures. The young, hungry Rockets played with the kind of desperate playoff intensity that championship teams possess, while the Lakers appeared caught off guard by Houston's legitimate title aspirations."
    }
  ]
};