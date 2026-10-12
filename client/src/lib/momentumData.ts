// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 12, 2026
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
  generatedDate: "2026-10-12",
  date: "October 12, 2026",

  gameOfTheNight: "CHI-DEN-20261011",

  topClutchPerformer: {
    player: "Nikola Jokic",
    team: "Denver Nuggets",
    clutchRating: 91,
    description:
      "With Chicago trimming a double-digit Denver lead to five in the fourth quarter, Jokic became the game's only immovable object — posting back-to-back interior scores and a decisive steal to salt away a survival win at Ball Arena. His read of the Bulls' desperation sets and ability to impose his body without fouling was the structural difference between a comfortable win and a potential collapse.",
  },

  games: [
    // ─── DAL @ HOU ───────────────────────────────────────────────────────────
    {
      gameId: "DAL-HOU-20261011",
      teams: { home: "HOU", away: "DAL" },
      finalScore: { home: 115, away: 132 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description:
            "Dallas opens the game with a disciplined 11-2 run, pushing ball movement off early Houston ball-screen coverage mistakes. The Mavericks exploit HOU's second-unit rotations before the home crowd can settle in.",
          runScore: "DAL 18-9",
          momentum: "away",
          keyPlayer: "Kyrie Irving",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "7:14",
          description:
            "Houston strings together a 9-0 answer to close within two, fueled by transition buckets and a pair of Houston bench hustle plays. Venetian Arena stirs — the game briefly feels live.",
          runScore: "HOU 31-33",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "1:03",
          description:
            "Dallas responds immediately with a 12-3 closing burst to end the half, executing its half-court offense with unusual precision for a preseason setting. The Mavericks head to the locker room with full command of the game's emotional arc.",
          runScore: "DAL 62-49",
          momentum: "away",
          keyPlayer: "Luka Doncic",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:48",
          description:
            "Houston briefly retaliates with a 7-2 mini-run on the back of two consecutive Sengun post scores, but Dallas's defensive structure tightens before it becomes a trend. The run lasts ninety seconds and never threatens the lead.",
          runScore: "HOU 82-94",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "8:30",
          description:
            "Dallas pushes its lead to a game-high 21 points on back-to-back transition layups, officially closing any remaining drama. The Mavericks' depth absorbs the fourth quarter entirely, rotating their starters out with full control.",
          runScore: "DAL 120-99",
          momentum: "away",
          keyPlayer: "PJ Washington",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative:
        "Dallas never relinquished the wheel. The Mavericks arrived at Venetian Arena with a system and imposed it quarter by quarter, only briefly interrupted by a Houston second-unit flicker in the second quarter that Dallas smothered before it could become a storyline. The 17-point final margin understates how controlled this felt — HOU's offense found no consistent answers against Dallas's switching and the Rockets' bench production dried up after that second-quarter run. For the Mavericks, this is exactly the kind of road performance that earns organizational credibility in a preseason window.",
    },

    // ─── CHI @ DEN ───────────────────────────────────────────────────────────
    {
      gameId: "CHI-DEN-20261011",
      teams: { home: "DEN", away: "CHI" },
      finalScore: { home: 133, away: 128 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:10",
          description:
            "Denver opens in vintage Jokic-orchestrated rhythm, posting a 13-4 run as Chicago's perimeter defenders struggle to locate the Nuggets' movement shooters off his passing reads. Ball Arena is engaged early.",
          runScore: "DEN 24-11",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "9:01",
          description:
            "Chicago's bench unit — written off before tip — produces an unexpected 14-5 run to pull within striking distance. Aggressive ball pressure forces three Denver turnovers in four possessions and the visitors suddenly have life.",
          runScore: "CHI 46-51",
          momentum: "away",
          keyPlayer: "Coby White",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:22",
          description:
            "Denver's starters reassert dominance with a 16-6 third-quarter surge, rebuilding the cushion Chicago had threatened. Jokic posts six points and two assists during the stretch as the Nuggets re-establish interior control.",
          runScore: "DEN 102-88",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "5:47",
          description:
            "Chicago launches its most dangerous run of the night — 15-5 over five minutes — trimming a 14-point lead to five and forcing Denver's coaching staff to burn timeouts. The Bulls' pace and pressure visibly rattles Denver's bench unit.",
          runScore: "CHI 123-128",
          momentum: "away",
          keyPlayer: "Zach LaVine",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:12",
          description:
            "Jokic re-enters with 90 seconds left and immediately converts a deep post score and a defensive steal to extinguish Chicago's final push. Denver's composure — anchored entirely by its star — holds the result.",
          runScore: "DEN 133-126",
          momentum: "home",
          keyPlayer: "Nikola Jokic",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Nikola Jokic",
          team: "Denver Nuggets",
          description:
            "Post-up turnaround jumper over two Chicago defenders with Denver clinging to a five-point lead, ending Chicago's momentum run and forcing the Bulls into a desperate foul situation.",
          timeRemaining: "1:28",
          winProbabilityShift: 28,
        },
        {
          player: "Nikola Jokic",
          team: "Denver Nuggets",
          description:
            "Read the Bulls' inbound play perfectly, stepped into the passing lane for a clean steal, and pushed in transition for the layup that made it a seven-point game with under a minute left.",
          timeRemaining: "0:54",
          winProbabilityShift: 34,
        },
        {
          player: "Zach LaVine",
          team: "Chicago Bulls",
          description:
            "Pull-up mid-range conversion over Michael Porter Jr. during Chicago's 15-5 fourth-quarter run, cutting the Denver lead to five and making the Ball Arena crowd audibly nervous.",
          timeRemaining: "2:09",
          winProbabilityShift: -18,
        },
        {
          player: "Coby White",
          team: "Chicago Bulls",
          description:
            "Back-to-back three-point attempts — first converted, second drawn as a foul — during Chicago's climactic run that shifted the game's emotional weight entirely to the visiting bench.",
          timeRemaining: "3:14",
          winProbabilityShift: -14,
        },
      ],
      narrative:
        "This game died twice and came back both times. Denver looked ready to cruise after a dominant third quarter, then Chicago's fourth-quarter press peeled the lead back to five and filled Ball Arena with a tension nobody in the building had planned for. The Bulls, dismissed on paper, forced Denver's bench into a visible crisis of confidence before Jokic — the only player on either roster who seemed unbothered — stepped back in and ended the conversation with two plays that felt less like basketball and more like a geometry lesson. The five-point final margin is accurate and also somehow misleading about how close this actually got.",
    },

    // ─── ORL @ CLE ───────────────────────────────────────────────────────────
    {
      gameId: "ORL-CLE-20261011",
      teams: { home: "CLE", away: "ORL" },
      finalScore: { home: 119, away: 105 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:33",
          description:
            "Cleveland sets a physical defensive tone from the opening minutes, forcing Orlando into three straight shot-clock violations and converting two of the resulting possessions into fast-break points. The Cavaliers telegraph their intentions early.",
          runScore: "CLE 14-6",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "5:50",
          description:
            "Orlando strings together its best offensive sequence of the half — eight straight points capped by a Franz Wagner drive — to pull within four and give the Magic their clearest look at the game. The Cavaliers call timeout.",
          runScore: "ORL 44-48",
          momentum: "away",
          keyPlayer: "Franz Wagner",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "0:31",
          description:
            "Cleveland closes the half on a 13-4 run, burying Orlando's brief momentum with organized half-court sets that exploited the Magic's defensive rotations. The Cavaliers enter halftime with structural control they will not relinquish.",
          runScore: "CLE 67-55",
          momentum: "home",
          keyPlayer: "Darius Garland",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "2:15",
          description:
            "Orlando's attempt to respond out of halftime stalls within three minutes as Cleveland's defense collapses Wagner's driving lanes and forces the Magic into contested mid-range territory. The game's competitive window closes here.",
          runScore: "CLE 88-70",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative:
        "Cleveland performed like a team that had something to prove and knew exactly how to prove it. The Cavaliers' defensive structure smothered Franz Wagner's two-way influence before he could find rhythm — a troubling signal for Orlando given how central Wagner has been to the Magic's organizational identity this preseason. The game had one genuine moment of tension midway through the second quarter, and Cleveland's response was immediate and organized enough to suggest this wasn't luck. Orlando's 1-2 record now feels like an accurate organizational read rather than a small-sample anomaly.",
    },

    // ─── MIL @ CHA ───────────────────────────────────────────────────────────
    {
      gameId: "MIL-CHA-20261011",
      teams: { home: "CHA", away: "MIL" },
      finalScore: { home: 105, away: 90 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:02",
          description:
            "Charlotte's young core attacks Milwaukee's defensive scheme from the opening tip, converting early transition opportunities before the Bucks can establish their half-court defense. Spectrum Center finds its voice inside the first three minutes.",
          runScore: "CHA 16-8",
          momentum: "home",
          keyPlayer: "LaMelo Ball",
          impact: "significant",
        },
        {
          quarter: "Q1",
          timestamp: "2:14",
          description:
            "Giannis imposes himself physically with five straight Milwaukee points, temporarily resetting the game's balance and reminding the building exactly who the projected favorite is. The Bucks briefly look like the team everyone expected.",
          runScore: "MIL 24-26",
          momentum: "away",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:45",
          description:
            "Charlotte executes a decisive 14-3 second-quarter run that reestablishes a double-digit lead and, critically, neutralizes Giannis's early momentum through disciplined rotational defense and tactical foul avoidance. The Hornets look nothing like a preseason underdog.",
          runScore: "CHA 51-37",
          momentum: "home",
          keyPlayer: "Brandon Miller",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:30",
          description:
            "Milwaukee attempts a third-quarter reset with a 9-2 run, trimming the lead to single digits and forcing Charlotte into a half-court grind they hadn't needed all evening. The Bucks' pressure defense generates three straight turnovers.",
          runScore: "MIL 68-74",
          momentum: "away",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "0:44",
          description:
            "Charlotte closes the third quarter with a 10-2 response, restoring a comfortable cushion and definitively answering Milwaukee's threat. LaMelo's playmaking dismantles the Bucks' press before it can sustain itself as a game-plan weapon.",
          runScore: "CHA 86-72",
          momentum: "home",
          keyPlayer: "LaMelo Ball",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative:
        "Charlotte did not steal this game — it earned it by solving Milwaukee's defensive scheme and surviving the one sequence when Giannis threatened to flip the script. The Hornets' young core answered every Milwaukee run with a counter that felt more like preparation than improvisation, which is the most organizationally significant detail of the entire night. Giannis's rhythm never fully returned after Charlotte's second-quarter run, and the Bucks' supporting cast couldn't compensate for a star operating below his ceiling on the road. For a Charlotte franchise searching for proof-of-concept moments, a 15-point home win over an established contender on national television is a data point that matters.",
    },
  ],
};