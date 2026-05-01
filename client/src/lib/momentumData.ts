// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 1, 2026
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
  date: "May 1, 2026",
  gameOfTheNight: "NYK-ATL-20260430",
  topClutchPerformer: { 
    player: "Joel Embiid", 
    team: "PHI", 
    clutchRating: 94, 
    description: "Delivered when elimination loomed, dominating both ends with championship-level intensity" 
  },
  games: [
    {
      gameId: "NYK-ATL-20260430",
      teams: { home: "ATL", away: "NYK" },
      finalScore: { home: 89, away: 140 },
      swings: [
        {
          quarter: "1st",
          timestamp: "6:42",
          description: "Brunson catches fire with 11 straight points, Knicks open 18-4 lead",
          runScore: "14-2",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "8:15",
          description: "Hawks fight back with Young leading 10-0 spurt to cut deficit to single digits",
          runScore: "10-0",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "3:28",
          description: "Knicks explode with 19-4 run to close half, crowd goes silent at State Farm",
          runScore: "19-4",
          momentum: "away",
          keyPlayer: "Josh Hart",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "4:11",
          description: "New York extends lead to 40+ with suffocating defense and transition dunks",
          runScore: "16-3",
          momentum: "away",
          keyPlayer: "OG Anunoby",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The Knicks delivered a playoff massacre for the ages, turning State Farm Arena into a morgue with the most dominant postseason road performance in franchise history. Jalen Brunson orchestrated a symphony of destruction, dissecting Atlanta's defense with surgical precision while his teammates buried three after three. This wasn't just a victory—it was a statement that New York has championship DNA flowing through their veins. The 51-point annihilation left Hawks fans streaming for the exits and the basketball world wondering if we're witnessing the birth of a juggernaut."
    },
    {
      gameId: "BOS-PHI-20260430",
      teams: { home: "PHI", away: "BOS" },
      finalScore: { home: 106, away: 93 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:23",
          description: "Embiid dominates early with 8 points and 2 blocks, Sixers jump to 16-8 lead",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "5:14",
          description: "Tatum heats up with three consecutive threes, Celtics take 45-42 advantage",
          runScore: "13-4",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "2:47",
          description: "Philadelphia responds with thunderous 18-5 run, Wells Fargo Center erupts",
          runScore: "18-5",
          momentum: "home",
          keyPlayer: "Tyrese Maxey",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "7:32",
          description: "Embiid takes over with back-to-back blocks and scoring, seals elimination game victory",
          runScore: "11-2",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "Massive block on Tatum followed by thunderous dunk on other end",
          timeRemaining: "4:18",
          winProbabilityShift: 18.4
        },
        {
          player: "Tyrese Maxey",
          team: "PHI",
          description: "Clutch step-back three over Smart to push lead to 12",
          timeRemaining: "2:51",
          winProbabilityShift: 22.1
        }
      ],
      narrative: "Joel Embiid played like his legacy depended on it, and perhaps it did. With elimination staring the Sixers in the face, the big man delivered a masterclass in two-way dominance that reminded everyone why he's a former MVP. Wells Fargo Center became a cauldron of desperate energy as Philadelphia refused to let their season die. The Celtics, who looked poised to close out the series, instead got punched in the mouth by a team that remembered how to fight when it mattered most."
    },
    {
      gameId: "DEN-MIN-20260430",
      teams: { home: "MIN", away: "DEN" },
      finalScore: { home: 110, away: 98 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:41",
          description: "Edwards opens with authority, scoring 9 early points as Wolves take 19-11 lead",
          runScore: "11-2",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "6:33",
          description: "Jokic finds his rhythm with 8 straight points, Nuggets tie game at 38",
          runScore: "12-4",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "4:19",
          description: "Minnesota's defense clamps down with 15-4 run, Edwards dunks send Target Center into frenzy",
          runScore: "15-4",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "6:28",
          description: "Timberwolves pull away for good with suffocating defense and transition buckets",
          runScore: "13-3",
          momentum: "home",
          keyPlayer: "Jaden McDaniels",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Explosive drive and dunk through contact with and-one to ice the game",
          timeRemaining: "3:42",
          winProbabilityShift: 15.7
        }
      ],
      narrative: "Anthony Edwards announced himself as a playoff star by putting the defending champions on the brink of elimination in the most shocking upset of the postseason. Target Center witnessed something special as Ant-Man soared through Denver's defense with the fearlessness of youth and the skill of a superstar. The Nuggets, who looked invincible just months ago, now face the unthinkable reality of a first-round exit. Minnesota's suffocating defense and Edwards' explosive scoring have turned this series into a changing of the guard moment that could reshape the Western Conference hierarchy."
    }
  ]
};