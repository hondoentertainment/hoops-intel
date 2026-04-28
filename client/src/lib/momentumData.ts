// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 28, 2026
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
  date: "April 28, 2026",
  gameOfTheNight: "DET-ORL-20260427",
  topClutchPerformer: { 
    player: "Paolo Banchero", 
    team: "ORL", 
    clutchRating: 96, 
    description: "Led historic upset with ice-cold 14-4 closing run, delivering clutch baskets and defensive stops to complete stunning series victory over 60-win Detroit" 
  },
  games: [
    {
      gameId: "DET-ORL-20260427",
      teams: { home: "ORL", away: "DET" },
      finalScore: { home: 94, away: 88 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:42",
          description: "Detroit opens with authority as Cunningham scores 8 quick points",
          runScore: "12-4 DET",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "4:15",
          description: "Banchero responds with three consecutive buckets to ignite Kia Center",
          runScore: "8-0 ORL",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "notable"
        },
        {
          quarter: "Q3",
          timestamp: "6:28",
          description: "Pistons reassert control with suffocating defense forcing four turnovers",
          runScore: "11-2 DET",
          momentum: "away",
          keyPlayer: "Isaiah Stewart",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "5:47",
          description: "Magic unleash stunning closing run as crowd reaches fever pitch",
          runScore: "14-4 ORL",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Paolo Banchero",
          team: "ORL",
          description: "Step-back three over Cunningham to break 84-84 tie",
          timeRemaining: "3:22",
          winProbabilityShift: 18
        },
        {
          player: "Paolo Banchero",
          team: "ORL", 
          description: "Steal and fast-break dunk to extend lead to 6",
          timeRemaining: "1:48",
          winProbabilityShift: 24
        },
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Clutch three-pointer to cut deficit to one possession",
          timeRemaining: "0:52",
          winProbabilityShift: -16
        }
      ],
      narrative: "The Kia Center witnessed basketball history as Paolo Banchero orchestrated one of the most stunning playoff upsets in NBA lore, dismantling a 60-win Detroit squad with championship-level poise. The young superstar's clutch gene manifested in the final five minutes, hitting impossible shots while the entire arena shook with playoff electricity. Detroit's regular season dominance crumbled under Orlando's relentless energy and Banchero's transcendent performance. This was the moment a franchise announced its arrival on the championship stage."
    },
    {
      gameId: "OKC-PHX-20260427",
      teams: { home: "PHX", away: "OKC" },
      finalScore: { home: 122, away: 131 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:23",
          description: "Booker catches fire early with four three-pointers in Phoenix homecoming",
          runScore: "14-2 PHX",
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "9:14",
          description: "SGA takes over completely, scoring 18 points in devastating quarter",
          runScore: "22-8 OKC",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing"
        },
        {
          quarter: "Q3",
          timestamp: "2:45",
          description: "Thunder extend lead as young legs overwhelm aging Phoenix roster",
          runScore: "16-6 OKC",
          momentum: "away",
          keyPlayer: "Jalen Williams",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "6:12",
          description: "Suns make desperate final push but Thunder answer every shot",
          runScore: "12-8 PHX",
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "notable"
        }
      ],
      clutchPlays: [],
      narrative: "Shai Gilgeous-Alexander put on an absolute clinic at Footprint Center, methodically dissecting Phoenix's defense with the precision of a championship-caliber superstar. The Thunder's youth movement reached its crescendo as they overwhelmed a Suns team that looked every bit of their advanced age in crucial moments. OKC's relentless pace and SGA's unstoppable scoring proved too much for a Phoenix squad whose championship window has definitively closed. This series-clinching performance announced the Thunder as legitimate title contenders with their young superstar leading the charge."
    },
    {
      gameId: "MIN-DEN-20260427",
      teams: { home: "DEN", away: "MIN" },
      finalScore: { home: 125, away: 113 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:18",
          description: "Edwards explodes for 12 early points as Minnesota takes early control",
          runScore: "10-2 MIN",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "8:33",
          description: "Jokic begins his masterpiece with perfect playmaking display",
          runScore: "15-4 DEN",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "4:07",
          description: "Defending champions assert dominance with suffocating defensive run",
          runScore: "18-6 DEN",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "7:21",
          description: "Jokic triple-double seals victory as championship experience takes over",
          runScore: "12-3 DEN",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Nikola Jokic reminded everyone why he's a two-time MVP with a triple-double masterclass that saved Denver's championship defense from the brink of elimination. The Serbian maestro conducted a basketball symphony at Ball Arena, orchestrating perfect possessions while Minnesota's young legs wilted under championship pressure. This was vintage playoff Jokic - patient, calculated, and utterly dominant when elimination loomed largest. The Nuggets proved that championship DNA still matters most when the lights shine brightest, shifting series momentum back in their favor with trademark resilience."
    }
  ]
};