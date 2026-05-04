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
  gameOfTheNight: "CLE-TOR-20260503",
  topClutchPerformer: { 
    player: "Donovan Mitchell", 
    team: "CLE", 
    clutchRating: 94, 
    description: "Torched Toronto with 11 fourth-quarter points during Cleveland's decisive 16-4 run, including two step-back threes that silenced the road crowd and sealed the Game 7 victory" 
  },
  games: [
    {
      gameId: "ORL-DET-20260503",
      teams: { home: "DET", away: "ORL" },
      finalScore: { home: 116, away: 94 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:42",
          description: "Paolo Banchero's early aggression gives Orlando 18-12 lead with back-to-back drives",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "8:15",
          description: "Cade Cunningham orchestrates 14-3 run with three assists and a deep three to flip the script",
          runScore: "14-3",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "4:28",
          description: "Isaiah Stewart dominates the paint with 8 straight points, extending Detroit's lead to 20",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "Isaiah Stewart",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "9:41",
          description: "Detroit's reserves extend the blowout with crisp ball movement and transition buckets",
          runScore: "11-4",
          momentum: "home",
          keyPlayer: "Detroit Bench",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Game 7 turned into a coronation for the Pistons as they steamrolled Orlando in their own building. What started as a tense elimination game became a vintage playoff beatdown, with Cade Cunningham conducting a symphony of precision passing while Isaiah Stewart bulldozed through the Magic's interior. Detroit's 52% shooting and complete fourth-quarter domination announced their arrival as legitimate Eastern Conference contenders. Orlando's magical season ended not with drama, but with the harsh reality of playoff inexperience against a battle-tested Pistons squad ready for their closeup."
    },
    {
      gameId: "TOR-CLE-20260503",
      teams: { home: "CLE", away: "TOR" },
      finalScore: { home: 114, away: 102 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:23",
          description: "Scottie Barnes ignites early with two steals and fast-break dunks for 12-5 Toronto advantage",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "Scottie Barnes",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "3:45",
          description: "Mitchell heats up with three consecutive buckets, but Cavaliers still trail at halftime",
          runScore: "9-4",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "2:17",
          description: "Evan Mobley's rim protection sparks 10-2 run to tie the game entering the fourth",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "6:42",
          description: "Mitchell explodes for 11 points during Cleveland's decisive 16-4 surge to break Toronto's heart",
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
          description: "Step-back three over Barnes gives Cleveland 104-98 lead",
          timeRemaining: "4:23",
          winProbabilityShift: 24
        },
        {
          player: "Evan Mobley",
          team: "CLE",
          description: "Crushing block on Jakob Poeltl followed by assist to Mitchell",
          timeRemaining: "3:15",
          winProbabilityShift: 18
        },
        {
          player: "Scottie Barnes",
          team: "TOR",
          description: "Desperate three-pointer cuts deficit to 108-101 with hope remaining",
          timeRemaining: "2:44",
          winProbabilityShift: -12
        },
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Dagger three from 28 feet seals Cleveland's semifinal berth",
          timeRemaining: "1:52",
          winProbabilityShift: 31
        }
      ],
      narrative: "Game 7 at its finest, where legends are born and seasons die. Donovan Mitchell channeled his inner playoff assassin when it mattered most, turning a nail-biting fourth quarter into his personal highlight reel with ruthless efficiency. Toronto fought valiantly behind Scottie Barnes' all-around brilliance, but Cleveland's championship-tested core proved superior in the crucible moment. The decisive 16-4 run felt inevitable once Mitchell entered his zone, each contested jumper finding twine as Rocket Arena transformed from hostile to stunned. This wasn't just a Game 7 victory—it was Mitchell's emphatic declaration that Cleveland's championship window remains wide open."
    }
  ]
};