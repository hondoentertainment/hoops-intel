// Momentum Engine — Real-time narrative momentum shifts
// Last updated: June 11, 2026
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
  date: "June 11, 2026",
  gameOfTheNight: "SAS-NYK-20260611",
  topClutchPerformer: {
    player: "Victor Wembanyama",
    team: "San Antonio Spurs",
    clutchRating: 97,
    description:
      "Wembanyama was a closing force in the final four minutes — a go-ahead fadeaway jumper, a rim-rattling block on Brunson's drive, and two clutch free throws sealed Game 3. He finished +14 and authored the defining sequence of the 2026 NBA Finals so far.",
  },
  games: [
    {
      gameId: "SAS-NYK-20260611",
      teams: { home: "NYK", away: "SAS" },
      finalScore: { home: 111, away: 115 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:41",
          description:
            "Wembanyama opened MSG cold with back-to-back blocked shots and a transition dunk, igniting a 10-2 Spurs run that silenced the home crowd early. San Antonio pushed to a 9-point lead before New York steadied.",
          runScore: "10-2 SAS run — SAS 24, NYK 15",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "5:12",
          description:
            "Jalen Brunson engineered a fierce Knicks counter-surge, scoring 11 straight New York points across a two-minute stretch to flip the lead. MSG erupted as the Knicks closed the half up 57-54.",
          runScore: "14-4 NYK run — NYK 57, SAS 54",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:28",
          description:
            "De'Aaron Fox took over the third quarter with relentless mid-range attacks and two consecutive pull-up jumpers, sparking a 12-3 Spurs surge that erased New York's halftime lead and pushed San Antonio back in front by 8.",
          runScore: "12-3 SAS run — SAS 81, NYK 73",
          momentum: "away",
          keyPlayer: "De'Aaron Fox",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "7:15",
          description:
            "A thunderous Knicks crowd fueled a gritty New York rally — OG Anunoby hit two corner threes and Brunson converted a and-one to cut the deficit to 2. MSG was shaking as the Knicks threatened to complete the comeback.",
          runScore: "11-3 NYK run — NYK 102, SAS 104",
          momentum: "home",
          keyPlayer: "OG Anunoby",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "1:47",
          description:
            "Wembanyama imposed his will in the final two minutes — a contested post fadeaway pushed the lead to 4, and his rejection of Brunson's desperate floater ended New York's last real hope. Fox's subsequent free throws closed it out.",
          runScore: "7-2 SAS run — SAS 115, NYK 109",
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
            "Caught the ball on the left block with NYK down 2, rose over Isaiah Hartenstein with a one-legged fadeaway from 17 feet — pure silk — to push the Spurs lead to 4 with 1:47 remaining.",
          timeRemaining: "1:47",
          winProbabilityShift: 28,
        },
        {
          player: "Victor Wembanyama",
          team: "San Antonio Spurs",
          description:
            "Rotated from the weak side to swat Brunson's running floater off the glass with 58 seconds left, preserving a 4-point lead and functionally ending New York's comeback bid.",
          timeRemaining: "0:58",
          winProbabilityShift: 22,
        },
        {
          player: "Jalen Brunson",
          team: "New York Knicks",
          description:
            "Hit a spinning mid-range jumper over Castle to cut the deficit to 2 with 2:31 remaining, keeping MSG's hopes alive and forcing San Antonio into a timeout.",
          timeRemaining: "2:31",
          winProbabilityShift: -16,
        },
        {
          player: "De'Aaron Fox",
          team: "San Antonio Spurs",
          description:
            "Went 4-of-4 from the free throw line in the final 35 seconds to ice the game, executing perfectly under a deafening MSG crowd and sealing a pivotal Game 3 victory.",
          timeRemaining: "0:35",
          winProbabilityShift: 18,
        },
        {
          player: "OG Anunoby",
          team: "New York Knicks",
          description:
            "Drained a catch-and-shoot corner three from the right wing off a Brunson drive-and-kick to trim the deficit to 5 with 3:09 left, briefly reigniting the Garden's energy.",
          timeRemaining: "3:09",
          winProbabilityShift: -12,
        },
      ],
      narrative:
        "This was supposed to be New York's night — the Garden primed, Brunson locked in, the Knicks holding halftime lead in an NBA Finals game for the first time in a generation. Instead, it became the Victor Wembanyama Experience on the biggest stage in basketball. He didn't just beat the Knicks; he educated them, blocking their schemes, absorbing their punches, and delivering the dagger when MSG dared to dream. De'Aaron Fox's 26-point fourth-quarter presence gave San Antonio the mechanical engine while Wembanyama provided the soul, and together they pried open a 2-1 Finals lead that now puts New York in genuine danger. The Knicks must win Game 4 on Wednesday or face elimination pressure — and right now, no one has a real answer for the man from Saint-Quentin-en-Yvelines.",
    },
  ],
};