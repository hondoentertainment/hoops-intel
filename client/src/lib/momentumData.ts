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
    clutchRating: 94, 
    description: "Led decisive 15-4 fourth quarter run to complete stunning upset of top-seeded Pistons in playoff debut" 
  },
  games: [
    {
      gameId: "DET-ORL-20260425",
      teams: { home: "ORL", away: "DET" },
      finalScore: { home: 113, away: 105 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:42",
          description: "Detroit races out to early double-digit lead behind Cade Cunningham's explosive start",
          runScore: "12-2",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "8:15",
          description: "Orlando's home crowd erupts as Magic claw back with suffocating defense and transition buckets",
          runScore: "16-6",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "4:21",
          description: "Pistons reassert control with veteran poise, building their largest lead of the night",
          runScore: "11-3",
          momentum: "away",
          keyPlayer: "Isaiah Stewart",
          impact: "notable"
        },
        {
          quarter: "Q4",
          timestamp: "7:45",
          description: "Banchero takes over completely, scoring 12 points in game-changing run that stuns Kia Center",
          runScore: "15-4",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Paolo Banchero",
          team: "ORL",
          description: "Step-back three over two defenders to give Magic the lead",
          timeRemaining: "3:42",
          winProbabilityShift: 28
        },
        {
          player: "Paolo Banchero", 
          team: "ORL",
          description: "Driving layup through contact plus the foul to extend lead to 5",
          timeRemaining: "1:58",
          winProbabilityShift: 31
        },
        {
          player: "Cade Cunningham",
          team: "DET", 
          description: "Clutch three-pointer cuts deficit to 4 points",
          timeRemaining: "1:15",
          winProbabilityShift: -22
        }
      ],
      narrative: "In what may go down as the defining moment of Paolo Banchero's career, the young star delivered a masterclass in clutch execution to complete one of the most stunning upsets in recent playoff memory. The Magic's first playoff victory in over a decade didn't just announce their arrival—it served notice that this young core has championship DNA. Detroit's championship aspirations took a devastating blow as they discovered that regular season dominance means nothing without playoff heart. The series has been completely flipped on its head, transforming from a potential sweep into a legitimate upset threat that has the entire basketball world talking."
    },
    {
      gameId: "OKC-PHX-20260425", 
      teams: { home: "PHX", away: "OKC" },
      finalScore: { home: 109, away: 121 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:23",
          description: "Phoenix veterans show early playoff poise, building comfortable early advantage at home",
          runScore: "14-5",
          momentum: "home", 
          keyPlayer: "Devin Booker",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "5:17",
          description: "Thunder's suffocating defense triggers massive turnaround, completely flipping the script",
          runScore: "20-7",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander", 
          impact: "game-changing"
        },
        {
          quarter: "Q3", 
          timestamp: "8:42",
          description: "OKC's depth overwhelms aging Suns core, building commanding 20-point advantage",
          runScore: "18-8",
          momentum: "away",
          keyPlayer: "Jalen Williams",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "6:30",
          description: "Suns mount desperate rally but Thunder's championship composure never wavers",
          runScore: "12-4", 
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "notable"
        }
      ],
      clutchPlays: [],
      narrative: "The Thunder's championship intentions were crystal clear as they methodically dismantled Phoenix with the kind of systematic dominance that separates contenders from pretenders. Shai Gilgeous-Alexander looked every bit the MVP candidate while orchestrating an offensive clinic that left the Suns scrambling for answers. Oklahoma City's combination of youthful athleticism and veteran leadership created a suffocating environment that completely neutralized Phoenix's home court advantage. This wasn't just a victory—it was a statement that the West's top seed has no intention of relinquishing their crown without a championship fight."
    },
    {
      gameId: "NYK-ATL-20260425",
      teams: { home: "ATL", away: "NYK" },
      finalScore: { home: 98, away: 114 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "9:15", 
          description: "Trae Young silences doubters with explosive start, giving Hawks early momentum in hostile State Farm Arena",
          runScore: "13-4",
          momentum: "home",
          keyPlayer: "Trae Young", 
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "4:38",
          description: "Knicks' championship DNA emerges as they methodically erase deficit with suffocating defense",
          runScore: "16-6",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "6:12",
          description: "New York's playoff experience shows as they build commanding double-digit road lead",
          runScore: "22-11", 
          momentum: "away",
          keyPlayer: "Julius Randle",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The Knicks' playoff pedigree was on full display as they systematically dismantled Atlanta's home court advantage with the kind of suffocating defense that wins championships. Jalen Brunson's masterful floor leadership completely neutralized Trae Young's explosive offense, turning what should have been a hostile environment into a showcase for New York's championship aspirations. This victory established the Knicks as the clear series favorites while proving that their defensive identity travels exceptionally well in high-pressure playoff environments. Atlanta's young core learned a harsh lesson about the difference between regular season success and playoff execution."
    },
    {
      gameId: "DEN-MIN-20260425",
      teams: { home: "MIN", away: "DEN" },
      finalScore: { home: 112, away: 96 },
      swings: [
        {
          quarter: "Q1", 
          timestamp: "8:27",
          description: "Defending champion Nuggets assert early dominance with vintage Jokic orchestration",
          runScore: "10-2",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "5:44", 
          description: "Edwards explodes for 16 second-quarter points, completely shifting energy at Target Center",
          runScore: "24-10",
          momentum: "home",
          keyPlayer: "Anthony Edwards", 
          impact: "game-changing"
        },
        {
          quarter: "Q3",
          timestamp: "7:18",
          description: "Timberwolves' defensive intensity overwhelms sluggish Nuggets, building commanding advantage",
          runScore: "18-7",
          momentum: "home",
          keyPlayer: "Rudy Gobert",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Anthony Edwards announced his arrival as a legitimate championship centerpiece by completely outdueling the reigning MVP in a performance that had Target Center rocking like the old playoff days. The Timberwolves proved their magical run last season was no fluke, showcasing the kind of two-way dominance that makes them a nightmare matchup for any championship contender. Denver's championship defense looked vulnerable and sluggish against Minnesota's explosive athleticism, raising serious questions about their ability to repeat. This statement victory established the Timberwolves as a legitimate championship threat while serving notice that the Northwest Division runs through Minneapolis this spring."
    }
  ]
};