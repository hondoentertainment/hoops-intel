// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 22, 2026
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
  generatedDate: string;
  date: string;
  games: MomentumSwing[];
  gameOfTheNight: string;
  topClutchPerformer: { player: string; team: string; clutchRating: number; description: string };
}

export const momentumData: MomentumData = {
  generatedDate: "2026-10-22",
  date: "October 22, 2026",
  gameOfTheNight: "IND-NO-20261021",
  topClutchPerformer: {
    player: "Tyrese Haliburton",
    team: "IND",
    clutchRating: 91,
    description: "Haliburton orchestrated Indiana's final-minute escape in New Orleans with back-to-back clutch possessions, delivering a go-ahead floater and a pull-up three that shattered Pelicans' late resistance and sealed the 123-120 road win.",
  },
  games: [
    {
      gameId: "ATL-ORL-20261021",
      teams: { home: "ORL", away: "ATL" },
      finalScore: { home: 125, away: 132 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Atlanta opened with a 14-4 burst to establish early road control, forcing Orlando into back-to-back timeouts.",
          runScore: "18-8 ATL",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "6:11",
          description: "Orlando trimmed the deficit to four on a 12-3 home run, briefly threatening to flip the game's narrative.",
          runScore: "76-72 ATL",
          momentum: "home",
          keyPlayer: "Paolo Banchero",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "8:45",
          description: "Atlanta answered immediately with a 15-6 closing run that slammed the door and secured the road win comfortably.",
          runScore: "121-110 ATL",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Atlanta executed a clean road victory, using Trae Young's playmaking to create early separation and then weathering Orlando's third-quarter surge with a decisive fourth-quarter response. The Hawks looked organized and purposeful — exactly the kind of road opener that builds early-season confidence. Orlando's inability to string together stops in the final frame was the defining story of their 0-1 start.",
    },
    {
      gameId: "MIL-WAS-20261021",
      teams: { home: "WAS", away: "MIL" },
      finalScore: { home: 128, away: 116 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "3:08",
          description: "Washington's guards exploited Milwaukee's second-unit defensive gaps with an 18-6 run that flipped a Bucks lead into a double-digit Washington advantage.",
          runScore: "62-49 WAS",
          momentum: "home",
          keyPlayer: "Kyle Kuzma",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:50",
          description: "Giannis personally engineered a 10-2 Milwaukee run to pull the Bucks within six, threatening a full second-half comeback.",
          runScore: "81-76 WAS",
          momentum: "away",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:30",
          description: "Washington's guards pushed the lead back to double digits with crisp ball movement, exposing Milwaukee's closing defensive rotations for the final time.",
          runScore: "112-98 WAS",
          momentum: "home",
          keyPlayer: "Kyle Kuzma",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Washington authored the East's biggest upset result of the opening slate, and it was no accident — the Wizards found gaps in Milwaukee's defensive structure all night, particularly against the Bucks' second unit. Giannis's individual brilliance kept Milwaukee within reach through three quarters but the supporting cast never answered. This result raises real structural questions about Milwaukee's depth that the desk will track closely.",
    },
    {
      gameId: "MIN-MIA-20261021",
      teams: { home: "MIA", away: "MIN" },
      finalScore: { home: 106, away: 131 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "2:15",
          description: "Minnesota's interior dominance was apparent from the opening minutes — a 16-4 start set the tone before Miami could establish any offensive rhythm.",
          runScore: "16-6 MIN",
          momentum: "away",
          keyPlayer: "Rudy Gobert",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:00",
          description: "Minnesota extended their lead with a 20-8 third-quarter run that effectively rendered the final twelve minutes academic.",
          runScore: "101-74 MIN",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "This was a complete organizational statement from the Timberwolves — they arrived in Miami with a defensive identity fully intact and suffocated the Heat from the opening tip. Gobert's 19-rebound, four-block interior presence made Minnesota's defensive system look virtually unsolvable, and Miami's perimeter creation generated almost nothing of value. The final margin of 25 understates how thoroughly Minnesota controlled this game.",
    },
    {
      gameId: "CHA-BKN-20261021",
      teams: { home: "BKN", away: "CHA" },
      finalScore: { home: 103, away: 110 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:30",
          description: "Charlotte built a 13-point halftime cushion on the strength of transition offense and Brooklyn's turnover-prone ball movement.",
          runScore: "52-39 CHA",
          momentum: "away",
          keyPlayer: "LaMelo Ball",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:10",
          description: "Brooklyn trimmed the deficit to four on a 14-5 home surge, putting genuine pressure on Charlotte's lead for the first time all night.",
          runScore: "98-94 BKN",
          momentum: "home",
          keyPlayer: "Cam Thomas",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "1:44",
          description: "LaMelo Ball answered Brooklyn's run with consecutive pull-up jumpers that pushed Charlotte back to a safe margin and closed the door.",
          runScore: "108-99 CHA",
          momentum: "away",
          keyPlayer: "LaMelo Ball",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "LaMelo Ball",
          team: "CHA",
          description: "Consecutive pull-up mid-range jumpers in the final two minutes pushed Charlotte's lead from four to nine and neutralized Brooklyn's comeback momentum entirely.",
          timeRemaining: "1:44",
          winProbabilityShift: 34,
        },
        {
          player: "Cam Thomas",
          team: "BKN",
          description: "Back-to-back drives through Charlotte's defense cut the deficit to four and forced a Charlotte timeout with Brooklyn smelling blood.",
          timeRemaining: "4:10",
          winProbabilityShift: -18,
        },
      ],
      narrative: "Charlotte looked like a legitimate road threat for three quarters before Brooklyn's fourth-quarter pride surge made this closer than the Hornets would have liked. LaMelo Ball's clutch-time shot-making was ultimately the difference — his pair of pull-up answers in crunch time showed the composure that separates him from the field in the East's second tier. Brooklyn's late energy creates a storyline to track but the result goes to Charlotte.",
    },
    {
      gameId: "CHI-TOR-20261021",
      teams: { home: "TOR", away: "CHI" },
      finalScore: { home: 135, away: 92 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:45",
          description: "Scottie Barnes imposed his will immediately — Toronto opened with a 22-6 run that made the crowd electric and established the blowout's foundational moment.",
          runScore: "22-8 TOR",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:00",
          description: "Toronto's reserves continued the demolition with a 19-6 third-quarter run, making it clear the starters' work was already done.",
          runScore: "104-72 TOR",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Toronto's 43-point destruction of Chicago was one of the most lopsided results the desk has processed on an NBA opening slate in recent memory. Scottie Barnes's two-way showcase was the engine, but the more damaging story is how thoroughly overmatched Chicago looked at every position — this was not a close game marred by late garbage time, it was a systematic dismantling from the first possession. The Scotiabank crowd got exactly what it came for.",
    },
    {
      gameId: "UTAH-MEM-20261021",
      teams: { home: "MEM", away: "UTAH" },
      finalScore: { home: 123, away: 103 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:20",
          description: "Memphis used a 17-5 second-quarter run to turn a three-point edge into a dominant halftime lead, exposing Utah's defensive rotations repeatedly in transition.",
          runScore: "64-44 MEM",
          momentum: "home",
          keyPlayer: "Ja Morant",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:00",
          description: "Utah's young core made a brief push to cut the deficit under fifteen, but Memphis's starters returned and promptly ended any suspense.",
          runScore: "103-90 MEM",
          momentum: "home",
          keyPlayer: "Ja Morant",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Memphis handled Utah with efficiency and physicality at FedExForum, with the Grizzlies' transition attack proving completely uncontainable for a Jazz defense still finding its organizational identity. Ja Morant's second-quarter sequence was the decisive moment — that 17-5 run buried Utah before halftime and the rest was management. The Grizzlies open 1-0 looking exactly like the team the desk projected entering the year.",
    },
    {
      gameId: "IND-NO-20261021",
      teams: { home: "NO", away: "IND" },
      finalScore: { home: 120, away: 123 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "2:30",
          description: "New Orleans erupted for a 16-4 run to seize their first lead since the first quarter, igniting the Smoothie King Center crowd.",
          runScore: "98-91 NO",
          momentum: "home",
          keyPlayer: "Zion Williamson",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:20",
          description: "Indiana steadied with an 11-4 answer that recaptured the lead and forced New Orleans into late-clock desperation possessions.",
          runScore: "112-108 IND",
          momentum: "away",
          keyPlayer: "Tyrese Haliburton",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "0:58",
          description: "New Orleans knotted the game at 119 on a Zion mid-post conversion, setting up a final-minute sequence that became the night's most compelling basketball.",
          runScore: "119-119",
          momentum: "home",
          keyPlayer: "Zion Williamson",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Tyrese Haliburton",
          team: "IND",
          description: "Haliburton split the New Orleans defense with a floater over the outstretched arm of the Pelicans' center to reclaim the lead with 38 seconds remaining.",
          timeRemaining: "0:38",
          winProbabilityShift: 41,
        },
        {
          player: "Zion Williamson",
          team: "NO",
          description: "Zion posted up and converted a turnaround mid-post jumper to tie the game at 119 with under a minute remaining, stunning a briefly quiet crowd.",
          timeRemaining: "0:58",
          winProbabilityShift: -29,
        },
        {
          player: "Tyrese Haliburton",
          team: "IND",
          description: "After Zion's tying bucket, Haliburton pushed the pace immediately and buried a pull-up three from the wing on a broken-play second-chance look to make it 122-119.",
          timeRemaining: "0:22",
          winProbabilityShift: 52,
        },
        {
          player: "Zion Williamson",
          team: "NO",
          description: "Zion drove the lane and drew contact for two free throws with eighteen seconds remaining, cutting the deficit to one and setting up a final Indiana possession.",
          timeRemaining: "0:18",
          winProbabilityShift: -21,
        },
      ],
      narrative: "This was unambiguously the best game of the night — a back-and-forth battle that New Orleans appeared to have stolen on a Zion tying bucket with under a minute left, only for Tyrese Haliburton to compose himself, push the pace immediately, and bury a pull-up three that shattered Pelicans' resistance in a single possession. The final 123-120 margin does not capture how electric the Smoothie King Center was in the final ninety seconds. Indiana leaves New Orleans with a road win and a clutch-time performance that will be referenced all season.",
    },
    {
      gameId: "DAL-HOU-20261021",
      teams: { home: "HOU", away: "DAL" },
      finalScore: { home: 128, away: 110 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:00",
          description: "Sengun's footwork and passing combinations generated a 19-7 Houston second-quarter run that turned a close game into a commanding halftime lead.",
          runScore: "68-50 HOU",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:15",
          description: "Dallas trimmed the deficit to eleven behind Luka's isolation scoring, briefly threatening to re-engage before Houston's perimeter players answered.",
          runScore: "88-77 HOU",
          momentum: "away",
          keyPlayer: "Luka Doncic",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Alperen Sengun imposed his will on Dallas in a way that the desk expects to see repeatedly this season — the Turkish big's combination of post footwork, passing angles and rebounding position created problems that the Mavericks had no systemic answer for. The game was functionally decided by halftime, and Houston's Toyota Center felt like a genuine home fortress from the second quarter on. The Rockets enter week two as the West's most interesting ascending organization.",
    },
    {
      gameId: "GSW-LAL-20261021",
      teams: { home: "LAL", away: "GSW" },
      finalScore: { home: 127, away: 105 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:00",
          description: "Anthony Davis announced his health immediately — a 14-2 Lakers opening run built on Davis rim protection and LeBron-to-Davis pick-and-roll execution established the game's dominant narrative.",
          runScore: "18-6 LAL",
          momentum: "home",
          keyPlayer: "Anthony Davis",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:40",
          description: "Golden State's perimeter shooting briefly connected for a 12-4 run that cut the lead to single digits, providing a momentary pulse of hope for the Warriors.",
          runScore: "82-74 LAL",
          momentum: "away",
          keyPlayer: "Stephen Curry",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "2:10",
          description: "Davis shut down the Warriors' momentum with back-to-back blocks and a transition dunk that pushed the lead back to sixteen and ended any serious Golden State threat.",
          runScore: "96-78 LAL",
          momentum: "home",
          keyPlayer: "Anthony Davis",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Anthony Davis erased the pregame shoulder concern narrative within the first six minutes and never looked back — his combination of offensive post dominance, pick-and-roll finishing, and four-block defensive performance was the most complete individual effort on the national slate. Golden State's brief third-quarter run offered a flicker of competitiveness but Davis personally extinguished it with consecutive blocks and a thunderous transition dunk. The Lakers look exactly like a championship-caliber team when Davis is operating at this level.",
    },
    {
      gameId: "PHX-POR-20261021",
      teams: { home: "POR", away: "PHX" },
      finalScore: { home: 124, away: 83 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:10",
          description: "Scoot Henderson's pace immediately overwhelmed Phoenix's defensive structure — a 20-4 Portland opening run set a tone that the Suns never recovered from.",
          runScore: "22-6 POR",
          momentum: "home",
          keyPlayer: "Scoot Henderson",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "8:00",
          description: "Portland's reserves continued the punishment with a 16-4 third-quarter run that made the final margin a legitimate organizational statement rather than a statistical anomaly.",
          runScore: "98-62 POR",
          momentum: "home",
          keyPlayer: "Scoot Henderson",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "The 41-point final margin is the kind of result that triggers front-office conversations in Phoenix the morning after — this was not a competitive NBA game by any measurable standard. Scoot Henderson's pace, vision and defensive disruption made Portland's switching system look virtually impossible to score against, and the Suns generated almost nothing of note offensively. Portland's home opening statement was emphatic; Phoenix's organizational reality check was equally so.",
    },
    {
      gameId: "SAC-LAC-20261021",
      teams: { home: "LAC", away: "SAC" },
      finalScore: { home: 121, away: 96 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:45",
          description: "The Intuit Dome crowd ignited as the Clippers unleashed a 21-7 second-quarter run that shattered what had been a competitive early game and announced their home-court identity.",
          runScore: "58-37 LAC",
          momentum: "home",
          keyPlayer: "Kawhi Leonard",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:30",
          description: "Sacramento made a brief push with a 10-2 run to trim the deficit to eighteen, but the Clippers' defensive rotations tightened immediately and killed any momentum.",
          runScore: "84-66 LAC",
          momentum: "away",
          keyPlayer: "De'Aaron Fox",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "The Intuit Dome delivered its first signature home-crowd moment as the Clippers' second-quarter burst put Sacramento away before the game could develop into anything resembling a contest. Kawhi Leonard's efficiency and defensive presence were the anchors, and the Clippers' organizational infrastructure looked fully operational in their new building. Sacramento's 0-1 start carries questions about whether their defense has the versatility to match the West's elite on any given night.",
    },
  ],
};