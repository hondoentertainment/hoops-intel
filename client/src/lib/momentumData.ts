// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 23, 2026
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
  date: "May 23, 2026",
  gameOfTheNight: "OKC-SAS-20260522",
  topClutchPerformer: {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    clutchRating: 91,
    description:
      "SGA orchestrated OKC's series-defining third quarter with surgical precision — a perfect 12-of-12 from the stripe, 12 assists without a turnover, and a +11 that understates how thoroughly he controlled the Frost Bank Center. When San Antonio needed a stop, he found the crack in the defense every time.",
  },
  games: [
    {
      gameId: "OKC-SAS-20260522",
      teams: { home: "SAS", away: "OKC" },
      finalScore: { home: 108, away: 123 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:41",
          description:
            "San Antonio opened with energy on their home floor, riding Wembanyama's early activity — two buckets, a block, and a drawn foul — to build an 8-point cushion. The Frost Bank Center was electric and OKC looked momentarily unsettled, committing back-to-back shot-clock violations.",
          runScore: "SAS 22–14",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:12",
          description:
            "SGA took over the second quarter with back-to-back pull-up midrangers and a no-look dime to Jaylin Williams in the corner for three, erasing the Spurs' lead and flipping the game. OKC closed the half on a 16-6 run to take a 5-point lead into the locker room, a seismic shift that stole the crowd's voice entirely.",
          runScore: "OKC 55–50",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "8:55",
          description:
            "The Thunder came out of halftime as if they had spent the break watching San Antonio's weaknesses on a loop. Jared McCain scored 11 points in the first four minutes of the third — two threes, a floater, and a thunderous put-back — while Jaylin Williams dropped in three consecutive triples from the wing. OKC's bench outscored San Antonio's entire roster in the quarter, 24-11.",
          runScore: "OKC 92–71",
          momentum: "away",
          keyPlayer: "Jared McCain",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "1:18",
          description:
            "Alex Caruso's two consecutive steals — one converted into a fast-break layup, one kicking out to SGA for a free-throw-line jumper — put an exclamation mark on OKC's 37-point quarter and officially turned a competitive Western Conference Finals game into a coronation. The Spurs bench sat slumped, the arena murmuring disbelief.",
          runScore: "OKC 97–71",
          momentum: "away",
          keyPlayer: "Alex Caruso",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:02",
          description:
            "San Antonio's reserves mounted a brief face-saving run — seven unanswered points capped by a Castle drive — but OKC's starters returned within 90 seconds, promptly restoring a 20-plus margin. The Spurs never threatened and the game settled into garbage time, with both benches clearing in the final two minutes.",
          runScore: "SAS 88–108",
          momentum: "home",
          keyPlayer: "Stephon Castle",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative:
        "This was a game that felt even for exactly one half before Oklahoma City detonated the most punishing third quarter of these playoffs — 37 points, a 21-point swing, and a series of individual performances that will linger in the Spurs' film sessions for days. SGA was the composer, McCain and Williams were the hammers, and Caruso was the exclamation point. San Antonio showed flashes — Wembanyama's 26 points were elite, and Castle's grit at the line kept the final margin from being historic — but Fox's limited mobility exposed just how much the Spurs rely on his two-way burst to stabilize them in critical stretches. OKC now holds a 2-1 series lead with a road win in hand, and the Thunder look every bit like the team that won 64 games: deep, disciplined, and absolutely merciless once they smell blood.",
    },
  ],
};