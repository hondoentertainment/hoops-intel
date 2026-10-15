// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 15, 2026
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
  generatedDate: "2026-10-15",
  date: "October 15, 2026",
  gameOfTheNight: "NOP-DAL-20261014",
  topClutchPerformer: {
    player: "Zion Williamson",
    team: "New Orleans Pelicans",
    clutchRating: 91,
    description:
      "Williamson was the decisive force in the fourth quarter at American Airlines Center, converting three consecutive paint possessions when Dallas trimmed the lead to two and the game hung entirely in the balance. His presence warped Dallas's entire defensive scheme and his closing sequence on national television was the night's single most impactful individual clutch contribution.",
  },
  games: [
    {
      gameId: "DET-MIN-20261014",
      teams: { home: "MIN", away: "DET" },
      finalScore: { home: 106, away: 128 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:31",
          description:
            "Detroit opened a 12-2 run to close the first quarter, attacking Minnesota's defensive rotations with relentless off-ball movement and back-cut layups. The Timberwolves' help-side coverage was disorganized from the opening possession and Detroit punished every breakdown.",
          runScore: "12-2 DET run",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:14",
          description:
            "Minnesota briefly responded with a 9-2 burst in the first half of the second quarter, Edwards attacking the rim in transition and converting twice at the rim before drawing a foul. The crowd at Target Center stirred as the lead shrank to single digits.",
          runScore: "9-2 MIN run",
          momentum: "home",
          keyPlayer: "Anthony Edwards",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "1:58",
          description:
            "Detroit answered with a devastating 16-5 closing run to end the half, erasing Minnesota's brief momentum entirely. Detroit's perimeter barrage — four three-pointers in seven minutes — exposed the structural defensive gaps the Timberwolves had been masking through the early window.",
          runScore: "16-5 DET run",
          momentum: "away",
          keyPlayer: "Jaden Ivey",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:22",
          description:
            "The Pistons continued to pour it on in the third, extending the lead to 22 on a Cunningham mid-range pull-up that silenced any remaining home-crowd belief. Minnesota's defensive identity was completely absent and the result was effectively sealed entering the fourth.",
          runScore: "11-4 DET run",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative:
        "Detroit arrived at Target Center and dismantled Minnesota's identity from the opening tip, exposing defensive-rotation failures that the Timberwolves had papered over in earlier preseason wins. The Pistons' perimeter volume was relentless — they did not need to outmuscle Minnesota, only outthink them, and they did so decisively and repeatedly. Edwards was contained, the crowd was silenced by halftime, and Detroit's 22-point road margin was never in serious jeopardy after the first period. For an established West contender entering the preseason's final days, MIN's performance at home against Detroit is the window's most alarming defensive regression. The Pistons, meanwhile, announced themselves as a genuine organizational riser on the night's biggest road stage.",
    },
    {
      gameId: "CHI-MIL-20261014",
      teams: { home: "MIL", away: "CHI" },
      finalScore: { home: 104, away: 125 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:03",
          description:
            "Chicago raced to a 14-4 start, exploiting Milwaukee's slow defensive rotations with push-pace transition baskets. The Bulls moved the ball with a precision that Fiserv Forum had not seen from a visiting team this preseason window.",
          runScore: "14-4 CHI run",
          momentum: "away",
          keyPlayer: "Zach LaVine",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "9:41",
          description:
            "Giannis imposed himself in the second quarter with back-to-back dunks and a pull-up mid-range, sparking a Milwaukee 10-2 run that trimmed the deficit to eight. For a brief stretch, Fiserv Forum believed a corrective Bucks night was within reach.",
          runScore: "10-2 MIL run",
          momentum: "home",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "2:47",
          description:
            "Chicago immediately extinguished Milwaukee's momentum with a clinical 13-4 response to close the half. The Bulls' ball movement generated five assists on six baskets during the run, and Milwaukee's defense had no answer for Chicago's pace and spacing.",
          runScore: "13-4 CHI run",
          momentum: "away",
          keyPlayer: "Coby White",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:11",
          description:
            "The Bulls completed the damage in the third quarter with an 18-7 period that stretched the lead to 21 and effectively ended the competitive portion of the evening. Milwaukee's defensive breakdowns became systemic and Chicago exploited every one.",
          runScore: "18-7 CHI run",
          momentum: "away",
          keyPlayer: "Zach LaVine",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative:
        "Milwaukee entered Wednesday night with a 1-2 record and a franchise-critical need for a corrective home statement — instead, the Bucks absorbed the night's most organizationally damaging result in front of their own crowd. Chicago moved with a pace and precision that Fiserv Forum simply could not match, and a brief Giannis-led second-quarter push was the only hint of genuine Milwaukee resistance across forty minutes. The Bulls' 21-point road margin exposes real systemic questions for a Bucks team that cannot afford further drift entering opening week. MIL at 1-3 is now the East's most urgent preseason alarm — above all other concerns in the conference. Chicago, by contrast, confirmed they are a coherent offensive system capable of winning emphatically on the road.",
    },
    {
      gameId: "NOP-DAL-20261014",
      teams: { home: "DAL", away: "NOP" },
      finalScore: { home: 97, away: 101 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:18",
          description:
            "Dallas opened with an 8-2 edge, Doncic orchestrating the pick-and-roll game that New Orleans had schemed to contain. Early execution from the Mavericks suggested this would be a comfortable home night on national television.",
          runScore: "8-2 DAL run",
          momentum: "home",
          keyPlayer: "Luka Doncic",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "6:55",
          description:
            "New Orleans flipped the script with a 14-4 second-quarter run, Williamson establishing paint dominance and the Pelicans' perimeter defenders locking down Dallas's secondary ball-handlers. The momentum shift was visible and immediate.",
          runScore: "14-4 NOP run",
          momentum: "away",
          keyPlayer: "Zion Williamson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "8:02",
          description:
            "Dallas recaptured control in the third quarter with Doncic engineering a 10-3 run off pick-and-roll switches and a pair of mid-range pull-ups that gave the home crowd renewed belief. The game's competitive center had fully arrived.",
          runScore: "10-3 DAL run",
          momentum: "home",
          keyPlayer: "Luka Doncic",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:44",
          description:
            "New Orleans seized the game's decisive momentum with a 12-4 fourth-quarter run, Williamson converting four straight paint possessions as Dallas's pick-and-roll coverages broke down at the most critical moment of the night.",
          runScore: "12-4 NOP run",
          momentum: "away",
          keyPlayer: "Zion Williamson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Zion Williamson",
          team: "New Orleans Pelicans",
          description:
            "Williamson caught a lob entry pass with 3:12 remaining and Dallas trailing by two, converting over the outstretched help defense and drawing the foul for a three-point play that gave NOP a five-point edge. The basket completely broke Dallas's closing momentum.",
          timeRemaining: "3:12",
          winProbabilityShift: 28,
        },
        {
          player: "Luka Doncic",
          team: "Dallas Mavericks",
          description:
            "Doncic answered with a step-back three from the left wing with 2:04 remaining, cutting the New Orleans lead to two and reigniting American Airlines Center with the night's loudest crowd moment.",
          timeRemaining: "2:04",
          winProbabilityShift: -14,
        },
        {
          player: "Brandon Ingram",
          team: "New Orleans Pelicans",
          description:
            "Ingram drained an elbow mid-range jumper over closeout with 1:11 remaining, restoring a four-point NOP lead after Dallas had pulled within two. The shot came off a perfectly executed action following a Pelicans timeout.",
          timeRemaining: "1:11",
          winProbabilityShift: 22,
        },
      ],
      narrative:
        "American Airlines Center on NBA TV delivered the night's most complete competitive drama — a four-quarter battle that produced three genuine momentum reversals and a fourth-quarter sequence that will define how both organizations are discussed entering opening week. New Orleans defended Dallas's pick-and-roll system with a sophistication that neutralized Doncic on the game's biggest possessions, and Williamson's fourth-quarter paint dominance was the deciding factor in a four-point game. The Pelicans' 3-1 preseason record is now the window's most underappreciated organizational positive, a coherent team exceeding its national narrative. For Dallas, the loss surfaces the second-star question with no clean answer — Doncic's individual excellence is unquestioned but the Mavericks' infrastructure around him remains the window's most pressing identity concern. This was the night's game, and New Orleans earned every possession of it.",
    },
    {
      gameId: "BRK-MIA-20261014",
      teams: { home: "MIA", away: "BRK" },
      finalScore: { home: 144, away: 128 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:51",
          description:
            "Miami opened with a 16-6 burst, Butler asserting defensive physicality while the Heat's offense found its rhythm through transition and early offense. Kaseya Center was locked in from the first possession.",
          runScore: "16-6 MIA run",
          momentum: "home",
          keyPlayer: "Jimmy Butler",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:33",
          description:
            "Brooklyn pushed back with a 15-5 second-quarter run, their developing offensive system generating quality looks off movement and the Nets trimming Miami's lead to single digits. The game opened up into a genuine offensive exchange.",
          runScore: "15-5 BRK run",
          momentum: "away",
          keyPlayer: "Cam Thomas",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "3:44",
          description:
            "Butler seized the competitive thread in the third quarter with nine consecutive personal points — two pull-up jumpers, a driving layup, and two free throws — igniting a 19-8 Miami run that restored a comfortable margin and removed any Brooklyn path back.",
          runScore: "19-8 MIA run",
          momentum: "home",
          keyPlayer: "Jimmy Butler",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "8:12",
          description:
            "The Heat closed in style, a 22-10 fourth-quarter outburst that inflated the final margin to sixteen. Miami's depth outscored Brooklyn's reserves and the final scoreline flattered neither the game's competitiveness nor Brooklyn's late defensive effort.",
          runScore: "22-10 MIA run",
          momentum: "home",
          keyPlayer: "Tyler Herro",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative:
        "Miami's 144-128 result reads as a comfortable home win but the game had a genuine competitive interior — Brooklyn's second-quarter push brought the Nets within nine and the crowd at Kaseya Center felt the tension. Butler's response was definitive, a nine-point personal run in the third quarter that closed every Brooklyn avenue and confirmed exactly what the desk had projected from him entering Wednesday night. The Heat's closing efficiency — 22 fourth-quarter points — speaks to a depth and conditioning advantage that Brooklyn's still-developing roster cannot yet match. Both teams sit identically at 3-1 but Miami's quality-of-win edge is substantial and the Heat's home-court identity is the East's second-strongest organizational narrative behind Boston. Brooklyn showed enough developmental upside to maintain genuine organizational optimism, but this was Miami's evening from the opening possession.",
    },
    {
      gameId: "PHX-SAS-20261014",
      teams: { home: "SAS", away: "PHX" },
      finalScore: { home: 123, away: 103 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:02",
          description:
            "San Antonio came out with unmistakable urgency, Wembanyama altering three Phoenix shots in the first six minutes and scoring seven points on the other end. Frost Bank Center responded to the defensive intensity with a volume the arena had not produced this preseason.",
          runScore: "11-3 SAS run",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "5:18",
          description:
            "Phoenix briefly stabilized with a 10-4 mid-second-quarter run, their guards finding driving lanes against San Antonio's drop coverage and the Suns trimming the deficit to five. The moment tested whether the Spurs' urgency was sustainable.",
          runScore: "10-4 PHX run",
          momentum: "away",
          keyPlayer: "Devin Booker",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "1:22",
          description:
            "Wembanyama answered the Phoenix push with authority — back-to-back blocked shots that triggered transition baskets at both ends, completing a 14-5 Spurs run to close the half. The crowd's energy became a genuine factor and San Antonio led by fourteen at the break.",
          runScore: "14-5 SAS run",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:55",
          description:
            "San Antonio finished the competitive portion of the game with a dominant third quarter, outscoring Phoenix 34-22 in the period as Wembanyama posted a complete two-way showcase. The lead reached 20 and Phoenix's defensive resolve dissolved entirely.",
          runScore: "34-22 SAS Q3",
          momentum: "home",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative:
        "San Antonio arrived at Frost Bank Center with one win in three games and a franchise-defining organizational need — and Wembanyama delivered the most complete individual two-way performance of the preseason window on the night it mattered most. His defensive presence warped Phoenix's offensive geometry from the opening possession and his scoring assertiveness gave the crowd a reason to believe in every quarter. The Spurs will not enter opening week winless, and that alone reshapes the organizational conversation entering Tuesday's regular-season tip-off. Phoenix's 1-3 record now mirrors San Antonio's and the Suns leave the preseason window with their own pressing questions about consistency and defensive identity. Wednesday night at Frost Bank Center belonged entirely to Wembanyama, and the performance will carry genuine narrative weight into the season's opening days.",
    },
    {
      gameId: "CHA-BOS-20261014",
      teams: { home: "BOS", away: "CHA" },
      finalScore: { home: 114, away: 93 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:44",
          description:
            "Boston established defensive control immediately, holding Charlotte scoreless for a three-minute stretch and converting two steals into transition baskets. TD Garden's energy reflected a home team that has not trailed at any point this preseason.",
          runScore: "12-2 BOS run",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "8:11",
          description:
            "Charlotte managed a brief 8-3 second-quarter push, leveraging Boston's substitution rotations and attacking the Celtics' second-unit coverages to trim the deficit to eight. The Hornets' upset pedigree from the Milwaukee blowout earlier in the window provided brief credibility.",
          runScore: "8-3 CHA run",
          momentum: "away",
          keyPlayer: "LaMelo Ball",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "6:30",
          description:
            "Boston closed all competitive possibilities with a 24-11 third quarter, the Celtics' defensive depth suffocating Charlotte's pick-and-roll initiators and the TD Garden crowd responding to every stop. The final margin was a reflection of the period's dominance.",
          runScore: "24-11 BOS Q3",
          momentum: "home",
          keyPlayer: "Jaylen Brown",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative:
        "Boston's 114-93 win over Charlotte was the night's most straightforward competitive result — a flawlessly executed home performance from the East's only unbeaten team that confirmed TD Garden as the conference's most reliable home environment through the entire preseason window. Charlotte arrived with genuine upset credibility after dismantling Milwaukee earlier in the window, but Boston's defensive depth removed every margin for a Hornets push. The Celtics' third quarter was the methodical signature of an organization that has internalized winning habits at every lineup configuration. At 3-0, Boston's preseason record is not only the East's best — it is the window's clearest signal of a team operating with championship-caliber consistency. The Hornets showed flashes but were never given the extended possessions their offense requires to generate genuine momentum.",
    },
    {
      gameId: "DEN-LAC-20261014",
      teams: { home: "LAC", away: "DEN" },
      finalScore: { home: 122, away: 110 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description:
            "Denver controlled the early tempo, Nikola Jokic orchestrating the Nuggets' deliberate half-court system and posting eight first-quarter points on efficient paint touches. The Nuggets' pace appeared to neutralize Intuit Dome's early energy.",
          runScore: "10-4 DEN run",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "6:48",
          description:
            "LA responded with an explosive 18-6 second-quarter run, their guards attacking Denver's drop coverage with pull-up threes and converting six of nine field-goal attempts. Intuit Dome's atmosphere intensified and the Clippers seized momentum emphatically.",
          runScore: "18-6 LAC run",
          momentum: "home",
          keyPlayer: "James Harden",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:15",
          description:
            "Denver re-engaged in the third quarter with Jokic and Jamal Murray combining for 16 points on a 14-8 Nuggets run, bringing the deficit within six and testing whether LA's offensive rhythm was sustainable across four periods.",
          runScore: "14-8 DEN run",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:02",
          description:
            "LA answered with the game's decisive sequence — a 16-6 Clippers run to open the fourth quarter that stretched the lead to 14 and removed Denver's remaining path. The Clippers' offensive execution in the period was the most complete sustained stretch of their preseason window.",
          runScore: "16-6 LAC run",
          momentum: "home",
          keyPlayer: "Kawhi Leonard",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative:
        "Intuit Dome delivered the late-window West statement the Clippers needed — a twelve-point win over a Denver team that had genuine answers in the third quarter before LA's fourth-quarter execution closed every remaining competitive avenue. The Clippers' 2-1 record is the West's most improved organizational story from the window's opening days, a team that has found its offensive rhythm across successive nights against credible opponents. Denver's second consecutive loss drops the Nuggets to 2-2 and complicates the organizational read for a team that entered the preseason as a presumptive West contender — Jokic's individual excellence was present but the Nuggets' structural defensive questions remain unresolved. Kawhi Leonard's fourth-quarter assertion was the signature individual moment of LA's evening, a sequence that confirmed his presence as a genuine closing asset entering the regular season. The West's preseason landscape now has a more complex hierarchy than the window's opening days suggested.",
    },
  ],
};