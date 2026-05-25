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
    clutchRating: 94,
    description: "Wembanyama didn't just play well — he suffocated a Thunder offense that had been on a two-game tear, posting 31 points, 18 rebounds, and 5 blocks while finishing a dominant +24. Every time Oklahoma City sniffed a run, Wembanyama was the wall that ended it.",
  },
  games: [
    {
      gameId: "OKC-SAS-20260524",
      teams: { home: "SAS", away: "OKC" },
      finalScore: { home: 103, away: 82 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:32",
          description: "Wembanyama opens the tone with back-to-back blocks on SGA — once at the rim, once from the mid-post — triggering a San Antonio fast break that pushes the lead to 9. The Frost Bank Center erupts and OKC's offense goes visibly hesitant.",
          runScore: "14-5",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:15",
          description: "SGA strings together seven consecutive points — a pull-up three, a floater, and a pair of free throws — to cut the San Antonio lead to four. Oklahoma City senses a lifeline as the Spurs' switching scheme briefly loses its shape.",
          runScore: "7-0",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "1:48",
          description: "Stephon Castle answers OKC's mini-run with an aggressive baseline drive, draws the foul, and converts the and-one. De'Aaron Fox follows with a pull-up jumper on the very next possession. The Spurs close the half on an 11-2 run, going into the break up 57-40 and functionally ending the game as a contest.",
          runScore: "11-2",
          momentum: "home",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:20",
          description: "Any residual Thunder hope dissolves when Wembanyama catches a lob, draws the foul mid-air, and completes the three-point play to push the lead to 22. The San Antonio bench erupts. Oklahoma City calls timeout but the body language tells the whole story — heads down, no fire.",
          runScore: "9-2",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "8:05",
          description: "With the outcome decided, San Antonio's reserves maintain the margin. OKC's bench unit briefly trims the deficit to 17 with a flurry of threes, but the Spurs' starters return briefly to re-establish the final margin and close out with composure.",
          runScore: "6-3",
          momentum: "home",
          keyPlayer: "De'Aaron Fox",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "This was a statement game that rewrote the entire series narrative in 48 minutes. San Antonio didn't just win — they dismantled the Thunder's offensive identity, holding them to 82 points, their lowest output of the 2026 postseason. Wembanyama was the gravitational center of everything: his blocks weren't simply defensive plays, they were psychological events that froze OKC's decision-making every time they approached the paint. Castle's redemption arc after his 1-of-8 nightmare in Game 3 added a crucial subplot, as his aggression and foul-drawing loosened the defense that Fox then exploited with pull-up precision. Without Jalen Williams as a secondary creator, SGA had nowhere to go when the Spurs' switching scheme closed every angle — and this Spurs team had no mercy in exploiting it. The Western Conference Finals is now a best-of-three, and suddenly it's Oklahoma City with the questions to answer.",
    },
  ],
};