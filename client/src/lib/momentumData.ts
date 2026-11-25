// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 25, 2026
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
  generatedDate: string;
  date: string;
  games: MomentumSwing[];
  gameOfTheNight: string;
  topClutchPerformer: { player: string; team: string; clutchRating: number; description: string };
}

export const momentumData: MomentumData = {
  generatedDate: "2026-11-25",
  date: "November 25, 2026",
  gameOfTheNight: "BOS-WAS-20261124",
  topClutchPerformer: {
    player: "Jayson Tatum",
    team: "BOS",
    clutchRating: 91,
    description: "Tatum authored a nationally televised statement — 41 points on surgical efficiency, 6 threes, and a +/- that bent Washington's will in the second half. His back-to-back buckets to open the third quarter turned a competitive game into a coronation.",
  },
  games: [
    {
      gameId: "BOS-WAS-20261124",
      teams: { home: "WAS", away: "BOS" },
      finalScore: { home: 116, away: 131 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Washington jumped out of the gates behind Anthony Davis, building an early 8-point cushion that silenced the Capital One Arena crowd before the Celtics had found their footing.",
          runScore: "18-10",
          momentum: "home",
          keyPlayer: "Anthony Davis",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "7:14",
          description: "Paul George erupted for back-to-back threes and a crafty pull-up jumper, igniting a 14-3 Boston run that flipped the lead and had the Celtics bench on its feet. George's energy was infectious, forcing Washington into a timeout they couldn't recover from.",
          runScore: "14-3",
          momentum: "away",
          keyPlayer: "Paul George",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "9:51",
          description: "Jayson Tatum took over the moment the second half tipped off — scoring Boston's first 7 points of the third quarter to push the margin to 15. The Wizards' defense had no answer for his combination of pull-up threes and attacking drives, and the game was functionally over.",
          runScore: "17-6",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "This was Jayson Tatum reclaiming a national stage — methodical, ruthless, and utterly in control. Washington's Anthony Davis and young AJ Dybantsa gave the Wizards flashes of promise, but Boston's ability to weaponize both Tatum and Paul George in the same lineup made the outcome feel inevitable from the third-quarter tip. The Celtics move to 12-6 with a performance that will rank among their most complete road showings of the season.",
    },
    {
      gameId: "DAL-DEN-20261124",
      teams: { home: "DEN", away: "DAL" },
      finalScore: { home: 101, away: 120 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:03",
          description: "Dallas set the tone immediately — Cooper Flagg orchestrated a crisp early offense that had Denver scrambling in transition, with the Mavericks pushing pace and racking up easy layups before the Nuggets could organize.",
          runScore: "12-4",
          momentum: "away",
          keyPlayer: "Cooper Flagg",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "3:30",
          description: "Nikola Jokic briefly wrestled momentum back for Denver with a vintage mid-range sequence and a pinpoint skip pass for a corner three, cutting the deficit to 6 and quieting a confident Dallas bench.",
          runScore: "10-3",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:47",
          description: "Caleb Martin's relentless activity — two back-to-back steals converted into fast-break points — shattered Denver's last attempt at a rally and triggered a 16-5 Dallas run that made the final margin a formality. P.J. Washington added two straight mid-range jumpers to salt the game away.",
          runScore: "16-5",
          momentum: "away",
          keyPlayer: "Caleb Martin",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Cooper Flagg didn't need to be the scorer — he was the architect, pulling every string of Dallas's offense with a 24-point, 12-assist masterpiece that left Denver's defense perpetually a half-step slow. The Nuggets had no answer for the Mavericks' pace, and Jokic's heroics were isolated moments in an otherwise deflating evening at Ball Arena. Dallas's 19-point road win sends a clear message: this team has the depth and playmaking to beat anyone in the West.",
    },
    {
      gameId: "DET-ORL-20261124",
      teams: { home: "ORL", away: "DET" },
      finalScore: { home: 86, away: 104 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:18",
          description: "Isaiah Joe came out firing from deep, draining two triples in the first five minutes to give Detroit an instant energy advantage. Orlando's perimeter defense looked disorganized without Banchero anchoring the team's identity.",
          runScore: "13-5",
          momentum: "away",
          keyPlayer: "Isaiah Joe",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "8:40",
          description: "Franz Wagner briefly sparked a Magic comeback with a personal 7-0 run — absorbing contact on two straight drives and converting the and-ones — trimming the Detroit lead to 4 and momentarily silencing the Pistons' bench.",
          runScore: "7-0",
          momentum: "home",
          keyPlayer: "Franz Wagner",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "4:12",
          description: "Ausar Thompson announced himself as Detroit's defensive anchor with a stunning sequence — a chase-down block, an offensive rebound, and two assists on the ensuing possessions. His activity triggered a 14-3 Detroit run that pushed the lead to 17 and ended Orlando's last realistic hope of a comeback.",
          runScore: "14-3",
          momentum: "away",
          keyPlayer: "Ausar Thompson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Detroit looked every bit like a team trending upward, with Isaiah Joe's shooting and Ausar Thompson's two-way brilliance giving the Pistons a balanced attack Orlando simply couldn't contain. The Magic had their moments — Wagner was relentless and Desmond Bane contributed a sharp 21 — but the absence of Paolo Banchero loomed large over every possession. At 7-10, Orlando's margin for error is shrinking fast, and this 18-point home loss underscores just how much they need him back.",
    },
  ],
};