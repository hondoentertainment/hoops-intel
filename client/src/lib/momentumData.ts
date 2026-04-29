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
    clutchRating: 95, 
    description: "Delivered the elimination game performance of his career, scoring 15 fourth-quarter points to silence TD Garden and extend the series" 
  },
  games: [
    {
      gameId: "PHI-BOS-20260428",
      teams: { home: "BOS", away: "PHI" },
      finalScore: { home: 97, away: 113 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:32",
          description: "Boston opened with early 9-2 run behind Tatum's aggressive attacking",
          runScore: "9-2 BOS",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "5:47",
          description: "Embiid dominated the paint with 12-4 personal run, TD Garden stunned silent",
          runScore: "12-4 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "3:15",
          description: "Philadelphia exploded for 18-6 run capped by Embiid's thunderous dunk",
          runScore: "18-6 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "7:22",
          description: "Embiid's elimination-game magic continued with 10 straight Sixers points",
          runScore: "10-0 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Joel Embiid delivered the performance of his postseason career, completely dismantling Boston's championship aspirations with a tour de force display at TD Garden. The usually raucous home crowd fell eerily silent as Embiid systematically destroyed every defensive scheme the Celtics threw at him, turning what seemed like a series-ending game into Philadelphia's most dominant road playoff victory in over a decade. This wasn't just avoiding elimination—this was a generational talent announcing he refuses to go home quietly."
    },
    {
      gameId: "ATL-NYK-20260428",
      teams: { home: "NYK", away: "ATL" },
      finalScore: { home: 126, away: 97 },
      swings: [
        {
          quarter: "1st",
          timestamp: "6:18",
          description: "MSG erupted as Knicks opened with 14-4 burst behind Brunson's precision",
          runScore: "14-4 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "9:43",
          description: "Atlanta briefly fought back with 11-3 run sparked by Young's three-pointers",
          runScore: "11-3 ATL",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "2:05",
          description: "Knicks closed half with devastating 19-4 run, MSG reached playoff fever pitch",
          runScore: "19-4 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "4:31",
          description: "New York's balanced attack delivered another 16-5 burst to break Hawks' spirit",
          runScore: "16-5 NYK",
          momentum: "home",
          keyPlayer: "OG Anunoby",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Madison Square Garden transformed into a basketball cathedral as the Knicks delivered their most complete playoff performance in years, systematically dismantling Atlanta with suffocating defense and balanced scoring. Jalen Brunson orchestrated the symphony with veteran poise, but this victory belonged to the entire roster—from role players stepping up to the crowd providing championship-level energy. With a commanding 2-0 series lead, New York has announced they're not just happy to be here—they're legitimate Eastern Conference contenders with title aspirations."
    },
    {
      gameId: "POR-SAS-20260428",
      teams: { home: "SAS", away: "POR" },
      finalScore: { home: 114, away: 95 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:55",
          description: "Wembanyama's early dominance sparked 12-2 Spurs run, Frost Bank Center electric",
          runScore: "12-2 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "6:23",
          description: "Lillard answered with vintage scoring burst, hitting three straight threes",
          runScore: "11-3 POR",
          momentum: "away",
          keyPlayer: "Damian Lillard",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "8:14",
          description: "Wemby's two-way brilliance fueled game-breaking 20-6 San Antonio explosion",
          runScore: "20-6 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "9:17",
          description: "Young Spurs closed with authority on 14-4 run, Wemby capping with thunderous block",
          runScore: "14-4 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Victor Wembanyama officially announced his arrival as a championship-caliber superstar, delivering a masterclass performance that left Portland's veteran roster looking helpless and overmatched. The generational talent showcased unprecedented two-way dominance, swatting shots on defense before gliding downcourt to score with the grace of a guard in a 7'4\" frame. This wasn't just a Game 1 victory—this was a coming-out party for a player ready to carry San Antonio to their first title since the Duncan era, with Frost Bank Center witnessing the birth of basketball's next dynasty."
    }
  ]
};