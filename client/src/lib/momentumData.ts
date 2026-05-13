// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 13, 2026
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
  date: "May 13, 2026",
  gameOfTheNight: "MIN-SAS-20260512",
  topClutchPerformer: {
    player: "Victor Wembanyama",
    team: "San Antonio Spurs",
    clutchRating: 94,
    description:
      "Wembanyama authored the most emphatic personal redemption arc of the 2026 playoffs — turning a Game 4 ejection into a 27-point, 17-rebound, 3-block masterpiece that suffocated Minnesota's offense and gave San Antonio a 3-2 series lead. His +24 plus/minus was the loudest stat on the sheet.",
  },
  games: [
    {
      gameId: "MIN-SAS-20260512",
      teams: { home: "San Antonio Spurs", away: "Minnesota Timberwolves" },
      finalScore: { home: 126, away: 97 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:31",
          description:
            "Wembanyama opened the scoring with back-to-back mid-range jumpers, then swatted a Rudy Gobert put-back attempt into the third row. The Frost Bank Center crowd ignited immediately — the message from the Spurs' franchise centerpiece was unmistakable after his Game 4 ejection.",
          runScore: "14-6 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:14",
          description:
            "Keldon Johnson exploded off the bench with 9 unanswered points in under two minutes — a corner three, a transition dunk off a Wembanyama block outlet, and a pull-up mid-range — turning a manageable 8-point Spurs lead into a suffocating 17-point advantage. Minnesota called timeout but had no answer.",
          runScore: "42-25 SAS",
          momentum: "home",
          keyPlayer: "Keldon Johnson",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "1:58",
          description:
            "Anthony Edwards strung together 7 straight points — a step-back three and two aggressive drives — to briefly remind the building that Minnesota's engine was still running. The Wolves trimmed the lead to 13 heading into halftime, offering a faint pulse.",
          runScore: "49-36 SAS",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "5:50",
          description:
            "Stephon Castle orchestrated a 16-4 third-quarter blitz in six minutes of game time — dishing three assists, scoring 7 himself, and converting two consecutive steals into fast-break layups. Julius Randle picked up his fourth foul trying to keep pace, and Minnesota's offense fractured completely. The lead ballooned to 29 and the series outcome felt inevitable.",
          runScore: "79-50 SAS",
          momentum: "home",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:02",
          description:
            "With reserves on the floor and the game already decided, Dylan Harper rattled off 8 points on efficient shooting to post his double-double, cementing the depth advantage San Antonio has built across this series. Eight Spurs in double figures underscored that this roster requires no single hero — only Wembanyama leading the way.",
          runScore: "110-76 SAS",
          momentum: "home",
          keyPlayer: "Dylan Harper",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative:
        "This was never a game — it was a statement. Victor Wembanyama treated Game 5 as personal penance for his Game 4 ejection, delivering 27 points, 17 rebounds, and 3 blocks with the composure of a ten-year veteran and zero technical fouls. The supporting cast piled on in waves: Keldon Johnson's second-quarter eruption cracked Minnesota's spirit, Stephon Castle's third-quarter blitz buried it, and eight Spurs in double figures ensured there was no path back. Anthony Edwards' 20 points on 6-of-13 shooting represented Minnesota's ceiling on a night their role players were invisible and Julius Randle's -22 encapsulated a team running on fumes. San Antonio travels to Target Center for Game 6 holding a 3-2 series lead — and the psychological edge couldn't be larger.",
    },
  ],
};