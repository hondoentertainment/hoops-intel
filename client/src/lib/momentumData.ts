// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 14, 2026
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
  generatedDate: "2026-10-14",
  date: "October 14, 2026",
  gameOfTheNight: "IND-OKC-20261013",
  topClutchPerformer: {
    player: "Shai Gilgeous-Alexander",
    team: "OKC",
    clutchRating: 94,
    description: "SGA authored the night's defining clutch performance, steering Oklahoma City through regulation's final minutes and then personally dismantling Indiana's overtime defense with a sequence of step-back jumpers and drawn fouls that made a 1-3 preseason record feel survivable. His composure in a Paycom Center atmosphere that desperately needed a win was the evening's clearest individual statement.",
  },
  games: [
    {
      gameId: "NYK-TOR-20261013",
      teams: { home: "TOR", away: "NYK" },
      finalScore: { home: 148, away: 98 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Toronto opened a 14-2 run to close the first quarter, exposing New York's half-court defensive rotations before the Knicks could establish any offensive rhythm. The pace was suffocating from the opening tip.",
          runScore: "32-18",
          momentum: "home",
          keyPlayer: "Toronto Raptors",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:45",
          description: "The Raptors detonated a 22-6 second-quarter run that effectively ended the competitive portion of the game. New York's bench unit offered no resistance and the Knicks' defensive scheme buckled entirely under Toronto's relentless transition attack.",
          runScore: "68-34",
          momentum: "home",
          keyPlayer: "Toronto Raptors",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:10",
          description: "With the outcome long settled, Toronto continued to push pace and reached a 50-point cushion midway through the third quarter — a margin that shifted the story from a win into an organizational indictment of New York's preseason construction.",
          runScore: "112-62",
          momentum: "home",
          keyPlayer: "Toronto Raptors",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "The 50-point margin tells you everything you need to know about where these two franchises stand entering opening night. Toronto was not merely better — they were playing a different sport, operating at a pace the Knicks could not match for even a single possession stretch. New York's 0-4 preseason record is not a sample-size anomaly; it is a structural diagnosis. The Raptors, meanwhile, have now authored the window's single most alarming result and done so on their home floor in front of a crowd that left Scotiabank Arena with genuine belief in what this team could become.",
    },
    {
      gameId: "CLE-ORL-20261013",
      teams: { home: "ORL", away: "CLE" },
      finalScore: { home: 132, away: 116 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:30",
          description: "Cleveland jumped out of the gates and briefly held a 7-point lead as Orlando's offense found its footing slowly. The Cavaliers' defensive intensity in the opening minutes suggested this would be a tighter contest than projected.",
          runScore: "18-25",
          momentum: "away",
          keyPlayer: "Cleveland Cavaliers",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "9:12",
          description: "Franz Wagner ignited a 16-4 Orlando run to close the second quarter, erasing Cleveland's lead and handing the Magic a double-digit halftime cushion. Wagner's interior pressure and pick-and-roll reads were completely unguarded by the Cavaliers' switching scheme.",
          runScore: "68-52",
          momentum: "home",
          keyPlayer: "Franz Wagner",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:55",
          description: "Orlando extended the lead to 20 with a relentless second-half transition attack that Cleveland had no defensive answer for. The Magic's organizational improvement from their previous tight loss to this 16-point statement was the most visible back-to-back progression of the preseason window.",
          runScore: "102-78",
          momentum: "home",
          keyPlayer: "Franz Wagner",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "8:00",
          description: "Cleveland trimmed the deficit to 12 with a mid-fourth-quarter push, but Orlando's starters re-entered and immediately pushed the margin back beyond comfortable range, confirming the Magic's depth advantage.",
          runScore: "118-106",
          momentum: "home",
          keyPlayer: "Franz Wagner",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Orlando delivered precisely the corrective result the desk had flagged as both possible and necessary after their previous performance. Wagner was the engine — relentless in the pick-and-roll, decisive on the glass, and impossible for Cleveland's rotating defenders to contain once the second quarter's rhythm belonged entirely to the Magic. The Cavaliers' inability to answer Orlando's interior pressure in the second half was the game's defining tactical reality. At 2-1, the Magic are the East's most quietly convincing preseason story, and the Peacock national audience saw exactly why.",
    },
    {
      gameId: "IND-OKC-20261013",
      teams: { home: "OKC", away: "IND" },
      finalScore: { home: 114, away: 112 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "2:14",
          description: "Indiana established a fast-paced, back-and-forth tone in the opening quarter that immediately signaled this game would not follow a clean narrative arc. The Pacers' ball movement created early advantage and Oklahoma City looked disorganized in their defensive sets.",
          runScore: "24-28",
          momentum: "away",
          keyPlayer: "Indiana Pacers",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "5:33",
          description: "SGA took over the second quarter personally, scoring 11 straight Oklahoma City points to flip a 6-point deficit into a 5-point lead. His mid-range efficiency was pristine and Paycom Center responded with the kind of noise that had been absent through the early preseason losses.",
          runScore: "54-47",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:48",
          description: "Indiana clawed back from 8 down to tie the game with under two minutes remaining in regulation, manufacturing the evening's most dramatic momentum swing. The Pacers' collective ball movement dismantled OKC's late-game defensive scheme and forced overtime.",
          runScore: "104-104",
          momentum: "away",
          keyPlayer: "Indiana Pacers",
          impact: "game-changing",
        },
        {
          quarter: "OT",
          timestamp: "2:20",
          description: "SGA broke a tie with back-to-back buckets in overtime to give Oklahoma City a 4-point lead with under 90 seconds remaining. The Pacers had no defensive answer for his isolation game and fouled themselves into a losing position.",
          runScore: "112-106",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "Step-back mid-range jumper over the Pacers' closing defender to break a tie game in overtime, giving OKC their first lead of the extra period and triggering the decisive final run.",
          timeRemaining: "2:20 OT",
          winProbabilityShift: 28,
        },
        {
          player: "Shai Gilgeous-Alexander",
          team: "OKC",
          description: "Drew a shooting foul on a drive to the basket and converted both free throws to push the lead to 4, effectively sealing the overtime result as Indiana's fouling strategy collapsed.",
          timeRemaining: "1:04 OT",
          winProbabilityShift: 21,
        },
        {
          player: "Indiana Pacers",
          team: "IND",
          description: "A devastating 8-0 run in the final 3:48 of regulation erased OKC's late lead and sent the game to overtime, momentarily appearing to swing the result entirely in Indiana's favor.",
          timeRemaining: "0:00 Q4",
          winProbabilityShift: -34,
        },
      ],
      narrative: "This was the night's most complete drama — a game that tested Oklahoma City's organizational resolve, went to overtime after Indiana engineered one of the window's most damaging late-game runs, and was ultimately resolved by SGA doing what only SGA can do. The Thunder came into this game at 0-3 and left it with something they desperately needed: evidence that their best player still performs when the stakes are real and the crowd is loud. It does not erase the losses, but it confirms the ceiling. Oklahoma City is not broken. They are just not yet whole.",
    },
    {
      gameId: "GSW-LAL-20261013",
      teams: { home: "LAL", away: "GSW" },
      finalScore: { home: 89, away: 101 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:15",
          description: "Golden State established defensive dominance from the opening possession, holding Los Angeles to 4-of-17 shooting through the first quarter's first eight minutes. The Warriors' switching scheme neutralized the Lakers' initial offensive sets completely.",
          runScore: "18-24",
          momentum: "away",
          keyPlayer: "Golden State Warriors",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "4:02",
          description: "Los Angeles briefly cut the deficit to 3 points with a second-quarter push fueled by their frontcourt physicality. The Lakers appeared to find a formula against Golden State's zone before the Warriors called timeout and adjusted.",
          runScore: "44-47",
          momentum: "home",
          keyPlayer: "Los Angeles Lakers",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "9:30",
          description: "Stephen Curry's fourth-quarter playmaking — three consecutive assists that produced 9 straight Warriors points — decisively separated Golden State from a Lakers team that had no offensive answer as Anthony Davis's minutes were managed down the stretch.",
          runScore: "76-94",
          momentum: "away",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Golden State's 101-89 road win is the night's most surprising defensive result, and the most revealing individual health narrative entering opening week. Curry's fourth-quarter orchestration was vintage — his ability to find cutters and collapse defenses without forcing his own shot was the difference between a competitive game and a statement result. But the desk's attention is on Davis, whose shoulder management limited his late-game involvement in a way that made Los Angeles's offensive ceiling look structurally compromised. The Lakers fall to 2-2, and that number feels generous given what the fourth quarter exposed.",
    },
    {
      gameId: "POR-SAC-20261013",
      teams: { home: "SAC", away: "POR" },
      finalScore: { home: 98, away: 110 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:50",
          description: "Sacramento opened strong at home, using crowd energy and early offensive efficiency to build a 9-point first-quarter lead. Portland appeared slow to adjust to the Kings' uptempo opening-possession scheme.",
          runScore: "28-19",
          momentum: "home",
          keyPlayer: "Sacramento Kings",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "7:18",
          description: "Portland methodically erased Sacramento's lead with a 17-4 second-quarter run that flipped the scoreboard and exposed the Kings' defensive breakdowns in transition. The Trail Blazers' collective ball movement was the West's quietest and most effective organizational display of the preseason.",
          runScore: "48-54",
          momentum: "away",
          keyPlayer: "Portland Trail Blazers",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "3:35",
          description: "Sacramento responded with a brief third-quarter surge to pull within 4 points, briefly giving Golden 1 Center a reason to believe in a comeback. Portland's defensive rotations tightened immediately and the Kings' run ended without converting the momentum shift into a lead.",
          runScore: "78-82",
          momentum: "home",
          keyPlayer: "Sacramento Kings",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "6:00",
          description: "Portland's fourth-quarter execution was surgical — they pushed the lead back to double digits with an 18-6 run that Sacramento had absolutely no answer for. The Trail Blazers closed the game as the only unbeaten team in the West and did it on the road, in an environment that should have favored the Kings.",
          runScore: "90-108",
          momentum: "away",
          keyPlayer: "Portland Trail Blazers",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Portland's 3-0 record is the West's most underreported organizational confirmation of the preseason window, and this road win at Sacramento is the most convincing entry on that résumé. The Trail Blazers trailed by 9 in the first quarter, erased it, absorbed Sacramento's third-quarter push without flinching, and then closed with a fourth-quarter sequence that removed any doubt. Sacramento drops to 0-4 — tied with New York for the league's most alarming preseason record — and has now failed to find a competitive identity in any of its four outings. Portland is quietly real. Sacramento is quietly in crisis.",
    },
  ],
};