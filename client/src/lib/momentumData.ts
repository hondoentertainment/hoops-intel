// Momentum Engine — Real-time narrative momentum shifts
// Last updated: June 9, 2026
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
  date: "June 9, 2026",
  gameOfTheNight: "SAS-NYK-20260608",
  topClutchPerformer: {
    player: "De'Aaron Fox",
    team: "San Antonio Spurs",
    clutchRating: 94,
    description:
      "Fox was ice in the fourth quarter at the most hostile arena in basketball. Four decisive conversions — a pull-up mid-range, two free throws under full MSG pressure, and a dagger floater with 1:24 remaining — accounted for 9 of his 26 points in the final frame. The Knicks had no answer for his burst off the pick-and-roll when it mattered most.",
  },
  games: [
    {
      gameId: "SAS-NYK-20260608",
      teams: { home: "NYK", away: "SAS" },
      finalScore: { home: 111, away: 115 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:31",
          description:
            "Wembanyama opens the night like a man possessed — back-to-back blocks ignite a Spurs 11-2 run that silences MSG early. His third-straight tip-in off a Keldon Johnson miss pushes San Antonio ahead by nine and sends a clear message to the sellout crowd.",
          runScore: "11-2 SAS run",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:15",
          description:
            "Jalen Brunson takes over the second quarter, drilling three consecutive jumpers and orchestrating a 14-4 Knicks response. The Garden erupts as New York claws back to tie it at 38 — Brunson's footwork in the mid-post forcing Wembanyama into two early second-quarter foul concerns that briefly pulled him to the bench.",
          runScore: "14-4 NYK run",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:44",
          description:
            "The Spurs reassert control coming out of halftime. A Jeremy Sochan corner three and a Wembanyama turnaround jumper over two defenders spark a 13-5 third-quarter burst. San Antonio leads 82-72 and the Castle-Wemby two-man defensive scheme begins visibly disrupting Brunson's rhythm, forcing him into four straight rushed shots.",
          runScore: "13-5 SAS run",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:02",
          description:
            "New York refuses to fold. OG Anunoby and Julius Randle combine for 10 straight Knicks points to trim the deficit to three, 95-92, and MSG reaches a fever pitch not seen since the conference finals. The Spurs call timeout and the building is shaking.",
          runScore: "10-2 NYK run",
          momentum: "home",
          keyPlayer: "OG Anunoby",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "1:24",
          description:
            "Fox buries a floater over Randle to make it 112-107 with 1:24 left — the dagger. The Knicks' final possession ends in a Brunson forced stepback that rattles out, and San Antonio runs the clock to seal a four-point road victory in the NBA Finals.",
          runScore: "7-2 SAS run",
          momentum: "away",
          keyPlayer: "De'Aaron Fox",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "De'Aaron Fox",
          team: "San Antonio Spurs",
          description:
            "Pull-up mid-range jumper over Brunson off a Fox-Wembanyama pick-and-roll — breaks a 95-95 tie and restores the Spurs' lead for good.",
          timeRemaining: "5:17",
          winProbabilityShift: 14,
        },
        {
          player: "De'Aaron Fox",
          team: "San Antonio Spurs",
          description:
            "Draws contact on a drive against Randle, sinks both free throws in front of a deafening MSG crowd to push the lead to five.",
          timeRemaining: "3:08",
          winProbabilityShift: 11,
        },
        {
          player: "Jalen Brunson",
          team: "New York Knicks",
          description:
            "Brunson converts a tough and-one layup through Wembanyama's contest to cut it to two — the Garden's loudest moment of the night.",
          timeRemaining: "2:44",
          winProbabilityShift: -9,
        },
        {
          player: "Victor Wembanyama",
          team: "San Antonio Spurs",
          description:
            "Wembanyama swats Randle's potential game-tying drive attempt into the third row — a defining block that all but ends New York's comeback.",
          timeRemaining: "2:01",
          winProbabilityShift: 18,
        },
        {
          player: "De'Aaron Fox",
          team: "San Antonio Spurs",
          description:
            "The dagger floater — Fox splits two defenders and rolls it off the glass, 112-107 — putting the game on ice with 1:24 remaining.",
          timeRemaining: "1:24",
          winProbabilityShift: 22,
        },
      ],
      narrative:
        "Game 3 of the 2026 NBA Finals had everything Madison Square Garden could conjure — and it still wasn't enough. Victor Wembanyama delivered the most complete postseason performance of his young career, 38 and 14 with five blocks, leaving broadcasters searching for historical comparisons before the fourth quarter was even over. Jalen Brunson's 29 points kept the Knicks alive and twice swung the momentum back to the home crowd, but the Castle-Wembanyama defensive scheme neutralized his best stretches at the worst possible moments. When Fox took over down the stretch, it was a reminder that San Antonio doesn't just have the best player in this series — they have depth of execution the Knicks can't match. The Spurs leave New York with a 2-1 series lead and the quiet confidence of a team that just won in the building they weren't supposed to win in.",
    },
  ],
};