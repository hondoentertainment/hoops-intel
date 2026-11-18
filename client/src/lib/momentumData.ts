// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 18, 2026
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
  generatedDate: "2026-11-18",
  date: "November 18, 2026",
  gameOfTheNight: "CHA-LAL-20261117",
  topClutchPerformer: {
    player: "Quentin Grimes",
    team: "LAL",
    clutchRating: 97,
    description: "Grimes was untouchable in overtime, drilling back-to-back threes to push the Lakers clear of Charlotte's desperate comeback. His 10-three night was the architecture of the win — but it was his composure in the extra frame that sealed an all-time individual performance.",
  },
  games: [
    {
      gameId: "CHA-LAL-20261117",
      teams: { home: "LAL", away: "CHA" },
      finalScore: { home: 118, away: 114 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:14",
          description: "Quentin Grimes drilled three consecutive threes in a 94-second stretch, turning a two-point deficit into a nine-point Lakers lead and silencing the Charlotte bench.",
          runScore: "9-0 LAL",
          momentum: "home",
          keyPlayer: "Quentin Grimes",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:28",
          description: "Brandon Miller answered with back-to-back buckets and Naz Reid converted an and-one to cap a 10-2 Hornets run, pulling Charlotte within two and swinging the arena into chaos.",
          runScore: "10-2 CHA",
          momentum: "away",
          keyPlayer: "Brandon Miller",
          impact: "game-changing",
        },
        {
          quarter: "OT",
          timestamp: "2:05",
          description: "With the game knotted at 112, Grimes stepped into a catch-and-shoot triple from the left corner — his tenth of the night — to give Los Angeles a lead they would not surrender.",
          runScore: "6-2 LAL",
          momentum: "home",
          keyPlayer: "Quentin Grimes",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Quentin Grimes",
          team: "LAL",
          description: "Corner three with 2:05 remaining in OT — his tenth make from deep — broke a 112-112 tie and provided the winning margin.",
          timeRemaining: "2:05 OT",
          winProbabilityShift: 34,
        },
        {
          player: "Naz Reid",
          team: "CHA",
          description: "And-one finish through contact trimmed the Lakers lead to two in regulation and forced overtime, single-handedly keeping Charlotte alive.",
          timeRemaining: "1:47 Q4",
          winProbabilityShift: -22,
        },
        {
          player: "Luka Doncic",
          team: "LAL",
          description: "Luka converted two clutch free throws with 38 seconds left in OT to push the lead to four and effectively ice the game.",
          timeRemaining: "0:38 OT",
          winProbabilityShift: 18,
        },
      ],
      narrative: "This game refused to end quietly. Charlotte clawed from nine down in the fourth quarter to force overtime on the back of Naz Reid's thunderous and-one, and for a moment it felt like the Hornets were scripting the season's great upset. Then Quentin Grimes reminded everyone why Los Angeles is 13-2 — he calmly drained his tenth three of the night in OT and the game was over in spirit before the clock confirmed it. A performance that will be replayed all season long.",
    },
    {
      gameId: "DET-SAS-20261117",
      teams: { home: "SAS", away: "DET" },
      finalScore: { home: 93, away: 105 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:02",
          description: "Ausar Thompson ignited a 13-2 Detroit run with a steal-and-slam sequence, then immediately stripped Keldon Johnson and converted in transition — the Pistons seized the lead and never looked comfortable relinquishing it.",
          runScore: "13-2 DET",
          momentum: "away",
          keyPlayer: "Ausar Thompson",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:19",
          description: "Victor Wembanyama unleashed back-to-back blocks and hit a midrange jumper to spark a 9-0 Spurs run, pulling San Antonio within four and threatening to extend the win streak.",
          runScore: "9-0 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "8:33",
          description: "Cade Cunningham responded to San Antonio's momentum with a clinical 8-2 Detroit run — a pull-up triple followed by a Daniss Jenkins floater — pushing the lead back to double digits for good.",
          runScore: "8-2 DET",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Detroit didn't just end San Antonio's 12-game win streak — they dismantled it methodically, like a team that knew exactly what it was doing. Ausar Thompson's five-steal, triple-double performance was the engine of the entire operation, turning San Antonio turnovers into transition buckets before the Spurs could even set their defense. Wembanyama's 25-and-18 night was heroic in defeat, but his supporting cast had no answer for Detroit's relentless depth. The Western Conference just got significantly more interesting.",
    },
    {
      gameId: "UTA-LAC-20261117",
      teams: { home: "LAC", away: "UTA" },
      finalScore: { home: 107, away: 132 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:50",
          description: "Brice Sensabaugh hit three threes in the opening frame's final five minutes, giving Utah a lead they never relinquished and setting the tone for a historic offensive night.",
          runScore: "14-4 UTA",
          momentum: "away",
          keyPlayer: "Brice Sensabaugh",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "6:11",
          description: "Keyonte George and Sensabaugh combined for 18 points in a devastating 22-6 third-quarter run that turned a manageable eight-point game into a 25-point rout, effectively ending any Clippers hope of a comeback.",
          runScore: "22-6 UTA",
          momentum: "away",
          keyPlayer: "Keyonte George",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "The Jazz are 2-13 but somebody forgot to tell Brice Sensabaugh. His 40-point, 8-three eruption was the most complete offensive performance from a Jazz player in years, and Keyonte George's 30-and-11 running mate act turned this into a full-scale demolition of a Clippers team that simply had no answers. Josh Okogie's plus-31 differential tells the story better than any stat line — Utah didn't just win, they embarrassed. File this one under 'anomaly or awakening' and check back in January.",
    },
    {
      gameId: "POR-MIN-20261117",
      teams: { home: "MIN", away: "POR" },
      finalScore: { home: 106, away: 105 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "3:44",
          description: "Damian Lillard ignited an 11-3 Portland run with two mid-range pull-ups and a stepback three, swinging a seven-point Minnesota lead to a one-point Portland advantage heading into the fourth.",
          runScore: "11-3 POR",
          momentum: "away",
          keyPlayer: "Damian Lillard",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "2:17",
          description: "Ayo Dosunmu caught fire with two straight threes in 90 seconds, reclaiming the lead for Minnesota and answering every Portland push with another dagger from deep.",
          runScore: "8-3 MIN",
          momentum: "home",
          keyPlayer: "Ayo Dosunmu",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Ayo Dosunmu",
          team: "MIN",
          description: "Catch-and-shoot triple from the right wing with 1:12 remaining pushed Minnesota's lead to three — the eventual winning margin — after Portland had cut it to one.",
          timeRemaining: "1:12 Q4",
          winProbabilityShift: 29,
        },
        {
          player: "Jrue Holiday",
          team: "POR",
          description: "Holiday's driving layup with 22 seconds left trimmed the deficit to one and gave Portland a final possession with a chance to win.",
          timeRemaining: "0:22 Q4",
          winProbabilityShift: -17,
        },
        {
          player: "Damian Lillard",
          team: "POR",
          description: "Lillard's desperation corner three at the buzzer rimmed out, sealing Minnesota's one-point survival and Portland's gut-punch road loss.",
          timeRemaining: "0:02 Q4",
          winProbabilityShift: -8,
        },
      ],
      narrative: "One point. That's the entire distance between Minnesota staying at 11-4 and Portland pulling off a stunning road win. Ayo Dosunmu's seven-three night was the kind of performance that comes from nowhere and wins games that have no business being won — he answered every Lillard run with another deep ball, refusing to let the Wolves fold. Portland will replay that final possession for days. Lillard's buzzer-beater rimmed out and the Timberwolves exhaled, but this one could have gone either way ten times over.",
    },
    {
      gameId: "NYK-TOR-20261117",
      teams: { home: "TOR", away: "NYK" },
      finalScore: { home: 102, away: 111 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:33",
          description: "Ja'Kobe Walter hit three consecutive threes to ignite a 12-3 Toronto run, briefly giving the Raptors a lead and announcing himself as a legitimate offensive weapon in the most emphatic way possible.",
          runScore: "12-3 TOR",
          momentum: "home",
          keyPlayer: "Ja'Kobe Walter",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:48",
          description: "Jalen Brunson took over with back-to-back pull-up jumpers and a three-pointer in a 10-2 New York run, breaking open a game that had been within five and firmly sealing the Knicks' road win.",
          runScore: "10-2 NYK",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "New York got a genuine scare from Ja'Kobe Walter, whose 25-point, seven-three explosion off the Toronto bench was the kind of eruption that turns heads league-wide. But Jalen Brunson is simply too composed for a building getting introduced to a young star's potential — he answered every Raptors push with a bucket of his own, and Karl-Anthony Towns' 16-16-8 filled every statistical gap the Knicks needed closed. Toronto has real reasons for optimism in Walter's emergence; the standings, however, remain bleak at 5-9.",
    },
  ],
};