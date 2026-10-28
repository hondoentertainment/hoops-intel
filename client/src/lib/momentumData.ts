// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 28, 2026
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
  generatedDate: "2026-10-28",
  date: "October 28, 2026",
  gameOfTheNight: "BRK-BOS-20261027",
  topClutchPerformer: {
    player: "Jayson Tatum",
    team: "BOS",
    clutchRating: 94,
    description: "Tatum authored the most high-leverage individual performance of the night, scoring 12 of Boston's 16 overtime points and burying the go-ahead jumper with 38 seconds remaining to prevent a historically embarrassing loss to a winless Brooklyn squad. His command in the extra period — absorbing pressure, manufacturing his own shot, and converting at the line — was a reminder that Boston's ceiling runs through him entirely.",
  },
  games: [
    {
      gameId: "BRK-BOS-20261027",
      teams: { home: "BOS", away: "BRK" },
      finalScore: { home: 125, away: 124 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "3:41",
          description: "Brooklyn pieced together a 12-3 run to seize their first double-digit lead of the game, exposing Boston's switching coverage and exploiting the Celtics' sluggish transition defense. The Nets' bench unit outworked Boston's starters for nearly five straight minutes.",
          runScore: "12-3",
          momentum: "away",
          keyPlayer: "Nets Bench Unit",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "6:22",
          description: "Boston answered the Nets' second-half surge with a 9-0 run anchored by back-to-back Tatum mid-range jumpers and a Jaylen Brown and-one that reawakened TD Garden. Brooklyn's lead evaporated in under two minutes of game clock.",
          runScore: "9-0",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "significant",
        },
        {
          quarter: "OT",
          timestamp: "1:02",
          description: "Tatum's pull-up jumper from the elbow with 38 seconds remaining gave Boston the lead for good after Brooklyn had tied the game at 123. The possession before, Tatum had forced a difficult contested two-pointer out of the Nets' best offensive initiator to keep the deficit at one.",
          runScore: "5-1",
          momentum: "home",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Jayson Tatum",
          team: "BOS",
          description: "Pull-up elbow jumper over closing Brooklyn defender — go-ahead basket with 38 seconds left in overtime, putting Boston up 125-123 after trailing for much of the fourth quarter.",
          timeRemaining: "0:38 OT",
          winProbabilityShift: 38,
        },
        {
          player: "Jayson Tatum",
          team: "BOS",
          description: "Back-to-back free throws to extend the lead to two with 14 seconds remaining, effectively icing a game Boston had nearly sleepwalked out of.",
          timeRemaining: "0:14 OT",
          winProbabilityShift: 22,
        },
        {
          player: "Brooklyn Guard",
          team: "BRK",
          description: "Contested corner three at the buzzer to tie at 109 and force overtime, converting off a broken-play scramble that stunned TD Garden and kept Brooklyn's improbable upset bid alive.",
          timeRemaining: "0:00 Q4",
          winProbabilityShift: -29,
        },
      ],
      narrative: "This game was a slow-motion organizational alarm for Boston — the Celtics surrendered 124 points to the East's most roster-depleted team and needed overtime heroics to avoid the kind of loss that reshapes early-season narratives. Tatum's overtime brilliance papered over real defensive concerns, but the box score will haunt Brad Stevens's film sessions for days. Brooklyn's performance is quietly significant for their rebuild: playing a championship contender to the final possession with a 0-4 roster is evidence that their young core is developing competitive toughness ahead of schedule.",
    },
    {
      gameId: "POR-LAL-20261027",
      teams: { home: "LAL", away: "POR" },
      finalScore: { home: 129, away: 136 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:15",
          description: "Portland opened a 14-4 run in the second quarter to flip a six-point Lakers lead into a four-point Blazers advantage. Henderson orchestrated every major possession of the run, using his pick-and-roll reads to attack a Lakers defense that had no answer for his pace.",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Scoot Henderson",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "2:30",
          description: "The Lakers clawed back to within three on a 10-2 third-quarter run fueled by interior pressure, briefly giving Crypto.com Arena reason to believe the home team could neutralize Portland's pace-and-space attack.",
          runScore: "10-2",
          momentum: "home",
          keyPlayer: "Lakers Frontcourt",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "7:00",
          description: "Portland detonated a 17-6 fourth-quarter run over the first five minutes of the final period to blow the game open for good. Henderson posted 11 points and three assists in that stretch alone — a virtuoso closing statement that ended the contest as a competitive affair.",
          runScore: "17-6",
          momentum: "away",
          keyPlayer: "Scoot Henderson",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Portland's road demolition of a 3-1 Lakers team is the young season's most seismic result, and Scoot Henderson delivered it with the authority of someone who has been building toward this moment since his draft night. The Blazers' fourth quarter was pure execution — they never panicked when the Lakers cut the lead, and Henderson responded to every home run with a surgical possession that removed doubt. At 3-0, Portland is no longer a curiosity; they are a genuine Western Conference problem that contenders must now prepare for.",
    },
    {
      gameId: "SAC-SAS-20261027",
      teams: { home: "SAS", away: "SAC" },
      finalScore: { home: 130, away: 103 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:00",
          description: "San Antonio's defensive pressure materialized immediately — Castle's first two steals of the game came in the opening four minutes, generating 9 fast-break points before Sacramento's offense could find its footing. The Spurs led by 12 after the first quarter.",
          runScore: "16-4",
          momentum: "home",
          keyPlayer: "Stephon Castle",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:00",
          description: "Sacramento mounted a brief 10-2 third-quarter run to trim the deficit to 14, but the Spurs responded immediately with a 12-3 counter-run that functionally ended the competitive portion of the evening. Castle's fourth steal disrupted the Kings' primary ball-handler and led directly to a transition dunk.",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Stephon Castle didn't just beat Sacramento — he dismantled them, turning four steals into the central storyline of a 27-point home rout that exposed the Kings' half-court offense as the West's most fragile system right now. San Antonio's defensive blueprint was methodical and suffocating: hold SAC under 40% from the field, generate chaos at the point of attack, and convert disruption into transition points at a rate the Kings simply could not absorb. At 0-4, Sacramento's organizational identity — built entirely around playoff ambition — is in genuine crisis, and Tuesday's tape will be painful viewing for their coaching staff.",
    },
    {
      gameId: "DET-NYK-20261027",
      teams: { home: "NYK", away: "DET" },
      finalScore: { home: 111, away: 97 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:30",
          description: "Detroit used their transition offense to build a seven-point second-quarter lead, exploiting New York's perimeter rotations and turning three Knicks turnovers into 11 fast-break points. MSG went quiet as the Pistons' first road test showed genuine promise.",
          runScore: "11-4",
          momentum: "away",
          keyPlayer: "Detroit Guards",
          impact: "notable",
        },
        {
          quarter: "Q4",
          timestamp: "8:00",
          description: "Towns took over completely in the fourth quarter, posting 14 points and 6 rebounds in the final period as New York's 34-19 fourth-quarter advantage obliterated Detroit's slim lead and turned MSG into a celebration. The interior mismatch was total and relentless.",
          runScore: "34-19",
          momentum: "home",
          keyPlayer: "Karl-Anthony Towns",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Karl-Anthony Towns delivered the performance MSG needed — not just a stat line, but a fourth-quarter statement that confirmed his interior dominance as New York's most reliable closing weapon in a moment of organizational doubt. The Knicks entered this game having lost three straight and facing real questions about their identity, and Towns answered with 14 points in the final period that turned a tightly contested game into a emphatic 14-point final. Detroit falls to 3-1 with their first meaningful road adversity of the season, but the Pistons' competitive first half in a hostile environment is data worth filing: this young team is not intimidated by big stages.",
    },
  ],
};