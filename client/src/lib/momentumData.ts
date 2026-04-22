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
    clutchRating: 96, 
    description: "Delivered a masterful Game 7 performance, shooting 13-of-21 while dismantling Boston's championship dreams at TD Garden"
  },
  games: [
    {
      gameId: "PHI-BOS-20260421",
      teams: { home: "BOS", away: "PHI" },
      finalScore: { home: 97, away: 111 },
      swings: [
        {
          quarter: "1Q",
          timestamp: "6:42",
          description: "Embiid dominates early with back-to-back dunks and a block on Tatum",
          runScore: "12-4 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "significant"
        },
        {
          quarter: "2Q",
          timestamp: "2:15",
          description: "Brown's explosive 9-0 personal run gets TD Garden rocking",
          runScore: "9-0 BOS",
          momentum: "home",
          keyPlayer: "Jaylen Brown",
          impact: "notable"
        },
        {
          quarter: "3Q",
          timestamp: "8:30",
          description: "Maxey catches fire with three straight threes to break the game open",
          runScore: "13-2 PHI",
          momentum: "away",
          keyPlayer: "Tyrese Maxey",
          impact: "game-changing"
        },
        {
          quarter: "4Q",
          timestamp: "4:17",
          description: "Embiid's dominant paint presence seals Boston's elimination",
          runScore: "8-0 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Joel Embiid authored one of the greatest Game 7 road performances in playoff history, methodically dismantling Boston's championship hopes with surgical precision. The 76ers' superstar was unstoppable from the opening tip, bullying his way to 32 points while completely neutralizing Boston's interior defense. What started as nervous energy in TD Garden transformed into stunned silence as Philadelphia's 18-point second-half lead made it clear that the heavily favored Celtics' season was ending in devastating fashion. This wasn't just an upset—it was a statement game that announced Philadelphia as a legitimate championship contender."
    },
    {
      gameId: "POR-SAS-20260421",
      teams: { home: "SAS", away: "POR" },
      finalScore: { home: 103, away: 106 },
      swings: [
        {
          quarter: "1Q",
          timestamp: "4:22",
          description: "Wembanyama's rim protection sparks early San Antonio energy",
          runScore: "10-2 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "notable"
        },
        {
          quarter: "2Q",
          timestamp: "7:18",
          description: "Lillard's deep three-point barrage shifts momentum to Portland",
          runScore: "11-3 POR",
          momentum: "away",
          keyPlayer: "Damian Lillard",
          impact: "significant"
        },
        {
          quarter: "3Q",
          timestamp: "1:45",
          description: "Simons explodes for 14 third-quarter points on perfect shooting",
          runScore: "14-4 POR",
          momentum: "away",
          keyPlayer: "Anfernee Simons",
          impact: "game-changing"
        },
        {
          quarter: "4Q",
          timestamp: "2:33",
          description: "Wembanyama's late surge gives Spurs hope in final minutes",
          runScore: "7-0 SAS",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        }
      ],
      clutchPlays: [
        {
          player: "Damian Lillard",
          team: "POR",
          description: "Drains contested 28-footer over Wembanyama to silence crowd",
          timeRemaining: "1:47",
          winProbabilityShift: 23
        },
        {
          player: "Anfernee Simons",
          team: "POR",
          description: "Clutch steal and transition three seals series upset",
          timeRemaining: "0:38",
          winProbabilityShift: 31
        }
      ],
      narrative: "Portland delivered one of the most shocking playoff upsets in recent memory, using veteran savvy and unconscious three-point shooting to topple the 62-win Spurs on their home floor. Damian Lillard was absolutely electric in the clutch, hitting impossible shots over Victor Wembanyama's seven-foot frame while Anfernee Simons provided the perfect complement with six three-pointers. The Trail Blazers' 15-of-32 performance from beyond the arc was a clinic in playoff execution, proving that experience and composure can overcome youth and talent when the stakes reach their peak. San Antonio's magical season ended not with a whimper, but with the harsh reality that playoff basketball is an entirely different beast."
    },
    {
      gameId: "HOU-LAL-20260421",
      teams: { home: "LAL", away: "HOU" },
      finalScore: { home: 101, away: 94 },
      swings: [
        {
          quarter: "1Q",
          timestamp: "8:15",
          description: "Davis establishes early dominance with three straight blocks",
          runScore: "8-0 LAL",
          momentum: "home",
          keyPlayer: "Anthony Davis",
          impact: "notable"
        },
        {
          quarter: "2Q",
          timestamp: "5:30",
          description: "Şengün's crafty post moves spark Houston's best run",
          runScore: "12-4 HOU",
          momentum: "away",
          keyPlayer: "Alperen Şengün",
          impact: "significant"
        },
        {
          quarter: "3Q",
          timestamp: "3:45",
          description: "LeBron takes over with vintage drive-and-kick sequence",
          runScore: "10-2 LAL",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "significant"
        },
        {
          quarter: "4Q",
          timestamp: "6:12",
          description: "Davis's defensive presence completely shuts down Houston's offense",
          runScore: "9-2 LAL",
          momentum: "home",
          keyPlayer: "Anthony Davis",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "LeBron James",
          team: "LAL",
          description: "Perfect bounce pass to Davis for dagger dunk",
          timeRemaining: "2:18",
          winProbabilityShift: 18
        }
      ],
      narrative: "Anthony Davis put on a defensive masterclass that showcased exactly why the Lakers remain a playoff threat, completely altering Houston's offensive rhythm with his rim protection and length. The big man was equally dominant on offense, shooting an efficient 10-of-17 while LeBron James orchestrated the attack with vintage playmaking down the stretch. This physical, grinding affair had all the hallmarks of a potential playoff series, with both teams showcasing the defensive intensity and execution that separates contenders from pretenders. The Lakers' veteran savvy ultimately prevailed in the final minutes, as their championship experience proved invaluable when the game hung in the balance."
    }
  ]
};