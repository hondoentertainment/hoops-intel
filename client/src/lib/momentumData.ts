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
      "Wembanyama was the axis around which both overtime periods rotated — scoring 11 of San Antonio's 17 OT points, grabbing 6 of his 24 rebounds in the extra frames, and defending SGA into a 1-of-6 shooting night in the fourth quarter and OT combined. In 49 suffocating minutes, he never flinched.",
  },
  games: [
    {
      gameId: "SAS-OKC-20260518",
      teams: { home: "OKC", away: "SAS" },
      finalScore: { home: 115, away: 122 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:41",
          description:
            "OKC stormed out with a 14-4 opening run, SGA and Jalen Williams attacking a Spurs defense still finding its footing without De'Aaron Fox. The Paycom Center crowd was already thundering at full roar.",
          runScore: "14-4 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:18",
          description:
            "Wembanyama single-handedly erased the deficit with a 16-5 Spurs surge — two rim-rattling dunks, a pull-up three over the outstretched hand of Chet Holmgren, and two consecutive blocked shots that ignited the San Antonio bench. The road crowd found its voice.",
          runScore: "16-5 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:55",
          description:
            "Dylan Harper's historic steal-and-score binge — three consecutive takeaways converted into fastbreak points — swung momentum violently toward San Antonio. OKC's halfcourt offense went stagnant for a five-minute stretch, mustering just 4 points as the Spurs pushed the lead to 11.",
          runScore: "15-4 SAS",
          momentum: "away",
          keyPlayer: "Dylan Harper",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "7:02",
          description:
            "Alex Caruso came off the bench and detonated — three consecutive three-pointers in under two minutes, slicing an 11-point Spurs lead to 2 and sending the Paycom Center into a frenzy. Caruso's 18-point fourth quarter alone felt like the performance of a lifetime.",
          runScore: "13-4 OKC",
          momentum: "home",
          keyPlayer: "Alex Caruso",
          impact: "game-changing",
        },
        {
          quarter: "OT2",
          timestamp: "1:28",
          description:
            "Wembanyama dropped back-to-back buckets in the final 90 seconds of the second overtime — a mid-post fadeaway over Holmgren and a thunderous put-back off his own miss — to seal the road victory and end OKC's unblemished postseason record.",
          runScore: "7-2 SAS",
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
            "With 34.1 seconds left in regulation and the game tied at 105, Wembanyama caught a lob at the short corner, pump-faked Holmgren into the air, and drew the foul — converting both free throws to give San Antonio a lead that OKC answered at the buzzer to force first overtime.",
          timeRemaining: "0:34 — 4Q",
          winProbabilityShift: 18,
        },
        {
          player: "Alex Caruso",
          team: "Oklahoma City Thunder",
          description:
            "Caruso drilled a corner three off a SGA drive-and-kick with 1:12 left in the first overtime to tie the game at 112 — his fifth three of the night and his most consequential, forcing a second extra period and keeping OKC's season alive.",
          timeRemaining: "1:12 — OT1",
          winProbabilityShift: 22,
        },
        {
          player: "Dylan Harper",
          team: "San Antonio Spurs",
          description:
            "Harper picked SGA's pocket at halfcourt with 3:04 left in the second overtime — his seventh steal of the game, tying the playoff record — and finished the and-one layup through contact to push the Spurs' lead to 5 and effectively end the Thunder's comeback hopes.",
          timeRemaining: "3:04 — OT2",
          winProbabilityShift: 31,
        },
        {
          player: "Stephon Castle",
          team: "San Antonio Spurs",
          description:
            "Castle calmly threaded a no-look bounce pass through three OKC defenders to a cutting Wembanyama for a dunk with 2:01 left in OT2, extending the lead to 7 and demonstrating the poise of a veteran in just his second playoff run.",
          timeRemaining: "2:01 — OT2",
          winProbabilityShift: 16,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "Oklahoma City Thunder",
          description:
            "SGA drove baseline and floated an impossible left-handed scoop over Wembanyama's 8-foot wingspan with 4:21 left in OT1 to pull OKC within one — a moment of elite improvisation that briefly suggested the Thunder would survive the night.",
          timeRemaining: "4:21 — OT1",
          winProbabilityShift: -14,
        },
      ],
      narrative:
        "This was not a basketball game — it was a referendum on generational greatness played out over 49 harrowing minutes in the loudest arena in the Western Conference. San Antonio arrived in Oklahoma City without their second-best player, faced the league's most complete team, fell behind by double digits in the first quarter, and still walked out of Paycom Center with the win because one 22-year-old alien refused to let them lose. Wembanyama's 41-24 line is the kind of stat that stops conversations cold, but the number that matters most is the one at the final buzzer: 122-115, Spurs. OKC's aura of postseason invincibility is gone. The WCF has a new story, and its author is 7-foot-4 and just getting started.",
    },
  ],
};