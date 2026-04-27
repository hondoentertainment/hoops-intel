// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 27, 2026
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
  date: "April 27, 2026",
  gameOfTheNight: "CLE-TOR-20260426",
  topClutchPerformer: { 
    player: "Pascal Siakam", 
    team: "TOR", 
    clutchRating: 94, 
    description: "Delivered 8 points in the final 4:30 to complete a stunning playoff upset" 
  },
  games: [
    {
      gameId: "CLE-TOR-20260426",
      teams: { home: "TOR", away: "CLE" },
      finalScore: { home: 93, away: 89 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:42",
          description: "Donovan Mitchell ignites early with three straight three-pointers",
          runScore: "11-2",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "4:15",
          description: "Siakam responds with thunderous dunk and steal, Scotiabank Arena erupts",
          runScore: "9-0",
          momentum: "home",
          keyPlayer: "Pascal Siakam",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "1:28",
          description: "Cavaliers push lead to 12 with methodical offense and defensive pressure",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Jarrett Allen",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "4:30",
          description: "Siakam takes over with vintage playoff performance, leads decisive 12-2 run",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "Pascal Siakam",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Pascal Siakam",
          team: "TOR",
          description: "Step-back jumper over Evan Mobley ties the game",
          timeRemaining: "3:42",
          winProbabilityShift: 28
        },
        {
          player: "Pascal Siakam",
          team: "TOR",
          description: "Putback dunk after offensive rebound gives Toronto first lead since first quarter",
          timeRemaining: "1:55",
          winProbabilityShift: 35
        },
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Contested three-pointer cuts deficit to one possession",
          timeRemaining: "0:47",
          winProbabilityShift: -22
        }
      ],
      narrative: "Pascal Siakam turned back the clock in the most dramatic fashion, delivering a vintage playoff performance that stunned the heavily favored Cavaliers in Toronto's first postseason game in three years. The veteran forward completely took over the final 4:30, scoring 8 crucial points while showcasing the championship pedigree that once made him a title cornerstone. Cleveland appeared to have control for most of the night, but Siakam's fourth-quarter explosion transformed Scotiabank Arena into a cauldron and immediately made this series far more dangerous than anyone expected. This wasn't just a Game 1 upset — it was a statement that the Raptors' playoff DNA remains intact."
    },
    {
      gameId: "SAS-POR-20260426",
      teams: { home: "POR", away: "SAS" },
      finalScore: { home: 93, away: 114 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:30",
          description: "Lillard opens with vintage long-range barrage, Moda Center electric",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "Damian Lillard",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "6:15",
          description: "Wembanyama showcases two-way dominance with block-to-dunk sequence",
          runScore: "16-6",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "2:45",
          description: "Spurs pull away with suffocating defense and transition offense",
          runScore: "18-4",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "9:20",
          description: "Wembanyama puts series away with dominant paint presence",
          runScore: "13-2",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Victor Wembanyama announced his playoff arrival in the most emphatic way possible, completely overwhelming Portland with a two-way masterpiece that showcased why he's already a franchise cornerstone at just 22 years old. The French phenom controlled every aspect of the game from the second quarter onward, turning what began as a competitive series-deciding battle into a systematic dismantling of veteran playoff competition. Damian Lillard's early fireworks briefly threatened to extend the series, but Wembanyama's length and athleticism eventually proved too much for Portland's aging core. San Antonio's advancement to the conference semifinals feels like the official changing of the guard in the Western Conference."
    },
    {
      gameId: "BOS-PHI-20260426",
      teams: { home: "PHI", away: "BOS" },
      finalScore: { home: 96, away: 128 },
      swings: [
        {
          quarter: "1st",
          timestamp: "5:22",
          description: "Embiid dominates early paint battle, Sixers take commanding lead",
          runScore: "15-4",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "3:10",
          description: "Tatum erupts with three consecutive threes, completely shifts series momentum",
          runScore: "18-5",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "6:45",
          description: "Celtics unleash devastating three-point barrage, crowd stunned into silence",
          runScore: "22-6",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "8:30",
          description: "Boston coasts to blowout victory with suffocating defensive pressure",
          runScore: "16-3",
          momentum: "away",
          keyPlayer: "Jaylen Brown",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Jayson Tatum delivered a championship-level statement performance that completely obliterated Philadelphia's home court advantage and raised serious questions about the Sixers' title readiness. The Celtics superstar was absolutely unconscious from three-point range, turning a competitive playoff battle into a 32-point massacre that left Wells Fargo Center in stunned silence. Boston's systematic dismantling of Joel Embiid and the Sixers showcased the championship experience and mental toughness that makes them legitimate title favorites. This wasn't just a road victory — it was a psychological beatdown that may have broken Philadelphia's championship spirit entirely."
    },
    {
      gameId: "LAL-HOU-20260426",
      teams: { home: "HOU", away: "LAL" },
      finalScore: { home: 115, away: 96 },
      swings: [
        {
          quarter: "1st",
          timestamp: "4:45",
          description: "LeBron rolls back the years with vintage drive-and-finish sequence",
          runScore: "8-0",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "7:20",
          description: "Şengün showcases elite playmaking with three straight assists",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "Alperen Şengün",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "1:55",
          description: "Rockets seize control with devastating inside-outside combination",
          runScore: "16-4",
          momentum: "home",
          keyPlayer: "Alperen Şengün",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "9:45",
          description: "Houston pulls away as Lakers appear overwhelmed by youth and energy",
          runScore: "13-5",
          momentum: "home",
          keyPlayer: "Jalen Green",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Alperen Şengün completely outclassed Anthony Davis in a dominant paint performance that announced Houston as a legitimate Western Conference threat while exposing the Lakers' aging championship window. The Turkish center was absolutely brilliant on both ends, showcasing the elite playmaking and post moves that make him one of the league's most unique talents. LeBron James showed flashes of vintage brilliance early, but the Rockets' youth and athleticism eventually overwhelmed Los Angeles in concerning fashion. This wasn't just a Game 1 loss — it was a sobering reminder that the Lakers' championship aspirations may already be slipping away as Father Time remains undefeated."
    }
  ]
};