// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 26, 2026
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
  date: "May 26, 2026",
  gameOfTheNight: "NYK-CLE-20260525",
  topClutchPerformer: {
    player: "Jalen Brunson",
    team: "NYK",
    clutchRating: 91,
    description: "Brunson rendered the word 'comeback' meaningless for Cleveland all series long. In Game 4 he was surgical from the opening tip — 38 points on a relentless diet of pull-up jumpers, floaters, and find-the-open-man passes that kept the Cavaliers' defense permanently off-balance. He never needed crunch time because he made sure there was no crunch time to be had.",
  },
  games: [
    {
      gameId: "NYK-CLE-20260525",
      teams: { home: "CLE", away: "NYK" },
      finalScore: { home: 93, away: 130 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:12",
          description: "Brunson opened the scoring with back-to-back pull-up mid-range jumpers and then threaded a no-look pass to Bridges for a corner three. New York raced out to a 14-4 lead before Cleveland could settle into its half-court offense, forcing a Kenny Atkinson timeout as the Knicks' defensive intensity visibly rattled the Cavaliers.",
          runScore: "14-4 NYK",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:44",
          description: "Donovan Mitchell answered with seven straight points — a stepback three, a pull-up mid-range, and a thunderous drive — trimming the deficit to single digits and briefly electrifying the Rocket Arena crowd. The Cavs' bench erupted and the building sensed a shift, but it would prove to be Cleveland's last real window of the night.",
          runScore: "28-22 NYK",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "1:58",
          description: "OG Anunoby suffocated Mitchell on three consecutive possessions, forcing two turnovers and a contested miss. Brunson converted both turnovers into fastbreak points and Hart hit a trailing three at the buzzer to send New York into halftime up 67-41. The 26-point halftime margin effectively ended any suspense for the second half.",
          runScore: "67-41 NYK",
          momentum: "away",
          keyPlayer: "OG Anunoby",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:31",
          description: "New York opened the third quarter on a 12-2 run, with Bridges hitting three consecutive jumpers and Anunoby adding a mid-range off a Mitchell turnover. The lead swelled to 38 points and Brunson checked out to a standing ovation from the traveling New York faithful who packed the upper deck in Cleveland.",
          runScore: "91-50 NYK",
          momentum: "away",
          keyPlayer: "Mikal Bridges",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "10:48",
          description: "With reserves taking over and the outcome long decided, Cleveland's bench players briefly trimmed the margin with a scrappy 11-4 run on pride points. It was cosmetic at best — a final score of 130-93 left no ambiguity about who the better team was across all four games of this series.",
          runScore: "100-80 NYK",
          momentum: "home",
          keyPlayer: "Ty Jerome",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "There was no fourth-quarter drama to dissect in Cleveland last night — only a coronation. The Knicks arrived at Rocket Arena with the calm of a team that had already solved the puzzle, and Jalen Brunson spent 48 minutes proving it. New York's defense, anchored by OG Anunoby's blanket coverage on Donovan Mitchell, transformed Cleveland's most dangerous weapon into a liability, and the Cavaliers' 26.8% three-point shooting across the series meant every half-court set felt like a slow leak. By the time the third-quarter horn sounded, the Knicks faithful in the upper deck were already chanting 'We Want Boston' — a declaration as much as a demand. The margin was 37 points. The message was louder.",
    },
  ],
};