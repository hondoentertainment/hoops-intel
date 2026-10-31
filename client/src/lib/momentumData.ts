// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 31, 2026
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
  generatedDate: "2026-10-31",
  date: "October 31, 2026",
  gameOfTheNight: "HOU-DAL-20261030",
  topClutchPerformer: {
    player: "Luka Doncic",
    team: "DAL",
    clutchRating: 94,
    description: "Playing on a sore knee with Houston within three in the fourth, Luka delivered back-to-back ice-cold mid-range pull-ups to seal Dallas's biggest home win of the season and snap the Rockets' five-game streak.",
  },
  games: [
    {
      gameId: "CHA-WSH-20261030",
      teams: { home: "WSH", away: "CHA" },
      finalScore: { home: 95, away: 79 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:14",
          description: "Washington ripped off a 14-3 run to flip a four-point deficit into a double-digit lead, anchored by three consecutive Wizards transition buckets.",
          runScore: "14-3",
          momentum: "home",
          keyPlayer: "Washington Wizards",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:02",
          description: "Charlotte attempted a mini-rally, stringing together seven unanswered to cut it to nine, but the Wizards' half-court defense tightened and the run stalled immediately.",
          runScore: "7-0",
          momentum: "away",
          keyPlayer: "Charlotte Hornets",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "8:55",
          description: "Washington closed the door with a methodical 10-2 stretch to push the lead back to 16, effectively ending Charlotte's competitive window.",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Washington Wizards",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "A quiet Halloween in the capital. Washington controlled the tempo from the second quarter onward and never allowed Charlotte to mount a serious threat, winning by 16 in a game that felt decided by halftime. Both teams sit at 3-3 — the Wizards now own the tiebreaker in what could be a crowded mid-table Eastern Conference picture.",
    },
    {
      gameId: "CHI-BOS-20261030",
      teams: { home: "BOS", away: "CHI" },
      finalScore: { home: 125, away: 111 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:30",
          description: "Boston opened on an 18-6 blitz to set the early tone at TD Garden, punishing Chicago's slow defensive rotations with five made threes in the first frame.",
          runScore: "18-6",
          momentum: "home",
          keyPlayer: "Boston Celtics",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:48",
          description: "Chicago surged back with a 16-6 third-quarter run to trim the deficit to eight, briefly injecting life into the Bulls and silencing the Garden crowd.",
          runScore: "16-6",
          momentum: "away",
          keyPlayer: "Chicago Bulls",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "9:12",
          description: "Boston responded immediately with a 15-4 answer to open the fourth, re-establishing the double-digit cushion and effectively ending Chicago's hopes.",
          runScore: "15-4",
          momentum: "home",
          keyPlayer: "Boston Celtics",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "The Celtics absorbed Chicago's best third-quarter punch and counterpunched so swiftly that the Bulls never had time to believe. Boston moves to 4-1 as TD Garden continues to function as one of the league's most suffocating road environments. Chicago at 1-5 is now in genuine early-season distress.",
    },
    {
      gameId: "DET-BRK-20261030",
      teams: { home: "BRK", away: "DET" },
      finalScore: { home: 94, away: 110 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:33",
          description: "Detroit's bench unit ignited a 19-6 second-quarter surge that turned a three-point game into a 16-point blowout, completely erasing Brooklyn's early momentum.",
          runScore: "19-6",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:15",
          description: "Brooklyn's offense showed brief signs of life with eight straight points, but Detroit's defensive rotations immediately corrected and the Nets couldn't convert two straight possessions.",
          runScore: "8-0",
          momentum: "home",
          keyPlayer: "Brooklyn Nets",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Detroit's defensive machine rolled through Barclays Center with cold efficiency, and Cunningham's 26-10 orchestration was the engine. Brooklyn has now failed to crack 100 points in three straight — a troubling pattern that suggests structural offensive dysfunction rather than a bad shooting night. The Pistons' 5-1 start looks increasingly legitimate.",
    },
    {
      gameId: "NY-PHI-20261030",
      teams: { home: "PHI", away: "NY" },
      finalScore: { home: 98, away: 93 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:10",
          description: "New York controlled the first half, leading by eight at the break on the back of relentless pick-and-roll execution that Philadelphia struggled to contain.",
          runScore: "12-4",
          momentum: "away",
          keyPlayer: "New York Knicks",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "2:44",
          description: "Philadelphia flipped the script with a 16-5 third-quarter run to seize a three-point lead, converting New York's turnovers into transition buckets at a punishing rate.",
          runScore: "16-5",
          momentum: "home",
          keyPlayer: "Philadelphia 76ers",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:22",
          description: "The Knicks cut it to two with 90 seconds remaining, but Philadelphia executed a late-clock isolation that drew a foul and converted both free throws to seal it.",
          runScore: "4-2",
          momentum: "home",
          keyPlayer: "Philadelphia 76ers",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Philadelphia 76ers",
          team: "PHI",
          description: "Isolation drive drew the foul with 1:22 remaining, converting both free throws to push the lead to four and deny New York's final push.",
          timeRemaining: "1:22",
          winProbabilityShift: 28,
        },
        {
          player: "New York Knicks",
          team: "NY",
          description: "Pull-up mid-range jumper cut the deficit to two with 1:38 remaining and forced Philadelphia to execute under pressure.",
          timeRemaining: "1:38",
          winProbabilityShift: -18,
        },
      ],
      narrative: "A gritty, physical Battle of the Northeast that swung three times before Philadelphia finally imposed its will in the fourth. The Sixers at 5-1 are quietly one of the East's most complete teams, and their ability to close after trailing at halftime reveals a mental toughness that makes them dangerous. The Knicks at 2-4 need answers fast in a crowded conference.",
    },
    {
      gameId: "ORL-TOR-20261030",
      teams: { home: "TOR", away: "ORL" },
      finalScore: { home: 114, away: 121 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:02",
          description: "Orlando jumped out to an 11-2 start before Toronto steadied, with the Magic's aggressive transition offense catching the Raptors flatfooted on the road.",
          runScore: "11-2",
          momentum: "away",
          keyPlayer: "Orlando Magic",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "6:18",
          description: "Toronto stormed back to take a six-point lead midway through the third, converting five consecutive defensive stops into fast-break points and rocking Scotiabank Arena.",
          runScore: "18-7",
          momentum: "home",
          keyPlayer: "Toronto Raptors",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "4:30",
          description: "Orlando reclaimed control with a decisive 14-4 fourth-quarter run, reasserting defensive dominance and silencing the Toronto crowd for good.",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Orlando Magic",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Orlando Magic",
          team: "ORL",
          description: "Back-to-back defensive stops converted into layups pushed the Magic lead to eight with 3:45 remaining, a decisive sequence that broke Toronto's resolve.",
          timeRemaining: "3:45",
          winProbabilityShift: 32,
        },
      ],
      narrative: "The Magic showed genuine road resilience — twice falling behind in Toronto, twice answering — and their fourth-quarter closeout was the most composed we've seen from this young team. Orlando moves to 3-2 and their defensive identity is beginning to crystallize into something genuinely threatening. Toronto slips to 3-3 after squandering a second-half lead on home court.",
    },
    {
      gameId: "IND-MIA-20261030",
      teams: { home: "MIA", away: "IND" },
      finalScore: { home: 145, away: 125 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:00",
          description: "Miami detonated a 28-9 second-quarter explosion — the most explosive single quarter of the young season — as Butler and the Heat's off-ball movement created open looks at an unsustainable rate for Indiana to contest.",
          runScore: "28-9",
          momentum: "home",
          keyPlayer: "Jimmy Butler",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:30",
          description: "The Pacers attempted to match Miami's pace with a seven-of-nine shooting stretch, briefly cutting into the deficit, but the Heat's transition offense kept replenishing the lead.",
          runScore: "12-7",
          momentum: "away",
          keyPlayer: "Indiana Pacers",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "7:00",
          description: "Miami's reserves maintained a 20-plus point cushion through the final quarter, combining for 14 bench points as the Heat's offensive engine continued its Halloween rampage.",
          runScore: "14-8",
          momentum: "home",
          keyPlayer: "Miami Heat",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "This wasn't a basketball game so much as a statement. Miami's 145 points represent the season's highest team total and Butler's 38-point Halloween masterpiece was the offensive anchor for a performance that will be referenced all season. The Heat's 82-58 scoring edge across the middle two quarters was a complete defensive humiliation for Indiana — and a warning shot for the rest of the conference.",
    },
    {
      gameId: "HOU-DAL-20261030",
      teams: { home: "DAL", away: "HOU" },
      finalScore: { home: 116, away: 111 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:15",
          description: "Dallas built a 14-point second-quarter lead on Luka's relentless pick-and-roll probing, creating quality looks for Dallas's shooters as Houston's defense struggled to track Doncic's vision.",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Luka Doncic",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:00",
          description: "Houston mounted a furious 22-9 third-quarter rally to cut the lead to three entering the fourth, converting Dallas turnovers into transition scores with frightening efficiency.",
          runScore: "22-9",
          momentum: "away",
          keyPlayer: "Houston Rockets",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:28",
          description: "With Dallas ahead by three and the season's narrative seemingly tilting Houston's way, Luka converted back-to-back mid-range pull-ups over Houston's closing defender on a visibly compromised knee.",
          runScore: "6-1",
          momentum: "home",
          keyPlayer: "Luka Doncic",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Luka Doncic",
          team: "DAL",
          description: "Stepback mid-range pull-up over the outstretched Houston defender extended the lead to five with 1:28 remaining — the first of two consecutive Luka daggers that sealed the win.",
          timeRemaining: "1:28",
          winProbabilityShift: 41,
        },
        {
          player: "Luka Doncic",
          team: "DAL",
          description: "Identical mid-range pull-up off the dribble with 52 seconds left pushed the lead to seven, effectively ending Houston's five-game winning streak.",
          timeRemaining: "0:52",
          winProbabilityShift: 35,
        },
        {
          player: "Houston Rockets",
          team: "HOU",
          description: "Houston's forced three-pointer rimmed out with 38 seconds left — the moment the Rockets' five-game streak officially died.",
          timeRemaining: "0:38",
          winProbabilityShift: -22,
        },
      ],
      narrative: "This was the best game of October. Houston held every narrative advantage — a five-game winning streak, a rested roster, a Dallas team playing Luka through a knee issue — and still couldn't solve Luka Doncic when the game was on the line. The back-to-back pull-up daggers in the final 90 seconds were vintage Doncic: unhurried, precise, and utterly devastating. HOU's first real test revealed a clutch-performance gap that will require monitoring.",
    },
    {
      gameId: "LAC-MIN-20261030",
      teams: { home: "MIN", away: "LAC" },
      finalScore: { home: 127, away: 101 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:45",
          description: "Edwards caught fire immediately with three first-quarter threes, and Minnesota's defense — anticipating a depleted LA lineup — played with predatory intensity from the opening tip.",
          runScore: "16-5",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "9:00",
          description: "The Clippers briefly stabilized with a 9-2 run to open the second quarter, but Minnesota tightened defensively and LA's shorthanded roster lacked the firepower to sustain any momentum.",
          runScore: "9-2",
          momentum: "away",
          keyPlayer: "LA Clippers",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "7:30",
          description: "Edwards accelerated to 30 points through three quarters as Minnesota ripped off a 20-8 third-quarter stretch to push the lead past 30 and enter garbage time.",
          runScore: "20-8",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Edwards demanded this performance and delivered it at an elite level — 39 points, five threes, and a shooting line that underscores his transformation into a complete offensive weapon. Minnesota's 26-point win was never in doubt after the first six minutes and the Wolves' defensive system, even against a shorthanded Clippers roster, showed exactly why they're a genuine Western Conference threat. LA without Leonard is a different team entirely.",
    },
    {
      gameId: "LAL-GSW-20261030",
      teams: { home: "GSW", away: "LAL" },
      finalScore: { home: 112, away: 95 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:00",
          description: "Curry opened Halloween with four consecutive three-point attempts — all good — putting Chase Center into an immediate frenzy and forcing LA into uncomfortable defensive adjustments.",
          runScore: "18-7",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "4:22",
          description: "LeBron led a Lakers response, scoring eight straight LA points to narrow the gap to seven and remind Chase Center that the Lakers don't fold quietly.",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:10",
          description: "Golden State responded to LA's push with a 16-4 third-quarter run — punctuated by Curry's sixth and seventh three-pointers — to push the lead to 22 and break the Lakers' resistance entirely.",
          runScore: "16-4",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Seven threes, 41 points, a 22-point peak lead — Curry's Halloween performance was a reminder that Chase Center remains one of the NBA's most hostile environments when he is locked in. Golden State's switching scheme neutralized LeBron as a playmaker and the Warriors' interior depth made LA's paint attacks largely ineffective. The Lakers' five-game win streak ends here, and their next road trip just got more complicated.",
    },
    {
      gameId: "DEN-PHX-20261030",
      teams: { home: "PHX", away: "DEN" },
      finalScore: { home: 120, away: 127 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:30",
          description: "Phoenix opened aggressively at home, building an early eight-point lead by attacking Denver's secondary defenders in transition before Jokic had settled into the game's rhythm.",
          runScore: "14-6",
          momentum: "home",
          keyPlayer: "Phoenix Suns",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "3:45",
          description: "Jokic systematically dismantled Phoenix's interior defense with five consecutive half-court possessions — three scores, two assists — as Denver erased the deficit and took a four-point halftime lead.",
          runScore: "19-8",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "3:10",
          description: "Phoenix clawed back to within two on a late Suns run, setting up a genuine fourth-quarter drama before Jokic's nine-assist orchestration created two straight open corner threes to push the lead back to eight.",
          runScore: "8-4",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Nikola Jokic",
          team: "DEN",
          description: "Pinpoint skip pass to the corner three with 3:02 remaining — his ninth assist — gave Denver an eight-point lead and deflated Phoenix's late-game momentum entirely.",
          timeRemaining: "3:02",
          winProbabilityShift: 38,
        },
        {
          player: "Phoenix Suns",
          team: "PHX",
          description: "Back-to-back buckets cut the Denver lead to two with 4:15 remaining, threatening to turn Mortgage Matchup Center into a genuine fourth-quarter atmosphere.",
          timeRemaining: "4:15",
          winProbabilityShift: -24,
        },
      ],
      narrative: "Jokic's near-triple-double was less a box score achievement than a chess match won in real time — he identified Phoenix's mismatch vulnerabilities before halftime and spent the next three quarters methodically exploiting them. Denver's road win moves them to 3-2 and reinforces that the Nuggets' ceiling remains as high as any team in the West when Jokic operates this efficiently. Phoenix at 1-3 faces uncomfortable organizational questions that won't disappear with a roster shuffle.",
    },
  ],
};