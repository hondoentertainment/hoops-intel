// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 21, 2026
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
  date: "May 21, 2026",
  gameOfTheNight: "SAS-OKC-20260520",
  topClutchPerformer: {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    clutchRating: 91,
    description:
      "SGA authored a complete response game after his Game 1 struggles — 30 points on a surgical mid-range diet, attacking Wembanyama in floater territory to neutralize the rim-protection advantage. His +14 was the clearest margin of dominance on the floor, and he delivered his biggest possessions precisely when San Antonio threatened to claw back in the third.",
  },
  games: [
    {
      gameId: "SAS-OKC-20260520",
      teams: { home: "OKC", away: "SAS" },
      finalScore: { home: 122, away: 113 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:31",
          description:
            "Wembanyama orchestrates a 9-2 Spurs run with back-to-back pull-up threes and a soaring block on Holmgren, silencing Paycom Center and staking San Antonio to an early eight-point lead. Castle's aggression in transition is creating chaos and OKC's half-court sets look rattled.",
          runScore: "9-2 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:03",
          description:
            "Jalen Williams checks in for the first time since May 3 and the building erupts. In his first seven minutes back, Williams drains a mid-range jumper, draws two fouls, and dishes two assists — OKC immediately rips off an 11-3 run that flips the lead. The psychological weight of his return visibly deflates the Spurs' bench.",
          runScore: "11-3 OKC",
          momentum: "home",
          keyPlayer: "Jalen Williams",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:17",
          description:
            "Castle's turnover parade — three giveaways in four possessions — fuels an OKC transition blitz. Caruso converts two push-ahead layups, SGA buries a pull-up off a live-ball steal, and the Thunder extend the lead to 16. OKC's press-break reads are shredding San Antonio's ball-handlers at every level.",
          runScore: "14-4 OKC",
          momentum: "home",
          keyPlayer: "Alex Caruso",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "1:44",
          description:
            "Wembanyama refuses to let the Spurs die — a thunderous baseline dunk over Holmgren followed by a Stephon Castle three-pointer trims the deficit back to nine heading into the fourth. The crowd's energy dims slightly and OKC calls timeout to reset.",
          runScore: "8-2 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "9:02",
          description:
            "SGA responds to Wembanyama's third-quarter surge immediately — a silky floater in the lane, a step-back mid-ranger over the outstretched arm, and a find to Caruso cutting baseline reestablishes a 15-point OKC cushion. The game's outcome is no longer in doubt; it's a coronation lap for Thunder depth.",
          runScore: "10-3 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative:
        "Game 2 of the Western Conference Finals was less a basketball game than a statement — OKC dismantled San Antonio's belief system with depth, discipline, and the most emotionally charged seven-minute cameo of the postseason. Jalen Williams' return didn't just change the scoreboard; it rewired the psychological circuitry of an already-confident Thunder squad. SGA's mid-range clinic against Wembanyama answered every skeptic who questioned his Game 1 passivity, and Caruso's +18 off the bench was the kind of contribution that defines championship rosters. Wembanyama was genuinely brilliant in defeat — 21 points, 17 rebounds, 6 assists, 4 blocks — and San Antonio's 62-win season still earns them respect, but OKC's ceiling just got visibly higher the moment Williams stepped back onto the floor. The series heads to San Antonio knotted at 1-1, but the Thunder hold every meaningful edge.",
    },
  ],
};