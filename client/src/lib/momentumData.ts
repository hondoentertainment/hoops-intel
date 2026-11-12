// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 12, 2026
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
  generatedDate: "2026-11-12",
  date: "November 12, 2026",
  gameOfTheNight: "OKC-POR-20261111",
  topClutchPerformer: {
    player: "Donovan Mitchell",
    team: "CLE",
    clutchRating: 94,
    description: "Mitchell's sustained fourth-quarter creation at MSG — four threes, six clutch possessions won — was the night's most individually decisive closing performance against a legitimately hostile defensive environment.",
  },
  games: [
    {
      gameId: "BKN-NOP-20261111",
      teams: { home: "NOP", away: "BKN" },
      finalScore: { home: 111, away: 145 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Cam Thomas hit back-to-back threes off the dribble to open a 14-4 Brooklyn run, signaling immediately that the Pelicans' perimeter coverage had no structural answer for his pull-up creation.",
          runScore: "14-4 BKN",
          momentum: "away",
          keyPlayer: "Cam Thomas",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "7:11",
          description: "Brooklyn's ball movement generated seven consecutive assisted baskets as New Orleans' halfcourt scheme collapsed — the Nets pushed their lead to 24 and the rout was effectively sealed before halftime.",
          runScore: "18-6 BKN",
          momentum: "away",
          keyPlayer: "Cam Thomas",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:45",
          description: "New Orleans mounted a brief 10-2 run on pride possessions to briefly trim the deficit to 19, but Thomas answered with consecutive mid-range jumpers to end any residual drama.",
          runScore: "10-2 NOP",
          momentum: "home",
          keyPlayer: "Trey Murphy III",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Brooklyn's 34-point road demolition of New Orleans was the NBA's most statistically extreme result of November, and Cam Thomas's six-three eruption was its defining engine. The Pelicans, without Zion's frontcourt authority, had no mechanism to slow Brooklyn's pace or Thomas's shot creation — this was a thoroughbred running against no competition. The final margin rewrites Brooklyn's road identity entirely.",
    },
    {
      gameId: "LAL-MIL-20261111",
      teams: { home: "MIL", away: "LAL" },
      finalScore: { home: 112, away: 123 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:33",
          description: "LeBron James orchestrated an 11-2 Lakers run with four assists and a mid-range jumper, pushing Los Angeles to a double-digit lead and exposing Milwaukee's rotational fatigue without a healthy Lillard.",
          runScore: "11-2 LAL",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "2:18",
          description: "Milwaukee's competitive third-quarter burst — nine straight points on three consecutive Khris Middleton baskets — briefly trimmed the deficit to seven and gave Fiserv Forum a rare reason to believe.",
          runScore: "9-2 MIL",
          momentum: "home",
          keyPlayer: "Khris Middleton",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "8:50",
          description: "LeBron immediately erased Milwaukee's momentum swing with a pull-up three and two consecutive assists, restoring the double-digit lead and closing out any competitive window the Bucks had opened.",
          runScore: "10-3 LAL",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "LeBron's 32-10-8 road performance against the NBA's most structurally compromised team was an exercise in controlled dominance — the Lakers led by double digits for most of the second half and never showed the slightest organizational anxiety. Milwaukee's third-quarter burst was the one moment of competitive texture, and LeBron ended it immediately. At 11-2, Los Angeles is operating at a cadence that separates them from every other team in the West.",
    },
    {
      gameId: "CLE-NYK-20261111",
      teams: { home: "NYK", away: "CLE" },
      finalScore: { home: 107, away: 115 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "3:14",
          description: "New York's halfcourt defense forced six consecutive Cleveland misses and capitalized with a 13-4 run to seize a seven-point halftime lead, temporarily making MSG's energy the game's most decisive variable.",
          runScore: "13-4 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:48",
          description: "Donovan Mitchell took over with four consecutive personal possessions — a pull-up three, a drive-and-finish, and two mid-range makes — turning a four-point deficit into a three-point Cleveland lead in under two minutes.",
          runScore: "12-4 CLE",
          momentum: "away",
          keyPlayer: "Donovan Mitchell",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Step-back three over Mikal Bridges with the shot clock expiring gave Cleveland a six-point lead and effectively ended New York's final viable comeback window.",
          timeRemaining: "2:31",
          winProbabilityShift: 34,
        },
        {
          player: "Jalen Brunson",
          team: "NYK",
          description: "Brunson converted a tough and-one drive to trim the deficit to three, forcing Cleveland to make free throws down the stretch and briefly reigniting MSG.",
          timeRemaining: "1:12",
          winProbabilityShift: -18,
        },
        {
          player: "Donovan Mitchell",
          team: "CLE",
          description: "Mitchell knocked down both free throws after Brunson's basket to push the lead back to five and seal Cleveland's most credibility-defining road result of the season.",
          timeRemaining: "0:54",
          winProbabilityShift: 22,
        },
      ],
      narrative: "Mitchell's fourth-quarter authority at MSG was the East's most individually decisive road performance of the night — New York had controlled the game's physical tone for three quarters, and Mitchell dismantled that control in under three minutes of personal creation. Cleveland's road win over a Knicks team that had won three straight is a genuine seeding statement. NYK's home-court mystique absorbed its most consequential credibility damage of the season.",
    },
    {
      gameId: "BOS-TOR-20261111",
      teams: { home: "TOR", away: "BOS" },
      finalScore: { home: 93, away: 98 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "4:02",
          description: "Toronto's grinding halfcourt attack erased a nine-point Boston lead with a 15-6 run, turning Scotiabank Arena electric and briefly threatening the Celtics' six-game winning streak on the second night of a back-to-back.",
          runScore: "15-6 TOR",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:30",
          description: "Jayson Tatum's efficient fourth-quarter execution — two post-up scores and a critical defensive stop — reestablished Boston's composure and gave the Celtics a lead they would not relinquish despite Toronto's late pressure.",
          runScore: "10-4 BOS",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Jayson Tatum",
          team: "BOS",
          description: "Tatum hit a contested mid-range jumper over Barnes with the shot clock winding down to push Boston's lead to five in a grinding fourth quarter that neither team could fully control.",
          timeRemaining: "1:44",
          winProbabilityShift: 28,
        },
        {
          player: "Scottie Barnes",
          team: "TOR",
          description: "Barnes drove baseline for a tough layup to trim the deficit to three, forcing Boston to execute in the final ninety seconds on the second night of a back-to-back.",
          timeRemaining: "0:58",
          winProbabilityShift: -15,
        },
      ],
      narrative: "Boston's ability to close a grinding, low-scoring environment on a back-to-back road trip is the structural variable that most clearly separates the Celtics from the East's field — this was not a dominant performance, but it was a winning one, and that distinction matters enormously at this stage of the season. Toronto's third-quarter run was legitimate, and Barnes gave them every opportunity to steal this. The Celtics' six-game win streak is now defined as much by resilience as by talent.",
    },
    {
      gameId: "SAS-CHI-20261111",
      teams: { home: "CHI", away: "SAS" },
      finalScore: { home: 119, away: 124 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "1:15",
          description: "Chicago closed the first half on a 14-6 run to build a six-point halftime lead, exposing a momentary San Antonio defensive lapse that made the Spurs' unbeaten road record feel genuinely threatened for the first time.",
          runScore: "14-6 CHI",
          momentum: "home",
          keyPlayer: "Zach LaVine",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:22",
          description: "Stephon Castle's second-half recalibration began with consecutive isolation buckets and a steal-to-layup sequence that erased Chicago's lead entirely and shifted the game's emotional weight to the Spurs.",
          runScore: "14-5 SAS",
          momentum: "away",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:44",
          description: "Castle's pace manipulation in the fourth quarter — alternating between downhill drives and pull-up mid-rangers — generated eight consecutive San Antonio points as Chicago's defense lost its structural integrity.",
          runScore: "10-3 SAS",
          momentum: "away",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Stephon Castle",
          team: "SAS",
          description: "Castle split the Bulls' hedge on a pick-and-roll and finished through contact with his left hand to push the Spurs' lead to seven — the definitive possession of the comeback.",
          timeRemaining: "1:33",
          winProbabilityShift: 31,
        },
      ],
      narrative: "Castle's 22 second-half points were the ROY race's most compelling single-game statement since Henderson's Thursday eruption — the Spurs trailed by six at halftime and Castle personally dismantled Chicago's defensive scheme with a pace manipulation that the Bulls had no structural counter for. San Antonio's perfect road record is now 10-2's most remarkable organizational footnote. The Spurs have matched the West's summit.",
    },
    {
      gameId: "DEN-MEM-20261111",
      teams: { home: "MEM", away: "DEN" },
      finalScore: { home: 118, away: 123 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:08",
          description: "Ja Morant's transition explosion fueled a 16-5 Memphis run that gave the Grizzlies a ten-point second-quarter lead and silenced FedExForum's anxiety about Jokic's early efficiency.",
          runScore: "16-5 MEM",
          momentum: "home",
          keyPlayer: "Ja Morant",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:19",
          description: "Jokic controlled the fourth quarter's first four possessions with two scores, two assists, and a critical defensive rebound — the Nuggets' lead changed hands three times before Denver seized it for good on a Jokic turnaround.",
          runScore: "12-5 DEN",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Nikola Jokic",
          team: "DEN",
          description: "Jokic hit a turnaround jumper over two Memphis defenders to put Denver up four with under three minutes remaining — his thirteenth point in the fourth quarter alone.",
          timeRemaining: "2:48",
          winProbabilityShift: 29,
        },
        {
          player: "Ja Morant",
          team: "MEM",
          description: "Morant drove the lane for a circus layup to trim the deficit to two, momentarily threatening Denver's composure in a hostile FedExForum environment.",
          timeRemaining: "1:21",
          winProbabilityShift: -16,
        },
      ],
      narrative: "Jokic's triple-double was the night's most individually complete statistical performance, but the narrative texture of this game was provided by its fourth quarter — Denver's coaching staff made the defensive adjustments that neutralized Morant's late-game creation precisely when Memphis needed it most. This is what an offensive system looks like when its orchestrator is irreplaceable. DEN at 7-4 has the West's most sustainable architecture.",
    },
    {
      gameId: "GSW-HOU-20261111",
      teams: { home: "HOU", away: "GSW" },
      finalScore: { home: 115, away: 108 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "3:55",
          description: "Alperen Sengun dominated the second quarter's physical exchanges — four offensive rebounds, two put-back scores, and a mid-post finish — pushing Houston to a 14-point second-half lead and establishing the game's decisive physical tone.",
          runScore: "14-4 HOU",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "2:12",
          description: "Golden State's switching scheme generated three consecutive Steph Curry pull-up threes in a 15-6 Warriors run that temporarily made the game competitive and forced Houston's timeout at the three-minute mark.",
          runScore: "15-6 GSW",
          momentum: "away",
          keyPlayer: "Stephen Curry",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:40",
          description: "Sengun's block on Curry's drive-to-floater attempt sparked a Houston transition sequence that produced five straight points — the Rockets rebuilt their double-digit cushion and never again faced a Warriors run of consequence.",
          runScore: "9-3 HOU",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Sengun's 28-15-6 with three blocks was the frontcourt performance that controlled every dimension of this game's physical calculus — Golden State's switching scheme had no structural answer for his combination of post scoring, offensive rebounding, and rim protection. Houston's 14-point second-half lead was never truly threatened despite the Warriors' third-quarter burst. The Rockets at 9-3 are the West's most underrated contender.",
    },
    {
      gameId: "OKC-POR-20261111",
      teams: { home: "POR", away: "OKC" },
      finalScore: { home: 118, away: 108 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "2:30",
          description: "Portland's home crowd ignited on a Scoot Henderson steal-and-slam that capped a 12-3 Trail Blazers opening run — Moda Center's atmosphere immediately registered as the loudest environment on the entire Wednesday slate.",
          runScore: "12-3 POR",
          momentum: "home",
          keyPlayer: "Scoot Henderson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:10",
          description: "Oklahoma City's road identity reasserted itself with a 13-4 run — Shai Gilgeous-Alexander scored seven consecutive Thunder points to trim the deficit to four and silence the Moda Center for the first time all night.",
          runScore: "13-4 OKC",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:55",
          description: "Henderson's twelve fourth-quarter points systematically dismantled every Thunder momentum run before it could develop — his closing sequence was the most authoritative individual performance on a night of consequential guard play.",
          runScore: "14-5 POR",
          momentum: "home",
          keyPlayer: "Scoot Henderson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Scoot Henderson",
          team: "POR",
          description: "Henderson split Oklahoma City's ball-screen coverage and finished with his right hand in traffic to push Portland's lead to eight — the definitive possession of the Trail Blazers' back-to-back sweep.",
          timeRemaining: "3:12",
          winProbabilityShift: 36,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "SGA hit a step-back mid-range to trim the deficit to six with the Thunder desperate to avoid an 0-2 back-to-back sweep, but Portland immediately answered to end the drama.",
          timeRemaining: "2:05",
          winProbabilityShift: -19,
        },
      ],
      narrative: "Portland's back-to-back sweep of Oklahoma City is the West's most stunning back-to-back story of November — Henderson's Tuesday masterclass was confirmed as no anomaly, and his twelve fourth-quarter points on Wednesday settled every Thunder momentum run before it could breathe. Moda Center is now the West's most electrically charged home environment. OKC at 8-5 faces a genuine road identity crisis; POR at 9-3 is the West's most compelling emerging contender narrative.",
    },
    {
      gameId: "WSH-IND-20261111",
      teams: { home: "IND", away: "WSH" },
      finalScore: { home: 114, away: 101 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:44",
          description: "Indiana's transition offense generated a 16-7 second-quarter surge that turned a two-point game into an eleven-point Indiana advantage — Gainbridge Fieldhouse absorbed a slate-long narrative as a team beginning to find structural identity.",
          runScore: "16-7 IND",
          momentum: "home",
          keyPlayer: "Tyrese Haliburton",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:20",
          description: "Washington trimmed the deficit to seven on back-to-back threes but Indiana's defensive rotations tightened immediately, limiting the Wizards to two points over the final four minutes of the third quarter.",
          runScore: "10-3 WSH",
          momentum: "home",
          keyPlayer: "Jordan Poole",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Indiana's 13-point win over Washington was a structurally clean performance without dramatic texture — the Pacers built their lead in the second quarter and managed it with the composure of a team that knows exactly what it needs to do against inferior opposition. Both teams enter Wednesday at 4-8, but the win has meaningfully different value for Indiana's conference seeding trajectory. Washington's rebuild showed flashes but no sustained competitive thread.",
    },
    {
      gameId: "ORL-UTAH-20261111",
      teams: { home: "UTAH", away: "ORL" },
      finalScore: { home: 108, away: 123 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:11",
          description: "Orlando's defense forced five consecutive Utah turnovers and converted them into a 14-2 run — the Magic's transition attack against the Jazz's young perimeter rotations was immediately the game's defining structural advantage.",
          runScore: "14-2 ORL",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:00",
          description: "Utah's young core showed competitive fight with a 12-5 run to trim the deficit to nine — but Orlando's defensive structure reasserted itself over the final six minutes of the third quarter to push the lead back to seventeen.",
          runScore: "12-5 UTAH",
          momentum: "home",
          keyPlayer: "Keyonte George",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Orlando's 15-point road win at Delta Center was an efficient, controlled performance that confirmed the Magic's defensive identity against a Utah team that simply lacks the roster depth to sustain competitive pressure for forty minutes. At 4-7, Orlando is performing below their structural ceiling, but road wins against desperate opponents have genuine seeding value. Utah at 1-11 continues to operate in the NBA's most difficult developmental environment.",
    },
  ],
};