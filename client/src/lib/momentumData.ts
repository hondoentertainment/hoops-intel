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
  topClutchPerformer: { 
    player: "Paolo Banchero", 
    team: "ORL", 
    clutchRating: 92, 
    description: "Delivered the knockout punch with 11 fourth-quarter points to stun the conference leaders on the road" 
  },
  games: [
    {
      gameId: "PHX-OKC-20260420",
      teams: { home: "OKC", away: "PHX" },
      finalScore: { home: 119, away: 84 },
      swings: [
        {
          quarter: "1Q",
          timestamp: "6:42",
          description: "Thunder open with devastating 15-2 run behind Shai's perfect shooting",
          runScore: "15-2",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing"
        },
        {
          quarter: "2Q",
          timestamp: "8:14",
          description: "Suns briefly rally with Booker three-pointer and steal",
          runScore: "7-0",
          momentum: "away",
          keyPlayer: "Devin Booker",
          impact: "notable"
        },
        {
          quarter: "2Q",
          timestamp: "3:28",
          description: "Holmgren's block and dunk ignites crowd, extends lead to 18",
          runScore: "11-2",
          momentum: "home",
          keyPlayer: "Chet Holmgren",
          impact: "significant"
        },
        {
          quarter: "3Q",
          timestamp: "4:15",
          description: "Thunder's 14-0 run puts the game completely out of reach",
          runScore: "14-0",
          momentum: "home",
          keyPlayer: "Josh Giddey",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The Thunder delivered a masterclass in playoff-level dominance, methodically dismantling Phoenix from the opening tip. Oklahoma City's young core flexed their championship muscles with suffocating defense and explosive offense that left the Suns shell-shocked. This wasn't just a win—it was a statement that the Thunder are ready for their crowning moment. The 35-point demolition served as the perfect tune-up for what could be a historic postseason run."
    },
    {
      gameId: "PHI-BOS-20260420",
      teams: { home: "BOS", away: "PHI" },
      finalScore: { home: 123, away: 91 },
      swings: [
        {
          quarter: "1Q",
          timestamp: "7:23",
          description: "Tatum catches fire from deep, drilling three straight threes",
          runScore: "11-2",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "significant"
        },
        {
          quarter: "2Q",
          timestamp: "9:45",
          description: "Embiid powers inside for back-to-back buckets, cutting deficit",
          runScore: "6-0",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "notable"
        },
        {
          quarter: "2Q",
          timestamp: "2:17",
          description: "Brown and White combine for 10-0 spurt before halftime",
          runScore: "10-0",
          momentum: "home",
          keyPlayer: "Jaylen Brown",
          impact: "game-changing"
        },
        {
          quarter: "3Q",
          timestamp: "5:32",
          description: "Celtics' defense forces 6 straight turnovers, lead balloons to 28",
          runScore: "16-2",
          momentum: "home",
          keyPlayer: "Derrick White",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The Celtics unleashed their championship fury on Philadelphia with a performance that bordered on artistic violence. Tatum's three-point barrage set the tone, but it was Boston's suffocating team defense that turned this into a massacre at TD Garden. The 76ers looked overwhelmed and outclassed, their playoff dreams taking a serious hit against a Celtics squad operating at peak efficiency. This was a reminder that when healthy and locked in, few teams can match Boston's devastating two-way excellence."
    },
    {
      gameId: "ORL-DET-20260420",
      teams: { home: "DET", away: "ORL" },
      finalScore: { home: 101, away: 112 },
      swings: [
        {
          quarter: "2Q",
          timestamp: "8:47",
          description: "Banchero takes over with 12 straight Magic points",
          runScore: "12-2",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "significant"
        },
        {
          quarter: "3Q",
          timestamp: "6:18",
          description: "Cunningham responds with spectacular passing display",
          runScore: "9-0",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "notable"
        },
        {
          quarter: "3Q",
          timestamp: "1:42",
          description: "Wagner's clutch three gives Magic cushion entering fourth",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "Franz Wagner",
          impact: "significant"
        },
        {
          quarter: "4Q",
          timestamp: "7:23",
          description: "Banchero's monster quarter puts upset within reach",
          runScore: "11-4",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Paolo Banchero",
          team: "ORL",
          description: "Silky fadeaway jumper over defender in the paint",
          timeRemaining: "4:12",
          winProbabilityShift: 18
        },
        {
          player: "Franz Wagner",
          team: "ORL",
          description: "Ice-cold three-pointer from the corner to seal it",
          timeRemaining: "2:47",
          winProbabilityShift: 23
        },
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Desperate three-pointer attempt to cut deficit",
          timeRemaining: "1:33",
          winProbabilityShift: -8
        }
      ],
      narrative: "In the upset of the night, Paolo Banchero announced his arrival on the playoff stage with a virtuoso performance that stunned the conference-leading Pistons at home. The young Magic showed incredible poise and execution down the stretch, with Banchero's fourth-quarter takeover sealing one of their biggest victories in years. Detroit looked flat and uninspired, raising serious questions about their readiness for the postseason grind. This was the kind of signature road win that can transform a franchise's confidence and trajectory."
    },
    {
      gameId: "POR-SAS-20260420",
      teams: { home: "SAS", away: "POR" },
      finalScore: { home: 111, away: 98 },
      swings: [
        {
          quarter: "1Q",
          timestamp: "5:31",
          description: "Lillard heats up early with back-to-back threes",
          runScore: "8-0",
          momentum: "away",
          keyPlayer: "Damian Lillard",
          impact: "notable"
        },
        {
          quarter: "2Q",
          timestamp: "9:12",
          description: "Wembanyama's rim protection sparks 12-2 Spurs run",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "3Q",
          timestamp: "6:45",
          description: "Vassell catches fire from three-point range",
          runScore: "13-4",
          momentum: "home",
          keyPlayer: "Devin Vassell",
          impact: "game-changing"
        },
        {
          quarter: "4Q",
          timestamp: "8:21",
          description: "Wembanyama's dominant two-way display seals the victory",
          runScore: "10-3",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Victor Wembanyama continues to redefine what's possible for a rookie, dominating both ends of the floor in a comfortable victory over Portland. The French phenom's rim protection and scoring versatility were on full display as San Antonio maintained their chase for the top seed. While Damian Lillard tried to keep pace with his usual brilliance, the Trail Blazers simply couldn't match the Spurs' balanced attack and defensive intensity. This was another chapter in Wembanyama's remarkable rookie campaign that has the basketball world buzzing about San Antonio's future."
    }
  ]
};