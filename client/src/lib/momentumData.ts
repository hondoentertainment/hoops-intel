// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 13, 2026
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
  generatedDate: "2026-10-13",
  date: "October 13, 2026",
  gameOfTheNight: "OKC-ATL-20261012",
  topClutchPerformer: {
    player: "Trae Young",
    team: "ATL",
    clutchRating: 91,
    description:
      "Young held the rope in the most compressed final two minutes of Monday's slate, converting a critical and-one and sealing possessions with his pull-up midrange as OKC mounted a furious last-possession threat. His composure under a national-level playoff-temperature moment for a preseason game was the desk's single most striking individual clutch sequence of the night.",
  },
  games: [
    {
      gameId: "MIN-NYK-20261012",
      teams: { home: "NYK", away: "MIN" },
      finalScore: { home: 104, away: 122 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description:
            "Edwards attacked the paint on three consecutive possessions to open a 9-2 Minnesota run, erasing an early Knicks lead and setting the defensive tone Minnesota carried the rest of the night.",
          runScore: "9-2 MIN",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:51",
          description:
            "Minnesota's defense held New York scoreless for a four-minute stretch, converting three straight transition baskets to push the lead to 17 and effectively remove MSG's crowd from the game before halftime.",
          runScore: "14-2 MIN",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:10",
          description:
            "New York strung together back-to-back threes to cut the deficit to 11 and gave MSG a momentary pulse — Minnesota's timeout halt stopped the run cold and the Wolves answered with an immediate 6-0 response.",
          runScore: "8-6 NYK",
          momentum: "home",
          keyPlayer: "Jalen Brunson",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "9:02",
          description:
            "Minnesota reopened the lead to 21 with a 10-2 fourth-quarter run, ending any remaining competitive tension and completing one of the most dominant road performances MSG has hosted in recent memory.",
          runScore: "10-2 MIN",
          momentum: "away",
          keyPlayer: "Rudy Gobert",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative:
        "This was not a game decided by a single swing — it was a methodical, organizational dismantling. Minnesota came into the Garden with a defensive blueprint and executed it across 48 minutes without a single meaningful lapse that New York could exploit. The 18-point final margin undersells the gap; for long stretches this looked like a 25-point game being managed. Edwards was the headliner, but Gobert's rim protection and the Wolves' collective buy-in were the structural story. New York's 0-3 hole is now the East's most urgent opening-week alarm.",
    },
    {
      gameId: "BRK-WAS-20261012",
      teams: { home: "WAS", away: "BRK" },
      finalScore: { home: 122, away: 131 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:30",
          description:
            "Washington opened on a 12-4 run at home, imposing an up-tempo pace that Brooklyn hadn't faced through their first two preseason wins and giving Capital One Arena an early genuine energy.",
          runScore: "12-4 WAS",
          momentum: "home",
          keyPlayer: "Alexandre Sarr",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "3:15",
          description:
            "Brooklyn responded with a disciplined 16-6 second-quarter run, converting Washington turnovers into fast-break points with ruthless consistency and flipping a 6-point deficit into a 10-point advantage at intermission.",
          runScore: "16-6 BRK",
          momentum: "away",
          keyPlayer: "Cam Thomas",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "8:44",
          description:
            "Washington clawed back to within 4 on back-to-back Sarr buckets, briefly threatening to reclaim the organizational momentum the Nets had stolen — Brooklyn's veterans steadied the ship immediately.",
          runScore: "9-4 WAS",
          momentum: "home",
          keyPlayer: "Alexandre Sarr",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "6:20",
          description:
            "Brooklyn delivered the knockout blow with a 12-3 fourth-quarter burst that pushed the lead to 17, removing all remaining doubt and cementing the 3-0 record as a genuine organizational statement.",
          runScore: "12-3 BRK",
          momentum: "away",
          keyPlayer: "Cam Thomas",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative:
        "Brooklyn's 3-0 record demanded a stress test, and Washington — playing at home with a crowd and a 2-1 record of their own — was the most legitimate obstacle the Nets had faced. The Nets passed. Their second-quarter takeover was the signature sequence: composed, efficient, and executed with a veteran competence that preseason narratives don't usually generate. Washington's rebuilding arc is still a positive story, but losing at home when an unbeaten opponent needed stopping is a meaningful data point for the Wizards' ceiling conversations.",
    },
    {
      gameId: "OKC-ATL-20261012",
      teams: { home: "ATL", away: "OKC" },
      finalScore: { home: 113, away: 110 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:00",
          description:
            "Atlanta opened the game with a crisp 11-3 run fueled by Young's pick-and-roll mastery, establishing early control and forcing OKC into multiple shot-clock violations against a Hawks defense operating with unusual aggression.",
          runScore: "11-3 ATL",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "4:30",
          description:
            "SGA responded with back-to-back isolation scores and a pull-up three to ignite a 13-5 OKC run that briefly gave the Thunder their first lead and reminded the building that 0-3 doesn't mean out.",
          runScore: "13-5 OKC",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "2:10",
          description:
            "Atlanta re-established a double-digit lead with a 10-2 third-quarter surge, pushing to 14 with eight minutes to play and appearing to close the competitive window on OKC entirely.",
          runScore: "10-2 ATL",
          momentum: "home",
          keyPlayer: "Jalen Johnson",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "4:50",
          description:
            "Oklahoma City launched a stunning 15-4 final-quarter run anchored by SGA, erasing Atlanta's cushion and pulling within 2 with 90 seconds remaining — State Farm Arena went completely silent.",
          runScore: "15-4 OKC",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "0:48",
          description:
            "Trae Young converted an and-one on a driving layup through contact with 48 seconds left, restoring a 5-point Atlanta lead and functionally ending OKC's comeback bid after three clutch defensive stops.",
          runScore: "6-1 ATL",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Trae Young",
          team: "ATL",
          description:
            "Drove left baseline through two OKC defenders, drew the foul, converted the layup and the free throw for a 3-point and-one swing that restored a 5-point Atlanta lead with 48 seconds left.",
          timeRemaining: "0:48",
          winProbabilityShift: 34,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description:
            "Pull-up mid-range jumper over a closing defender cut Atlanta's lead to 2 with 1:22 remaining and gave OKC a genuine one-possession chance to complete the comeback.",
          timeRemaining: "1:22",
          winProbabilityShift: -21,
        },
        {
          player: "Jalen Johnson",
          team: "ATL",
          description:
            "Contested defensive rebound over Chet Holmgren with 38 seconds left killed OKC's final meaningful possession and sealed Atlanta's ability to run out the clock.",
          timeRemaining: "0:38",
          winProbabilityShift: 18,
        },
      ],
      narrative:
        "This was Monday's most complete competitive drama, a game that lived three distinct lives in 48 minutes. Atlanta built it, OKC dismantled it, and then Trae Young personally refused to let the Hawks become the third 0-3 team of the night. The Thunder's fourth-quarter run was the most impressive sequence of basketball any 0-3 team produced across the entire preseason window — SGA was elite, Chet was a problem, and OKC looked nothing like their record for 14 straight possessions. That it wasn't enough is the most Atlanta ending imaginable, and the desk will be watching this rivalry with considerable urgency once the regular season opens.",
    },
    {
      gameId: "SAS-UTA-20261012",
      teams: { home: "UTA", away: "SAS" },
      finalScore: { home: 119, away: 109 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:15",
          description:
            "Wembanyama scored 7 of San Antonio's first 9 points to give the Spurs an early edge, flashing the full offensive toolkit — mid-range pull-up, rim finish, and a skip pass on the weak side — that frames SAS's offensive ceiling.",
          runScore: "9-5 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "6:40",
          description:
            "Utah's crowd ignited behind a 14-4 Delta Center run that inverted the game entirely, with four different Jazz players scoring and San Antonio's defense unable to identify the read-and-react actions Utah ran repeatedly.",
          runScore: "14-4 UTA",
          momentum: "home",
          keyPlayer: "Keyonte George",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:55",
          description:
            "Wembanyama went on a personal 8-0 run in the third — three straight possessions, two pull-ups and a rim-level rejection on the other end — to cut the Utah lead to 6 and momentarily electrify what had been a sleepy San Antonio bench.",
          runScore: "8-2 SAS",
          momentum: "away",
          keyPlayer: "Victor Wembanyama",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:30",
          description:
            "Utah answered the Wemby surge with a 10-3 fourth-quarter opening burst that pushed the lead back to 13 and effectively closed the competitive window, Delta Center settling into a comfortable home-win rhythm.",
          runScore: "10-3 UTA",
          momentum: "home",
          keyPlayer: "Keyonte George",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative:
        "The Wembanyama story is the correct organizational alarm here, but the Utah story deserves its own sentence first — the Jazz are 2-1, playing with a genuine home-floor identity, and the Delta Center crowd was a structural force San Antonio simply couldn't neutralize. Wembanyama's personal scoring runs were brilliant and fleeting, which is the precise editorial summary of SAS's 0-3 preseason: individually elite, collectively insufficient. For a franchise carrying Finals-level expectations into this season, three consecutive losses across three different opponents is not sample-size noise — it is a systemic diagnostic. The desk will be watching San Antonio's regular-season opener with uncommon scrutiny.",
    },
    {
      gameId: "LON-POR-20261012",
      teams: { home: "POR", away: "LON" },
      finalScore: { home: 119, away: 66 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:00",
          description:
            "Portland scored the game's first 12 points before London's offense found any rhythm, establishing a tone of total physical and organizational superiority from the opening possession.",
          runScore: "12-0 POR",
          momentum: "home",
          keyPlayer: "Scoot Henderson",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "5:30",
          description:
            "A 22-6 second-quarter Portland run pushed the lead to 38 at halftime, with the Blazers rotating freely, experimenting with lineup combinations, and giving the Moda Center crowd a purely celebratory environment.",
          runScore: "22-6 POR",
          momentum: "home",
          keyPlayer: "Scoot Henderson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:00",
          description:
            "Portland's reserves maintained a 40-plus-point lead through the third quarter, with multiple developmental rotation players logging meaningful minutes against a London side that had no structural answer for NBA athleticism.",
          runScore: "18-10 POR",
          momentum: "home",
          keyPlayer: "Portland Trail Blazers",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative:
        "This was an exhibition in the most literal organizational sense — a 53-point Portland victory over the London Lions that served primarily as a development showcase and community event. The final margin renders swing-analysis largely academic; the Blazers led by as many as 55 and coach logged rotations freely from the second quarter onward. Portland moves to 2-0 with the positive organizational footnote intact, though the desk will apply an appropriate calibration discount when projecting the Blazers from this result. The London Lions competed with energy and the Moda Center crowd gave them a genuine NBA atmosphere to absorb.",
    },
  ],
};