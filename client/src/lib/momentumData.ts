// Momentum Engine — Real-time narrative momentum shifts
// Last updated: November 7, 2026
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
  generatedDate: "2026-11-07",
  date: "November 7, 2026",
  gameOfTheNight: "WSH-ATL-20261106",
  topClutchPerformer: {
    player: "Trae Young",
    team: "ATL",
    clutchRating: 97,
    description: "Young's 38-14-5 in a 139-132 barnburner was the night's most dominant individual clutch effort. With Washington cutting the deficit to three in the final two minutes, Young responded with back-to-back pull-up jumpers and a dagger assist to seal the win — the kind of late-game orchestration that only a handful of players in the league can replicate.",
  },
  games: [
    {
      gameId: "WSH-ATL-20261106",
      teams: { home: "ATL", away: "WSH" },
      finalScore: { home: 139, away: 132 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "5:14",
          description: "Washington went on a 14-4 run to erase Atlanta's early double-digit lead, with Jordan Poole hitting back-to-back threes to knot the game at 54. The Wizards' aggression forced three Hawks turnovers in a two-minute span and completely shifted the building's energy.",
          runScore: "14-4",
          momentum: "away",
          keyPlayer: "Jordan Poole",
          impact: "significant",
        },
        {
          quarter: "Q3",
          timestamp: "3:28",
          description: "Trae Young answered Washington's halftime adjustments with a devastating 11-2 personal run — four straight Hawks possessions where Young either scored or assisted the basket. Atlanta rebuilt a 13-point cushion and looked ready to pull away.",
          runScore: "11-2",
          momentum: "home",
          keyPlayer: "Trae Young",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "2:07",
          description: "Poole's fourth three-pointer of the night and a Wizards defensive stop cut the Atlanta lead to three with just over two minutes remaining, turning State Farm Arena briefly anxious. It was the closest Washington had been since the second quarter.",
          runScore: "8-2",
          momentum: "away",
          keyPlayer: "Jordan Poole",
          impact: "significant",
        },
      ],
      clutchPlays: [
        {
          player: "Trae Young",
          team: "ATL",
          description: "Pull-up mid-range jumper over the outstretched Poole contest to push the lead back to five with 1:44 remaining — a shot Young called his own number on despite having an open cutter available.",
          timeRemaining: "1:44",
          winProbabilityShift: 18,
        },
        {
          player: "Trae Young",
          team: "ATL",
          description: "Penetration-and-kick to Bogdan Bogdanovic in the corner for a three that effectively closed the door, extending the lead to eight with 52 seconds left.",
          timeRemaining: "0:52",
          winProbabilityShift: 24,
        },
        {
          player: "Jordan Poole",
          team: "WSH",
          description: "Step-back three from the left wing over a closing defender sliced the lead to three and forced Atlanta's timeout — Poole's 31st point of the night and his most important basket.",
          timeRemaining: "2:07",
          winProbabilityShift: -14,
        },
      ],
      narrative: "This game had the feel of a heavyweight bout where both fighters simply refused to go down. Trae Young's 38-point, 14-assist masterclass was the night's most statistically extraordinary performance, but Washington's refusal to fold — Jordan Poole dragging them back into it three separate times — made this far more uncomfortable for Atlanta than the final margin suggests. Young's closing sequence, two straight possessions where he manufactured baskets from nothing, was the difference between a seven-point win and a stunning Wizards upset.",
    },
    {
      gameId: "POR-LAL-20261106",
      teams: { home: "LAL", away: "POR" },
      finalScore: { home: 124, away: 118 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "7:02",
          description: "Portland's Scoot Henderson imposed himself on the game's middle portion with a 9-2 personal run that flipped a seven-point Lakers lead into a two-point Blazers advantage. The Crypto.com crowd went quiet as Henderson's drives found no answers from the LAL second unit.",
          runScore: "9-2",
          momentum: "away",
          keyPlayer: "Scoot Henderson",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "4:33",
          description: "Portland tied the game at 112 on a Henderson floater, the fourth lead change of the fourth quarter. This was the moment the desk identified as the game's true inflection point — from here, it became a referendum on LeBron James's closing authority.",
          runScore: "6-2",
          momentum: "away",
          keyPlayer: "Scoot Henderson",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "1:58",
          description: "LeBron's final ten-point closing sequence began here — a turnaround fadeaway, a drive-and-finish through contact, and two free throws that rebuilt a six-point cushion the Blazers could not overcome. James looked like a man who had been in this exact moment a thousand times.",
          runScore: "10-4",
          momentum: "home",
          keyPlayer: "LeBron James",
          impact: "game-changing",
        },
      ],
      clutchPlays: [
        {
          player: "LeBron James",
          team: "LAL",
          description: "Turnaround fadeaway over a Henderson contest from the right elbow — the shot went up with Portland defenders draped on him and fell clean, breaking the 112-112 tie and giving LAL the lead for good.",
          timeRemaining: "1:58",
          winProbabilityShift: 21,
        },
        {
          player: "LeBron James",
          team: "LAL",
          description: "Drive baseline, absorb contact from two defenders, and finish the and-one to push the lead to five. Portland's foul trouble compounded the damage, and the free throw sealed a seven-point swing in under ninety seconds.",
          timeRemaining: "1:12",
          winProbabilityShift: 19,
        },
        {
          player: "Scoot Henderson",
          team: "POR",
          description: "Floater in the lane to tie the game at 112 — a crafty left-hand finish that showcased exactly why Portland's West-title credibility was drawing serious attention before this night.",
          timeRemaining: "4:33",
          winProbabilityShift: -16,
        },
      ],
      narrative: "Portland did everything right for three-and-a-half quarters, and Henderson's performance validated every projection the desk made about his road ceiling. But LeBron James in closing time is a different organism than LeBron James in transition — methodical, deliberate, and utterly unafraid. His ten-point fourth-quarter surge wasn't frantic; it was surgical. The Blazers' first credible setback hurts less than it might have because they proved they can compete at this level, but the loss belongs entirely to LeBron refusing to let it go any other way.",
    },
    {
      gameId: "PHI-CLE-20261106",
      teams: { home: "CLE", away: "PHI" },
      finalScore: { home: 119, away: 95 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "3:44",
          description: "Cleveland opened the game with a 15-4 run that set the entire tone — Evan Mobley's first-quarter activity on both ends was immediately suffocating for Philadelphia's offense, and the 76ers never recovered their expected rhythm.",
          runScore: "15-4",
          momentum: "home",
          keyPlayer: "Evan Mobley",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "6:11",
          description: "Philadelphia's most sustained push came in the opening minutes of the third quarter, trimming the deficit to nine on consecutive Embiid post-ups. For a brief window, a comeback felt plausible. Mobley's back-to-back shot blocks ended the conversation.",
          runScore: "8-3",
          momentum: "away",
          keyPlayer: "Joel Embiid",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "2:19",
          description: "Cleveland's response to Philadelphia's third-quarter push was a crushing 16-5 run that buried the 76ers for good. Darius Garland's four assists in a four-minute stretch facilitated a half-dozen point-blank opportunities, and the Rocket Arena crowd sensed the upset was now inevitable.",
          runScore: "16-5",
          momentum: "home",
          keyPlayer: "Darius Garland",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Cleveland's 24-point dismantling of Philadelphia was not a fluke — it was a systematic tactical demolition that began with Evan Mobley's decision to make Joel Embiid's night as miserable as possible and never relented. The 76ers' defensive performance, surrendering 119 points to a then-4-4 team, demands serious interrogation about whether Philly's defensive identity holds when the bracket tightens. Mobley's 28-14-4 wasn't just an upset-defining stat line; it was a declaration that Cleveland's young center has arrived as a genuine franchise cornerstone.",
    },
    {
      gameId: "OKC-MEM-20261106",
      teams: { home: "MEM", away: "OKC" },
      finalScore: { home: 97, away: 128 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "4:21",
          description: "SGA's first four possessions set the blueprint for the entire game — mid-range, pull-up three, drive-and-finish, and a hockey assist on a corner three. Oklahoma City built a 14-point first-quarter lead and Memphis never threatened to close the gap meaningfully.",
          runScore: "18-6",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "8:33",
          description: "Memphis showed their first sustained resistance of the night, an 8-2 run that briefly tightened the deficit to ten. Ja Morant's two consecutive pull-up jumpers gave the home crowd something to hold onto — but it was the last time Memphis would be within single digits.",
          runScore: "8-2",
          momentum: "home",
          keyPlayer: "Ja Morant",
          impact: "notable",
        },
        {
          quarter: "Q3",
          timestamp: "5:48",
          description: "OKC's 17-4 third-quarter opening run was the game's decisive sequence — a clinical dissection of Memphis's halfcourt defense that pushed the margin past 25 and emptied the FedExForum of any remaining drama. SGA sat the entire fourth quarter.",
          runScore: "17-4",
          momentum: "away",
          keyPlayer: "Shai Gilgeous-Alexander",
          impact: "game-changing",
        },
      ],
      clutchPlays: [],
      narrative: "Oklahoma City's 31-point destruction of Memphis was the season's most authoritative team statement to date, and SGA's 34-point efficiency display was almost secondary to the collective defensive performance that held a home team to 97 points. The Thunder's ability to simultaneously smother Memphis's transition attack and manufacture easy offense through SGA's creation is the blueprint of a genuine title contender. Memphis's third consecutive loss exposes a troubling truth: without a reliable second creator behind Morant, this team has no answer when a disciplined defense takes away their primary option.",
    },
    {
      gameId: "SA-SAC-20261106",
      teams: { home: "SAC", away: "SA" },
      finalScore: { home: 109, away: 124 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "3:17",
          description: "Stephon Castle's 11-point second quarter — the stretch that broke the game open — featured three different shot types on three consecutive possessions, showcasing the full offensive menu of a player who is rapidly outgrowing rookie projections.",
          runScore: "13-5",
          momentum: "away",
          keyPlayer: "Stephon Castle",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "7:44",
          description: "Sacramento's most credible threat of the game was a 10-3 run to open the third, cutting San Antonio's lead to nine. The Kings briefly had the energy of a team capable of a comeback before Castle re-established order with consecutive step-back jumpers.",
          runScore: "10-3",
          momentum: "home",
          keyPlayer: "De'Aaron Fox",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Back-to-back clutch performances on a road trip is the kind of sequence that separates ROY candidates from ROY conversations, and Stephon Castle is now firmly in the former category after 29 points in Sacramento following Wednesday's Dallas game-winner. The Spurs' controlled, pace-dictating style has the hallmarks of a team that knows exactly what it is — and San Antonio's 7-2 record suggests they may know themselves better than any other team in the West right now. Sacramento's 1-8 record, meanwhile, represents a franchise at a crossroads that only a significant roster intervention can redirect.",
    },
    {
      gameId: "BOS-CHA-20261106",
      teams: { home: "CHA", away: "BOS" },
      finalScore: { home: 80, away: 119 },
      swings: [
        {
          quarter: "Q1",
          timestamp: "6:02",
          description: "Jayson Tatum's first-quarter outburst — three made threes in five minutes — established the blowout trajectory before Charlotte's defense could organize any meaningful response. Boston's spacing left Charlotte's wings in impossible closeout situations from the opening tip.",
          runScore: "16-5",
          momentum: "away",
          keyPlayer: "Jayson Tatum",
          impact: "game-changing",
        },
        {
          quarter: "Q2",
          timestamp: "4:55",
          description: "Boston's second-unit extended the lead to 28, the game's largest margin, completely removing any competitive drama from the building. The Celtics' bench depth — the gap between Boston's reserves and Charlotte's starters — was the starkest talent differential on the night's full slate.",
          runScore: "12-4",
          momentum: "away",
          keyPlayer: "Payton Pritchard",
          impact: "significant",
        },
      ],
      clutchPlays: [],
      narrative: "Boston's 39-point dismantling of Charlotte was less a game than an extended argument for the Celtics' status as the East's most complete team. Tatum's four made threes were surgical rather than fortunate — each one came in rhythm, in flow, in a moment where Charlotte's defense had no good answer. The Hornets' 3-7 record is not a sample-size anomaly; it reflects a franchise in the painful middle phase of a rebuild, absorbing losses to elite teams that simply have too many weapons to contain.",
    },
    {
      gameId: "TOR-MIL-20261106",
      teams: { home: "MIL", away: "TOR" },
      finalScore: { home: 107, away: 121 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "9:14",
          description: "Toronto opened the second quarter with a 12-3 run that broke a close early game wide open, with their guard rotation exploiting Milwaukee's switching scheme for a succession of open mid-range looks. The Bucks' 1-8 record crystallized in a two-minute defensive breakdown.",
          runScore: "12-3",
          momentum: "away",
          keyPlayer: "Immanuel Quickley",
          impact: "game-changing",
        },
        {
          quarter: "Q3",
          timestamp: "4:02",
          description: "Milwaukee's most competitive stretch of the game was a 10-4 third-quarter run that cut the deficit to nine and briefly stirred the Fiserv Forum faithful. Toronto responded with a disciplined possession-by-possession response that the Bucks simply had no answer for in the final eight minutes.",
          runScore: "10-4",
          momentum: "home",
          keyPlayer: "Brook Lopez",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Toronto's road win at Milwaukee was quietly one of the night's more telling results — the Raptors' controlled, defensively disciplined performance exposed the Bucks as a team still searching for a coherent identity under their new structure. Milwaukee's 1-8 record is the season's most alarming mark given the roster investment, and the gap between this Bucks team and the one that contended for titles not long ago is a conversation the organization can no longer defer. Toronto, at 5-4, is building something measured and methodical that may not grab headlines but wins the games it's supposed to win.",
    },
    {
      gameId: "MIN-NO-20261106",
      teams: { home: "NO", away: "MIN" },
      finalScore: { home: 109, away: 115 },
      swings: [
        {
          quarter: "Q3",
          timestamp: "7:11",
          description: "Minnesota's Anthony Edwards ignited a 13-4 third-quarter run that turned a narrow New Orleans lead into a seven-point Wolves advantage. Edwards's two consecutive pull-and-release threes over retreating defenders were the game's most athletically impressive individual sequence.",
          runScore: "13-4",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "5:33",
          description: "New Orleans fought back to within four on a 9-2 run fueled by Brandon Ingram's post attack and two Pels offensive rebounds that extended possessions. Minnesota's late-game composure was tested before Edwards re-asserted himself.",
          runScore: "9-2",
          momentum: "home",
          keyPlayer: "Brandon Ingram",
          impact: "significant",
        },
        {
          quarter: "Q4",
          timestamp: "1:44",
          description: "Edwards's two free throws and a defensive stop sealed the six-point Minnesota win, completing a road victory that keeps the Wolves comfortably positioned at 7-3 in the West's congested second tier.",
          runScore: "5-1",
          momentum: "away",
          keyPlayer: "Anthony Edwards",
          impact: "notable",
        },
      ],
      clutchPlays: [
        {
          player: "Anthony Edwards",
          team: "MIN",
          description: "Step-back three from the top of the arc over Ingram's closeout to push the Minnesota lead back to seven with 2:51 remaining — the shot that effectively ended New Orleans's comeback attempt.",
          timeRemaining: "2:51",
          winProbabilityShift: 17,
        },
        {
          player: "Brandon Ingram",
          team: "NO",
          description: "Post-up finish over Rudy Gobert's contest to cut the deficit to four — a technically precise left-shoulder move that briefly had the Smoothie King Center believing a Pelicans win was possible.",
          timeRemaining: "5:33",
          winProbabilityShift: -11,
        },
      ],
      narrative: "Minnesota's 7-3 road win in New Orleans was harder than the box score suggests, and Brandon Ingram's sustained fourth-quarter push gave the Wolves genuine moments of discomfort. Anthony Edwards's late-game authority — particularly the step-back three that functionally ended New Orleans's comeback — is becoming a recognizable pattern for a player who seems to elevate precisely when the game's stakes justify it. The Pelicans at 4-5 are talented enough to be dangerous but not yet consistent enough to close out the teams they need to beat.",
    },
    {
      gameId: "UTAH-DAL-20261106",
      teams: { home: "DAL", away: "UTAH" },
      finalScore: { home: 112, away: 100 },
      swings: [
        {
          quarter: "Q2",
          timestamp: "6:44",
          description: "Dallas built a 15-point halftime lead on the back of a disciplined defensive performance that held Utah to 44 first-half points. The Mavericks' halfcourt execution exploited Utah's defensive rotations with crisp ball movement that consistently produced open corner looks.",
          runScore: "14-5",
          momentum: "home",
          keyPlayer: "Kyrie Irving",
          impact: "game-changing",
        },
        {
          quarter: "Q4",
          timestamp: "8:12",
          description: "Utah trimmed the lead to nine with an 11-4 fourth-quarter opening run, the Jazz's most sustained effort of the game. Dallas's defense tightened in response and held Utah without a field goal for the final three minutes of the run, restoring order.",
          runScore: "11-4",
          momentum: "away",
          keyPlayer: "Keyonte George",
          impact: "notable",
        },
      ],
      clutchPlays: [],
      narrative: "Dallas's comfortable 12-point win over Utah was the kind of professionally managed victory a 5-4 team needs to bank — no drama, no injury scares, and a performance that confirmed the Mavericks' mid-tier West standing without revealing anything about their ceiling. Utah at 1-8 matches Sacramento as the West's worst record, and the Jazz's fourth-quarter push amounted to cosmetic improvement on a scoreline that was never genuinely in doubt. For Dallas, the win sets up an important stretch where W's against inferior opponents need to become automatic.",
    },
  ],
};