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
      "SGA authored a complete redemption arc in Game 2, orchestrating OKC's offense with ice-cold precision after his Game 1 struggles. His ability to find floater territory against Wembanyama — threading the needle between rim protection and pull-up range — neutralized San Antonio's most dangerous weapon and set the tone for a series-leveling statement win.",
  },
  games: [
    {
      gameId: "SAS-OKC-20260520",
      teams: { home: "OKC", away: "SAS" },
      finalScore: { home: 122, away: 113 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:12",
          description:
            "Wembanyama imposed his will early, stringing together back-to-back blocks and converting on the other end to give San Antonio a 7-point edge. Paycom Center fell briefly quiet as Spurs fans traveling loud found their voice. OKC looked tentative attacking the rim — a carryover from Game 1 ghosts.",
          runScore: "SAS 18–11",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "11:03",
          description:
            "SGA recalibrated the OKC attack entirely, abandoning rim attempts in favor of a relentless floater clinic in the middle of the lane. Three consecutive mid-range conversions over outstretched Wembanyama fingers ignited an 11-2 Thunder run and flipped the scoreboard. The adjustment was so surgical it felt like a halftime coaching tweak deployed eight minutes early.",
          runScore: "OKC 32–27",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "7:00",
          description:
            "Jalen Williams checked in for the first time since May 3, and Paycom Center erupted before he even touched the ball. Williams played seven fluid minutes — two assists, a pull-up jumper, one emphatic take-foul drawn — and visibly rattled San Antonio's defensive scheme, which had been calibrated for a two-man OKC operation. The psychological shift was instant and seismic.",
          runScore: "OKC 43–34",
          momentum: "home",
          keyPlayer: "Jalen Williams",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:28",
          description:
            "Tre Jones and Jeremy Sochan ripped off a 9-2 Spurs mini-run to cut the deficit to single digits, with Castle's two steals fueling transition buckets that hushed the Paycom crowd. San Antonio smelled a path back into the game and the Thunder's ball movement briefly devolved into hero-ball territory.",
          runScore: "SAS 71–78",
          momentum: "away",
          keyPlayer: "Stephon Castle",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "9:45",
          description:
            "Alex Caruso detonated any remaining Spurs hope with back-to-back threes off SGA drive-and-kicks, pushing OKC's lead to 16 and forcing San Antonio into desperate isolation ball. Caruso finished the night at +18 with 17 points on 5-of-7 shooting — the kind of bench performance that reshapes a series. The game was effectively over before the fourth quarter hit the eight-minute mark.",
          runScore: "OKC 102–86",
          momentum: "home",
          keyPlayer: "Alex Caruso",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative:
        "Game 2 of the WCF will be remembered in two chapters: the return of Jalen Williams and the reinvention of SGA as a floater assassin. Oklahoma City came into Paycom Center carrying the weight of a Game 1 collapse and answered with their most complete playoff performance of the season — seven players in double figures, a lockdown transition defense that turned Castle's nine turnovers into 14 fast-break points, and a tactical offensive overhaul that rendered Wembanyama's rim protection largely irrelevant. Wembanyama was genuinely brilliant in defeat — 21 points, 17 rebounds, 6 assists, 4 blocks — but brilliance wasn't enough when OKC's depth swallowed the Spurs whole. The series heads to San Antonio knotted at 1-1, and the defining question is no longer whether OKC can win without Williams — it's how dangerous this team becomes with him.",
    },
  ],
};