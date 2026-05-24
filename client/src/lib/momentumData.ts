// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 24, 2026
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
  date: "May 24, 2026",
  gameOfTheNight: "NYK-CLE-20260523",
  topClutchPerformer: {
    player: "Mikal Bridges",
    team: "NYK",
    clutchRating: 91,
    description:
      "Bridges was a scalpel in a game that demanded a sledgehammer. His 73.3% shooting (11-of-15) dismantled Cleveland's defensive rotations systematically, and his back-breaking 9-0 personal run bridging the third and fourth quarters erased every flicker of a Cavaliers comeback. In a series where the Knicks needed surgical efficiency more than individual heroics, Bridges delivered both.",
  },
  games: [
    {
      gameId: "NYK-CLE-20260523",
      teams: { home: "CLE", away: "NYK" },
      finalScore: { home: 108, away: 121 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:31",
          description:
            "Jalen Brunson attacks a sagging Cavaliers zone with three consecutive mid-range pull-ups, capping a 12-2 Knicks opening run that silenced Rocket Arena inside the first four minutes. Cleveland's pick-and-roll coverage looked lost, and New York punished every seam.",
          runScore: "12-2 NYK",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:14",
          description:
            "Donovan Mitchell ignites a Cleveland answer with back-to-back pull-up threes and an and-one drive, fueling a 14-4 Cavaliers run that knotted the game at 38. The crowd roared back to life and it briefly looked like the home team had found a formula to disrupt New York's rhythm.",
          runScore: "14-4 CLE",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "1:58",
          description:
            "Landry Shamet drills consecutive corner threes off pinpoint Brunson kick-outs, and OG Anunoby converts a steal into a transition slam to push the Knicks back ahead by 11 at the half. Shamet's 10-point second-quarter burst off the bench was a gut punch Cleveland never fully recovered from.",
          runScore: "17-4 NYK",
          momentum: "away",
          keyPlayer: "Landry Shamet",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:47",
          description:
            "Evan Mobley strings together six straight points — a mid-post jumper, an offensive rebound putback, and a floater — trimming the deficit to 7 and forcing a Tom Thibodeau timeout. For two possessions, Cleveland's length problem felt solvable, and the building dared to believe.",
          runScore: "8-2 CLE",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "2:09",
          description:
            "Mikal Bridges answers the Mobley surge with a personal 9-0 run — a catch-and-shoot three, a pull-up two, a backdoor layup off a perfect Brunson lob — extending the lead back to 18 and draining every ounce of oxygen from the arena. The Cavaliers never got closer than 11 points the rest of the night.",
          runScore: "9-0 NYK",
          momentum: "away",
          keyPlayer: "Mikal Bridges",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative:
        "This was not a game decided by desperation heaves or last-second stops — it was decided by the Knicks' relentless, suffocating competence. New York executed Tom Thibodeau's game plan with the cold precision of a team that has no interest in allowing drama to enter the building, building their lead methodically through surgical ball movement and ferocious defensive rotations. Mikal Bridges was the quiet executioner, collecting his 22 points on barely 15 field-goal attempts while Cleveland scrambled to find an answer that simply did not exist. Donovan Mitchell's minus-22 encapsulates Cleveland's series in a single number — the Cavaliers' best player has been swallowed whole by a defense that has scouted every hesitation, every stepback angle, every isolation tendency. The Knicks stand one win from the NBA Finals, and nothing about Game 3 suggests Game 4 will be any different.",
    },
  ],
};