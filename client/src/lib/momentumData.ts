// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 17, 2026
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
  generatedDate: "2026-11-17",
  date: "November 17, 2026",
  gameOfTheNight: "ORL-BOS-20261116",
  topClutchPerformer: {
    player: "Desmond Bane",
    team: "ORL",
    clutchRating: 91,
    description: "Bane orchestrated Orlando's fourth-quarter closing run at TD Garden, burying two consecutive threes when Boston threatened to claw back and finishing with 24 points in the road upset. His cool-headed execution in hostile territory sealed one of the season's biggest results.",
  },
  games: [
    {
      gameId: "CHI-CLE-20261116",
      teams: { home: "CLE", away: "CHI" },
      finalScore: { home: 126, away: 115 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:32",
          description: "Chicago closed a 9-point deficit to two on a Norman Powell triple and back-to-back buckets, briefly seizing momentum at Rocket Arena and silencing the home crowd.",
          runScore: "9-2 CHI run",
          momentum: "away",
          keyPlayer: "Norman Powell",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:14",
          description: "Donovan Mitchell answered Powell's surge with five straight points — a pull-up mid-range and a step-back three — igniting a 14-4 Cleveland run that effectively ended Chicago's fight.",
          runScore: "14-4 CLE run",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "8:50",
          description: "James Harden flipped the offense into overdrive, dishing four assists in a three-minute stretch to push the lead to 18 and put the game completely out of reach.",
          runScore: "12-4 CLE run",
          momentum: "home",
          keyPlayer: "James Harden",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "This game had a brief heartbeat for Chicago in the second quarter when Powell got hot, but the moment Mitchell locked in after halftime the outcome was never seriously in doubt. Cleveland's second-half identity — Mitchell as the heat-check scorer and Harden as the calm orchestrator — is a genuinely dangerous combination when both are operating at this level.",
    },
    {
      gameId: "ORL-BOS-20261116",
      teams: { home: "BOS", away: "ORL" },
      finalScore: { home: 105, away: 115 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "3:45",
          description: "Boston used a 10-2 run fueled by Payton Pritchard threes to build a double-digit lead, looking every bit like a team defending home court against a struggling road squad.",
          runScore: "10-2 BOS run",
          momentum: "home",
          keyPlayer: "Payton Pritchard",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "6:20",
          description: "Franz Wagner and Anthony Black combined for 11 consecutive Orlando points, erasing the Boston lead and shifting the energy inside TD Garden as the Magic began to believe.",
          runScore: "11-3 ORL run",
          momentum: "away",
          keyPlayer: "Franz Wagner",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "5:10",
          description: "With Boston down three and the game on a knife's edge, Desmond Bane buried back-to-back threes on consecutive possessions to push the lead to nine and kill the Celtics' comeback energy for good.",
          runScore: "9-2 ORL run",
          momentum: "away",
          keyPlayer: "Desmond Bane",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Desmond Bane",
          team: "ORL",
          description: "Corner three over a closing Tatum to extend the Magic lead to seven with Boston's crowd roaring — the dagger that ended the Celtics' six-game win streak.",
          timeRemaining: "4:51",
          winProbabilityShift: 34,
        },
        {
          player: "Anthony Black",
          team: "ORL",
          description: "Stripped Jayson Tatum in the half-court and finished the fast-break layup, pushing Orlando's lead to five at a critical juncture and deflating Boston's defensive intensity.",
          timeRemaining: "6:03",
          winProbabilityShift: 22,
        },
        {
          player: "Jayson Tatum",
          team: "BOS",
          description: "Back-to-back tough mid-range jumpers pulled Boston within three with the crowd alive, briefly threatening to flip the narrative before Bane responded decisively.",
          timeRemaining: "5:30",
          winProbabilityShift: -18,
        },
      ],
      narrative: "Orlando's win at TD Garden wasn't a fluke — it was a 48-minute masterclass in ball movement and collective confidence from a team that refused to wilt under the weight of Boston's reputation. The Magic outplayed the Celtics in every phase during the fourth quarter, and Bane's back-to-back threes were the kind of clutch shot-making usually reserved for championship-caliber teams. For Boston, this is a wake-up call: they couldn't generate stops against a 6-7 team, and that defensive fragility will haunt them in bigger spots.",
    },
    {
      gameId: "MEM-WAS-20261116",
      teams: { home: "WAS", away: "MEM" },
      finalScore: { home: 120, away: 136 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "2:30",
          description: "Cameron Boozer opened his three-point clinic with three consecutive made threes, staking Memphis to a 14-point lead before Washington could find its defensive footing.",
          runScore: "16-6 MEM run",
          momentum: "away",
          keyPlayer: "Cameron Boozer",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:00",
          description: "Anthony Davis went on a personal 8-0 run to cut the Memphis lead to single digits, briefly injecting life into Capital One Arena and threatening a Washington comeback.",
          runScore: "10-4 WAS run",
          momentum: "home",
          keyPlayer: "Anthony Davis",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "2:15",
          description: "Javon Small orchestrated a devastating 12-2 Memphis counter-run with four assists in the stretch, restoring a 20-point advantage and snuffing out Washington's last breath of hope.",
          runScore: "12-2 MEM run",
          momentum: "away",
          keyPlayer: "Javon Small",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Memphis came to Washington and treated Capital One Arena like a home gym, with Boozer's three-point barrage setting a tone in the first quarter that the Wizards never recovered from. The brief Anthony Davis surge in the third made it interesting for about four minutes, before Javon Small reminded everyone why the Grizzlies are 10-4. At this point Memphis's offensive versatility — Boozer bombing from deep, Edey dominating the paint, Small distributing — looks like a genuine Western Conference problem.",
    },
    {
      gameId: "HOU-MIA-20261116",
      teams: { home: "MIA", away: "HOU" },
      finalScore: { home: 128, away: 110 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:10",
          description: "Houston briefly drew within six on a Kevin Durant mid-range flurry, the star's individual brilliance masking growing defensive breakdowns that would become terminal later.",
          runScore: "8-3 HOU run",
          momentum: "away",
          keyPlayer: "Kevin Durant",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "4:00",
          description: "Giannis Antetokounmpo personally orchestrated Miami's decisive 16-4 third-quarter run — two rim-rattling dunks, a block that led to a fast-break, and a turnaround hook that shattered Houston's defensive scheme.",
          runScore: "16-4 MIA run",
          momentum: "home",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:00",
          description: "Davion Mitchell's four-steal half resulted in multiple Miami transition buckets in the fourth, with his relentless on-ball pressure making Durant and the Rockets' secondary ball-handlers look uncomfortable all night.",
          runScore: "10-3 MIA run",
          momentum: "home",
          keyPlayer: "Davion Mitchell",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Houston came in as a top-five Western Conference team and left Kaseya Center battered, with Durant's minus-24 stat line telling the story of how thoroughly Miami disrupted the Rockets' offensive ecosystem. Giannis's third-quarter takeover was the pivot point — the moment he stopped deferring and started imposing his will, the game was effectively over. Miami's two-way depth, with Davion Mitchell as a defensive menace and Andrew Wiggins protecting the rim, makes them a genuinely difficult matchup for anyone in the East.",
    },
    {
      gameId: "PHI-BRK-20261116",
      teams: { home: "BRK", away: "PHI" },
      finalScore: { home: 123, away: 135 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:20",
          description: "Julius Randle opened aggressively with 10 first-quarter points, keeping Brooklyn competitive and briefly putting the Nets up six before Philadelphia's firepower fully activated.",
          runScore: "10-4 BRK run",
          momentum: "home",
          keyPlayer: "Julius Randle",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "5:00",
          description: "Joel Embiid and Jaylen Brown combined for 17 points on a stunning 20-7 Sixers run that flipped a Brooklyn lead into a double-digit Philadelphia advantage heading into halftime.",
          runScore: "20-7 PHI run",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "7:30",
          description: "Nolan Traore's 10-point fourth-quarter burst gave Brooklyn momentary life, cutting the deficit to eight and triggering a tense stretch before Philadelphia's depth sealed it.",
          runScore: "10-4 BRK run",
          momentum: "home",
          keyPlayer: "Nolan Traore",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Brooklyn never had a real answer for Philadelphia's three-headed offensive monster — Embiid's post dominance, Brown's athletic scoring, and Maxey's blur-speed guard play gave the Nets a different problem every possession. Randle's fight was admirable and Traore showed flashes of a bright future, but this was a reminder that Philadelphia at 12-3 is operating on a different tier than most of the Eastern Conference. The Sixers look like the class of the East right now.",
    },
    {
      gameId: "POR-MIN-20261116",
      teams: { home: "MIN", away: "POR" },
      finalScore: { home: 106, away: 98 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:50",
          description: "Deni Avdija caught fire with back-to-back threes and a crafty drive to give Portland a seven-point lead, stunning Target Center and threatening Minnesota's home record.",
          runScore: "11-4 POR run",
          momentum: "away",
          keyPlayer: "Deni Avdija",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:30",
          description: "Terrence Shannon Jr. responded with a personal 9-0 blitz — a three, a pull-up jumper, and a driving floater — reclaiming the lead for Minnesota and establishing himself as the go-to option.",
          runScore: "13-5 MIN run",
          momentum: "home",
          keyPlayer: "Terrence Shannon Jr.",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "3:45",
          description: "Rudy Gobert's back-to-back putbacks and a Donovan Clingan foul trouble situation gave Minnesota breathing room down the stretch, with Portland's road offense completely stalling without an interior presence.",
          runScore: "8-2 MIN run",
          momentum: "home",
          keyPlayer: "Rudy Gobert",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Terrence Shannon Jr.",
          team: "MIN",
          description: "Isolated on the wing with Minnesota down two, Shannon Jr. drove baseline and converted a tough runner over the outstretched arm of Donovan Clingan to tie the game.",
          timeRemaining: "4:12",
          winProbabilityShift: 19,
        },
        {
          player: "Deni Avdija",
          team: "POR",
          description: "Catch-and-shoot three from the wing to cut the Minnesota lead to three in the final three minutes, keeping Portland's faint comeback hopes alive momentarily.",
          timeRemaining: "2:55",
          winProbabilityShift: -14,
        },
      ],
      narrative: "Portland came into Target Center with a 9-4 record and genuine upset intent, and Avdija's second-quarter barrage made this feel like it might go sideways for Minnesota. Shannon Jr.'s emergence as a clutch performer was the difference — his ability to create shots in the half-court without help gave the Wolves a go-to option they haven't always had. Gobert's fourth-quarter dominance on the boards ultimately put the game away when Portland couldn't generate second chances.",
    },
    {
      gameId: "GSW-NOP-20261116",
      teams: { home: "NOP", away: "GSW" },
      finalScore: { home: 115, away: 94 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:00",
          description: "Saddiq Bey opened the game on fire with three consecutive threes, setting Smoothie King Center alight and establishing an early tone that Golden State never recovered from.",
          runScore: "14-5 NOP run",
          momentum: "home",
          keyPlayer: "Saddiq Bey",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "6:00",
          description: "Yaxel Lendeborg went on a 10-point personal run to briefly draw Golden State within eight, providing the Warriors' only sustained offensive momentum of the game.",
          runScore: "10-4 GSW run",
          momentum: "away",
          keyPlayer: "Yaxel Lendeborg",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "5:00",
          description: "Jeremiah Fears's triple-double engine kicked into overdrive as he set up Derik Queen for three straight buckets, with New Orleans's ball movement slicing through Golden State's zone and pushing the lead to 24.",
          runScore: "15-5 NOP run",
          momentum: "home",
          keyPlayer: "Jeremiah Fears",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Golden State came to New Orleans as a winning team and left completely outclassed, with Lendeborg's minus-30 putting a number on how badly the Warriors were outmatched when their star tried to go one-on-one against New Orleans's collective. Jeremiah Fears running a triple-double through Golden State's defense is the kind of breakout performance that changes how scouts view a 20-year-old, and Bey's five threes were clinical efficiency from start to finish. For a 5-10 team, New Orleans looked like a squad that is finally figuring out its identity.",
    },
    {
      gameId: "PHX-DEN-20261116",
      teams: { home: "DEN", away: "PHX" },
      finalScore: { home: 105, away: 117 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:00",
          description: "Nikola Jokic and Jamal Murray combined for Denver's first 18 points in a dominant early run, with Ball Arena looking like the fortress it usually is against West contenders.",
          runScore: "18-8 DEN run",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "7:15",
          description: "Luke Kennard exploded off the Phoenix bench with four threes in a stunning 18-6 Suns run, erasing Denver's lead and flipping the momentum in a performance nobody saw coming.",
          runScore: "18-6 PHX run",
          momentum: "away",
          keyPlayer: "Luke Kennard",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:00",
          description: "Devin Booker took over Denver's defensive attention while Dillon Brooks and Jordan Goodwin made Denver pay with timely buckets, extending Phoenix's lead to 15 and completing one of the West's most surprising road wins of the season.",
          runScore: "14-5 PHX run",
          momentum: "away",
          keyPlayer: "Devin Booker",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Jokic's 28-15-7 masterpiece will get the headlines but the story of this game is Luke Kennard going nuclear off the Phoenix bench at exactly the right moment — his four third-quarter threes were the knife that punctured Denver's confidence and exposed defensive vulnerabilities the Nuggets cannot afford at 7-5. For a Suns team that entered at 6-7, this road win over one of the West's best home teams is a massive statement about their ceiling. Denver's inability to stop spot-up shooters is becoming a recurring problem that Jokic's brilliance alone cannot solve.",
    },
  ],
};