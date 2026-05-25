// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 25, 2026
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
  date: "May 25, 2026",
  gameOfTheNight: "OKC-SAS-20260524",
  topClutchPerformer: {
    player: "Victor Wembanyama",
    team: "SAS",
    clutchRating: 96,
    description: "Wembanyama didn't just produce a stat line — he bent the entire architecture of the game. His 31-point, 18-rebound, 5-block performance erased any memory of his Game 3 passivity and singlehandedly reset the psychological balance of the Western Conference Finals. Every Thunder possession felt like a negotiation with inevitability.",
  },
  games: [
    {
      gameId: "OKC-SAS-20260524",
      teams: { home: "SAS", away: "OKC" },
      finalScore: { home: 103, away: 82 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Wembanyama opens the game with back-to-back blocks on SGA drives, then converts on the other end with a turnaround mid-range. The Frost Bank Center erupts. San Antonio's switching scheme is suffocating Oklahoma City's early rhythm, and the message is unmistakable: this is not Game 3.",
          runScore: "14-6 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "8:51",
          description: "SGA strings together three consecutive pull-up jumpers over Keldon Johnson to cut the Spurs' lead to four, briefly flashing the offensive gravity that made OKC dangerous in Games 2 and 3. Without Jalen Williams, he's running the entire offense through one gear — but for three possessions, that gear looked unstoppable.",
          runScore: "28-24 SAS",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "2:14",
          description: "Stephon Castle, answering his Game 3 shooting collapse with physical aggression, draws three fouls in four minutes and converts a and-one layup to push San Antonio back out to a double-digit lead before halftime. The Thunder's foul trouble compounds their offensive stagnation, and Castle's redemption arc is officially underway.",
          runScore: "51-37 SAS",
          momentum: "home",
          keyPlayer: "Stephon Castle",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "6:30",
          description: "De'Aaron Fox, visibly sharper on the injured ankle than in Game 3, orchestrates a 12-2 Spurs run with three floaters and a silky pull-up that draws a foul. Oklahoma City calls timeout but finds no answers in the huddle. The Thunder's offense — which averaged 118 points in Games 2 and 3 — is completely unraveled by San Antonio's switching and length.",
          runScore: "72-49 SAS",
          momentum: "home",
          keyPlayer: "De'Aaron Fox",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "10:00",
          description: "With the game firmly in hand, Wembanyama logs two more rebounds and a chase-down block on a Thunder fastbreak to complete a dominant all-around effort. San Antonio's bench seals the final margin, and the Frost Bank Center basks in the largest victory of the 2026 postseason.",
          runScore: "103-82 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "San Antonio came into Game 4 carrying the weight of a blown lead and a dormant superstar, and they answered with the most complete performance of the 2026 postseason. Wembanyama was everywhere — erasing drives, collecting rebounds in traffic, and punishing Oklahoma City on the offensive end with a variety of looks that reminded the league why his ceiling feels untouched. Stephon Castle's aggression was the subplot that unlocked the floor: by forcing contact and drawing fouls, he gave San Antonio's spacing an edge OKC had no answer for. Without Jalen Williams to take pressure off SGA, the Thunder's offense became a one-man isolation exercise that Gregg Popovich's defense was built to contain. The Western Conference Finals now pivots to a best-of-three, with all the momentum — and the crowd — belonging to the Spurs.",
    },
  ],
};