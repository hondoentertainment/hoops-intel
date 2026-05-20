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
    team: "New York Knicks",
    clutchRating: 98,
    description:
      "Brunson was supernatural when it mattered most — scoring 24 of his 38 points in the fourth quarter and overtime alone, personally orchestrating a 44-11 run that erased a 22-point deficit and rewrote Conference Finals history. His pull-up mid-range jumpers, back-to-back drives through Cleveland's collapsing defense, and ice-blooded free-throw shooting in OT were the acts of a player fully immune to pressure.",
  },
  games: [
    {
      gameId: "CLE-NYK-20260519",
      teams: { home: "NYK", away: "CLE" },
      finalScore: { home: 115, away: 104 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:12",
          description:
            "Cleveland raced out of the gate with relentless transition offense and suffocating half-court defense, building an early 18-8 lead and silencing a typically raucous MSG crowd before Brunson could find any rhythm.",
          runScore: "18-8 CLE",
          momentum: "away",
          keyPlayer: "Darius Garland",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "2:47",
          description:
            "The Cavaliers extended their dominance through a second quarter that was essentially a clinic — ball movement, offensive rebounding, and an 11-2 closing run sent Cleveland into the locker room with a commanding 22-point halftime cushion and New York looking completely overwhelmed.",
          runScore: "61-39 CLE",
          momentum: "away",
          keyPlayer: "Evan Mobley",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:31",
          description:
            "Brunson erupted. Back-to-back mid-range daggers, a pull-up three, and two forced-and-converted free throw sequences ignited the Garden and sparked what would become a historic 44-11 New York run — the crowd noise registering as a physical force as Cleveland's lead began bleeding out in real time.",
          runScore: "79-73 NYK run in progress",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:08",
          description:
            "OG Anunoby, playing in his first postseason game since his injury, delivered a dagger corner three off a Brunson drive-and-kick that tied the game at 93 and officially completed one of the most stunning collapses in Conference Finals history, sending MSG into an all-out delirium.",
          runScore: "93-93 TIED",
          momentum: "home",
          keyPlayer: "OG Anunoby",
          impact: "game-changing",
        },
        {
          quarter: "OT",
          timestamp: "3:22",
          description:
            "Cleveland went ice cold in overtime — scoring just 3 points on 1-of-9 shooting — while Brunson and Anunoby methodically dismantled whatever resolve the Cavaliers had left, turning a breathless tie game into a comfortable 11-point final margin that felt like a knockout blow.",
          runScore: "115-104 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "New York Knicks",
          description:
            "Brunson hit a step-back mid-range jumper over Garland with 3:44 left in regulation to cut the deficit to 6 — the shot that convinced MSG the comeback was real and triggered a full-building belief shift.",
          timeRemaining: "3:44 Q4",
          winProbabilityShift: 18,
        },
        {
          player: "Jalen Brunson",
          team: "New York Knicks",
          description:
            "Drove baseline on Mitchell Robinson's screen, absorbed contact from Mobley, and converted the and-one to tie the game at 88 with 2:11 remaining — MSG erupted so loudly play was temporarily delayed.",
          timeRemaining: "2:11 Q4",
          winProbabilityShift: 24,
        },
        {
          player: "OG Anunoby",
          team: "New York Knicks",
          description:
            "Catch-and-shoot corner three off a Brunson penetration kick — perfectly placed over a late-closing defender — tied the game at 93 and sent the game to overtime, completing the largest comeback in ECF history.",
          timeRemaining: "1:08 Q4",
          winProbabilityShift: 31,
        },
        {
          player: "Darius Garland",
          team: "Cleveland Cavaliers",
          description:
            "Garland converted a tough floater in OT to cut the Knicks lead to 2 with 2:55 remaining — the Cavaliers' last genuine attempt to re-seize control before the game slipped permanently away.",
          timeRemaining: "2:55 OT",
          winProbabilityShift: -11,
        },
        {
          player: "Jalen Brunson",
          team: "New York Knicks",
          description:
            "Two clutch free throws with 1:44 left in OT pushed the Knicks lead to 6 and effectively ended Cleveland's comeback attempt — Brunson burying both with the calm of a player who had already done the impossible once that night.",
          timeRemaining: "1:44 OT",
          winProbabilityShift: 22,
        },
      ],
      narrative:
        "This was not a basketball game — it was a conversion. For three quarters, Cleveland was the better team by every measurable standard, and Madison Square Garden sat in stunned, uncomfortable silence as a 22-point deficit ballooned into what looked like a series-opening statement from the Cavaliers. Then Jalen Brunson decided the story needed a different ending. What followed was 12 minutes of the purest clutch basketball the Conference Finals has seen in years — a 44-11 run fueled by Brunson's supernatural shot-making, OG Anunoby's triumphant return from injury, and a crowd that went from funeral-quiet to deafening within the span of four possessions. Cleveland's overtime collapse — 3 points, 1-of-9 shooting, no answers — wasn't just a loss; it was a psychological wound that the Cavaliers will carry into Game 2 on Thursday, facing a Knicks team that now knows, with absolute certainty, that no deficit is too large at MSG.",
    },
  ],
};