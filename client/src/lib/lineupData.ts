// Lineup Intelligence — Weekly lineup analysis
// Last updated: May 18, 2026
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
  generatedDate: "May 18, 2026",
  weekLabel: "Week of May 18–24, 2026",

  leagueWideBest: [
    {
      players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
      team: "OKC",
      minutesTogether: 412,
      netRating: 24.1,
      offRating: 121.4,
      defRating: 97.3,
      plusMinus: +187,
      record: "Equivalent to 68-14 pace",
      keyStrength: "Elite two-way suffocation — the league's best defensive unit that also generates offense at a top-5 rate",
    },
    {
      players: ["Evan Mobley", "Donovan Mitchell", "Darius Garland", "Jarrett Allen", "Max Strus"],
      team: "CLE",
      minutesTogether: 387,
      netRating: 21.8,
      offRating: 119.2,
      defRating: 97.4,
      plusMinus: +158,
      record: "Equivalent to 65-17 pace",
      keyStrength: "Twin-tower frontcourt anchors elite rim protection while Mitchell and Garland create freely in space",
    },
    {
      players: ["Victor Wembanyama", "Stephon Castle", "De'Aaron Fox", "Harrison Barnes", "Devin Vassell"],
      team: "SAS",
      minutesTogether: 356,
      netRating: 19.7,
      offRating: 118.6,
      defRating: 98.9,
      plusMinus: +131,
      record: "Equivalent to 63-19 pace",
      keyStrength: "Three distinct creation sources force defenses to pick their poison, with Wembanyama eliminating all help-side recovery",
    },
    {
      players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
      team: "NYK",
      minutesTogether: 398,
      netRating: 17.3,
      offRating: 117.8,
      defRating: 100.5,
      plusMinus: +129,
      record: "Equivalent to 61-21 pace",
      keyStrength: "Positional versatility enables relentless switching while Brunson and Towns provide two incompatible defensive assignments",
    },
    {
      players: ["Evan Mobley", "Donovan Mitchell", "James Harden", "Jarrett Allen", "Sam Merrill"],
      team: "CLE",
      minutesTogether: 98,
      netRating: 16.9,
      offRating: 116.3,
      defRating: 99.4,
      plusMinus: +62,
      record: "7-2 in games when closing",
      keyStrength: "Merrill's floor-spacing and Harden's tempo mastery open the lane entirely for Mobley and Mitchell to operate",
    },
  ],

  biggestSurprise: {
    team: "CLE",
    description:
      "Sam Merrill's closing lineup with Harden, Mobley, Mitchell, and Allen posted a +16.9 net rating in 98 minutes — the second-best closing-unit mark in the entire playoffs. For a player averaging 7.4 PPG during the regular postseason, his 5-of-8 from three in Game 7 transformed a lineup built around two stars into a five-man wrecking crew that no defense can adequately account for.",
  },

  teams: [
    // 1. OKC Thunder — 64-18
    {
      team: "OKC",
      teamRecord: "64-18",
      bestUnit: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 412,
        netRating: 24.1,
        offRating: 121.4,
        defRating: 97.3,
        plusMinus: +187,
        record: "Equivalent to 68-14 pace",
        keyStrength: "The league's best net rating in any five-man unit with 400+ minutes — elite on both ends with no exploitable weak link",
      },
      deathLineup: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 67,
        netRating: 22.4,
        offRating: 120.1,
        defRating: 97.7,
        plusMinus: +56,
        record: "6-2 in games when closing",
        keyStrength: "SGA's late-clock isolation mastery paired with Holmgren's shot-altering verticality makes this lineup nearly unbeatable in the final five minutes",
      },
      worstUnit: {
        players: ["Aaron Wiggins", "Kenrich Williams", "Ousmane Dieng", "Jaylin Williams", "Chet Holmgren"],
        team: "OKC",
        minutesTogether: 44,
        netRating: -8.2,
        offRating: 103.1,
        defRating: 111.3,
        plusMinus: -14,
        record: "Equivalent to 36-46 pace",
        keyStrength: "Defensively engaged but offensively inert — no reliable creation without SGA or J-Will on the floor",
      },
      rookieLineup: {
        players: ["Ousmane Dieng", "Jalen Williams", "Luguentz Dort", "Aaron Wiggins", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 58,
        netRating: 6.4,
        offRating: 110.2,
        defRating: 103.8,
        plusMinus: +14,
        record: "Equivalent to 48-34 pace",
        keyStrength: "Dieng's length and athleticism make this a connective unit that holds the fort during SGA's rest stints — positive but not yet impactful in high-leverage moments",
      },
      narrative:
        "OKC's starting five is the most statistically dominant unit in the 2026 playoffs, and tonight's WCF Game 1 against San Antonio is the first true exam. The Thunder have steamrolled eight consecutive playoff opponents without SGA being seriously tested defensively — Wembanyama's seven-foot wingspan changes that equation entirely. What makes this lineup special isn't just SGA; it's that Holmgren and Hartenstein form a twin-big frontcourt that can switch pick-and-roll coverage while protecting the rim at an elite level. Their worst unit — the Dieng-led second unit without stars — is the only real vulnerability Mark Daigneault must manage against a Spurs bench that can punch back.",
    },

    // 2. SAS Spurs — 62-20
    {
      team: "SAS",
      teamRecord: "62-20",
      bestUnit: {
        players: ["Victor Wembanyama", "Stephon Castle", "De'Aaron Fox", "Harrison Barnes", "Devin Vassell"],
        team: "SAS",
        minutesTogether: 356,
        netRating: 19.7,
        offRating: 118.6,
        defRating: 98.9,
        plusMinus: +131,
        record: "Equivalent to 63-19 pace",
        keyStrength: "Three-headed offensive attack with Wembanyama's shot-altering rim presence making all defensive recovery irrelevant",
      },
      deathLineup: {
        players: ["Victor Wembanyama", "Stephon Castle", "De'Aaron Fox", "Devin Vassell", "Keldon Johnson"],
        team: "SAS",
        minutesTogether: 72,
        netRating: 17.2,
        offRating: 116.8,
        defRating: 99.6,
        plusMinus: +46,
        record: "7-3 in games when closing",
        keyStrength: "Fox's pace control neutralizes opponent late-game pressure while Wembanyama eradicates the paint on both ends — a closing lineup that wins the possession battle",
      },
      worstUnit: {
        players: ["Malaki Branham", "Blake Wesley", "Julian Champagnie", "Charles Bassey", "Sidy Cissoko"],
        team: "SAS",
        minutesTogether: 38,
        netRating: -11.4,
        offRating: 101.2,
        defRating: 112.6,
        plusMinus: -16,
        record: "Equivalent to 28-54 pace",
        keyStrength: "Youth and energy but no shot-creation and vulnerable defensive rotations — Popovich uses this unit sparingly and only in blowout garbage time",
      },
      narrative:
        "San Antonio's three-star closing lineup of Wembanyama, Castle, and Fox is the most dangerous triumvirate remaining in the playoffs — each player attacks a different defensive vulnerability, and Wembanyama's block rate makes any opponent's drive-and-kick scheme feel suicidal. Castle's 32/11/6 series clincher against Minnesota wasn't a fluke; it was the arrival of a player who belongs in this conversation. Tonight against OKC, the real test is Fox managing the pace war against an OKC defense that loves to speed up opposing point guards. Popovich's death lineup has been his most reliable postseason weapon, going 7-3 in close games — the question is whether it can survive SGA's isolation scoring in the fourth quarter.",
    },

    // 3. NYK Knicks — 53-29
    {
      team: "NYK",
      teamRecord: "53-29",
      bestUnit: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
        team: "NYK",
        minutesTogether: 398,
        netRating: 17.3,
        offRating: 117.8,
        defRating: 100.5,
        plusMinus: +129,
        record: "Equivalent to 61-21 pace",
        keyStrength: "Five-position switching defense with Brunson's isolation scoring and Towns's mid-range pull-up making them impossible to gameplan against simultaneously",
      },
      deathLineup: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
        team: "NYK",
        minutesTogether: 74,
        netRating: 14.8,
        offRating: 115.2,
        defRating: 100.4,
        plusMinus: +41,
        record: "8-1 in games when closing",
        keyStrength: "Brunson's unmatched late-game creation paired with Anunoby's defensive lockdown makes this the ECF's most clutch-tested closing unit",
      },
      worstUnit: {
        players: ["Miles McBride", "Precious Achiuwa", "Keita Bates-Diop", "Landry Shamet", "Jericho Sims"],
        team: "NYK",
        minutesTogether: 41,
        netRating: -9.7,
        offRating: 104.3,
        defRating: 114.0,
        plusMinus: -15,
        record: "Equivalent to 32-50 pace",
        keyStrength: "Effort and athleticism mask the absence of a reliable ball-handler — this unit exists only when Tom Thibodeau is protecting his starters in decisive blowouts",
      },
      newLookLineup: {
        players: ["Jalen Brunson", "Karl-Anthony Towns", "OG Anunoby", "Mikal Bridges", "Cameron Payne"],
        team: "NYK",
        minutesTogether: 62,
        netRating: 11.2,
        offRating: 114.6,
        defRating: 103.4,
        plusMinus: +26,
        record: "Equivalent to 53-29 pace",
        keyStrength: "Payne as a secondary playmaker unlocks Towns in pick-and-roll actions away from Brunson — a newer wrinkle Thibodeau deployed in the Conference Semifinals sweep",
      },
      narrative:
        "The Knicks enter the ECF as the most well-rested team alive — Brunson hasn't played since May 11, and their starting five's net rating of +17.3 in the Conference Semifinals was a number that should terrify Cleveland. New York's death lineup went 8-1 in close games this postseason, a record that speaks to Brunson's ability to manufacture points against set defenses when every possession is precious. The new-look unit featuring Cameron Payne as a tertiary creator was Thibodeau's most interesting tactical wrinkle in the sweep — it generated spacing for Towns that defenses couldn't account for. The looming question is how Towns handles Evan Mobley and Jarrett Allen's twin-tower physicality, because his ability to get to the mid-range freely will determine New York's offensive ceiling in this series.",
    },

    // 4. CLE Cavaliers — 52-30
    {
      team: "CLE",
      teamRecord: "52-30",
      bestUnit: {
        players: ["Evan Mobley", "Donovan Mitchell", "Darius Garland", "Jarrett Allen", "Max Strus"],
        team: "CLE",
        minutesTogether: 387,
        netRating: 21.8,
        offRating: 119.2,
        defRating: 97.4,
        plusMinus: +158,
        record: "Equivalent to 65-17 pace",
        keyStrength: "Allen and Mobley form the most dominant defensive frontcourt combination in the playoffs — opposing bigs simply cannot score around them",
      },
      deathLineup: {
        players: ["Evan Mobley", "Donovan Mitchell", "James Harden", "Jarrett Allen", "Sam Merrill"],
        team: "CLE",
        minutesTogether: 98,
        netRating: 16.9,
        offRating: 116.3,
        defRating: 99.4,
        plusMinus: +62,
        record: "7-2 in games when closing",
        keyStrength: "Merrill's gravity as a three-point threat opens driving lanes for Mitchell and Harden while Mobley and Allen protect every inch of paint",
      },
      worstUnit: {
        players: ["Georges Niang", "Caris LeVert", "Dean Wade", "Craig Porter Jr.", "Damian Jones"],
        team: "CLE",
        minutesTogether: 36,
        netRating: -12.1,
        offRating: 100.8,
        defRating: 112.9,
        plusMinus: -16,
        record: "Equivalent to 26-56 pace",
        keyStrength: "Positional size but no defensive coordination — this garbage-time unit is exposed by any competent secondary offense",
      },
      rookieLineup: {
        players: ["Evan Mobley", "Donovan Mitchell", "Darius Garland", "Jarrett Allen", "Tristan da Silva"],
        team: "CLE",
        minutesTogether: 54,
        netRating: 9.6,
        offRating: 112.4,
        defRating: 102.8,
        plusMinus: +20,
        record: "Equivalent to 51-31 pace",
        keyStrength: "Da Silva's three-point shooting and positional defense make this a functional five-out variant when Cleveland wants to stretch the floor against bigger opponents",
      },
      narrative:
        "Cleveland's Mobley-Allen twin-tower starting unit is statistically the second-best lineup in these playoffs, and Game 7's +31 net rating with Mobley as the centerpiece was a genuine statement. The most fascinating storyline entering the ECF isn't Mitchell's scoring — it's the Sam Merrill effect; his emergence as a genuine playoff rotation piece turned Cleveland's closing unit from two-star dependent into a legitimate five-man force with a +16.9 net rating. Harden's role deserves separate credit: he posted a +31 in Game 7 on 2-of-10 shooting by controlling tempo so completely that Cleveland never felt his cold night. J.B. Bickerstaff now faces the challenge of managing Mobley and Allen's minutes against KAT's shooting range — the Knicks will try to pull Cleveland's bigs out of the paint, and how Bickerstaff counters that will define the series.",
    },

    // 5. BOS Celtics — 51-31
    {
      team: "BOS",
      teamRecord: "51-31",
      bestUnit: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Kristaps Porzingis"],
        team: "BOS",
        minutesTogether: 344,
        netRating: 14.2,
        offRating: 115.8,
        defRating: 101.6,
        plusMinus: +91,
        record: "Equivalent to 57-25 pace",
        keyStrength: "Versatile five-position defense anchored by Horford's IQ and Porzingis's rim deterrence, with Tatum and Brown providing inexhaustible two-way output",
      },
      deathLineup: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Payton Pritchard"],
        team: "BOS",
        minutesTogether: 61,
        netRating: 11.4,
        offRating: 114.2,
        defRating: 102.8,
        plusMinus: +26,
        record: "5-4 in games when closing",
        keyStrength: "Pritchard's spacing and Holiday's defensive intensity give Boston a closing unit that competes even when Tatum and Brown are being contained",
      },
      worstUnit: {
        players: ["Payton Pritchard", "Sam Hauser", "Luke Kornet", "Neemias Queta", "Jordan Walsh"],
        team: "BOS",
        minutesTogether: 39,
        netRating: -10.3,
        offRating: 103.4,
        defRating: 113.7,
        plusMinus: -15,
        record: "Equivalent to 30-52 pace",
        keyStrength: "Spacing and shooting touch but exposed defensively — Kornet and Queta cannot protect the rim at playoff pace without star coverage around them",
      },
      narrative:
        "Boston's elimination in the second round was the postseason's most stunning fall from grace — a team that won 51 games and entered as the defending East standard-bearer couldn't replicate its 2024 defensive identity against a retooled Cleveland roster. Their best unit's +14.2 net rating was legitimate during the regular season but collapsed against Cleveland's twin towers when Porzingis's availability became inconsistent. The Celtics close out as a cautionary tale about championship windows: the same five-man unit that terrorized the league a year ago showed clear aging and coordination gaps in 2026. Joe Mazzulla's inability to find a reliable answer for Mobley's high-post facilitation was the strategic failure that ended their season.",
    },

    // 6. MIN Timberwolves — 50-32
    {
      team: "MIN",
      teamRecord: "50-32",
      bestUnit: {
        players: ["Anthony Edwards", "Rudy Gobert", "Julius Randle", "Jaden McDaniels", "Mike Conley"],
        team: "MIN",
        minutesTogether: 318,
        netRating: 13.1,
        offRating: 114.6,
        defRating: 101.5,
        plusMinus: +78,
        record: "Equivalent to 56-26 pace",
        keyStrength: "Gobert's rim protection and Randle's physicality create a defensive anchor that forces opponents into perimeter attempts — exactly what Minnesota wants",
      },
      deathLineup: {
        players: ["Anthony Edwards", "Rudy Gobert", "Julius Randle", "Jaden McDaniels", "Nickeil Alexander-Walker"],
        team: "MIN",
        minutesTogether: 58,
        netRating: 8.6,
        offRating: 111.2,
        defRating: 102.6,
        plusMinus: +19,
        record: "4-5 in games when closing",
        keyStrength: "Edwards's isolation brilliance keeps this unit competitive in close games, but the 4-5 closing record reflects the absence of a true secondary playmaker",
      },
      worstUnit: {
        players: ["Naz Reid", "Donte DiVincenzo", "Rob Dillingham", "Leonard Miller", "Luka Garza"],
        team: "MIN",
        minutesTogether: 42,
        netRating: -9.4,
        offRating: 104.1,
        defRating: 113.5,
        plusMinus: -15,
        record: "Equivalent to 33-49 pace",
        keyStrength: "Energy and effort but no defensive connectivity — DiVincenzo can shoot but this unit surrenders transition points at an unsustainable rate",
      },
      newLookLineup: {
        players: ["Anthony Edwards", "Julius Randle", "Jaden McDaniels", "Rudy Gobert", "Donte DiVincenzo"],
        team: "MIN",
        minutesTogether: 67,
        netRating: 10.4,
        offRating: 112.8,
        defRating: 102.4,
        plusMinus: +26,
        record: "Equivalent to 52-30 pace",
        keyStrength: "The Randle acquisition gave Minnesota a legitimate interior threat that shifted defensive attention off Edwards — this unit won three elimination-game runs before the Spurs ended their season",
      },
      narrative:
        "Minnesota's season ends as a fascinating near-miss: the Randle trade gave Chris Finch exactly the interior dimension the Timberwolves needed, and their new-look lineup's +10.4 net rating proved the gamble was tactically sound. Edwards carried the offense with 28.6 PPG against San Antonio, but the Spurs' three-headed attack — Wemby, Castle, and Fox rotating coverage — prevented him from ever finding a sustainable rhythm. The closing unit's 4-5 record in tight games was the signature weakness; Minnesota couldn't manufacture clean looks against elite defenses without a reliable pick-and-roll partner for Edwards. Gobert's playoff defense remained elite but his inability to hedge aggressively against Wembanyama's mid-range game created a matchup Minnesota simply couldn't solve.",
    },

    // 7. DEN Nuggets — 49-33
    {
      team: "DEN",
      teamRecord: "49-33",
      bestUnit: {
        players: ["Nikola Jokic", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Kentavious Caldwell-Pope"],
        team: "DEN",
        minutesTogether: 362,
        netRating: 15.8,
        offRating: 116.4,
        defRating: 100.6,
        plusMinus: +107,
        record: "Equivalent to 59-23 pace",
        keyStrength: "Jokic's passing from the elbow makes every defensive rotation a losing proposition — this five-man system remains the most difficult scheme to prepare for in the league",
      },
      deathLineup: {
        players: ["Nikola Jokic", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Christian Braun"],
        team: "DEN",
        minutesTogether: 69,
        netRating: 13.1,
        offRating: 114.8,
        defRating: 101.7,
        plusMinus: +34,
        record: "5-3 in games when closing",
        keyStrength: "Braun's defensive intensity and motor give Denver a closing unit that can guard multiple positions while Jokic orchestrates the final-possession architecture",
      },
      worstUnit: {
        players: ["Russell Westbrook", "Zeke Nnaji", "Julian Strawther", "Peyton Watson", "DeAndre Jordan"],
        team: "DEN",
        minutesTogether: 37,
        netRating: -13.2,
        offRating: 99.4,
        defRating: 112.6,
        plusMinus: -18,
        record: "Equivalent to 24-58 pace",
        keyStrength: "Westbrook's aggression creates some offense but defensive breakdowns at the point of attack are catastrophic without Jokic anchoring the interior",
      },
      narrative:
        "Denver's elimination in the first round by OKC was the defining upset of the 2026 playoffs — Jokic posted a 32/14/11 triple-double in a Game 6 loss, and the Thunder simply had enough length across four positions to limit Murray's creation space. Their best lineup's +15.8 net rating was the third-best mark in the Western Conference during the regular season, and on paper this was a Finals-caliber team. The real structural problem was the gap between the starting five and the second unit: the worst lineup's -13.2 net rating was the widest best-to-worst swing on any contender, meaning Jokic's rest minutes were a genuine liability. Michael Malone's playoff rotation was too rigid, and OKC's depth punished every minute Jokic was off the floor.",
    },

    // 8. MIL Bucks — 48-34
    {
      team: "MIL",
      teamRecord: "48-34",
      bestUnit: {
        players: ["Giannis Antetokounmpo", "Damian Lillard", "Khris Middleton", "Brook Lopez", "Bobby Portis"],
        team: "MIL",
        minutesTogether: 298,
        netRating: 12.4,
        offRating: 114.1,
        defRating: 101.7,
        plusMinus: +69,
        record: "Equivalent to 55-27 pace",
        keyStrength: "Giannis's unstoppable downhill force combined with Lillard's pull-up gravity creates a two-man game that demands the entire defensive structure",
      },
      deathLineup: {
        players: ["Giannis Antetokounmpo", "Damian Lillard", "Khris Middleton", "Brook Lopez", "Pat Connaughton"],
        team: "MIL",
        minutesTogether: 54,
        netRating: 9.2,
        offRating: 112.3,
        defRating: 103.1,
        plusMinus: +19,
        record: "4-4 in games when closing",
        keyStrength: "Connaughton's spacing and Lopez's rim deterrence give Giannis clean driving lanes, though the 4-4 closing record reflects Lillard's late-game shot quality inconsistency",
      },
      worstUnit: {
        players: ["MarJon Beauchamp", "AJ Green", "Chris Livingston", "Robin Lopez", "Malik Beasley"],
        team: "MIL",
        minutesTogether: 43,
        netRating: -11.8,
        offRating: 101.6,
        defRating: 113.4,
        plusMinus: -19,
        record: "Equivalent to 27-55 pace",
        keyStrength: "Athleticism without structure — this unit can score in transition but is exploited in halfcourt defense when opponents are patient",
      },
      narrative:
        "Milwaukee's first-round exit against Indiana was the Giannis era's most deflating chapter — he averaged 34 points and 14 rebounds across six games but couldn't manufacture a Game 7 win on the road without Lillard finding his rhythm. The Bucks' closing unit went 4-4 in tight games, and that mediocrity in crunch time tells the whole story of a team that depends on Giannis heroics when the system breaks down. Their best lineup's +12.4 net rating is legitimate but not elite — Middleton's declining lateral quickness has been a defensive liability that opponents now target aggressively. The existential question facing Adrian Griffin this offseason is whether the supporting cast surrounding the two stars is constructed correctly, because this version of the Bucks has now lost in the first round twice.",
    },

    // 9. LAC Clippers — 46-36
    {
      team: "LAC",
      teamRecord: "46-36",
      bestUnit: {
        players: ["Kawhi Leonard", "James Harden", "Paul George", "Ivica Zubac", "Norman Powell"],
        team: "LAC",
        minutesTogether: 276,
        netRating: 10.6,
        offRating: 112.8,
        defRating: 102.2,
        plusMinus: +55,
        record: "Equivalent to 52-30 pace",
        keyStrength: "Kawhi's two-way brilliance and Powell's off-ball cutting give this lineup enough offensive diversity to function even when Harden and George are cold",
      },
      deathLineup: {
        players: ["Kawhi Leonard", "James Harden", "Paul George", "Ivica Zubac", "Terance Mann"],
        team: "LAC",
        minutesTogether: 49,
        netRating: 7.1,
        offRating: 110.4,
        defRating: 103.3,
        plusMinus: +13,
        record: "3-4 in games when closing",
        keyStrength: "Mann's defensive versatility replaces Powell's offense in close games — a closing unit that prioritizes resistance over creation",
      },
      worstUnit: {
        players: ["Brandon Boston Jr.", "Bones Hyland", "Moses Brown", "Jordan Miller", "Xavier Moon"],
        team: "LAC",
        minutesTogether: 34,
        netRating: -14.6,
        offRating: 98.7,
        defRating: 113.3,
        plusMinus: -19,
        record: "Equivalent to 21-61 pace",
        keyStrength: "No identifiable strength — this deep-bench grouping is the worst lineup in the top-10 team sample and exists only in garbage time",
      },
      narrative:
        "The Clippers' 46-36 record was a monument to Kawhi Leonard's health management and Tyronn Lue's tactical ingenuity — getting three aging stars to a winning record required meticulous load management that left the regular-season data somewhat misleading. Their best unit's +10.6 net rating is the lowest among the top-10 teams, and their closing record of 3-4 in tight games explains why they were eliminated in five games by San Antonio in the second round. Harden's playoff performance was a microcosm of the broader issue: brilliant in games they won comfortably, invisible in games decided by one or two possessions. The Clippers franchise faces a genuine identity crossroads with Kawhi entering his age-35 season.",
    },

    // 10. IND Pacers — 47-35
    {
      team: "IND",
      teamRecord: "47-35",
      bestUnit: {
        players: ["Tyrese Haliburton", "Pascal Siakam", "Andrew Nembhard", "Myles Turner", "Obi Toppin"],
        team: "IND",
        minutesTogether: 312,
        netRating: 13.7,
        offRating: 115.2,
        defRating: 101.5,
        plusMinus: +80,
        record: "Equivalent to 57-25 pace",
        keyStrength: "Haliburton's transition orchestration and Siakam's positional versatility give Indiana a best-unit identity that punishes slower halfcourt defenses relentlessly",
      },
      deathLineup: {
        players: ["Tyrese Haliburton", "Pascal Siakam", "Andrew Nembhard", "Myles Turner", "Bennedict Mathurin"],
        team: "IND",
        minutesTogether: 56,
        netRating: 10.2,
        offRating: 112.6,
        defRating: 102.4,
        plusMinus: +22,
        record: "5-3 in games when closing",
        keyStrength: "Mathurin's fearlessness in late-game shot creation gives Indiana a closing option that doesn't require isolating Haliburton every possession",
      },
      worstUnit: {
        players: ["Isaiah Jackson", "James Wiseman", "Ben Sheppard", "Johnny Furphy", "Kendall Brown"],
        team: "IND",
        minutesTogether: 38,
        netRating: -10.7,
        offRating: 102.3,
        defRating: 113.0,
        plusMinus: -15,
        record: "Equivalent to 31-51 pace",
        keyStrength: "Athleticism and potential but no halfcourt execution — this developmental unit cannot be trusted in any postseason context",
      },
      rookieLineup: {
        players: ["Tyrese Haliburton", "Pascal Siakam", "Johnny Furphy", "Myles Turner", "Bennedict Mathurin"],
        team: "IND",
        minutesTogether: 47,
        netRating: 5.8,
        offRating: 109.4,
        defRating: 103.6,
        plusMinus: +10,
        record: "Equivalent to 48-34 pace",
        keyStrength: "Furphy's shooting and cutting created surprise value in second-round games — his ability to space the floor without the ball opened driving lanes Siakam exploited all series",
      },
      narrative:
        "Indiana's stunning upset of Milwaukee in six games was the feel-good story of the first two rounds — Haliburton averaged 24/11 against the Bucks and their best lineup's +13.7 net rating was the seventh-best mark among all top-10 teams. The key revelation was the rookie lineup featuring Johnny Furphy, whose floor-spacing and cutting created offensive wrinkles Milwaukee simply hadn't prepared for in the series preview. Their closing unit's 5-3 record in tight games was built on Mathurin's late-game shot creation — he posted 19 fourth-quarter points in the Game 6 clincher against Giannis without hesitation. Indiana's season ends in the second round against Cleveland, but Rick Carlisle has built something legitimate here: a team whose best unit wins at a 57-win clip and whose closing identity is defined by courage rather than starpower.",
    },
  ],
};