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
    clutchRating: 94,
    description: "Edwards was a closing-time assassin, erupting for 14 fourth-quarter points and repeatedly shredding San Antonio's defense in isolation to flip a six-point deficit into a five-point win. His relentless attack at the rim in the final five minutes — converting through contact twice — was the defining reason Minnesota is still alive in this series.",
  },
  games: [
    {
      gameId: "NYK-PHI-20260510",
      teams: { home: "PHI", away: "NYK" },
      finalScore: { home: 114, away: 144 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:32",
          description: "Brunson orchestrated a 14-2 Knicks run to open the game, attacking PHI's drop coverage with relentless mid-range pull-ups and finishing through contact to set the tone immediately.",
          runScore: "18-6 NYK",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "7:15",
          description: "New York's defense locked in on a 16-4 blitz to close the first half, suffocating Philadelphia's transition offense and forcing four consecutive turnovers that translated directly into fastbreak points.",
          runScore: "66-44 NYK",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:50",
          description: "Philadelphia mounted a brief 9-2 push behind a pair of desperation threes, briefly trimming the lead to 17 and giving the home crowd a flicker of hope before New York snuffed it out.",
          runScore: "82-68 NYK",
          momentum: "home",
          keyPlayer: "Tyrese Maxey",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "1:20",
          description: "The Knicks answered immediately with an 11-2 counter-run to end the third quarter, Brunson drilling a step-back mid-ranger and dishing two dimes in a 90-second stretch that ended any doubt about the outcome.",
          runScore: "102-74 NYK",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "9:05",
          description: "New York's reserves poured it on with a 15-4 fourth-quarter surge, turning the final frame into a celebration as the Knicks' bench outscored Philadelphia's starters for a stretch.",
          runScore: "126-84 NYK",
          momentum: "away",
          keyPlayer: "Josh Hart",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "This wasn't a basketball game so much as a formal execution. The Knicks arrived at Xfinity Mobile Arena with series-closing intent and Jalen Brunson delivered a masterclass in controlled aggression — 38 points on a merciless mid-range diet that Philadelphia had no prescription for. New York's 22-point halftime lead wasn't a fluke; it was the logical conclusion of a Knicks team that has systematically dismantled the 76ers' identity across four games. The second half was a coronation lap, the Knicks' reserves dancing on the grave of Philadelphia's season while the home crowd filed toward the exits in silence. The 76ers' offseason begins with profound structural questions; New York's train rolls on.",
    },
    {
      gameId: "SAS-MIN-20260510",
      teams: { home: "MIN", away: "SAS" },
      finalScore: { home: 114, away: 109 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:45",
          description: "San Antonio opened with a composed 12-4 run, moving the ball with surgical precision and exploiting Minnesota's aggressive defensive rotations for three open corner threes.",
          runScore: "22-12 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:10",
          description: "The Spurs extended their lead to double digits behind a 13-5 run in the second quarter, Wembanyama dominating the paint and Minnesota's interior defense unable to body him on back-to-back possessions.",
          runScore: "54-48 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "8:30",
          description: "Target Center erupted as Minnesota opened the second half with a ferocious 18-6 run, Edwards igniting the crowd with a thunderous fast-break dunk followed by back-to-back steals that completely reversed the game's energy.",
          runScore: "78-74 MIN",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:22",
          description: "San Antonio steadied themselves with a 9-2 response to retake a three-point lead, Wembanyama converting a difficult turnaround jumper and drawing a foul on consecutive possessions to quiet the Minnesota crowd.",
          runScore: "97-94 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "2:48",
          description: "Edwards took over entirely, scoring seven straight Minnesota points — including a pull-up three over a closing Spurs defender — to swing the lead back to Minnesota for good in the game's defining sequence.",
          runScore: "109-103 MIN",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Pull-up three-pointer over a closing Spurs defender with 2:48 remaining, erasing a three-point deficit and giving Minnesota their first lead since early in the third quarter.",
          timeRemaining: "2:48",
          winProbabilityShift: 34,
        },
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Bully-ball isolation drive through contact, converting the and-one layup at the rim to push the lead to six with 1:41 left, effectively icing a game the Timberwolves had trailed for three quarters.",
          timeRemaining: "1:41",
          winProbabilityShift: 27,
        },
        {
          player: "Victor Wembanyama",
          team: "SAS",
          description: "Contested mid-range turnaround over Rudy Gobert to cut the deficit to two with 58 seconds remaining, forcing Minnesota into a half-court possession and keeping the Spurs' comeback alive.",
          timeRemaining: "0:58",
          winProbabilityShift: -18,
        },
        {
          player: "Rudy Gobert",
          team: "MIN",
          description: "Sealed off Wembanyama on a critical defensive rebound with 32 seconds left after a missed Minnesota free throw, denying San Antonio the second-chance opportunity that could have tied the game.",
          timeRemaining: "0:32",
          winProbabilityShift: 21,
        },
      ],
      narrative: "For three quarters, San Antonio looked every bit like the 62-win machine that bulldozed through the regular season — poised, powerful, and utterly in control. Then Anthony Edwards decided he'd had enough. The Target Center fourth quarter belonged entirely to Ant, a 14-point closing argument delivered with the fury of a man who refuses to let his season end quietly. Minnesota erased a six-point halftime deficit on the back of sheer will and home-court mania, and now the Spurs head back to San Antonio with a series lead that feels considerably less safe than it did 24 hours ago. The crack is real.",
    },
  ],
};