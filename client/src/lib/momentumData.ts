// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 10, 2026
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
  generatedDate: "2026-11-10",
  date: "November 10, 2026",
  gameOfTheNight: "LAL-ATL-20261109",
  topClutchPerformer: {
    player: "LeBron James",
    team: "LAL",
    clutchRating: 94,
    description: "With the Lakers clinging to a two-possession lead in the fourth quarter of a hostile back-to-back road environment, LeBron authored back-to-back orchestration sequences — a pull-up mid-range and a dime to a cutting wing — that surgically ended Atlanta's final comeback window. His 29-10-8 on accumulated fatigue, in a building where the Hawks had every structural advantage, was the night's defining individual clutch statement.",
  },
  games: [
    {
      gameId: "LAL-ATL-20261109",
      teams: { home: "ATL", away: "LAL" },
      finalScore: { home: 114, away: 124 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:14",
          description: "Trae Young strings together back-to-back pull-up threes as Atlanta builds its largest lead of the night, forcing a Lakers timeout and silencing the Crypto.com road contingent momentarily.",
          runScore: "12-2",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:41",
          description: "LeBron James personally orchestrates a 9-0 Lakers burst — a transition dunk, a drive-and-kick three, and a coast-to-coast finish — that erases Atlanta's halftime advantage and gives Los Angeles its first lead since the opening minutes.",
          runScore: "9-0",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "4:52",
          description: "Atlanta cuts the deficit to four on a DeJounte Murray runner and a Trae steal-and-score, triggering a State Farm Arena crescendo that briefly threatened to flip momentum back toward the Hawks.",
          runScore: "6-0",
          momentum: "home",
          keyPlayer: "DeJounte Murray",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "2:18",
          description: "LeBron responds immediately with a mid-range pull-up and an Anthony Davis post conversion, restoring the Lakers' eight-point cushion and effectively closing Atlanta's window for good.",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "LeBron James",
          team: "LAL",
          description: "Isolation pull-up jumper from the elbow to extend the lead to six with 4:10 remaining — the Hawks had just made it a two-possession game and the arena was at full volume.",
          timeRemaining: "4:10",
          winProbabilityShift: 18,
        },
        {
          player: "Trae Young",
          team: "ATL",
          description: "Stepback three from the logo that cut the deficit to four with 4:52 remaining, momentarily reigniting the comeback and sending State Farm Arena into frenzy.",
          timeRemaining: "4:52",
          winProbabilityShift: -11,
        },
        {
          player: "Anthony Davis",
          team: "LAL",
          description: "Sealed a smaller Hawks defender in the post and converted a left-hand hook with 2:05 remaining, pushing the lead back to eight and functionally ending Atlanta's mathematical hope.",
          timeRemaining: "2:05",
          winProbabilityShift: 22,
        },
      ],
      narrative: "This was the night's most compelling game precisely because nothing about its conditions favored Los Angeles — second night of a back-to-back, hostile road environment, and a Hawks offense that entered the fourth quarter within two possessions. LeBron's fourth-quarter authority was the difference between a stunning road loss and an emphatic statement win, and the manner in which he absorbed Atlanta's final surge and methodically extinguished it is the clearest evidence yet that the Lakers' closing infrastructure is operating at an elite tier. LAL at 10-2 on this kind of performance is a legitimately frightening West contender.",
    },
    {
      gameId: "SAS-PHX-20261109",
      teams: { home: "PHX", away: "SAS" },
      finalScore: { home: 96, away: 122 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:22",
          description: "Stephon Castle orchestrates San Antonio's opening 14-4 run, dissecting Phoenix's defensive rotations with pace manipulation and two successive pick-and-roll finishes that immediately established the Spurs' structural superiority.",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "7:05",
          description: "Phoenix's reserves briefly tighten the gap with a 10-3 run fueled by transition buckets, cutting the Spurs' lead to single digits and offering a momentary mirage of a competitive game.",
          runScore: "10-3",
          momentum: "home",
          keyPlayer: "Grayson Allen",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "4:30",
          description: "Castle and Jeremy Sochan combine for 11 consecutive Spurs points that obliterate Phoenix's flicker of hope, pushing the lead past 20 and triggering a Suns defensive timeout that produced no structural remedy.",
          runScore: "11-2",
          momentum: "away",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "San Antonio arrived in the desert without a welcoming committee and promptly dismantled the architecture of a Durant-less Suns team that had no first-option solution to Castle's pace distortion. The 26-point final margin was not a function of one catastrophic quarter — the Spurs outscored Phoenix in all four — which speaks to a comprehensive structural mismatch that the Suns' front office cannot solve with roster shuffling. At 9-2, San Antonio is operating as the West's most dangerous road team, and Monday's performance was the most convincing evidence yet that this is not a small-sample anomaly.",
    },
    {
      gameId: "NOP-GSW-20261109",
      teams: { home: "GSW", away: "NOP" },
      finalScore: { home: 138, away: 87 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:11",
          description: "Stephen Curry hits three consecutive threes in a 90-second stretch to open a 16-4 Golden State run, establishing Chase Center's offensive frequency at a level New Orleans had no structural mechanism to match.",
          runScore: "16-4",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "6:33",
          description: "Curry adds two more threes in the second quarter to push the Warriors' lead past 30 at the half, completing a first-half offensive display that functionally ended the game as a competitive event.",
          runScore: "18-6",
          momentum: "home",
          keyPlayer: "Stephen Curry",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "10:00",
          description: "Golden State's reserves maintain a 45-plus point cushion as Curry and the starters take their seats, with the fourth quarter serving as a prolonged curtain call rather than a competitive basketball period.",
          runScore: "12-8",
          momentum: "home",
          keyPlayer: "Moses Moody",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "The 51-point margin is the season's widest and Chase Center's most complete offensive exhibition, but the more important data point is how quickly Curry's opening three-barrage removed any possibility of a competitive arc. New Orleans, operating on the second night of a back-to-back without a functional Zion, was structurally unprepared for Golden State's pace ceiling, and the game's progression was less a momentum story than a clinical demonstration of what this Warriors offense looks like operating without resistance. GSW's home environment at this Curry level remains the West's most forbidding offensive context.",
    },
    {
      gameId: "WAS-DET-20261109",
      teams: { home: "DET", away: "WAS" },
      finalScore: { home: 122, away: 111 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "2:50",
          description: "Jalen Duren establishes interior dominance early with back-to-back put-backs and a pick-and-roll finish, triggering a 12-3 Detroit run that sets the game's physical tone before Washington can establish any frontcourt countermeasure.",
          runScore: "12-3",
          momentum: "home",
          keyPlayer: "Jalen Duren",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:20",
          description: "Washington's guards string together a 9-2 run to cut the Detroit lead to single digits, briefly injecting competitiveness into a game the Pistons had appeared to have firmly in hand.",
          runScore: "9-2",
          momentum: "away",
          keyPlayer: "Bilal Coulibaly",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "1:45",
          description: "Duren responds to Washington's surge with a dominant three-possession sequence — a mid-range jumper, a defensive rebound and outlet, and a blocked shot leading to a fastbreak — that restores the Pistons' double-digit cushion and ends the Wizards' competitive window.",
          runScore: "10-3",
          momentum: "home",
          keyPlayer: "Jalen Duren",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Detroit needed this bounce-back after Sunday's narrow Lakers loss, and Duren's 24-16-4 delivered the kind of interior authority that makes the Pistons' home record an increasingly credible organizational statement. Washington's midgame run created a moment of genuine drama, but Duren's response — personal and immediate — illustrated the gap between a developing contender and a team still searching for structural identity. At 7-3, Detroit's young season is building exactly the kind of layered credibility that earns East playoff seeding conversations.",
    },
    {
      gameId: "MEM-TOR-20261109",
      teams: { home: "TOR", away: "MEM" },
      finalScore: { home: 102, away: 118 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "8:14",
          description: "Toronto uses a balanced 13-4 run to seize a first-half lead behind Scottie Barnes's interior finishes and perimeter passing, creating genuine competitive drama at Scotiabank Arena.",
          runScore: "13-4",
          momentum: "home",
          keyPlayer: "Scottie Barnes",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "5:33",
          description: "Ja Morant, playing through wrist soreness, engineers a methodical 14-4 Memphis run to open the second half — four assists, two finishes at the rim — that erases Toronto's halftime lead and permanently shifts the game's control structure.",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Ja Morant",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "6:00",
          description: "Memphis extends the lead to 16 with a Morant-to-Jaren Jackson Jr. pick-and-roll sequence that Toronto's defense had no answer for, rendering the final six minutes academic.",
          runScore: "10-4",
          momentum: "away",
          keyPlayer: "Ja Morant",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Toronto's first-half competitiveness was genuine and Barnes gave the Raptors' building real energy, but Morant's third-quarter takeover was the most decisive individual sequence of a night filled with star performances. The Grizzlies' road record at 7-3 is built on exactly these kinds of second-half control shifts, where Morant's creation ability simply outpaces whatever defensive architecture opposing teams have constructed. Toronto's structural inability to defend elite point guard creation in the halfcourt remains the desk's primary ceiling concern for this Raptors group.",
    },
    {
      gameId: "DEN-HOU-20261109",
      teams: { home: "HOU", away: "DEN" },
      finalScore: { home: 110, away: 100 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "4:22",
          description: "Denver briefly seizes control with a 10-2 run fueled by Nikola Jokic post touch and secondary ball movement, taking a five-point halftime lead and threatening to neutralize Houston's home-court energy.",
          runScore: "10-2",
          momentum: "away",
          keyPlayer: "Nikola Jokic",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:15",
          description: "Alperen Sengun counters Jokic's output with a dominant 11-point personal third quarter — three post finishes, an elbow jumper, and a free throw pair — triggering a 15-5 Toyota Center run that flips the lead and deflates Denver's spacing structure.",
          runScore: "15-5",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "5:44",
          description: "Houston's depth extends the lead to 13 through Amen Thompson's transition finishing and two Sengun free throws, pushing Denver past the threshold of a realistic comeback and cementing the bounce-back result.",
          runScore: "11-4",
          momentum: "home",
          keyPlayer: "Alperen Sengun",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "The Jokic-Sengun matchup was the night's most tactically layered center battle, and the fact that Denver held the advantage at halftime made Houston's third-quarter reversal the more impressive organizational statement. Sengun's second-half assertiveness — his willingness to go directly at Jokic's switching defensive schemes with a diverse post arsenal — was the most complete individual performance from the young center in a home environment this season. HOU at 8-3 with this frontcourt ceiling is the West's most credible dark-horse contender.",
    },
    {
      gameId: "CLE-CHA-20261109",
      teams: { home: "CHA", away: "CLE" },
      finalScore: { home: 124, away: 112 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:30",
          description: "Charlotte explodes out of the first-quarter break with a 16-6 run, with LaMelo Ball threading three consecutive assist sequences that the Cavaliers' zone had no answer for inside Spectrum Center.",
          runScore: "16-6",
          momentum: "home",
          keyPlayer: "LaMelo Ball",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:00",
          description: "Cleveland mounts a 12-4 third-quarter response, with Darius Garland attacking Charlotte's switches and trimming the deficit to single digits — the Cavaliers' most credible competitive window of the night.",
          runScore: "12-4",
          momentum: "away",
          keyPlayer: "Darius Garland",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "8:30",
          description: "LaMelo Ball orchestrates a closing 14-6 Charlotte run that buries Cleveland's comeback attempt, blending drive-and-kick threes with two personal finishes to restore the Hornets' comfortable cushion.",
          runScore: "14-6",
          momentum: "home",
          keyPlayer: "LaMelo Ball",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Charlotte's 12-point home win over Cleveland was Monday's most understated result — a Hornets team at 4-7 that desperately needed organizational affirmation found it in LaMelo Ball's orchestration clarity and a home crowd that responded to every swing. The Cavaliers' midgame threat was real and Garland's third-quarter burst created a genuine competitive window, but LaMelo's fourth-quarter closing sequence demonstrated a level of situational control that Charlotte has been building toward all season. This result does not change Cleveland's standing materially, but for the Hornets it is exactly the kind of win that young teams store as reference-point confidence.",
    },
    {
      gameId: "IND-DAL-20261109",
      teams: { home: "DAL", away: "IND" },
      finalScore: { home: 125, away: 122 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:45",
          description: "Indiana surges ahead on a 13-3 Pacers run fueled by Tyrese Haliburton's pick-and-roll creativity, pushing the upset-minded visitors to a seven-point halftime lead at American Airlines Center.",
          runScore: "13-3",
          momentum: "away",
          keyPlayer: "Tyrese Haliburton",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "4:00",
          description: "Dallas responds with a 16-5 third-quarter run, Luka Dončić reasserting control through isolation sequences and two consecutive step-back threes that erase Indiana's lead and swing the building's energy decisively.",
          runScore: "16-5",
          momentum: "home",
          keyPlayer: "Luka Dončić",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:28",
          description: "Haliburton hits a contested pull-up three to cut the Dallas lead to one, setting the stage for a frantic final 90 seconds that will define this game's legacy in Monday's larger narrative.",
          runScore: "7-3",
          momentum: "away",
          keyPlayer: "Tyrese Haliburton",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Luka Dončić",
          team: "DAL",
          description: "Step-back three from the left wing over Haliburton's close-out with 48 seconds remaining to push the Dallas lead to four — the game's single most decisive play after Indiana had closed to within one.",
          timeRemaining: "0:48",
          winProbabilityShift: 31,
        },
        {
          player: "Tyrese Haliburton",
          team: "IND",
          description: "Pull-up three with 1:28 remaining to cut the deficit to one and swing the building's tension to its peak — Indiana's most threatening clutch moment in a game they led for three quarters.",
          timeRemaining: "1:28",
          winProbabilityShift: -19,
        },
        {
          player: "Kyrie Irving",
          team: "DAL",
          description: "Drove baseline and drew a foul with 22 seconds left, converting both free throws to push the lead to six and functionally seal the Dallas win after Indiana had made it a one-possession game.",
          timeRemaining: "0:22",
          winProbabilityShift: 24,
        },
      ],
      narrative: "This was the night's most dramatically complete game — a three-point home survival against an Indiana team that led for three full quarters and absolutely should have stolen this result at American Airlines Center. Haliburton's orchestration gave the Pacers every structural advantage, and the final 90 seconds were as tensely constructed as anything on Monday's slate, with lead changes lurking on every possession until Luka's step-back three broke Indiana's spirit. Dallas at 7-4 survives, but the Pacers at 3-8 will carry the sting of this near-miss as the most instructive loss of their difficult early season.",
    },
  ],
};