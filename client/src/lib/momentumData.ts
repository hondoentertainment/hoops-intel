// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 5, 2026
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
  generatedDate: "2026-11-05",
  date: "November 5, 2026",
  gameOfTheNight: "MIA-LAC-20261104",
  topClutchPerformer: {
    player: "Jimmy Butler",
    team: "MIA",
    clutchRating: 97,
    description: "Butler authored the night's defining closing act — forcing overtime with a driving layup, then sealing Miami's 117-116 win with two free throws at 4.4 seconds in OT. Four steals, 32 points, and an iron will that the Clippers had no answer for.",
  },
  games: [
    {
      gameId: "PHI-DET-20261104",
      teams: { home: "DET", away: "PHI" },
      finalScore: { home: 106, away: 112 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Cade Cunningham orchestrated a 12-3 Detroit run to push the Pistons ahead by seven, exploiting Philadelphia's slow defensive rotations out of early timeouts.",
          runScore: "12-3 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "6:10",
          description: "Embiid imposed his will in the post on back-to-back possessions, capping a 10-2 Philadelphia run that erased the Detroit lead and flipped the game's energy entirely.",
          runScore: "10-2 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "3:45",
          description: "Philadelphia's defensive rotations suffocated Detroit's half-court sets across three consecutive possessions, turning a two-point game into a six-point cushion with under four minutes left.",
          runScore: "8-2 PHI",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Detroit kept this competitive through three quarters on the strength of Cunningham's creation and home crowd energy, but Philadelphia's depth and defensive discipline proved overwhelming in the fourth. Embiid's 34-12 was the anchor, yet it was the collective — four players in double figures — that wore the Pistons down in the final frame. The 76ers' 8-1 record is not an accident.",
    },
    {
      gameId: "ATL-WSH-20261104",
      teams: { home: "WSH", away: "ATL" },
      finalScore: { home: 105, away: 120 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:30",
          description: "Atlanta pieced together a 15-4 run through the second quarter heart, exposing Washington's porous perimeter defense and ballooning the lead to double digits before halftime.",
          runScore: "15-4 ATL",
          momentum: "away",
          keyPlayer: "Trae Young",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "8:00",
          description: "Washington made a brief push to close within eight, but Atlanta's bench answered with a disciplined 9-2 run to restore comfort and effectively close the book.",
          runScore: "9-2 ATL",
          momentum: "away",
          keyPlayer: "Bogdan Bogdanovic",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Atlanta's second-quarter burst was the game's decisive chapter — Washington never recovered the energy or the defensive composure to make it truly competitive. The Hawks improve to 5-4 on the strength of a balanced offensive attack that the Wizards' depleted roster had no mechanism to contain.",
    },
    {
      gameId: "MIL-BOS-20261104",
      teams: { home: "BOS", away: "MIL" },
      finalScore: { home: 109, away: 102 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:14",
          description: "Boston used a 13-4 run bridging the first and second quarters to establish separation, with the Celtics' ball movement finding open corner threes that Milwaukee's switching scheme surrendered freely.",
          runScore: "13-4 BOS",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "5:00",
          description: "Milwaukee trimmed the deficit to five on consecutive Giannis buckets in the paint, raising the possibility of a late push before Boston's defense stiffened and held firm.",
          runScore: "8-3 MIL",
          momentum: "away",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Boston controlled this game for the vast majority of its duration, never truly threatened once their mid-first-quarter rhythm locked in at TD Garden. Milwaukee at 1-7 is an Eastern Conference alarm — a roster built for title contention is currently floundering, and the fourth-quarter push was too little to reignite any real drama.",
    },
    {
      gameId: "CHA-BKN-20261104",
      teams: { home: "BKN", away: "CHA" },
      finalScore: { home: 114, away: 104 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "4:00",
          description: "Brooklyn's young core erupted for a 16-6 third-quarter run that turned a narrow halftime lead into a commanding double-digit cushion, feeding off a hostile Barclays crowd.",
          runScore: "16-6 BKN",
          momentum: "home",
          keyPlayer: "Cam Thomas",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:30",
          description: "Charlotte cut the deficit to eight early in the fourth before Brooklyn's defense clamped down and the lead swelled back to double figures within two minutes.",
          runScore: "7-2 BKN",
          momentum: "home",
          keyPlayer: "Cam Thomas",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Brooklyn's third-quarter run was the definitive blow in a game that never had a genuine late-game identity. The Nets are quietly building something worth watching; the Hornets at 3-6 are still searching for a consistent second scorer to take pressure off their primary options.",
    },
    {
      gameId: "CHI-NY-20261104",
      teams: { home: "NY", away: "CHI" },
      finalScore: { home: 135, away: 105 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:00",
          description: "New York opened with a stunning 22-6 first-quarter run, burying Chicago before the Bulls had any opportunity to establish an offensive rhythm at Madison Square Garden.",
          runScore: "22-6 NY",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:00",
          description: "With reserves deployed and the game long decided, New York's bench continued to pour it on, extending the lead past 30 and completing a thoroughgoing demolition.",
          runScore: "12-4 NY",
          momentum: "home",
          keyPlayer: "Miles McBride",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "This was an execution at MSG — Chicago arrived at 1-7 and left looking worse. The 30-point final margin tells the story cleanly: the Knicks were locked in from the opening tip and Chicago had neither the talent nor the energy to compete. New York's home record deserves monitoring as a legitimacy marker.",
    },
    {
      gameId: "IND-MEM-20261104",
      teams: { home: "MEM", away: "IND" },
      finalScore: { home: 103, away: 107 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "7:00",
          description: "Indiana pieced together a 12-4 run to seize their first lead of the second half, rattling Memphis with crisp ball movement and opportunistic transition buckets.",
          runScore: "12-4 IND",
          momentum: "away",
          keyPlayer: "Tyrese Haliburton",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "2:30",
          description: "Memphis rallied to tie the game at 101, forcing Indiana's hand in the final two minutes in a tense FedExForum fourth quarter with both teams clinging to possession.",
          runScore: "7-2 MEM",
          momentum: "home",
          keyPlayer: "Ja Morant",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Tyrese Haliburton",
          team: "IND",
          description: "Haliburton buried a pull-up mid-range jumper to restore Indiana's lead at 103-101 with 58 seconds remaining, then diced Memphis's late-game defense with two assists on the final two possessions.",
          timeRemaining: "0:58",
          winProbabilityShift: 28,
        },
        {
          player: "Ja Morant",
          team: "MEM",
          description: "Morant's driving floater with 18 seconds left trimmed it to two, but Indiana held on through the ensuing possession to escape with the road win.",
          timeRemaining: "0:18",
          winProbabilityShift: -14,
        },
      ],
      narrative: "A quietly excellent game that the larger slate overshadowed — Indiana's fourth-quarter composure on the road against a Memphis team that entered 6-2 is legitimately impressive. Haliburton's closing sequence was the difference, and the Pacers' ability to win ugly road games is becoming a defining characteristic of this group.",
    },
    {
      gameId: "UTA-NOP-20261104",
      teams: { home: "NO", away: "UTAH" },
      finalScore: { home: 120, away: 113 },
      swings: [
        {
          quarter: "Q4",
          timestamp: "1:48",
          description: "Utah's reserves executed a stunning 8-0 closing run to tie the game at 108, sending a stunned Smoothie King Center into overtime and threatening New Orleans's fourth-quarter dominance.",
          runScore: "8-0 UTAH",
          momentum: "away",
          keyPlayer: "Keyonte George",
          impact: "game-changing",
        },
        {
          quarter: "OT",
          timestamp: "3:12",
          description: "Zion Williamson took over in overtime, scoring six consecutive New Orleans points on a mid-range jumper, an and-one drive, and a dunk off the offensive glass to break the game open.",
          runScore: "10-3 NO",
          momentum: "home",
          keyPlayer: "Zion Williamson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Zion Williamson",
          team: "NO",
          description: "Zion's back-to-back overtime buckets — including a physical and-one that drew the crowd to its feet — essentially ended Utah's comeback bid and secured the Pelicans' second consecutive OT victory.",
          timeRemaining: "2:45 OT",
          winProbabilityShift: 42,
        },
        {
          player: "Keyonte George",
          team: "UTAH",
          description: "George's corner three with 1:48 remaining in regulation capped Utah's 8-0 run and tied the game, turning what looked like a comfortable New Orleans win into a genuine late-game emergency.",
          timeRemaining: "1:48",
          winProbabilityShift: -31,
        },
      ],
      narrative: "New Orleans survived for the second time in three nights, but the manner of it — a blown fourth-quarter lead rescued only by Zion's overtime dominance — raises real questions the desk cannot ignore about minutes management and roster depth. Williamson carrying maximum load on back-to-back OT nights is a ticking clock. The Pelicans are resilient; they also need to be more than one man.",
    },
    {
      gameId: "CLE-OKC-20261104",
      teams: { home: "OKC", away: "CLE" },
      finalScore: { home: 124, away: 116 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:00",
          description: "Oklahoma City used a ferocious 14-4 second-quarter run — built entirely on transition buckets and Shai Gilgeous-Alexander pull-up threes — to establish a double-digit lead that Cleveland spent the rest of the game chasing.",
          runScore: "14-4 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "5:30",
          description: "Cleveland trimmed the deficit to six on a Donovan Mitchell scoring burst, but OKC's young core responded maturely with a 9-2 run to push the lead back to thirteen and close the door.",
          runScore: "9-2 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Oklahoma City's second-quarter explosion was textbook SGA — push pace, attack closeouts, punish any defensive lapse before the opponent can reset. The Thunder at 6-2 share West leadership with Houston and look every bit as capable of maintaining it. Cleveland's fourth-quarter push was admirable but came against a team that refused to let the margin close to single digits.",
    },
    {
      gameId: "MIN-HOU-20261104",
      teams: { home: "HOU", away: "MIN" },
      finalScore: { home: 107, away: 117 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "9:00",
          description: "The game entered the fourth quarter knotted at 89 — a taut, physical game that neither team had been able to separate from — with Houston's Toyota Center crowd anticipating a home stand-defining win.",
          runScore: "Even",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "8:30",
          description: "Anthony Edwards erupted with four three-pointers in an eight-minute fourth-quarter stretch, singlehandedly dismantling Houston's defensive scheme and scoring 16 of Minnesota's first 22 fourth-quarter points.",
          runScore: "22-10 MIN",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "The game's story is simple and devastating for Houston: Edwards in a fourth quarter is a problem no team has fully solved, and the Rockets exposed a perimeter switching vulnerability that elite scouts will file away immediately. Sengun's 22-11 was lost in the noise. Minnesota at 6-3 continues to look like a title-caliber team when Edwards is locked in, which he was from the moment the fourth quarter tipped.",
    },
    {
      gameId: "TOR-DEN-20261104",
      teams: { home: "DEN", away: "TOR" },
      finalScore: { home: 128, away: 109 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:00",
          description: "Denver's altitude-adjusted pace wore Toronto down through the second quarter, with Nikola Jokić threading consecutive pocket passes into the paint for easy buckets that ballooned a narrow lead to sixteen.",
          runScore: "16-5 DEN",
          momentum: "home",
          keyPlayer: "Nikola Jokić",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:00",
          description: "Toronto briefly tightened the margin to ten on a secondary unit run, but Denver's starters returned and quickly restored a commanding lead before the quarter's midpoint.",
          runScore: "11-4 DEN",
          momentum: "home",
          keyPlayer: "Jamal Murray",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Jokić made it look easy, as Jokić tends to do at Ball Arena. The Nuggets' second-quarter explosion was built on the kind of systemic ball movement that Toronto's defense simply has no structural answer for. Denver improves to 5-3 and looks significantly more formidable at home than on the road — a data point worth filing for playoff projections.",
    },
    {
      gameId: "POR-PHX-20261104",
      teams: { home: "PHX", away: "POR" },
      finalScore: { home: 119, away: 132 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:30",
          description: "Portland set the tone immediately, using a 15-4 run mid-first-quarter to establish a lead they would never relinquish — Henderson's pace and decision-making left Phoenix scrambling before they found their footing.",
          runScore: "15-4 POR",
          momentum: "away",
          keyPlayer: "Scoot Henderson",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:00",
          description: "Phoenix briefly threatened with a 10-2 run to close within seven, but Portland's bench responded with a 14-4 blitz that effectively buried any Suns comeback narrative before it could breathe.",
          runScore: "14-4 POR",
          momentum: "away",
          keyPlayer: "Anfernee Simons",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Portland's road demolition of Phoenix without Kevin Durant in the building is the most complete team performance of the week — four players scoring 20 or more, a bench that outscored Phoenix reserves by 19, and Henderson's 31-11 as the engine of it all. The soft-schedule deflection is no longer available to the desk or to Portland's critics. The Blazers are a real team.",
    },
    {
      gameId: "DAL-SAS-20261104",
      teams: { home: "SA", away: "DAL" },
      finalScore: { home: 112, away: 111 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "4:00",
          description: "Dallas outscored San Antonio through three quarters and carried a lead into the fourth, with Luka Dončić orchestrating a half-court offense that the Spurs' young defense struggled to contain for long stretches.",
          runScore: "10-4 DAL",
          momentum: "away",
          keyPlayer: "Luka Dončić",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "0:18",
          description: "Stephon Castle's go-ahead bucket on a clockwork half-court isolation with 18 seconds remaining gave San Antonio its first lead of the second half and exposed Dallas's defensive communication at the moment it mattered most.",
          runScore: "2-0 SAS",
          momentum: "home",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Stephon Castle",
          team: "SA",
          description: "Castle's go-ahead isolation bucket with 18 seconds remaining — calm, deliberate, and executed over a closing defender — was the single most clutch individual play of Wednesday's slate outside of Miami.",
          timeRemaining: "0:18",
          winProbabilityShift: 61,
        },
        {
          player: "Luka Dončić",
          team: "DAL",
          description: "Dončić pushed the pace on the ensuing possession but couldn't generate a clean look in the final seconds, and Dallas's last-second heave was off the mark as the Spurs celebrated at Frost Bank Center.",
          timeRemaining: "0:04",
          winProbabilityShift: -18,
        },
      ],
      narrative: "Dallas outplayed San Antonio for 47 minutes and 42 seconds and lost. That is the most concise summary available. Castle's closing-time credibility — his fifth consecutive game with 23 or more — is genuine star-level substance, and the Mavericks' defensive breakdown in the final 20 seconds is a character flaw that will be revisited. San Antonio is 6-2 and Castle is forcing the ROY conversation wide open.",
    },
    {
      gameId: "LAL-SAC-20261104",
      teams: { home: "SAC", away: "LAL" },
      finalScore: { home: 103, away: 116 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:00",
          description: "Los Angeles built momentum through the second quarter behind LeBron's orchestration of a 13-5 run that turned a tied game into a double-digit Lakers lead before halftime at Golden 1 Center.",
          runScore: "13-5 LAL",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:00",
          description: "Sacramento trimmed the deficit to nine on a DeMar DeRozan mid-range sequence, but Los Angeles answered with a disciplined 10-3 run to push the lead back to sixteen and effectively seal it.",
          runScore: "10-3 LAL",
          momentum: "away",
          keyPlayer: "Anthony Davis",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "The Lakers at 7-2 are quietly the West's most complete two-way team on current form, and this road win over Sacramento — comfortable if not flashy — adds another entry to a résumé that demands serious recognition. Sacramento at 1-7 is in genuine organizational distress; the gap between their projected ceiling and current floor is widening by the week.",
    },
    {
      gameId: "MIA-LAC-20261104",
      teams: { home: "LAC", away: "MIA" },
      finalScore: { home: 116, away: 117 },
      swings: [
        {
          quarter: "Q4",
          timestamp: "2:00",
          description: "Los Angeles held a four-point lead with two minutes remaining in regulation, Intuit Dome crowd sensing the upset — before Butler's driving layup with 38 seconds left forced overtime and silenced the building.",
          runScore: "4-0 LAC",
          momentum: "home",
          keyPlayer: "James Harden",
          impact: "significant",
        },
        {
          quarter: "OT",
          timestamp: "0:04",
          description: "Butler drew a foul on a fearless drive to the basket with 4.4 seconds remaining in overtime and converted both free throws to give Miami a one-point lead that Los Angeles could not answer.",
          runScore: "2-0 MIA",
          momentum: "away",
          keyPlayer: "Jimmy Butler",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Jimmy Butler",
          team: "MIA",
          description: "Butler's driving layup with 38 seconds left in regulation — against a collapsing Clippers defense that had no answer for his downhill aggression — erased a four-point deficit and forced overtime in one of the week's signature moments.",
          timeRemaining: "0:38",
          winProbabilityShift: 34,
        },
        {
          player: "Jimmy Butler",
          team: "MIA",
          description: "With the Clippers leading by one in OT and 4.4 seconds on the clock, Butler attacked the paint, drew the foul, and converted both free throws with the stillness of someone who has lived in this moment his entire career.",
          timeRemaining: "0:04 OT",
          winProbabilityShift: 71,
        },
        {
          player: "James Harden",
          team: "LAC",
          description: "Harden's mid-range pull-up gave the Clippers a four-point lead with two minutes remaining in regulation — ultimately the high-water mark of a valiant effort from a depleted Clippers roster that deserved better.",
          timeRemaining: "2:00",
          winProbabilityShift: -22,
        },
      ],
      narrative: "Jimmy Butler in overtime is not a basketball situation — it is a force of nature with a jersey number. The Clippers at 1-7 without Kawhi Leonard played hard enough to win and still couldn't contain one of the game's most reliable closing operators. Butler forced OT, commanded OT, and ended OT on his terms. Miami's 3-5 record does not reflect what their best player is doing every single night.",
    },
  ],
};