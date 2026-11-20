// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 20, 2026
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
  generatedDate: "2026-11-20",
  date: "November 20, 2026",
  gameOfTheNight: "NYK-MIN-20261119",
  topClutchPerformer: {
    player: "Karl-Anthony Towns",
    team: "NYK",
    clutchRating: 91,
    description: "KAT authored a homecoming for the ages — 22 points and 3 blocks in his return to Target Center — but it was his back-to-back buckets in the final three minutes, punctuated by an emphatic block on Jonathan Kuminga, that sealed a 102-99 Knicks win and silenced a crowd that once adored him.",
  },
  games: [
    {
      gameId: "LAC-SAS-20261119",
      teams: { home: "SAS", away: "LAC" },
      finalScore: { home: 124, away: 112 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:41",
          description: "Victor Wembanyama opened the game's scoring narrative with back-to-back threes and a mid-range pull-up, igniting a 14-4 Spurs run that immediately put the Clippers on notice. The Frost Bank Center crowd was electric before the first media timeout.",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:12",
          description: "Derrick Garland and Ivica Lopez combined for nine straight Clippers points to briefly close the gap to four, forcing a Spurs timeout. It was Los Angeles's best sustained stretch of the game and the only moment they threatened to make it a contest.",
          runScore: "9-2",
          momentum: "away",
          keyPlayer: "Derrick Garland",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "4:28",
          description: "Stephon Castle took over the third quarter with a dazzling five-assist, two-steal stretch across six possessions, turning LAC turnovers directly into transition points. Castle's orchestration of a 16-5 run effectively ended the game as a competitive contest.",
          runScore: "16-5",
          momentum: "home",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "San Antonio was never truly threatened, but it was the third-quarter coup de grâce from Stephon Castle that transformed a competitive game into a coronation. The Spurs' two-headed attack — Wembanyama's transcendent scoring and Castle's relentless playmaking — has become the league's most suffocating combination. At 13-3, San Antonio isn't just winning; they're making it look inevitable.",
    },
    {
      gameId: "POR-MIL-20261119",
      teams: { home: "MIL", away: "POR" },
      finalScore: { home: 114, away: 124 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "2:05",
          description: "Damian Lillard's return to Fiserv Forum began with an icy three-pointer on the first possession — right hand raised, stare locked on the Milwaukee bench. The symbolic shot set the tone as Portland raced to an 11-2 opening run before the crowd had fully processed the moment.",
          runScore: "11-2",
          momentum: "away",
          keyPlayer: "Damian Lillard",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "5:33",
          description: "Milwaukee's bench briefly injected life into Fiserv Forum with a 12-3 run fueled by hustle points and Milwaukee crowd energy. The Bucks trimmed the deficit to five and the arena dared to believe before Scoot Henderson answered with consecutive threes.",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "Milwaukee Bench Unit",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "8:14",
          description: "Jrue Holiday's relentless fourth-quarter defense — generating two steals that converted into fast-break points — put the game completely out of reach. Holiday's plus-33 on the night was a staggering reflection of Portland's total dominance whenever he was on the floor.",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Jrue Holiday",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Damian Lillard's return to Milwaukee was cinematic and ruthless in equal measure. The standing ovation he received quickly curdled into disbelief as Portland dismantled a Bucks team that has now lost 15 of 16 games. The 1-15 Bucks are no longer just struggling — their defense is historically porous, and there is no visible path back to competitiveness without a seismic roster intervention.",
    },
    {
      gameId: "NYK-MIN-20261119",
      teams: { home: "MIN", away: "NYK" },
      finalScore: { home: 99, away: 102 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:47",
          description: "Jonathan Kuminga erupted for seven consecutive Minnesota points — a drive, a mid-range pull-up, and a three — to give the Wolves a 10-point lead and prompt the Target Center crowd to believe this would be an emphatic hometown victory. The Knicks' offense went cold for a critical four-minute stretch.",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Jonathan Kuminga",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:19",
          description: "Karl-Anthony Towns received the basketball at the elbow of his former home floor and drained a three with zero hesitation, cutting the deficit to two. The assist was Jalen Brunson's, the moment was entirely KAT's — the Target Center crowd fell silent as their former cornerstone found his rhythm against them.",
          runScore: "8-3",
          momentum: "away",
          keyPlayer: "Karl-Anthony Towns",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "2:51",
          description: "With Minnesota clinging to a one-point lead, Towns blocked Kuminga's drive attempt, Brunson pushed in transition, and New York scored on back-to-back possessions to seize a lead they would not relinquish. The sequence was the game's defining three-possession swing.",
          runScore: "5-0",
          momentum: "away",
          keyPlayer: "Karl-Anthony Towns",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Karl-Anthony Towns",
          team: "NYK",
          description: "Emphatic block on Kuminga's driving layup attempt followed immediately by an off-the-dribble mid-range jumper to give New York a lead they would not surrender. The sequence was the emotional fulcrum of the entire game.",
          timeRemaining: "2:51",
          winProbabilityShift: 34,
        },
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Brunson converted a pull-up floater over Minnesota's scrambling defense to push the Knicks' lead to three with under two minutes remaining, forcing Minnesota into foul-or-fall-behind territory.",
          timeRemaining: "1:47",
          winProbabilityShift: 22,
        },
        {
          player: "Jonathan Kuminga",
          team: "MIN",
          description: "Kuminga drained a contested mid-range jumper to trim the deficit to one with 58 seconds left, keeping Minnesota mathematically alive and forcing a New York timeout.",
          timeRemaining: "0:58",
          winProbabilityShift: -18,
        },
        {
          player: "OG Anunoby",
          team: "NYK",
          description: "Anunoby drew a critical charge call on Minnesota's desperation drive, surrendering the ball to New York and effectively ending Minnesota's final realistic possession with 34 seconds remaining.",
          timeRemaining: "0:34",
          winProbabilityShift: 29,
        },
      ],
      narrative: "Target Center held its breath for 48 minutes as Karl-Anthony Towns returned to the city that raised him and delivered a dagger instead of nostalgia. The Knicks never led by more than five in the fourth quarter, surviving on KAT's composure, Brunson's reliability, and Anunoby's underrated defensive instincts. Minnesota's inability to generate clean offense in the final three minutes cost them a winnable game against a Knicks squad that has now proven they can steal wins on the road.",
    },
    {
      gameId: "GSW-MEM-20261119",
      teams: { home: "MEM", away: "GSW" },
      finalScore: { home: 126, away: 98 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:02",
          description: "Memphis opened with a 15-4 blitz powered by Jaylen Wells's two early threes and Cam Spencer's relentless pace in transition. Golden State's starting unit looked disjointed and lethargic from the opening tip, unable to match the Grizzlies' physicality in the paint.",
          runScore: "15-4",
          momentum: "home",
          keyPlayer: "Jaylen Wells",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "9:01",
          description: "Golden State briefly steadied with a Charles Bassey post sequence and back-to-back Warriors threes that trimmed the deficit to eight. It was the last time the Warriors were within single digits as Memphis's depth began to systematically wear down the Golden State rotation.",
          runScore: "8-3",
          momentum: "away",
          keyPlayer: "Charles Bassey",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "6:33",
          description: "Olivier-Maxence Prosper's 16-point third quarter — punctuated by a one-handed putback dunk that sent the FedExForum crowd into delirium — extended the lead to 28 and officially converted the game into a showcase for Memphis's impressive roster depth.",
          runScore: "18-6",
          momentum: "home",
          keyPlayer: "Olivier-Maxence Prosper",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Memphis didn't just beat Golden State — they systematically humiliated them from the opening possession. The Grizzlies' depth was the defining story: Jaylen Wells, Cedric Coward, and Olivier-Maxence Prosper all scored in double figures off a foundation built by Cam Spencer's eleven assists. Golden State's entire starting unit finishing in negative double-digit plus-minus territory tells you everything about where the Warriors' season is headed at 8-8.",
    },
  ],
};