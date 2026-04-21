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
    clutchRating: 94, 
    description: "Dagger three-pointer with 8.4 seconds left at Madison Square Garden, capping a 28-point masterpiece that stunned the home crowd and shifted playoff positioning in the East" 
  },
  games: [
    {
      gameId: "ATL-NYK-20260420",
      teams: { home: "NYK", away: "ATL" },
      finalScore: { home: 106, away: 107 },
      swings: [
        {
          quarter: "2nd",
          timestamp: "4:32",
          description: "Randle and Brunson combine for 8-0 run to break open early game",
          runScore: "8-0 NYK",
          momentum: "home",
          keyPlayer: "Julius Randle",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "7:15",
          description: "Knicks explode for 14-2 run highlighted by three straight Brunson buckets",
          runScore: "14-2 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "6:45",
          description: "Young catches fire with back-to-back threes to ignite Hawks comeback",
          runScore: "10-2 ATL",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "0:08",
          description: "Young delivers ice-cold step-back three over Brunson for the dagger",
          runScore: "3-0 ATL",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Trae Young",
          team: "ATL",
          description: "Step-back three-pointer over Brunson with 8.4 seconds remaining",
          timeRemaining: "0:08",
          winProbabilityShift: 85
        },
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Driving layup through contact to tie game at 104",
          timeRemaining: "1:24",
          winProbabilityShift: 22
        },
        {
          player: "Trae Young",
          team: "ATL",
          description: "Pull-up three from 28 feet to cut deficit to one",
          timeRemaining: "2:41",
          winProbabilityShift: 31
        }
      ],
      narrative: "Trae Young authored one of the most spectacular road performances of the season, turning Madison Square Garden into his personal stage with a clutch masterclass. After trailing by double digits in the third quarter, Young single-handedly willed Atlanta back with his deep shooting range and fearless shot-making. The step-back three over Brunson with 8.4 seconds left will go down as one of the coldest daggers of the season, silencing 20,000 fans and delivering a crushing blow to New York's playoff seeding hopes. Young's performance proved he belongs among the elite clutch performers in the game, rising to his biggest moment in the league's most unforgiving arena."
    },
    {
      gameId: "MIN-DEN-20260420",
      teams: { home: "DEN", away: "MIN" },
      finalScore: { home: 114, away: 119 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:23",
          description: "Edwards opens with three straight threes to stun Ball Arena crowd",
          runScore: "9-2 MIN",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "5:41",
          description: "Jokić orchestrates 12-0 run with three assists and two buckets",
          runScore: "12-0 DEN",
          momentum: "home",
          keyPlayer: "Nikola Jokić",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "2:18",
          description: "Murray and Porter Jr. combine for 10 straight to extend Denver lead",
          runScore: "10-0 DEN",
          momentum: "home",
          keyPlayer: "Jamal Murray",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "4:52",
          description: "Edwards and McDaniels fuel 16-6 closing run to break 13-game streak",
          runScore: "16-6 MIN",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Pull-up three from the wing to give Minnesota the lead",
          timeRemaining: "2:15",
          winProbabilityShift: 34
        },
        {
          player: "Jaden McDaniels",
          team: "MIN",
          description: "Steal and dunk to extend lead to five points",
          timeRemaining: "1:03",
          winProbabilityShift: 28
        },
        {
          player: "Nikola Jokić",
          team: "DEN",
          description: "Hook shot over Towns to cut deficit to three",
          timeRemaining: "0:45",
          winProbabilityShift: -18
        }
      ],
      narrative: "Anthony Edwards announced himself as a superstar with a breathtaking performance that ended Denver's historic 13-game winning streak in the most hostile environment possible. Edwards was unconscious from three-point range, consistently answering every Nuggets surge with spectacular shot-making that left even the Ball Arena crowd in awe. The young star's clutch gene was on full display as he refused to let Minnesota fold under the pressure of Denver's championship pedigree. This victory served as a statement win for the Timberwolves' playoff aspirations and proved Edwards can go toe-to-toe with the league's elite in the biggest moments."
    },
    {
      gameId: "TOR-CLE-20260420",
      teams: { home: "CLE", away: "TOR" },
      finalScore: { home: 115, away: 105 },
      swings: [
        {
          quarter: "1st",
          timestamp: "6:14",
          description: "Barnes and Siakam spark early 8-0 Toronto run",
          runScore: "8-0 TOR",
          momentum: "away",
          keyPlayer: "Scottie Barnes",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "3:27",
          description: "Mitchell heats up with 10 straight points to flip the lead",
          runScore: "10-2 CLE",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "8:45",
          description: "Mobley dominates the paint with 8 points in a 12-4 Cavs run",
          runScore: "12-4 CLE",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "5:33",
          description: "Cleveland's depth takes over with 14-6 run to seal victory",
          runScore: "14-6 CLE",
          momentum: "home",
          keyPlayer: "Caris LeVert",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Evan Mobley showcased his two-way dominance in a statement performance that highlighted Cleveland's championship aspirations. The young big man was unstoppable in the paint while anchoring a suffocating defense that neutralized Toronto's offensive weapons throughout the contest. Mobley's combination of efficient scoring and rim protection proved too much for the Raptors to handle, as Cleveland's superior depth and execution shined in the second half. This victory strengthened the Cavaliers' hold on home-court advantage while demonstrating Mobley's continued evolution into one of the league's premier two-way players."
    }
  ]
};