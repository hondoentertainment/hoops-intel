// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 10, 2026
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
  date: "April 10, 2026",
  gameOfTheNight: "BOS-NY-20260409",
  topClutchPerformer: { 
    player: "Jalen Brunson", 
    team: "NY", 
    clutchRating: 92, 
    description: "Scored 8 points in final 3 minutes including go-ahead three-pointer to silence Celtics comeback attempt at MSG"
  },
  games: [
    {
      gameId: "MIA-TOR-20260409",
      teams: { home: "TOR", away: "MIA" },
      finalScore: { home: 128, away: 114 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:42",
          description: "Heat jump out early with Butler driving and Adebayo finishing inside",
          runScore: "12-4 MIA",
          momentum: "away",
          keyPlayer: "Jimmy Butler",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "6:15",
          description: "Siakam takes over with three straight buckets, Scottie Barnes finds his rhythm",
          runScore: "18-6 TOR",
          momentum: "home",
          keyPlayer: "Pascal Siakam",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "4:30",
          description: "Toronto explodes out of halftime with suffocating defense creating easy transition buckets",
          runScore: "22-8 TOR",
          momentum: "home",
          keyPlayer: "OG Anunoby",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "9:12",
          description: "Heat make desperate push behind Butler's aggressive drives but can't sustain",
          runScore: "11-4 MIA",
          momentum: "away",
          keyPlayer: "Jimmy Butler",
          impact: "notable"
        }
      ],
      clutchPlays: [],
      narrative: "The Raptors delivered a masterclass in playoff-caliber basketball, with Siakam orchestrating the symphony from start to finish. Toronto's third-quarter explosion turned a competitive game into a rout, showcasing the depth and execution that could make them dangerous in the postseason. The victory sends a clear message to the Eastern Conference that this Raptors team is peaking at exactly the right moment."
    },
    {
      gameId: "LAL-GS-20260409",
      teams: { home: "GS", away: "LAL" },
      finalScore: { home: 103, away: 119 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:23",
          description: "Warriors strike first with Curry hitting two early threes at Chase Center",
          runScore: "14-6 GS",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "5:47",
          description: "LeBron takes control with vintage drives and finds Davis for easy buckets",
          runScore: "16-7 LAL",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "2:18",
          description: "Lakers defense clamps down, forcing Warriors turnovers and extending lead",
          runScore: "20-9 LAL",
          momentum: "away",
          keyPlayer: "Anthony Davis",
          impact: "game-changing"
        },
        {
          quarter: "Q4",
          timestamp: "6:32",
          description: "Warriors make final push behind Thompson's shooting but Lakers answer every run",
          runScore: "12-8 GS",
          momentum: "home",
          keyPlayer: "Klay Thompson",
          impact: "notable"
        }
      ],
      clutchPlays: [],
      narrative: "LeBron James turned back the clock in enemy territory, delivering a vintage performance that may have ended Golden State's playoff hopes. The Lakers' suffocating defense and balanced scoring overwhelmed a Warriors team that looked every bit their age and limitations. This wasn't just a victory—it was a statement that the Lakers are ready for another postseason run while potentially closing the book on the Warriors' dynasty era."
    },
    {
      gameId: "BOS-NY-20260409",
      teams: { home: "NY", away: "BOS" },
      finalScore: { home: 112, away: 106 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "9:14",
          description: "Madison Square Garden erupts as Knicks start hot with Brunson facilitating beautiful ball movement",
          runScore: "13-4 NY",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "3:52",
          description: "Tatum and Brown combine for 14 straight points to swing momentum back to Boston",
          runScore: "14-6 BOS",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "6:08",
          description: "Physical defense defines the quarter with neither team able to establish rhythm",
          runScore: "8-8 TIE",
          momentum: "home",
          keyPlayer: "Mitchell Robinson",
          impact: "notable"
        },
        {
          quarter: "Q4",
          timestamp: "2:47",
          description: "Brunson hits clutch three-pointer over Brown as MSG reaches fever pitch",
          runScore: "9-4 NY",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "NY",
          description: "Step-back three-pointer over Jaylen Brown to break 103-103 tie",
          timeRemaining: "2:47",
          winProbabilityShift: 18.5
        },
        {
          player: "Julius Randle",
          team: "NY",
          description: "Offensive rebound and putback after missed free throw",
          timeRemaining: "1:23",
          winProbabilityShift: 12.3
        },
        {
          player: "Jayson Tatum",
          team: "BOS",
          description: "Contested three-pointer to cut deficit to 3 points",
          timeRemaining: "0:38",
          winProbabilityShift: -8.7
        }
      ],
      narrative: "This was playoff basketball in April, with Madison Square Garden providing the perfect soundtrack to a heavyweight bout. Jalen Brunson proved he belongs among the elite point guards with his clutch shooting and leadership in crunch time. The victory wasn't just about climbing the standings—it was about the Knicks proving they can go toe-to-toe with championship contenders when the lights are brightest."
    },
    {
      gameId: "PHI-HOU-20260409",
      teams: { home: "HOU", away: "PHI" },
      finalScore: { home: 113, away: 102 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:45",
          description: "Embiid dominates early possessions with his size advantage in the paint",
          runScore: "10-4 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "8:33",
          description: "Şengün showcases his playmaking with four assists in five minutes, Rockets surge",
          runScore: "15-7 HOU",
          momentum: "home",
          keyPlayer: "Alperen Şengün",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "4:21",
          description: "Smith Jr. catches fire from three-point range as Houston extends lead",
          runScore: "16-9 HOU",
          momentum: "home",
          keyPlayer: "Jabari Smith Jr.",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "7:18",
          description: "76ers make final push but Rockets' depth and ball movement prove decisive",
          runScore: "11-8 HOU",
          momentum: "home",
          keyPlayer: "Fred VanVleet",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Alperen Şengün continues to emerge as one of the league's most versatile big men, orchestrating Houston's offense like a seasoned floor general. The Rockets' balanced attack and relentless energy exposed Philadelphia's defensive limitations at the worst possible time. This victory solidifies Houston's championship aspirations while raising serious questions about Philadelphia's ability to make noise in the postseason."
    },
    {
      gameId: "IND-BKN-20260409",
      teams: { home: "BKN", away: "IND" },
      finalScore: { home: 94, away: 123 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "9:42",
          description: "Mathurin explodes out of the gate with three straight three-pointers",
          runScore: "15-3 IND",
          momentum: "away",
          keyPlayer: "Bennedict Mathurin",
          impact: "significant"
        },
        {
          quarter: "Q2",
          timestamp: "5:29",
          description: "Haliburton finds his passing rhythm, Pacers ball movement becomes unstoppable",
          runScore: "18-8 IND",
          momentum: "away",
          keyPlayer: "Tyrese Haliburton",
          impact: "game-changing"
        },
        {
          quarter: "Q3",
          timestamp: "7:15",
          description: "Thomas tries to rally Nets with scoring burst but Pacers answer every shot",
          runScore: "14-11 IND",
          momentum: "away",
          keyPlayer: "Cam Thomas",
          impact: "notable"
        }
      ],
      clutchPlays: [],
      narrative: "Bennedict Mathurin announced himself as a rising star with a dominant performance that showcased his scoring versatility and confidence. The Pacers' young core played with the chemistry and precision of a veteran team, making this blowout feel inevitable by halftime. While both teams are playing for draft position, performances like this suggest Indiana's rebuild is ahead of schedule."
    },
    {
      gameId: "CHI-WSH-20260409",
      teams: { home: "WSH", away: "CHI" },
      finalScore: { home: 108, away: 119 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:17",
          description: "Poole starts aggressive for Washington with early three-pointers",
          runScore: "11-5 WSH",
          momentum: "home",
          keyPlayer: "Jordan Poole",
          impact: "notable"
        },
        {
          quarter: "Q2",
          timestamp: "6:54",
          description: "White and DeRozan combine for efficient scoring to flip momentum",
          runScore: "14-6 CHI",
          momentum: "away",
          keyPlayer: "Coby White",
          impact: "significant"
        },
        {
          quarter: "Q3",
          timestamp: "3:41",
          description: "Bulls extend lead with balanced scoring and improved defensive effort",
          runScore: "16-10 CHI",
          momentum: "away",
          keyPlayer: "DeMar DeRozan",
          impact: "significant"
        },
        {
          quarter: "Q4",
          timestamp: "4:32",
          description: "Wizards make late push but can't overcome their defensive struggles",
          runScore: "12-8 WSH",
          momentum: "home",
          keyPlayer: "Kyle Kuzma",
          impact: "notable"
        }
      ],
      clutchPlays: [],
      narrative: "In a game between two disappointing seasons, Coby White provided a glimpse of what could have been with his efficient scoring and playmaking. The Bulls showed flashes of the team many expected them to be, while Washington continued to struggle with the defensive consistency that has plagued them all season. Both franchises will enter the offseason with more questions than answers."
    }
  ]
};