// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 14, 2026
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
  date: "May 14, 2026",
  gameOfTheNight: "CLE-DET-20260513",
  topClutchPerformer: {
    player: "James Harden",
    team: "CLE",
    clutchRating: 94,
    description:
      "Harden was the cool hand that steadied Cleveland's ship when it was taking on water. Going 11-of-14 from the free-throw line and delivering 3 blocks in his 30-point masterpiece, he authored the key sequences of the fourth-quarter comeback and overtime push — proving his playoff resurrection is no fluke.",
  },
  games: [
    {
      gameId: "CLE-DET-20260513",
      teams: { home: "DET", away: "CLE" },
      finalScore: { home: 113, away: 117 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:22",
          description:
            "Cade Cunningham caught fire with back-to-back pull-up jumpers and a step-back three, igniting a 14-4 Detroit run that silenced the Cleveland bench and built an early double-digit cushion. The Pistons' home crowd erupted as Detroit's supporting cast briefly looked the part.",
          runScore: "14-4 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:45",
          description:
            "Max Strus answered a quiet Cleveland half with three consecutive three-pointers, slicing the deficit and forcing a Detroit timeout. Strus's shooting — 4-of-5 from deep at that point — began shifting the floor spacing calculus dramatically in Cleveland's favor.",
          runScore: "11-3 CLE",
          momentum: "away",
          keyPlayer: "Max Strus",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:51",
          description:
            "Detroit pushed the lead back to nine with a Cunningham-led burst — a driving floater, an and-one, and a feed to Ausar Thompson for a dunk. The arena felt like a celebration with Little Caesars Arena buzzing at full throttle. Cleveland's season teetered on the edge.",
          runScore: "10-2 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:14",
          description:
            "James Harden orchestrated a stunning 9-0 Cleveland run in the final 2:30 of regulation, including a step-back mid-range to tie the game at 107. The Pistons' supporting cast went stone cold — four straight missed field goal attempts — as Cleveland's veteran poise took over the building.",
          runScore: "9-0 CLE",
          momentum: "away",
          keyPlayer: "James Harden",
          impact: "game-changing",
        },
        {
          quarter: "OT",
          timestamp: "2:08",
          description:
            "Evan Mobley's emphatic put-back dunk off a Harden miss gave Cleveland a 4-point OT lead and broke Detroit's spirit. The Pistons managed just 10 points in the extra period as their legs and composure abandoned them simultaneously, and Cleveland closed it out with Harden free throws.",
          runScore: "8-2 CLE",
          momentum: "away",
          keyPlayer: "Evan Mobley",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "James Harden",
          team: "CLE",
          description:
            "Step-back mid-range jumper with 1:14 remaining in regulation tied the game at 107 and capped a personal 5-0 run, stunning a Little Caesars Arena crowd that had been celebrating seconds earlier.",
          timeRemaining: "1:14 Q4",
          winProbabilityShift: 31,
        },
        {
          player: "Cade Cunningham",
          team: "DET",
          description:
            "Driving and-one conversion with 3:20 left extended Detroit's lead to nine and appeared to be the dagger, briefly pushing Detroit's win probability to its peak of the evening.",
          timeRemaining: "3:20 Q4",
          winProbabilityShift: -24,
        },
        {
          player: "Max Strus",
          team: "CLE",
          description:
            "Corner three off a Harden drive-and-kick with 2:05 remaining in regulation cut Detroit's lead to four and drew a frantic Detroit timeout as the Cavaliers' shooters began finding rhythm.",
          timeRemaining: "2:05 Q4",
          winProbabilityShift: 18,
        },
        {
          player: "James Harden",
          team: "CLE",
          description:
            "Pair of clutch free throws with 38 seconds left in overtime sealed a 117-111 Cleveland lead, going 4-of-4 from the line in OT to personally outscore Detroit's entire team 6-10 in the extra period.",
          timeRemaining: "0:38 OT",
          winProbabilityShift: 22,
        },
        {
          player: "Evan Mobley",
          team: "CLE",
          description:
            "Thunderous put-back dunk with 2:08 left in OT gave Cleveland a 4-point lead and sent a wave of deflation through the Detroit bench — the decisive play of the overtime period.",
          timeRemaining: "2:08 OT",
          winProbabilityShift: 27,
        },
      ],
      narrative:
        "This was a game about two teams occupying completely different emotional universes for stretches of 48 minutes — and then Cleveland burning Detroit's universe to the ground in overtime. The Pistons had every reason to believe: home court, a nine-point lead with under four minutes to play, Cade Cunningham at his absolute transcendent best with 39 points and 9 assists across 48 minutes. But the Cavaliers never stopped trusting their system, and James Harden — the player everyone spent a decade doubting in moments exactly like this — was simply unshakeable. Detroit's supporting cast shooting 22-of-57 was the quiet catastrophe lurking beneath Cade's brilliance, and when the pressure peaked, those misses compounded into a collapse. Cleveland now controls the series 3-2, and Harden's playoff resurrection has officially become the story of this postseason.",
    },
  ],
};