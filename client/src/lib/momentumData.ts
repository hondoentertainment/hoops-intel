// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 4, 2026
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
  date: "May 4, 2026",
  gameOfTheNight: "TOR-CLE-20260503",
  topClutchPerformer: { 
    player: "Donovan Mitchell", 
    team: "CLE", 
    clutchRating: 94, 
    description: "Delivered the decisive blow in Game 7 with 12 fourth-quarter points including the dagger three-pointer that sealed Cleveland's semifinal berth"
  },
  games: [
    {
      gameId: "ORL-DET-20260503",
      teams: { home: "DET", away: "ORL" },
      finalScore: { home: 116, away: 94 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:42",
          description: "Orlando opens Game 7 with confidence, jumping to early 12-4 lead behind Paolo Banchero's quick 8 points",
          runScore: "8-0",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "notable"
        },
        {
          quarter: "1st",
          timestamp: "2:15",
          description: "Cade Cunningham answers emphatically with 10 points in final two minutes, capping 18-4 run to close first quarter",
          runScore: "18-4",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "6:30",
          description: "Isaiah Stewart dominates the paint with three consecutive and-ones, extending Detroit's lead to 15 points",
          runScore: "11-2",
          momentum: "home",
          keyPlayer: "Isaiah Stewart",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "4:45",
          description: "Detroit's precision passing creates wide-open looks as Cunningham orchestrates 14-2 run that breaks Orlando's spirit",
          runScore: "14-2",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Detroit transformed Game 7 anxiety into pure dominance behind Cade Cunningham's masterclass performance. After Orlando's early punch, the Pistons responded with suffocating defense and surgical offense that methodically dismantled the Magic's playoff dreams. Little Caesars Arena erupted as Detroit's 16-year semifinal drought finally ended in emphatic fashion. The game was essentially decided by halftime, turning what should have been a nail-biter into a coronation celebration."
    },
    {
      gameId: "TOR-CLE-20260503",
      teams: { home: "CLE", away: "TOR" },
      finalScore: { home: 114, away: 102 },
      swings: [
        {
          quarter: "2nd",
          timestamp: "8:15",
          description: "Scottie Barnes sparks Toronto with aggressive drives to the rim, powering 12-3 run to tie the game",
          runScore: "12-3",
          momentum: "away",
          keyPlayer: "Scottie Barnes",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "5:20",
          description: "Donovan Mitchell catches fire with three consecutive threes, giving Cleveland their largest lead of the night",
          runScore: "11-0",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "7:30",
          description: "Toronto rallies behind Barnes and cuts deficit to just 4 points, forcing Cleveland timeout in tense Game 7 moment",
          runScore: "9-2",
          momentum: "away",
          keyPlayer: "Scottie Barnes",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "6:45",
          description: "Mitchell and Mobley combine for unstoppable 16-4 surge that finally breaks Toronto's resistance and seals the victory",
          runScore: "16-4",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Step-back three-pointer over Barnes to extend lead to 7 points during decisive fourth-quarter run",
          timeRemaining: "6:12",
          winProbabilityShift: 18
        },
        {
          player: "Evan Mobley",
          team: "CLE", 
          description: "Rejection of Barnes' drive followed by immediate outlet pass to Mitchell for fast-break dunk",
          timeRemaining: "5:35",
          winProbabilityShift: 15
        },
        {
          player: "Scottie Barnes",
          team: "TOR",
          description: "Tough and-one finish through contact to keep Toronto within striking distance",
          timeRemaining: "4:28",
          winProbabilityShift: -8
        }
      ],
      narrative: "Game 7 lived up to its billing as Mitchell and Barnes traded haymakers in a heavyweight battle at Rocket Arena. The game swayed back and forth like a pendulum until Cleveland's championship mettle finally showed through in the decisive fourth quarter. Mitchell's clutch gene activated when it mattered most, while Mobley's defensive presence became the difference maker in crunch time. Toronto fought valiantly but ultimately fell just short of their first conference semifinal since 2016, as Cleveland advances with newfound confidence."
    }
  ]
};