// Momentum Engine — Real-time narrative momentum shifts
// Last updated: October 6, 2026
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
  generatedDate: "2026-10-06",
  date: "October 6, 2026",

  gameOfTheNight: "PHX-DET-20261005",

  topClutchPerformer: {
    player: "Cade Cunningham",
    team: "DET",
    clutchRating: 91,
    description:
      "Cunningham authored the night's defining clutch sequence, engineering a go-ahead possession in the final two minutes against Phoenix and converting a pull-up mid-range jumper with the shot clock expiring to seal Detroit's two-point survival. In a night dominated by blowouts, he was the only player forced to perform under genuine win-or-lose pressure — and he delivered.",
  },

  games: [
    {
      gameId: "LAL-SAC-20261005",
      teams: { home: "SAC", away: "LAL" },
      finalScore: { home: 103, away: 127 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:22",
          description:
            "LeBron James orchestrates a 9-0 Lakers run to close the first quarter, converting back-to-back and-one opportunities that immediately establish Los Angeles's physical tone on the road.",
          runScore: "9-0 LAL",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "7:41",
          description:
            "Sacramento responds with a 12-4 spurt to briefly close within five, energizing the Golden 1 crowd and threatening to make a game of it before halftime.",
          runScore: "12-4 SAC",
          momentum: "home",
          keyPlayer: "Domantas Sabonis",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "5:10",
          description:
            "Los Angeles detonates a 16-4 third-quarter run that functionally ends the contest. LeBron and Austin Reaves combine for 14 of those points, pushing the lead past 20 and draining every ounce of competitive oxygen from the building.",
          runScore: "16-4 LAL",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "9:00",
          description:
            "Reserves inherit a 24-point advantage, and both benches play out the final frame in a comfortable garbage-time rotation that confirms the outcome was decided well before the fourth.",
          runScore: "Even Q4",
          momentum: "away",
          keyPlayer: "Austin Reaves",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative:
        "This was a road performance of genuine authority. The Lakers arrived in Sacramento as underdogs and spent 36 minutes methodically dismantling a Kings roster that looked undersized, underprepared, and organizationally uncertain in its first competitive night of the post-De'Aaron Fox era. LeBron James set the tone in the first quarter and never relinquished it, and the 16-4 third-quarter eruption was the kind of run that breaks both scoreboards and spirits simultaneously. Sacramento's 0-1 start is not a reason for structural alarm this early, but the 24-point margin against a playoff-caliber road opponent sends a message the Kings' front office will have to sit with.",
    },

    {
      gameId: "NYK-PHI-20261005",
      teams: { home: "PHI", away: "NYK" },
      finalScore: { home: 120, away: 97 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "8:30",
          description:
            "Joel Embiid opens aggressively in the post, scoring eight consecutive Philadelphia points in a three-minute stretch that forces the Knicks into an early timeout and signals this will be a difficult night for New York's interior defense.",
          runScore: "8-0 PHI",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "6:15",
          description:
            "New York executes a disciplined 11-3 second-quarter run, tightening the game to single digits and generating brief optimism from the road contingent at Xfinity Mobile Arena.",
          runScore: "11-3 NYK",
          momentum: "away",
          keyPlayer: "Jalen Brunson",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "1:45",
          description:
            "Philadelphia closes the half with a devastating 13-2 burst, capped by an Embiid fadeaway over two Knick defenders and a Tyrese Maxey transition layup at the buzzer. The 76ers enter halftime ahead by 18 and firmly in control.",
          runScore: "13-2 PHI",
          momentum: "home",
          keyPlayer: "Tyrese Maxey",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:00",
          description:
            "New York never threatens again. Philadelphia's defensive rotations smother the Knicks' half-court sets, and the lead expands to 25 before both coaching staffs empty their benches.",
          runScore: "14-6 PHI",
          momentum: "home",
          keyPlayer: "Joel Embiid",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative:
        "Philadelphia used the NBA TV spotlight the way elite organizations are supposed to — as a platform for a statement, not a test. Joel Embiid imposed his will from the opening possession, and the Knicks' brief second-quarter flirtation with a comeback was answered so swiftly and violently that New York never found footing again. The 13-2 closing burst before halftime was the defining sequence: it arrived precisely when the Knicks had generated momentum, and it didn't just stop their run — it reversed it with interest. For a Sixers franchise that has weathered organizational turbulence, a 23-point home win over a conference rival on national television is the kind of result that recalibrates external perception entering a meaningful regular season.",
    },

    {
      gameId: "MIN-MIL-20261005",
      teams: { home: "MIL", away: "MIN" },
      finalScore: { home: 97, away: 116 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:00",
          description:
            "Milwaukee opens at home with evident energy, building a 7-point first-quarter lead behind Giannis Antetokounmpo's early aggression and a Fiserv Forum crowd primed for preseason opening night.",
          runScore: "10-3 MIL",
          momentum: "home",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "9:20",
          description:
            "Anthony Edwards ignites a 15-4 Minnesota run that swings the entire game's complexion. Edwards hits back-to-back pull-up threes in transition and punctuates the burst with a two-handed fastbreak dunk that silences the home crowd completely.",
          runScore: "15-4 MIN",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:45",
          description:
            "Milwaukee briefly rallies to cut the deficit to seven on a pair of Giannis finishes in the lane, but Minnesota's defensive pressure extinguishes the threat within three minutes of game time.",
          runScore: "8-3 MIL",
          momentum: "home",
          keyPlayer: "Giannis Antetokounmpo",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "3:10",
          description:
            "Minnesota responds to Milwaukee's third-quarter push with a 12-3 counter-run, expanding the lead back to 16 and confirming that the Bucks' offense has no answer for Minnesota's switching, ball-pressure defense when Edwards is locked in.",
          runScore: "12-3 MIN",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative:
        "Anthony Edwards walked into Giannis's home opener and took over the building in the second quarter — and that is the entire story of this game. Milwaukee's 7-point first-quarter lead felt like a comfortable home advantage; the 15-4 Edwards-engineered run that dissolved it felt like a weather event. The Bucks recovered enough pride to cut it to seven midway through the third, which made Minnesota's immediate 12-3 response all the more psychologically damaging. A 19-point road win at Fiserv Forum as a 3.5-point underdog is the kind of result that forces league-wide recalibration of where the Timberwolves actually sit among the West's elite, regardless of whatever roster architecture questions followed them into camp.",
    },

    {
      gameId: "MEM-ATL-20261005",
      teams: { home: "ATL", away: "MEM" },
      finalScore: { home: 123, away: 132 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "5:30",
          description:
            "Atlanta races out of the gate behind a 10-2 opening run, State Farm Arena immediately alive with the kind of energy a Hawks team fighting for play-in positioning desperately needs to harness.",
          runScore: "10-2 ATL",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "significant",
        },
        {
          quarter: "Q2",
          timestamp: "8:00",
          description:
            "Ja Morant engineers a 17-6 Memphis run across the first six minutes of the second quarter, slashing through Atlanta's defensive gaps in transition and converting four straight layups before the Hawks call timeout.",
          runScore: "17-6 MEM",
          momentum: "away",
          keyPlayer: "Ja Morant",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:45",
          description:
            "Atlanta claws back into it with a disciplined 13-5 third-quarter run, tying the game at 94 and generating the night's longest sustained home crowd moment.",
          runScore: "13-5 ATL",
          momentum: "home",
          keyPlayer: "Dejounte Murray",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "7:30",
          description:
            "Memphis separates for good with a decisive 18-6 fourth-quarter burst over a seven-minute span. Morant and Desmond Bane combine for 14 of those points, and Atlanta's defensive breakdowns in the final frame expose the organizational concern that trails this franchise into the regular season.",
          runScore: "18-6 MEM",
          momentum: "away",
          keyPlayer: "Ja Morant",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative:
        "This was the night's most narratively complete game — a genuine back-and-forth contest that reached parity in the third quarter before Memphis pulled away with a fourth-quarter run of real authority. Atlanta showed enough in the first three quarters to suggest they can compete, but their defensive organization collapsed at exactly the wrong moment when Morant and Bane got downhill in the fourth. The 18-6 closing run is a legitimate red flag for a Hawks team whose regular-season survival depends entirely on defensive improvement that isn't yet visible in live competition. Memphis departs Atlanta at 1-0 having confirmed the offensive firepower their camp has projected — and they did it on the road against a crowd that was genuinely invested.",
    },

    {
      gameId: "PHX-DET-20261005",
      teams: { home: "DET", away: "PHX" },
      finalScore: { home: 109, away: 107 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "7:00",
          description:
            "Phoenix opens with crisp half-court execution, building a 9-point first-quarter advantage that reflects the Suns' offensive sophistication even within an unsettled roster construction.",
          runScore: "9-2 PHX",
          momentum: "away",
          keyPlayer: "Devin Booker",
          impact: "notable",
        },
        {
          quarter: "Q2",
          timestamp: "5:30",
          description:
            "Cade Cunningham drives Detroit's 14-5 second-quarter answer, attacking the Suns' switching defense with a series of pull-up mid-range jumpers and threading passes into the short roll to manufacture easy buckets.",
          runScore: "14-5 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "9:00",
          description:
            "Phoenix retakes the lead with an 11-4 third-quarter burst, Devin Booker finding his rhythm from the mid-post and converting consecutive step-back twos over Detroit's closing defender.",
          runScore: "11-4 PHX",
          momentum: "away",
          keyPlayer: "Devin Booker",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:10",
          description:
            "Detroit answers Phoenix's third-quarter takeover with a gritty 8-2 run to open the fourth, and the game enters its final three minutes tied at 105 — setting the stage for the night's only genuine clutch sequence.",
          runScore: "8-2 DET",
          momentum: "home",
          keyPlayer: "Cade Cunningham",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "Cade Cunningham",
          team: "DET",
          description:
            "With the game tied at 105 and the shot clock winding down, Cunningham creates separation off a Jalen Duren ball screen and buries a pull-up mid-range jumper from the elbow — his signature shot — to give Detroit a 107-105 lead with 1:47 remaining.",
          timeRemaining: "1:47",
          winProbabilityShift: 28,
        },
        {
          player: "Devin Booker",
          team: "PHX",
          description:
            "Booker answers immediately, isolating on the wing and converting a smooth step-back three-point attempt — except the shot clips the back iron and caroms long, swinging possession back to Detroit at a pivotal moment.",
          timeRemaining: "1:22",
          winProbabilityShift: -19,
        },
        {
          player: "Cade Cunningham",
          team: "DET",
          description:
            "Cunningham draws a foul on the ensuing Detroit possession and calmly converts both free throws, extending the lead to four with 48 seconds remaining. Phoenix's subsequent possession ends in a contested Booker runner that draws iron, and Detroit secures the rebound to seal the result.",
          timeRemaining: "0:48",
          winProbabilityShift: 34,
        },
      ],
      narrative:
        "Five games into the preseason slate and this was the only one that required the final two minutes to decide — which made it, by definition, the most important competitive data point of the night. Cade Cunningham did not wilt when the game was on a knife's edge; he produced two straight clutch conversions, including the pull-up elbow jumper that is already becoming his signature pressure-moment shot. Detroit winning by two over a Phoenix team with genuine offensive talent is a meaningful early organizational signal for a Pistons franchise that needs its young core to demonstrate winning instincts, not just statistical production. The Suns absorb an 0-1 start that confirms, rather than creates, the uncertainty surrounding their rebuild entering 2026-27.",
    },
  ],
};