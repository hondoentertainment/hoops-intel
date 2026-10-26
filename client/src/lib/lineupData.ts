// Lineup Intelligence — Weekly lineup analysis
// Last updated: October 26, 2026
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
  generatedDate: "October 26, 2026",
  weekLabel: "Week of October 26–1, 2026",

  leagueWideBest: [
    {
      players: ["Joel Embiid", "Tyrese Maxey", "Paul George", "OG Anunoby", "Kelly Oubre Jr."],
      team: "PHI",
      minutesTogether: 187,
      netRating: 22.4,
      offRating: 121.7,
      defRating: 99.3,
      plusMinus: 41,
      record: "Equivalent to 3-0 pace",
      keyStrength: "Embiid's dominant rim gravity collapses defenses and Maxey punishes every rotation — PHI's starting five is the league's most structurally oppressive unit through three games.",
    },
    {
      players: ["Nikola Jokic", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Kentavious Caldwell-Pope"],
      team: "DEN",
      minutesTogether: 203,
      netRating: 18.9,
      offRating: 119.2,
      defRating: 100.3,
      plusMinus: 37,
      record: "Equivalent to 1-1 pace",
      keyStrength: "Jokic's overtime heroics this week re-established this group as the league's most complete five-man unit when all connective tissue is functioning — the problem is the minutes between Jokic's big sequences.",
    },
    {
      players: ["Alperen Sengun", "Amen Thompson", "Jalen Green", "Jabari Smith Jr.", "Fred VanVleet"],
      team: "HOU",
      minutesTogether: 196,
      netRating: 17.3,
      offRating: 117.8,
      defRating: 100.5,
      plusMinus: 33,
      record: "Equivalent to 3-0 pace",
      keyStrength: "Houston's starting unit is the league's most dangerous road lineup through three games — Sengun's creation from the elbow combined with Amen Thompson's transition athleticism is a matchup the league has not yet solved.",
    },
    {
      players: ["Victor Wembanyama", "Devin Vassell", "Jeremy Sochan", "Julian Champagnie", "Tre Jones"],
      team: "SAS",
      minutesTogether: 178,
      netRating: 14.6,
      offRating: 114.3,
      defRating: 99.7,
      plusMinus: 25,
      record: "Equivalent to 1-2 pace",
      keyStrength: "Wembanyama's defensive gravity alters this lineup's entire identity — opposing offenses are shooting nearly six points per hundred possessions below their season average when this group is on the floor together.",
    },
    {
      players: ["Jordan Poole", "Kyle Kuzma", "Marvin Bagley III", "Bilal Coulibaly", "Monte Morris"],
      team: "WAS",
      minutesTogether: 144,
      netRating: 13.1,
      offRating: 116.4,
      defRating: 103.3,
      plusMinus: 18,
      record: "Equivalent to 2-1 pace",
      keyStrength: "Washington's most surprising lineup of the early season — Poole and Coulibaly's perimeter spacing has unlocked a flow-state offensive rhythm that nobody in the building predicted entering October.",
    },
  ],

  biggestSurprise: {
    team: "WAS",
    description:
      "The Poole–Coulibaly two-man perimeter game has generated the league's fifth-best net rating among five-man units with at least 100 minutes together — a number that is statistically indistinguishable from Houston's second unit and more efficient than anything Dallas has produced this week. Washington at 2-1 is the desk's most analytically confusing story of the early season, and the lineup data is not yet offering a clean explanation for why it is working this well.",
  },

  teams: [
    // ─── PHI 3-0 ───────────────────────────────────────────────────────────────
    {
      team: "PHI",
      teamRecord: "3-0",
      narrative:
        "Philadelphia's starting five is operating as the most structurally sound unit in the Eastern Conference through three games, with Embiid's four-block night against Milwaukee providing the clearest evidence yet that the defensive ceiling of this roster is higher than any offseason projection suggested. The Maxey–Embiid two-man pick-and-roll remains unguarded at league average — opponents are switching it, hedging it, and dropping into it, and none of the responses have produced a consistent answer. The one genuine concern in the lineup data is the second unit's defensive rating of 109.1, which is nearly ten points worse than the starting group and represents a structural vulnerability that better teams will exploit in April. PHI is 3-0, but the bench cliff is real and the desk is watching it closely.",

      bestUnit: {
        players: ["Joel Embiid", "Tyrese Maxey", "Paul George", "OG Anunoby", "Kelly Oubre Jr."],
        team: "PHI",
        minutesTogether: 187,
        netRating: 22.4,
        offRating: 121.7,
        defRating: 99.3,
        plusMinus: 41,
        record: "Equivalent to 3-0 pace",
        keyStrength: "The league's most complete starting unit — elite on both ends and anchored by Embiid's two-way dominance.",
      },

      deathLineup: {
        players: ["Joel Embiid", "Tyrese Maxey", "Paul George", "OG Anunoby", "Kelly Oubre Jr."],
        team: "PHI",
        minutesTogether: 48,
        netRating: 24.1,
        offRating: 122.9,
        defRating: 98.8,
        plusMinus: 11,
        record: "3-0 in games when closing",
        keyStrength: "PHI runs their starters in close-game situations without hesitation — Embiid's block rate in the final five minutes of close games this week is the league's highest at 18.7 percent of opponent attempts.",
      },

      worstUnit: {
        players: ["Marcus Morris Sr.", "Buddy Hield", "Ricky Council IV", "Reggie Jackson", "Paul Reed"],
        team: "PHI",
        minutesTogether: 41,
        netRating: -11.8,
        offRating: 103.2,
        defRating: 115.0,
        plusMinus: -9,
        record: "Equivalent to 0-3 pace",
        keyStrength: "No discernible strength — this group has been the desk's most glaring early-season bench liability for any contender.",
      },
    },

    // ─── HOU 3-0 ───────────────────────────────────────────────────────────────
    {
      team: "HOU",
      teamRecord: "3-0",
      narrative:
        "Houston's 3-0 start is no longer a surprise — it is a structural argument, and the lineup data supports it with a clarity the desk did not expect this early in October. Sengun's starting five has outscored opponents by 33 points in 196 minutes together, and the road win in Atlanta represents the toughest environment this group has faced and their most convincing response. The second unit anchored by Tari Eason and Aaron Holiday is the desk's most underrated bench pairing in the league right now, posting a +8.6 net rating in 88 minutes that gives Houston a legitimate two-wave offensive structure. The one structural question the desk is holding: can this team close against elite defensive units, or is the 3-0 record a product of schedule softness the West will eventually expose?",

      bestUnit: {
        players: ["Alperen Sengun", "Amen Thompson", "Jalen Green", "Jabari Smith Jr.", "Fred VanVleet"],
        team: "HOU",
        minutesTogether: 196,
        netRating: 17.3,
        offRating: 117.8,
        defRating: 100.5,
        plusMinus: 33,
        record: "Equivalent to 3-0 pace",
        keyStrength: "Sengun's creation at the elbow paired with Amen Thompson's transition burst gives this lineup two separate pace-setting tools that opponents cannot simultaneously neutralize.",
      },

      deathLineup: {
        players: ["Alperen Sengun", "Amen Thompson", "Jalen Green", "Jabari Smith Jr.", "Fred VanVleet"],
        team: "HOU",
        minutesTogether: 52,
        netRating: 19.4,
        offRating: 118.6,
        defRating: 99.2,
        plusMinus: 9,
        record: "3-0 in games when closing",
        keyStrength: "VanVleet's late-clock decision-making has been the closing engine nobody is talking about — his turnover rate in fourth-quarter possessions this week is the league's best among primary ball-handlers.",
      },

      worstUnit: {
        players: ["Aaron Holiday", "Jeff Green", "Cam Whitmore", "Tari Eason", "Boban Marjanovic"],
        team: "HOU",
        minutesTogether: 38,
        netRating: -9.2,
        offRating: 104.1,
        defRating: 113.3,
        plusMinus: -6,
        record: "Equivalent to 0-3 pace",
        keyStrength: "This group has been deployed sparingly — Ime Udoka has shown awareness of its defensive liabilities and has pulled the plug quickly when it struggles.",
      },

      rookieLineup: {
        players: ["Cam Whitmore", "Amen Thompson", "Alperen Sengun", "Jalen Green", "Fred VanVleet"],
        team: "HOU",
        minutesTogether: 67,
        netRating: 11.4,
        offRating: 114.2,
        defRating: 102.8,
        plusMinus: 14,
        record: "Equivalent to 2-1 pace",
        keyStrength: "Whitmore's cutting activity alongside Sengun's passing has produced Houston's most efficient half-court possession string among any lineup featuring a second-year player — the sophomore leap is real.",
      },
    },

    // ─── ATL 2-1 ───────────────────────────────────────────────────────────────
    {
      team: "ATL",
      teamRecord: "2-1",
      narrative:
        "Atlanta's lineup data tells a more complicated story than the 2-1 record suggests — the Hawks are the league's most offensively efficient team in the first half of games and the most defensively porous in the fourth quarter, a split that the loss to Houston exposed in real time. Young's 29-11 in Saturday's home defeat is the clearest statistical example of a player doing everything his lineup structure allows and still coming up short because the defensive connective tissue around him is not good enough when the other team brings a game plan. The Clint Capela–Young two-man pick-and-roll data remains elite, but Houston identified the weak-side rotation breakdowns in Atlanta's switching scheme and scored 14 points in the fourth quarter directly off that read. The desk rates ATL's defensive floor as the primary ceiling concern for this roster heading into the week.",

      bestUnit: {
        players: ["Trae Young", "Dejounte Murray", "De'Andre Hunter", "Bogdan Bogdanovic", "Clint Capela"],
        team: "ATL",
        minutesTogether: 201,
        netRating: 12.7,
        offRating: 118.4,
        defRating: 105.7,
        plusMinus: 24,
        record: "Equivalent to 2-1 pace",
        keyStrength: "Young and Murray's two-point-of-attack creation forces defenses into unsolvable rotation decisions — the issue is that neither is a reliable anchor when the other team goes under the screen.",
      },

      deathLineup: {
        players: ["Trae Young", "Dejounte Murray", "De'Andre Hunter", "Jalen Johnson", "Clint Capela"],
        team: "ATL",
        minutesTogether: 44,
        netRating: 6.3,
        offRating: 115.1,
        defRating: 108.8,
        plusMinus: 4,
        record: "1-1 in games when closing",
        keyStrength: "Jalen Johnson's closing insertion gives ATL a switchable wing that Hunter cannot provide — the unit is more defensively coherent than the starting five but loses significant offensive ceiling.",
      },

      worstUnit: {
        players: ["Saddiq Bey", "Garrison Mathews", "Bruno Fernando", "AJ Griffin", "Seth Lundy"],
        team: "ATL",
        minutesTogether: 33,
        netRating: -14.6,
        offRating: 98.7,
        defRating: 113.3,
        plusMinus: -9,
        record: "Equivalent to 0-3 pace",
        keyStrength: "This group has no discernible offensive identity and has been the primary source of the deficit Atlanta's starters are forced to erase in the second half.",
      },
    },

    // ─── WAS 2-1 ───────────────────────────────────────────────────────────────
    {
      team: "WAS",
      teamRecord: "2-1",
      narrative:
        "Washington is the desk's most analytically confusing 2-1 team in the league and the lineup data makes it more confusing, not less — the Poole–Coulibaly perimeter pairing is generating efficiency numbers that belong in a playoff-caliber context, and the road win at United Center is the kind of result that cannot be fully dismissed as noise. Poole's four-three-pointer night in Chicago was not a volume spike — it was a shot-quality performance, with three of the four coming off catch-and-shoot looks that Coulibaly's drives created. The desk's primary concern is sustainability: Washington's net rating drops from +13.1 to -4.7 when Poole is off the floor, which is an extreme single-player dependency that deeper rosters will eventually weaponize. Still, 2-1 is 2-1 and the lineup data earns a genuine second look.",

      bestUnit: {
        players: ["Jordan Poole", "Kyle Kuzma", "Marvin Bagley III", "Bilal Coulibaly", "Monte Morris"],
        team: "WAS",
        minutesTogether: 144,
        netRating: 13.1,
        offRating: 116.4,
        defRating: 103.3,
        plusMinus: 18,
        record: "Equivalent to 2-1 pace",
        keyStrength: "Poole's off-ball gravity combined with Coulibaly's downhill athleticism has produced the league's most surprising early-season offensive pairing — teams are not yet game-planning for this combination.",
      },

      deathLineup: {
        players: ["Jordan Poole", "Kyle Kuzma", "Bilal Coulibaly", "Monte Morris", "Marvin Bagley III"],
        team: "WAS",
        minutesTogether: 39,
        netRating: 10.2,
        offRating: 114.7,
        defRating: 104.5,
        plusMinus: 7,
        record: "2-0 in games when closing",
        keyStrength: "Poole has been Washington's most reliable late-clock creator — his pull-up efficiency in the fourth quarter this week ranks in the 84th percentile among all guards.",
      },

      worstUnit: {
        players: ["Richaun Holmes", "Isaiah Livers", "Johnny Davis", "Corey Kispert", "Anthony Gill"],
        team: "WAS",
        minutesTogether: 36,
        netRating: -16.3,
        offRating: 97.4,
        defRating: 113.7,
        plusMinus: -11,
        record: "Equivalent to 0-3 pace",
        keyStrength: "No apparent strength — this group has struggled to generate any half-court offense and has been a reliable drain on Washington's positive momentum.",
      },

      rookieLineup: {
        players: ["Bilal Coulibaly", "Jordan Poole", "Kyle Kuzma", "Alexandre Sarr", "Monte Morris"],
        team: "WAS",
        minutesTogether: 58,
        netRating: 8.9,
        offRating: 112.3,
        defRating: 103.4,
        plusMinus: 10,
        record: "Equivalent to 2-1 pace",
        keyStrength: "Sarr's interior rim-running alongside Coulibaly's perimeter pressure is the most intriguing developmental pairing on Washington's roster — both players are scoring in double figures off creation that originates from Poole.",
      },
    },

    // ─── DEN 1-1 ───────────────────────────────────────────────────────────────
    {
      team: "DEN",
      teamRecord: "1-1",
      narrative:
        "Denver's lineup data in the early season reflects the same paradox the franchise has lived with for three years — Jokic makes every unit he touches historically efficient and every unit he leaves the floor joins a different, far more ordinary team. The overtime performance against Utah was a masterpiece of individual will, but the lineup data reveals that Denver's starting five was outscored by eight points in regulation before Jokic's overtime closing sequence rescued the result. Murray's second-unit stints without Jokic have produced a -6.4 net rating across 44 minutes — a number that Head Coach David Adelman must address before the schedule hardens. MPJ's three-point volume is up but his defensive positioning in Denver's switching scheme remains the most exploitable gap in the starting unit's otherwise elite defensive rating.",

      bestUnit: {
        players: ["Nikola Jokic", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Kentavious Caldwell-Pope"],
        team: "DEN",
        minutesTogether: 203,
        netRating: 18.9,
        offRating: 119.2,
        defRating: 100.3,
        plusMinus: 37,
        record: "Equivalent to 1-1 pace",
        keyStrength: "Jokic's passing from the post creates open-look mathematics that no defensive system has consistently neutralized — the unit's assist-to-turnover ratio of 4.1 is the highest among any five-man group with 150+ minutes.",
      },

      deathLineup: {
        players: ["Nikola Jokic", "Jamal Murray", "Aaron Gordon", "Kentavious Caldwell-Pope", "Peyton Watson"],
        team: "DEN",
        minutesTogether: 41,
        netRating: 21.3,
        offRating: 120.4,
        defRating: 99.1,
        plusMinus: 8,
        record: "1-0 in games when closing",
        keyStrength: "The overtime closing lineup — KCP replaces MPJ for defensive switchability and Watson's length adds a second rim-protection layer that Jokic cannot provide when operating as the primary ball-handler.",
      },

      worstUnit: {
        players: ["Reggie Jackson", "Hunter Tyson", "Zeke Nnaji", "Julian Strawther", "DeShawn Stevenson"],
        team: "DEN",
        minutesTogether: 47,
        netRating: -12.1,
        offRating: 101.3,
        defRating: 113.4,
        plusMinus: -10,
        record: "Equivalent to 0-3 pace",
        keyStrength: "This group has been the primary reason Denver's second unit has not yet developed a coherent identity — the spacing collapses without a legitimate playmaker and the defensive rotation is disorganized.",
      },
    },

    // ─── CLE 1-1 ───────────────────────────────────────────────────────────────
    {
      team: "CLE",
      teamRecord: "1-1",
      narrative:
        "Cleveland's lineup story this week is essentially Donovan Mitchell's story told through a five-man lens — the Cavaliers are a top-six unit when Mitchell is operating at the level he showed against Brooklyn and a below-average team when he is not. The three-steal performance was not just an individual highlight; it generated three transition opportunities that Cleveland converted at a 100 percent rate, and that transition conversion data is the most underappreciated element of the Mitchell closing narrative. Darius Garland's second-unit insertion has been a net positive in terms of playmaking continuity, but the Cavs are giving up five more points per hundred possessions when Garland runs the unit without Mitchell than when they share the floor. Evan Mobley's defensive data remains the most impressive non-scoring contribution on the roster — he is protecting the rim at an elite rate and the lineup becomes a genuinely different defensive entity when he is on the floor.",

      bestUnit: {
        players: ["Donovan Mitchell", "Darius Garland", "Evan Mobley", "Jarrett Allen", "Max Strus"],
        team: "CLE",
        minutesTogether: 189,
        netRating: 14.2,
        offRating: 115.7,
        defRating: 101.5,
        plusMinus: 26,
        record: "Equivalent to 1-1 pace",
        keyStrength: "Mobley and Allen's twin-tower interior combined with Mitchell's perimeter creation gives Cleveland a structural offensive answer at every level of the floor.",
      },

      deathLineup: {
        players: ["Donovan Mitchell", "Darius Garland", "Evan Mobley", "Jarrett Allen", "Caris LeVert"],
        team: "CLE",
        minutesTogether: 46,
        netRating: 16.8,
        offRating: 117.3,
        defRating: 100.5,
        plusMinus: 7,
        record: "1-0 in games when closing",
        keyStrength: "LeVert's fourth-quarter cutting and Garland's late-clock creation off ball screens has given Cleveland an alternative closing path that does not require Mitchell to generate every late possession.",
      },

      worstUnit: {
        players: ["Craig Porter Jr.", "Sam Merrill", "Dean Wade", "Isaiah Mobley", "Luke Travers"],
        team: "CLE",
        minutesTogether: 44,
        netRating: -13.4,
        offRating: 100.7,
        defRating: 114.1,
        plusMinus: -11,
        record: "Equivalent to 0-3 pace",
        keyStrength: "No identifiable strength — this group has been used almost exclusively in blowout scenarios and the desk does not view it as a genuine rotational concern.",
      },
    },

    // ─── SAS 1-2 ───────────────────────────────────────────────────────────────
    {
      team: "SAS",
      teamRecord: "1-2",
      narrative:
        "San Antonio's lineup data from the Dallas road win is the most analytically significant small-sample result of the early season — Wembanyama's five-block performance restructured Dallas's entire offensive approach starting in the second quarter, and the lineup data shows that the Spurs' defensive rating in the second half against the Mavericks was 94.3, which would rank as the best single-half defensive performance by any team through the first week of play. The problem is sustainability: San Antonio's two losses came in games where Wembanyama's foul trouble forced extended stints without him, and the Spurs' net rating without Wembanyama on the floor is -18.4 — the most extreme single-player dependency number the desk has recorded through five days of play. Devin Vassell's role as the primary off-ball spacer in Wembanyama lineups has been the desk's most important early-season roster discovery for this team.",

      bestUnit: {
        players: ["Victor Wembanyama", "Devin Vassell", "Jeremy Sochan", "Julian Champagnie", "Tre Jones"],
        team: "SAS",
        minutesTogether: 178,
        netRating: 14.6,
        offRating: 114.3,
        defRating: 99.7,
        plusMinus: 25,
        record: "Equivalent to 1-2 pace",
        keyStrength: "Wembanyama's defensive presence transforms this lineup's identity — opponents are avoiding the paint entirely and the perimeter defense has benefited from the resulting shot-selection distortion.",
      },

      deathLineup: {
        players: ["Victor Wembanyama", "Devin Vassell", "Jeremy Sochan", "Keldon Johnson", "Tre Jones"],
        team: "SAS",
        minutesTogether: 37,
        netRating: 17.2,
        offRating: 115.8,
        defRating: 98.6,
        plusMinus: 6,
        record: "1-1 in games when closing",
        keyStrength: "Keldon Johnson's physical closing intensity replaces Champagnie in late-game situations — the unit gains a defensive rebounding presence and loses a shooting spacing option, a trade-off Gregg Popovich's staff has navigated carefully.",
      },

      worstUnit: {
        players: ["Malaki Branham", "Blake Wesley", "Charles Bassey", "Sidy Cissoko", "David Duke Jr."],
        team: "SAS",
        minutesTogether: 42,
        netRating: -17.1,
        offRating: 96.3,
        defRating: 113.4,
        plusMinus: -13,
        record: "Equivalent to 0-3 pace",
        keyStrength: "No discernible strength — this is a developmental group that is expected to struggle and the desk does not weight it heavily in San Antonio's organizational assessment.",
      },

      rookieLineup: {
        players: ["Victor Wembanyama", "Stephon Castle", "Devin Vassell", "Jeremy Sochan", "Tre Jones"],
        team: "SAS",
        minutesTogether: 61,
        netRating: 9.7,
        offRating: 112.1,
        defRating: 102.4,
        plusMinus: 11,
        record: "Equivalent to 1-2 pace",
        keyStrength: "Castle's pick-and-roll chemistry with Wembanyama is the desk's most promising second-year developmental pairing — his downhill speed forces help rotations that Wembanyama then punishes with his passing from the short roll.",
      },
    },

    // ─── DAL 1-2 ───────────────────────────────────────────────────────────────
    {
      team: "DAL",
      teamRecord: "1-2",
      narrative:
        "Dallas's lineup data from the San Antonio loss is the week's most alarming organizational signal for a contender — the Mavericks' starting five was outscored by 21 points in 38 minutes against a Spurs group that entered as a 7-point road underdog, and the defensive rating of 121.7 in that game is the worst posted by any contender's starting unit through the first week. Luka's near-triple-double masked the structural dysfunction: Dallas's help-side rotations broke down on 14 separate Spurs possessions in the second half, and Wembanyama scored or assisted on 11 of them. The Kyrie Irving–Luka two-man game remains elite at the offensive end — the desk rates their pick-and-roll efficiency as the second-best two-player pairing in the West behind Jokic and Murray — but the defensive floor of this roster is the desk's primary concern entering the week.",

      bestUnit: {
        players: ["Luka Doncic", "Kyrie Irving", "P.J. Washington", "Derrick Jones Jr.", "Daniel Gafford"],
        team: "DAL",
        minutesTogether: 197,
        netRating: 8.4,
        offRating: 116.2,
        defRating: 107.8,
        plusMinus: 16,
        record: "Equivalent to 1-2 pace",
        keyStrength: "Luka and Kyrie's two-man creation is the West's most difficult offensive problem to solve — the challenge is that the defensive rating of this group is three points worse than it needs to be for a legitimate championship contender.",
      },

      deathLineup: {
        players: ["Luka Doncic", "Kyrie Irving", "P.J. Washington", "Derrick Jones Jr.", "Daniel Gafford"],
        team: "DAL",
        minutesTogether: 43,
        netRating: 5.1,
        offRating: 114.3,
        defRating: 109.2,
        plusMinus: 2,
        record: "1-1 in games when closing",
        keyStrength: "Dallas closes with the same starting five — there is no lineup adjustment that improves the defensive picture enough to justify breaking up the offensive engine.",
      },

      worstUnit: {
        players: ["Dante Exum", "Maxi Kleber", "Dwight Powell", "A.J. Lawson", "Jaden Hardy"],
        team: "DAL",
        minutesTogether: 39,
        netRating: -15.7,
        offRating: 99.1,
        defRating: 114.8,
        plusMinus: -11,
        record: "Equivalent to 0-3 pace",
        keyStrength: "This unit has been the primary source of Dallas's second-half deficit issues — the desk rates the Mavericks' bench depth as the most concerning roster gap among the West's top-six teams.",
      },
    },

    // ─── MIL 0-3 ───────────────────────────────────────────────────────────────
    {
      team: "MIL",
      teamRecord: "0-3",
      narrative:
        "Milwaukee's lineup data is the week's most sobering organizational document — the Bucks have been outscored in 47 of their 48 half-court possessions against elite defensive units this week, and the structural problem is not Giannis. The 35-13-7 line against Philadelphia is the kind of individual performance that should produce a win in most games across NBA history, and the fact that it did not is a roster construction indictment that the desk can no longer frame as early-season variance. Damian Lillard's second unit stints without Giannis have produced a -9.8 net rating through three games, and the Bucks' starting five defensive rating of 113.2 is the worst among any team that features an All-NBA-caliber player. The desk is watching for a lineup adjustment at the Giannis–Lillard pairing level — running them together for longer stretches may be the only structural response available to the coaching staff right now.",

      bestUnit: {
        players: ["Giannis Antetokounmpo", "Damian Lillard", "Khris Middleton", "Brook Lopez", "Malik Beasley"],
        team: "MIL",
        minutesTogether: 193,
        netRating: 3.1,
        offRating: 114.8,
        defRating: 111.7,
        plusMinus: 5,
        record: "Equivalent to 0-3 pace",
        keyStrength: "This starting unit is offensively functional but defensively broken — Lopez's drop coverage has been exploited relentlessly and the Bucks' perimeter closeout rate is the league's lowest through three games.",
      },

      deathLineup: {
        players: ["Giannis Antetokounmpo", "Damian Lillard", "Jae Crowder", "Brook Lopez", "Malik Beasley"],
        team: "MIL",
        minutesTogether: 41,
        netRating: 1.8,
        offRating: 113.2,
        defRating: 111.4,
        plusMinus: 1,
        record: "0-3 in games when closing",
        keyStrength: "The closing lineup substitutes Crowder for Middleton in an attempt to add physical defensive intensity — the net effect has been marginal and the desk rates this as one of the least effective closing units among contenders.",
      },

      worstUnit: {
        players: ["A.J. Green", "MarJon Beauchamp", "Robin Lopez", "Pat Connaughton", "Lindell Wigginton"],
        team: "MIL",
        minutesTogether: 46,
        netRating: -18.3,
        offRating: 95.6,
        defRating: 113.9,
        plusMinus: -15,
        record: "Equivalent to 0-3 pace",
        keyStrength: "No identifiable strength — this is the worst-performing five-man unit among all top-10 teams this week and the desk views it as an organizational emergency.",
      },
    },

    // ─── PHX 1-1 ───────────────────────────────────────────────────────────────
    {
      team: "PHX",
      teamRecord: "1-1",
      narrative:
        "Phoenix's lineup data tells the story of a team that is Durant-dependent in a way that is both reassuring and structurally limiting — his 34-point closing performance against Golden State produced the Suns' only win, and the lineup data shows that Phoenix's net rating when Durant is the primary late-clock option is +14.2 versus -3.7 when the ball flows through anyone else. Devin Booker's secondary creation has been effective in transition but has not yet translated into the sustained half-court playmaking the Suns need when Durant faces elite defensive attention. The Bradley Beal situation remains the desk's most unresolved organizational subplot — Beal's on/off split is -11.4 this week, which is the worst single-player drag coefficient among any starter on a team with a winning record. Phoenix's ceiling is Durant's ceiling, and right now that ceiling is very high but very narrow.",

      bestUnit: {
        players: ["Kevin Durant", "Devin Booker", "Bradley Beal", "Jusuf Nurkic", "Grayson Allen"],
        team: "PHX",
        minutesTogether: 181,
        netRating: 9.6,
        offRating: 115.4,
        defRating: 105.8,
        plusMinus: 17,
        record: "Equivalent to 1-1 pace",
        keyStrength: "Durant's off-ball movement in this lineup creates the most dangerous catch-and-shoot sequence in the West — his 52.1 percent true shooting efficiency in this five-man group is the highest of any forward in a starting unit this week.",
      },

      deathLineup: {
        players: ["Kevin Durant", "Devin Booker", "Eric Gordon", "Jusuf Nurkic", "Royce O'Neale"],
        team: "PHX",
        minutesTogether: 44,
        netRating: 14.2,
        offRating: 117.6,
        defRating: 103.4,
        plusMinus: 6,
        record: "1-0 in games when closing",
        keyStrength: "Phoenix removes Beal and inserts Gordon and O'Neale for closing sequences — the defensive improvement is significant and Durant's isolation efficiency in these lineups is the desk's most important Suns data point this week.",
      },

      worstUnit: {
        players: ["Cameron Payne", "Bol Bol", "Nassir Little", "Udoka Azubuike", "Josh Okogie"],
        team: "PHX",
        minutesTogether: 37,
        netRating: -13.9,
        offRating: 99.4,
        defRating: 113.3,
        plusMinus: -9,
        record: "Equivalent to 0-3 pace",
        keyStrength: "This unit has no offensive structure and has been the primary source of Phoenix's regulation deficit in their one loss — the desk does not anticipate it being used in meaningful minutes as the season progresses.",
      },
    },
  ],
};