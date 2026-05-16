// Momentum Engine — Real-time narrative momentum shifts
// Last updated: May 16, 2026
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
  date: "May 16, 2026",
  gameOfTheNight: "DET-CLE-20260515",
  topClutchPerformer: {
    player: "Paul Reed",
    team: "DET",
    clutchRating: 91,
    description: "Coming off the bench with Cleveland's crowd primed for a closeout, Reed didn't flinch — 7-of-9 from the field, a relentless physical presence in the paint, and the kind of energy-setting performance that flipped the entire emotional weight of a potential elimination game inside the first half.",
  },
  games: [
    {
      gameId: "DET-CLE-20260515",
      teams: { home: "CLE", away: "DET" },
      finalScore: { home: 94, away: 115 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Cleveland opened on a 9-2 burst, riding the closeout-game energy at Rocket Arena. Darius Garland found Mobley in transition twice and the crowd smelled blood — briefly.",
          runScore: "9-2 CLE",
          momentum: "home",
          keyPlayer: "Darius Garland",
          impact: "notable",
        },
        {
          quarter: "Q1",
          timestamp: "1:08",
          description: "Paul Reed ignited Detroit's bench unit with back-to-back buckets in the paint, capped by a thunderous putback slam that silenced Rocket Arena and tied the game at 14. The crowd shift was immediate and audible.",
          runScore: "12-3 DET",
          momentum: "away",
          keyPlayer: "Paul Reed",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:45",
          description: "Cade Cunningham took over the second quarter, orchestrating a 16-4 Detroit run that turned a one-point game into a double-digit lead. Three consecutive Pistons possessions ended in layups or open threes while Cleveland's half-court offense stagnated badly.",
          runScore: "16-4 DET",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:30",
          description: "Cleveland trimmed it to 13 on a Donovan Mitchell pull-up and an Evan Mobley mid-range jumper, offering the home crowd a fleeting lifeline. Timeout Detroit — J.B. Bickerstaff's Pistons held firm.",
          runScore: "8-2 CLE",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "9:14",
          description: "Daniss Jenkins buried consecutive threes to open the fourth quarter, pushing the lead to 24 and triggering the first wave of early exits from Cleveland fans. Mitchell's three-shot foul only momentarily interrupted Detroit's execution. The game was effectively over.",
          runScore: "10-3 DET",
          momentum: "away",
          keyPlayer: "Daniss Jenkins",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Cleveland arrived at Rocket Arena expecting a closeout coronation. Detroit arrived with a different script entirely. From the moment Paul Reed's first putback rattled the rim in Q1, the Pistons played with a loose, physical confidence that Cleveland never matched — not from their stars, not from their bench, not from the crowd that eventually fell silent. Mitchell's minus-25 and Harden's eight giveaways told the real story: the 1-seed looked like a team playing tight while the road team played free. Game 7 at Little Caesars Arena now looms, and the pressure has completely inverted.",
    },
    {
      gameId: "SAS-MIN-20260515",
      teams: { home: "MIN", away: "SAS" },
      finalScore: { home: 109, away: 139 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:10",
          description: "Minnesota leaned on Anthony Edwards early, and for a stretch it worked — back-to-back transition buckets had the Wolves up 8-4 and Target Center buzzing with series-saving energy. Then San Antonio simply turned it on.",
          runScore: "8-4 MIN",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "notable",
        },
        {
          quarter: "Q1",
          timestamp: "1:55",
          description: "Stephon Castle announced the tone of his evening with three consecutive buckets — a pull-up two, a corner three, and a coast-to-coast layup through contact. The 11-2 Spurs run that followed erased Minnesota's lead and shifted the entire psychological posture of the series finale.",
          runScore: "15-4 SAS",
          momentum: "away",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "8:30",
          description: "De'Aaron Fox dismantled Minnesota's scrambling defense in the second quarter, turning three Wolves turnovers into seven fast-break points. San Antonio's lead ballooned past 20 as Randle missed his fourth consecutive shot and Target Center grew noticeably quiet.",
          runScore: "18-6 SAS",
          momentum: "away",
          keyPlayer: "De'Aaron Fox",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:00",
          description: "Wembanyama added a punctuation mark to any remaining Minnesota hope with a mid-range fadeaway followed by a one-handed swat on Edwards — the kind of sequence that reminded everyone that the Spurs were never truly threatened in this series.",
          runScore: "12-5 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "This was never a game — it was a statement. Stephon Castle's 32-point, 11-rebound, 6-assist masterpiece on 69% shooting wasn't just the best individual performance of this postseason; it was the clearest sign yet that San Antonio has a new superstar who rises specifically when the stakes are highest. Julian Champagnie's absurd +35 underscored that this Spurs team goes nine deep with purpose. Minnesota's stars — Edwards, Randle, Gobert — were swallowed whole by a San Antonio defensive scheme that never wavered. The Spurs advance to the West Finals against Oklahoma City, and they are arriving with momentum that looks genuinely dangerous.",
    },
  ],
};