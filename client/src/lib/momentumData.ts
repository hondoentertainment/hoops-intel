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
    player: "Anthony Edwards", 
    team: "MIN", 
    clutchRating: 92, 
    description: "Edwards delivered 12 fourth-quarter points including back-to-back threes to seal Minnesota's series-clinching victory over the defending champions" 
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
          description: "Brunson orchestrates 15-2 Knicks run with four assists and a step-back three",
          runScore: "15-2",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "8:15",
          description: "Hawks briefly rally with Young finding his rhythm, cutting deficit to single digits",
          runScore: "11-3",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "4:30",
          description: "Knicks explode with suffocating defense leading to 18-0 run that breaks the game open",
          runScore: "18-0",
          momentum: "away",
          keyPlayer: "OG Anunoby",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "9:45",
          description: "Historic blowout reaches 53-point peak as Knicks bench continues the onslaught",
          runScore: "22-4",
          momentum: "away",
          keyPlayer: "Miles McBride",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The Knicks delivered the most ruthless playoff beatdown in franchise history, turning State Farm Arena into their personal demolition site. What started as Brunson's masterclass became a complete team annihilation that left Hawks fans streaming toward the exits by the third quarter. This wasn't just a victory—it was a statement to the entire Eastern Conference that New York has arrived as a legitimate championship threat. The 51-point margin represents more than a box score; it's a psychological assassination that may haunt Atlanta for years."
    },
    {
      gameId: "BOS-PHI-20260430",
      teams: { home: "PHI", away: "BOS" },
      finalScore: { home: 106, away: 93 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:22",
          description: "Embiid dominates early with 11 first-quarter points, establishing paint presence immediately",
          runScore: "13-4",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "5:18",
          description: "Tatum heats up with three consecutive buckets to pull Celtics within striking distance",
          runScore: "9-2",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "2:45",
          description: "Sixers defensive clamps trigger 14-2 run with Embiid protecting the rim and Harris hitting threes",
          runScore: "14-2",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "6:30",
          description: "Philadelphia closes with authority as Wells Fargo Center reaches fever pitch",
          runScore: "12-5",
          momentum: "home",
          keyPlayer: "Tyrese Maxey",
          impact: "significant"
        }
      ],
      clutchPlays: [
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "Embiid scores on three straight possessions including a thunderous dunk to push lead to 12",
          timeRemaining: "4:15",
          winProbabilityShift: 18.5
        }
      ],
      narrative: "Joel Embiid summoned playoff greatness when elimination loomed, turning Wells Fargo Center into a cathedral of championship dreams. The big man's vintage performance reminded everyone why he's a former MVP, dominating both ends with the kind of two-way brilliance that defines superstar moments. Philadelphia's suffocating defense held Boston's potent offense in check, proving the Sixers possess the heart of champions when their backs are against the wall. This victory doesn't just force a Game 5—it plants seeds of doubt in Boston's mind about their title aspirations."
    },
    {
      gameId: "DEN-MIN-20260430",
      teams: { home: "MIN", away: "DEN" },
      finalScore: { home: 110, away: 98 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:45",
          description: "Edwards announces his arrival with 12 first-quarter points including two highlight dunks",
          runScore: "16-6",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "3:20",
          description: "Jokic orchestrates Denver comeback with perfect passing, finding open shooters for 13-3 run",
          runScore: "13-3",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "6:10",
          description: "Timberwolves defense suffocates Nuggets with McDaniels leading charge in 11-0 run",
          runScore: "11-0",
          momentum: "home",
          keyPlayer: "Jaden McDaniels",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "7:25",
          description: "Edwards closes show with back-to-back threes as Target Center explodes in playoff euphoria",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Edwards drills contested three-pointer over Aaron Gordon to extend lead to 9",
          timeRemaining: "3:42",
          winProbabilityShift: 15.2
        },
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Edwards follows with another deep three off the dribble, sending crowd into frenzy",
          timeRemaining: "2:58",
          winProbabilityShift: 22.8
        }
      ],
      narrative: "Anthony Edwards delivered a coming-of-age performance that may have just toppled a dynasty, outdueling the defending champions with the kind of clutch brilliance that defines playoff legends. The young superstar's fourth-quarter explosion silenced any doubts about his readiness for championship moments, while Minnesota's suffocating defense frustrated Denver's championship-caliber offense into submission. Target Center became a madhouse as the Timberwolves pushed the mighty Nuggets to the brink of elimination, proving that youth and hunger can overcome experience and pedigree. This victory represents more than a 3-1 series lead—it's the potential changing of the guard in the Western Conference."
    }
  ]
};