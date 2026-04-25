// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 25, 2026
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
  date: "April 25, 2026",
  gameOfTheNight: "LAL-HOU-20260424",
  topClutchPerformer: { 
    player: "Anthony Davis", 
    team: "LAL", 
    clutchRating: 96, 
    description: "Davis completely took over overtime with 8 points and multiple defensive stops, capping his 35-point masterpiece with the game-sealing block with 18 seconds left. His 4-minute overtime performance was pure championship DNA." 
  },
  games: [
    {
      gameId: "BOS-PHI-20260424",
      teams: { home: "PHI", away: "BOS" },
      finalScore: { home: 100, away: 108 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:42",
          description: "Philadelphia opens with aggressive home crowd energy as Embiid dominates early",
          runScore: "PHI 12-4 run",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "8:15",
          description: "Tatum finds his rhythm with three consecutive buckets to flip momentum",
          runScore: "BOS 14-6 run",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "2:28",
          description: "Brown and Tatum combine for 18 third-quarter points to take control",
          runScore: "BOS 20-11 run",
          momentum: "away",
          keyPlayer: "Jaylen Brown",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "7:45",
          description: "Boston's championship experience shows as they extend lead to 15 points",
          runScore: "BOS 16-8 run",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Jayson Tatum's redemption tour continued in Philadelphia as the Celtics star silenced a raucous Wells Fargo Center crowd with his most complete playoff performance in recent memory. After struggling in Game 1, Tatum showed the killer instinct that defines championship teams, methodically dismantling the Sixers' defense with a surgeon's precision. The Celtics' veteran savvy was on full display as they weathered Philadelphia's early storm and gradually imposed their will, stealing home court advantage with the kind of road playoff victory that separates contenders from pretenders. Boston's ability to execute in hostile territory while Tatum rediscovered his All-NBA form has this series perfectly positioned for an epic showdown."
    },
    {
      gameId: "LAL-HOU-20260424",
      teams: { home: "HOU", away: "LAL" },
      finalScore: { home: 108, away: 112 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:33",
          description: "Rockets' young legs take over as they build double-digit lead",
          runScore: "HOU 18-7 run",
          momentum: "home",
          keyPlayer: "Alperen Şengün",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "9:12",
          description: "Houston extends lead to 18 points with suffocating defense",
          runScore: "HOU 16-8 run",
          momentum: "home",
          keyPlayer: "Alperen Şengün",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "6:45",
          description: "Lakers' championship experience emerges as Davis and LeBron take over",
          runScore: "LAL 22-10 run",
          momentum: "away",
          keyPlayer: "Anthony Davis",
          impact: "game-changing"
        },
        {
          quarter: "OT",
          timestamp: "3:00",
          description: "Davis completely dominates overtime on both ends of the floor",
          runScore: "LAL 8-4 run",
          momentum: "away",
          keyPlayer: "Anthony Davis",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Anthony Davis",
          team: "LAL",
          description: "Clutch three-pointer to tie the game with 1:12 remaining in regulation",
          timeRemaining: "1:12",
          winProbabilityShift: 23
        },
        {
          player: "LeBron James",
          team: "LAL",
          description: "Perfect pass to Davis for the go-ahead bucket in overtime",
          timeRemaining: "0:12",
          winProbabilityShift: 41
        },
        {
          player: "Anthony Davis",
          team: "LAL",
          description: "Game-sealing block on Şengün's final shot attempt",
          timeRemaining: "0:18",
          winProbabilityShift: 18
        }
      ],
      narrative: "This was playoff basketball at its absolute finest - a heavyweight bout that showcased why the Lakers remain championship contenders despite their age. Anthony Davis delivered the kind of superhuman overtime performance that legends are built upon, completely taking over when elimination stared Los Angeles in the face. The Lakers' championship DNA shined brightest when the lights were hottest, as LeBron's vintage court vision found Davis for the dagger while their collective playoff experience proved the difference against Houston's talented but inexperienced core. Davis didn't just advance the Lakers to the next round - he announced that this team's championship window remains wide open with performances like this still in the tank."
    },
    {
      gameId: "SAS-POR-20260424",
      teams: { home: "POR", away: "SAS" },
      finalScore: { home: 108, away: 120 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:30",
          description: "Wembanyama showcases his full arsenal early with dominant two-way play",
          runScore: "SAS 14-6 run",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "5:15",
          description: "Portland's veteran savvy shows as Lillard heats up from deep",
          runScore: "POR 16-8 run",
          momentum: "home",
          keyPlayer: "Damian Lillard",
          impact: "notable"
        },
        {
          quarter: "Q3",
          timestamp: "7:22",
          description: "Spurs' length and athleticism begin to overwhelm Portland's offense",
          runScore: "SAS 18-10 run",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "6:00",
          description: "Wembanyama's 14 fourth-quarter points completely take over the game",
          runScore: "SAS 22-12 run",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Victor Wembanyama officially announced his arrival as a legitimate playoff superstar with a performance that had shades of Tim Duncan's legendary postseason dominance in San Antonio. The rookie phenom didn't just force a Game 7 - he completely dismantled Portland's upset dreams with the kind of two-way excellence that defines generational talents. Wembanyama's fourth-quarter takeover was a masterclass in playoff basketball, as his rim protection, rebounding, and scoring completely neutralized every answer Portland tried to throw at him. The basketball world just witnessed the birth of the next great playoff performer, and if this performance is any indication, San Antonio's championship timeline might be accelerating faster than anyone imagined."
    }
  ]
};