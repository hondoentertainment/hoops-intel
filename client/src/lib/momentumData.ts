// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 12, 2026
// Live at: https://hoopsintel.net/momentum
// Swing copy cites the November 11, 2026 ESPN boxes. It does not invent a clock or a run.

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
  generatedDate: string;
  date: string;
  games: MomentumSwing[];
  gameOfTheNight: string;
  topClutchPerformer: { player: string; team: string; clutchRating: number; description: string };
}

export const momentumData: MomentumData = {
  generatedDate: "2026-11-12",
  date: "November 12, 2026",
  gameOfTheNight: "BKN-NOP-20261111",
  topClutchPerformer: {
    player: "Victor Wembanyama",
    team: "SAS",
    clutchRating: 90,
    description: "Wembanyama finished plus-29 with 32 points, 9 rebounds, and 5 blocks in San Antonio's 124-119 win at Chicago. The box does not include a separate clutch split, so this is the on-court margin, not a fourth-quarter log.",
  },
  games: [
    {
      gameId: "BKN-NOP-20261111",
      teams: { home: "NOP", away: "BKN" },
      finalScore: { home: 111, away: 145 },
      swings: [
        {
          quarter: "Final",
          timestamp: "Box",
          description: "Zion Williamson played 30 minutes and scored 29 points. Michael Porter Jr. and Egor Demin each scored 22 for Brooklyn. Julius Randle was plus-38. Cam Thomas is not on the box.",
          runScore: "BRK 145-111",
          momentum: "away",
          keyPlayer: "Zion Williamson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Brooklyn won 145-111 at New Orleans. The Nets are 3-8 and the Pelicans are 4-8. Williamson was on the floor for the loss. Porter and Demin shared Brooklyn's high at 22.",
    },
    {
      gameId: "LAL-MIL-20261111",
      teams: { home: "MIL", away: "LAL" },
      finalScore: { home: 112, away: 123 },
      swings: [
        {
          quarter: "Final",
          timestamp: "Box",
          description: "Luka Doncic scored 32 points with 5 rebounds, 5 assists, and five threes, plus-21. Tyler Herro scored 27 for Milwaukee. LeBron James is not on the Lakers' box.",
          runScore: "LAL 123-112",
          momentum: "away",
          keyPlayer: "Luka Doncic",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Los Angeles won 123-112 at Milwaukee and is 11-2. The Bucks are 1-11. Damian Lillard is not on Milwaukee's box; he scored 18 for Portland the same night.",
    },
    {
      gameId: "CLE-NYK-20261111",
      teams: { home: "NYK", away: "CLE" },
      finalScore: { home: 107, away: 115 },
      swings: [
        {
          quarter: "Final",
          timestamp: "Box",
          description: "James Harden scored 32 points on 9-of-14 shooting with five threes. Donovan Mitchell added 23 points, 7 rebounds, and 6 assists. Jalen Brunson scored 27.",
          runScore: "CLE 115-107",
          momentum: "away",
          keyPlayer: "James Harden",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Cleveland won 115-107 at New York. The Cavaliers are 6-6 and the Knicks are 6-5. Harden, not a 33-point Mitchell line, led the road win.",
    },
    {
      gameId: "BOS-TOR-20261111",
      teams: { home: "TOR", away: "BOS" },
      finalScore: { home: 93, away: 98 },
      swings: [
        {
          quarter: "Final",
          timestamp: "Box",
          description: "Jayson Tatum scored 24 points with 7 rebounds and 8 assists on 6-of-21 shooting. Derrick White added 19 points, 7 assists, and 4 blocks, plus-18.",
          runScore: "BOS 98-93",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Boston won 98-93 at Toronto and is 10-2. Toronto is 5-6. Scottie Barnes did not play.",
    },
    {
      gameId: "SAS-CHI-20261111",
      teams: { home: "CHI", away: "SAS" },
      finalScore: { home: 119, away: 124 },
      swings: [
        {
          quarter: "Final",
          timestamp: "Box",
          description: "Victor Wembanyama scored 32 points on 13-of-18 shooting with 9 rebounds, 5 blocks, and a plus-29. Dylan Harper had 18 points and 10 assists. Stephon Castle scored 11.",
          runScore: "SAS 124-119",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "San Antonio won 124-119 at Chicago and is 10-2. The Bulls are 1-9. Castle's line is 11 points, not 35.",
    },
    {
      gameId: "DEN-MEM-20261111",
      teams: { home: "MEM", away: "DEN" },
      finalScore: { home: 118, away: 123 },
      swings: [
        {
          quarter: "Final",
          timestamp: "Box",
          description: "Jamal Murray scored 30 points and 8 assists. Nikola Jokic finished 27 points, 11 rebounds, and 8 assists. Eight assists is not a triple-double.",
          runScore: "DEN 123-118",
          momentum: "away",
          keyPlayer: "Jamal Murray",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Denver won 123-118 at Memphis and is 6-4. Memphis is 7-4. Ja Morant does not appear on the Grizzlies' box.",
    },
    {
      gameId: "GSW-HOU-20261111",
      teams: { home: "HOU", away: "GSW" },
      finalScore: { home: 115, away: 108 },
      swings: [
        {
          quarter: "Final",
          timestamp: "Box",
          description: "Kevin Durant scored 20 points, 4 rebounds, and 5 assists for Houston. Alperen Sengun had 19 points, 13 rebounds, and 9 assists. Yaxel Lendeborg led Golden State with 25 and 10.",
          runScore: "HOU 115-108",
          momentum: "home",
          keyPlayer: "Kevin Durant",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Houston won 115-108 and is 9-3. Golden State is 8-4. Durant played for the Rockets. Stephen Curry played 6 minutes and scored 3.",
    },
    {
      gameId: "OKC-POR-20261111",
      teams: { home: "POR", away: "OKC" },
      finalScore: { home: 118, away: 108 },
      swings: [
        {
          quarter: "Final",
          timestamp: "Box",
          description: "Deni Avdija scored 28 points with 6 assists and 4 steals. Damian Lillard scored 18. Scoot Henderson scored 5 in 19 minutes. Shai Gilgeous-Alexander scored 31 and went 0-for-7 from three.",
          runScore: "POR 118-108",
          momentum: "home",
          keyPlayer: "Deni Avdija",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Portland won 118-108, its second straight win over Oklahoma City after Tuesday's 123-103. The Trail Blazers are 8-3. The Thunder are 8-4.",
    },
    {
      gameId: "WAS-IND-20261111",
      teams: { home: "IND", away: "WAS" },
      finalScore: { home: 114, away: 101 },
      swings: [
        {
          quarter: "Final",
          timestamp: "Box",
          description: "Pascal Siakam scored 28 points, 8 rebounds, and 5 assists and made 12 of 12 free throws. Andrew Nembhard had 10 assists. Tyrese Haliburton did not play.",
          runScore: "IND 114-101",
          momentum: "home",
          keyPlayer: "Pascal Siakam",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Indiana won 114-101. Both teams are 4-8. Haliburton is out with a left hamstring strain. AJ Dybantsa scored 13 for Washington.",
    },
    {
      gameId: "ORL-UTAH-20261111",
      teams: { home: "UTAH", away: "ORL" },
      finalScore: { home: 108, away: 123 },
      swings: [
        {
          quarter: "Final",
          timestamp: "Box",
          description: "Franz Wagner scored 38 points and 8 rebounds, the slate high. Desmond Bane scored 25 and made 7 threes. Paolo Banchero did not play. Darryn Peterson scored 22 for Utah.",
          runScore: "ORL 123-108",
          momentum: "away",
          keyPlayer: "Franz Wagner",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Orlando won 123-108 at Utah and is 4-7. Utah is 1-11. Banchero's absence is a right ankle sprain on the ESPN injury report.",
    },
  ],
};
