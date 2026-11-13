// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 13, 2026
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
  generatedDate: "2026-11-13",
  date: "November 13, 2026",
  gameOfTheNight: "DET-WAS-20261112",
  topClutchPerformer: {
    player: "Cade Cunningham",
    team: "DET",
    clutchRating: 97,
    description: "Cunningham was an unstoppable force across two overtime periods, willing Detroit through every Washington run with iso buckets, dagger pull-ups, and clutch dimes that left Capital One Arena in disbelief. His 52-point, 11-assist masterpiece in double OT is the defining clutch performance of the young season.",
  },
  games: [
    {
      gameId: "DET-WAS-20261112",
      teams: { home: "WAS", away: "DET" },
      finalScore: { home: 140, away: 144 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:14",
          description: "Washington opens a 14-3 run behind back-to-back Trae Young floaters and an Alex Sarr corner three, forcing a Detroit timeout and threatening to make this a rout before halftime.",
          runScore: "14-3",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "2:31",
          description: "Cade Cunningham responds to a Sarr and-one with consecutive step-back threes, erasing a 9-point Washington lead and tying the game at 122 with the road crowd suddenly silent.",
          runScore: "9-0",
          momentum: "away",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
        {
          quarter: "OT2",
          timestamp: "1:08",
          description: "Ausar Thompson seals the swing with a coast-to-coast left-handed finish off a Cunningham turnover recovery, pushing Detroit to a 4-point cushion that Washington's desperation heaves could not close.",
          runScore: "6-2",
          momentum: "away",
          keyPlayer: "Ausar Thompson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Cade Cunningham",
          team: "DET",
          description: "Back-to-back step-back threes in the final 2:31 of regulation erase a 9-point deficit and send the game to overtime — a sequence that defied both the scoreboard and the moment.",
          timeRemaining: "2:31 Q4",
          winProbabilityShift: 34,
        },
        {
          player: "Trae Young",
          team: "WAS",
          description: "A circus floater over Paul Reed ties OT1 at 130 with 18 seconds left, buying Washington one more life and forcing a second overtime on pure audacity.",
          timeRemaining: "0:18 OT1",
          winProbabilityShift: -22,
        },
        {
          player: "Ausar Thompson",
          team: "DET",
          description: "A coast-to-coast lefty finish in OT2 pushes Detroit's lead to 4 with just over a minute left, effectively ending Washington's last realistic chance at the comeback.",
          timeRemaining: "1:08 OT2",
          winProbabilityShift: 28,
        },
      ],
      narrative: "This game had no business being as good as it was — a double-overtime war of attrition that turned into a showcase for one of the most complete individual performances of the decade. Cade Cunningham didn't just score 52; he authored the story, writing every pivotal chapter himself. Washington threw everything at Detroit — Trae Young's 37-point-and-14-assist brilliance, Anthony Davis bruising the paint, Alex Sarr lighting it from deep — and still came up four points short. Detroit is not just good. Detroit is dangerous.",
    },
    {
      gameId: "DAL-MIN-20261112",
      teams: { home: "MIN", away: "DAL" },
      finalScore: { home: 133, away: 94 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Bones Hyland drills three consecutive threes off the Minnesota bench to spark a 15-4 run, turning an even game into an early 12-point Minnesota advantage and setting the tone for the rout.",
          runScore: "15-4",
          momentum: "home",
          keyPlayer: "Bones Hyland",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:05",
          description: "LaMelo Ball orchestrates a 19-6 third-quarter surge, threading no-look passes and converting two mid-range pull-ups to push the lead past 30 and effectively end any Dallas comeback hope.",
          runScore: "19-6",
          momentum: "home",
          keyPlayer: "LaMelo Ball",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "There was no drama in Minneapolis — only carnage. The Timberwolves dismantled Dallas with a precision and ferocity that felt almost mechanical, turning a winnable road game for the Mavericks into a 39-point humiliation. Kyrie Irving's minus-36 is the kind of number that generates emergency film sessions; Cooper Flagg's minus-21 on only 12 points signals that Dallas's issues run deeper than any single lineup tweak can fix. Minnesota, meanwhile, looks every bit like a championship contender.",
    },
    {
      gameId: "TOR-PHI-20261112",
      teams: { home: "PHI", away: "TOR" },
      finalScore: { home: 123, away: 112 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "3:47",
          description: "RJ Barrett explodes for 11 consecutive Toronto points — a mid-range pull-up, an and-one drive, and two free throws — to cut a 14-point Philadelphia lead to 3 and breathe life into the Raptors.",
          runScore: "11-2",
          momentum: "away",
          keyPlayer: "RJ Barrett",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "6:12",
          description: "Anfernee Simons catches fire off the Philadelphia bench, burying three straight threes in a 90-second stretch to blow the game open at 115-101 and silence any remaining Toronto momentum.",
          runScore: "12-4",
          momentum: "home",
          keyPlayer: "Anfernee Simons",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Philadelphia's depth proved to be the difference — Simons and Edgecombe delivering precision off the bench at the moments Toronto needed stops most. RJ Barrett was magnificent with 31 and 14, and Immanuel Quickley's 26 gave Toronto real firepower, but the Sixers had too many weapons and too many answers. Maxey ran the show with his usual composure, and Embiid's efficient 20-point-plus-11 anchor quietly strangled Toronto's interior. At 10-3, Philly's championship ambitions look increasingly credible.",
    },
    {
      gameId: "CHA-PHX-20261112",
      teams: { home: "PHX", away: "CHA" },
      finalScore: { home: 101, away: 96 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "5:33",
          description: "Charlotte rips off a 14-5 run behind Coby White's three straight buckets and a Naz Reid put-back to take a 78-74 lead and stun a listless Phoenix crowd.",
          runScore: "14-5",
          momentum: "away",
          keyPlayer: "Coby White",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "3:19",
          description: "Devin Booker personally engineers a 12-2 Phoenix response — two pull-up threes, a mid-range two, and two clutch free throws — to reclaim the lead and drain the life from Charlotte's upset bid.",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Devin Booker",
          team: "PHX",
          description: "A contested step-back triple with the shot clock dying at the 3:19 mark gives Phoenix a 5-point lead and breaks Charlotte's spirit — the shot that turned a battle into a Suns victory.",
          timeRemaining: "3:19 Q4",
          winProbabilityShift: 31,
        },
        {
          player: "Coby White",
          team: "CHA",
          description: "White's driving floater cuts the Phoenix lead to 2 with 1:44 remaining, briefly reigniting Charlotte's hope and forcing Booker to answer at the other end.",
          timeRemaining: "1:44 Q4",
          winProbabilityShift: -14,
        },
      ],
      narrative: "Charlotte played well enough to win for three quarters and still walked away with nothing — that's the Devin Booker effect. The Suns superstar absorbed a Charlotte lead and a hostile crowd energy, then systematically dismantled the Hornets' upset bid with the kind of late-game shotmaking that only a handful of players on the planet can deliver on command. Jordan Goodwin's plus-18 off the bench and Collin Gillespie's perfect three-point shooting gave Phoenix the supporting cast it needed. For Charlotte, another close loss raises familiar questions about finishing.",
    },
  ],
};