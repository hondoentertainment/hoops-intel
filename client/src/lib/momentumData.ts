// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 18, 2026
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
  date: "May 18, 2026",
  gameOfTheNight: "CLE-DET-20260517",
  topClutchPerformer: {
    player: "Donovan Mitchell",
    team: "CLE",
    clutchRating: 91,
    description:
      "After a brutal 6-of-20 collapse in Game 6 that nearly handed Detroit the series, Mitchell answered every whisper of doubt with 26 points, 8 assists, and zero turnovers in a Game 7 road blowout. His back-to-back midrange daggers to open the third quarter — the sequence that officially broke Detroit's spirit — underscored why Cleveland refused to go home without him firing.",
  },
  games: [
    {
      gameId: "CLE-DET-20260517",
      teams: { home: "DET", away: "CLE" },
      finalScore: { home: 94, away: 125 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description:
            "Detroit opened with crowd-fueled aggression, riding a 9-2 run to grab an early 16-9 lead. Cade Cunningham attacked the rim twice in succession, and Little Caesars Arena was shaking. For a brief, electric window, the Pistons looked like the team that had won Game 6 two nights earlier.",
          runScore: "9-2 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "notable",
        },
        {
          quarter: "Q1",
          timestamp: "0:38",
          description:
            "Cleveland answered Detroit's early surge with a suffocating 14-3 run to close the quarter. Evan Mobley anchored the response with two mid-range jumpers and a chase-down block that ricocheted into a Darius Garland transition layup. The Cavaliers ended the first quarter leading 23-19, and the energy inside the arena had already shifted.",
          runScore: "14-3 CLE",
          momentum: "away",
          keyPlayer: "Evan Mobley",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:51",
          description:
            "Sam Merrill detonated. Three consecutive three-pointers in a 97-second stretch — each colder and more audacious than the last — turned a 4-point Cleveland lead into a 15-point canyon. The bench erupted, Detroit's coach burned both timeouts, and Merrill calmly jogged back on defense each time as if he were shooting around in an empty gym.",
          runScore: "15-4 CLE",
          momentum: "away",
          keyPlayer: "Sam Merrill",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "9:14",
          description:
            "Donovan Mitchell opened the second half with back-to-back pull-up midrange jumpers on Cleveland's first two possessions, answering any lingering questions about his Game 6 ghost. The Cavaliers pushed their lead to 27, and Detroit's body language — slumped shoulders, broken defensive rotations — telegraphed what the final score would eventually confirm.",
          runScore: "12-3 CLE",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "7:00",
          description:
            "With the game long decided, Cleveland continued to execute flawlessly while Detroit's starters were pulled. Cade Cunningham — who had dominated this series through six games — sat on the bench in street clothes by the 7-minute mark, watching reserves play out the clock on what had been a miracle season. The 31-point final margin was a number Detroit will spend the entire summer trying to forget.",
          runScore: "18-9 CLE",
          momentum: "away",
          keyPlayer: "Evan Mobley",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative:
        "This was not a game — it was a coronation. Cleveland arrived at Little Caesars Arena in the business of erasing doubt, and they did so with a ruthlessness that made the 125-94 final look almost merciful. Evan Mobley was the structural backbone, Donovan Mitchell was the redemption arc, and Sam Merrill was the wildfire that burned Detroit's game plan to the ground in the second quarter. Cade Cunningham, who had carried this franchise on his back for six games and an entire franchise resurrection, went 5-of-16 and finished with a minus-32 that will haunt highlight reels for years. Cleveland punched their ticket to the Eastern Conference Finals, and they did it in a way that sent an unmistakable message to the waiting Knicks.",
    },
  ],
};