// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 26, 2026
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
  date: "April 26, 2026",
  gameOfTheNight: "DET-ORL-20260425",
  topClutchPerformer: { 
    player: "Paolo Banchero", 
    team: "ORL", 
    clutchRating: 95, 
    description: "Erupted for 11 fourth-quarter points including back-to-back threes during Orlando's decisive 15-4 run that stunned the top-seeded Pistons in the Magic's first playoff win in over a decade"
  },
  games: [
    {
      gameId: "DET-ORL-20260425",
      teams: { home: "ORL", away: "DET" },
      finalScore: { home: 113, away: 105 },
      swings: [
        {
          quarter: "1st",
          timestamp: "6:42",
          description: "Detroit opens with authority as Cade Cunningham scores 8 quick points",
          runScore: "DET 12-4 run",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "3:15",
          description: "Magic respond with energy as Banchero finds his rhythm with three straight buckets",
          runScore: "ORL 9-2 run",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "8:30",
          description: "Pistons push back behind their veteran leadership, extending to largest lead",
          runScore: "DET 13-6 run",
          momentum: "away",
          keyPlayer: "Isaiah Stewart",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "7:22",
          description: "Banchero ignites Kia Center with back-to-back threes, sparking the upset",
          runScore: "ORL 15-4 run",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Paolo Banchero",
          team: "ORL",
          description: "Step-back three over Isaiah Stewart to cut deficit to 2",
          timeRemaining: "4:18",
          winProbabilityShift: 18.4
        },
        {
          player: "Paolo Banchero", 
          team: "ORL",
          description: "Driving and-one layup to give Magic first lead since first quarter",
          timeRemaining: "2:45",
          winProbabilityShift: 24.7
        },
        {
          player: "Franz Wagner",
          team: "ORL", 
          description: "Clutch corner three off Banchero assist to seal the upset",
          timeRemaining: "1:02",
          winProbabilityShift: 31.2
        }
      ],
      narrative: "Paolo Banchero announced his playoff arrival with a performance that will echo through Magic lore for decades. Down 8 entering the fourth quarter, the 22-year-old superstar took over with the poise of a championship veteran, burying back-to-back threes that sent Kia Center into delirium and the heavily favored Pistons into panic mode. This wasn't just Orlando's first playoff victory in over a decade—it was a seismic shift in the franchise's trajectory, transforming from rebuilding afterthought to legitimate championship threat in one magical evening."
    },
    {
      gameId: "OKC-PHX-20260425",
      teams: { home: "PHX", away: "OKC" },
      finalScore: { home: 109, away: 121 },
      swings: [
        {
          quarter: "1st",
          timestamp: "9:15",
          description: "Thunder establish early dominance with Shai's explosive start",
          runScore: "OKC 14-3 run", 
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "5:42",
          description: "Suns fight back behind Booker's scoring burst and home crowd energy",
          runScore: "PHX 11-2 run",
          momentum: "home", 
          keyPlayer: "Devin Booker",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "4:20",
          description: "Oklahoma City's depth overwhelms aging Phoenix core with relentless pace",
          runScore: "OKC 18-7 run",
          momentum: "away",
          keyPlayer: "Jalen Williams", 
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Shai Gilgeous-Alexander orchestrated a basketball symphony in the desert, conducting Oklahoma City's championship orchestra with the precision of a maestro. The Thunder's suffocating defense and explosive pace exposed every weakness in Phoenix's aging foundation, turning what should have been a competitive playoff opener into a statement victory. This performance served notice to the entire Western Conference—the young Thunder aren't just happy to be here, they're here to claim the throne."
    },
    {
      gameId: "NYK-ATL-20260425",
      teams: { home: "ATL", away: "NYK" },
      finalScore: { home: 98, away: 114 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:30",
          description: "Hawks come out firing at home, Young orchestrating early offense",
          runScore: "ATL 10-2 run",
          momentum: "home",
          keyPlayer: "Trae Young", 
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "8:45",
          description: "Knicks' defensive pressure starts to wear down Atlanta's offensive flow",
          runScore: "NYK 16-6 run",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "significant"
        },
        {
          quarter: "3rd", 
          timestamp: "6:12",
          description: "New York's veteran experience takes control as Randle dominates inside",
          runScore: "NYK 12-4 run",
          momentum: "away",
          keyPlayer: "Julius Randle",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The Knicks imposed their defensive will on State Farm Arena like visiting conquerors, systematically dismantling Atlanta's high-octane offense with the kind of suffocating pressure that wins championships. Jalen Brunson conducted this defensive masterpiece while never forcing his own offense, proving that playoff basketball is won in the trenches, not in highlight reels. This wasn't just a road victory—it was a statement that New York's playoff experience and defensive identity can travel anywhere and dominate anyone."
    },
    {
      gameId: "DEN-MIN-20260425", 
      teams: { home: "MIN", away: "DEN" },
      finalScore: { home: 112, away: 96 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:20",
          description: "Nuggets assert early control behind Jokic's masterful passing display",
          runScore: "DEN 10-3 run",
          momentum: "away", 
          keyPlayer: "Nikola Jokic",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "4:35",
          description: "Edwards awakens Target Center with explosive athleticism and energy",
          runScore: "MIN 14-4 run",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "7:15", 
          description: "Timberwolves seize complete control with suffocating defense and transition offense",
          runScore: "MIN 18-6 run",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Anthony Edwards delivered a playoff performance that shook the championship landscape, outdueling the reigning MVP Nikola Jokic with the kind of explosive dominance that separates superstars from pretenders. The Timberwolves transformed Target Center into a house of horrors for the defending champions, proving their magical run last season was just the beginning of something special. This wasn't just Minnesota winning Game 1—it was Anthony Edwards announcing his arrival as the face of the NBA's next generation."
    }
  ]
};