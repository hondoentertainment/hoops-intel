// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 9, 2026
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
  date: "April 9, 2026",
  gameOfTheNight: "ATL-CLE-20260408",
  topClutchPerformer: { 
    player: "Donovan Mitchell", 
    team: "CLE", 
    clutchRating: 92, 
    description: "Two clutch three-pointers in final four minutes sealed crucial playoff seeding victory" 
  },
  games: [
    {
      gameId: "OKC-LAC-20260408",
      teams: { home: "LAC", away: "OKC" },
      finalScore: { home: 110, away: 128 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:24",
          description: "Thunder opened with 12-0 run behind SGA's three consecutive buckets",
          runScore: "12-0",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "4:17",
          description: "Clippers responded with 14-4 burst led by Paul George's hot shooting",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Paul George",
          impact: "notable"
        },
        {
          quarter: "Q3",
          timestamp: "6:53",
          description: "Holmgren dominated the paint with 11 third-quarter points, OKC pulled away",
          runScore: "18-7",
          momentum: "away",
          keyPlayer: "Chet Holmgren",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The Thunder's championship statement was written in dominant ink from opening tip. Shai Gilgeous-Alexander conducted a symphony of basketball excellence, orchestrating runs that left the Clippers gasping for air at their own building. This wasn't just a victory—it was a declaration that Oklahoma City's time is now, completing their LA sweep with the ruthless efficiency of title contenders."
    },
    {
      gameId: "MIL-DET-20260408",
      teams: { home: "DET", away: "MIL" },
      finalScore: { home: 137, away: 111 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "9:12",
          description: "Pistons opened with devastating 16-2 run as Cunningham found every angle",
          runScore: "16-2",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing"
        },
        {
          quarter: "Q2",
          timestamp: "7:33",
          description: "Milwaukee briefly fought back with Giannis attacking the rim relentlessly",
          runScore: "10-3",
          momentum: "away",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "2:45",
          description: "Detroit answered immediately with 15-5 counter-punch to close the half",
          runScore: "15-5",
          momentum: "home",
          keyPlayer: "Isaiah Stewart",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "This was basketball brutality disguised as artistry, with Cade Cunningham wielding his court vision like a master painter's brush. Detroit's demolition of Milwaukee wasn't just dominant—it was prophetic, a glimpse into the vast chasm between the conferences' elite. The Pistons turned Little Caesars Arena into a championship showcase, leaving the Bucks wondering how they fell so far from grace."
    },
    {
      gameId: "ATL-CLE-20260408",
      teams: { home: "CLE", away: "ATL" },
      finalScore: { home: 122, away: 116 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:18",
          description: "Cavaliers surged with 11-2 run as Mitchell caught fire from deep",
          runScore: "11-2",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "8:41",
          description: "Hawks roared back with 16-6 burst led by Young's vintage playmaking",
          runScore: "16-6",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "5:23",
          description: "Murray's aggressive drives sparked 12-4 Atlanta run to tie the game",
          runScore: "12-4",
          momentum: "away",
          keyPlayer: "Dejounte Murray",
          impact: "significant"
        }
      ],
      clutchPlays: [
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Step-back three over Murray with shot clock expiring",
          timeRemaining: "3:47",
          winProbabilityShift: 18
        },
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Deep three from the logo after Hawks timeout",
          timeRemaining: "1:52",
          winProbabilityShift: 24
        },
        {
          player: "Trae Young",
          team: "ATL",
          description: "Floater through traffic to cut deficit to four",
          timeRemaining: "1:14",
          winProbabilityShift: -12
        }
      ],
      narrative: "Rocket Arena witnessed playoff basketball in April as two desperate teams clawed for postseason positioning. Mitchell's clutch gene activated when it mattered most, his deep three-point daggers silencing a Hawks comeback that had all the ingredients of heartbreak. This was the kind of game that defines seasons—where stars separate themselves from pretenders in the crucible of late-game pressure."
    },
    {
      gameId: "POR-SA-20260408",
      teams: { home: "SA", away: "POR" },
      finalScore: { home: 112, away: 101 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:29",
          description: "Wembanyama's rim protection sparked 10-0 Spurs run",
          runScore: "10-0",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "5:44",
          description: "Lillard's three-point barrage fueled 13-3 Portland surge",
          runScore: "13-3",
          momentum: "away",
          keyPlayer: "Damian Lillard",
          impact: "notable"
        },
        {
          quarter: "Q3",
          timestamp: "9:15",
          description: "Vassell and Wemby combined for 12-2 run to regain control",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "The Frost Bank Center remains an impenetrable fortress, with Wembanyama standing guard like a basketball sentinel. San Antonio's perfect home record isn't just about wins and losses—it's about the psychological warfare of invincibility. Every game at home feels like destiny manifesting, with the young phenom orchestrating victories that feel both inevitable and awe-inspiring."
    },
    {
      gameId: "MIN-ORL-20260408",
      teams: { home: "ORL", away: "MIN" },
      finalScore: { home: 132, away: 120 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:17",
          description: "Edwards answered with explosive 9-0 personal run",
          runScore: "9-0",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "9:43",
          description: "Banchero took over with 14 points in blistering third quarter",
          runScore: "18-7",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "6:22",
          description: "Wagner's timely buckets sealed the upset victory",
          runScore: "8-2",
          momentum: "home",
          keyPlayer: "Franz Wagner",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Paolo Banchero announced his arrival as a playoff threat with the kind of performance that reshuffles postseason expectations. The Magic's upset wasn't lucky—it was earned through the rising star's dominant will and Orlando's collective belief in their impossible dream. Minnesota learned that young hunger often devours veteran experience when the stakes are highest."
    },
    {
      gameId: "MEM-DEN-20260408",
      teams: { home: "DEN", away: "MEM" },
      finalScore: { home: 136, away: 119 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:38",
          description: "Jokić's early triple-double pace ignited 14-4 Nuggets burst",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Nikola Jokić",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "4:55",
          description: "Morant's return sparked brief 8-0 Memphis rally",
          runScore: "8-0",
          momentum: "away",
          keyPlayer: "Ja Morant",
          impact: "notable"
        },
        {
          quarter: "Q3",
          timestamp: "7:12",
          description: "Porter Jr. caught fire with four threes in game-breaking 16-5 run",
          runScore: "16-5",
          momentum: "home",
          keyPlayer: "Michael Porter Jr.",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Nikola Jokić reminded everyone why he's basketball's most complete weapon, conducting Denver's offensive symphony with triple-double mastery. Ball Arena became his personal concert hall, where every pass was poetry and every rebound a statement of dominance. The Nuggets' championship window isn't closing—it's wide open, with Jokić holding the keys to basketball immortality."
    }
  ]
};