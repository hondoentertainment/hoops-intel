// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 20, 2026
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
  date: "May 20, 2026",
  gameOfTheNight: "CLE-NYK-20260519",
  topClutchPerformer: {
    player: "Jalen Brunson",
    team: "NYK",
    clutchRating: 98,
    description:
      "Brunson authored one of the great clutch performances in Conference Finals history — 24 points in the fourth quarter and overtime alone, including back-to-back pull-up jumpers to ignite the comeback and a steal-and-layup that iced Cleveland for good in OT. With MSG shaking and the Knicks staring down a 22-point hole, he refused to let the deficit become a verdict.",
  },
  games: [
    {
      gameId: "CLE-NYK-20260519",
      teams: { home: "NYK", away: "CLE" },
      finalScore: { home: 115, away: 104 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:14",
          description:
            "Cleveland runs away from a competitive first quarter, stringing together a 17-4 burst fueled by transition buckets and three consecutive Knicks turnovers. The Cavaliers' defense smothered every Knicks ball-screen and the Garden crowd went eerily quiet. CLE led 51-32 at the peak of the run, setting the stage for what seemed like an impending blowout.",
          runScore: "17-4 CLE",
          momentum: "away",
          keyPlayer: "Darius Garland",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "8:02",
          description:
            "Cleveland extended its lead to 22 points on a Mobley tip-in to open the third, reaching the game's high-water mark at 75-53. The Cavaliers were operating at peak efficiency, converting 58% from the field and limiting New York to contested mid-range looks. MSG was half-empty in spirit if not in seats.",
          runScore: "8-2 CLE",
          momentum: "away",
          keyPlayer: "Evan Mobley",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:31",
          description:
            "Brunson erupted. Three consecutive scoring possessions — a step-back three, a floater, and a pull-up off the pick-and-roll — ignited the Knicks and reignited 19,812 fans who had never left. OG Anunoby's return gave New York a second perimeter weapon Cleveland had not game-planned for, and suddenly a 22-point lead looked fragile. The Knicks went on a 20-6 run to cut the deficit to single digits for the first time since the first quarter.",
          runScore: "20-6 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:17",
          description:
            "Anunoby converted back-to-back defensive possessions into transition points — a chase-down strip followed by a corner three off Brunson's drive-and-kick — to tie the game at 94. Cleveland called timeout but the crowd noise made communication impossible. The Cavaliers had now scored just 3 field goals in the final seven minutes of regulation.",
          runScore: "12-3 NYK",
          momentum: "home",
          keyPlayer: "OG Anunoby",
          impact: "game-changing",
        },
        {
          quarter: "OT",
          timestamp: "3:00",
          description:
            "New York outscored Cleveland 21-3 in overtime, completing the largest comeback in Conference Finals history. Brunson was unstoppable — three trips to the line, a mid-range dagger with 90 seconds left, and a steal that sealed it. Cleveland appeared emotionally spent after the late-game collapse and could not generate a single clean look against the Knicks' suddenly suffocating defense.",
          runScore: "21-3 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "NYK",
          description:
            "Step-back pull-up jumper from the elbow with the shot clock expiring, cutting the Cleveland lead to 7 with 4:22 left in regulation. The shot silenced every remaining doubt in the building and forced Cleveland into a desperate timeout.",
          timeRemaining: "4:22 Q4",
          winProbabilityShift: 14,
        },
        {
          player: "OG Anunoby",
          team: "NYK",
          description:
            "Corner three off a Brunson drive-and-kick tied the game at 94 with 2:05 remaining in regulation. Anunoby's first signature play since returning from injury, and the shot that confirmed MSG's belief that the impossible was happening.",
          timeRemaining: "2:05 Q4",
          winProbabilityShift: 22,
        },
        {
          player: "Jalen Brunson",
          team: "NYK",
          description:
            "Mid-range baseline jumper over a closing Mobley with 1:31 left in OT pushed the Knicks lead to 9 and effectively ended Cleveland's night. Brunson had scored 8 straight New York points in overtime at that point.",
          timeRemaining: "1:31 OT",
          winProbabilityShift: 31,
        },
        {
          player: "Jalen Brunson",
          team: "NYK",
          description:
            "Reach-in steal on a Garland isolation with 48 seconds left in OT, converting the takeaway into two free throws that made it an 11-point game and triggered Cleveland's bench to begin accepting the outcome.",
          timeRemaining: "0:48 OT",
          winProbabilityShift: 18,
        },
        {
          player: "Darius Garland",
          team: "CLE",
          description:
            "Garland's missed pull-up three with Cleveland trailing by 8 and 1:10 remaining in OT — after a strong drive that could have been a foul drawing attempt — proved to be Cleveland's last real chance to mount a counter-run. The shot came up short and the rebound went to New York.",
          timeRemaining: "1:10 OT",
          winProbabilityShift: -19,
        },
      ],
      narrative:
        "This was not a game — it was a resurrection. Cleveland came to Madison Square Garden and built a 22-point lead that felt, by every reasonable measure, insurmountable in a Conference Finals setting. Then Jalen Brunson decided that reasonable measures did not apply to him. His fourth-quarter eruption, amplified by OG Anunoby's emotionally charged return from injury, triggered a 44-11 run that swallowed the Cavaliers whole and left them scoreless for the final three minutes of regulation and most of overtime. The Garden did not just celebrate a win — it witnessed a moment, the kind that gets replayed at the start of championship documentaries. Cleveland now faces the most dangerous opponent in sports: a city that was almost broken and now believes it cannot be.",
    },
  ],
};