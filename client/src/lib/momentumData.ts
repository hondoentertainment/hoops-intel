// Momentum Engine — Real-time narrative momentum shifts
// Last updated: June 9, 2026
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
  date: "June 9, 2026",
  gameOfTheNight: "SAS-NYK-20260608",
  topClutchPerformer: {
    player: "De'Aaron Fox",
    team: "San Antonio Spurs",
    clutchRating: 94,
    description:
      "Fox authored the night's most decisive closing statement — four consecutive fourth-quarter conversions that suffocated every Knicks rally attempt. With the game hanging in the balance and MSG rattling, he scored 14 of his 26 points in the final frame, converting tough mid-range pull-ups and attacking closeouts without hesitation. His composure in the building loudest against him was the difference between a tied series and a commanding 2-1 Spurs lead.",
  },
  games: [
    {
      gameId: "SAS-NYK-20260608",
      teams: { home: "NYK", away: "SAS" },
      finalScore: { home: 111, away: 115 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:12",
          description:
            "Wembanyama opens the night with back-to-back blocks and a fast-break dunk, igniting a 12-2 Spurs run that empties the Knicks' early defensive game plan. MSG goes quiet for the first time all postseason.",
          runScore: "18-8 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:44",
          description:
            "Brunson orchestrates a methodical 15-4 Knicks counter — seven assists, two personal buckets — clawing New York back into contention and whipping the Madison Square Garden crowd into a full-throated roar.",
          runScore: "38-34 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:30",
          description:
            "Wembanyama re-asserts Spurs dominance with a monstrous three-possession stretch — a turnaround fadeaway, a pull-up three from the logo, and a chase-down block on OG Anunoby's breakaway — triggering a 10-2 San Antonio run and silencing the Garden's halftime energy.",
          runScore: "71-64 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:01",
          description:
            "New York trims the deficit to three on a Brunson floater and a Hartenstein and-one. MSG erupts. The Knicks sense their first Finals home win. The Spurs' lead is the narrowest it has been since the first quarter.",
          runScore: "100-103 SAS",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "2:18",
          description:
            "Fox takes over completely — back-to-back pull-up mid-rangers on consecutive possessions push the Spurs lead back to seven, breaking the Knicks' psychological hold on the rally and closing the door on New York's best comeback opportunity of the series.",
          runScore: "104-111 SAS",
          momentum: "away",
          keyPlayer: "De'Aaron Fox",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "De'Aaron Fox",
          team: "San Antonio Spurs",
          description:
            "Isolated against Brunson at the top of the key with 2:18 remaining and the Spurs clinging to a three-point lead, Fox pump-faked, drew the foul, and converted both free throws — then immediately hit a step-back pull-up on the ensuing possession to push the lead to seven and effectively end New York's night.",
          timeRemaining: "2:18",
          winProbabilityShift: 31,
        },
        {
          player: "Victor Wembanyama",
          team: "San Antonio Spurs",
          description:
            "With the Knicks at the free-throw line trailing by five and needing a stop, Wembanyama swatted Miles McBride's driving layup attempt out of bounds off the glass — his fifth block of the game — and then converted a 19-foot fallaway on the other end to push the lead to seven with 1:44 left.",
          timeRemaining: "1:44",
          winProbabilityShift: 22,
        },
        {
          player: "Jalen Brunson",
          team: "New York Knicks",
          description:
            "Brunson drained a contested step-back three over Devin Vassell to cut the Spurs' lead to three with 3:40 remaining, triggering a full MSG timeout and briefly making San Antonio's coaching staff reconsider their defensive scheme. The basket represented the closest New York would get in the final period.",
          timeRemaining: "3:40",
          winProbabilityShift: -17,
        },
        {
          player: "De'Aaron Fox",
          team: "San Antonio Spurs",
          description:
            "Fox threaded a no-look bounce pass through two Knicks defenders to find Wembanyama cutting baseline for a dunk — a play so instinctive it drew gasps even from the hostile MSG crowd — extending the lead to five with 4:55 left and giving the Spurs their cushion back at the moment New York needed a stop most.",
          timeRemaining: "4:55",
          winProbabilityShift: 18,
        },
      ],
      narrative:
        "Game 3 of the 2026 NBA Finals was everything the neutral fan craved and everything the Knicks feared — a performance by Victor Wembanyama so complete, so suffocating, that New York's best player could only chip at the margins. Brunson's 29 points were a testament to his will, but the 10-of-24 shooting line tells the real story of what Castle and Wembanyama's coordinated coverage took away from him. The Spurs executed their game plan with surgical precision: let New York dream through three quarters, then let Fox and Wemby remind everyone why San Antonio entered the Finals as the prohibitive favorite. The 62-win Spurs now hold a 2-1 series lead heading back to MSG for Game 4 on Wednesday, and the Knicks must win or face an insurmountable hill.",
    },
  ],
};