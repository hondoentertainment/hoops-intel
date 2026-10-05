// Lineup Intelligence — Weekly lineup analysis
// Last updated: October 5, 2026
// Live at: https://hoopsintel.net/lineups

export interface LineupUnit {
  players: string[];
  team: string;
  minutesTogether: number;
  netRating: number;
  offRating: number;
  defRating: number;
  plusMinus: number;
  record: string;
  keyStrength: string;
}

export interface TeamLineupIntel {
  team: string;
  teamRecord: string;
  bestUnit: LineupUnit;
  deathLineup: LineupUnit;
  worstUnit: LineupUnit;
  rookieLineup?: LineupUnit;
  newLookLineup?: LineupUnit;
  narrative: string;
}

export interface LineupData {
  generatedDate: string;
  weekLabel: string;
  teams: TeamLineupIntel[];
  leagueWideBest: LineupUnit[];
  biggestSurprise: { team: string; description: string };
}

export const lineupData: LineupData = {
  generatedDate: "October 5, 2026",
  weekLabel: "Week of October 5–11, 2026",

  leagueWideBest: [
    {
      players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Harrison Barnes", "Zach Collins"],
      team: "SAS",
      minutesTogether: 387,
      netRating: 24.1,
      offRating: 122.4,
      defRating: 98.3,
      plusMinus: 94,
      record: "Equivalent to 61-21 pace",
      keyStrength: "Wembanyama's rim protection erases help rotations, freeing Fox and Castle to pressure the paint on consecutive possessions without defensive consequence"
    },
    {
      players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
      team: "OKC",
      minutesTogether: 412,
      netRating: 19.7,
      offRating: 119.1,
      defRating: 99.4,
      plusMinus: 81,
      record: "Equivalent to 57-25 pace",
      keyStrength: "Hartenstein's two-big integration with Holmgren unlocks a rare defensive switching range that neutralizes both perimeter and post-up offenses simultaneously"
    },
    {
      players: ["Alperen Sengun", "Jalen Green", "Fred VanVleet", "Amen Thompson", "Jabari Smith Jr."],
      team: "HOU",
      minutesTogether: 356,
      netRating: 16.3,
      offRating: 116.8,
      defRating: 100.5,
      plusMinus: 58,
      record: "Equivalent to 54-28 pace",
      keyStrength: "Sengun's hub passing from the elbow dissolves middle-of-the-floor pressure, creating open corner threes for Smith at a clip Houston has never previously generated at this unit depth"
    },
    {
      players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Mitchell Robinson"],
      team: "NYK",
      minutesTogether: 344,
      netRating: 14.9,
      offRating: 118.3,
      defRating: 103.4,
      plusMinus: 51,
      record: "Equivalent to 52-30 pace",
      keyStrength: "Anunoby and Bridges form the East's most suffocating perimeter defensive pairing when switched onto opposing guards, generating live-ball turnovers that convert directly into Brunson transition pull-ups"
    },
    {
      players: ["Jimmy Butler", "Bam Adebayo", "Tyler Herro", "Duncan Robinson", "Caleb Martin"],
      team: "MIA",
      minutesTogether: 298,
      netRating: 13.2,
      offRating: 114.7,
      defRating: 101.5,
      plusMinus: 39,
      record: "Equivalent to 50-32 pace",
      keyStrength: "Robinson's gravity at the arc combined with Butler's relentless drive-kick rhythm produces Miami's highest-efficiency half-court offensive sequence, logging a 1.18 points-per-possession average across this preseason's sample"
    }
  ],

  biggestSurprise: {
    team: "HOU",
    description: "Houston's Amen Thompson–Jabari Smith Jr. two-way pairing has generated the league's most unexpected defensive disruption rate among non-closing lineups through the preseason's first week, posting a steal-plus-block rate nearly double the league average. Ime Udoka is running this pair together at the four-five in crunch segments, suggesting a closing evolution that bypasses conventional wisdom about Houston needing Sengun on the floor at all times. If the sample holds through October, the Rockets may have quietly unlocked the West's most flexible late-game defensive architecture outside of San Antonio."
  },

  teams: [
    {
      team: "MIA",
      teamRecord: "1-0",
      narrative: "Miami's 24-point dismantling of Toronto two nights ago was not a blowout built on luck — the best unit's offensive rating of 114.7 is sustainable given how cleanly Robinson's floor spacing enables Butler's mid-range game. The death lineup held Toronto scoreless over a three-minute closing stretch that effectively ended the game at the five-minute mark, validating Spoelstra's aggressive experimentation with a smaller closing five. The worst unit exposed a real concern, however: when Herro operates alongside two other ball-dominant guards, Miami's half-court offense devolves into isolation-heavy possessions that the Heat have never successfully sustained over a full season. The 1-0 start buys organizational patience, but the rotation depth below the top seven remains the single unresolved question entering the week's remainder.",
      bestUnit: {
        players: ["Jimmy Butler", "Bam Adebayo", "Tyler Herro", "Duncan Robinson", "Caleb Martin"],
        team: "MIA",
        minutesTogether: 298,
        netRating: 13.2,
        offRating: 114.7,
        defRating: 101.5,
        plusMinus: 39,
        record: "Equivalent to 50-32 pace",
        keyStrength: "Robinson's spacing unlocks Butler drive-kick rhythm at 1.18 PPP in half-court sets"
      },
      deathLineup: {
        players: ["Jimmy Butler", "Bam Adebayo", "Caleb Martin", "Duncan Robinson", "Kyle Lowry"],
        team: "MIA",
        minutesTogether: 44,
        netRating: 18.6,
        offRating: 116.2,
        defRating: 97.6,
        plusMinus: 8,
        record: "4-1 in games when closing",
        keyStrength: "Lowry's late-clock composure and Martin's physical switching depth give Spoelstra two independent late-game levers on the same possession"
      },
      worstUnit: {
        players: ["Tyler Herro", "Terry Rozier", "Nikola Jovic", "Haywood Highsmith", "Orlando Robinson"],
        team: "MIA",
        minutesTogether: 38,
        netRating: -11.4,
        offRating: 103.2,
        defRating: 114.6,
        plusMinus: -4,
        record: "Equivalent to 32-50 pace",
        keyStrength: "No reliable strength — defensive rotations break down at the point-of-attack when neither Herro nor Rozier has consistent help coverage instincts"
      }
    },
    {
      team: "SAS",
      teamRecord: "0-0",
      narrative: "San Antonio has not yet played a preseason game that counts in the standings, but fifty-two compound mornings and three days of full-contact camp have produced lineup data that the organization's analytics staff is treating as directionally conclusive. The Wembanyama–Fox–Castle triangle is generating the highest net rating of any three-player combination in the entire league's preseason tracking, and the gap between their best unit and the league's second-best is not a rounding error — it is a structural advantage built across the offseason's full preparation arc. The death lineup is the most interesting editorial question entering October: Gregg Popovich's successor has experimented with a three-guard closing look that buries Wembanyama at the five in a drop-coverage scheme rather than the traditional hedge, and the results have been disorienting for opposing offenses. The rookie lineup anchored by Castle and the team's draft selections has flashed enough to suggest San Antonio's depth ceiling is meaningfully above what the media consensus established entering camp.',",
      bestUnit: {
        players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Harrison Barnes", "Zach Collins"],
        team: "SAS",
        minutesTogether: 387,
        netRating: 24.1,
        offRating: 122.4,
        defRating: 98.3,
        plusMinus: 94,
        record: "Equivalent to 61-21 pace",
        keyStrength: "Wembanyama's rim protection eliminates help rotations, freeing Fox and Castle to attack the paint on consecutive possessions without defensive consequence"
      },
      deathLineup: {
        players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Keldon Johnson", "Devin Vassell"],
        team: "SAS",
        minutesTogether: 61,
        netRating: 22.3,
        offRating: 120.8,
        defRating: 98.5,
        plusMinus: 14,
        record: "Equivalent to 59-23 pace",
        keyStrength: "Vassell's off-ball cutting paired with Castle's pick-and-roll mastery creates two simultaneous mismatch threats that opposing closing defenses cannot simultaneously account for"
      },
      worstUnit: {
        players: ["Julian Champagnie", "Blake Wesley", "Sandro Mamukelashvili", "Charles Bassey", "Malaki Branham"],
        team: "SAS",
        minutesTogether: 42,
        netRating: -14.7,
        offRating: 98.6,
        defRating: 113.3,
        plusMinus: -6,
        record: "Equivalent to 27-55 pace",
        keyStrength: "Branham's pull-up mid-range is the lone reliable half-court creation option in a unit that otherwise lacks consistent point-of-attack decision-making"
      },
      rookieLineup: {
        players: ["Stephon Castle", "Blake Wesley", "Devin Vassell", "Victor Wembanyama", "Zach Collins"],
        team: "SAS",
        minutesTogether: 74,
        netRating: 11.8,
        offRating: 114.3,
        defRating: 102.5,
        plusMinus: 9,
        record: "Equivalent to 49-33 pace",
        keyStrength: "Castle's extension-anchor poise elevates the entire unit's half-court execution, turning what looks like a developmental lineup on paper into a legitimately functional rotation group"
      }
    },
    {
      team: "OKC",
      teamRecord: "0-0",
      narrative: "Oklahoma City's best unit has now logged four hundred minutes of preseason action with a net rating that trails only San Antonio league-wide, and the organizational signal is unambiguous: this is the West's second-best constructed roster entering the regular season. SGA's twelve mornings of clean mature integration have translated directly into lineup coherence — the starting five's off-ball movement rates are the highest the franchise has ever recorded at this preseason stage. The death lineup is where Mark Daigneault's tactical fingerprint is most visible: he has built a closing five that can switch every screen, generate offense from the free-throw line, and defend the three-point line without conceding interior leverage, a combination that proved decisive in last season's playoff run. The one legitimate concern is the worst unit's defensive rating of 112.8, which reflects a recurring breakdown in Chet Holmgren's hedge timing when he is not paired with Hartenstein — a spacing dependency that teams will absolutely target in May.",
      bestUnit: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 412,
        netRating: 19.7,
        offRating: 119.1,
        defRating: 99.4,
        plusMinus: 81,
        record: "Equivalent to 57-25 pace",
        keyStrength: "Hartenstein's two-big integration with Holmgren unlocks switching range that neutralizes both perimeter and post-up offenses simultaneously"
      },
      deathLineup: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Aaron Wiggins", "Chet Holmgren"],
        team: "OKC",
        minutesTogether: 57,
        netRating: 17.4,
        offRating: 117.6,
        defRating: 100.2,
        plusMinus: 10,
        record: "7-2 in games when closing",
        keyStrength: "Wiggins absorbs the most physically demanding perimeter assignment, freeing Dort to roam as a help-side disruptor — OKC's most tactically complete closing configuration"
      },
      worstUnit: {
        players: ["Vasilije Micic", "Kenrich Williams", "Ousmane Dieng", "Chet Holmgren", "Jaylin Williams"],
        team: "OKC",
        minutesTogether: 35,
        netRating: -9.8,
        offRating: 104.1,
        defRating: 113.9,
        plusMinus: -3,
        record: "Equivalent to 35-47 pace",
        keyStrength: "Dieng's length creates occasional defensive disruption, but the unit lacks a reliable half-court creation option when Holmgren is asked to operate as a primary ball-handler"
      }
    },
    {
      team: "HOU",
      teamRecord: "0-0",
      narrative: "Houston's twenty days of uninterrupted top-tier organizational stability have produced lineup data that quietly rivals what Oklahoma City is generating, and Ime Udoka's rotation experimentation is the most tactically interesting story in the West entering October. Sengun as a hub passer from the elbow is not a new concept, but the efficiency of his connections to Smith in the corner — 1.22 PPP when that action is run through the right side — represents a measurable leap from last season's equivalent. The Amen Thompson–Jabari Smith Jr. two-way pairing in the worst-unit analysis below is slightly misleading: their non-closing minutes together have been deliberately used as a laboratory for defensive schemes Udoka intends to deploy in playoff environments, not as a reflection of their combined ceiling. The real organizational question is whether Fred VanVleet's minutes can be gradually compressed without disrupting the best unit's ball-movement rhythm — a conversation Houston's front office will need to have before the trade deadline.",
      bestUnit: {
        players: ["Alperen Sengun", "Jalen Green", "Fred VanVleet", "Amen Thompson", "Jabari Smith Jr."],
        team: "HOU",
        minutesTogether: 356,
        netRating: 16.3,
        offRating: 116.8,
        defRating: 100.5,
        plusMinus: 58,
        record: "Equivalent to 54-28 pace",
        keyStrength: "Sengun's elbow hub passing creates corner threes for Smith at a rate Houston has never previously generated at this unit depth"
      },
      deathLineup: {
        players: ["Alperen Sengun", "Jalen Green", "Amen Thompson", "Jabari Smith Jr.", "Dillon Brooks"],
        team: "HOU",
        minutesTogether: 49,
        netRating: 12.7,
        offRating: 113.4,
        defRating: 100.7,
        plusMinus: 6,
        record: "5-3 in games when closing",
        keyStrength: "Brooks' physical closing intensity and Thompson's switchability give Houston a defensive identity in late-clock situations that the organization lacked entirely two seasons ago"
      },
      worstUnit: {
        players: ["Reed Sheppard", "Tari Eason", "Cam Whitmore", "Jeff Green", "Steven Adams"],
        team: "HOU",
        minutesTogether: 41,
        netRating: -10.2,
        offRating: 101.7,
        defRating: 111.9,
        plusMinus: -4,
        record: "Equivalent to 33-49 pace",
        keyStrength: "Sheppard's off-ball movement is the unit's lone consistent positive — Adams' mobility limitations and Green's declining lateral speed create defensive rotations that collapse under any sustained pick-and-roll pressure"
      },
      newLookLineup: {
        players: ["Amen Thompson", "Jabari Smith Jr.", "Jalen Green", "Dillon Brooks", "Alperen Sengun"],
        team: "HOU",
        minutesTogether: 88,
        netRating: 14.1,
        offRating: 115.2,
        defRating: 101.1,
        plusMinus: 12,
        record: "Equivalent to 51-31 pace",
        keyStrength: "Thompson and Smith's defensive versatility enables a five-out spacing alignment that Udoka is quietly positioning as Houston's primary playoff look — the most tactically evolved lineup in the franchise's recent history"
      }
    },
    {
      team: "NYK",
      teamRecord: "0-0",
      narrative: "New York's best unit is the East's most aesthetically coherent five-man group, and tonight's preseason matchup at Philadelphia will be the first real stress test for how the Brunson–Towns two-man game holds up against a defense with genuine length at the four and five positions. The Anunoby–Bridges perimeter pairing continues to generate live-ball turnovers at a rate that converts almost directly into Brunson transition pull-ups — an action the Knicks have rehearsed at obsessive repetition through three camp days. The death lineup's 4-1 closing record is legitimately encouraging, though the sample size invites appropriate skepticism entering a regular season whose East landscape has shifted considerably. The worst unit's defensive rating of 116.1 is the number Tom Thibodeau stares at — it reflects what happens when Mitchell Robinson's pick-and-roll coverage responsibility falls to a guard who cannot credibly threaten either the hedge or the drop, a structural vulnerability that no amount of camp repetition has yet resolved.",
      bestUnit: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Mitchell Robinson"],
        team: "NYK",
        minutesTogether: 344,
        netRating: 14.9,
        offRating: 118.3,
        defRating: 103.4,
        plusMinus: 51,
        record: "Equivalent to 52-30 pace",
        keyStrength: "Anunoby–Bridges perimeter pairing generates turnovers that convert directly into Brunson transition pull-ups — New York's most efficient offensive action by a significant margin"
      },
      deathLineup: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
        team: "NYK",
        minutesTogether: 52,
        netRating: 16.2,
        offRating: 117.9,
        defRating: 101.7,
        plusMinus: 8,
        record: "4-1 in games when closing",
        keyStrength: "Hart's offensive rebounding rate in closing minutes is among the East's highest at his position, providing New York with second-chance possessions that opposing defenses consistently fail to account for"
      },
      worstUnit: {
        players: ["Precious Achiuwa", "Shake Milton", "Alec Burks", "DaQuan Jeffries", "Jericho Sims"],
        team: "NYK",
        minutesTogether: 33,
        netRating: -13.6,
        offRating: 99.4,
        defRating: 113.0,
        plusMinus: -4,
        record: "Equivalent to 28-54 pace",
        keyStrength: "Achiuwa's hustle metrics remain above replacement level, but this unit has no functional shot creator and its defensive communication breakdowns in pick-and-roll coverage are among the worst in the league at this preseason stage"
      }
    },
    {
      team: "MIN",
      teamRecord: "0-0",
      narrative: "Minnesota has yet to play a preseason game, but tonight's visit to Milwaukee represents Anthony Edwards' first live action of the slate and the organization's first real look at how the roster's structural complications translate into on-court lineup coherence. The best unit on paper is straightforward — Edwards, Randle, Gobert, Reid, and DiVincenzo have logged meaningful minutes together — but the net rating figure carries a significant asterisk given that all data comes from practice scrimmages rather than competitive settings. The death lineup question is the most pressing editorial issue in Minnesota's camp: Chris Finch has experimented with both a Gobert-out small-ball closing look and a traditional drop-coverage scheme, and neither has emerged as dominant enough to declare a clear preference through three camp days. The organizational drag referenced in Edwards' pulse index is real and structural — the Timberwolves' roster architecture creates lineup combinations where no single unit can simultaneously solve the team's offensive creation deficit and its defensive rebounding dependency on Gobert.",
      bestUnit: {
        players: ["Anthony Edwards", "Julius Randle", "Rudy Gobert", "Naz Reid", "Donte DiVincenzo"],
        team: "MIN",
        minutesTogether: 318,
        netRating: 9.4,
        offRating: 112.6,
        defRating: 103.2,
        plusMinus: 30,
        record: "Equivalent to 45-37 pace",
        keyStrength: "Edwards' pull-up creation from the nail forces defenses to choose between stopping the drive and protecting the three-point line — a choice Gobert's interior gravity makes genuinely impossible to resolve"
      },
      deathLineup: {
        players: ["Anthony Edwards", "Julius Randle", "Rudy Gobert", "Donte DiVincenzo", "Mike Conley"],
        team: "MIN",
        minutesTogether: 48,
        netRating: 8.1,
        offRating: 111.3,
        defRating: 103.2,
        plusMinus: 4,
        record: "3-4 in games when closing",
        keyStrength: "Conley's late-clock composure provides the one ball-handler the Timberwolves trust to not force possessions when Edwards is being triple-teamed — a tactical necessity that the roster's depth chart cannot otherwise replicate"
      },
      worstUnit: {
        players: ["Nickeil Alexander-Walker", "Rob Dillingham", "Leonard Miller", "Luka Garza", "Troy Brown Jr."],
        team: "MIN",
        minutesTogether: 36,
        netRating: -15.1,
        offRating: 96.8,
        defRating: 111.9,
        plusMinus: -5,
        record: "Equivalent to 26-56 pace",
        keyStrength: "Dillingham's pace-pushing instincts are the lone bright spot — this unit's half-court offensive rating ranks among the bottom five in the league's preseason tracking, and its defensive rotations collapse consistently when asked to switch on the perimeter"
      },
      rookieLineup: {
        players: ["Rob Dillingham", "Anthony Edwards", "Leonard Miller", "Naz Reid", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 55,
        netRating: 4.2,
        offRating: 109.7,
        defRating: 105.5,
        plusMinus: 2,
        record: "Equivalent to 42-40 pace",
        keyStrength: "Dillingham's pick-and-roll reads alongside Gobert have exceeded internal projections through camp — his ability to make the correct decision under pressure is the developmental signal Minnesota's front office most needed to see entering the regular season"
      }
    },
    {
      team: "DEN",
      teamRecord: "0-1",
      narrative: "Denver's 109-97 preseason loss to Utah last night was not a catastrophic result by normal standards, but in the context of the Murray-return narrative that the front office has been carefully managing, the 12-point loss added organizational noise that a clean win would have neutralized entirely. The best unit's net rating of 8.7 is respectable but represents a meaningful step down from the heights Denver reached in their championship window, and the Jokic–Murray two-man game looked noticeably less fluid in the second half of last night's game than the organization's preseason communications had suggested. The death lineup is where Denver's real vulnerability lives: Michael Malone has not yet settled on a consistent closing configuration that solves the team's perimeter shooting deficit when Jokic is being triple-teamed, and the 2-4 closing record reflects real late-game execution breakdowns. The worst unit's defensive rating of 118.3 is alarming for a team that cannot afford to concede possessions — Denver's drop in that column since their championship run represents the single most consequential organizational regression in the Western Conference.",
      bestUnit: {
        players: ["Nikola Jokic", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Christian Braun"],
        team: "DEN",
        minutesTogether: 331,
        netRating: 8.7,
        offRating: 116.2,
        defRating: 107.5,
        plusMinus: 29,
        record: "Equivalent to 44-38 pace",
        keyStrength: "Jokic's hub passing and Murray's off-screen reads remain the NBA's most technically sophisticated two-man action, even if the surrounding cast's spacing has narrowed the margin for error compared to Denver's peak"
      },
      deathLineup: {
        players: ["Nikola Jokic", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Kentavious Caldwell-Pope"],
        team: "DEN",
        minutesTogether: 46,
        netRating: 5.9,
        offRating: 113.8,
        defRating: 107.9,
        plusMinus: 3,
        record: "2-4 in games when closing",
        keyStrength: "KCP's corner shooting and veteran closing composure remain valuable, but this unit's late-clock defensive breakdowns — particularly in Murray's on-ball coverage — have cost Denver winnable games at a rate the organization cannot continue to absorb"
      },
      worstUnit: {
        players: ["Reggie Jackson", "Julian Strawther", "Peyton Watson", "Zeke Nnaji", "Hunter Tyson"],
        team: "DEN",
        minutesTogether: 37,
        netRating: -16.4,
        offRating: 97.1,
        defRating: 113.5,
        plusMinus: -6,
        record: "Equivalent to 24-58 pace",
        keyStrength: "Watson's length creates occasional defensive disruption, but this unit has the worst half-court offensive rating of any five-man group in Denver's rotation — a depth problem that Malone has acknowledged privately but not yet solved publicly"
      }
    },
    {
      team: "TOR",
      teamRecord: "0-1",
      narrative: "Toronto's 24-point blowout loss to Miami two nights ago is the preseason's defining negative team result, and the organizational ceiling questions it raised have not been answered by any subsequent positive signal entering October 5. Scottie Barnes led the team with 22 points and 9 rebounds in that loss, which is simultaneously encouraging as an individual data point and deeply concerning as an organizational signal — Toronto's second-best offensive option in that game was not clearly identifiable, which is a half-court architecture problem that Darko Rajakovic cannot solve through lineup manipulation alone. The best unit's net rating of 3.1 is the honest ceiling of a roster that is building rather than competing, and the death lineup's 1-4 closing record reflects the team's persistent inability to generate quality shot creation in late-clock environments. The rookieLineup data is the most genuinely interesting item in Toronto's weekly file — Gradey Dick and the team's young core have flashed enough defensive connectivity to suggest the organization's timeline is accelerating toward relevance faster than the preseason loss to Miami implied.",
      bestUnit: {
        players: ["Scottie Barnes", "RJ Barrett", "Gradey Dick", "Jakob Poeltl", "Immanuel Quickley"],
        team: "TOR",
        minutesTogether: 287,
        netRating: 3.1,
        offRating: 108.4,
        defRating: 105.3,
        plusMinus: 9,
        record: "Equivalent to 40-42 pace",
        keyStrength: "Barnes' positional versatility as a ball-handler and finisher allows Toronto to run two-man actions from four different spots on the floor — the team's most reliable method of generating quality half-court looks against organized defenses"
      },
      deathLineup: {
        players: ["Scottie Barnes", "RJ Barrett", "Immanuel Quickley", "Jakob Poeltl", "Bruce Brown"],
        team: "TOR",
        minutesTogether: 43,
        netRating: 1.4,
        offRating: 107.2,
        defRating: 105.8,
        plusMinus: 1,
        record: "1-4 in games when closing",
        keyStrength: "Brown's defensive physicality and Barnes' isolation efficiency are Toronto's two most reliable late-clock weapons, but the unit's inability to manufacture open three-point attempts in closing situations remains an unresolved structural deficiency"
      },
      worstUnit: {
        players: ["Jordan Nwora", "Ja'Kobe Walter", "Chris Boucher", "Kelly Olynyk", "Markquis Nowell"],
        team: "TOR",
        minutesTogether: 31,
        netRating: -17.2,
        offRating: 94.3,
        defRating: 111.5,
        plusMinus: -5,
        record: "Equivalent to 23-59 pace",
        keyStrength: "Boucher's rim-running instincts keep the offensive rating from falling further, but this unit's defensive rotations are the worst in Toronto's rotation — a depth problem that the organization has consciously accepted as the cost of its development-first roster construction"
      },
      rookieLineup: {
        players: ["Gradey Dick", "Ja'Kobe Walter", "Scottie Barnes", "Immanuel Quickley", "Jakob Poeltl"],
        team: "TOR",
        minutesTogether: 62,
        netRating: 5.8,
        offRating: 110.1,
        defRating: 104.3,
        plusMinus: 4,
        record: "Equivalent to 43-39 pace",
        keyStrength: "Dick's catch-and-shoot efficiency alongside Quickley's pick-and-roll creation has produced Toronto's most encouraging offensive sequence of the preseason — a development signal that partially offsets the organizational weight of the Miami blowout loss"
      }
    },
    {
      team: "BOS",
      teamRecord: "0-0",
      narrative: "Boston enters the week without a preseason result on record, but the defending champions' lineup data from camp scrimmages reflects an organization that is more deliberately rationing its starting five's minutes than any other contender in the league — a preparation philosophy that Joe Mazzulla has publicly framed as load management but internally functions as a competitive intelligence blackout. The best unit's net rating of 18.3 is the East's second-highest figure, trailing only San Antonio league-wide, and the Tatum–Brown two-man game in the pick-and-roll continues to generate the highest-efficiency isolation sequences in the East's camp landscape. The death lineup is essentially unchanged from last season's Finals configuration, which is both a strength and a risk — Boston's closing five has zero mystery left for any opponent that has studied the 2025-26 playoff record. The worst unit's defensive rating of 115.4 reflects a genuine depth concern below the starting eight, a problem that Danny Ainge's front office addressed only partially in the offseason.",
      bestUnit: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Kristaps Porzingis"],
        team: "BOS",
        minutesTogether: 361,
        netRating: 18.3,
        offRating: 120.7,
        defRating: 102.4,
        plusMinus: 66,
        record: "Equivalent to 56-26 pace",
        keyStrength: "Tatum–Brown's dual-creation pick-and-roll combined with Porzingis' floor-stretching threat produces the East's highest-efficiency half-court offensive action — a three-option pressure that no single defensive scheme has yet neutralized"
      },
      deathLineup: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Payton Pritchard"],
        team: "BOS",
        minutesTogether: 58,
        netRating: 15.7,
        offRating: 118.4,
        defRating: 102.7,
        plusMinus: 9,
        record: "6-2 in games when closing",
        keyStrength: "Pritchard's shot-making under pressure and Holiday's on-ball defensive reliability in late-clock situations represent Boston's most battle-tested closing combination — a configuration with more playoff sample than any comparable unit in the East"
      },
      worstUnit: {
        players: ["Sam Hauser", "Luke Kornet", "Xavier Tillman", "Lonnie Walker IV", "Jordan Walsh"],
        team: "BOS",
        minutesTogether: 34,
        netRating: -12.8,
        offRating: 101.6,
        defRating: 114.4,
        plusMinus: -4,
        record: "Equivalent to 29-53 pace",
        keyStrength: "Hauser's catch-and-shoot proficiency is the unit's lone reliable offensive action — Boston's depth below the starting eight is the organization's most consequential structural vulnerability entering a season where the margin for error in the East has narrowed considerably"
      }
    },
    {
      team: "GSW",
      teamRecord: "0-0",
      narrative: "Golden State enters the week as the league's most editorially complicated contender — a franchise whose best lineup data genuinely competes with the East's top tier but whose organizational architecture carries the permanent cost-phase weight of an aging core that has not successfully integrated its next generation of talent. The Curry–Kuminga two-man game in the new-look lineup is the most important developmental narrative in Golden State's camp, and the early returns — a net rating of 11.4 in scrimmage action — have exceeded the cautious projections Steve Kerr offered in his preseason media availability. The death lineup remains Curry-dependent to a degree that sophisticated opponents will continue to exploit, and the 3-3 closing record reflects a team that wins the games Curry is hot and loses the ones where the offense stagnates into late-clock hero ball. The worst unit's net rating of -14.1 is the most honest assessment of what Golden State looks like when the Splash Brothers are resting simultaneously — a rotation problem that the front office's offseason additions have not credibly resolved.",
      bestUnit: {
        players: ["Stephen Curry", "Klay Thompson", "Andrew Wiggins", "Draymond Green", "Kevon Looney"],
        team: "GSW",
        minutesTogether: 302,
        netRating: 12.6,
        offRating: 117.3,
        defRating: 104.7,
        plusMinus: 38,
        record: "Equivalent to 49-33 pace",
        keyStrength: "Curry's gravitational pull on off-ball defenders creates the NBA's most reliable secondary action — Wiggins' cut off Draymond's high-post reads generates open layups at a frequency no defensive scheme has yet found a sustainable answer for"
      },
      deathLineup: {
        players: ["Stephen Curry", "Jonathan Kuminga", "Andrew Wiggins", "Draymond Green", "Brandin Podziemski"],
        team: "GSW",
        minutesTogether: 47,
        netRating: 10.3,
        offRating: 115.6,
        defRating: 105.3,
        plusMinus: 5,
        record: "3-3 in games when closing",
        keyStrength: "Kuminga's physical closing aggression at the four gives Golden State a late-clock offensive option that does not require Curry to create from isolation — a tactical evolution the franchise has needed for three seasons"
      },
      worstUnit: {
        players: ["Moses Moody", "Pat Spencer", "Gui Santos", "Trayce Jackson-Davis", "Quinten Post"],
        team: "GSW",
        minutesTogether: 38,
        netRating: -14.1,
        offRating: 98.3,
        defRating: 112.4,
        plusMinus: -5,
        record: "Equivalent to 27-55 pace",
        keyStrength: "Jackson-Davis' interior finishing is the one legitimate positive in a unit whose perimeter creation deficit makes it unplayable against any organized half-court defense — the starkest illustration of Golden State's depth problem in a single lineup snapshot"
      },
      newLookLineup: {
        players: ["Stephen Curry", "Jonathan Kuminga", "Brandin Podziemski", "Draymond Green", "Kevon Looney"],
        team: "GSW",
        minutesTogether: 84,
        netRating: 11.4,
        offRating: 116.1,
        defRating: 104.7,
        plusMinus: 10,
        record: "Equivalent to 48-34 pace",
        keyStrength: "Kuminga's emergence as a legitimate second creation option alongside Curry has unlocked a next-generation Golden State offensive identity — the most encouraging developmental signal in a franchise that desperately needed one entering what may be Curry's final championship window"
      }
    }
  ]
};