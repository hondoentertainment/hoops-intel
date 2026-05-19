// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 19, 2026
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
  date: "May 19, 2026",
  gameOfTheNight: "SAS-OKC-20260518",
  topClutchPerformer: {
    player: "Victor Wembanyama",
    team: "San Antonio Spurs",
    clutchRating: 99,
    description:
      "Wembanyama was simply from another dimension in 49 minutes of double-overtime warfare — 41 points, 24 rebounds, and a stranglehold on both extra periods that left OKC's sellout crowd in stunned silence. He scored or assisted on 14 of San Antonio's final 18 points across the two overtime frames, and his +16 plus-minus in a game where SGA finished -15 tells the whole story of who owned Paycom Center on Monday night.",
  },
  games: [
    {
      gameId: "SAS-OKC-20260518",
      teams: { home: "OKC", away: "SAS" },
      finalScore: { home: 115, away: 122 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:31",
          description:
            "OKC opened the game with an 11-2 blitz, riding SGA back-to-back pull-up jumpers and a Jalen Williams transition dunk to seize immediate home control. Paycom Center was electric and the Thunder looked every bit like the No. 1 seed that hadn't lost a playoff game all spring.",
          runScore: "11-2 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:14",
          description:
            "Wembanyama answered with a dominant seven-minute stretch that turned the game on its head — four blocks, a pair of mid-post scoring possessions, and two pull-up threes that silenced the crowd and swung the lead to San Antonio by nine. Dylan Harper added a pair of steals that converted directly into fastbreak layups, and suddenly the road team looked completely at home.",
          runScore: "18-4 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:02",
          description:
            "Alex Caruso came off the bench and detonated — four three-pointers in a six-minute span, igniting a 19-7 OKC run that clawed the deficit back to two and sent the building into a frenzy. Caruso's 18 third-quarter points were the most by any OKC reserve in franchise postseason history, and it felt like the Thunder's relentless depth was finally swallowing the shorthanded Spurs.",
          runScore: "19-7 OKC",
          momentum: "home",
          keyPlayer: "Alex Caruso",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:48",
          description:
            "Stephon Castle's back-breaking pull-up three with 2:48 remaining — his fourth clutch-time bucket of the fourth quarter — pushed San Antonio back ahead by five and forced OKC into a frantic foul-hunt. Castle's composure at 20 years old in a WCF road game was jaw-dropping, and his 11 assists showed a court vision that made San Antonio nearly impossible to guard.",
          runScore: "9-3 SAS",
          momentum: "away",
          keyPlayer: "Stephon Castle",
          impact: "significant",
        },
        {
          quarter: "OT2",
          timestamp: "1:10",
          description:
            "With the second overtime knotted at 113, Wembanyama caught a post feed, pump-faked Jalen Williams into the air, and drew the foul while converting the and-one — a three-point swing that gave San Antonio a lead they would never relinquish. His ensuing defensive possession, a contest that forced SGA into a desperate off-balance miss, sealed one of the most extraordinary individual playoff performances in modern NBA history.",
          runScore: "6-2 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Victor Wembanyama",
          team: "San Antonio Spurs",
          description:
            "And-one post conversion at 113-113 in the second overtime — caught, pump-fake, foul drawn, three-point play — giving San Antonio a lead they would protect through the final 70 seconds.",
          timeRemaining: "1:10 OT2",
          winProbabilityShift: 31,
        },
        {
          player: "Dylan Harper",
          team: "San Antonio Spurs",
          description:
            "Playoff-record-tying 7th steal of the game with 38 seconds left in OT1, intercepting a SGA entry pass and converting the fastbreak layup to tie the game at 108 and force a second overtime.",
          timeRemaining: "0:38 OT1",
          winProbabilityShift: 27,
        },
        {
          player: "Stephon Castle",
          team: "San Antonio Spurs",
          description:
            "Pull-up three off the dribble handoff — his fourth clutch-time score — to push the lead to five with under three minutes in regulation, forcing OKC to abandon their half-court sets and begin fouling.",
          timeRemaining: "2:48 Q4",
          winProbabilityShift: 22,
        },
        {
          player: "Alex Caruso",
          team: "Oklahoma City Thunder",
          description:
            "Back-to-back threes in the final minute of the third quarter to pull OKC within two — the second coming off a Wembanyama contest that Caruso released so quickly it was through the net before Wemby could fully elevate.",
          timeRemaining: "0:44 Q3",
          winProbabilityShift: -18,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "Oklahoma City Thunder",
          description:
            "Driving floater to tie the game at 108 with 12 seconds left in the first overtime, after shaking Dylan Harper on a hesitation crossover — temporarily making OKC's path to survival feel possible despite his brutal shooting night.",
          timeRemaining: "0:12 OT1",
          winProbabilityShift: -14,
        },
      ],
      narrative:
        "This was not a basketball game — it was a consecration. Victor Wembanyama walked into the loudest building in the Western Conference, stripped of his All-Star backcourt partner, and proceeded to author a 49-minute, double-overtime masterwork that will be replayed on highlight reels for a generation. OKC had every reason to win: home court, a fully healthy roster, and a postseason résumé built on 64 regular-season wins and zero playoff losses entering the night. What they didn't have was anyone capable of matching Wembanyama's combination of offensive creation and defensive annihilation — his 24 rebounds were a Conference Finals record for a center in the shot-clock era, and his command of both overtime periods felt less like a 22-year-old seizing a moment and more like a veteran erasing all doubt about who the next cornerstone of this league belongs to. Dylan Harper's record-tying steal performance and Stephon Castle's point-guard poise merely underlined the depth of what San Antonio has built; for OKC, Caruso's 31-point detonation and SGA's gutsy OT tying floater are footnotes to a night that belonged entirely to one alien in silver and black.",
    },
  ],
};