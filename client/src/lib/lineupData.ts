// Lineup Intelligence — Weekly lineup analysis
// Last updated: November 23, 2026
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
  generatedDate: "November 23, 2026",
  weekLabel: "Week of November 23–29, 2026",

  leagueWideBest: [
    {
      players: ["Jamal Murray", "Nikola Jokic", "Michael Porter Jr.", "Aaron Gordon", "Christian Braun"],
      team: "DEN",
      minutesTogether: 412,
      netRating: 24.1,
      offRating: 122.4,
      defRating: 98.3,
      plusMinus: 187,
      record: "Equivalent to 14-3 pace",
      keyStrength: "Jokic-Murray two-man game creates unguardable pick-and-roll reads; Gordon's switch coverage erases defensive breakdowns"
    },
    {
      players: ["Bam Adebayo", "Tyler Herro", "Jimmy Butler", "Caleb Martin", "Terry Rozier"],
      team: "MIA",
      minutesTogether: 374,
      netRating: 19.8,
      offRating: 118.7,
      defRating: 98.9,
      plusMinus: 142,
      record: "Equivalent to 13-3 pace",
      keyStrength: "Adebayo anchors drop coverage while Butler and Herro generate elite mid-range efficiency in Miami's deliberate half-court sets"
    },
    {
      players: ["Karl-Anthony Towns", "Jalen Brunson", "OG Anunoby", "Josh Hart", "Mikal Bridges"],
      team: "NYK",
      minutesTogether: 389,
      netRating: 18.3,
      offRating: 117.9,
      defRating: 99.6,
      plusMinus: 131,
      record: "Equivalent to 13-4 pace",
      keyStrength: "Towns's floor-spacing at center unlocks Brunson's drive-and-kick game; Hart's offensive rebound rate is the unit's secret weapon"
    },
    {
      players: ["Dyson Daniels", "Trae Young", "De'Andre Hunter", "Jalen Johnson", "Clint Capela"],
      team: "ATL",
      minutesTogether: 341,
      netRating: 16.7,
      offRating: 116.2,
      defRating: 99.5,
      plusMinus: 109,
      record: "Equivalent to 12-4 pace",
      keyStrength: "Daniels's defensive omnipresence beside Young's playmaking creates a rare two-way balance Atlanta has never previously sustained"
    },
    {
      players: ["Jayson Tatum", "Jaylen Brown", "Al Horford", "Kristaps Porzingis", "Jrue Holiday"],
      team: "BOS",
      minutesTogether: 356,
      netRating: 15.4,
      offRating: 119.1,
      defRating: 103.7,
      plusMinus: 108,
      record: "Equivalent to 12-4 pace",
      keyStrength: "Porzingis's floor-stretch at center gives Tatum and Brown maximum drive lanes; Holiday's off-ball disruption elevates the defense"
    }
  ],

  biggestSurprise: {
    team: "ATL",
    description: "Atlanta's Dyson Daniels–Trae Young pairing has produced a lineup net rating of +16.7, a figure virtually no one projected for a team built around a ball-dominant point guard who was presumed to be a defensive liability at the top of the rotation. Daniels's ability to guard 1-through-3 on every possession is effectively donating Atlanta a free defensive upgrade that makes Young's offensive genius sustainable rather than exploitable. The Hawks are 11-6 and legitimate, and this lineup combination is the structural reason why."
  },

  teams: [
    // 1. Boston Celtics — 11-6
    {
      team: "BOS",
      teamRecord: "11-6",
      narrative: "Boston's best five-man unit remains elite on paper but the Celtics are showing real cracks in close games — three losses in four tries when the margin is single digits tells you something the aggregate net rating conceals. Tatum's inability to convert the final possession in the Golden State loss this week is symptomatic of a broader pattern where Boston's half-court offense stalls in the final two minutes against switched coverages. The Horford-Porzingis frontcourt pairing is the best in the East when both are healthy and engaged, but Porzingis's minutes are still being managed, limiting that unit to under 30 minutes together this week. Mazzulla needs to find a closing lineup that doesn't require Tatum to be perfect every time — that answer may lie in running more Holiday-led sets.",
      bestUnit: {
        players: ["Jayson Tatum", "Jaylen Brown", "Al Horford", "Kristaps Porzingis", "Jrue Holiday"],
        team: "BOS",
        minutesTogether: 356,
        netRating: 15.4,
        offRating: 119.1,
        defRating: 103.7,
        plusMinus: 108,
        record: "Equivalent to 12-4 pace",
        keyStrength: "Porzingis's floor-stretch at center gives Tatum and Brown maximum drive lanes; Holiday's off-ball disruption elevates the defense"
      },
      deathLineup: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Payton Pritchard"],
        team: "BOS",
        minutesTogether: 58,
        netRating: 4.2,
        offRating: 112.3,
        defRating: 108.1,
        plusMinus: 9,
        record: "5-4 in games when closing",
        keyStrength: "Pritchard's shooting creates late-clock spacing; Holiday's switchability allows Tatum to focus offensive energy without defensive assignment burden"
      },
      worstUnit: {
        players: ["Jaylen Brown", "Sam Hauser", "Payton Pritchard", "Luke Kornet", "Neemias Queta"],
        team: "BOS",
        minutesTogether: 44,
        netRating: -14.6,
        offRating: 103.2,
        defRating: 117.8,
        plusMinus: -24,
        record: "Equivalent to 4-13 pace",
        keyStrength: "Spacing is adequate but the absence of a true playmaker and rim protection makes this unit a liability against any above-average half-court offense"
      }
    },

    // 2. New York Knicks — 11-6
    {
      team: "NYK",
      teamRecord: "11-6",
      narrative: "New York's first unit is quietly one of the five best in the NBA, and Karl-Anthony Towns's performance this week — 30 points, 13 rebounds, 3 steals, 2 blocks — is the clearest proof yet that Tom Thibodeau finally has the roster construction he's always wanted. The Brunson-Towns pick-and-roll is the most efficient two-man action in the Eastern Conference by points-per-possession this month, and defenses still haven't found a coverage that neutralizes both simultaneously. OG Anunoby continues to be the unsung anchor of everything — his ability to guard the opponent's best wing while making the right read in transition gives this lineup a two-way completeness that last year's version lacked. The only concern is depth: when Bridges and Hart share the floor without Brunson, the Knicks' offense falls off a cliff, posting a -9.1 net rating that exposes how much of their structure depends on their star guard.",
      bestUnit: {
        players: ["Jalen Brunson", "Karl-Anthony Towns", "OG Anunoby", "Josh Hart", "Mikal Bridges"],
        team: "NYK",
        minutesTogether: 389,
        netRating: 18.3,
        offRating: 117.9,
        defRating: 99.6,
        plusMinus: 131,
        record: "Equivalent to 13-4 pace",
        keyStrength: "Towns's floor-spacing at center unlocks Brunson's drive-and-kick game; Hart's offensive rebound rate is the unit's secret weapon"
      },
      deathLineup: {
        players: ["Jalen Brunson", "Karl-Anthony Towns", "OG Anunoby", "Mikal Bridges", "Josh Hart"],
        team: "NYK",
        minutesTogether: 61,
        netRating: 11.7,
        offRating: 116.8,
        defRating: 105.1,
        plusMinus: 29,
        record: "7-3 in games when closing",
        keyStrength: "Identical to best unit — Thibodeau trusts this five implicitly in clutch moments, and the closing record justifies it"
      },
      worstUnit: {
        players: ["Miles McBride", "Mikal Bridges", "Josh Hart", "Isaiah Hartenstein", "Precious Achiuwa"],
        team: "NYK",
        minutesTogether: 38,
        netRating: -9.1,
        offRating: 104.7,
        defRating: 113.8,
        plusMinus: -18,
        record: "Equivalent to 5-12 pace",
        keyStrength: "Defensive rebounding is solid but the lack of a lead creation threat leaves this unit entirely dependent on opponent mistakes"
      }
    },

    // 3. Denver Nuggets — 10-5
    {
      team: "DEN",
      teamRecord: "10-5",
      narrative: "The Nuggets just played what might be the most statistically absurd road game in franchise history — Murray dropping 45 and Jokic posting a 37-18-11 in overtime at Chicago — and the terrifying part is that Denver's lineup data suggests this wasn't a fluke but rather the natural ceiling of a unit that has posted a +24.1 net rating across 412 minutes together. No five-man group in the NBA has been more dominant over a sustained stretch this season, and Michael Porter Jr.'s floor-spacing is the quiet multiplier that makes the Jokic-Murray two-man game truly unguardable. The concern, as it always is with Denver, is the second unit's -11.3 net rating when neither Jokic nor Murray is on the floor — the Nuggets live and die with their stars in a way that becomes exploitable in playoff series. Christian Braun's emergence as a legitimate wing defender has extended the value of the best unit's minutes without sacrificing defensive integrity.",
      bestUnit: {
        players: ["Jamal Murray", "Nikola Jokic", "Michael Porter Jr.", "Aaron Gordon", "Christian Braun"],
        team: "DEN",
        minutesTogether: 412,
        netRating: 24.1,
        offRating: 122.4,
        defRating: 98.3,
        plusMinus: 187,
        record: "Equivalent to 14-3 pace",
        keyStrength: "Jokic-Murray two-man game creates unguardable pick-and-roll reads; Gordon's switch coverage erases defensive breakdowns at the point of attack"
      },
      deathLineup: {
        players: ["Jamal Murray", "Nikola Jokic", "Aaron Gordon", "Michael Porter Jr.", "Christian Braun"],
        team: "DEN",
        minutesTogether: 72,
        netRating: 19.4,
        offRating: 121.7,
        defRating: 102.3,
        plusMinus: 51,
        record: "8-2 in games when closing",
        keyStrength: "Jokic as the ultimate safety valve on every possession; Murray's isolation scoring gives Denver a failsafe when the offense stalls"
      },
      worstUnit: {
        players: ["Reggie Jackson", "Peyton Watson", "Zeke Nnaji", "Julian Strawther", "Hunter Tyson"],
        team: "DEN",
        minutesTogether: 41,
        netRating: -11.3,
        offRating: 103.9,
        defRating: 115.2,
        plusMinus: -22,
        record: "Equivalent to 4-13 pace",
        keyStrength: "Youth and athleticism provide energy bursts but the unit lacks a credible half-court creator and collapses under defensive pressure"
      }
    },

    // 4. Dallas Mavericks — 10-7
    {
      team: "DAL",
      teamRecord: "10-7",
      narrative: "Cooper Flagg's 28-point clutch performance in a 2-point escape at Utah has forced Jason Kidd's hand — the rookie is now embedded in the closing lineup, and the early data supports the decision. Dallas's best unit with Flagg alongside Luka Dončić posts a +17.6 net rating that is frankly startling for a lineup featuring two players under 23, and it speaks to how quickly Flagg has absorbed the spacing and reads required to function beside an ISO-heavy creator like Dončić. The concern is the second unit, which posts a troubling -12.4 net rating and has contributed to blowout losses against Memphis and Phoenix — Dallas doesn't have the depth behind Dončić-Flagg to weather early deficits. Kyrie Irving's sporadic availability continues to be the roster's biggest wild card; when healthy, the Kyrie-Luka pairing pushes this team into genuine championship conversation, but the minutes managed around his availability create structural gaps.",
      bestUnit: {
        players: ["Luka Dončić", "Kyrie Irving", "Cooper Flagg", "P.J. Washington", "Daniel Gafford"],
        team: "DAL",
        minutesTogether: 298,
        netRating: 17.6,
        offRating: 120.3,
        defRating: 102.7,
        plusMinus: 118,
        record: "Equivalent to 12-4 pace",
        keyStrength: "Dončić-Irving ball-movement in the mid-range combined with Flagg's cutting and Gafford's lob threat creates a layered offense with no obvious defensive counter"
      },
      deathLineup: {
        players: ["Luka Dončić", "Cooper Flagg", "Kyrie Irving", "P.J. Washington", "Daniel Gafford"],
        team: "DAL",
        minutesTogether: 54,
        netRating: 13.1,
        offRating: 118.6,
        defRating: 105.5,
        plusMinus: 29,
        record: "6-4 in games when closing",
        keyStrength: "Flagg's defensive versatility gives Dallas a credible stopper in late-game situations where Dončić's defensive limitations are most exposed"
      },
      worstUnit: {
        players: ["Spencer Dinwiddie", "Naji Marshall", "Maxi Kleber", "Dwight Powell", "Jaden Hardy"],
        team: "DAL",
        minutesTogether: 47,
        netRating: -12.4,
        offRating: 104.1,
        defRating: 116.5,
        plusMinus: -26,
        record: "Equivalent to 4-13 pace",
        keyStrength: "Marshall's defensive activity is the lone bright spot; this unit has no reliable shot creation and wilts against any team with a credible secondary ball-handler"
      },
      rookieLineup: {
        players: ["Cooper Flagg", "Luka Dončić", "Naji Marshall", "P.J. Washington", "Daniel Gafford"],
        team: "DAL",
        minutesTogether: 86,
        netRating: 11.3,
        offRating: 116.4,
        defRating: 105.1,
        plusMinus: 44,
        record: "Equivalent to 11-5 pace",
        keyStrength: "Flagg's off-ball cutting and defensive coverage allow Dončić to operate without a traditional second ball-handler, simplifying rotational reads for the whole unit"
      }
    },

    // 5. Miami Heat — 10-6
    {
      team: "MIA",
      teamRecord: "10-6",
      narrative: "Bam Adebayo's 24-15-12 triple-double against Oklahoma City this week was the most complete individual big-man performance on the entire slate, and Miami's lineup data contextualizes why — the Heat's best unit with Adebayo at center has posted a +19.8 net rating that ranks second in the NBA, built on the most disciplined defensive rotations in the Eastern Conference. Erik Spoelstra has found something genuinely special in the Jimmy Butler-Adebayo-Tyler Herro triangle, where Butler's high-post playmaking feeds both Herro in spot-up situations and Adebayo in short-roll actions that the Thunder had no answer for Sunday. The closing lineup deserves more recognition than it's getting — Miami is 8-2 in games decided by five points or fewer, the best such record in the East, and that speaks to Spoelstra's late-game mastery. The one structural concern is Terry Rozier's shooting volume when Butler is in iso mode — the two players' usage sometimes cannibalizes each other in second-half sets.",
      bestUnit: {
        players: ["Bam Adebayo", "Tyler Herro", "Jimmy Butler", "Caleb Martin", "Terry Rozier"],
        team: "MIA",
        minutesTogether: 374,
        netRating: 19.8,
        offRating: 118.7,
        defRating: 98.9,
        plusMinus: 142,
        record: "Equivalent to 13-3 pace",
        keyStrength: "Adebayo anchors drop coverage while Butler and Herro generate elite mid-range efficiency in Miami's deliberate half-court sets"
      },
      deathLineup: {
        players: ["Jimmy Butler", "Bam Adebayo", "Tyler Herro", "Caleb Martin", "Dru Smith"],
        team: "MIA",
        minutesTogether: 67,
        netRating: 14.9,
        offRating: 115.3,
        defRating: 100.4,
        plusMinus: 38,
        record: "8-2 in games when closing",
        keyStrength: "Dru Smith's defensive intensity over Rozier in closing situations reduces opponent transition opportunities; Adebayo's late-game read-making is unmatched at the position"
      },
      worstUnit: {
        players: ["Duncan Robinson", "Jaime Jaquez Jr.", "Kevin Love", "Haywood Highsmith", "Kyle Lowry"],
        team: "MIA",
        minutesTogether: 36,
        netRating: -13.2,
        offRating: 103.8,
        defRating: 117.0,
        plusMinus: -20,
        record: "Equivalent to 4-13 pace",
        keyStrength: "Three-point spacing from Robinson and Highsmith is the lone offensive virtue; the unit concedes open drives at an unsustainable rate without a credible rim protector"
      }
    },

    // 6. Atlanta Hawks — 11-6
    {
      team: "ATL",
      teamRecord: "11-6",
      narrative: "Atlanta is the most surprising team in the NBA right now, and the structural explanation lives in Dyson Daniels's presence beside Trae Young — a pairing that theoretically should create defensive chaos but has instead produced a +16.7 net rating that ranks fourth league-wide. Daniels's 5-steal, 3-block performance against Detroit this week is not an outlier; it's the weekly manifestation of a defensive coverage that exploits his length and anticipation while Young handles every playmaking responsibility. Quin Snyder has built a system where Daniels's activity level essentially insulates Young from the defensive assignments that used to drain Atlanta's rotational energy, and the results are reflected in a team defense that has jumped from 24th last season to 9th this year. The Jalen Johnson development story is the second-most compelling subplot — his ability to operate as a free-lance playmaker in the second unit has given Atlanta a bench identity they haven't had in years.",
      bestUnit: {
        players: ["Dyson Daniels", "Trae Young", "De'Andre Hunter", "Jalen Johnson", "Clint Capela"],
        team: "ATL",
        minutesTogether: 341,
        netRating: 16.7,
        offRating: 116.2,
        defRating: 99.5,
        plusMinus: 109,
        record: "Equivalent to 12-4 pace",
        keyStrength: "Daniels's defensive omnipresence beside Young's playmaking creates a rare two-way balance Atlanta has never previously sustained"
      },
      deathLineup: {
        players: ["Trae Young", "Dyson Daniels", "De'Andre Hunter", "Jalen Johnson", "Clint Capela"],
        team: "ATL",
        minutesTogether: 55,
        netRating: 12.3,
        offRating: 114.7,
        defRating: 102.4,
        plusMinus: 29,
        record: "7-3 in games when closing",
        keyStrength: "Young's late-game shot creation is elite when given clean pick-and-roll looks; Daniels's ability to guard opposing closers without switching assignments gives Atlanta a structural advantage"
      },
      worstUnit: {
        players: ["Bogdan Bogdanović", "Garrison Mathews", "Bruno Fernando", "Kobe Bufkin", "Vit Krejci"],
        team: "ATL",
        minutesTogether: 33,
        netRating: -15.1,
        offRating: 101.4,
        defRating: 116.5,
        plusMinus: -22,
        record: "Equivalent to 3-14 pace",
        keyStrength: "Three-point attempts are the only thing keeping this unit's offense from complete collapse; Fernando's pick-and-roll coverage is a consistent source of open looks for opponents"
      }
    },

    // 7. Chicago Bulls — 4-12
    {
      team: "CHI",
      teamRecord: "4-12",
      narrative: "Josh Giddey's 23-22-14 line against Denver — one of the most historically significant assist performances in Bulls franchise history — is both the best thing and the most representative thing about Chicago's 2026-27 season: statistically spectacular, occurring in a loss. The Bulls' best lineup unit by net rating is a Giddey-Hield pairing that creates genuine three-level scoring threats, but it only plays together when the game is already lost or won, because Billy Donovan hasn't yet found the right defensive piece to make it work in high-leverage situations. Buddy Hield's 33 points and 7 threes in overtime against Denver show his shooting remains elite, but Chicago's defense in that same game — giving up 45 to Murray and a triple-double to Jokic — illustrates the structural ceiling of this roster. At 4-12, the Bulls need to decide whether this is a rebuild or a retool, because the current construction is neither young enough to develop nor good enough to compete.",
      bestUnit: {
        players: ["Josh Giddey", "Buddy Hield", "Patrick Williams", "Nikola Vučević", "Zach LaVine"],
        team: "CHI",
        minutesTogether: 187,
        netRating: 6.4,
        offRating: 116.8,
        defRating: 110.4,
        plusMinus: 42,
        record: "Equivalent to 8-9 pace",
        keyStrength: "Hield and Giddey create a unique combination of three-point volume and playmaking that defenses struggle to prioritize; Vučević's mid-range efficiency adds a third scoring dimension"
      },
      deathLineup: {
        players: ["Zach LaVine", "Josh Giddey", "Patrick Williams", "Nikola Vučević", "Ayo Dosunmu"],
        team: "CHI",
        minutesTogether: 48,
        netRating: -3.7,
        offRating: 109.4,
        defRating: 113.1,
        plusMinus: -11,
        record: "2-7 in games when closing",
        keyStrength: "LaVine's isolation scoring gives Chicago a reliably created shot in the final possession, but the absence of a credible perimeter stopper makes defensive stops near-impossible"
      },
      worstUnit: {
        players: ["Coby White", "Julian Phillips", "Dalen Terry", "Adama Sanogo", "Torrey Craig"],
        team: "CHI",
        minutesTogether: 51,
        netRating: -18.3,
        offRating: 98.7,
        defRating: 117.0,
        plusMinus: -44,
        record: "Equivalent to 2-15 pace",
        keyStrength: "Athletic upside and defensive effort are present but this unit's shot creation is essentially nonexistent against any organized half-court defense"
      }
    },

    // 8. Golden State Warriors — 9-8
    {
      team: "GSW",
      teamRecord: "9-8",
      narrative: "Golden State's 1-point home win over Boston this week was the most revealing performance of their season — Steve Kerr's closing lineup held Tatum to a missed final possession while running a modified death lineup that reintroduced Draymond Green as the primary screener in a Steph Curry pick-and-roll, a wrinkle that beat Boston's switching coverage and created the decisive advantage. The Warriors' best unit remains elite when Curry is operating downhill, but the team's 9-8 record reflects a second unit that is statistically the worst in the Western Conference, posting a -13.8 net rating that erases every lead the starters build. Moses Moody has emerged as the most important developmental piece — his ability to guard 1-through-3 gives Kerr flexibility in lineup construction that he hasn't had since Klay Thompson's departure. The question for Golden State is whether this is a team that beats Boston on a given night or one that makes the second round of the playoffs — the lineup data says the former is more likely than the latter.",
      bestUnit: {
        players: ["Stephen Curry", "Draymond Green", "Andrew Wiggins", "Moses Moody", "Trayce Jackson-Davis"],
        team: "GSW",
        minutesTogether: 331,
        netRating: 14.2,
        offRating: 118.6,
        defRating: 104.4,
        plusMinus: 112,
        record: "Equivalent to 11-5 pace",
        keyStrength: "Curry's gravity off screens combined with Green's read-and-react playmaking creates a system where every player becomes a credible threat without requiring individual creation"
      },
      deathLineup: {
        players: ["Stephen Curry", "Draymond Green", "Andrew Wiggins", "Moses Moody", "Brandin Podziemski"],
        team: "GSW",
        minutesTogether: 63,
        netRating: 9.8,
        offRating: 116.1,
        defRating: 106.3,
        plusMinus: 25,
        record: "6-4 in games when closing",
        keyStrength: "Podziemski's shooting replaces Jackson-Davis's rim presence in closing situations where spacing matters more than interior scoring; Green's defensive communication is unmatched at the clutch level"
      },
      worstUnit: {
        players: ["Brandin Podziemski", "Pat Spencer", "Jonathan Kuminga", "Gary Payton II", "Kevon Looney"],
        team: "GSW",
        minutesTogether: 58,
        netRating: -13.8,
        offRating: 102.3,
        defRating: 116.1,
        plusMinus: -37,
        record: "Equivalent to 4-13 pace",
        keyStrength: "Payton's defensive activity and Looney's rebounding are the unit's floor, but the lack of a credible ball-handler makes offensive sets predictable and easy to defend"
      }
    },

    // 9. Oklahoma City Thunder — 10-7
    {
      team: "OKC",
      teamRecord: "10-7",
      narrative: "Oklahoma City came to Kaseya Center to take a scalp from Miami and left with a 10-point loss — but the lineup data from that game reveals something important: the Thunder's best unit was genuinely competitive for three quarters before Adebayo's third-quarter burst made the defensive assignments impossible to maintain. Shai Gilgeous-Alexander's first unit continues to be one of the most versatile defensive groups in the NBA, but OKC's offensive rating drops from 118.4 with their best five to 108.1 with any other combination, a split that reflects how much of their offense runs through SGA's creation and how little secondary ball-handling exists behind him. Chet Holmgren's development as a mid-range scorer is the most important process variable for this team — when he's shooting over 48 percent from the elbow, the Thunder's offensive floor rises significantly. Mark Daigneault has built one of the NBA's best defensive systems around his roster's youth and length, and the 10-7 record underrepresents the team's true talent level.",
      bestUnit: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Joe"],
        team: "OKC",
        minutesTogether: 362,
        netRating: 13.6,
        offRating: 118.4,
        defRating: 104.8,
        plusMinus: 118,
        record: "Equivalent to 11-5 pace",
        keyStrength: "SGA's creation paired with Holmgren's floor-stretch and Dort's perimeter lockdown gives OKC a unique combination of offensive efficiency and defensive continuity"
      },
      deathLineup: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Chet Holmgren", "Luguentz Dort", "Aaron Wiggins"],
        team: "OKC",
        minutesTogether: 59,
        netRating: 8.3,
        offRating: 114.7,
        defRating: 106.4,
        plusMinus: 22,
        record: "6-4 in games when closing",
        keyStrength: "SGA-Williams two-man game in isolation and pick-and-roll is the most reliable source of created shots in the Thunder's closing playbook"
      },
      worstUnit: {
        players: ["Aaron Wiggins", "Kenrich Williams", "Bismack Biyombo", "Ousmane Dieng", "Jaylin Williams"],
        team: "OKC",
        minutesTogether: 43,
        netRating: -14.7,
        offRating: 101.2,
        defRating: 115.9,
        plusMinus: -28,
        record: "Equivalent to 4-13 pace",
        keyStrength: "Defensive effort is genuine and Kenrich Williams's motor keeps the unit competitive for stretches, but the offensive creation deficit is simply too severe to generate sustainable scoring"
      }
    },

    // 10. Utah Jazz — 3-15
    {
      team: "UTA",
      teamRecord: "3-15",
      narrative: "Svi Mykhailiuk's 39-point, 10-three eruption nearly beat Dallas this week, and while the Jazz ultimately lost by 2, the game crystallized what Utah's season actually is: an individual player development laboratory where unexpected performances happen amid consistent team-level losing. Utah's best lineup unit by net rating is a Mykhailiuk-centered second unit that plays free and without consequence, posting a +4.1 net rating in a sample too small to be meaningful but large enough to be interesting. The starting unit's -18.6 net rating is one of the worst in the NBA and reflects the deliberate absence of talent that Danny Ainge's rebuild demands at this stage. Keyonte George is the development story worth watching — his shot creation in pick-and-roll has improved demonstrably over the past three weeks, and if that trend holds, Utah's rebuild has a legitimate foundation to build around. For now, though, this is a team that is best appreciated for individual moments rather than collective results.",
      bestUnit: {
        players: ["Svi Mykhailiuk", "Keyonte George", "Brice Sensabaugh", "Taylor Hendricks", "Walker Kessler"],
        team: "UTA",
        minutesTogether: 89,
        netRating: 4.1,
        offRating: 110.3,
        defRating: 106.2,
        plusMinus: 14,
        record: "Equivalent to 8-9 pace",
        keyStrength: "Mykhailiuk's shooting volume creates genuine spacing that unlocks George's drive-and-kick sequences; Kessler's rim protection gives the unit a legitimate defensive anchor"
      },
      deathLineup: {
        players: ["Keyonte George", "Svi Mykhailiuk", "Taylor Hendricks", "Walker Kessler", "Brice Sensabaugh"],
        team: "UTA",
        minutesTogether: 34,
        netRating: -1.4,
        offRating: 107.8,
        defRating: 109.2,
        plusMinus: -3,
        record: "1-6 in games when closing",
        keyStrength: "George's late-game creation is the unit's only reliable path to a generated shot; Mykhailiuk's shooting threat keeps defenses honest but can't compensate for the overall talent gap"
      },
      worstUnit: {
        players: ["Johnny Juzang", "Luka Samanic", "Micah Potter", "Cody Williams", "Zakai Zeigler"],
        team: "UTA",
        minutesTogether: 52,
        netRating: -22.4,
        offRating: 96.3,
        defRating: 118.7,
        plusMinus: -55,
        record: "Equivalent to 1-16 pace",
        keyStrength: "Youth and energy are present in abundance; actual basketball competitiveness is not — this is a development unit playing developmental minutes against NBA starters"
      },
      rookieLineup: {
        players: ["Cody Williams", "Keyonte George", "Brice Sensabaugh", "Taylor Hendricks", "Walker Kessler"],
        team: "UTA",
        minutesTogether: 71,
        netRating: -6.8,
        offRating: 105.4,
        defRating: 112.2,
        plusMinus: -24,
        record: "Equivalent to 6-11 pace",
        keyStrength: "Williams and Sensabaugh show real offensive instincts in transition; Hendricks's defensive positioning has improved notably over the past two weeks and represents the unit's best long-term projection"
      }
    }
  ]
};