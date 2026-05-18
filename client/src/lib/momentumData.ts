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
    player: "Evan Mobley",
    team: "CLE",
    clutchRating: 96,
    description: "Mobley was everywhere in Game 7 — a 21-point, 12-rebound, 6-assist masterpiece on 70% shooting that dismantled Detroit's last hopes systematically and without mercy. His +31 was the loudest number on the box score, but it was his composure, his switchability, and his willingness to initiate offense that truly broke the Pistons. This was the performance that announced Evan Mobley as a cornerstone of the next NBA dynasty.",
  },
  games: [
    {
      gameId: "CLE-DET-20260517",
      teams: { home: "DET", away: "CLE" },
      finalScore: { home: 94, away: 125 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:42",
          description: "Detroit opened hot with a 9-2 run capped by a Cade Cunningham mid-range jumper, silencing the early Cleveland chants and igniting Little Caesars Arena. The Pistons looked sharp, composed, and ready to defend home court one final time.",
          runScore: "DET 16–9",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "8:51",
          description: "Donovan Mitchell, responding to his Game 6 nightmare, erupted for 11 straight Cleveland points including back-to-back pull-up threes that completely erased Detroit's lead and flipped the emotional current of the building. The crowd went silent. The Cavs bench erupted.",
          runScore: "CLE 30–22",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "2:14",
          description: "Sam Merrill entered and immediately detonated — three consecutive corner threes in less than ninety seconds extended Cleveland's advantage to 18 at the half. Detroit's bench unit had no answer, and the deficit felt structurally insurmountable given Cleveland's defensive discipline.",
          runScore: "CLE 58–37",
          momentum: "away",
          keyPlayer: "Sam Merrill",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:30",
          description: "Detroit attempted a desperate third-quarter rally, cutting the lead to 14 on a pair of Ausar Thompson buckets and a Cunningham drive. The crowd found its voice again briefly — a fleeting, painful reminder of how close this series had been.",
          runScore: "DET 55–72",
          momentum: "home",
          keyPlayer: "Ausar Thompson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "1:05",
          description: "Evan Mobley authored the killing blow — a mid-post spin, a lob finish, and a chase-down block on Detroit's ensuing possession, all within forty seconds. The Pistons' shoulders visibly dropped. Cleveland's lead ballooned back to 25, and the game — the series — was over.",
          runScore: "CLE 92–63",
          momentum: "away",
          keyPlayer: "Evan Mobley",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "This was not a Game 7 — it was a coronation. Cleveland arrived at Little Caesars Arena with the collective memory of six brutal games and left with a 31-point road demolition that will echo through franchise history. Donovan Mitchell silenced every doubt with 26 points of surgical precision, but the story of the night was Evan Mobley conducting a complete two-way symphony that Detroit simply had no instrument to match. Sam Merrill's bench explosion in the second quarter was the dagger wrapped in a bow — five threes from the reserve who was barely on the radar entering the playoffs. Cade Cunningham's collapse, 5-of-16 with seven missed threes after a six-game tour de force, will haunt Detroit's offseason, but it cannot diminish what Cleveland built. The Cavaliers advance to face the rested Knicks, and they arrive carrying genuine title momentum.",
    },
  ],
};