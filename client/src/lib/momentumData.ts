// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 11, 2026
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
  date: "May 11, 2026",
  gameOfTheNight: "SAS-MIN-20260510",
  topClutchPerformer: {
    player: "Anthony Edwards",
    team: "MIN",
    clutchRating: 97,
    description:
      "With the series knotted and Wembanyama gone, Edwards willed Minnesota to a win with 16 fourth-quarter points — including back-to-back buckets to break a tie with 3:20 remaining. He finished 36-6 on 13-of-22 and dedicated every point to his late mother.",
  },
  games: [
    {
      gameId: "NYK-PHI-20260510",
      teams: { home: "PHI", away: "NYK" },
      finalScore: { home: 114, away: 144 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:41 remaining",
          description:
            "Miles McBride drains his fourth three-pointer of the quarter as the Knicks go on an 11-0 run. New York has already hit 11 threes in the first quarter — a postseason record — and Philadelphia's defense looks shattered.",
          runScore: "11-0 NYK",
          momentum: "away",
          keyPlayer: "Miles McBride",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "6:02 remaining",
          description:
            "Joel Embiid converts back-to-back mid-range jumpers and the Wells Fargo crowd briefly stirs, trimming the deficit to 14. Philadelphia shows a pulse for the only time all night.",
          runScore: "7-2 PHI",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "1:28 remaining",
          description:
            "Jalen Brunson answers immediately with a stepback three and an assist to Karl-Anthony Towns for a corner three, extending the lead back to 22 at the half. The brief Philly flicker is extinguished entirely.",
          runScore: "9-2 NYK",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:55 remaining",
          description:
            "McBride hits consecutive threes 40 seconds apart to push the lead to 35. Paul George hasn't scored and his body language has gone completely dark — the arena is already half-empty.",
          runScore: "12-3 NYK",
          momentum: "away",
          keyPlayer: "Miles McBride",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "8:00 remaining",
          description:
            "Bench units take over with the game decided. Embiid finishes an 8-of-8 shooting night but it registers as nothing more than a footnote in a historic blowout. The Knicks tie the NBA postseason record with their 25th three-pointer.",
          runScore: "Final run: 18-8 NYK",
          momentum: "away",
          keyPlayer: "Karl-Anthony Towns",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative:
        "There was no drama here — only demolition. From the moment McBride's fourth triple rattled in at the end of the first quarter, the only question was how historic the margin would become. New York matched the all-time postseason record with 25 made threes, and Philadelphia's +35 Paul George experiment ended in silence. Joel Embiid shot a flawless 8-of-8 in a game that never mattered, a stat line that somehow made the loss feel lonelier. The Knicks didn't just sweep the Sixers — they erased them.",
    },
    {
      gameId: "SAS-MIN-20260510",
      teams: { home: "MIN", away: "SAS" },
      finalScore: { home: 114, away: 109 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:12 remaining",
          description:
            "Victor Wembanyama is assessed a flagrant-2 foul and ejected after just 12 minutes of play. The 7-foot-4 centerpiece of San Antonio's season walks to the tunnel with 4 points and 4 rebounds, and the entire Target Center crowd rises — sensing blood in the water.",
          runScore: "N/A — momentum shift via ejection",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "7:33 remaining",
          description:
            "Dylan Harper — the rookie — steps into the vacuum and goes on a personal 8-2 run, hitting three consecutive mid-range jumpers with a poise that belies his age. San Antonio refuses to fold, and suddenly the Spurs lead by 7 despite losing their best player.",
          runScore: "8-2 SAS",
          momentum: "away",
          keyPlayer: "Dylan Harper",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:18 remaining",
          description:
            "Anthony Edwards erupts for 8 straight Minnesota points — a pull-up three, a hammer dunk, and a floater — to swing a 6-point deficit into a 2-point Wolves lead. The crowd at Target Center is shaking. Edwards is locked in, and everyone in the building can feel it.",
          runScore: "10-2 MIN",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:44 remaining",
          description:
            "De'Aaron Fox and Stephon Castle combine for 7 straight Spurs points to knot the game at 96. San Antonio's collective resilience — playing without their franchise cornerstone — is becoming one of the stories of this playoff run.",
          runScore: "7-2 SAS",
          momentum: "away",
          keyPlayer: "De'Aaron Fox",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:20 remaining",
          description:
            "Edwards scores back-to-back buckets out of a timeout — a mid-range pull-up, then a coast-to-coast finish through contact — to break a tie and put Minnesota up 4. This is the decisive swing. He is playing on a different plane and the Spurs have no answer.",
          runScore: "6-1 MIN",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Anthony Edwards",
          team: "MIN",
          description:
            "Pull-up mid-range jumper off the dribble to break a 96-96 tie — the shot that decisively shifted the game, delivered with ice in his veins and a crowd roaring behind him.",
          timeRemaining: "3:20",
          winProbabilityShift: 28,
        },
        {
          player: "Anthony Edwards",
          team: "MIN",
          description:
            "Coast-to-coast drive through contact for the and-one, extending the lead to 5 and functionally sealing the game. Edwards screamed toward the rafters — the crowd erupted.",
          timeRemaining: "3:04",
          winProbabilityShift: 19,
        },
        {
          player: "Dylan Harper",
          team: "SAS",
          description:
            "Step-back three-pointer cuts the Minnesota lead to 2 with 1:44 left, refusing to let San Antonio die quietly. A stunning moment for a rookie on the road in a must-win game.",
          timeRemaining: "1:44",
          winProbabilityShift: -14,
        },
        {
          player: "De'Aaron Fox",
          team: "SAS",
          description:
            "Drives baseline for a layup to make it a 1-possession game with 58 seconds left. Last genuine Spurs lifeline — Minnesota's free throws would close the door.",
          timeRemaining: "0:58",
          winProbabilityShift: -9,
        },
      ],
      narrative:
        "Wembanyama's ejection rewrote the entire script, but the Spurs didn't blink — Dylan Harper and De'Aaron Fox spent three quarters proving San Antonio was more than one man. Then Anthony Edwards reminded everyone why he is the most electrifying player on the planet, pouring in 16 fourth-quarter points in a performance he dedicated to his late mother. The moment he screamed at the Target Center crowd after the and-one — arms wide, eyes blazing — will be the defining image of this series. Series tied 2-2, and everything ahead of us.",
    },
  ],
};