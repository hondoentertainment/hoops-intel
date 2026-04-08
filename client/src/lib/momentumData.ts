// Momentum Engine — Real-time narrative momentum shifts
// Last updated: April 8, 2026
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
  date: "April 8, 2026",
  gameOfTheNight: "BKN-MIL-20260407",
  topClutchPerformer: { 
    player: "Cam Thomas", 
    team: "BKN", 
    clutchRating: 92, 
    description: "Hit a dagger three with 1:47 remaining to put away the Bucks in a stunning upset" 
  },
  games: [
    {
      gameId: "OKC-LAL-20260407",
      teams: { home: "LAL", away: "OKC" },
      finalScore: { home: 87, away: 123 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:34",
          description: "Thunder exploded with a 15-2 run to take control early",
          runScore: "15-2",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing"
        },
        {
          quarter: "2nd",
          timestamp: "3:12",
          description: "Chet Holmgren's perfect shooting display extends the lead to 30",
          runScore: "12-4",
          momentum: "away",
          keyPlayer: "Chet Holmgren",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "8:45",
          description: "Lakers showed brief signs of life with an 8-0 run",
          runScore: "8-0",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "notable"
        }
      ],
      clutchPlays: [],
      narrative: "This wasn't just a loss for the Lakers — it was a public execution. Oklahoma City turned Crypto.com Arena into their personal playground, delivering the most emphatic championship statement of the season. The Thunder were so dominant that Shai Gilgeous-Alexander barely broke a sweat in just 29 minutes of action. This massacre sent shockwaves through the Western Conference and established OKC as the team nobody wants to face in the playoffs."
    },
    {
      gameId: "UTAH-NO-20260407",
      teams: { home: "NO", away: "UTAH" },
      finalScore: { home: 156, away: 137 },
      swings: [
        {
          quarter: "1st",
          timestamp: "5:22",
          description: "CJ McCollum caught fire with four straight threes",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "CJ McCollum",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "9:15",
          description: "Jazz answered with a Markkanen-led 10-0 run to stay within striking distance",
          runScore: "10-0",
          momentum: "away",
          keyPlayer: "Lauri Markkanen",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "6:33",
          description: "Pelicans' Big Three exploded for 18 points in four minutes",
          runScore: "18-6",
          momentum: "home",
          keyPlayer: "Brandon Ingram",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "4:12",
          description: "McCollum's ninth three-pointer sent the crowd into delirium",
          runScore: "7-2",
          momentum: "home",
          keyPlayer: "CJ McCollum",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "The Smoothie King Center witnessed basketball poetry in motion as CJ McCollum orchestrated one of the most spectacular offensive exhibitions of the season. Every shot seemed to find the bottom of the net in a display that left even opposing players shaking their heads in amazement. The Pelicans may be out of playoff contention, but they reminded everyone why their ceiling is astronomical when healthy. This was the kind of performance that legends are made of."
    },
    {
      gameId: "HOU-PHX-20260407",
      teams: { home: "PHX", away: "HOU" },
      finalScore: { home: 105, away: 119 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:11",
          description: "Rockets jumped out with a 12-0 run behind Şengün's dominance",
          runScore: "12-0",
          momentum: "away",
          keyPlayer: "Alperen Şengün",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "4:45",
          description: "Booker and Durant combined for 14 points to cut the deficit",
          runScore: "14-6",
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "7:28",
          description: "Houston's defense forced six turnovers in a crushing 16-4 run",
          runScore: "16-4",
          momentum: "away",
          keyPlayer: "Jabari Smith Jr.",
          impact: "game-changing"
        }
      ],
      clutchPlays: [],
      narrative: "Alperen Şengün put on a masterclass in modern center play, controlling every facet of the game like a chess grandmaster. The Rockets' combination of size, skill, and defensive intensity overwhelmed a Suns team that simply couldn't match their playoff-level execution. Houston's stranglehold on the third seed got even tighter with this dominant road performance. The Rockets are quickly becoming the West's most dangerous dark horse."
    },
    {
      gameId: "MIL-BKN-20260407",
      teams: { home: "BKN", away: "MIL" },
      finalScore: { home: 96, away: 90 },
      swings: [
        {
          quarter: "1st",
          timestamp: "6:18",
          description: "Giannis powered Milwaukee to an early 8-2 advantage",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "notable"
        },
        {
          quarter: "2nd",
          timestamp: "5:43",
          description: "Nets' defense sparked a 10-0 run with three straight steals",
          runScore: "10-0",
          momentum: "home",
          keyPlayer: "Mikal Bridges",
          impact: "significant"
        },
        {
          quarter: "3rd",
          timestamp: "2:21",
          description: "Thomas took over with 12 points in the quarter's final four minutes",
          runScore: "12-4",
          momentum: "home",
          keyPlayer: "Cam Thomas",
          impact: "significant"
        },
        {
          quarter: "4th",
          timestamp: "1:47",
          description: "Thomas hit the dagger three to seal the upset victory",
          runScore: "5-0",
          momentum: "home",
          keyPlayer: "Cam Thomas",
          impact: "game-changing"
        }
      ],
      clutchPlays: [
        {
          player: "Cam Thomas",
          team: "BKN",
          description: "Clutch three-pointer over Brook Lopez with shot clock winding down",
          timeRemaining: "1:47",
          winProbabilityShift: 28
        },
        {
          player: "Nicolas Claxton",
          team: "BKN",
          description: "Crucial defensive stop and layup to extend lead",
          timeRemaining: "1:12",
          winProbabilityShift: 15
        },
        {
          player: "Giannis Antetokounmpo",
          team: "MIL",
          description: "Missed crucial free throws that could have tied the game",
          timeRemaining: "0:38",
          winProbabilityShift: -12
        }
      ],
      narrative: "In a season filled with disappointment, the Nets delivered their most satisfying victory by playing spoiler to Milwaukee's fading playoff hopes. Cam Thomas showed ice in his veins when it mattered most, hitting the dagger three that sent shockwaves through the Bucks' championship aspirations. This defensive slugfest proved that in the NBA, any team can rise up on any given night. The upset victory was a beautiful reminder of basketball's unpredictable magic."
    },
    {
      gameId: "CHI-WSH-20260407",
      teams: { home: "WSH", away: "CHI" },
      finalScore: { home: 98, away: 129 },
      swings: [
        {
          quarter: "1st",
          timestamp: "8:45",
          description: "DeRozan's mid-range mastery sparked an early 14-4 Bulls run",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "DeMar DeRozan",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "6:12",
          description: "Chicago extended their lead with a 16-6 run to close the half",
          runScore: "16-6",
          momentum: "away",
          keyPlayer: "Coby White",
          impact: "game-changing"
        },
        {
          quarter: "3rd",
          timestamp: "4:33",
          description: "Bulls' ball movement created a 12-0 run that broke the game open",
          runScore: "12-0",
          momentum: "away",
          keyPlayer: "Nikola Vučević",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "DeMar DeRozan continues to be a beacon of professionalism in what has been a forgettable season for Chicago. His vintage mid-range artistry and veteran leadership helped the Bulls dominate the league's worst team with businesslike efficiency. Washington offered little resistance in a game that felt like a scrimmage from the opening tip. The Bulls' recent surge has been a silver lining in an otherwise disappointing campaign, with DeRozan showing the young players what championship-level work ethic looks like."
    },
    {
      gameId: "MIN-IND-20260407",
      teams: { home: "IND", away: "MIN" },
      finalScore: { home: 104, away: 124 },
      swings: [
        {
          quarter: "1st",
          timestamp: "7:22",
          description: "Edwards erupted for 12 points in a 16-4 Minnesota explosion",
          runScore: "16-4",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "significant"
        },
        {
          quarter: "2nd",
          timestamp: "5:18",
          description: "Pacers rallied with an 11-2 run behind Haliburton's playmaking",
          runScore: "11-2",
          momentum: "home",
          keyPlayer: "Tyrese Haliburton",
          impact: "notable"
        },
        {
          quarter: "3rd",
          timestamp: "8:34",
          description: "Timberwolves' transition attack produced a game-breaking 18-6 run",
          runScore: "18-6",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing"
        },
        {
          quarter: "4th",
          timestamp: "6:41",
          description: "McDaniels and Towns combined for 10 points to seal the victory",
          runScore: "10-3",
          momentum: "away",
          keyPlayer: "Jaden McDaniels",
          impact: "significant"
        }
      ],
      clutchPlays: [],
      narrative: "Anthony Edwards put on a show worthy of his rising superstar status, turning Gainbridge Fieldhouse into his personal highlight reel. The explosive guard's combination of athleticism and improved decision-making has been the catalyst for Minnesota's late-season surge. His transition dunks and clutch three-pointers left the Indiana crowd in awe and opposing defenders helpless. The Timberwolves are peaking at the perfect time, and Edwards is showing why he's ready to carry them deep into the playoffs."
    }
  ]
};