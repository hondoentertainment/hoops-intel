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
    clutchRating: 94, 
    description: "Led historic upset with 26 points and clutch 14-4 closing run to eliminate 60-win Detroit" 
  },
  games: [
    {
      gameId: "DET-ORL-20260427",
      teams: { home: "ORL", away: "DET" },
      finalScore: { home: 94, away: 88 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:32",
          description: "Detroit opens with authoritative 12-2 run behind Cunningham's scoring",
          runScore: "12-2",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "4:15",
          description: "Magic bench sparks 18-6 rally to flip halftime momentum at home",
          runScore: "18-6",
          momentum: "home",
          keyPlayer: "Cole Anthony",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "2:48",
          description: "Pistons reassert dominance with punishing 15-4 run to regain control",
          runScore: "15-4",
          momentum: "away",
          keyPlayer: "Isaiah Stewart",
          impact: "notable"
        },
        {
          quarter: "Q4",
          timestamp: "6:12",
          description: "Banchero ignites Kia Center with thunderous dunk and defensive steal",
          runScore: "8-0",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "3:21",
          description: "Historic 14-4 closing surge completes stunning playoff upset",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Paolo Banchero",
          team: "ORL",
          description: "Clutch three-pointer breaks 84-84 tie with ice in his veins",
          timeRemaining: "2:45",
          winProbabilityShift: 24
        },
        {
          player: "Franz Wagner",
          team: "ORL",
          description: "Steal and transition dunk extends lead to six points",
          timeRemaining: "1:38",
          winProbabilityShift: 18
        },
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Desperate three-point attempt falls short as upset becomes reality",
          timeRemaining: "0:22",
          winProbabilityShift: -12
        }
      ],
      narrative: "Paolo Banchero authored one of the most stunning playoff upsets in NBA history, willing Orlando past the 60-win Pistons with a masterful clutch performance. The young star's 14-4 closing run transformed Kia Center into pandemonium while Detroit's championship dreams evaporated in shocking fashion. This victory will be remembered as the moment Orlando's rebuild officially arrived on the playoff stage. The heavily favored Pistons appeared completely overwhelmed by the Magic's youth and desperation, proving that playoff basketball remains beautifully unpredictable."
    },
    {
      gameId: "OKC-PHX-20260427",
      teams: { home: "PHX", away: "OKC" },
      finalScore: { home: 122, away: 131 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:45",
          description: "Suns establish early rhythm with Booker's hot shooting display",
          runScore: "15-6",
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "9:18",
          description: "SGA takes over completely with unstoppable scoring barrage",
          runScore: "22-8",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing"
        },
        {
          quarter: "Q3",
          timestamp: "5:33",
          description: "Thunder's youth movement explodes for series-defining run",
          runScore: "18-7",
          momentum: "away",
          keyPlayer: "Jalen Williams",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "7:24",
          description: "Phoenix makes desperate push behind veteran leadership",
          runScore: "12-4",
          momentum: "home",
          keyPlayer: "Kevin Durant",
          impact: "notable"
        }
      ],
      clutchPlays: [],
      narrative: "Shai Gilgeous-Alexander delivered a coming-of-age playoff performance that officially announced Oklahoma City as championship contenders. His 38-point masterpiece overwhelmed Phoenix's aging core and highlighted the generational transition happening across the Western Conference. The Thunder's youthful athleticism proved too much for a Suns team desperately clinging to their closing championship window. This series victory represents more than advancement—it's a declaration that the future of the NBA has arrived in Oklahoma City."
    },
    {
      gameId: "MIN-DEN-20260427",
      teams: { home: "DEN", away: "MIN" },
      finalScore: { home: 125, away: 113 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:21",
          description: "Edwards and McDaniels fuel Minnesota's aggressive opening statement",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "8:45",
          description: "Jokic begins his triple-double masterpiece with brilliant passing",
          runScore: "16-6",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "game-changing"
        },
        {
          quarter: "Q3",
          timestamp: "4:12",
          description: "Championship experience shows as Nuggets seize total control",
          runScore: "21-9",
          momentum: "home",
          keyPlayer: "Jamal Murray",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "6:48",
          description: "Ball Arena erupts as Denver pulls away for crucial victory",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Nikola Jokic reminded everyone why he's a two-time MVP with a triple-double masterclass that saved Denver's season at the perfect moment. The Serbian superstar's 32-point, 15-rebound, 11-assist performance showcased championship-level execution when elimination loomed largest. Ball Arena witnessed playoff magic as the defending champions proved their experience advantage over Minnesota's talented but inexperienced core. This victory shifted the entire series momentum and demonstrated that championship pedigree remains invaluable in the postseason crucible."
    }
  ]
};