// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 8, 2026
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
  generatedDate: "2026-11-08",
  date: "November 8, 2026",
  gameOfTheNight: "ORL-GSW-20261107",
  topClutchPerformer: {
    player: "Stephen Curry",
    team: "GSW",
    clutchRating: 96,
    description: "Curry authored two overtime threes in a hostile Chase Center environment, personally erasing a 4-point Magic lead with 90 seconds remaining in OT and sealing the win at the line. His six-three night was the statistical summit of his early season, but it was the overtime composure that confirmed he remains the most dangerous late-game shooter alive.",
  },
  games: [
    {
      gameId: "SA-POR-20261107",
      teams: { home: "POR", away: "SAS" },
      finalScore: { home: 103, away: 125 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description: "Castle threads three consecutive pick-and-roll passes into the paint, igniting a 12-2 Spurs run that established San Antonio's tone before Portland could settle defensively.",
          runScore: "12-2 SAS",
          momentum: "away",
          keyPlayer: "Stephon Castle",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:14",
          description: "Portland responded with a 9-0 burst off three offensive rebounds to trim the deficit to single digits, briefly injecting life into Moda Center.",
          runScore: "9-0 POR",
          momentum: "home",
          keyPlayer: "Scoot Henderson",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "3:51",
          description: "Castle's back-to-back steals converted directly into transition layups, triggering an 18-4 third-quarter demolition run that made the margin insurmountable and ended the competitive portion of the game.",
          runScore: "18-4 SAS",
          momentum: "away",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "San Antonio's 22-point road win never felt that close. Castle's pace manipulation dismantled Portland's halfcourt structure from the opening tip, and the Spurs' switchable defense suffocated every Blazer initiative in the third quarter when the game was momentarily within reach. The most revealing detail: Castle posted his best two-game stretch of the season on consecutive nights and barely broke a sweat doing it.",
    },
    {
      gameId: "WSH-OKC-20261107",
      teams: { home: "OKC", away: "WAS" },
      finalScore: { home: 114, away: 75 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:03",
          description: "SGA opens with back-to-back mid-range pull-ups while OKC's defensive rotation forces three consecutive Washington turnovers, establishing an early 14-4 advantage that telegraphed the evening's outcome.",
          runScore: "14-4 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "9:40",
          description: "A 22-6 second-quarter explosion shattered any residual Washington competitiveness. OKC's collective defensive intensity — three blocked shots and four steals in a six-minute stretch — made Paycom Center an utterly hostile environment for the Wizards.",
          runScore: "22-6 OKC",
          momentum: "home",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Washington's 75-point total is an indictment of the franchise's current state and a testament to what Oklahoma City has constructed defensively. The Thunder didn't just win — they systematically deconstructed every offensive system the Wizards attempted, holding them to under 80 for only the second time all season. SGA's offensive efficiency operated on a different frequency than anything Washington could answer.",
    },
    {
      gameId: "HOU-PHX-20261107",
      teams: { home: "PHX", away: "HOU" },
      finalScore: { home: 102, away: 99 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:18",
          description: "Sengun exploits Phoenix's depleted frontcourt with four consecutive post scores to give Houston a 12-point lead, the precise matchup advantage the desk had projected as Houston's path to victory.",
          runScore: "12-2 HOU",
          momentum: "away",
          keyPlayer: "Alperen Sengun",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "2:44",
          description: "Booker erupts for three consecutive threes — two off the dribble — to erase Houston's lead entirely and swing the Mortgage Matchup Center crowd into full voice, turning a projected Rockets win into a genuine contest.",
          runScore: "13-4 PHX",
          momentum: "home",
          keyPlayer: "Devin Booker",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:12",
          description: "Houston's Jalen Green hits a corner three to cut it to one, forcing Phoenix to execute under pressure in front of a crowd that had been holding its breath for three minutes.",
          runScore: "5-0 HOU",
          momentum: "away",
          keyPlayer: "Jalen Green",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Devin Booker",
          team: "PHX",
          description: "Step-back mid-range jumper over Green's outstretched contest to push Phoenix's lead to three with 38 seconds remaining, forcing Houston into foul-or-foul-out territory.",
          timeRemaining: "0:38",
          winProbabilityShift: 31,
        },
        {
          player: "Devin Booker",
          team: "PHX",
          description: "Pair of clutch free throws with 12 seconds left to seal a three-point Phoenix lead after Houston fouled intentionally, draining both with the calm of a player who has lived in these moments for a decade.",
          timeRemaining: "0:12",
          winProbabilityShift: 28,
        },
        {
          player: "Jalen Green",
          team: "HOU",
          description: "Desperation corner three at the buzzer that caught rim and bounced away — the final punctuation on Phoenix's most improbable win of the young season.",
          timeRemaining: "0:00",
          winProbabilityShift: -18,
        },
      ],
      narrative: "Without Kevin Durant, Phoenix had no structural right to beat a Houston team that entered as road favorites with a size advantage they exploited efficiently. Booker simply refused to let the Suns lose. His third-quarter eruption flipped the game's entire emotional architecture, and his clutch free-throw execution in the final minute gave Phoenix a result that will define the early-season narrative around this franchise's resilience.",
    },
    {
      gameId: "NYK-CLE-20261107",
      teams: { home: "CLE", away: "NYK" },
      finalScore: { home: 97, away: 109 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:30",
          description: "Towns opens with consecutive three-pointers over Mobley's closeout — the spacing weapon Cleveland had no scouting answer for — establishing New York's offensive blueprint from the opening minutes.",
          runScore: "10-2 NYK",
          momentum: "away",
          keyPlayer: "Karl-Anthony Towns",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:55",
          description: "Cleveland responds with a 14-5 third-quarter run fueled by Mobley's interior aggression, trimming New York's lead to four and triggering genuine tension inside Rocket Arena.",
          runScore: "14-5 CLE",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "6:22",
          description: "Towns reasserts dominance with a turnaround three and two straight post baskets over Mobley — a clinic on positional versatility — pushing New York's lead back to double digits and effectively closing the competitive window.",
          runScore: "12-3 NYK",
          momentum: "away",
          keyPlayer: "Karl-Anthony Towns",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "The Towns-Mobley individual battle was the East's most compelling matchup on the night, and Towns won it on every dimension — scoring, spacing, and the psychological game of making Mobley defend pick-and-pop situations he was not built to handle. Cleveland's post-Philadelphia momentum is officially tempered, and this loss reveals a structural defensive vulnerability the Cavaliers will need to solve before the schedule toughens.",
    },
    {
      gameId: "ORL-GSW-20261107",
      teams: { home: "GSW", away: "ORL" },
      finalScore: { home: 126, away: 119 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "4:10",
          description: "Orlando unleashes a 16-4 third-quarter run — Paolo Banchero orchestrating with four straight assists — to seize a 7-point lead and silence Chase Center in a way few visiting teams manage.",
          runScore: "16-4 ORL",
          momentum: "away",
          keyPlayer: "Paolo Banchero",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:05",
          description: "Curry answers with consecutive step-back threes in a 90-second window to tie the game at 108, forcing overtime and reminding everyone why Golden State's home floor remains one of the NBA's most dangerous environments.",
          runScore: "8-2 GSW",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
        {
          quarter: "OT",
          timestamp: "1:33",
          description: "Curry drills back-to-back threes in overtime — the second over a scrambling Franz Wagner closeout — to push Golden State to a 5-point lead they would not relinquish, completing one of his most clutch individual overtime sequences of the season.",
          runScore: "10-4 GSW",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Stephen Curry",
          team: "GSW",
          description: "Back-to-back step-back threes in regulation's final two minutes to erase a 4-point Orlando lead and force overtime — the sequence that saved Golden State's night.",
          timeRemaining: "2:05",
          winProbabilityShift: 38,
        },
        {
          player: "Paolo Banchero",
          team: "ORL",
          description: "Driving floater in overtime to cut the Golden State lead to two and keep Orlando's miracle bid alive with under a minute remaining.",
          timeRemaining: "0:52",
          winProbabilityShift: -14,
        },
        {
          player: "Stephen Curry",
          team: "GSW",
          description: "Two clutch free throws in overtime with 18 seconds left to push the lead to five, ending Orlando's mathematical hope of stealing a road win at Chase Center.",
          timeRemaining: "0:18",
          winProbabilityShift: 22,
        },
      ],
      narrative: "This was the night's most complete drama — a 2-7 Orlando team nearly conjured the season's most stunning upset before Curry simply would not allow it. The Magic's third-quarter takeover was genuine, sustained, and terrifying for a Chase Center crowd that had been expecting a comfortable Golden State win. What followed was a masterclass in Curry operating at his highest register when the game demands it most.",
    },
    {
      gameId: "BKN-ATL-20261107",
      teams: { home: "ATL", away: "BKN" },
      finalScore: { home: 124, away: 121 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:44",
          description: "Trae Young's four consecutive assists in a 90-second stretch fuel a 13-3 Atlanta run to establish a double-digit lead and project the comfortable home win State Farm Arena was expecting.",
          runScore: "13-3 ATL",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "5:10",
          description: "Brooklyn's Cam Thomas catches fire with three straight mid-range pull-ups to spark a 15-5 Nets run that cuts Atlanta's lead to two and transforms State Farm Arena into a genuinely nervous environment.",
          runScore: "15-5 BKN",
          momentum: "away",
          keyPlayer: "Cam Thomas",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Trae Young",
          team: "ATL",
          description: "Young draws a foul on a crafty euro-step drive and sinks both free throws with 1:24 remaining to push Atlanta's lead back to four after Brooklyn had trimmed it to one.",
          timeRemaining: "1:24",
          winProbabilityShift: 24,
        },
        {
          player: "Cam Thomas",
          team: "BKN",
          description: "Thomas drills a contested pull-up two to cut it to two with 48 seconds left, keeping Brooklyn's upset bid alive and forcing Atlanta to execute under pressure.",
          timeRemaining: "0:48",
          winProbabilityShift: -16,
        },
        {
          player: "Trae Young",
          team: "ATL",
          description: "Young hits the second of two free throws after being intentionally fouled — the fourth clutch free throw of his fourth quarter — to restore a three-point lead with 11 seconds left and effectively seal the game.",
          timeRemaining: "0:11",
          winProbabilityShift: 29,
        },
      ],
      narrative: "Brooklyn refused to play the role of a 2-7 team rolling over for the Eastern Conference's hottest team, and Cam Thomas's fourth-quarter eruption gave the Nets a legitimate chance to steal a road win that would have reset the narrative around their season. Young's free-throw execution in the final 90 seconds was the margin — four makes that required the poise of a player accustomed to carrying the weight of close games on his own.",
    },
    {
      gameId: "DEN-IND-20261107",
      teams: { home: "IND", away: "DEN" },
      finalScore: { home: 102, away: 114 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:02",
          description: "Nikola Jokić opens with a triple-double pace — four assists and six points in the first seven minutes — as Denver establishes a methodical halfcourt advantage Indiana's depleted frontcourt cannot contest at Arena CDMX.",
          runScore: "11-3 DEN",
          momentum: "away",
          keyPlayer: "Nikola Jokić",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "7:20",
          description: "Tyrese Haliburton ignites a 14-6 Indiana third-quarter run to cut the Denver lead to four, briefly raising the possibility that the Pacers' home crowd in Mexico City could carry them to an upset.",
          runScore: "14-6 IND",
          momentum: "home",
          keyPlayer: "Tyrese Haliburton",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "8:14",
          description: "Jokić reasserts control with a devastating 10-2 personal run across six fourth-quarter minutes — two assists converted to alley-oops, one mid-range pull-up, and a three — to restore Denver's double-digit advantage and end Indiana's competitive window.",
          runScore: "10-2 DEN",
          momentum: "away",
          keyPlayer: "Nikola Jokić",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "The Mexico City showcase belonged to Jokić, who treated Arena CDMX as a personal theater for his particular brand of basketball genius. Indiana's third-quarter run created a genuine competitive moment and Haliburton's orchestration was the most credible thing the Pacers produced all night — but Jokić's fourth-quarter response was the kind of individual statement that leaves opponents without meaningful answers.",
    },
  ],
};