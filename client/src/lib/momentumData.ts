// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 24, 2026
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
  date: "April 24, 2026",
  gameOfTheNight: "NY-ATL-20260424",
  topClutchPerformer: { 
    player: "Trae Young", 
    team: "ATL", 
    clutchRating: 94, 
    description: "Hit the game-winning three with 1.2 seconds left after trailing by 5 with under 2 minutes remaining" 
  },
  games: [
    {
      gameId: "NY-ATL-20260424",
      teams: { home: "ATL", away: "NY" },
      finalScore: { home: 109, away: 108 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:23",
          description: "Hawks erupt for 14-2 run capped by Young's deep three",
          runScore: "14-2",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "2:45",
          description: "Knicks answer with 18-6 surge behind Brunson's playmaking",
          runScore: "18-6",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "8:12",
          description: "Randle takes over with back-to-back threes and a steal",
          runScore: "11-3",
          momentum: "away",
          keyPlayer: "Julius Randle",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "1:47",
          description: "Young ignites comeback with steal, assist, and clutch three",
          runScore: "8-1",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "NY",
          description: "Stepped back three over Collins to give Knicks 106-103 lead",
          timeRemaining: "2:34",
          winProbabilityShift: 18
        },
        {
          player: "Trae Young",
          team: "ATL",
          description: "Steal and fastbreak layup to cut deficit to one possession",
          timeRemaining: "1:47",
          winProbabilityShift: -14
        },
        {
          player: "De'Andre Hunter",
          team: "ATL",
          description: "Corner three off Young assist to tie game at 106",
          timeRemaining: "0:52",
          winProbabilityShift: -22
        },
        {
          player: "Trae Young",
          team: "ATL",
          description: "Game-winning three from 28 feet with Randle draped on him",
          timeRemaining: "0:01",
          winProbabilityShift: -48
        }
      ],
      narrative: "State Farm Arena witnessed pure theater as Trae Young authored one of the season's most dramatic finishes, drilling a 28-foot game-winner with Julius Randle in his jersey to stun the Knicks 109-108. The Hawks trailed by five with under two minutes remaining before Young orchestrated a masterful comeback, capping an 8-1 closing run with the kind of deep dagger that has become his signature. New York had controlled the fourth quarter behind Brunson's steady hand, but Young's clutch gene proved unstoppable when the lights burned brightest. This was vintage Ice Trae—cold-blooded, audacious, and absolutely devastating when it mattered most."
    },
    {
      gameId: "CLE-TOR-20260424",
      teams: { home: "TOR", away: "CLE" },
      finalScore: { home: 126, away: 104 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:18",
          description: "Barnes and Siakam combine for 12-0 personal run",
          runScore: "12-0",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "9:32",
          description: "Mitchell heats up with three straight triples to cut deficit",
          runScore: "11-2",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "notable"
        },
        {
          quarter: "Q3",
          timestamp: "5:41",
          description: "Raptors explode for 20-4 run behind suffocating defense",
          runScore: "20-4",
          momentum: "home",
          keyPlayer: "Pascal Siakam",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The Raptors delivered a statement victory that felt like a playoff preview, dismantling Cleveland 126-104 behind a dominant third-quarter surge that broke the game wide open. Pascal Siakam and Scottie Barnes formed a devastating frontcourt duo, combining for 51 points while Toronto's suffocating defense held Donovan Mitchell and the Cavaliers to just 42% shooting. The 20-4 third-quarter run was pure basketball artistry—crisp ball movement, lockdown defense, and the kind of energy that made Scotiabank Arena feel like a playoff cauldron. Cleveland never recovered from that knockout punch, as the Raptors showcased the two-way excellence that makes them a legitimate threat in the Eastern Conference."
    },
    {
      gameId: "DEN-MIN-20260424",
      teams: { home: "MIN", away: "DEN" },
      finalScore: { home: 113, away: 96 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:22",
          description: "Jokic dominates early with 11 points in first 8 minutes",
          runScore: "15-6",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "3:15",
          description: "Wolves respond with Gobert-anchored 16-4 defensive clinic",
          runScore: "16-4",
          momentum: "home",
          keyPlayer: "Rudy Gobert",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "8:47",
          description: "Edwards erupts for 17-point quarter with spectacular scoring display",
          runScore: "22-8",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "6:33",
          description: "McDaniels and Reid extend lead with timely threes and stops",
          runScore: "13-4",
          momentum: "home",
          keyPlayer: "Jaden McDaniels",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Anthony Edwards put on a third-quarter masterclass that left Target Center in a frenzy, scoring 17 points in 12 minutes to lead Minnesota's 113-96 demolition of the defending champion Nuggets. After a slow start that saw Nikola Jokic control the early tempo, the Wolves unleashed their defensive intensity and Edwards' explosive scoring to turn a competitive game into a rout. The two-time MVP finished with respectable numbers, but Denver had no answer for Minnesota's suffocating defense and Edwards' nuclear third quarter. This was the kind of complete performance that announces the Timberwolves as legitimate contenders—dominant on defense, explosive on offense, and utterly relentless when they smell blood."
    }
  ]
};