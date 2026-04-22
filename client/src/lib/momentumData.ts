// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 22, 2026
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
  date: "April 22, 2026",
  gameOfTheNight: "PHI-BOS-20260421",
  topClutchPerformer: { 
    player: "Joel Embiid", 
    team: "PHI", 
    clutchRating: 98, 
    description: "Delivered a masterful Game 7 performance with 32 points and 14 rebounds, completely dominating Boston's defense in the most pressure-packed environment imaginable"
  },
  games: [
    {
      gameId: "PHI-BOS-20260421",
      teams: { home: "BOS", away: "PHI" },
      finalScore: { home: 97, away: 111 },
      swings: [
        {
          quarter: "1st",
          timestamp: "6:42",
          description: "Embiid scores 8 straight points including back-to-back dunks to silence TD Garden early",
          runScore: "PHI 8-0",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "3:15",
          description: "Jayson Tatum catches fire with three consecutive three-pointers to cut deficit to 2",
          runScore: "BOS 11-2",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "8:24",
          description: "Maxey explodes for 12 points in 4 minutes as Sixers build commanding 16-point lead",
          runScore: "PHI 16-4",
          momentum: "away",
          keyPlayer: "Tyrese Maxey",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "9:17",
          description: "Embiid answers every Boston rally attempt with dominant post moves and defensive stops",
          runScore: "PHI 10-3",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The TD Garden fell eerily silent as Joel Embiid delivered one of the most dominant Game 7 performances in recent playoff history, systematically dismantling the favored Celtics on their home court. What started as nervous energy quickly turned to stunned disbelief as the Sixers built an insurmountable lead behind Embiid's unstoppable interior presence and Maxey's explosive scoring bursts. By the fourth quarter, the building that expected a celebration had become a mausoleum, witnessing one of the most shocking playoff eliminations in franchise history. Philadelphia's veteran composure and playoff experience shined brightest when the lights were brightest, turning Boston's championship dreams into a nightmare scenario."
    },
    {
      gameId: "POR-SAS-20260421",
      teams: { home: "SAS", away: "POR" },
      finalScore: { home: 103, away: 106 },
      swings: [
        {
          quarter: "1st",
          timestamp: "4:18",
          description: "Wembanyama scores 11 early points including two blocks on consecutive possessions",
          runScore: "SAS 13-4",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "7:45",
          description: "Trail Blazers hit 6 of 8 three-pointers in explosive quarter-ending run",
          runScore: "POR 18-6",
          momentum: "away",
          keyPlayer: "Anfernee Simons",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "5:33",
          description: "Lillard takes over with 14 points in 6 minutes to extend Portland's lead to 12",
          runScore: "POR 16-4",
          momentum: "away",
          keyPlayer: "Damian Lillard",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "2:47",
          description: "Spurs mount desperate comeback behind Wembanyama's interior dominance",
          runScore: "SAS 12-3",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        }
      ],
      clutchPlays: [
        {
          player: "Damian Lillard",
          team: "POR",
          description: "Pulls up for deep three-pointer over Wembanyama's outstretched arm",
          timeRemaining: "1:42",
          winProbabilityShift: 23
        },
        {
          player: "Anfernee Simons",
          team: "POR",
          description: "Hits contested step-back three after offensive rebound",
          timeRemaining: "0:47",
          winProbabilityShift: 31
        },
        {
          player: "Victor Wembanyama",
          team: "SAS",
          description: "Blocks Lillard at rim then scores putback dunk on other end",
          timeRemaining: "0:23",
          winProbabilityShift: -18
        }
      ],
      narrative: "In one of the most stunning playoff upsets in recent memory, Portland's veteran savvy and three-point barrage completely overwhelmed San Antonio's youth and regular season dominance. The Trail Blazers' championship experience showed in crunch time as Lillard and Simons hit impossible shots under immense pressure, while the 62-win Spurs couldn't match their composure when the stakes reached their peak. Wembanyama's brilliance wasn't enough to overcome Portland's surgical precision from beyond the arc, as the Blazers shot lights-out when it mattered most. The Frost Bank Center crowd watched in stunned silence as their championship hopes evaporated against a team that simply knew how to win when everything was on the line."
    },
    {
      gameId: "HOU-LAL-20260421",
      teams: { home: "LAL", away: "HOU" },
      finalScore: { home: 101, away: 94 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:21",
          description: "Rockets open with aggressive pace, forcing Lakers into early turnovers and transition buckets",
          runScore: "HOU 12-3",
          momentum: "away",
          keyPlayer: "Alperen Şengün",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "5:47",
          description: "Davis dominates the paint with 3 blocks and 8 points to flip momentum",
          runScore: "LAL 13-4",
          momentum: "home",
          keyPlayer: "Anthony Davis",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "9:15",
          description: "LeBron orchestrates perfect ball movement leading to 4 straight assists",
          runScore: "LAL 10-2",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "6:33",
          description: "Lakers defense clamps down, holding Rockets to 2-of-12 shooting in crucial stretch",
          runScore: "LAL 8-2",
          momentum: "home",
          keyPlayer: "Anthony Davis",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "LeBron James",
          team: "LAL",
          description: "Drives through contact for and-one layup to extend lead",
          timeRemaining: "3:28",
          winProbabilityShift: 19
        },
        {
          player: "Anthony Davis",
          team: "LAL",
          description: "Blocks Şengün at rim then hits mid-range jumper on other end",
          timeRemaining: "1:57",
          winProbabilityShift: 22
        }
      ],
      narrative: "This physical, playoff-intensity battle showcased exactly why the Lakers remain a dangerous postseason threat despite their regular season inconsistencies. Anthony Davis was simply unstoppable on both ends, using his length and athleticism to completely disrupt Houston's offensive rhythm while dominating the glass. The veteran leadership of LeBron and AD proved decisive down the stretch as they made all the winning plays when the Rockets needed stops most. Houston showed they belong in the playoff conversation, but learned a valuable lesson about the difference between regular season basketball and the elevated intensity that championship-level teams bring every single night."
    }
  ],
};