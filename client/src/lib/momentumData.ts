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
    team: "New York Knicks",
    clutchRating: 97,
    description:
      "Brunson authored the defining moment of Finals Game 1 — a cold-blooded 17-foot pull-up from the left elbow with 14 seconds left to push the lead to two, then sealed it at the stripe when the Spurs sent him intentionally. With Wembanyama's historic comeback threatening to swallow the Knicks whole, Brunson never flinched, finishing with 31 points and 9 assists in a one-possession classic.",
  },
  games: [
    {
      gameId: "NYK-SAS-20260605",
      teams: { home: "San Antonio Spurs", away: "New York Knicks" },
      finalScore: { home: 104, away: 105 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:42",
          description:
            "Brunson orchestrates a 9-2 Knicks run to open the game, knifing through San Antonio's drop coverage for back-to-back floaters to establish early control of pace and tempo.",
          runScore: "9-2 NYK",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "6:15",
          description:
            "Wembanyama flips the first-half script with a 13-4 Spurs surge — two rim-rattling alley-oops, a transition rejection, and a pull-up three from the logo that silences the Frost Bank Center crowd into reverent awe.",
          runScore: "13-4 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:30",
          description:
            "Karl-Anthony Towns takes over the third quarter on both ends, posting seven straight points on back-to-back mid-post jumpers and a baseline turnaround, while anchoring a zone look that forces three consecutive Spurs shot-clock violations.",
          runScore: "11-3 NYK",
          momentum: "away",
          keyPlayer: "Karl-Anthony Towns",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:05",
          description:
            "With the Knicks ahead 99-87, Wembanyama ignites the most electrifying individual stretch of the 2026 Finals — 11 unanswered Spurs points in under three minutes, including a step-back three over two defenders, a vicious put-back slam, and a finger-roll off the glass that pulls San Antonio within one at 99-100.",
          runScore: "11-0 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "0:14",
          description:
            "Brunson re-seizes control with a left-elbow pull-up over Wembanyama's outstretched seven-foot wingspan to restore a two-point cushion, a shot that will be replayed on highlight reels for a generation of Finals lore.",
          runScore: "4-2 NYK",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Victor Wembanyama",
          team: "San Antonio Spurs",
          description:
            "Step-back three over two Knicks defenders to cut the deficit to four — the shot that officially announced the comeback was real and not a blip.",
          timeRemaining: "3:58",
          winProbabilityShift: -28,
        },
        {
          player: "Jalen Brunson",
          team: "New York Knicks",
          description:
            "17-foot pull-up jumper from the left elbow over Wembanyama's contest — created off a jab-step isolation, fell through the net without touching the rim, and restored a two-point lead with 14 seconds on the clock.",
          timeRemaining: "0:14",
          winProbabilityShift: 41,
        },
        {
          player: "Stephon Castle",
          team: "San Antonio Spurs",
          description:
            "Full-length-of-the-arm strip of Brunson in transition immediately following the pull-up, creating a live-ball scramble that gave the Spurs one last lifeline.",
          timeRemaining: "0:11",
          winProbabilityShift: -19,
        },
        {
          player: "De'Aaron Fox",
          team: "San Antonio Spurs",
          description:
            "Composed push-shot layup off the Castle strip to pull within one — put 104-105 on the board and forced the Knicks into an intentional-foul decision.",
          timeRemaining: "0:09",
          winProbabilityShift: -14,
        },
        {
          player: "Jalen Brunson",
          team: "New York Knicks",
          description:
            "Sank both intentional-foul free throws under the highest-pressure conditions imaginable, effectively icing Game 1 and leaving Wembanyama's desperate halfcourt heave as the Spurs' only remaining prayer.",
          timeRemaining: "0:07",
          winProbabilityShift: 38,
        },
      ],
      narrative:
        "Game 1 of the 2026 NBA Finals was a living, breathing argument for why basketball is the sport of the human spirit — messy, brilliant, and utterly resistant to narrative control. The Knicks looked composed and in command for three-and-a-half quarters before Wembanyama decided the laws of probability did not apply to him, turning an 87-99 deficit into a one-possession thriller through sheer extraterrestrial will. But Brunson — calm as a Tuesday practice — reached back for the kind of pull-up that separates good players from franchise cornerstones, dropping it through the net as if the moment weighed nothing. The final 14 seconds were a fire drill: a strip, a layup, two pressure free throws, and a halfcourt heave off the backboard glass, all compressed into an exhale that left San Antonio stunned and New York clinging to a 1-0 series lead. If Game 1 is any preview, this Finals will be remembered long after the final buzzer of Game 7 — whenever that may come.",
    },
  ],
};