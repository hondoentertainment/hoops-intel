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
    clutchRating: 94, 
    description: "Dominated the fourth quarter with 8 points and 3 rebounds while shutting down Boston's interior attack to force Game 7"
  },
  games: [
    {
      gameId: "PHI-BOS-20260421",
      teams: { home: "BOS", away: "PHI" },
      finalScore: { home: 97, away: 111 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:24",
          description: "Celtics jump out early with aggressive defense forcing three straight turnovers",
          runScore: "12-4 BOS",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "4:12",
          description: "Embiid takes over with consecutive post moves as 76ers erase deficit",
          runScore: "16-6 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "2:38",
          description: "Maxey explodes for 11 third-quarter points as Philadelphia pulls away",
          runScore: "21-9 PHI",
          momentum: "away",
          keyPlayer: "Tyrese Maxey",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "8:45",
          description: "Embiid's defensive dominance completely stifles Boston's comeback attempt",
          runScore: "14-7 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The basketball world witnessed a seismic shift at TD Garden as Joel Embiid delivered a vintage elimination-game masterpiece, turning what should have been Boston's coronation into Philadelphia's stunning resurrection. The 76ers completely flipped the script of this series with their most dominant performance, outmuscling and outhustling the higher-seeded Celtics on their home floor. Embiid looked like the MVP candidate of old, imposing his will on both ends while Maxey provided the explosive scoring punch that has made this duo so dangerous. Game 7 now looms as one of the most anticipated decisive games in recent playoff memory."
    },
    {
      gameId: "POR-SAS-20260421",
      teams: { home: "SAS", away: "POR" },
      finalScore: { home: 103, away: 106 },
      swings: [
        {
          quarter: "1st",
          timestamp: "5:18",
          description: "Wembanyama's early dominance gives Spurs commanding lead at home",
          runScore: "18-8 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "6:32",
          description: "Portland's three-point barrage led by Simons cuts deficit dramatically",
          runScore: "19-8 POR",
          momentum: "away",
          keyPlayer: "Anfernee Simons",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "1:24",
          description: "Lillard takes control with clutch shooting to give Trail Blazers first lead",
          runScore: "13-5 POR",
          momentum: "away",
          keyPlayer: "Damian Lillard",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Damian Lillard",
          team: "POR",
          description: "Step-back three over Wembanyama's outstretched arm",
          timeRemaining: "2:47",
          winProbabilityShift: 18
        },
        {
          player: "Anfernee Simons",
          team: "POR",
          description: "Corner three off Lillard assist to ice the upset",
          timeRemaining: "1:12",
          winProbabilityShift: 24
        }
      ],
      narrative: "Dame Time struck at the most improbable moment, as Damian Lillard orchestrated one of the biggest upsets in recent playoff history by eliminating the 62-win Spurs on their home court. The Trail Blazers' veteran leadership shined brightest when the lights were hottest, with Lillard and Simons combining for a three-point clinic that left San Antonio stunned. Despite Wembanyama's valiant 27-point effort, the young Spurs couldn't match Portland's playoff poise and execution in crunch time. This shocking first-round exit will send shockwaves through the basketball world and raise serious questions about San Antonio's championship readiness."
    },
    {
      gameId: "HOU-LAL-20260421",
      teams: { home: "LAL", away: "HOU" },
      finalScore: { home: 101, away: 94 },
      swings: [
        {
          quarter: "1st",
          timestamp: "3:45",
          description: "Rockets' energy and pace gives them early advantage in hostile environment",
          runScore: "15-7 HOU",
          momentum: "away",
          keyPlayer: "Alperen Şengün",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "8:21",
          description: "Davis asserts himself with powerful interior scoring to tie the game",
          runScore: "12-4 LAL",
          momentum: "home",
          keyPlayer: "Anthony Davis",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "6:15",
          description: "LeBron-AD pick and roll devastates Houston's defense in crucial stretch",
          runScore: "16-8 LAL",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Anthony Davis",
          team: "LAL",
          description: "Thunderous dunk plus foul after LeBron drive and kick",
          timeRemaining: "3:28",
          winProbabilityShift: 12
        }
      ],
      narrative: "The Lakers' championship experience proved decisive in a gritty, playoff-atmosphere battle that showcased why Anthony Davis remains one of the league's most impactful two-way players. Davis controlled the paint on both ends, using his length and athleticism to frustrate Houston's offense while providing the interior scoring punch Los Angeles needed. LeBron's veteran savvy in orchestrating the fourth-quarter run demonstrated the timeless value of playoff experience in high-pressure moments. This victory solidifies the Lakers' playoff positioning and sends a message that this team remains a dangerous postseason threat when healthy."
    }
  ]
};