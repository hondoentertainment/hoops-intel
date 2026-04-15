// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 15, 2026
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
  date: "April 15, 2026",
  gameOfTheNight: "MIA-CHA-20260414",
  topClutchPerformer: { 
    player: "LaMelo Ball", 
    team: "CHA", 
    clutchRating: 89, 
    description: "Orchestrated overtime victory with 8 clutch points and 3 assists despite horrific three-point shooting, willing Charlotte past elimination" 
  },
  games: [
    {
      gameId: "POR-PHX-20260414",
      teams: { home: "PHX", away: "POR" },
      finalScore: { home: 110, away: 114 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:22",
          description: "Avdija catches fire with 13 first-quarter points, connecting on contested jumpers and finding open teammates",
          runScore: "12-3 run",
          momentum: "away",
          keyPlayer: "Deni Avdija",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "4:15",
          description: "Green responds with explosive scoring burst, hitting three straight threes to energize Phoenix crowd",
          runScore: "15-6 run",
          momentum: "home",
          keyPlayer: "Jalen Green",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "2:33",
          description: "Clingan's rim protection sparks transition opportunities as Portland builds double-digit lead",
          runScore: "18-8 run",
          momentum: "away",
          keyPlayer: "Donovan Clingan",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "5:47",
          description: "Booker and Green combine for 14 fourth-quarter points to cut deficit to two possessions",
          runScore: "14-7 run",
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "significant"
        }
      ],
      clutchPlays: [
        {
          player: "Deni Avdija",
          team: "POR",
          description: "Step-back three over Booker with shot clock winding down",
          timeRemaining: "3:41",
          winProbabilityShift: 18
        },
        {
          player: "Jrue Holiday",
          team: "POR",
          description: "Clutch steal and transition layup to extend lead back to six",
          timeRemaining: "1:55",
          winProbabilityShift: 22
        },
        {
          player: "Jalen Green",
          team: "PHX",
          description: "Contested three-pointer from deep cuts deficit to one possession",
          timeRemaining: "0:47",
          winProbabilityShift: -16
        }
      ],
      narrative: "Deni Avdija authored a masterpiece that sent Phoenix to the elimination bracket, showcasing the complete offensive arsenal that makes him Portland's most dangerous weapon. His surgical precision from mid-range and ability to create for others overwhelmed a Suns defense that had no answer for his versatility. While Jalen Green's 35 points kept Phoenix within striking distance, Avdija's clutch shot-making in the final minutes sealed Portland's date with destiny against the Spurs. The Trail Blazers' balanced attack and veteran poise proved too much for a talented but inconsistent Phoenix squad."
    },
    {
      gameId: "MIA-CHA-20260414",
      teams: { home: "CHA", away: "MIA" },
      finalScore: { home: 127, away: 126 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:41",
          description: "Ball starts hot with early assists but Miami's Mitchell matches with aggressive drives",
          runScore: "11-11 tie",
          momentum: "home",
          keyPlayer: "LaMelo Ball",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "3:22",
          description: "Miller's three-point barrage gives Charlotte separation as he hits four triples in the quarter",
          runScore: "16-8 run",
          momentum: "home",
          keyPlayer: "Brandon Miller",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "6:15",
          description: "Wiggins and Mitchell combine for 18 third-quarter points to erase Charlotte's lead",
          runScore: "22-12 run",
          momentum: "away",
          keyPlayer: "Andrew Wiggins",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "1:47",
          description: "Ball forces overtime with clutch driving layup despite shooting struggles from deep",
          runScore: "8-5 run",
          momentum: "home",
          keyPlayer: "LaMelo Ball",
          impact: "game-changing"
        },
        {
          quarter: "OT",
          timestamp: "2:31",
          description: "Bridges takes over in overtime with back-to-back buckets to secure elimination game victory",
          runScore: "6-2 run",
          momentum: "home",
          keyPlayer: "Miles Bridges",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Davion Mitchell",
          team: "MIA",
          description: "Clutch three-pointer from the corner to tie the game",
          timeRemaining: "4:23",
          winProbabilityShift: -14
        },
        {
          player: "LaMelo Ball",
          team: "CHA",
          description: "Driving layup through contact to force overtime",
          timeRemaining: "0:08",
          winProbabilityShift: 45
        },
        {
          player: "Miles Bridges",
          team: "CHA",
          description: "Go-ahead bucket in overtime after offensive rebound",
          timeRemaining: "2:31 OT",
          winProbabilityShift: 28
        },
        {
          player: "Andrew Wiggins",
          team: "MIA",
          description: "Contested fadeaway to cut deficit to one in final seconds",
          timeRemaining: "0:12 OT",
          winProbabilityShift: -19
        },
        {
          player: "Coby White",
          team: "CHA",
          description: "Ice-cold free throws to seal victory with four seconds remaining",
          timeRemaining: "0:04 OT",
          winProbabilityShift: 31
        }
      ],
      narrative: "In one of the most improbable individual performances in play-in history, LaMelo Ball willed Charlotte past Miami despite shooting 2-of-16 from three-point range, showcasing the heart of a champion when his shot abandoned him. Ball's relentless drives and spectacular passing kept the Hornets alive before Miles Bridges delivered the knockout punch in overtime. Miami's season ends in heartbreak as Mitchell and Wiggins gave everything they had, but Charlotte's depth and home-court advantage proved decisive in a thriller that lived up to every expectation. The Hornets survive to fight another day, while the Heat's championship window may have officially closed."
    }
  ]
};