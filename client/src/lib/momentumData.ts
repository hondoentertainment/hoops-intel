// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 29, 2026
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
  date: "May 29, 2026",
  gameOfTheNight: "NYK-CLE-20260525",
  topClutchPerformer: {
    player: "Jalen Brunson",
    team: "NYK",
    clutchRating: 96,
    description: "Brunson was utterly suffocating across all four quarters — 38 points built on relentless pull-up jumpers, and a +29 plus/minus that turned a potential Cavaliers rally in the third quarter into a rout. He didn't just win; he dismantled Cleveland's will to compete.",
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
          description: "Brunson opened the game with back-to-back pull-up mid-range jumpers and a floater, forcing Cleveland into an early timeout. New York established a tone of controlled aggression that Cleveland never matched.",
          runScore: "18-7 NYK run",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:44",
          description: "Donovan Mitchell answered with five straight points, a driving layup and a step-back three, briefly cutting the deficit to single digits and rousing the Cleveland crowd back into the game.",
          runScore: "9-2 CLE run",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "1:58",
          description: "Mikal Bridges closed the half with a four-point swing — stealing an errant Mitchell pass and converting it into an and-one on the other end. Cleveland's bench went quiet. New York went into the locker room with full command.",
          runScore: "13-3 NYK run",
          momentum: "away",
          keyPlayer: "Mikal Bridges",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:30",
          description: "OG Anunoby began a suffocating defensive stretch on Mitchell, forcing three consecutive misses and a turnover. Cleveland's halfcourt offense completely stalled, and the Knicks pushed their lead past 30 on successive Brunson assists.",
          runScore: "17-4 NYK run",
          momentum: "away",
          keyPlayer: "OG Anunoby",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:01",
          description: "Cleveland's reserves traded baskets early in the fourth but the outcome had long been decided. The final minutes became a formality — New York's starters returned briefly to a standing ovation from the traveling Knicks faithful who had packed one corner of Rocket Mortgage FieldHouse.",
          runScore: "8-6 CLE run",
          momentum: "home",
          keyPlayer: "Caris LeVert",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "This was not a game — it was a coronation. New York arrived in Cleveland for Game 4 already knowing what Cleveland did not want to admit: the series was over before tip-off. Jalen Brunson played with the calm fury of a man who has been underestimated for too long, dissecting the Cavaliers defense at every turn while Mikal Bridges provided the secondary punch that Cleveland had no answer for. OG Anunoby's lockdown work on Donovan Mitchell was the hidden masterpiece — 101 total series points from Mitchell meant nothing against a -75 cumulative plus/minus. The Knicks are going to the NBA Finals for the first time since 1999, and they are going there looking very much like a team capable of winning it all.",
    },
    {
      gameId: "OKC-SA-20260529",
      teams: { home: "SA", away: "OKC" },
      finalScore: { home: 118, away: 91 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:22",
          description: "San Antonio's frontcourt imposed itself immediately, scoring eight consecutive paint points while Oklahoma City's transition offense — their greatest weapon all season — was neutralized by disciplined Spurs retreats. The Thunder looked tentative from the opening possession.",
          runScore: "14-4 SA run",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "8:10",
          description: "Shai Gilgeous-Alexander ripped off seven straight OKC points — a floater, an and-one drive through contact, and a stepback three — pulling the Thunder within five and suddenly making Frost Bank Center uneasy.",
          runScore: "11-3 OKC run",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "2:15",
          description: "Wembanyama responded to SGA's burst with a three-pointer from the top of the arc, then immediately swatted a Jalen Williams layup attempt into the third row. The two plays in 40 seconds crystallized exactly why San Antonio entered the season as title favorites. The crowd erupted and OKC never got closer.",
          runScore: "10-2 SA run",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:48",
          description: "San Antonio's second unit outscored Oklahoma City's reserves 19-6 in a third-quarter stretch that officially broke the game open. Bench depth — an area where the Spurs have been quietly dominant all season — proved the decisive factor in turning a competitive game into a comfortable win.",
          runScore: "19-6 SA run",
          momentum: "home",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "San Antonio delivered a statement performance in their playoff opener, dismantling the 64-win Thunder with a brand of total-team basketball that felt almost anachronistic in the modern NBA — and completely dominant. Victor Wembanyama was the gravitational center of everything, alternating between three-point makes and rim-rattling blocks in a way that scrambled Oklahoma City's defensive assignments all night. The real story, though, was the Spurs' depth: when Wembanyama rested, San Antonio's bench didn't just hold the line — they extended the lead, something the Thunder bench was wholly unable to match. OKC's 64-18 regular-season record means very little tonight; the Spurs showed a ceiling the Thunder have not yet reached. This series, and perhaps this postseason, may belong to San Antonio.",
    },
  ],
};