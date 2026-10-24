// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 24, 2026
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
  generatedDate: "2026-10-24",
  date: "October 24, 2026",
  gameOfTheNight: "NO-UTAH-20261023",
  topClutchPerformer: {
    player: "Keyonte George",
    team: "UTAH",
    clutchRating: 94,
    description: "George engineered Utah's final-minute survival act against New Orleans, hitting a go-ahead mid-range jumper with 38 seconds left and drawing a critical foul to ice a one-point Jazz victory. On a night full of blowouts, his composure in a genuine pressure moment stood above everything else on the slate.",
  },
  games: [
    {
      gameId: "ATL-CHA-20261023",
      teams: { home: "CHA", away: "ATL" },
      finalScore: { home: 81, away: 128 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:12",
          description: "Trae Young orchestrated a 14-2 Atlanta run to close the first quarter, turning a two-point deficit into a dominant double-digit lead. The Hawks' pace overwhelmed Charlotte's halfcourt defensive scheme before it could be set.",
          runScore: "14-2",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "7:44",
          description: "Atlanta extended with an 18-6 second-quarter run, Young distributing at will as the Hawks' shooters buried five consecutive open looks. Charlotte had no rotational answer and the Spectrum Center crowd went quiet.",
          runScore: "18-6",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:30",
          description: "Atlanta's reserves maintained the carnage with a 12-4 run to push the lead past 40, confirming this as a statement blowout rather than a garbage-time drift.",
          runScore: "12-4",
          momentum: "away",
          keyPlayer: "Bogdan Bogdanovic",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "This game had one swing and it never swung back. Trae Young's first-quarter demolition run was the story — the moment Atlanta's pace and spacing outstripped Charlotte's capacity to compete, the game became a referendum on just how good these Hawks might be. The 47-point margin is a number that will be referenced all season.",
    },
    {
      gameId: "DET-MIA-20261023",
      teams: { home: "MIA", away: "DET" },
      finalScore: { home: 111, away: 128 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "9:01",
          description: "Detroit opened the second quarter with a 16-4 run to seize control after a competitive first period. Cunningham attacked Miami's switch coverage relentlessly and the Pistons' depth kept the pressure unrelenting.",
          runScore: "16-4",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:22",
          description: "Miami briefly threatened with a 10-2 run to cut the deficit to nine, injecting a moment of genuine tension into Kaseya Center. The crowd found its voice for the first time all night.",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Tyler Herro",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "1:05",
          description: "Cunningham answered Miami's response immediately with back-to-back pull-up jumpers to restore a 15-point lead and functionally end the drama before the fourth quarter began.",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Miami's third-quarter run hinted at a game, but Cunningham refused to let the narrative shift. His back-to-back baskets to re-extend the lead were the single most decisive moment of the evening — a superstar snuffing out a comeback before it could breathe. Detroit's 2-0 start is not an accident.",
    },
    {
      gameId: "POR-SAC-20261023",
      teams: { home: "SAC", away: "POR" },
      finalScore: { home: 120, away: 128 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "2:33",
          description: "Scoot Henderson exploded for 14 first-quarter points to give Portland an early 10-point cushion, his speed off the dribble carving Sacramento's defense at will from the opening tip.",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Scoot Henderson",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:15",
          description: "Sacramento mounted a serious challenge with a 15-5 run to draw within three, the home crowd surging as De'Aaron Fox found his rhythm in the halfcourt.",
          runScore: "15-5",
          momentum: "home",
          keyPlayer: "De'Aaron Fox",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:48",
          description: "Henderson reasserted with a 10-3 Portland run — four of his game-high 34 in a clinical stretch — to push the lead back to double digits and secure Portland's second consecutive road win.",
          runScore: "10-3",
          momentum: "away",
          keyPlayer: "Scoot Henderson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Sacramento gave Portland everything they had in the third quarter and Henderson answered every question. His fourth-quarter takeover was the most emphatic individual statement on the entire slate — a 34-and-10 night on the road against a team that was supposed to be a genuine obstacle. The Trail Blazers look real.",
    },
    {
      gameId: "CHI-MIL-20261023",
      teams: { home: "MIL", away: "CHI" },
      finalScore: { home: 125, away: 132 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:50",
          description: "LaVine caught fire with five straight Chicago points to turn a seven-point Milwaukee lead into a two-point game, his pull-up mid-range work against the Bucks' drop coverage utterly uncounterable.",
          runScore: "11-4",
          momentum: "away",
          keyPlayer: "Zach LaVine",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "8:10",
          description: "Giannis responded with a dominant interior stretch — eight consecutive Milwaukee points — to reclaim a nine-point Bucks lead and send Fiserv Forum into full voice.",
          runScore: "8-0",
          momentum: "home",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:41",
          description: "LaVine's 38th point — a cold-blooded pull-up three over Khris Middleton — gave Chicago its first lead of the fourth quarter and broke Milwaukee's resistance with under four minutes to play.",
          runScore: "9-3",
          momentum: "away",
          keyPlayer: "Zach LaVine",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Zach LaVine",
          team: "CHI",
          description: "Pull-up three-pointer over Khris Middleton to give Chicago its first fourth-quarter lead at 126-122, a shot of extraordinary difficulty and consequence.",
          timeRemaining: "3:41",
          winProbabilityShift: 28,
        },
        {
          player: "Giannis Antetokounmpo",
          team: "MIL",
          description: "Thunderous and-one finish through contact to cut the deficit to two with 1:58 remaining, briefly reigniting Milwaukee's hopes.",
          timeRemaining: "1:58",
          winProbabilityShift: -14,
        },
        {
          player: "Nikola Vucevic",
          team: "CHI",
          description: "Clutch offensive rebound and put-back layup to push Chicago's lead to four with 47 seconds left, effectively ending Milwaukee's comeback attempt.",
          timeRemaining: "0:47",
          winProbabilityShift: 22,
        },
      ],
      narrative: "The night's best game — a Fiserv Forum atmosphere, Giannis at full force, and LaVine producing the most ice-blooded shooting performance of the young season. The fourth-quarter three over Middleton was the play of the night and the margin flattered Milwaukee. Chicago's road win at a 0-2 Bucks team is the East's defining early result.",
    },
    {
      gameId: "DAL-IND-20261023",
      teams: { home: "IND", away: "DAL" },
      finalScore: { home: 105, away: 121 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:30",
          description: "Luka Doncic assembled a 13-4 Dallas run in the second quarter to build a double-digit lead, his orchestration of Dallas's halfcourt offense exposing Indiana's help-side rotations systematically.",
          runScore: "13-4",
          momentum: "away",
          keyPlayer: "Luka Doncic",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:00",
          description: "Tyrese Haliburton ignited Indiana with a personal 8-0 run — three assists and a floater — to cut Dallas's lead to five and bring Gainbridge Fieldhouse back to life.",
          runScore: "10-3",
          momentum: "home",
          keyPlayer: "Tyrese Haliburton",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "8:55",
          description: "Luka responded to Indiana's push with consecutive three-pointers to open the fourth quarter, re-establishing a 12-point Dallas advantage and draining all remaining Pacer energy from the building.",
          runScore: "10-2",
          momentum: "away",
          keyPlayer: "Luka Doncic",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Haliburton's third-quarter bid to bring Indiana back was the most promising moment for the home team, and Luka answered it the only way he knows how — consecutive threes to open the fourth and shut the door. The experience gap between these two stars was visible and the 16-point final margin tells the complete story.",
    },
    {
      gameId: "NYK-BOS-20261023",
      teams: { home: "BOS", away: "NYK" },
      finalScore: { home: 107, away: 103 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "3:15",
          description: "New York seized a nine-point lead on a 16-5 run through the mid-second quarter, Jalen Brunson finding his step-back rhythm and TD Garden growing visibly anxious.",
          runScore: "16-5",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:40",
          description: "Tatum led a 14-4 Boston response to retake the lead, his combination of post-up scoring and three-point threat giving New York's switching defense no clean answer.",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:10",
          description: "Boston's defensive rotations held New York to one field goal in the final three minutes, preserving a four-point lead through four consecutive Knicks possessions that came up empty.",
          runScore: "5-1",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Step-back three to cut Boston's lead to two with 2:44 remaining, threatening a full Knicks comeback on Prime Video's biggest audience of the young season.",
          timeRemaining: "2:44",
          winProbabilityShift: -19,
        },
        {
          player: "Jayson Tatum",
          team: "BOS",
          description: "Driving layup through contact and converted free throw to push the lead back to five with 1:52 remaining, the Celtics' anchor play in a consequential home stand.",
          timeRemaining: "1:52",
          winProbabilityShift: 24,
        },
        {
          player: "Jaylen Brown",
          team: "BOS",
          description: "Contested mid-range pull-up to extend the lead to four with 41 seconds left, forcing New York into intentional foul mode and functionally ending the contest.",
          timeRemaining: "0:41",
          winProbabilityShift: 18,
        },
      ],
      narrative: "Four points separated these teams with two minutes left and Prime Video had the moment it needed. Brunson's step-back three made it a genuine event but Tatum's answer — an and-one drive into contact — was the Celtics' season-defining play of the night so far. Boston's defensive stand in the final 90 seconds was as disciplined as the organization has looked through two games.",
    },
    {
      gameId: "MIN-ORL-20261023",
      teams: { home: "ORL", away: "MIN" },
      finalScore: { home: 93, away: 115 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:00",
          description: "Minnesota's defense imposed itself immediately — holding Orlando to 17 first-quarter points — while Anthony Edwards set the offensive tone with 11 early points on relentless downhill drives.",
          runScore: "12-4",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:20",
          description: "The Timberwolves closed out any remaining Orlando hope with a 16-6 third-quarter run, their defensive physicality making Kia Center feel like a home game in reverse.",
          runScore: "16-6",
          momentum: "away",
          keyPlayer: "Rudy Gobert",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Minnesota arrived in Orlando and made it look like a home game. Edwards was magnificent but the Timberwolves' defensive identity — anchored by Gobert's rim protection — was the real story. Orlando's 0-2 start carries genuine structural questions about their offensive ceiling against elite defensive teams.",
    },
    {
      gameId: "TOR-WSH-20261023",
      teams: { home: "WSH", away: "TOR" },
      finalScore: { home: 102, away: 112 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:00",
          description: "Toronto built a controlled 13-5 second-quarter run on efficient ball movement and Washington turnovers, Scottie Barnes orchestrating at the top of the key with poise beyond his years.",
          runScore: "13-5",
          momentum: "away",
          keyPlayer: "Scottie Barnes",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "6:10",
          description: "Washington's young core cut the deficit to five on a 9-2 run, testing Toronto's composure with the Raptors' reserves on the floor and Capital One Arena briefly energized.",
          runScore: "9-2",
          momentum: "home",
          keyPlayer: "Alexandre Sarr",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "3:30",
          description: "Barnes reasserted control with six consecutive Toronto points — a mid-range pull-up and two free throws — to restore a double-digit lead and confirm the Raptors' 2-0 start.",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "Scottie Barnes",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Toronto's 2-0 record is not an accident and Barnes is the reason why. Washington's fourth-quarter push showed competitive spirit from a young Wizards group, but Barnes' ability to manufacture offense in the halfcourt late — when the game demanded it — separated these franchises at their current developmental stages.",
    },
    {
      gameId: "HOU-SA-20261023",
      teams: { home: "SA", away: "HOU" },
      finalScore: { home: 110, away: 114 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:30",
          description: "Houston built a steady 12-4 run through ball movement and San Antonio turnovers, Alperen Şengün dominating the interior against a Spurs frontcourt without a credible answer.",
          runScore: "12-4",
          momentum: "away",
          keyPlayer: "Alperen Şengün",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:20",
          description: "Victor Wembanyama produced a breathtaking personal run — a blocked shot, push-pass outlet to a trailing guard, and a step-back three — to cut Houston's lead to two and send Moody Center into a frenzy.",
          runScore: "7-2",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:15",
          description: "Jalen Green hit a pull-up mid-range jumper over Wembanyama to restore Houston's four-point lead — a high-leverage shot that proved to be the game's decisive basket.",
          runScore: "4-1",
          momentum: "away",
          keyPlayer: "Jalen Green",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Victor Wembanyama",
          team: "SA",
          description: "Spectacular step-back three over two defenders to cut the deficit to two with 4:20 remaining — a shot that temporarily made San Antonio's comeback feel inevitable.",
          timeRemaining: "4:20",
          winProbabilityShift: -21,
        },
        {
          player: "Jalen Green",
          team: "HOU",
          description: "Contested pull-up jumper over Wembanyama's contest to push the lead to four with 1:15 left — the shot that ultimately decided the outcome.",
          timeRemaining: "1:15",
          winProbabilityShift: 26,
        },
        {
          player: "Victor Wembanyama",
          team: "SA",
          description: "Wembanyama's three-pointer with 22 seconds left to cut the deficit to one gave San Antonio one final possession with a chance, but a turnover on the ensuing inbounds sealed it for Houston.",
          timeRemaining: "0:22",
          winProbabilityShift: -15,
        },
      ],
      narrative: "Wembanyama made this the most quietly spectacular game on the slate. His fourth-quarter performance was otherworldly — block, outlet, step-back three in one sequence — and Green's answering pull-up over him was an extraordinary individual moment between two of the league's most gifted young players. San Antonio loses but Wembanyama's ceiling is simply staggering.",
    },
    {
      gameId: "NO-UTAH-20261023",
      teams: { home: "UTAH", away: "NO" },
      finalScore: { home: 120, away: 119 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "4:55",
          description: "New Orleans erased a 10-point Utah halftime lead with a 17-5 third-quarter run — CJ McCollum finding his range from distance and the Pelicans' defensive intensity ratcheting up dramatically.",
          runScore: "17-5",
          momentum: "away",
          keyPlayer: "CJ McCollum",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:30",
          description: "Utah's Keyonte George orchestrated an 11-4 response to retake a four-point lead entering the final three minutes, his pick-and-roll mastery exploiting New Orleans' switching scheme.",
          runScore: "11-4",
          momentum: "home",
          keyPlayer: "Keyonte George",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "1:44",
          description: "McCollum hit a corner three off a broken play to tie the game at 118 with 1:44 remaining, setting up a brutal final two minutes that would produce the night's best finish.",
          runScore: "5-2",
          momentum: "away",
          keyPlayer: "CJ McCollum",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "CJ McCollum",
          team: "NO",
          description: "Corner three off a broken play to tie the game at 118 with 1:44 remaining — one of the purest clutch shots of the night on the league's biggest slate.",
          timeRemaining: "1:44",
          winProbabilityShift: -31,
        },
        {
          player: "Keyonte George",
          team: "UTAH",
          description: "Go-ahead mid-range pull-up jumper to give Utah a 120-118 lead with 38 seconds remaining — the definitive clutch play on the entire night's slate.",
          timeRemaining: "0:38",
          winProbabilityShift: 38,
        },
        {
          player: "Brandon Ingram",
          team: "NO",
          description: "Drove baseline for a layup attempt that rimmed out with 12 seconds left, New Orleans' final real chance at a road win in Salt Lake City.",
          timeRemaining: "0:12",
          winProbabilityShift: -24,
        },
        {
          player: "Keyonte George",
          team: "UTAH",
          description: "Drew a foul on the ensuing New Orleans intentional foul and converted both free throws to clinch the one-point Jazz victory in the night's most dramatic finish.",
          timeRemaining: "0:08",
          winProbabilityShift: 29,
        },
      ],
      narrative: "The night's best game and it wasn't particularly close for drama. A 10-point Utah lead evaporated, McCollum tied it from the corner with under two minutes left, and then Keyonte George delivered — a pull-up mid-range with the game on the line that was pure nerve. Ingram's rimout at the other end completed the sequence. Delta Center earned it.",
    },
    {
      gameId: "MEM-GS-20261023",
      teams: { home: "GS", away: "MEM" },
      finalScore: { home: 108, away: 111 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:10",
          description: "Golden State opened a promising 13-4 run around Stephen Curry's three-point barrage to take a nine-point second-quarter lead, Chase Center responding with its characteristic electricity.",
          runScore: "13-4",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:45",
          description: "Ja Morant completely seized the game's momentum with 11 personal points in a 17-5 Memphis third-quarter run, his finishing at the rim and pull-up jumper making Golden State's defensive scheme look obsolete.",
          runScore: "17-5",
          momentum: "away",
          keyPlayer: "Ja Morant",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:30",
          description: "Curry hit a deep three to tie the game at 106 with 2:30 remaining, Chase Center erupting and setting up a chaotic final possession sequence that ultimately favored Memphis.",
          runScore: "6-2",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Stephen Curry",
          team: "GS",
          description: "30-foot three-pointer to tie the game at 106 with 2:30 remaining — a quintessentially Curry moment that gave Golden State every reason to believe.",
          timeRemaining: "2:30",
          winProbabilityShift: -27,
        },
        {
          player: "Ja Morant",
          team: "MEM",
          description: "Electrifying drive and-one finish over Draymond Green with 1:08 left to restore Memphis's three-point lead — a play that required absurd athleticism and nerve in equal measure.",
          timeRemaining: "1:08",
          winProbabilityShift: 32,
        },
        {
          player: "Stephen Curry",
          team: "GS",
          description: "Pull-up three from the wing to cut it to one with 19 seconds left — Golden State had a chance, but Morant hit both free throws on the other end to seal it.",
          timeRemaining: "0:19",
          winProbabilityShift: -18,
        },
      ],
      narrative: "Curry tied it with a 30-footer and Chase Center went to another level — and then Morant answered with an and-one over Draymond that was physically shocking. This was the finest individual duel of the night, two generational talents trading the game's biggest moments until Memphis had the last word. Golden State falls to 0-2 and the organizational questions are real.",
    },
    {
      gameId: "LAC-LAL-20261023",
      teams: { home: "LAL", away: "LAC" },
      finalScore: { home: 125, away: 117 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:22",
          description: "The Lakers set the tone with a dominant 14-4 first-quarter run — LeBron James dictating pace in the halfcourt and Anthony Davis establishing interior supremacy over the Clippers' frontcourt immediately.",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:00",
          description: "LA Clippers clawed within five on the strength of a 14-6 third-quarter run, Kawhi Leonard imposing his will in isolation and the Crypto.com crowd briefly finding its anxiety.",
          runScore: "14-6",
          momentum: "away",
          keyPlayer: "Kawhi Leonard",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:45",
          description: "LeBron personally authored a 10-2 fourth-quarter run — two assists, a mid-post score, and a transition layup — to re-establish a 13-point Lakers lead and confirm the outcome.",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "The Staples derby went the Lakers' way in convincing fashion. LeBron's fourth-quarter run was the moment the Clippers' resistance crumbled — methodical, experienced, and utterly devastating in its timing. LA is 2-0 and the city's early-season bragging rights belong unambiguously to the purple and gold.",
    },
  ],
};