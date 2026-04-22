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
    description: "Ice-cold step-back three over Brunson with 8.4 seconds left to silence MSG and steal victory" 
  },
  games: [
    {
      gameId: "ATL-NYK-20260420",
      teams: { home: "NYK", away: "ATL" },
      finalScore: { home: 106, away: 107 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:42",
          description: "Brunson and Randle combine for 12 straight points to break open tight game",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "4:18",
          description: "Hawks respond with Trae Young three-point barrage, hitting 4 triples in 5 minutes",
          runScore: "16-7",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "8:45",
          description: "Knicks push lead back to double digits with suffocating defense and Randle post-ups",
          runScore: "11-4",
          momentum: "home",
          keyPlayer: "Julius Randle",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "3:22",
          description: "Atlanta's closing surge erases 10-point deficit with relentless attacking",
          runScore: "13-3",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Difficult layup through contact to maintain 4-point lead",
          timeRemaining: "2:18",
          winProbabilityShift: 12
        },
        {
          player: "Trae Young",
          team: "ATL",
          description: "Deep three-pointer from 28 feet to cut deficit to one",
          timeRemaining: "1:42",
          winProbabilityShift: -18
        },
        {
          player: "Julius Randle",
          team: "NYK",
          description: "Clutch mid-range jumper to answer Young's three",
          timeRemaining: "1:05",
          winProbabilityShift: 15
        },
        {
          player: "Trae Young",
          team: "ATL",
          description: "Step-back three-pointer over Brunson for the lead with 8.4 seconds left",
          timeRemaining: "0:08",
          winProbabilityShift: -35
        }
      ],
      narrative: "Madison Square Garden witnessed pure basketball theater as Trae Young delivered one of the season's most clutch performances. After trailing by double digits in the fourth quarter, Young orchestrated a masterful comeback that culminated in the ultimate dagger—a step-back three over Jalen Brunson that left 20,000 fans stunned into silence. The Hawks' road warrior mentality was on full display as they refused to fold against a desperate Knicks team fighting for playoff positioning. Young's 28 points and 6 three-pointers served as a reminder that some players are simply built different in the brightest lights."
    },
    {
      gameId: "MIN-DEN-20260420",
      teams: { home: "DEN", away: "MIN" },
      finalScore: { home: 114, away: 119 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:23",
          description: "Edwards explodes for 12 first-quarter points to give Wolves early confidence",
          runScore: "8-0",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "9:15",
          description: "Jokić takes over with brilliant passing display, assisting on 5 straight baskets",
          runScore: "15-6",
          momentum: "home",
          keyPlayer: "Nikola Jokić",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "5:44",
          description: "Nuggets push 13-game winning streak momentum with suffocating defense",
          runScore: "12-4",
          momentum: "home",
          keyPlayer: "Aaron Gordon",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "6:28",
          description: "Edwards and McDaniels combine for crushing run that breaks Denver's spirit",
          runScore: "18-8",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Contested three-pointer over Murray to extend lead",
          timeRemaining: "4:12",
          winProbabilityShift: -14
        },
        {
          player: "Nikola Jokić",
          team: "DEN",
          description: "Beautiful hook shot to keep Nuggets within striking distance",
          timeRemaining: "2:55",
          winProbabilityShift: 8
        },
        {
          player: "Jaden McDaniels",
          team: "MIN",
          description: "Back-to-back defensive stops and transition threes",
          timeRemaining: "1:48",
          winProbabilityShift: -16
        }
      ],
      narrative: "The unstoppable force met the immovable object, and Anthony Edwards proved he's ready for his superstar moment. Minnesota's young core outplayed the defending champions in their own building, ending Denver's season-high 13-game winning streak with authority. Edwards was simply spectacular, shooting the lights out while matching Jokić's every brilliant play with one of his own. The Nuggets looked every bit of a team that had been grinding through a marathon winning streak, running out of gas when they needed their legs most against Minnesota's youthful energy."
    },
    {
      gameId: "TOR-CLE-20260420",
      teams: { home: "CLE", away: "TOR" },
      finalScore: { home: 115, away: 105 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:12",
          description: "Barnes and Poeltl dominate early with size advantage in the paint",
          runScore: "10-2",
          momentum: "away",
          keyPlayer: "Scottie Barnes",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "5:33",
          description: "Mobley takes over with defensive presence, blocking 3 shots in 4 minutes",
          runScore: "14-6",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "7:45",
          description: "Mitchell and Garland backcourt catches fire from three-point range",
          runScore: "16-8",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "9:22",
          description: "Cavaliers depth advantage becomes overwhelming as starters rest",
          runScore: "12-4",
          momentum: "home",
          keyPlayer: "Caris LeVert",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Evan Mobley reminded everyone why he's one of the league's most impactful two-way players, completely controlling this Eastern Conference battle from start to finish. Cleveland's superior depth and athleticism gradually wore down Toronto as the game progressed, with Mobley serving as the anchor that everything revolved around. The Cavaliers' balanced offensive attack complemented their suffocating defense perfectly, creating the kind of wire-to-wire dominance that championship contenders display. Toronto fought valiantly but simply couldn't match Cleveland's combination of star power and role player execution when it mattered most."
    }
  ]
};