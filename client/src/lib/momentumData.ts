// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 20, 2026
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
  date: "April 20, 2026",
  gameOfTheNight: "ORL-DET-20260420",
  topClutchPerformer: { player: "Paolo Banchero", team: "ORL", clutchRating: 94, description: "Scored 12 points in the final quarter to seal the stunning upset, including a dagger three with 2:14 remaining" },
  games: [
    {
      gameId: "PHX-OKC-20260420",
      teams: { home: "OKC", away: "PHX" },
      finalScore: { home: 119, away: 84 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:43",
          description: "Shai Gilgeous-Alexander erupts for 11 points in opening minutes",
          runScore: "15-4 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "4:22",
          description: "Thunder bench mob extends lead with 14-2 run",
          runScore: "14-2 OKC",
          momentum: "home",
          keyPlayer: "Isaiah Joe",
          impact: "game-changing"
        },
        {
          quarter: "Q3",
          timestamp: "9:15",
          description: "Holmgren's rim protection sparks 12-0 run to break it wide open",
          runScore: "12-0 OKC",
          momentum: "home",
          keyPlayer: "Chet Holmgren",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "What started as a playoff atmosphere quickly turned into a Thunder clinic as Oklahoma City demolished Phoenix in historically dominant fashion. The Suns never recovered from falling behind early, watching helplessly as the Thunder's young core put on a masterclass in both ends of the floor. This wasn't just a win — it was a statement that OKC is ready for the biggest stage. Phoenix's championship window may have slammed shut with this embarrassing collapse on the road."
    },
    {
      gameId: "PHI-BOS-20260420",
      teams: { home: "BOS", away: "PHI" },
      finalScore: { home: 123, away: 91 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:17",
          description: "Tatum catches fire from three, hits four straight triples",
          runScore: "12-0 BOS",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "8:44",
          description: "Brown and White combine for 16 points in devastating run",
          runScore: "16-3 BOS",
          momentum: "home",
          keyPlayer: "Jaylen Brown",
          impact: "game-changing"
        },
        {
          quarter: "Q3",
          timestamp: "6:30",
          description: "Celtics force 8 turnovers in quarter-opening avalanche",
          runScore: "18-4 BOS",
          momentum: "home",
          keyPlayer: "Derrick White",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The Celtics turned TD Garden into a house of horrors for Philadelphia, delivering their most ruthless performance of the season when it mattered most. Tatum was absolutely unconscious from deep, torching the Sixers with precision that bordered on unfair. This wasn't just a victory — it was a psychological demolition that exposed every flaw in Philadelphia's playoff armor. The 32-point margin felt merciful compared to how helpless the Sixers looked trying to contain Boston's suffocating pace."
    },
    {
      gameId: "ORL-DET-20260420",
      teams: { home: "DET", away: "ORL" },
      finalScore: { home: 101, away: 112 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "9:12",
          description: "Banchero takes over with 13 points in quarter to flip script",
          runScore: "13-4 ORL",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "3:45",
          description: "Wagner's three-point barrage ignites 15-6 run",
          runScore: "15-6 ORL",
          momentum: "away",
          keyPlayer: "Franz Wagner",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "7:22",
          description: "Cunningham rallies Pistons with 9 straight points",
          runScore: "9-2 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "2:14",
          description: "Banchero's dagger three silences Little Caesars Arena",
          runScore: "8-2 ORL",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Paolo Banchero",
          team: "ORL",
          description: "Step-back three over Isaiah Stewart to extend lead to 8",
          timeRemaining: "2:14",
          winProbabilityShift: 23.4
        },
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Driving layup plus foul to cut deficit to 3",
          timeRemaining: "4:33",
          winProbabilityShift: -18.7
        },
        {
          player: "Markelle Fultz",
          team: "ORL",
          description: "Clutch steal and assist to Wagner for crucial bucket",
          timeRemaining: "1:47",
          winProbabilityShift: 15.2
        }
      ],
      narrative: "In the biggest upset of the season, Paolo Banchero announced his arrival as a superstar by stunning the conference-leading Pistons on their home floor. The second-year phenom was absolutely unstoppable, dismantling Detroit's defense with a combination of power, finesse, and clutch gene that belied his age. This victory will be remembered as the moment Orlando's young core proved they belong in championship conversations. Detroit's supposed invincibility at home crumbled under the weight of Banchero's brilliance and their own shocking complacency."
    },
    {
      gameId: "POR-SAS-20260420",
      teams: { home: "SAS", away: "POR" },
      finalScore: { home: 111, away: 98 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:18",
          description: "Wembanyama's rim protection sparks 14-5 run",
          runScore: "14-5 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "8:33",
          description: "Lillard explodes for 12 points to cut deficit to 4",
          runScore: "12-3 POR",
          momentum: "away",
          keyPlayer: "Damian Lillard",
          impact: "notable"
        },
        {
          quarter: "Q3",
          timestamp: "2:47",
          description: "Vassell and Johnson combine for 10 straight to regain control",
          runScore: "10-2 SAS",
          momentum: "home",
          keyPlayer: "Devin Vassell",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Victor Wembanyama put on another otherworldly display of two-way dominance, systematically dismantling Portland with a performance that showcased exactly why the Spurs are championship contenders. The rookie sensation controlled every aspect of the game, from rim protection to offensive versatility, making the Trail Blazers look ordinary by comparison. San Antonio's supporting cast stepped up beautifully around their franchise cornerstone, with Vassell and Johnson providing the scoring punch when it mattered most. This victory keeps the Spurs firmly in the hunt for the Western Conference's top seed while further cementing Wembanyama's Rookie of the Year candidacy."
    }
  ]
};