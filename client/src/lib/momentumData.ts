// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 2, 2026
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
  generatedDate: "2026-11-02",
  date: "November 2, 2026",
  gameOfTheNight: "TOR-LAL-20261101",
  topClutchPerformer: {
    player: "LeBron James",
    team: "LAL",
    clutchRating: 94,
    description: "LeBron authored a 14-point fourth quarter that erased a nine-point deficit — consecutive pull-up jumpers followed by a transition layup constituted the night's most individually decisive closing sequence and lifted the Lakers from the edge of a second straight loss.",
  },
  games: [
    {
      gameId: "TOR-LAL-20261101",
      teams: { home: "LAL", away: "TOR" },
      finalScore: { home: 131, away: 125 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:14",
          description: "Toronto's guards push transition offense to carve out a 7-point lead — three consecutive fast-break buckets expose the Lakers' halfcourt-to-transition gaps and give the Raptors their largest advantage of the first half.",
          runScore: "14-7 TOR run",
          momentum: "away",
          keyPlayer: "Toronto Guards",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:31",
          description: "The Raptors extend their advantage to nine on a corner three and two free throws — crypto.com Arena falls quiet as Toronto's pace-and-space scheme cracks open the Lakers' switching defense for the night's most sustained away run.",
          runScore: "11-2 TOR run",
          momentum: "away",
          keyPlayer: "Toronto Raptors",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:22",
          description: "LeBron James opens the fourth with back-to-back pull-up jumpers, immediately trimming the deficit to five and signaling the crowd that a comeback is structurally viable.",
          runScore: "8-2 LAL run",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:05",
          description: "LeBron finishes a transition layup to give the Lakers their first lead since the second quarter — the arena erupts and Toronto calls its final timeout with the game now entirely in the balance.",
          runScore: "10-3 LAL run",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "LeBron James",
          team: "LAL",
          description: "Pull-up mid-range jumper from the elbow cuts the Toronto lead to five — the shot was the first sign of defensive fatigue from the Raptors' switching scheme.",
          timeRemaining: "7:22",
          winProbabilityShift: 14,
        },
        {
          player: "LeBron James",
          team: "LAL",
          description: "Second consecutive pull-up jumper, this time from the left wing, trims the deficit to three and forces Toronto into an early timeout.",
          timeRemaining: "6:44",
          winProbabilityShift: 18,
        },
        {
          player: "LeBron James",
          team: "LAL",
          description: "Transition layup off a stolen inbound gives the Lakers a one-point lead — the sequence is the night's decisive individual moment and the building responds immediately.",
          timeRemaining: "2:05",
          winProbabilityShift: 31,
        },
        {
          player: "Toronto Guard",
          team: "TOR",
          description: "Iso pull-up three-pointer attempt with the game tied — misses long off the back rim, ending Toronto's last realistic opportunity to reclaim the lead.",
          timeRemaining: "1:18",
          winProbabilityShift: -22,
        },
      ],
      narrative: "This game was a study in two very different identities colliding across 48 minutes. Toronto spent three quarters proving their 3-3 road record is earned — their guards were relentless in transition, their spacing was elite, and the nine-point third-quarter lead felt entirely deserved. What they could not account for was LeBron James deciding the fourth quarter belonged to him. His closing sequence — two pull-up jumpers and a transition layup spread across six minutes — was not heroic improvisation but rather the methodical dismantling of a defense that had no answer left at the end of a road back-to-back.",
    },
    {
      gameId: "BOS-ORL-20261101",
      teams: { home: "ORL", away: "BOS" },
      finalScore: { home: 97, away: 108 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:47",
          description: "Orlando's switching defense holds Boston to a single field goal over a six-minute stretch, pulling the Magic within three and briefly suggesting a home upset was possible.",
          runScore: "9-2 ORL run",
          momentum: "home",
          keyPlayer: "Orlando Magic Defense",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "6:15",
          description: "Tatum identifies the breakdown point in Orlando's switching coverage and scores on back-to-back possessions — a mid-range pull-up followed by a drive-and-finish — to push the Boston lead to double digits and functionally end Orlando's competitive window.",
          runScore: "12-4 BOS run",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:02",
          description: "Boston's defensive rotation smothers Orlando's half-court offense for the entire fourth quarter, holding the Magic to under a point per possession and confirming the Celtics as the East's most complete road defensive unit.",
          runScore: "14-8 BOS run",
          momentum: "away",
          keyPlayer: "Boston Celtics Defense",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Boston never trailed and the margin of comfort expanded precisely when Orlando needed it to contract. Tatum's second-half takeover — 16 of his 29 arriving after halftime — was surgical rather than spectacular, which is somehow more alarming for the rest of the East. The Magic's switching scheme worked beautifully for two and a half quarters before Tatum simply found its seams and walked through them. The 11-point final margin understates how controlled this road performance was from start to finish.",
    },
    {
      gameId: "LAC-GSW-20261101",
      teams: { home: "GSW", away: "LAC" },
      finalScore: { home: 124, away: 112 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:20",
          description: "Curry splashes three consecutive three-pointers in a two-minute span — without Kawhi Leonard, the Clippers have no wing capable of contesting him at the point of release and the opening statement is made early.",
          runScore: "13-4 GSW run",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "5:44",
          description: "Golden State pushes its lead to 19 on a Curry-to-Draymond two-man game that splits the Clippers' scrambling help defense — at this point the result is functionally decided and both benches begin rotating heavily.",
          runScore: "16-5 GSW run",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "8:11",
          description: "The Clippers trim the deficit to 10 on a 12-3 garbage-time run against Golden State's reserves — a cosmetically respectable sequence that the scoreboard will record but the tape will not support.",
          runScore: "12-3 LAC run",
          momentum: "away",
          keyPlayer: "LA Clippers Bench",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Curry's 36 points following his Halloween 41-point performance created the West's most dominant individual two-game stretch of the young season — 77 points across 48 hours at Chase Center. Without Kawhi Leonard, Los Angeles arrived structurally unable to make Curry work for his attempts, and the Clippers' 1-5 away record reflects an identity crisis that no single personnel change can immediately resolve. Golden State led by 19 in the third quarter and the final 124-112 scoreline is the most flattering thing that happened to the Clippers all night.",
    },
    {
      gameId: "BRK-IND-20261101",
      teams: { home: "IND", away: "BRK" },
      finalScore: { home: 90, away: 98 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "7:05",
          description: "Indiana opens a 12-point lead behind efficient mid-range scoring and transition defense — the Pacers look every bit the home favorite and Brooklyn's 1-5 road record seems destined to deteriorate.",
          runScore: "14-6 IND run",
          momentum: "home",
          keyPlayer: "Indiana Pacers",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "9:48",
          description: "Cam Thomas opens the fourth with a step-back three and a steal converted into a pull-up jumper on consecutive possessions — Brooklyn's tone shifts from survival to aggression in less than 90 seconds.",
          runScore: "8-2 BRK run",
          momentum: "away",
          keyPlayer: "Cam Thomas",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "3:14",
          description: "Thomas records his third steal of the quarter and converts the break opportunity — Brooklyn has now outscored Indiana 22-10 in the final period and the collapse is complete.",
          runScore: "20-8 BRK run",
          momentum: "away",
          keyPlayer: "Cam Thomas",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Cam Thomas",
          team: "BRK",
          description: "Step-back three-pointer from the top of the key opens the fourth-quarter comeback — Brooklyn's first lead of the second half arrives moments later.",
          timeRemaining: "9:48",
          winProbabilityShift: 19,
        },
        {
          player: "Cam Thomas",
          team: "BRK",
          description: "Third steal of the final period converted into a transition layup — the sequence breaks Indiana's will and gives Brooklyn a lead they will not relinquish.",
          timeRemaining: "3:14",
          winProbabilityShift: 28,
        },
        {
          player: "Indiana Pacers",
          team: "IND",
          description: "Turnover on an inbound play with a chance to answer Brooklyn's run — the possession swing proves the definitive moment of Indiana's fourth-quarter collapse.",
          timeRemaining: "4:01",
          winProbabilityShift: -21,
        },
      ],
      narrative: "Indiana looked like the deserving winner for three and a half quarters and Brooklyn looked like exactly what their 1-5 road record advertised. Then Cam Thomas happened. His three steals in the final 10 minutes were not coincidental — they reflected a calculated pressure campaign on Indiana's ball-handlers that the Pacers had no adjustment for and no answer to. The 28-18 fourth-quarter Brooklyn advantage is the night's most alarming number for Indiana, a team now 2-5 and watching a supposed road underdog dismantle them on their own floor.",
    },
  ],
};