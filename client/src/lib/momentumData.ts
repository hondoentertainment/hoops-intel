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
      "Harden refused to let Cleveland's season slip away. Down nine with under four minutes left in regulation, he orchestrated the entire comeback — drawing fouls, making reads, and going a ruthless 11-of-14 from the line when the game was on the line. In overtime, he was the steadying force that Detroit simply had no answer for.",
  },
  games: [
    {
      gameId: "CLE-DET-20260513",
      teams: { home: "DET", away: "CLE" },
      finalScore: { home: 113, away: 117 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:32",
          description:
            "Cade Cunningham ignites Little Caesars Arena with back-to-back pull-up threes, putting Detroit up 18-9 and setting the tone with early aggression. The Pistons' crowd is electric and Cleveland looks flat off the jump.",
          runScore: "9-0 DET run",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:15",
          description:
            "Max Strus catches fire from deep, draining three consecutive corner threes to swing a 12-point deficit into a two-possession game. Cleveland's bench erupts and the Cavaliers suddenly look like a team that belongs on the floor.",
          runScore: "15-4 CLE run",
          momentum: "away",
          keyPlayer: "Max Strus",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:48",
          description:
            "Detroit reasserts control behind a ferocious Cunningham-led push, pushing the lead back to double digits. The Pistons are getting whatever they want in the midrange and Cleveland's defensive rotations are breaking down at the worst time.",
          runScore: "14-5 DET run",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:54",
          description:
            "James Harden engineers a stunning nine-point Cleveland comeback in under four minutes — attacking the rim, drawing fouls, and calmly converting free throws while Evan Mobley locks down Detroit's interior and erases two shots at the rim. The Cavaliers tie it at 107 with 38 seconds left and the building goes silent.",
          runScore: "12-3 CLE run",
          momentum: "away",
          keyPlayer: "James Harden",
          impact: "game-changing",
        },
        {
          quarter: "OT",
          timestamp: "1:10",
          description:
            "Cleveland outscores Detroit 10-6 in overtime as Harden and Mobley systematically dismantle the Pistons' half-court sets. Detroit, exhausted and turnover-prone, manages just 10 points in the extra period as the Cavaliers seize a 3-2 series lead.",
          runScore: "10-6 CLE in OT",
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
            "With Cleveland down 107-98 and 3:54 remaining, Harden draws a shooting foul on a step-back attempt and calmly knocks down both free throws — the first of a relentless string of trips to the line that fueled the entire comeback.",
          timeRemaining: "3:54 Q4",
          winProbabilityShift: 14,
        },
        {
          player: "Evan Mobley",
          team: "CLE",
          description:
            "Back-to-back chase-down block rejections in the final two minutes of regulation — first on Isaiah Stewart's drive, then a stunning swat of Cunningham's floater — preserving the tie and sending the building into stunned silence.",
          timeRemaining: "1:47 Q4",
          winProbabilityShift: 21,
        },
        {
          player: "Max Strus",
          team: "CLE",
          description:
            "With the score knotted at 107 in the final seconds of regulation, Strus sprinted into a corner catch-and-shoot opportunity but Detroit's closeout arrived in time — forcing overtime and setting the stage for Cleveland's clutch execution.",
          timeRemaining: "0:12 Q4",
          winProbabilityShift: 8,
        },
        {
          player: "Cade Cunningham",
          team: "DET",
          description:
            "A brilliant one-on-one isolation bucket against Darius Garland in overtime — Cunningham's 39th and final point — briefly cut the deficit to two and gave Detroit one last gasp, but the Cavaliers answered immediately on the other end.",
          timeRemaining: "2:08 OT",
          winProbabilityShift: -11,
        },
        {
          player: "James Harden",
          team: "CLE",
          description:
            "Harden seals the win by converting an and-one opportunity with 58 seconds left in overtime — his fourth and-one of the fourth quarter and overtime combined — pushing the lead to five and functionally ending Detroit's night.",
          timeRemaining: "0:58 OT",
          winProbabilityShift: 27,
        },
      ],
      narrative:
        "This game had everything a playoff series could ask for: a superstar going supernova in defeat, a veteran proving his clutch gene is very much intact, and a comeback so implausible it'll be replayed in Cleveland highlight reels for years. Cade Cunningham was transcendent — 39 points, 6 threes, 48 exhausting minutes — yet it still wasn't enough because James Harden decided the Cavaliers weren't done. Down nine with under four minutes left, Harden didn't panic; he simply worked the refs, worked the rim, and worked Detroit's defense into submission, going 11-of-14 from the stripe in the moments that mattered most. Evan Mobley's two consecutive blocks in the final two minutes were the defensive play of the playoffs so far, the kind of sequence that shifts a series. Cleveland heads home for Game 6 holding a 3-2 lead and the unmistakable feeling of a team that has found its identity at exactly the right time.",
    },
  ],
};