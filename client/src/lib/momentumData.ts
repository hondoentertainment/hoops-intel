// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 7, 2026
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
  date: "April 7, 2026",
  gameOfTheNight: "POR-DEN-20260406",
  topClutchPerformer: { 
    player: "Nikola Jokić", 
    team: "DEN", 
    clutchRating: 96, 
    description: "Dominated overtime with 8 points and 3 assists to seal the victory, showcasing MVP-level composure when it mattered most" 
  },
  games: [
    {
      gameId: "CLE-MEM-20260406",
      teams: { home: "MEM", away: "CLE" },
      finalScore: { home: 126, away: 142 },
      swings: [
        {
          quarter: "1st",
          timestamp: "6:42",
          description: "Mitchell's early barrage ignites Cleveland offense",
          runScore: "15-4",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "8:15",
          description: "Morant responds with explosive scoring flurry",
          runScore: "18-8",
          momentum: "home",
          keyPlayer: "Ja Morant",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "4:22",
          description: "Cavaliers three-point explosion breaks game open",
          runScore: "21-9",
          momentum: "away",
          keyPlayer: "Darius Garland",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Cleveland authored a masterclass in offensive basketball, turning FedExForum into their personal shooting gallery. Mitchell's 38-point eruption on elite efficiency set the tone, but this was a complete team demolition that sent shockwaves through the Eastern Conference. The Cavaliers' season-high 142 points weren't just impressive numbers—they were a statement of championship intent."
    },
    {
      gameId: "NY-ATL-20260406",
      teams: { home: "ATL", away: "NY" },
      finalScore: { home: 105, away: 108 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:30",
          description: "Young opens hot with deep threes",
          runScore: "12-4",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "2:45",
          description: "Brunson takes control with methodical scoring",
          runScore: "14-6",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "5:20",
          description: "Hawks rally behind Young's clutch shooting",
          runScore: "11-5",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "significant"
        }
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "NY",
          description: "Clutch free throws with 12 seconds left seal victory",
          timeRemaining: "0:12",
          winProbabilityShift: 15
        },
        {
          player: "Trae Young",
          team: "ATL",
          description: "Deep three-pointer brings Hawks within one with 45 seconds left",
          timeRemaining: "0:45",
          winProbabilityShift: -12
        }
      ],
      narrative: "A heavyweight bout between two elite point guards delivered drama until the final buzzer. Young's fourth consecutive 30-point game kept Atlanta's playoff hopes alive, but Brunson's veteran composure in crunch time proved the difference. The Knicks' championship experience shined brightest when the lights were hottest."
    },
    {
      gameId: "PHI-SA-20260406",
      teams: { home: "SA", away: "PHI" },
      finalScore: { home: 115, away: 102 },
      swings: [
        {
          quarter: "1st",
          timestamp: "9:15",
          description: "Embiid dominates early interior battle",
          runScore: "10-4",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "5:30",
          description: "Wembanyama's defensive showcase sparks Spurs run",
          runScore: "18-7",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "1:45",
          description: "Wembanyama's mid-range clinic breaks game open",
          runScore: "16-8",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Wembanyama versus Embiid lived up to every ounce of hype, but the young phenom ultimately outclassed the veteran All-Star. San Antonio's 13-game winning streak—the longest in the NBA this season—continues to build momentum as they establish themselves as the West's most dangerous team. Wembanyama's two-way dominance is reaching historic levels at the perfect time."
    },
    {
      gameId: "DET-ORL-20260406",
      teams: { home: "ORL", away: "DET" },
      finalScore: { home: 123, away: 107 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:00",
          description: "Pistons establish early lead with efficient offense",
          runScore: "12-6",
          momentum: "away",
          keyPlayer: "Isaiah Stewart",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "3:20",
          description: "Wagner's return sparks Magic comeback",
          runScore: "15-8",
          momentum: "home",
          keyPlayer: "Franz Wagner",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "2:10",
          description: "Banchero's explosive third quarter takeover",
          runScore: "23-11",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Paolo Banchero announced his arrival as a legitimate superstar with a performance that stunned the Eastern Conference leaders. His 23-point third quarter was pure artistry, systematically dismantling Detroit's defense with a combination of power and finesse. The Magic's upset victory breathed new life into their playoff hopes while serving notice that Banchero is ready for basketball's biggest stage."
    },
    {
      gameId: "POR-DEN-20260406",
      teams: { home: "DEN", away: "POR" },
      finalScore: { home: 137, away: 132 },
      swings: [
        {
          quarter: "2nd",
          timestamp: "4:15",
          description: "Lillard's deep range assault puts Blazers ahead",
          runScore: "16-8",
          momentum: "away",
          keyPlayer: "Damian Lillard",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "6:30",
          description: "Jokić orchestrates Denver's methodical response",
          runScore: "20-12",
          momentum: "home",
          keyPlayer: "Nikola Jokić",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "2:45",
          description: "Murray's clutch shots force overtime",
          runScore: "8-4",
          momentum: "home",
          keyPlayer: "Jamal Murray",
          impact: "game-changing"
        },
        {
          quarter: "OT",
          timestamp: "3:20",
          description: "Jokić's overtime mastery seals victory",
          runScore: "11-6",
          momentum: "home",
          keyPlayer: "Nikola Jokić",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Nikola Jokić",
          team: "DEN",
          description: "Back-to-back assists and mid-range jumper in overtime",
          timeRemaining: "3:20",
          winProbabilityShift: 18
        },
        {
          player: "Damian Lillard",
          team: "POR",
          description: "Logo three-pointer ties game with 47 seconds left in regulation",
          timeRemaining: "0:47",
          winProbabilityShift: -14
        },
        {
          player: "Jamal Murray",
          team: "DEN",
          description: "Contested three forces overtime with 8 seconds remaining",
          timeRemaining: "0:08",
          winProbabilityShift: 22
        }
      ],
      narrative: "A playoff-atmosphere thriller that showcased two teams fighting for postseason positioning delivered the drama fans crave. Jokić's triple-double and overtime dominance reminded everyone why he's the reigning MVP, while Lillard's 34-point masterpiece nearly pulled off a season-saving upset for Portland. The kind of basketball that makes April magic."
    }
  ]
};