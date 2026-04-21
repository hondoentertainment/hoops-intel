// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 21, 2026
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
  date: "April 21, 2026",
  gameOfTheNight: "ATL-NYK-20260420",
  topClutchPerformer: { 
    player: "Trae Young", 
    team: "ATL", 
    clutchRating: 98, 
    description: "Step-back dagger three over Brunson with 8.4 seconds left to steal victory at MSG" 
  },
  games: [
    {
      gameId: "ATL-NYK-20260420",
      teams: { home: "NYK", away: "ATL" },
      finalScore: { home: 106, away: 107 },
      swings: [
        {
          quarter: "2nd",
          timestamp: "3:45",
          description: "Brunson erupts for 12 straight points, including four consecutive pull-up jumpers",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "7:22",
          description: "Randle powers inside for 9 points in 3 minutes as Knicks build commanding lead",
          runScore: "13-4",
          momentum: "home",
          keyPlayer: "Julius Randle",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "8:15",
          description: "Young catches fire from deep with three consecutive triples to ignite Hawks comeback",
          runScore: "11-2",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "2:30",
          description: "Hawks complete stunning 18-5 surge to erase 12-point deficit and take the lead",
          runScore: "18-5",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Trae Young",
          team: "ATL",
          description: "Freezes Brunson with hesitation dribble before draining contested three",
          timeRemaining: "2:45",
          winProbabilityShift: 28
        },
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Answers back with driving layup through traffic to tie the game",
          timeRemaining: "1:55",
          winProbabilityShift: -15
        },
        {
          player: "Trae Young",
          team: "ATL",
          description: "Step-back dagger three over Brunson with precision and ice in his veins",
          timeRemaining: "0:08",
          winProbabilityShift: 85
        }
      ],
      narrative: "Trae Young authored one of the most ruthless road performances in recent memory, transforming Madison Square Garden from a raucous celebration into a tomb of silence. His fourth-quarter masterclass was a clinic in shot-making and shot-creating, systematically dismantling the Knicks' season-high crowd with surgical precision. The step-back three over Brunson will be replayed for years as the moment Young announced himself as a bonafide superstar capable of stealing games in the most hostile environments. This was basketball artistry at its most vicious and beautiful."
    },
    {
      gameId: "MIN-DEN-20260420",
      teams: { home: "DEN", away: "MIN" },
      finalScore: { home: 114, away: 119 },
      swings: [
        {
          quarter: "1st",
          timestamp: "4:12",
          description: "Edwards explodes for 14 first-quarter points on perfect shooting to stun Denver crowd",
          runScore: "16-6",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "6:30",
          description: "Jokić orchestrates beautiful ball movement for 10-0 run to reclaim home momentum",
          runScore: "10-0",
          momentum: "home",
          keyPlayer: "Nikola Jokić",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "9:45",
          description: "McDaniels and Towns combine for 14 points as Minnesota builds separation",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Jaden McDaniels",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "5:20",
          description: "Edwards takes over with three straight threes to break Denver's spirit and seal upset",
          runScore: "13-3",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Step-back three from the logo over Aaron Gordon's outstretched arm",
          timeRemaining: "4:45",
          winProbabilityShift: 22
        },
        {
          player: "Nikola Jokić",
          team: "DEN",
          description: "No-look pass to Murray for three to keep Nuggets within striking distance",
          timeRemaining: "3:10",
          winProbabilityShift: -18
        },
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Drives baseline and finishes with authority over Jokić to ice the game",
          timeRemaining: "1:25",
          winProbabilityShift: 35
        }
      ],
      narrative: "Anthony Edwards delivered a coming-of-age performance that announced Minnesota as a legitimate threat to the reigning champions. His shot-making display was both breathtaking and ruthless, consistently answering every Denver rally with increasingly difficult baskets that seemed to defy physics. The Nuggets' 13-game winning streak never stood a chance against Edwards in this kind of zone, as he turned Ball Arena into his personal playground. This victory will be remembered as the night Edwards graduated from promising young star to genuine superstar capable of carrying his team to the biggest wins."
    },
    {
      gameId: "TOR-CLE-20260420",
      teams: { home: "CLE", away: "TOR" },
      finalScore: { home: 115, away: 105 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:30",
          description: "Barnes powers Toronto to early lead with aggressive drives and defensive energy",
          runScore: "12-4",
          momentum: "away",
          keyPlayer: "Scottie Barnes",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "5:15",
          description: "Mitchell heats up with three consecutive scoring possessions to flip momentum",
          runScore: "9-2",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "6:45",
          description: "Mobley dominates both ends with 10 points and 2 blocks to break game open",
          runScore: "15-6",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "7:20",
          description: "Cavaliers depth overwhelms tired Raptors with balanced scoring attack",
          runScore: "18-8",
          momentum: "home",
          keyPlayer: "Darius Garland",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Evan Mobley's two-way dominance showcased exactly why Cleveland believes they can make serious playoff noise this spring. His combination of offensive efficiency and defensive intimidation created the perfect storm that overwhelmed Toronto's scrappy effort. The Cavaliers' superior depth and execution in the second half demonstrated the kind of championship-caliber basketball that makes them such a dangerous playoff matchup. This was a statement win that should serve notice to the Eastern Conference that Cleveland is ready for prime time."
    }
  ]
};