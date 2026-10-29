// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 29, 2026
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
  generatedDate: "2026-10-29",
  date: "October 29, 2026",
  gameOfTheNight: "NYK-CHI-20261028",
  topClutchPerformer: {
    player: "Jalen Brunson",
    team: "NYK",
    clutchRating: 96,
    description: "Down seven in the fourth quarter on the road on the second night of a back-to-back, Brunson authored one of the early season's most composed closing sequences — 14 fourth-quarter points, three critical pull-up jumpers, and a steal that sealed the game. His clutch-time numbers through five games are becoming a narrative anchor for this Knicks season.",
  },
  games: [
    {
      gameId: "MIA-ATL-20261028",
      teams: { home: "ATL", away: "MIA" },
      finalScore: { home: 117, away: 129 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:12",
          description: "Miami erupted on a 16-4 run to close the first half, converting three consecutive Atlanta turnovers into transition points and taking a double-digit lead into the break.",
          runScore: "16-4",
          momentum: "away",
          keyPlayer: "Bam Adebayo",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:45",
          description: "Atlanta trimmed the deficit to six on a 12-3 burst fueled by three consecutive Hawks mid-range jumpers, briefly threatening to bring the State Farm Arena crowd back into it.",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:20",
          description: "Miami responded immediately, detonating a 14-5 run that extended the lead back to 15 and put the game beyond Atlanta's reach for good.",
          runScore: "14-5",
          momentum: "away",
          keyPlayer: "Tyler Herro",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Miami's 12-point road win in Atlanta was built on a dominant second quarter that exposed the Hawks' turnover issues and gave the Heat a cushion they never truly surrendered. The Heat's defense — holding Atlanta to 117 in a building that usually produces offense — is an early-season organizational signal worth monitoring. MIA improves to 1-4 but the performance quality outpaces the record. ATL falls to 2-3 and their ball-security problems remain the desk's primary concern.",
    },
    {
      gameId: "WSH-CLE-20261028",
      teams: { home: "CLE", away: "WSH" },
      finalScore: { home: 121, away: 111 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "2:30",
          description: "Cleveland established early control with a 13-2 closing run in the first quarter, using their defensive length to generate four Washington turnovers and convert them into easy transition scores.",
          runScore: "13-2",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "6:00",
          description: "Washington rallied with a 15-6 third-quarter stretch to cut the Cleveland lead to four, injecting genuine late-game tension into Rocket Arena.",
          runScore: "15-6",
          momentum: "away",
          keyPlayer: "Alexandre Sarr",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "9:10",
          description: "Cleveland's starting unit responded with a composure-defining 18-7 fourth-quarter run, closing the game out with defensive stops and Donovan Mitchell isolations that Washington had no answers for.",
          runScore: "18-7",
          momentum: "home",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Cleveland's 10-point win over Washington was more competitive than the margin suggests — the Wizards' third-quarter push revealed genuine fight in a young roster that entered the night 2-3. Mobley's defensive anchor and Mitchell's fourth-quarter authority proved to be the difference-making combination Cleveland's front office envisioned when they committed to this core. CLE moves to 3-1 and remains one of the East's quietly reliable teams.",
    },
    {
      gameId: "CHA-DET-20261028",
      teams: { home: "DET", away: "CHA" },
      finalScore: { home: 97, away: 89 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:40",
          description: "Detroit ground out a 12-3 run in the second quarter behind Cade Cunningham's relentless pick-and-roll pressure, establishing a lead the Pistons would hold for the game's remainder.",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "4:15",
          description: "Charlotte cut the deficit to five on back-to-back LaMelo Ball pull-up threes, momentarily threatening Detroit's grip on the game at Little Caesars Arena.",
          runScore: "8-3",
          momentum: "away",
          keyPlayer: "LaMelo Ball",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Detroit's gritty 8-point win over Charlotte was the embodiment of a young team developing organizational identity — the Pistons defended for 48 minutes at a level that kept Charlotte's efficient offense under 90 points. Cade Cunningham's control of pace and the Pistons' bench depth proved decisive in a game that was tighter than the final margin indicates. DET moves to 4-1 and they belong in the East's early-season conversation.",
    },
    {
      gameId: "PHI-IND-20261028",
      teams: { home: "IND", away: "PHI" },
      finalScore: { home: 109, away: 114 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:00",
          description: "Philadelphia seized control with an 11-2 second-quarter run anchored by consecutive Embiid post-up conversions, pushing their lead to 12 and silencing Gainbridge Fieldhouse.",
          runScore: "11-2",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "6:30",
          description: "Indiana mounted a 16-5 fourth-quarter charge to trim the deficit to one, riding Tyrese Haliburton's transition orchestration and three consecutive Pacers open looks from the corner.",
          runScore: "16-5",
          momentum: "home",
          keyPlayer: "Tyrese Haliburton",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:45",
          description: "Embiid answered Indiana's surge with back-to-back post scores and a critical blocked shot, restoring Philadelphia's lead to five and closing the door on the Pacers' comeback.",
          runScore: "6-2",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "Post seal for two-handed dunk through contact with 2:10 remaining, extending PHI lead to five after Indiana had cut it to one. The defining play of the fourth quarter.",
          timeRemaining: "2:10",
          winProbabilityShift: 28,
        },
        {
          player: "Joel Embiid",
          team: "PHI",
          description: "Blocked Haliburton floater attempt with 1:22 remaining, ending Indiana's final meaningful possession and securing Philadelphia's fifth-game road win.",
          timeRemaining: "1:22",
          winProbabilityShift: 19,
        },
        {
          player: "Tyrese Haliburton",
          team: "IND",
          description: "Pull-up three-pointer with the shot clock expiring cut the PHI lead to one with 3:40 remaining, triggering the Pacers' biggest run of the night.",
          timeRemaining: "3:40",
          winProbabilityShift: -22,
        },
      ],
      narrative: "Philadelphia's five-point survival in Indiana was the night's most contested result among winning teams — the Pacers' fourth-quarter charge exposed every vulnerability in the 76ers' depth chart and forced Embiid to deliver his two most critical plays of the young season. The story is Embiid's willingness to impose himself through a knee concern that would have sidelined lesser competitors. PHI moves to 4-1 and their ceiling conversation, when Embiid operates at this level, belongs in the East's top tier.",
    },
    {
      gameId: "ORL-TOR-20261028",
      teams: { home: "TOR", away: "ORL" },
      finalScore: { home: 129, away: 99 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "10:00",
          description: "Toronto opened the second quarter with a 19-6 explosion that effectively ended Orlando's competitive window, the Raptors' ball movement generating 14 assists on their first 16 second-quarter field goals.",
          runScore: "19-6",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:30",
          description: "Toronto extended their advantage further with a second consecutive dominant stretch, the Raptors' defensive pressure forcing 11 Orlando turnovers in the third quarter alone.",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Immanuel Quickley",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Toronto's 30-point demolition of Orlando at Scotiabank Arena was the night's second-most dominant margin and signals a Raptors team operating at a cohesion level their 3-1 record has understated. The Magic — showing the defensive identity that was their organizational calling card last season — were simply overwhelmed by Toronto's pace and ball movement. ORL falls to 1-3 and their offensive infrastructure questions have now accumulated across four games of evidence.",
    },
    {
      gameId: "NYK-CHI-20261028",
      teams: { home: "CHI", away: "NYK" },
      finalScore: { home: 127, away: 133 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "4:20",
          description: "Chicago erupted on a 17-5 third-quarter run to grab a 10-point lead, the United Center crowd reaching its loudest pitch of the evening as the Bulls' ball movement found consistent cracks in New York's defense.",
          runScore: "17-5",
          momentum: "home",
          keyPlayer: "Zach LaVine",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "8:10",
          description: "Chicago stretched the lead to seven early in the fourth, forcing New York to burn two timeouts in the first three minutes as Brunson hunted for any rhythm on the road.",
          runScore: "9-4",
          momentum: "home",
          keyPlayer: "Coby White",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:30",
          description: "Brunson ignited a 14-4 Knicks closing run with three consecutive pull-up makes — two mid-range jumpers and a step-back three — turning a seven-point deficit into a three-point lead in under four minutes.",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Step-back three-pointer over the outstretched hand of LaVine with 2:44 remaining gave the Knicks their first lead since the third quarter — 128-127 — on the road, on the second night of a back-to-back.",
          timeRemaining: "2:44",
          winProbabilityShift: 41,
        },
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Pick-and-roll isolation drive for a floater with 1:18 remaining extended the lead to three, the fourth clutch conversion of Brunson's closing sequence.",
          timeRemaining: "1:18",
          winProbabilityShift: 22,
        },
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Steal on Chicago's inbound play with 38 seconds remaining sealed the game, capping one of the most complete individual closing sequences of the young NBA season.",
          timeRemaining: "0:38",
          winProbabilityShift: 31,
        },
        {
          player: "Zach LaVine",
          team: "CHI",
          description: "Pull-up three extended Chicago's lead to seven with 5:02 remaining, appearing to lock up the Bulls' first home win of the season before Brunson's fourth-quarter disassembly.",
          timeRemaining: "5:02",
          winProbabilityShift: -24,
        },
      ],
      narrative: "This is the game the Momentum Engine was built to document. New York's 133-127 road survival in Chicago featured one of the early season's most jaw-dropping individual closing sequences — Brunson, on the second night of a back-to-back, down seven, on the road, authored 14 fourth-quarter points and a steal that turned a near-loss into the slate's defining win. The Bulls had every structural advantage in this game and the Knicks escaped solely because of one player's refusal to surrender the moment. NYK moves to 2-3 and Brunson's late-game profile, through five games, is already the East's most compelling individual narrative.",
    },
    {
      gameId: "HOU-MIL-20261028",
      teams: { home: "MIL", away: "HOU" },
      finalScore: { home: 100, away: 132 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:10",
          description: "Houston closed the first quarter on a 14-3 run that immediately established the game's dominant narrative — Sengun scoring over Giannis on three consecutive possessions while the Rockets' defense held Milwaukee to one field goal in the final four minutes.",
          runScore: "14-3",
          momentum: "away",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:00",
          description: "Houston's bench unit detonated a 22-6 third-quarter eruption that removed any remaining doubt, outscoring Milwaukee's reserves by 16 in a single quarter and extending the lead past 30.",
          runScore: "22-6",
          momentum: "away",
          keyPlayer: "Jalen Green",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Houston's 32-point demolition of Milwaukee is the night's most dominant performance and the statement that removes every small-sample asterisk from the Rockets' 5-0 start. Sengun was unguardable in the post from tip-off, and the Rockets' defensive system — which held Milwaukee to 39% from the field — is operating at a collective efficiency level that demands top-ten West recognition. The Bucks, now 1-4, have organizational questions that one Giannis performance cannot answer alone.",
    },
    {
      gameId: "GSW-MIN-20261028",
      teams: { home: "MIN", away: "GSW" },
      finalScore: { home: 114, away: 119 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:00",
          description: "Minnesota built a 14-point second-quarter lead on the strength of Anthony Edwards's relentless attacking and the Timberwolves' defensive disruption — Target Center appeared fully in control of the outcome.",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:45",
          description: "Curry's historic third quarter — 19 points on five-of-six three-point attempts — single-handedly erased Minnesota's lead and handed Golden State a five-point advantage, the defining swing of the night's second-best game.",
          runScore: "22-8",
          momentum: "away",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "4:00",
          description: "Edwards answered with a 10-2 personal run to cut Golden State's lead to two, setting up a frenetic final four minutes that the Warriors ultimately navigated by going through Curry in the pick-and-roll.",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Stephen Curry",
          team: "GSW",
          description: "Pull-up three from the left wing with 2:31 remaining extended GSW's lead to five after Edwards had cut it to one — Curry's seventh three-pointer of the game and the dagger shot in Target Center.",
          timeRemaining: "2:31",
          winProbabilityShift: 33,
        },
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Explosive first-step drive for and-one with 1:48 remaining cut the Golden State lead to two, forcing Warriors to burn their final timeout and giving Minnesota a final possession window.",
          timeRemaining: "1:48",
          winProbabilityShift: -18,
        },
      ],
      narrative: "Curry's third quarter at Target Center is the night's single most electrifying individual quarter — 19 points, five threes, and a complete game reversal that turned a 14-point Minnesota lead into a Golden State advantage inside eight minutes. Edwards's 34-point response kept the Timberwolves alive through the fourth but Curry's clutch pull-up three with 2:31 remaining was the decisive shot. GSW moves to 2-3 and their record has dramatically understated what this team is capable of when Curry is operating at this frequency.",
    },
    {
      gameId: "DEN-NO-20261028",
      teams: { home: "NO", away: "DEN" },
      finalScore: { home: 91, away: 104 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:30",
          description: "Denver constructed a 16-5 second-quarter run to build a 15-point cushion, Nikola Jokic distributing from the elbow and finding cutters in a sequence that showcased why the Nuggets' offense remains structurally elite.",
          runScore: "16-5",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:00",
          description: "New Orleans made a token fourth-quarter push, cutting the deficit to 10 on a Zion Williamson post sequence, but Denver's veterans methodically re-extended the lead by playing through Jokic.",
          runScore: "8-4",
          momentum: "home",
          keyPlayer: "Zion Williamson",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Denver's 13-point win in New Orleans was a straightforward professional performance from a Nuggets team that has found their early-season footing after a 2-2 start. Jokic's orchestration in the second quarter was the game's decisive sequence, and the Pelicans — now 0-4 — have produced four consecutive games of evidence that their organizational reconstruction is in an earlier stage than preseason projections suggested. DEN moves to 2-2 and Jokic's efficiency numbers are the West's most underreported statistical line.",
    },
    {
      gameId: "SA-UTAH-20261028",
      teams: { home: "UTAH", away: "SA" },
      finalScore: { home: 111, away: 117 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "2:15",
          description: "Utah mounted a 14-2 third-quarter run to seize a six-point lead, the Delta Center crowd responding to a sequence of Walker Kessler rim protection plays and John Collins mid-range makes that gave the Jazz momentum heading to the fourth.",
          runScore: "14-2",
          momentum: "home",
          keyPlayer: "Walker Kessler",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:00",
          description: "San Antonio answered with a 13-4 run to reclaim control, Victor Wembanyama's shot-blocking and face-up jumper combination neutralizing Utah's interior advantage and swinging the momentum decisively.",
          runScore: "13-4",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "OT",
          timestamp: "2:30",
          description: "In overtime, Wembanyama delivered a four-point possession — a made three followed by a defensive rebound on Utah's missed corner attempt and an immediate push-pass to a cutter — that gave San Antonio a six-point lead they would not relinquish.",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Victor Wembanyama",
          team: "SA",
          description: "Contested corner three over Kessler's contest with 1:08 remaining in regulation tied the game at 111 and forced overtime, the signature individual play of the night's most dramatic non-NYK/CHI game.",
          timeRemaining: "1:08",
          winProbabilityShift: 36,
        },
        {
          player: "Victor Wembanyama",
          team: "SA",
          description: "Blocked Lauri Markkanen mid-range attempt with 3:15 remaining in OT ended Utah's final meaningful scoring sequence and handed San Antonio possession up four.",
          timeRemaining: "3:15 OT",
          winProbabilityShift: 27,
        },
        {
          player: "Lauri Markkanen",
          team: "UTAH",
          description: "Pull-up jumper with 45 seconds remaining in regulation tied the game at 109, sending Delta Center into a frenzy and forcing overtime after Utah trailed by four with 90 seconds left.",
          timeRemaining: "0:45",
          winProbabilityShift: -29,
        },
      ],
      narrative: "Utah and San Antonio delivered the night's most dramatically complete game — a back-and-forth war that required overtime to resolve and featured Wembanyama's corner three with 68 seconds remaining in regulation as the single most important non-Brunson shot of the slate. The Jazz fought through every structural disadvantage and forced overtime on Markkanen's pull-up with 45 seconds left, only for Wembanyama's overtime explosion to end their night. SA moves to 3-2 and Wembanyama's clutch-time profile is developing into one of the league's most compelling individual narratives.",
    },
    {
      gameId: "OKC-DAL-20261028",
      teams: { home: "DAL", away: "OKC" },
      finalScore: { home: 120, away: 96 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "9:00",
          description: "Dallas opened the second quarter with a 15-3 run orchestrated entirely through Doncic pick-and-roll manipulation — OKC's defense, built for this exact scenario, had no structural answer for Luka's pace variation and pocket passing.",
          runScore: "15-3",
          momentum: "home",
          keyPlayer: "Luka Doncic",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:10",
          description: "Oklahoma City attempted a 10-2 mid-game response to trim the deficit to single digits, briefly testing whether Shai Gilgeous-Alexander could engineer the Thunder's version of a road comeback.",
          runScore: "10-2",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "10:00",
          description: "Doncic's 10-point fourth-quarter opening burst — two pull-up threes and a drive-and-draw sequence — ended Oklahoma City's competitive window and stamped the final margin with authority.",
          runScore: "14-4",
          momentum: "home",
          keyPlayer: "Luka Doncic",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Dallas's 24-point statement win over Oklahoma City is the night's most narratively significant result outside of Houston — the Mavericks, with Doncic listed as probable with knee soreness, ended OKC's perfect start with a performance that answered every ceiling question raised by Dallas's early-season inconsistency. Doncic's pick-and-roll manipulation was the game's central tactical story: the Thunder's defensive system, built to limit exactly this, had no adjustment that worked. DAL moves to 3-2 and their conversation as a Western Conference contender demands revision after this performance.",
    },
    {
      gameId: "LAL-LAC-20261028",
      teams: { home: "LAC", away: "LAL" },
      finalScore: { home: 87, away: 103 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:00",
          description: "Los Angeles Lakers established their defensive tone with a 12-3 first-quarter closing run — LeBron's two steals converting directly into transition scores and setting a pace the Clippers never recovered from.",
          runScore: "12-3",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "5:30",
          description: "The Lakers extended their advantage through the second quarter with methodical half-court execution, holding the Clippers to 21 second-quarter points while LeBron orchestrated 10 assists in the first half alone.",
          runScore: "18-9",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "The Los Angeles rivalry opener at Intuit Dome belonged entirely to the Lakers, who imposed a defensive identity on the Clippers that was both impressive and revealing. LeBron's near-triple-double was the offensive floor but the Lakers' team defense — holding the Clippers to 87 points and 38% shooting in their own building — is the structural story that the West needs to register. The Clippers are 1-3 and four games of evidence now demands an honest organizational assessment of where this roster's ceiling actually sits. LAL moves to 4-1.",
    },
  ],
};