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
    clutchRating: 94, 
    description: "Scored 12 points in the final 6 minutes with three crucial assists to stave off elimination" 
  },
  games: [
    {
      gameId: "ORL-DET-20260429",
      teams: { home: "DET", away: "ORL" },
      finalScore: { home: 116, away: 109 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:24",
          description: "Orlando opened with a devastating 12-2 run, looking to complete the historic sweep on the road",
          runScore: "12-2 ORL",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "4:17",
          description: "Little Caesars Arena erupted as Detroit answered with 18-4 surge, Cunningham orchestrating every possession",
          runScore: "18-4 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "2:45",
          description: "Magic regained control with suffocating defense, forcing six straight Detroit turnovers",
          runScore: "15-5 ORL",
          momentum: "away",
          keyPlayer: "Franz Wagner",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "6:12",
          description: "Cunningham took over completely, scoring or assisting on 14 straight Detroit points in elimination-saving rally",
          runScore: "14-3 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Step-back three over two defenders to extend lead to 7",
          timeRemaining: "3:42",
          winProbabilityShift: 18.5
        },
        {
          player: "Paolo Banchero",
          team: "ORL",
          description: "And-1 finish through contact to cut deficit to 4",
          timeRemaining: "2:18",
          winProbabilityShift: -12.3
        },
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Perfect assist to open Isaiah Stewart for dagger dunk",
          timeRemaining: "1:07",
          winProbabilityShift: 22.1
        }
      ],
      narrative: "Detroit delivered the most emotionally charged performance of the playoffs, with Cade Cunningham playing like a superstar in his elimination game moment. The Little Caesars Arena crowd created an atmosphere that seemed to lift the Pistons above their capabilities, turning what looked like inevitable disappointment into playoff magic. Orlando showed championship-level composure even in defeat, but couldn't quite close the door on a desperate Detroit team fighting for survival. This was playoff basketball at its most dramatic - raw emotion meets elite execution."
    },
    {
      gameId: "TOR-CLE-20260429",
      teams: { home: "CLE", away: "TOR" },
      finalScore: { home: 125, away: 120 },
      swings: [
        {
          quarter: "1st",
          timestamp: "6:33",
          description: "Toronto's ball movement was poetry in motion, finding open looks with precision passing for early 14-4 advantage",
          runScore: "14-4 TOR",
          momentum: "away",
          keyPlayer: "Pascal Siakam",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "9:15",
          description: "Mitchell caught fire from deep, hitting four threes in five minutes to flip the script completely",
          runScore: "16-6 CLE",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "1:28",
          description: "Raptors responded with their own three-point barrage, Siakam and Barnes combining for 12 straight points",
          runScore: "12-2 TOR",
          momentum: "away",
          keyPlayer: "Pascal Siakam",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "7:45",
          description: "Cleveland's defense finally locked in, forcing five consecutive Toronto misses while Mitchell stayed scorching hot",
          runScore: "13-0 CLE",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Contested pull-up three from 28 feet to push lead to 8",
          timeRemaining: "4:23",
          winProbabilityShift: 16.7
        },
        {
          player: "Scottie Barnes",
          team: "TOR",
          description: "Steal and transition dunk to cut deficit to 3",
          timeRemaining: "2:45",
          winProbabilityShift: -14.2
        },
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Drive and dish to Mobley for critical basket",
          timeRemaining: "1:33",
          winProbabilityShift: 11.8
        }
      ],
      narrative: "Donovan Mitchell reminded everyone why Cleveland traded for him, delivering a masterclass in playoff scoring that had Rocket Arena rocking from start to finish. This was the kind of back-and-forth battle that makes the NBA playoffs appointment television, with both teams trading haymakers like heavyweight boxers. Toronto showed they won't go quietly, but Mitchell's individual brilliance might be the difference-maker Cleveland needs to make a deep run. The series is now perfectly positioned for an epic seven-game war."
    },
    {
      gameId: "HOU-LAL-20260429",
      teams: { home: "LAL", away: "HOU" },
      finalScore: { home: 93, away: 99 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:42",
          description: "Sengun dominated the paint early, scoring 8 straight points while Lakers looked sluggish and unprepared",
          runScore: "10-2 HOU",
          momentum: "away",
          keyPlayer: "Alperen Sengun",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "5:21",
          description: "Lakers veterans finally woke up, LeBron and AD combining for 12 points to briefly seize control at crypto.com",
          runScore: "12-4 LAL",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "3:18",
          description: "Houston's youth movement exploded, Reed and Thompson scoring 11 straight as Lakers' defense crumbled",
          runScore: "15-4 HOU",
          momentum: "away",
          keyPlayer: "Jalen Green",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "8:33",
          description: "Sengun took over completely, scoring and facilitating as Houston pulled away from a deflated Lakers squad",
          runScore: "11-3 HOU",
          momentum: "away",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The changing of the guard happened in real-time at crypto.com Arena, with Houston's young core outplaying LeBron James and the Lakers when it mattered most. Alperen Sengun looked like a future All-Star, completely controlling both ends while LeBron appeared every bit of his 41 years in crucial moments. This wasn't just a Game 1 loss for the Lakers - it was a glimpse of their championship window potentially slamming shut. Houston's confidence will only grow after stealing homecourt from a Lakers team that suddenly looks vulnerable and old."
    }
  ]
};