// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 19, 2026
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
  generatedDate: "2026-11-19",
  date: "November 19, 2026",
  gameOfTheNight: "MEM-CLE-20261118",
  topClutchPerformer: {
    player: "Cam Spencer",
    team: "MEM",
    clutchRating: 91,
    description: "Spencer's back-to-back threes in the final 3:30 at Cleveland buried a Cavaliers comeback attempt and sealed Memphis's road win. His 26-point night carried the decisive weight of a closer, not a role player.",
  },
  games: [
    {
      gameId: "GSW-DAL-20261118",
      teams: { home: "DAL", away: "GSW" },
      finalScore: { home: 116, away: 94 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:12",
          description: "Cooper Flagg opened the scoring with five straight points capped by a pull-up jumper, setting the tone before Golden State could establish any offensive rhythm.",
          runScore: "14-6",
          momentum: "home",
          keyPlayer: "Cooper Flagg",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:44",
          description: "P.J. Washington drained three consecutive threes in a two-minute stretch, blowing the game open and silencing any Warriors road crowd energy before halftime.",
          runScore: "18-4",
          momentum: "home",
          keyPlayer: "P.J. Washington",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:01",
          description: "Flagg capped a dominant night with a coast-to-coast steal-and-finish, extending the lead past 20 and triggering a mass Warriors substitution that confirmed the blowout.",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Cooper Flagg",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "This was a statement dismantling. Cooper Flagg was relentless in every phase — scoring, distributing, defending — and Dallas made Golden State look like a team without an identity. Podziemski's minus-32 and Draymond's minus-28 aren't statistical noise; they're a flashing warning light on a Warriors roster that has no answer when the opponent plays clean, connected basketball. The 22-point final margin flatters the visitors.",
    },
    {
      gameId: "ATL-OKC-20261118",
      teams: { home: "OKC", away: "ATL" },
      finalScore: { home: 112, away: 117 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:33",
          description: "Onyeka Okongwu erupted for nine unanswered points, hitting back-to-back threes and a mid-range floater to give Atlanta their first meaningful lead of the game.",
          runScore: "13-4",
          momentum: "away",
          keyPlayer: "Onyeka Okongwu",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:20",
          description: "SGA answered with a personal 7-0 run — two pull-ups and a free throw sequence — clawing OKC back within two and re-energizing the Paycom Center crowd.",
          runScore: "9-2",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "2:48",
          description: "Jalen Johnson's three-pointer off a drive-and-kick from his own triple-double assist pushed Atlanta back up five with under three minutes remaining, taking the air out of Oklahoma City's rally.",
          runScore: "7-2",
          momentum: "away",
          keyPlayer: "Jalen Johnson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "SGA drew a foul on a drive to the basket and converted both free throws to cut the Atlanta lead to three with 1:54 remaining, keeping OKC's faint hope alive.",
          timeRemaining: "1:54",
          winProbabilityShift: 12,
        },
        {
          player: "Jalen Johnson",
          team: "ATL",
          description: "Johnson bodied up on the defensive end and forced a critical SGA turnover on the ensuing possession, effectively ending Oklahoma City's comeback attempt.",
          timeRemaining: "1:21",
          winProbabilityShift: 18,
        },
      ],
      narrative: "Atlanta came to Paycom Center without fear and left with their most impressive road result of the season. Okongwu's shooting explosion was completely unexpected and exposed the gap in OKC's interior defense without Holmgren. SGA's 34 points were heroic but isolated — the Thunder couldn't generate the collective stops they needed when Atlanta's balanced attack picked them apart. This loss stings precisely because it was preventable.",
    },
    {
      gameId: "UTA-LAL-20261118",
      teams: { home: "LAL", away: "UTA" },
      finalScore: { home: 97, away: 109 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:05",
          description: "Keyonte George orchestrated a 12-3 Utah opening run with two threes and three assists, catching the Lakers' defense completely flat on their home floor.",
          runScore: "12-3",
          momentum: "away",
          keyPlayer: "Keyonte George",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:17",
          description: "Luka Doncic scored eight straight for Los Angeles to briefly tie the game, drawing a roar from crypto.com Arena that suggested the expected order was being restored.",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Luka Doncic",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:30",
          description: "George and Mykhailiuk combined for 11 points on a 13-2 Utah blitz that broke the game open for good, exploiting a Lakers defensive rotation breakdown that left shooters wide open from three.",
          runScore: "13-2",
          momentum: "away",
          keyPlayer: "Keyonte George",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Utah walked into crypto.com Arena as a 4-13 team and treated it like a neutral court. Keyonte George was in complete command — 30 points and 10 assists against a Lakers defense that inexplicably left perimeter shooters uncontested for entire stretches. Mo Bamba's 16-rebound performance on the glass was equally damaging. Luka's 29-point night masked how passive and disorganized Los Angeles looked, and this home loss will be a talking point for days.",
    },
    {
      gameId: "BOS-DEN-20261118",
      teams: { home: "DEN", away: "BOS" },
      finalScore: { home: 105, away: 101 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:11",
          description: "Boston pushed ahead on a Tatum mid-range jumper and a Queta put-back, riding their size advantage down low to build a seven-point halftime edge.",
          runScore: "11-4",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:44",
          description: "Jokic took over the fourth quarter personally — back-to-back elbow jumpers, a pick-and-roll lob to Braun, and two free throws in a 90-second stretch that swung the lead back to Denver.",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Nikola Jokic",
          team: "DEN",
          description: "Jokic hit a step-back three with 2:09 remaining — an absurdly difficult shot with Queta closing hard — to push Denver's lead to six and deflate Boston's last serious push.",
          timeRemaining: "2:09",
          winProbabilityShift: 22,
        },
        {
          player: "Jamal Murray",
          team: "DEN",
          description: "Murray poked the ball free on Boston's final possession down four with 38 seconds left, sealing the game before Tatum could get a clean look.",
          timeRemaining: "0:38",
          winProbabilityShift: 15,
        },
      ],
      narrative: "Denver and Boston traded body blows for three quarters before Jokic decided the game was his to close. His fourth-quarter authority — 11 of his 24 points in the final 12 minutes — was a clinic in knowing when to take control. Boston had the size and the talent to win this but Queta's 17-10 night wasn't enough to neutralize Jokic's playmaking from the elbow. Murray's late steal was the exclamation point on Denver's most complete defensive performance of the season.",
    },
    {
      gameId: "MIL-MIA-20261118",
      teams: { home: "MIA", away: "MIL" },
      finalScore: { home: 137, away: 130 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:55",
          description: "Giannis scored nine points in a dominant first-quarter stretch, posting up his former teammates with authority and drawing enormous roars from the Miami crowd in his homecoming.",
          runScore: "14-5",
          momentum: "home",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:20",
          description: "Kyle Kuzma and Jakucionis combined for 17 third-quarter points to bring Milwaukee within four, threatening to turn the homecoming narrative into an upset.",
          runScore: "17-6",
          momentum: "away",
          keyPlayer: "Kyle Kuzma",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "6:10",
          description: "Davion Mitchell erupted for three straight threes in a two-minute fourth-quarter burst to shatter Milwaukee's momentum and push Miami back to a double-digit lead for good.",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Davion Mitchell",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "The NBA scheduled a perfect storyline and Giannis delivered exactly what the moment demanded — a 27-14-9 performance against the team he spent over a decade carrying. Milwaukee made it interesting in the third quarter, but Davion Mitchell's three-pointer barrage in the fourth was the kind of complementary firepower that explains why Miami is a genuine Eastern Conference contender. For the Bucks at 1-14, this loss was just the latest chapter in a painful rebuild.",
    },
    {
      gameId: "MEM-CLE-20261118",
      teams: { home: "CLE", away: "MEM" },
      finalScore: { home: 121, away: 124 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:02",
          description: "Donovan Mitchell erupted for 11 second-quarter points to give Cleveland a nine-point halftime cushion, looking like the game's dominant force.",
          runScore: "14-5",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:45",
          description: "Cameron Boozer's back-to-back steals and fast-break finishes ignited a 14-4 Memphis run that erased Cleveland's lead and swung the energy of the game entirely.",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Cameron Boozer",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "3:30",
          description: "Cam Spencer buried back-to-back threes in a 90-second window to push Memphis ahead by six after Cleveland had briefly retaken the lead, breaking the Cavaliers' spirit.",
          runScore: "9-2",
          momentum: "away",
          keyPlayer: "Cam Spencer",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Mitchell drove baseline for a layup-and-one to cut the Memphis lead to two with 2:14 remaining, completing the three-point play to make it a one-possession game.",
          timeRemaining: "2:14",
          winProbabilityShift: 14,
        },
        {
          player: "Cam Spencer",
          team: "MEM",
          description: "Spencer caught Mitchell's defender on a switch and drained a pull-up three from the right elbow with 1:08 left to push Memphis back up five — a dagger from an unlikely source.",
          timeRemaining: "1:08",
          winProbabilityShift: 24,
        },
        {
          player: "Taylor Hendricks",
          team: "MEM",
          description: "Hendricks blocked a Mitchell mid-range attempt with 22 seconds remaining to preserve the lead and send Memphis home with the road win.",
          timeRemaining: "0:22",
          winProbabilityShift: 16,
        },
      ],
      narrative: "This was the night's most complete swing story — Cleveland looked in control for three quarters before Memphis's depth wore the Cavaliers down physically and mentally. Cam Spencer's cold-blooded threes in the final three minutes were the most decisive individual clutch stretch of the entire slate. Mitchell's 34-point effort deserved a win; instead, it's a reminder that the Cavs at 8-8 are genuinely vulnerable without better depth around their star. Memphis at 11-4 is a legitimate contender.",
    },
    {
      gameId: "HOU-IND-20261118",
      teams: { home: "IND", away: "HOU" },
      finalScore: { home: 104, away: 119 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:10",
          description: "Reed Sheppard hit three consecutive threes off Houston's secondary break to give the Rockets an early double-digit advantage that Indiana never recovered from.",
          runScore: "12-3",
          momentum: "away",
          keyPlayer: "Reed Sheppard",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:15",
          description: "Pascal Siakam posted back-to-back buckets and drew two fouls to briefly bring Indiana within nine, offering the Pacers a window that never fully opened.",
          runScore: "10-4",
          momentum: "home",
          keyPlayer: "Pascal Siakam",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Houston was simply too deep and too balanced for a Pacers team missing Haliburton. Sheppard's six-three explosion off the bench was the defining performance of the game — 20 points from a reserve who looked completely at home in a road environment. Kevin Durant's efficient 21 points reinforced just how many weapons Houston possesses at every roster position. Indiana at 5-10 is in genuine danger of falling out of the playoff picture before December.",
    },
    {
      gameId: "PHI-ORL-20261118",
      teams: { home: "ORL", away: "PHI" },
      finalScore: { home: 116, away: 121 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:33",
          description: "Franz Wagner posted a double-double in assists before halftime, orchestrating Orlando's offense with a vision and pace that kept the Magic ahead heading into the break.",
          runScore: "11-5",
          momentum: "home",
          keyPlayer: "Franz Wagner",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "6:20",
          description: "VJ Edgecombe erupted for eight straight fourth-quarter points — two pull-ups and a rim-rocking dunk — to give Philadelphia a lead they would not relinquish.",
          runScore: "12-4",
          momentum: "away",
          keyPlayer: "VJ Edgecombe",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Franz Wagner",
          team: "ORL",
          description: "Wagner drove the lane and converted a tough floater to cut Philadelphia's lead to three with 1:45 remaining, giving Orlando a final window.",
          timeRemaining: "1:45",
          winProbabilityShift: 11,
        },
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "Embiid sealed the game with a post-up turnaround over Wagner with 54 seconds left, extending the lead to five and exhausting Orlando's final comeback attempt.",
          timeRemaining: "0:54",
          winProbabilityShift: 19,
        },
      ],
      narrative: "Franz Wagner was magnificent — 27 points, 11 assists, 8 rebounds without Paolo Banchero is a performance that belongs in a different conversation entirely. But Philadelphia's 13-3 record exists for exactly this reason: when the game is tight and a star moment is needed, Embiid and Edgecombe have the answers. Wagner pushed the Sixers further than anyone expected, and Orlando's fight without their franchise cornerstone is a quietly developing storyline in the Eastern Conference.",
    },
    {
      gameId: "CHI-BRK-20261118",
      teams: { home: "BRK", away: "CHI" },
      finalScore: { home: 107, away: 137 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:55",
          description: "Matas Buzelis hit three threes in the opening six minutes, setting an aggressive tone before Brooklyn's defense could organize any kind of response.",
          runScore: "15-4",
          momentum: "away",
          keyPlayer: "Matas Buzelis",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "3:12",
          description: "Josh Giddey's three consecutive assists on the break — culminating in his own backdoor cut for a layup — extended Chicago's lead to 24 and effectively ended the competitive phase of the game.",
          runScore: "14-3",
          momentum: "away",
          keyPlayer: "Josh Giddey",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Chicago's 30-point blowout at Barclays was more comprehensive than their 4-10 record suggests. Buzelis was the aggressor from the opening tip — five threes and 25 points against a Brooklyn defense that simply had no mechanism to slow him down. Giddey's near-triple-double was the connective tissue that made every Bull look dangerous. Brooklyn at 3-11 is quietly becoming one of the league's worst defensive teams, and Demin's 22-point effort was a bright spot on an otherwise grim evening at Barclays.",
    },
    {
      gameId: "WAS-TOR-20261118",
      teams: { home: "TOR", away: "WAS" },
      finalScore: { home: 99, away: 103 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "6:40",
          description: "AJ Dybantsa posted seven straight points on a drive-and-dish sequence and two free throws to give Washington their first lead of the game and change the entire tenor at Scotiabank Arena.",
          runScore: "10-3",
          momentum: "away",
          keyPlayer: "AJ Dybantsa",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:10",
          description: "Immanuel Quickley answered with six consecutive points to push Toronto ahead by two, setting up a tense final four minutes that would determine the outcome.",
          runScore: "8-3",
          momentum: "home",
          keyPlayer: "Immanuel Quickley",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Anthony Davis",
          team: "WAS",
          description: "Davis caught a lob feed, absorbed contact, and completed the two-point play to push Washington ahead by one with 1:33 remaining in a sequence that showed why his move to Washington was no accident.",
          timeRemaining: "1:33",
          winProbabilityShift: 21,
        },
        {
          player: "Kyshawn George",
          team: "WAS",
          description: "George hit a corner three off a Davis dump-off with 44 seconds left to push the lead to four — an icy shot from a rookie in a road environment.",
          timeRemaining: "0:44",
          winProbabilityShift: 18,
        },
      ],
      narrative: "Washington stole one in Toronto behind a genuinely remarkable collection of young talent. Dybantsa's 23-point, 12-rebound line is the kind of statement rookies make when they're ready for the moment — and this road environment was not forgiving. Anthony Davis's clutch two-point play and Kyshawn George's dagger three reflected a Wizards team that is developing real competitive character even at 5-11. Toronto coughed up a winnable game and their fifth-year malaise continues to define the Raptors' season.",
    },
    {
      gameId: "DET-NOP-20261118",
      teams: { home: "NOP", away: "DET" },
      finalScore: { home: 109, away: 122 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:03",
          description: "John Collins and Javonte Green combined for 11 second-quarter points on consecutive possessions, turning a one-possession game into a comfortable Detroit cushion by halftime.",
          runScore: "13-4",
          momentum: "away",
          keyPlayer: "John Collins",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:55",
          description: "Zion Williamson briefly threatened with a personal 8-0 run — two dunks and two free throws — but Detroit's depth absorbed the push and responded with a 7-0 answer of their own.",
          runScore: "8-7",
          momentum: "away",
          keyPlayer: "Daniss Jenkins",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Detroit's 10-4 record is built on exactly this kind of performance — winning on the road against a team with a star by playing collectively better basketball at every position. John Collins as a floor-spacing power forward is an underrated piece of this Pistons puzzle, and Daniss Jenkins's 17-point, 9-assist game was the engine that kept everything humming. Zion's 24 points were spectacular but insufficient; New Orleans at 5-11 simply doesn't have the depth to compete for 48 minutes against organized teams.",
    },
    {
      gameId: "PHX-SAC-20261118",
      teams: { home: "SAC", away: "PHX" },
      finalScore: { home: 107, away: 128 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:20",
          description: "Dillon Brooks hit three first-quarter threes in a stunning early display, with Phoenix going on a 16-4 run that set a tone Sacramento's thin roster had no hope of reversing.",
          runScore: "16-4",
          momentum: "away",
          keyPlayer: "Dillon Brooks",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:10",
          description: "Darius Acuff Jr. exploded for 14 third-quarter points on four threes to give Sacramento a pulse and briefly cut the deficit to eight, electrifying the Golden 1 Center crowd.",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Darius Acuff Jr.",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "The headline out of Sacramento is Darius Acuff Jr.'s jaw-dropping 36 points in a losing effort — a 6-three, 2-block performance that belongs in a highlight reel regardless of the final score. Phoenix was simply overwhelming: Booker and Brooks each dropping 29 on a 1-13 Kings team was merciless. The interesting question is whether Sacramento builds around Acuff's obvious talent or whether the franchise continues down a path that has produced the worst record in the Western Conference. Tonight's effort deserved a better fate.",
    },
  ],
};