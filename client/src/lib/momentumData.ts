// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 11, 2026
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
  generatedDate: "2026-10-11",
  date: "October 11, 2026",
  gameOfTheNight: "MIN-MIA-20261010",
  topClutchPerformer: {
    player: "Anthony Edwards",
    team: "MIN",
    clutchRating: 94,
    description: "Edwards authored the night's defining clutch sequence — delivering back-to-back buckets in the final 90 seconds at Kaseya Center to seal a one-point road win in one of the league's most hostile preseason environments. His ability to impose will in tight-window moments is already operating at regular-season register.",
  },
  games: [
    {
      gameId: "MIN-MIA-20261010",
      teams: { home: "MIA", away: "MIN" },
      finalScore: { home: 124, away: 125 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Miami opened with an 11-2 run to assert home-floor authority early, pushing to a nine-point cushion before Minnesota steadied.",
          runScore: "18-7",
          momentum: "home",
          keyPlayer: "Bam Adebayo",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:14",
          description: "Edwards sparked a 14-3 Minnesota counter-run through the mid-second quarter, erasing the deficit entirely and swinging the floor energy to the visitors.",
          runScore: "34-29",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:51",
          description: "Miami reclaimed the edge with a nine-point third-quarter burst, re-establishing Kaseya Center's noise advantage and pushing ahead by seven.",
          runScore: "91-84",
          momentum: "home",
          keyPlayer: "Tyler Herro",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "1:47",
          description: "Minnesota closed with a suffocating 9-2 finishing run over the final two minutes, with Edwards personally responsible for five of those points to flip the lead for good.",
          runScore: "124-125",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Pull-up mid-range jumper over Herro with 1:47 remaining to cut the Heat lead to one — the shot that turned the floor.",
          timeRemaining: "1:47",
          winProbabilityShift: 18,
        },
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Drove baseline left, finished through contact, and converted the and-one to give Minnesota its first lead of the fourth quarter with 58 seconds left.",
          timeRemaining: "0:58",
          winProbabilityShift: 31,
        },
        {
          player: "Tyler Herro",
          team: "MIA",
          description: "Stepback three from the left wing to knot the game at 122 with 1:22 remaining — briefly silenced the Minnesota bench before Edwards answered.",
          timeRemaining: "1:22",
          winProbabilityShift: -22,
        },
        {
          player: "Bam Adebayo",
          team: "MIA",
          description: "Contested floater in the final 15 seconds cut the Minnesota lead to one, but the Timberwolves held possession and ran the clock.",
          timeRemaining: "0:14",
          winProbabilityShift: -11,
        },
      ],
      narrative: "This was the night's purest basketball drama — a one-possession road win in a building that does not give those away lightly. Minnesota came to Kaseya Center fragile, having dropped two of three, and answered with their most complete forty minutes of the preseason window. Anthony Edwards was the difference in every sense that matters: he authored the second-quarter swing that erased Miami's early lead and then personally dismantled the Heat's fourth-quarter cushion in the final two minutes. For Miami, the one-point home loss is a credibility reset — a 2-1 record that felt safe now carries a question mark the Timberwolves placed there with precision.",
    },
    {
      gameId: "DET-WAS-20261010",
      teams: { home: "WAS", away: "DET" },
      finalScore: { home: 114, away: 108 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:03",
          description: "Detroit opened with disciplined half-court offense to build a seven-point first-quarter lead, controlling tempo and neutralizing Washington's transition game.",
          runScore: "14-21",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "9:30",
          description: "Washington's young core flipped the script with a 16-6 second-quarter run to take their first lead, energizing Capital One Arena and forcing Detroit into a timeout.",
          runScore: "38-32",
          momentum: "home",
          keyPlayer: "WAS Young Core",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:10",
          description: "Detroit surged to tie the game at 100 late in regulation on consecutive Cunningham buckets, forcing overtime and silencing the building.",
          runScore: "100-100",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
        {
          quarter: "OT",
          timestamp: "2:44",
          description: "Washington outscored Detroit 14-8 in overtime, closing with a 7-2 run to seal the win — the young core refusing to let the late tie turn into a loss.",
          runScore: "114-108",
          momentum: "home",
          keyPlayer: "WAS Young Core",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Floater over the outstretched Washington defense tied the game at 100 with 2:10 remaining in regulation and forced overtime.",
          timeRemaining: "2:10",
          winProbabilityShift: -19,
        },
        {
          player: "WAS Young Core",
          team: "WAS",
          description: "A composed three-point conversion in transition early in overtime gave Washington breathing room and shifted the psychological edge decisively.",
          timeRemaining: "3:22 OT",
          winProbabilityShift: 24,
        },
        {
          player: "WAS Young Core",
          team: "WAS",
          description: "Back-to-back defensive stops in the final ninety seconds of overtime iced the game — Washington converting both into free throws to extend the lead to six.",
          timeRemaining: "0:48 OT",
          winProbabilityShift: 29,
        },
      ],
      narrative: "No one projected Washington to be the preseason window's quiet overachiever, and yet here they are: 2-0 with an MSG road win and a Capital One overtime victory on the ledger. Detroit pushed them to the wire — Cunningham's late-regulation bucket erasing what looked like a safe cushion and forcing five extra minutes — but the Wizards' young core did not wilt. The overtime period told you something real about this group's competitive wiring: they outscored a composed Detroit team 14-8 when the margin for error disappeared entirely. For an organization that has absorbed organizational pain for multiple seasons, this 2-0 start is the preseason window's most unexpected organizational positive.",
    },
    {
      gameId: "PHI-BOS-20261010",
      teams: { home: "BOS", away: "PHI" },
      finalScore: { home: 144, away: 106 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:14",
          description: "Boston opened with a 15-4 blitz, establishing defensive intensity and pace from the opening tip that Philadelphia never recovered from.",
          runScore: "22-9",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "5:30",
          description: "Philadelphia briefly found offensive rhythm with a 9-2 mid-second-quarter run to cut into the margin, but Boston responded immediately with a three-possession answer.",
          runScore: "48-38",
          momentum: "home",
          keyPlayer: "Jaylen Brown",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "7:44",
          description: "Boston's third-quarter explosion — outscoring Philadelphia 40-22 in the second half alone — completed the organizational statement, with TD Garden operating at full system capacity.",
          runScore: "112-78",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "This was not a game. It was an organizational statement delivered in real time at TD Garden. Boston's 38-point margin answered every question the early preseason window had raised about their readiness — the defense was suffocating from the opening whistle, the offense moved with the fluency of a team that never truly stopped playing together. Tatum was the engine throughout, but this performance was systemic rather than individual: every rotation player contributed to a 144-point output that felt almost effortless. For Philadelphia, now 1-2 with three of four competitive concerns materialized in losses, the Celtics handed them an organizational gut-check that will define how this Sixers group responds.",
    },
    {
      gameId: "SAS-PHX-20261010",
      teams: { home: "PHX", away: "SAS" },
      finalScore: { home: 102, away: 98 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:17",
          description: "San Antonio asserted early control with their half-court system, building a six-point first-quarter edge and dictating the game's opening tempo.",
          runScore: "18-24",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "3:45",
          description: "Phoenix answered with an eight-point second-quarter swing, converting Spurs turnovers into transition points to erase the deficit and take their first lead.",
          runScore: "51-48",
          momentum: "home",
          keyPlayer: "PHX Home Unit",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:30",
          description: "San Antonio reclaimed the lead with a disciplined 7-2 fourth-quarter run, putting Phoenix under genuine pressure in front of the Mortgage Matchup Center crowd.",
          runScore: "89-92",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "1:15",
          description: "Phoenix closed with a decisive 13-6 finishing stretch, converting pressure defense into fast-break opportunities to stun the Spurs and close the game.",
          runScore: "102-98",
          momentum: "home",
          keyPlayer: "PHX Home Unit",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Victor Wembanyama",
          team: "SAS",
          description: "Mid-range pull-up over the Phoenix closeout gave San Antonio a three-point lead with 4:30 remaining and appeared to be the decisive swing.",
          timeRemaining: "4:30",
          winProbabilityShift: -17,
        },
        {
          player: "PHX Home Unit",
          team: "PHX",
          description: "Phoenix forced a shot-clock violation on consecutive Spurs possessions in the final two minutes — the defensive sequence that broke San Antonio's rhythm irreparably.",
          timeRemaining: "2:01",
          winProbabilityShift: 21,
        },
        {
          player: "PHX Home Unit",
          team: "PHX",
          description: "Back-cut layup in transition off a Spurs turnover gave Phoenix the lead for good with 1:08 remaining and sent the Mortgage Matchup Center into full voice.",
          timeRemaining: "1:08",
          winProbabilityShift: 28,
        },
      ],
      narrative: "San Antonio needed this game to restore the compound-tier credibility that Atlanta's road upset had begun to erode — they did not get it, and the organizational cost is real. The Spurs led with four minutes remaining and had the game's architecture in their hands; Phoenix took it from them with pressure defense and transition execution that a 1-2 team had no business producing against a Finals franchise. For the Suns, this win over a compound-tier opponent is a genuine credibility marker regardless of record context. For San Antonio at 0-2, the preseason desk read has shifted from concern to something closer to alarm — the Finals franchise's preseason posture is at its lowest point of the window.",
    },
    {
      gameId: "ATL-IND-20261010",
      teams: { home: "IND", away: "ATL" },
      finalScore: { home: 117, away: 119 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:22",
          description: "Indiana established home-floor tempo with an 11-3 opening burst, pushing Atlanta into early half-court isolation and building a comfortable first-quarter cushion.",
          runScore: "22-14",
          momentum: "home",
          keyPlayer: "Tyrese Haliburton",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:40",
          description: "Atlanta's transition game caught fire midway through the second quarter with a 12-4 run, erasing Indiana's lead and shifting momentum to the visitors heading into halftime.",
          runScore: "51-54",
          momentum: "away",
          keyPlayer: "ATL Transition Unit",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:11",
          description: "Indiana recaptured the lead with a disciplined third-quarter possession-by-possession grind, outscoring Atlanta 32-26 in the period to enter the fourth ahead by three.",
          runScore: "89-86",
          momentum: "home",
          keyPlayer: "Tyrese Haliburton",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "0:41",
          description: "Atlanta closed with a five-point run in the final 90 seconds — converting a Haliburton turnover into a transition layup and finishing with a go-ahead free throw pair to steal the road win.",
          runScore: "117-119",
          momentum: "away",
          keyPlayer: "ATL Closing Unit",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Tyrese Haliburton",
          team: "IND",
          description: "Pull-up three from the top of the key gave Indiana a four-point lead with 2:14 remaining — looked like the dagger before Atlanta responded.",
          timeRemaining: "2:14",
          winProbabilityShift: -20,
        },
        {
          player: "ATL Closing Unit",
          team: "ATL",
          description: "Atlanta converted a Haliburton turnover into an immediate transition layup, cutting the lead to two with 1:22 remaining and changing the game's energy entirely.",
          timeRemaining: "1:22",
          winProbabilityShift: 19,
        },
        {
          player: "ATL Closing Unit",
          team: "ATL",
          description: "A pair of go-ahead free throws with 41 seconds remaining gave Atlanta the lead for the first time since halftime — the coolest execution of the night's clutch window.",
          timeRemaining: "0:41",
          winProbabilityShift: 33,
        },
        {
          player: "Tyrese Haliburton",
          team: "IND",
          description: "Haliburton's final three-point attempt from the right wing with four seconds remaining was clean but rattled out — Indiana's window closed.",
          timeRemaining: "0:04",
          winProbabilityShift: -27,
        },
      ],
      narrative: "Atlanta is now 2-1 and carrying the preseason window's most interesting road résumé — a Phoenix upset and a Gainbridge Fieldhouse steal that came down to a final free-throw pair. The Hawks closed this game without the lead entering the fourth quarter's final two minutes, executing a pressure sequence against one of the East's most disciplined offensive systems that required both defensive stops and nerve at the line. Indiana's Haliburton had the Pacers positioned to win at 2:14 remaining; the Haliburton turnover that preceded Atlanta's go-ahead run was the game's decisive error, and the final miss at the buzzer closed Indiana's window definitively. At 2-1, Atlanta is quietly establishing themselves as the window's most disruptive traveling presence.",
    },
    {
      gameId: "LAC-TOR-20261010",
      teams: { home: "TOR", away: "LAC" },
      finalScore: { home: 114, away: 106 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:55",
          description: "LA Clippers opened with fluid ball movement and early three-point efficiency, building a six-point first-quarter edge and quieting the Rogers Arena crowd.",
          runScore: "16-22",
          momentum: "away",
          keyPlayer: "LAC Perimeter Unit",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "8:02",
          description: "Toronto's home crowd found its voice as the Raptors opened the second quarter with a 13-4 blitz — aggressive defensive pressure forcing Clipper turnovers and converting them into transition scores.",
          runScore: "42-34",
          momentum: "home",
          keyPlayer: "TOR Home Unit",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "2:33",
          description: "LA mounted a third-quarter push to cut Toronto's lead to four, applying sustained pressure and forcing the Raptors' coaching staff into their second timeout of the period.",
          runScore: "78-74",
          momentum: "away",
          keyPlayer: "LAC Perimeter Unit",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "6:14",
          description: "Toronto responded to LA's third-quarter push with a dominant 18-8 fourth-quarter close — the Raptors' defensive rotations locking the Clippers out of rhythm and producing eight unanswered points across a three-minute stretch.",
          runScore: "114-106",
          momentum: "home",
          keyPlayer: "TOR Home Unit",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Rogers Arena handed the Clippers their first preseason loss and gave Toronto something it needed: a genuinely convincing home win that answered the opening-loss narrative. The Raptors trailed in the first quarter before their defensive identity asserted itself — the second-quarter swing was forceful enough to break LA's rhythm in ways it never fully recovered from. The Clippers pushed in the third quarter and brought the deficit to four, but Toronto's fourth-quarter close was authoritative rather than anxious: an 18-8 period that left no doubt about the organizational result. At 1-1, the Raptors have given their home crowd a competitive foundation; at 1-1, the Clippers leave Canada with their first loss and questions about fourth-quarter execution.",
    },
    {
      gameId: "SAC-GSW-20261010",
      teams: { home: "GSW", away: "SAC" },
      finalScore: { home: 111, away: 106 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:30",
          description: "Sacramento opened with pace and ball movement to build an eight-point first-quarter lead, silencing the Chase Center crowd and extending their run-and-gun identity into the visit.",
          runScore: "19-27",
          momentum: "away",
          keyPlayer: "SAC Pace Unit",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "4:18",
          description: "Stephen Curry took personal ownership of the second quarter, delivering a 10-2 individual scoring run to erase Sacramento's lead and swing the Chase Center energy decisively.",
          runScore: "52-47",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:55",
          description: "Sacramento pushed back with five unanswered points to tie the game at 77 midway through the third — testing Golden State's home-court resolve and forcing the Warriors to respond.",
          runScore: "77-77",
          momentum: "away",
          keyPlayer: "SAC Pace Unit",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "7:00",
          description: "Golden State opened the fourth with an 11-4 run — Curry setting the table and role players converting — to build a double-digit lead that Sacramento could only partially trim.",
          runScore: "101-88",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Golden State needed a clean home win after two early losses, and Curry delivered exactly that — a performance that took personal control of the second quarter when Sacramento's pace threatened to turn Chase Center into a road venue. The Warriors' fourth-quarter run was the sequence that closed Sacramento's window: an 11-4 burst that pushed the lead to double digits before the Kings' late trimming made the final margin respectable without reflecting the game's actual competitive arc. For Sacramento at 0-3, the preseason window's most concerning winless record in the Western Conference is accumulating organizational weight — the Kings' bubble-contender status needs wins that aren't coming. Golden State is finding its footing at home; the next test is whether they can carry this identity on the road.",
    },
  ],
};