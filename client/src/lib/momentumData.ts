// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 11, 2026
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
  date: "April 11, 2026",
  gameOfTheNight: "MIN-HOU-20260411",
  topClutchPerformer: { 
    player: "Anthony Edwards", 
    team: "MIN", 
    clutchRating: 97, 
    description: "12 points in final 6 minutes including go-ahead three with 47 seconds left to steal victory from Houston" 
  },
  games: [
    {
      gameId: "DET-CHA-20260411",
      teams: { home: "CHA", away: "DET" },
      finalScore: { home: 100, away: 118 },
      swings: [
        {
          quarter: "1st",
          timestamp: "6:42",
          description: "Cade Cunningham opens with three straight assists as Detroit jumps to early 15-6 lead",
          runScore: "9-0",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "8:15",
          description: "LaMelo Ball catches fire with back-to-back threes, bringing Charlotte within 2",
          runScore: "11-3",
          momentum: "home",
          keyPlayer: "LaMelo Ball",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "4:28",
          description: "Isaiah Stewart dominates inside with 10 straight points to push lead to 18",
          runScore: "12-2",
          momentum: "away",
          keyPlayer: "Isaiah Stewart",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Detroit's championship coronation was never in doubt as Cade Cunningham orchestrated a masterpiece befitting the East's top seed. The Pistons controlled every facet, turning what could have been a celebration into a statement about their title aspirations. Charlotte played the role of gracious hosts to a champion's party they weren't invited to."
    },
    {
      gameId: "MIA-WSH-20260411",
      teams: { home: "WSH", away: "MIA" },
      finalScore: { home: 117, away: 140 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:33",
          description: "Tyler Herro explodes for 4 threes in opening quarter, Miami races to 32-19 lead",
          runScore: "13-3",
          momentum: "away",
          keyPlayer: "Tyler Herro",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "9:12",
          description: "Jordan Poole answers with his own barrage, hitting 3 straight triples to cut deficit to 8",
          runScore: "9-2",
          momentum: "home",
          keyPlayer: "Jordan Poole",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "5:47",
          description: "Jimmy Butler takes over with 12 points in 6 minutes, extending lead to 25",
          runScore: "16-4",
          momentum: "away",
          keyPlayer: "Jimmy Butler",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Miami turned Washington into their personal shooting gallery, raining threes like a playoff team flexing before the postseason. The Heat's offensive explosion was a reminder that when their shots fall, they can torch anyone. Washington's defense looked more like a suggestion than a strategy against Miami's red-hot shooting."
    },
    {
      gameId: "CLE-ATL-20260411",
      teams: { home: "ATL", away: "CLE" },
      finalScore: { home: 124, away: 102 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:45",
          description: "Trae Young and Dejounte Murray combine for 18 first-quarter points, Hawks surge ahead 31-22",
          runScore: "13-4",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "6:18",
          description: "Donovan Mitchell briefly rallies Cleveland with 8 quick points, cutting gap to 9",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "3:25",
          description: "Hawks break game open with 16-2 run anchored by Capela's interior dominance",
          runScore: "16-2",
          momentum: "home",
          keyPlayer: "Clint Capela",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Atlanta delivered the upset special that playoff races demand, catching Cleveland completely off-guard at home. Trae Young conducted a symphony of destruction, finding every open teammate while creating chaos Cleveland couldn't contain. The Hawks reminded everyone that dangerous teams lurk everywhere in the playoff hunt, ready to pounce on complacent contenders."
    },
    {
      gameId: "NO-BOS-20260411",
      teams: { home: "BOS", away: "NO" },
      finalScore: { home: 144, away: 118 },
      swings: [
        {
          quarter: "1st",
          timestamp: "9:22",
          description: "Jayson Tatum comes out aggressive with 12 early points, Celtics jump ahead 28-18",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "4:15",
          description: "Zion Williamson powers inside for 10 straight Pelicans points, cutting deficit to 6",
          runScore: "10-2",
          momentum: "away",
          keyPlayer: "Zion Williamson",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "7:08",
          description: "Boston's three-point barrage ignites TD Garden as they connect on 8 triples in the quarter",
          runScore: "24-8",
          momentum: "home",
          keyPlayer: "Jaylen Brown",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Boston answered yesterday's stumble with the kind of offensive eruption that championship teams deliver when questioned. The Celtics turned TD Garden into a three-point carnival, burying New Orleans under an avalanche of makes. This was Boston reminding everyone that they're built for a title run, not regular season drama."
    },
    {
      gameId: "DAL-SA-20260411",
      teams: { home: "SA", away: "DAL" },
      finalScore: { home: 139, away: 120 },
      swings: [
        {
          quarter: "1st",
          timestamp: "10:18",
          description: "Luka Doncic opens hot with 11 first-quarter points, keeping pace with Spurs early",
          runScore: "7-2",
          momentum: "away",
          keyPlayer: "Luka Doncic",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "5:33",
          description: "Wembanyama showcases both ends with 3 blocks and 10 points in 6-minute span",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "2:44",
          description: "Spurs depth overwhelms Dallas as bench outscores Mavs reserves 18-4 in the quarter",
          runScore: "18-4",
          momentum: "home",
          keyPlayer: "Jeremy Sochan",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Victor Wembanyama put on a two-way clinic that had San Antonio fans dreaming of June. The rookie sensation dominated every possession he touched, erasing shots on defense while creating them effortlessly on offense. Dallas learned the hard way that Wembanyama isn't just the future – he's the present, and he's terrifying."
    },
    {
      gameId: "MIN-HOU-20260411",
      teams: { home: "HOU", away: "MIN" },
      finalScore: { home: 132, away: 136 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:47",
          description: "Alperen Sengun's early playmaking gives Houston 18-10 advantage with 4 assists",
          runScore: "8-2",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "6:25",
          description: "Anthony Edwards heats up with 14 second-quarter points, Wolves take 65-58 halftime lead",
          runScore: "12-4",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "7:12",
          description: "Houston storms back with 15-4 run to take 128-118 lead with 6 minutes left",
          runScore: "15-4",
          momentum: "home",
          keyPlayer: "Jabari Smith Jr",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "0:47",
          description: "Edwards delivers clutch three-pointer to give Minnesota 134-132 lead",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Clutch three-pointer over defender to take 134-132 lead",
          timeRemaining: "0:47",
          winProbabilityShift: 28
        },
        {
          player: "Jabari Smith Jr",
          team: "HOU",
          description: "Back-to-back threes in final 3 minutes to keep Houston alive",
          timeRemaining: "2:43",
          winProbabilityShift: -15
        },
        {
          player: "Karl-Anthony Towns",
          team: "MIN",
          description: "Defensive stop and putback to seal victory",
          timeRemaining: "0:12",
          winProbabilityShift: 18
        }
      ],
      narrative: "Anthony Edwards authored a playoff preview thriller that had both fanbases on their feet until the final buzzer. The young star's clutch gene was on full display as he refused to let Minnesota fold under Houston's fourth-quarter surge. This was the kind of gut-check victory that defines playoff positioning, with Edwards proving he's ready for the brightest lights basketball has to offer."
    }
  ]
};