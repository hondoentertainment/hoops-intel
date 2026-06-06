// Momentum Engine — Real-time narrative momentum shifts
// Last updated: June 6, 2026
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
  date: "June 6, 2026",
  gameOfTheNight: "NYK-SAS-20260605",
  topClutchPerformer: {
    player: "Jalen Brunson",
    team: "NYK",
    clutchRating: 97,
    description:
      "Brunson authored one of the great Finals clutch performances in recent memory — a 17-foot pull-up with 14 seconds left that proved to be the dagger, then iced the game at the line after a Castle strip gave San Antonio one final gasp. He finished with 31 points, 9 assists, and a +9 in a game that swung violently in the final four minutes.",
  },
  games: [
    {
      gameId: "NYK-SAS-20260605",
      teams: { home: "SAS", away: "NYK" },
      finalScore: { home: 104, away: 105 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:14",
          description:
            "Karl-Anthony Towns rattled off 8 consecutive points — two mid-range jumpers and a tip-in off a Brunson miss — to push the Knicks out to a 14-point lead and silence a raucous Frost Bank Center crowd that had been feeding off early Spurs energy.",
          runScore: "8-0 NYK run (38-24)",
          momentum: "away",
          keyPlayer: "Karl-Anthony Towns",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:31",
          description:
            "Wembanyama ignited the building with back-to-back blocked shots that led to transition buckets on both ends — his own finger-roll and a Stephon Castle pull-up — trimming New York's lead to 6 and forcing a Knicks timeout as the crowd hit a fever pitch.",
          runScore: "9-2 SAS run (61-55)",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "8:02",
          description:
            "Brunson orchestrated a methodical 10-2 Knicks push to open the fourth quarter, dissecting the Spurs' drop coverage with floaters and finding Towns twice on high-low action, ballooning the lead back to 12 and appearing to put the game to rest.",
          runScore: "10-2 NYK run (85-73)",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:58",
          description:
            "In the most stunning individual sequence of the 2026 Finals, Wembanyama scored 11 consecutive San Antonio points — a step-back three, a driving hook, a mid-post fallaway, a put-back slam, and another three off a broken play — pulling the Spurs within one and sending Frost Bank Center into pure delirium.",
          runScore: "11-0 SAS run (101-100)",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "0:14",
          description:
            "Brunson responded to the Wembanyama onslaught with ice-cold precision — isolating on the left elbow, pump-faking his defender into the air, and drilling a 17-foot pull-up to restore a two-point lead with 14 seconds left and reclaim control of the narrative.",
          runScore: "2-1 NYK (103-101)",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Victor Wembanyama",
          team: "SAS",
          description:
            "Step-back three-pointer over OG Anunoby from the right wing — the opening salvo of an 11-0 personal run — cutting the deficit to 9 with under four minutes remaining and signaling that San Antonio was nowhere near done.",
          timeRemaining: "3:58",
          winProbabilityShift: -22,
        },
        {
          player: "Victor Wembanyama",
          team: "SAS",
          description:
            "Thunderous put-back slam off his own missed hook, drawing a foul in the process. He converted the and-one to pull San Antonio within two — the Frost Bank Center crowd was at a volume seldom heard in Finals history.",
          timeRemaining: "1:47",
          winProbabilityShift: -18,
        },
        {
          player: "Jalen Brunson",
          team: "NYK",
          description:
            "Isolation pull-up jumper from the left elbow over a closing Wembanyama — textbook footwork, perfect elevation — with 14 seconds on the clock to put New York up 103-101 and answer Wemby's personal run with one defining shot.",
          timeRemaining: "0:14",
          winProbabilityShift: 31,
        },
        {
          player: "Stephon Castle",
          team: "SAS",
          description:
            "Lightning-quick strip of Brunson in the open court after an inbounds pass, leading to De'Aaron Fox's layup that cut the deficit back to one and gave the Spurs a final heartbeat with 9 seconds remaining.",
          timeRemaining: "0:09",
          winProbabilityShift: -19,
        },
        {
          player: "Jalen Brunson",
          team: "NYK",
          description:
            "Hit both intentional-foul free throws with supreme composure after the Fox layup — 104-105, no room for error — sealing a one-point Knicks victory and denying Wembanyama a halfcourt miracle at the buzzer.",
          timeRemaining: "0:06",
          winProbabilityShift: 29,
        },
      ],
      narrative:
        "Game 1 of the 2026 NBA Finals will be dissected for decades. The Knicks looked in full control, riding Brunson's orchestration and Towns' interior dominance to a 12-point cushion with four minutes left — and then Wembanyama decided the night wasn't over. His 11-point personal eruption was as breathtaking a stretch as any player has produced on the Finals stage, compressing an entire comeback into three minutes of pure individual will. But Brunson, who has been forged in exactly these moments across his Knicks tenure, answered with the cold-blooded left-elbow pull-up that franchise legend is built on. Wembanyama's halfcourt heave caroming off the glass was the last image of a night that confirmed both players — and both franchises — belong at the very top of the league.",
    },
  ],
};