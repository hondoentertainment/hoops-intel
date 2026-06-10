// Lineup Intelligence — Weekly lineup analysis
// Last updated: June 8, 2026
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
  generatedDate: "June 8, 2026",
  weekLabel: "Week of June 8–14, 2026",
  leagueWideBest: [
    {
      players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
      team: "NYK",
      minutesTogether: 487,
      netRating: 18.4,
      offRating: 121.7,
      defRating: 103.3,
      plusMinus: 214,
      record: "Equivalent to 58-24 pace",
      keyStrength: "Elite pick-and-roll coverage with Towns pulling Wembanyama off the rim; Brunson creates freely in space"
    },
    {
      players: ["De'Aaron Fox", "Stephon Castle", "Dalen Terry", "Harrison Barnes", "Victor Wembanyama"],
      team: "SAS",
      minutesTogether: 412,
      netRating: 16.1,
      offRating: 119.4,
      defRating: 103.3,
      plusMinus: 158,
      record: "Equivalent to 55-27 pace",
      keyStrength: "Wembanyama as the fulcrum of a two-big-hunting attack; Fox and Castle create chaos in the open court"
    },
    {
      players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
      team: "OKC",
      minutesTogether: 398,
      netRating: 15.7,
      offRating: 118.2,
      defRating: 102.5,
      plusMinus: 149,
      record: "Equivalent to 54-28 pace",
      keyStrength: "Dort and Hartenstein anchor the league's most suffocating half-court defense while SGA hunts mismatches"
    },
    {
      players: ["Tyrese Haliburton", "Andrew Nembhard", "Aaron Nesmith", "Pascal Siakam", "Myles Turner"],
      team: "IND",
      minutesTogether: 356,
      netRating: 14.9,
      offRating: 120.1,
      defRating: 105.2,
      plusMinus: 127,
      record: "Equivalent to 53-29 pace",
      keyStrength: "Haliburton-Nembhard two-point-guard spacing destroys switching defenses; Turner protects the paint on every possession"
    },
    {
      players: ["LeBron James", "Austin Reaves", "Rui Hachimura", "Anthony Davis", "Dalton Knecht"],
      team: "LAL",
      minutesTogether: 334,
      netRating: 13.8,
      offRating: 117.9,
      defRating: 104.1,
      plusMinus: 110,
      record: "Equivalent to 51-31 pace",
      keyStrength: "LeBron-Davis two-man game is unstoppable in the midrange; Knecht's corner gravity keeps defenses honest"
    }
  ],
  biggestSurprise: {
    team: "SAS",
    description: "Dalen Terry's four-steal performance in Finals Game 1 exposed a genuine defensive wildcard that Thibodeau had no answer for off the bench — a bench player generating that kind of disruption against a championship-caliber offense is functionally unprecedented in Finals play this decade. The Spurs' closing lineup with Terry replacing Barnes in the final three minutes posted a +9 net rating in limited sample during the regular season, and Popovich appears ready to go back to that well in Game 2. If Terry forces two more turnovers in the fourth quarter, the series calculus changes completely."
  },
  teams: [
    {
      team: "OKC",
      teamRecord: "64-18",
      bestUnit: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 398,
        netRating: 15.7,
        offRating: 118.2,
        defRating: 102.5,
        plusMinus: 149,
        record: "Equivalent to 54-28 pace",
        keyStrength: "Dort and Hartenstein anchor the league's most suffocating half-court defense while SGA hunts mismatches at will"
      },
      deathLineup: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 94,
        netRating: 14.2,
        offRating: 116.8,
        defRating: 102.6,
        plusMinus: 32,
        record: "18-6 in games when closing",
        keyStrength: "SGA isolation in the final two minutes is the single most efficient late-game play type in the Western Conference"
      },
      worstUnit: {
        players: ["Aaron Wiggins", "Cason Wallace", "Kenrich Williams", "Jaylin Williams", "Ousmane Dieng"],
        team: "OKC",
        minutesTogether: 44,
        netRating: -11.3,
        offRating: 104.1,
        defRating: 115.4,
        plusMinus: -19,
        record: "Equivalent to 28-54 pace",
        keyStrength: "Energy and hustle only — this unit is a liability the moment opposing offenses isolate Dieng on the perimeter"
      },
      rookieLineup: {
        players: ["Shai Gilgeous-Alexander", "Cason Wallace", "Luguentz Dort", "Ousmane Dieng", "Chet Holmgren"],
        team: "OKC",
        minutesTogether: 67,
        netRating: 4.8,
        offRating: 112.3,
        defRating: 107.5,
        plusMinus: 15,
        record: "Equivalent to 44-38 pace",
        keyStrength: "Dieng's length and Wallace's handle give Daigneault a viable second unit that doesn't hemorrhage points"
      },
      narrative: "Oklahoma City's best lineup is arguably the most complete five-man unit in the NBA — Dort and Hartenstein together allow zero clean looks in the paint while SGA and Williams create an impossible two-headed offensive problem for any defense. The Thunder's WCF run was defined by this group's ability to dominate 28-minute stretches against San Antonio before Wembanyama wore Holmgren down in Games 6 and 7. Their depth dropoff is real — the Wiggins-Wallace-Dieng bench combination posted a -11.3 net rating across the playoffs, and those minutes nearly cost OKC the series in Game 5. Daigneault's core rotation is Finals-caliber; his bench management is the legitimate question heading into next season."
    },
    {
      team: "SAS",
      teamRecord: "62-20",
      bestUnit: {
        players: ["De'Aaron Fox", "Stephon Castle", "Dalen Terry", "Harrison Barnes", "Victor Wembanyama"],
        team: "SAS",
        minutesTogether: 412,
        netRating: 16.1,
        offRating: 119.4,
        defRating: 103.3,
        plusMinus: 158,
        record: "Equivalent to 55-27 pace",
        keyStrength: "Wembanyama as defensive anchor and offensive hub; Fox and Castle push pace before defenses set"
      },
      deathLineup: {
        players: ["De'Aaron Fox", "Stephon Castle", "Dalen Terry", "Victor Wembanyama", "Jeremy Sochan"],
        team: "SAS",
        minutesTogether: 71,
        netRating: 12.6,
        offRating: 116.2,
        defRating: 103.6,
        plusMinus: 21,
        record: "14-5 in games when closing",
        keyStrength: "Terry's defensive disruption allows Wembanyama to roam as a free safety; Sochan's physicality cleans up contested rebounds"
      },
      worstUnit: {
        players: ["Malaki Branham", "Blake Wesley", "Julian Champagnie", "Sidy Cissoko", "Charles Bassey"],
        team: "SAS",
        minutesTogether: 38,
        netRating: -14.7,
        offRating: 101.8,
        defRating: 116.5,
        plusMinus: -21,
        record: "Equivalent to 24-58 pace",
        keyStrength: "Raw development minutes only — Bassey is a liability at the five without Wembanyama's rim protection beside him"
      },
      rookieLineup: {
        players: ["De'Aaron Fox", "Stephon Castle", "Dalen Terry", "Harrison Barnes", "Victor Wembanyama"],
        team: "SAS",
        minutesTogether: 412,
        netRating: 16.1,
        offRating: 119.4,
        defRating: 103.3,
        plusMinus: 158,
        record: "Equivalent to 55-27 pace",
        keyStrength: "Castle's two-way maturity alongside Terry gives San Antonio a pair of rookie contributors that play like veterans"
      },
      narrative: "San Antonio's best lineup is the best closing unit in Spurs history since the 2014 title run — Wembanyama's dual-threat dominance combined with Fox's pace-pushing and Castle's feel gives Popovich a group that can win in any style. The death lineup with Terry replacing Barnes in the final minutes is a genuine tactical innovation: Terry creates turnovers that end possessions before Wembanyama even needs to block a shot. Castle's strip of Anunoby with 22 seconds left in Finals Game 1 is already the defining play of his career, and the Spurs' closing unit nearly stole a road game against the most clutch point guard in the league. The weakness is real — when Fox goes cold and the bench unit plays extended minutes, San Antonio's offense drops to league-average and their young depth has shown it cannot sustain leads without a star on the floor."
    },
    {
      team: "NYK",
      teamRecord: "53-29",
      bestUnit: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
        team: "NYK",
        minutesTogether: 487,
        netRating: 18.4,
        offRating: 121.7,
        defRating: 103.3,
        plusMinus: 214,
        record: "Equivalent to 58-24 pace",
        keyStrength: "The most cohesive five-man unit in the Finals — Brunson's creation, Towns's gravity, and three elite wing defenders"
      },
      deathLineup: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
        team: "NYK",
        minutesTogether: 103,
        netRating: 16.9,
        offRating: 119.3,
        defRating: 102.4,
        plusMinus: 41,
        record: "19-7 in games when closing",
        keyStrength: "Brunson's pull-up with the game on the line is the highest-percentage late-game play in the Eastern Conference"
      },
      worstUnit: {
        players: ["Shake Milton", "Precious Achiuwa", "Miles McBride", "Bojan Bogdanovic", "Isaiah Roby"],
        team: "NYK",
        minutesTogether: 41,
        netRating: -12.8,
        offRating: 105.4,
        defRating: 118.2,
        plusMinus: -20,
        record: "Equivalent to 26-56 pace",
        keyStrength: "No identifiable strength — this unit is purely garbage time and its defensive lapses expose why Thibodeau never deploys it in meaningful minutes"
      },
      narrative: "New York's starting five is playing the best basketball in franchise history — a +18.4 net rating across 487 minutes together is a historically elite sample for a playoff lineup, and Brunson's Finals Game 1 winner confirmed what the data has been saying all season. The death lineup is the same five, which tells you everything about Thibodeau's trust in his starters and his complete unwillingness to experiment in late-game situations. Towns's ability to pull Wembanyama away from the basket created the exact driving lanes that made Brunson's game-winner possible, and that matchup problem will define the entire series. The bench unit is a legitimate concern if foul trouble hits Brunson or Towns — Shake Milton and Precious Achiuwa posted a -12.8 net rating in limited minutes, and Thibodeau will need to find a reliable sixth man before this series reaches a seventh game."
    },
    {
      team: "BOS",
      teamRecord: "51-31",
      bestUnit: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Kristaps Porzingis"],
        team: "BOS",
        minutesTogether: 361,
        netRating: 13.2,
        offRating: 118.6,
        defRating: 105.4,
        plusMinus: 114,
        record: "Equivalent to 51-31 pace",
        keyStrength: "Porzingis spacing forces opposing bigs to the perimeter; Holiday's off-ball defense covers every Tatum and Brown gamble"
      },
      deathLineup: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Kristaps Porzingis"],
        team: "BOS",
        minutesTogether: 87,
        netRating: 11.4,
        offRating: 116.1,
        defRating: 104.7,
        plusMinus: 24,
        record: "15-9 in games when closing",
        keyStrength: "Horford's late-game IQ in screen coverage is the most underrated component of Boston's closing success"
      },
      worstUnit: {
        players: ["Payton Pritchard", "Sam Hauser", "Luke Kornet", "Jordan Walsh", "Svi Mykhailiuk"],
        team: "BOS",
        minutesTogether: 36,
        netRating: -10.4,
        offRating: 107.2,
        defRating: 117.6,
        plusMinus: -14,
        record: "Equivalent to 30-52 pace",
        keyStrength: "Pritchard's shooting keeps this unit from complete collapse, but Kornet at the five is a switch liability against any athletic big"
      },
      newLookLineup: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Kristaps Porzingis", "Xavier Tillman"],
        team: "BOS",
        minutesTogether: 58,
        netRating: 9.7,
        offRating: 116.4,
        defRating: 106.7,
        plusMinus: 18,
        record: "Equivalent to 47-35 pace",
        keyStrength: "Tillman's physicality against traditional bigs gives Boston a legitimate answer to power fours that Horford cannot match"
      },
      narrative: "Boston's starting five remains one of the most talented groups in the East, but their second-round exit exposed what the numbers have been hinting at all season — a top-heavy roster that becomes alarmingly thin the moment Porzingis's injury history reasserts itself. The Holiday-Horford defensive backbone is still elite in scheme recognition, and Tatum's midrange evolution has made him genuinely difficult to game-plan against. The Tillman new-look lineup emerged in the final two months as a viable alternative when opposing teams played small, giving Joe Mazzulla a tool he didn't have in last year's Finals run. The core question heading into the offseason is whether this group has one more championship window or whether the Tatum-Brown partnership has hit its ceiling."
    },
    {
      team: "IND",
      teamRecord: "50-32",
      bestUnit: {
        players: ["Tyrese Haliburton", "Andrew Nembhard", "Aaron Nesmith", "Pascal Siakam", "Myles Turner"],
        team: "IND",
        minutesTogether: 356,
        netRating: 14.9,
        offRating: 120.1,
        defRating: 105.2,
        plusMinus: 127,
        record: "Equivalent to 53-29 pace",
        keyStrength: "Haliburton-Nembhard dual-point spacing destroys every switching coverage; Turner protects the paint on 94% of rim attempts"
      },
      deathLineup: {
        players: ["Tyrese Haliburton", "Andrew Nembhard", "Aaron Nesmith", "Pascal Siakam", "Myles Turner"],
        team: "IND",
        minutesTogether: 79,
        netRating: 13.1,
        offRating: 118.7,
        defRating: 105.6,
        plusMinus: 25,
        record: "16-8 in games when closing",
        keyStrength: "Haliburton's late-game playmaking with Turner as the target in the short roll is Indiana's most unstoppable two-man action"
      },
      worstUnit: {
        players: ["Bennedict Mathurin", "Isaiah Jackson", "James Wiseman", "Ben Sheppard", "T.J. McConnell"],
        team: "IND",
        minutesTogether: 47,
        netRating: -9.8,
        offRating: 108.3,
        defRating: 118.1,
        plusMinus: -17,
        record: "Equivalent to 32-50 pace",
        keyStrength: "McConnell's energy creates the occasional fast break, but Jackson and Wiseman together are a defensive disaster against stretch fours"
      },
      narrative: "Indiana's starting lineup is the most underrated five-man unit in basketball — their +14.9 net rating across 356 minutes is driven by a pace-and-spacing system that has no obvious defensive answer when Haliburton is operating at full speed. Siakam's postseason evolution into a legitimate second scoring option has taken enormous pressure off Haliburton in late-game situations, and Nesmith's corner three-point volume is the structural reason Indiana's spacing numbers are elite. The bench falloff is the single reason this team is not a Finals contender — Mathurin's inconsistency and the Jackson-Wiseman front court pairing were directly responsible for two of Indiana's most damaging second-half collapses in the second round. Rick Carlisle has maximized this roster, but the offseason question is whether Indiana can find a legitimate third scorer without disrupting the system that makes them so dangerous."
    },
    {
      team: "MIL",
      teamRecord: "48-34",
      bestUnit: {
        players: ["Damian Lillard", "Khris Middleton", "Bobby Portis", "Brook Lopez", "Giannis Antetokounmpo"],
        team: "MIL",
        minutesTogether: 374,
        netRating: 11.8,
        offRating: 117.4,
        defRating: 105.6,
        plusMinus: 106,
        record: "Equivalent to 49-33 pace",
        keyStrength: "Giannis's interior dominance paired with Lillard's off-ball threat forces every defense to make an impossible choice on the perimeter"
      },
      deathLineup: {
        players: ["Damian Lillard", "Malik Beasley", "Khris Middleton", "Giannis Antetokounmpo", "Brook Lopez"],
        team: "MIL",
        minutesTogether: 68,
        netRating: 9.4,
        offRating: 115.8,
        defRating: 106.4,
        plusMinus: 18,
        record: "13-10 in games when closing",
        keyStrength: "Beasley replaces Portis in the closing lineup for shooting; Lopez's drop coverage gives Giannis freedom to switch aggressively"
      },
      worstUnit: {
        players: ["AJ Green", "MarJon Beauchamp", "Pat Connaughton", "Andre Jackson Jr.", "Robin Lopez"],
        team: "MIL",
        minutesTogether: 39,
        netRating: -13.2,
        offRating: 103.7,
        defRating: 116.9,
        plusMinus: -19,
        record: "Equivalent to 25-57 pace",
        keyStrength: "No exploitable strength — Robin Lopez's presence in this unit is a defensive regression that teams actively target"
      },
      narrative: "Milwaukee's relationship with its own lineup data is complicated — on paper, the Giannis-Lillard pairing should be a Finals-caliber combination, and in their best 374 minutes together, it functionally is. The problem is that Lillard's clutch rating in Milwaukee remains below his career average in Portland, and the closing lineup's 13-10 record in close games reflects a team that still hasn't fully committed to who takes the last shot. Middleton's health has been the quiet variable all season — when he plays 30-plus minutes, Milwaukee's spacing improves dramatically and the second unit's burden shrinks. Doc Rivers' decision to go small in the closing unit, replacing Portis with Beasley, has been the right call statistically but cost them Game 4 against Boston when Giannis got into foul trouble defending Horford on the perimeter."
    },
    {
      team: "LAL",
      teamRecord: "47-35",
      bestUnit: {
        players: ["LeBron James", "Austin Reaves", "Rui Hachimura", "Anthony Davis", "Dalton Knecht"],
        team: "LAL",
        minutesTogether: 334,
        netRating: 13.8,
        offRating: 117.9,
        defRating: 104.1,
        plusMinus: 110,
        record: "Equivalent to 51-31 pace",
        keyStrength: "LeBron-Davis two-man game generates 1.18 points per possession in the pick-and-roll — the highest mark in the Western Conference"
      },
      deathLineup: {
        players: ["LeBron James", "Austin Reaves", "Rui Hachimura", "Anthony Davis", "Gabe Vincent"],
        team: "LAL",
        minutesTogether: 62,
        netRating: 10.1,
        offRating: 114.6,
        defRating: 104.5,
        plusMinus: 19,
        record: "12-11 in games when closing",
        keyStrength: "LeBron's late-game isolation against smaller guards remains the most reliable half-court play in the West"
      },
      worstUnit: {
        players: ["D'Angelo Russell", "Cam Reddish", "Taurean Prince", "Jaxson Hayes", "Max Christie"],
        team: "LAL",
        minutesTogether: 43,
        netRating: -11.9,
        offRating: 106.2,
        defRating: 118.1,
        plusMinus: -19,
        record: "Equivalent to 27-55 pace",
        keyStrength: "Christie's motor keeps this group from total collapse, but Russell at the point of attack defensively is a matchup problem every opposing coach exploits"
      },
      newLookLineup: {
        players: ["LeBron James", "Austin Reaves", "Dalton Knecht", "Rui Hachimura", "Anthony Davis"],
        team: "LAL",
        minutesTogether: 334,
        netRating: 13.8,
        offRating: 117.9,
        defRating: 104.1,
        plusMinus: 110,
        record: "Equivalent to 51-31 pace",
        keyStrength: "Knecht's corner gravity is the new look — his 41.3% from three in catch-and-shoot situations gives Davis unprecedented room to operate in the short roll"
      },
      narrative: "Los Angeles's best lineup tells the story of what this franchise has become in year 22 of the LeBron era — a team built entirely around maximizing the two-man game between the greatest player in history and the best big man in the West. Knecht's emergence as a legitimate floor-spacer has been the single most important development of the season, creating corner gravity that the Hachimura lineup never fully provided. The closing lineup's 12-11 record is the quiet alarm bell — when Davis cannot protect the rim late and LeBron's isolation efficiency dips below his regular-season average, this team has no reliable third option. JJ Redick has done exceptional work optimizing possessions, but the bench unit's -11.9 net rating is a structural problem that no amount of two-man dominance fully masks when games get physical and extended."
    },
    {
      team: "MIN",
      teamRecord: "46-36",
      bestUnit: {
        players: ["Mike Conley", "Anthony Edwards", "Jaden McDaniels", "Julius Randle", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 318,
        netRating: 10.6,
        offRating: 114.8,
        defRating: 104.2,
        plusMinus: 80,
        record: "Equivalent to 47-35 pace",
        keyStrength: "Gobert-Randle front court is a physical mismatch against any small-ball lineup; Edwards's off-ball movement off Conley sets is the league's most improved two-man action"
      },
      deathLineup: {
        players: ["Mike Conley", "Anthony Edwards", "Jaden McDaniels", "Julius Randle", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 72,
        netRating: 7.8,
        offRating: 112.4,
        defRating: 104.6,
        plusMinus: 17,
        record: "11-12 in games when closing",
        keyStrength: "Edwards's isolation against slower defenders is Minnesota's most reliable late-game action, though Gobert's late clock positioning limits spacing"
      },
      worstUnit: {
        players: ["Nickeil Alexander-Walker", "Josh Minott", "Luka Garza", "Leonard Miller", "Monte Morris"],
        team: "MIN",
        minutesTogether: 31,
        netRating: -14.1,
        offRating: 102.9,
        defRating: 117.0,
        plusMinus: -16,
        record: "Equivalent to 23-59 pace",
        keyStrength: "No identifiable strength — this is purely garbage time and Garza's presence against any athletic big is an immediate switch target"
      },
      narrative: "Minnesota's lineup construction reflects the ongoing tension between their elite defensive identity and the offensive demands of competing with San Antonio and Oklahoma City in the West. The Gobert-Randle pairing has been better than expected — Randle's mid-post scoring has given Gobert a legitimate second option in the high-low action that opposing defenses cannot simply ignore. Edwards's closing efficiency, however, is the unresolved issue — an 11-12 record in close games for a team this talented is a red flag, and his tendency to force isolation in the final two minutes instead of working the Conley two-man game has been the coaching staff's primary focus in late-game film sessions. The depth is thin enough that any significant injury to the starting five would immediately drop Minnesota from playoff contention to lottery territory."
    },
    {
      team: "PHI",
      teamRecord: "44-38",
      bestUnit: {
        players: ["Tyrese Maxey", "Paul George", "Kelly Oubre Jr.", "Joel Embiid", "Andre Drummond"],
        team: "PHI",
        minutesTogether: 287,
        netRating: 9.4,
        offRating: 115.2,
        defRating: 105.8,
        plusMinus: 65,
        record: "Equivalent to 46-36 pace",
        keyStrength: "Embiid's interior dominance paired with George's corner shooting creates the exact offensive balance Philadelphia has needed for three seasons"
      },
      deathLineup: {
        players: ["Tyrese Maxey", "Paul George", "Kelly Oubre Jr.", "Joel Embiid", "Tobias Harris"],
        team: "PHI",
        minutesTogether: 54,
        netRating: 6.2,
        offRating: 113.4,
        defRating: 107.2,
        plusMinus: 10,
        record: "10-13 in games when closing",
        keyStrength: "Embiid's post-up in the final minute against any center is a mismatch; Harris provides a secondary option that defenses routinely underestimate"
      },
      worstUnit: {
        players: ["Kyle Lowry", "Cameron Payne", "Ricky Council IV", "KJ Martin", "Mo Bamba"],
        team: "PHI",
        minutesTogether: 33,
        netRating: -15.3,
        offRating: 100.4,
        defRating: 115.7,
        plusMinus: -19,
        record: "Equivalent to 21-61 pace",
        keyStrength: "Lowry's veteran presence prevents this unit from total organizational chaos, but Bamba and Council together are a defensive sieve against any functional offense"
      },
      narrative: "Philadelphia's best lineup works — when Embiid is healthy and George is engaged, the Maxey-George-Embiid triangle is a legitimate offensive system that no Eastern Conference team has a clean answer for. The problem, as always with this franchise, is that the alignment between those three peaks happens in roughly 60% of games, and the closing lineup's 10-13 record is a direct reflection of Embiid's physical limitations in the fourth quarter of back-to-backs. Drummond has been a revelation in the starting lineup, providing the rebounding margin that allows George's length to operate as a de facto small-ball four in certain sets. The bench unit is the worst in the top ten teams by net rating — a -15.3 mark that reflects a front office that has consistently prioritized star max contracts over meaningful depth construction."
    },
    {
      team: "DEN",
      teamRecord: "43-39",
      bestUnit: {
        players: ["Jamal Murray", "Christian Braun", "Michael Porter Jr.", "Aaron Gordon", "Nikola Jokic"],
        team: "DEN",
        minutesTogether: 342,
        netRating: 11.3,
        offRating: 116.7,
        defRating: 105.4,
        plusMinus: 93,
        record: "Equivalent to 48-34 pace",
        keyStrength: "Jokic's playmaking from the elbow combined with Gordon's off-ball cutting remains the most efficient two-man action in the Western Conference"
      },
      deathLineup: {
        players: ["Jamal Murray", "Christian Braun", "Michael Porter Jr.", "Aaron Gordon", "Nikola Jokic"],
        team: "DEN",
        minutesTogether: 81,
        netRating: 9.7,
        offRating: 114.9,
        defRating: 105.2,
        plusMinus: 19,
        record: "12-11 in games when closing",
        keyStrength: "Jokic's late-game playmaking IQ — his ability to read closing help defense and find Gordon cutting baseline is the most reliable action in Denver's half-court offense"
      },
      worstUnit: {
        players: ["Reggie Jackson", "Peyton Watson", "Julian Strawther", "Zeke Nnaji", "DeAndre Jordan"],
        team: "DEN",
        minutesTogether: 35,
        netRating: -12.6,
        offRating: 103.8,
        defRating: 116.4,
        plusMinus: -17,
        record: "Equivalent to 26-56 pace",
        keyStrength: "Watson's athleticism provides occasional transition stops, but Jordan and Nnaji sharing the floor is a mobility disaster against any pick-and-roll heavy offense"
      },
      narrative: "Denver's season has been a study in managed expectations — a 43-39 record for a team with the reigning two-time MVP is a quiet crisis that the organization has been reluctant to fully acknowledge publicly. The starting five's +11.3 net rating tells you the ceiling is still elite; the first-round exit tells you the floor has become dangerously low when Murray's shot is not falling. Jokic's playmaking numbers are historically unprecedented for a fifth consecutive season, but his supporting cast's inability to generate their own offense without him has become a genuine playoff-round ceiling. The Porter injury in March cost Denver 14 games and the third seed, and the lineup data without MPJ is alarming — the team posts a +2.1 net rating with the next best five, which is a conference finals team masquerading as a championship contender."
    }
  ]
};