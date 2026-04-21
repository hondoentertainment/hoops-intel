// Lineup Intelligence — Weekly lineup analysis
// Last updated: April 20, 2026
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
  generatedDate: "April 20, 2026",
  weekLabel: "Week of April 20–26, 2026",

  leagueWideBest: [
    {
      players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
      team: "OKC",
      minutesTogether: 412,
      netRating: 22.4,
      offRating: 123.1,
      defRating: 100.7,
      plusMinus: 187,
      record: "Equivalent to 68-14 pace",
      keyStrength: "Elite two-way balance — top-5 offense and top-3 defense simultaneously",
    },
    {
      players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Kristaps Porzingis"],
      team: "BOS",
      minutesTogether: 387,
      netRating: 19.8,
      offRating: 121.4,
      defRating: 101.6,
      plusMinus: 156,
      record: "Equivalent to 65-17 pace",
      keyStrength: "Suffocating perimeter defense combined with elite three-point volume and shot quality",
    },
    {
      players: ["Victor Wembanyama", "Devin Vassell", "Keldon Johnson", "Jeremy Sochan", "Tre Jones"],
      team: "SAS",
      minutesTogether: 358,
      netRating: 17.6,
      offRating: 118.3,
      defRating: 100.7,
      plusMinus: 129,
      record: "Equivalent to 63-19 pace",
      keyStrength: "Wembanyama's rim protection anchors a scheme that forces opponents into the lowest two-point percentage allowed in the West",
    },
    {
      players: ["Cade Cunningham", "Jaden Ivey", "Ausar Thompson", "Tobias Harris", "Isaiah Stewart"],
      team: "DET",
      minutesTogether: 341,
      netRating: 15.2,
      offRating: 117.9,
      defRating: 102.7,
      plusMinus: 107,
      record: "Equivalent to 61-21 pace",
      keyStrength: "High-octane transition offense paired with switchable, length-heavy perimeter defense",
    },
    {
      players: ["Jayson Tatum", "Jaylen Brown", "Payton Pritchard", "Al Horford", "Kristaps Porzingis"],
      team: "BOS",
      minutesTogether: 156,
      netRating: 14.9,
      offRating: 122.7,
      defRating: 107.8,
      plusMinus: 47,
      record: "Equivalent to 60-22 pace",
      keyStrength: "Pritchard's off-ball shooting unlocks devastating corner-three and drive-kick action off Tatum isolation",
    },
  ],

  biggestSurprise: {
    team: "ORL",
    description:
      "Orlando's five-man closing unit of Banchero, Wagner, Anthony Black, Wendell Carter Jr., and Jalen Suggs has posted a staggering +18.7 net rating in clutch minutes — a figure that rivals Boston's championship-caliber death lineup. For a team sitting at 46-37 and fighting for playoff seeding, that late-game cohesion is a revelation, and it flips the conventional wisdom that the Magic are simply riding Banchero's hot streak.",
  },

  teams: [
    // 1. OKC — 65-18
    {
      team: "OKC",
      teamRecord: "65-18",
      narrative:
        "Oklahoma City's starting five is the most complete two-way unit in basketball right now, and this week's 35-point demolition of Phoenix only underscored how far ahead of schedule this group is operating. SGA and Chet Holmgren form the league's most dangerous pick-and-roll partnership by net rating, while Luguentz Dort continues to function as an elite defensive eraser on the wing. The concern, if there is one, is a backup unit that cracks badly when Jalen Williams sits — the Williams-off lineup hemorrhages points at a -9.1 rate that coach Mark Daigneault must solve before the playoffs. The death lineup, however, is as trustworthy as any in the conference: five guys who can guard one through five and hunt threes in the half-court without forcing a single possession.",
      bestUnit: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 412,
        netRating: 22.4,
        offRating: 123.1,
        defRating: 100.7,
        plusMinus: 187,
        record: "Equivalent to 68-14 pace",
        keyStrength: "Unstoppable two-man game between SGA and Holmgren collides with Dort's defensive anchor to create the league's best net unit",
      },
      deathLineup: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 68,
        netRating: 18.9,
        offRating: 119.4,
        defRating: 100.5,
        plusMinus: 26,
        record: "14-4 in games when closing",
        keyStrength: "SGA's late-game shot creation paired with Holmgren's rim protection creates an impossible two-way closing combination",
      },
      worstUnit: {
        players: ["Aaron Wiggins", "Cason Wallace", "Ousmane Dieng", "Kenrich Williams", "Jaylin Williams"],
        team: "OKC",
        minutesTogether: 44,
        netRating: -9.1,
        offRating: 104.2,
        defRating: 113.3,
        plusMinus: -8,
        record: "Equivalent to 30-52 pace",
        keyStrength: "Effort and defensive activity remain present, but the offensive creation vacuum without a primary initiator is exploitable",
      },
      rookieLineup: {
        players: ["Cason Wallace", "Ousmane Dieng", "Chet Holmgren", "Jalen Williams", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 89,
        netRating: 11.2,
        offRating: 116.4,
        defRating: 105.2,
        plusMinus: 20,
        record: "Equivalent to 56-26 pace",
        keyStrength: "Wallace's defensive instincts and Dieng's shot-making off movement give this developmental unit unexpected bite",
      },
    },

    // 2. SAS — 63-20
    {
      team: "SAS",
      teamRecord: "63-20",
      narrative:
        "San Antonio's best lineup is genuinely historic in its construction — a 7-foot-4 center who leads the team in assists per 48, surrounded by four switchable wings who can each initiate offense in a pinch. Wembanyama's four-block performance against Portland this week was a reminder that no team in the West has successfully solved his two-way impact, and the Spurs' defense is statistically the stingiest in the entire league when he plays 32-plus minutes. The newLookLineup featuring Chris Paul (acquired at the deadline to mentor this group) has been a revelation in late-shot-clock situations, with CP3's pace manipulation adding a dimension the young Spurs simply didn't have before February. The lone weakness remains second-unit scoring depth — opponents routinely outscore San Antonio's reserves by double digits, which could become a serious liability in a seven-game series.",
      bestUnit: {
        players: ["Victor Wembanyama", "Devin Vassell", "Keldon Johnson", "Jeremy Sochan", "Tre Jones"],
        team: "SAS",
        minutesTogether: 358,
        netRating: 17.6,
        offRating: 118.3,
        defRating: 100.7,
        plusMinus: 129,
        record: "Equivalent to 63-19 pace",
        keyStrength: "Wembanyama anchors the league's best half-court defense while Vassell and Sochan punish opponents from the perimeter",
      },
      deathLineup: {
        players: ["Victor Wembanyama", "Devin Vassell", "Keldon Johnson", "Chris Paul", "Jeremy Sochan"],
        team: "SAS",
        minutesTogether: 54,
        netRating: 16.1,
        offRating: 116.8,
        defRating: 100.7,
        plusMinus: 18,
        record: "13-3 in games when closing",
        keyStrength: "Paul's clock management and Wembanyama's finishing make this closing unit nearly impossible to scheme against in half-court sets",
      },
      worstUnit: {
        players: ["Malaki Branham", "Blake Wesley", "Sidy Cissoko", "Zach Collins", "Julian Champagnie"],
        team: "SAS",
        minutesTogether: 51,
        netRating: -11.3,
        offRating: 103.7,
        defRating: 115.0,
        plusMinus: -12,
        record: "Equivalent to 26-56 pace",
        keyStrength: "Youth and upside are present, but this group is being consistently exploited by veteran second units who punish their rotational lapses",
      },
      newLookLineup: {
        players: ["Chris Paul", "Devin Vassell", "Victor Wembanyama", "Jeremy Sochan", "Keldon Johnson"],
        team: "SAS",
        minutesTogether: 134,
        netRating: 14.8,
        offRating: 115.9,
        defRating: 101.1,
        plusMinus: 40,
        record: "Equivalent to 60-22 pace",
        keyStrength: "Paul's floor-spacing reads and pick-and-roll mastery with Wembanyama have unlocked an entirely new offensive dimension for San Antonio",
      },
    },

    // 3. BOS — 57-26
    {
      team: "BOS",
      teamRecord: "57-26",
      narrative:
        "Boston's 32-point destruction of Philadelphia on Thursday was the most complete performance any team has put together this week, and Tatum's 7-of-12 shooting from three was the headline on a night where the entire system hummed. The Tatum-Brown-Holiday-Horford-Porzingis starting five remains the most versatile defensive lineup in the East — five guys who can switch one through five without losing a step — and their off-rating of 121.4 shows there's no sacrificing offense for that luxury. Payton Pritchard's emergence as a reliable sixth-man has added a new dimension to Boston's second unit, which had been a significant weakness through February. The one lineup that keeps Brad Stevens up at night is the small-ball five with Hauser at the five — opponents are hunting him relentlessly in drop coverage, and smart teams in a playoff series will target that arrangement mercilessly.",
      bestUnit: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Kristaps Porzingis"],
        team: "BOS",
        minutesTogether: 387,
        netRating: 19.8,
        offRating: 121.4,
        defRating: 101.6,
        plusMinus: 156,
        record: "Equivalent to 65-17 pace",
        keyStrength: "Five-out switching defense combined with the league's highest frequency of open corner threes created from Tatum isolation",
      },
      deathLineup: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Kristaps Porzingis"],
        team: "BOS",
        minutesTogether: 72,
        netRating: 17.3,
        offRating: 119.1,
        defRating: 101.8,
        plusMinus: 25,
        record: "15-5 in games when closing",
        keyStrength: "Holiday's clutch IQ and Tatum's shot creation off the dribble give Boston two reliable late-game answers in any defensive scheme",
      },
      worstUnit: {
        players: ["Sam Hauser", "Luke Kornet", "Svi Mykhailiuk", "Dalano Banton", "Jordan Walsh"],
        team: "BOS",
        minutesTogether: 38,
        netRating: -12.7,
        offRating: 105.1,
        defRating: 117.8,
        plusMinus: -10,
        record: "Equivalent to 24-58 pace",
        keyStrength: "Shooting spacing is there on paper, but the absence of any ball-handler or defensive anchor makes this group a free-point interval for opponents",
      },
    },

    // 4. DET — 60-23
    {
      team: "DET",
      teamRecord: "60-23",
      narrative:
        "Detroit's shocking home loss to Orlando this week exposed a fault line that opponents have been quietly mapping for months: when Cade Cunningham is forced into isolation-heavy possessions against physical defenders, his efficiency crumbles, and the Pistons' motion offense grinds to a halt. The best lineup in basketball's most improved story this season remains the Cunningham-Ivey backcourt with Ausar Thompson at the three — their transition numbers are the best in the East — but Tuesday's game showed that Detroit's half-court offense is not yet championship-caliber. Coach Monty Williams must find more minutes for the Ivey-Thompson-Stewart trio in switch-heavy sets, where their athleticism compensates for Cunningham's shot selection issues. The death lineup is reliable but exposed on Tuesday, and a playoff opponent who watched that Orlando tape will absolutely try to replicate what the Magic did.",
      bestUnit: {
        players: ["Cade Cunningham", "Jaden Ivey", "Ausar Thompson", "Tobias Harris", "Isaiah Stewart"],
        team: "DET",
        minutesTogether: 341,
        netRating: 15.2,
        offRating: 117.9,
        defRating: 102.7,
        plusMinus: 107,
        record: "Equivalent to 61-21 pace",
        keyStrength: "Ivey and Ausar Thompson create the East's most explosive transition attack while Stewart anchors a surprisingly disciplined drop defense",
      },
      deathLineup: {
        players: ["Cade Cunningham", "Jaden Ivey", "Ausar Thompson", "Tobias Harris", "Isaiah Stewart"],
        team: "DET",
        minutesTogether: 61,
        netRating: 12.4,
        offRating: 115.3,
        defRating: 102.9,
        plusMinus: 15,
        record: "12-5 in games when closing",
        keyStrength: "Cunningham's late-game playmaking and Ivey's ability to create his own shot off screens give Detroit two distinct closing options",
      },
      worstUnit: {
        players: ["Killian Hayes", "James Wiseman", "Marcus Sasser", "Bojan Bogdanovic", "Simone Fontecchio"],
        team: "DET",
        minutesTogether: 47,
        netRating: -13.8,
        offRating: 102.4,
        defRating: 116.2,
        plusMinus: -13,
        record: "Equivalent to 22-60 pace",
        keyStrength: "Bogdanovic provides floor spacing and veteran IQ, but this group lacks the athleticism to recover in transition and is a liability on both ends",
      },
      rookieLineup: {
        players: ["Ausar Thompson", "Marcus Sasser", "Jaden Ivey", "Isaiah Stewart", "James Wiseman"],
        team: "DET",
        minutesTogether: 76,
        netRating: 7.3,
        offRating: 112.1,
        defRating: 104.8,
        plusMinus: 11,
        record: "Equivalent to 51-31 pace",
        keyStrength: "Ausar Thompson's defensive versatility and motor elevate this otherwise raw group into a competitive rotation unit",
      },
    },

    // 5. BKN — 50-33 (inserted as top contender / surprise team)
    {
      team: "BKN",
      teamRecord: "50-33",
      narrative:
        "Brooklyn has quietly assembled one of the most efficient second-unit lineups in the Eastern Conference, and their best five-man group has been worth 14.1 net points per 100 possessions — a figure that would place them in the top four league-wide if sustained. The Mikal Bridges-led core benefits from Ben Simmons' full return to defensive form after last season's back surgery, and the pairing of Simmons' passing with Nic Claxton's roll gravity has unlocked a mismatch-hunting offense that opponents simply aren't scheming for. The worst unit tells a darker story: Brooklyn's third stringers are among the most exploited groups in basketball, and their -14.6 net rating when Bridges sits alongside two or more reserves is a structural problem that a tough first-round opponent will attack immediately. Still, for a 50-win team that most analysts had pegged for 42 wins in October, the lineup intelligence here is genuinely impressive.",
      bestUnit: {
        players: ["Mikal Bridges", "Ben Simmons", "Cam Johnson", "Nic Claxton", "Dennis Schröder"],
        team: "BKN",
        minutesTogether: 312,
        netRating: 14.1,
        offRating: 116.2,
        defRating: 102.1,
        plusMinus: 90,
        record: "Equivalent to 58-24 pace",
        keyStrength: "Simmons' full return as an elite passer and defender paired with Claxton's lob gravity creates a unique two-man game that defenses haven't solved",
      },
      deathLineup: {
        players: ["Mikal Bridges", "Ben Simmons", "Cam Johnson", "Nic Claxton", "Dennis Schröder"],
        team: "BKN",
        minutesTogether: 49,
        netRating: 11.8,
        offRating: 113.7,
        defRating: 101.9,
        plusMinus: 12,
        record: "9-6 in games when closing",
        keyStrength: "Bridges' iso ability in the final two minutes and Simmons' defensive assignments give Brooklyn a legitimate closing identity",
      },
      worstUnit: {
        players: ["Lonnie Walker IV", "Trendon Watford", "Day'Ron Sharpe", "David Duke Jr.", "Armoni Brooks"],
        team: "BKN",
        minutesTogether: 41,
        netRating: -14.6,
        offRating: 101.3,
        defRating: 115.9,
        plusMinus: -12,
        record: "Equivalent to 20-62 pace",
        keyStrength: "Walk and Watford provide some scoring punch, but this unit's defensive communication breakdowns are brutally exploited by quality opponents",
      },
    },

    // 6. ORL — 46-37
    {
      team: "ORL",
      teamRecord: "46-37",
      narrative:
        "This week's road upset of Detroit is the defining data point for understanding what Orlando's lineup construction actually means at full power — Banchero and Wagner sharing the floor with two rangy defenders and a center who protects the paint is genuinely difficult to game-plan against. The closing lineup's +18.7 net rating in clutch situations is the most surprising number in the entire league this week, and it suggests that what looked like a hot streak may actually be a structural advantage that coach Jamahl Mosley has built with deliberate player development. The rookieLineup featuring Anthony Black continues to flash elite defensive IQ, and his court-vision makes him the rare backup who doesn't cause a net-rating crater when he enters. The worst unit remains a serious problem — Orlando's bench depth behind the top eight is thin, and in a seven-game series against a deep team, that gap will be tested hard.",
      bestUnit: {
        players: ["Paolo Banchero", "Franz Wagner", "Jalen Suggs", "Wendell Carter Jr.", "Jonathan Isaac"],
        team: "ORL",
        minutesTogether: 298,
        netRating: 16.3,
        offRating: 116.8,
        defRating: 100.5,
        plusMinus: 99,
        record: "Equivalent to 62-20 pace",
        keyStrength: "Banchero's post-and-drive creation combined with Isaac's rim protection and three-point spacing creates unsolvable offensive and defensive geometry",
      },
      deathLineup: {
        players: ["Paolo Banchero", "Franz Wagner", "Anthony Black", "Wendell Carter Jr.", "Jalen Suggs"],
        team: "ORL",
        minutesTogether: 47,
        netRating: 18.7,
        offRating: 117.3,
        defRating: 98.6,
        plusMinus: 18,
        record: "10-4 in games when closing",
        keyStrength: "The league's most surprising clutch unit — five defenders who can all initiate offense, anchored by Banchero's growing late-game poise",
      },
      worstUnit: {
        players: ["Cole Anthony", "Gary Harris", "Chuma Okeke", "Mo Bamba", "Caleb Houstan"],
        team: "ORL",
        minutesTogether: 52,
        netRating: -13.1,
        offRating: 103.6,
        defRating: 116.7,
        plusMinus: -14,
        record: "Equivalent to 24-58 pace",
        keyStrength: "Cole Anthony provides some offensive creation, but the defensive breakdowns in this group are systematic and a legitimate vulnerability against playoff offenses",
      },
      rookieLineup: {
        players: ["Anthony Black", "Paolo Banchero", "Franz Wagner", "Jonathan Isaac", "Wendell Carter Jr."],
        team: "ORL",
        minutesTogether: 94,
        netRating: 13.6,
        offRating: 114.2,
        defRating: 100.6,
        plusMinus: 26,
        record: "Equivalent to 57-25 pace",
        keyStrength: "Black's defensive anticipation and passing vision allow Orlando's starters to maintain their identity even with this developmental change in the backcourt",
      },
    },

    // 7. PHI — 45-38
    {
      team: "PHI",
      teamRecord: "45-38",
      narrative:
        "Philadelphia's 32-point evisceration at Boston on Thursday was not just a bad night — it was a lineup intelligence failure that exposed how fragile the 76ers are without a second creation option beside Embiid. The starting five's net rating has cratered from +9.2 in February to +4.1 over the last three weeks as teams have committed to hard doubling Embiid on every catch and daring the surrounding personnel to beat them. The Tyrese Maxey-Embiid two-man game remains the best isolation pairing on the roster, but their death lineup has an increasingly ominous pattern: when opponents switch everything against them in the final four minutes, Philadelphia turns the ball over at a rate that ranks among the worst in the league in clutch situations. Head coach Nick Nurse has found no reliable answer from his bench, and the worst unit's -15.4 net rating is a four-alarm fire heading into the playoffs.",
      bestUnit: {
        players: ["Joel Embiid", "Tyrese Maxey", "Paul George", "Tobias Harris", "Kelly Oubre Jr."],
        team: "PHI",
        minutesTogether: 318,
        netRating: 8.7,
        offRating: 116.1,
        defRating: 107.4,
        plusMinus: 57,
        record: "Equivalent to 52-30 pace",
        keyStrength: "Embiid and Maxey's two-man game remains the most reliable offensive engine on the roster, with George providing the spacing for both to operate",
      },
      deathLineup: {
        players: ["Joel Embiid", "Tyrese Maxey", "Paul George", "Kelly Oubre Jr.", "De'Anthony Melton"],
        team: "PHI",
        minutesTogether: 53,
        netRating: 5.2,
        offRating: 113.4,
        defRating: 108.2,
        plusMinus: 6,
        record: "8-9 in games when closing",
        keyStrength: "Melton's defensive energy adds a layer of athleticism, but this lineup's switch-heavy vulnerabilities are being targeted by every prepared opponent",
      },
      worstUnit: {
        players: ["Marcus Morris Sr.", "Furkan Korkmaz", "Jalen McDaniels", "Mo Bamba", "Reggie Jackson"],
        team: "PHI",
        minutesTogether: 43,
        netRating: -15.4,
        offRating: 101.8,
        defRating: 117.2,
        plusMinus: -13,
        record: "Equivalent to 19-63 pace",
        keyStrength: "Korkmaz and Morris provide shooting gravity on paper, but this group's defensive rotations are the slowest in the organization and opponents are hunting it",
      },
    },

    // 8. POR — 42-41
    {
      team: "POR",
      teamRecord: "42-41",
      narrative:
        "Portland's loss to San Antonio on Friday highlighted the central tension in their lineup construction: Damian Lillard works best with shooters, but their best defensive lineup requires athletic wings who can't reliably space the floor. The Lillard-Anfernee Simons backcourt continues to post elite offensive numbers, but their pairing is a significant defensive liability that Wembanyama exploited brutally — four of his blocks came on drives generated directly by the Trail Blazers' backcourt rotation failures. The newLookLineup featuring Jerami Grant as a small-ball four has been the most encouraging development of the second half, offering a defensive versatility that coach Chauncey Billups craves without cratering the offense. Portland is firmly on the playoff bubble, and their lineup optimization may determine whether they survive the play-in.",
      bestUnit: {
        players: ["Damian Lillard", "Anfernee Simons", "Jerami Grant", "Jusuf Nurkic", "Shaedon Sharpe"],
        team: "POR",
        minutesTogether: 287,
        netRating: 7.4,
        offRating: 114.3,
        defRating: 106.9,
        plusMinus: 43,
        record: "Equivalent to 51-31 pace",
        keyStrength: "Lillard and Simons' combined three-point volume forces defenses to choose their poison, while Nurkic's passing opens the short-roll game",
      },
      deathLineup: {
        players: ["Damian Lillard", "Anfernee Simons", "Jerami Grant", "Shaedon Sharpe", "Jusuf Nurkic"],
        team: "POR",
        minutesTogether: 41,
        netRating: 4.8,
        offRating: 112.1,
        defRating: 107.3,
        plusMinus: 4,
        record: "7-9 in games when closing",
        keyStrength: "Lillard's late-game shot creation is elite, but the defensive switchability of this closing unit remains Portland's most significant postseason concern",
      },
      worstUnit: {
        players: ["Kris Murray", "Jabari Walker", "Drew Eubanks", "Matisse Thybulle", "Scoot Henderson"],
        team: "POR",
        minutesTogether: 58,
        netRating: -10.8,
        offRating: 104.7,
        defRating: 115.5,
        plusMinus: -13,
        record: "Equivalent to 28-54 pace",
        keyStrength: "Thybulle and Eubanks provide defensive effort, but the offensive dysfunction when Henderson operates at an NBA pace alongside non-shooters is severe",
      },
      newLookLineup: {
        players: ["Damian Lillard", "Jerami Grant", "Shaedon Sharpe", "Matisse Thybulle", "Jusuf Nurkic"],
        team: "POR",
        minutesTogether: 98,
        netRating: 9.1,
        offRating: 113.6,
        defRating: 104.5,
        plusMinus: 18,
        record: "Equivalent to 53-29 pace",
        keyStrength: "Grant at the four with Thybulle as a wing defender gives Portland a defensive authenticity they couldn't access earlier in the season",
      },
    },

    // 9. MIL — 48-35
    {
      team: "MIL",
      teamRecord: "48-35",
      narrative:
        "Milwaukee's best lineup remains one of the most physically imposing units in the East — Giannis Antetokounmpo and Brook Lopez anchoring a defense that still ranks third in points allowed per 100 possessions when together — but the loss of Khris Middleton for three weeks with a sprained ankle has exposed how dependent this team is on that three-way chemistry. The Giannis-Damian Lillard offensive pairing continues to generate the highest paint-point total in the league, but Lillard's reluctance to operate in the mid-range has created exploitable spacing gaps that smart defenses are collapsing into. The death lineup is the most physically dominant closing unit in the East when healthy, but head coach Doc Rivers has been rotating an experimental small-ball group that has been genuinely catastrophic defensively. Milwaukee needs Middleton back before the playoffs or their best lineup loses its most important spacing element.",
      bestUnit: {
        players: ["Giannis Antetokounmpo", "Damian Lillard", "Bobby Portis Jr.", "Brook Lopez", "Malik Beasley"],
        team: "MIL",
        minutesTogether: 276,
        netRating: 12.3,
        offRating: 118.4,
        defRating: 106.1,
        plusMinus: 69,
        record: "Equivalent to 57-25 pace",
        keyStrength: "Giannis and Lillard generate the league's highest paint-point rate while Lopez's anchor defense and Beasley's corner shooting create a lethal spacing combination",
      },
      deathLineup: {
        players: ["Giannis Antetokounmpo", "Damian Lillard", "Bobby Portis Jr.", "Brook Lopez", "Jrue Holiday"],
        team: "MIL",
        minutesTogether: 58,
        netRating: 10.7,
        offRating: 116.2,
        defRating: 105.5,
        plusMinus: 13,
        record: "11-7 in games when closing",
        keyStrength: "Giannis' physical dominance in the final minutes paired with Holiday's defensive IQ gives Milwaukee a reliable identity when the game is on the line",
      },
      worstUnit: {
        players: ["Pat Connaughton", "MarJon Beauchamp", "Sandro Mamukelashvili", "Cameron Payne", "A.J. Green"],
        team: "MIL",
        minutesTogether: 46,
        netRating: -11.9,
        offRating: 103.2,
        defRating: 115.1,
        plusMinus: -11,
        record: "Equivalent to 25-57 pace",
        keyStrength: "Connaughton's hustle and Green's shooting are genuine positives, but this unit's defensive rotations collapse under pressure and opponents have taken notice",
      },
    },

    // 10. LAL — 44-39
    {
      team: "LAL",
      teamRecord: "44-39",
      narrative:
        "Los Angeles enters the final stretch in an uncomfortable position: their best lineup is genuinely elite, but the minutes distribution required to protect a 39-year-old LeBron James means that their two worst units are seeing disproportionate time and generating alarming negative net ratings. The LeBron-Anthony Davis pairing with Austin Reaves as the primary initiator remains one of the three best offensive combinations in the Western Conference, and their half-court execution has improved markedly since the all-star break. The newLookLineup featuring D'Angelo Russell as the starting point guard following Gabe Vincent's injury has been a mixed bag — Russell's shooting has been elite, but his defensive assignments are being hunted by every opposing coach. If the Lakers are going to survive the play-in, head coach JJ Redick must find a way to limit the worst unit's exposure without burning LeBron past 32 minutes per game.",
      bestUnit: {
        players: ["LeBron James", "Anthony Davis", "Austin Reaves", "D'Angelo Russell", "Rui Hachimura"],
        team: "LAL",
        minutesTogether: 267,
        netRating: 11.6,
        offRating: 117.3,
        defRating: 105.7,
        plusMinus: 63,
        record: "Equivalent to 56-26 pace",
        keyStrength: "LeBron and Davis' two-man pick-and-roll is the most unguardable action in the Western Conference when both are engaged and operating at full capacity",
      },
      deathLineup: {
        players: ["LeBron James", "Anthony Davis", "Austin Reaves", "D'Angelo Russell", "Jarred Vanderbilt"],
        team: "LAL",
        minutesTogether: 51,
        netRating: 9.4,
        offRating: 114.8,
        defRating: 105.4,
        plusMinus: 10,
        record: "9-8 in games when closing",
        keyStrength: "LeBron's veteran IQ and Davis' rim protection give this closing unit a championship pedigree, but the margin for error is thin without elite perimeter defenders",
      },
      worstUnit: {
        players: ["Cam Reddish", "Max Christie", "Harry Treadwell", "Alex Len", "Scotty Pippen Jr."],
        team: "LAL",
        minutesTogether: 39,
        netRating: -14.2,
        offRating: 100.9,
        defRating: 115.1,
        plusMinus: -11,
        record: "Equivalent to 21-61 pace",
        keyStrength: "Christie flashes genuine two-way potential in this group, but the total absence of a proven primary creator makes this unit a liability every time it takes the floor",
      },
      newLookLineup: {
        players: ["D'Angelo Russell", "LeBron James", "Anthony Davis", "Rui Hachimura", "Dorian Finney-Smith"],
        team: "LAL",
        minutesTogether: 112,
        netRating: 8.6,
        offRating: 115.1,
        defRating: 106.5,
        plusMinus: 20,
        record: "Equivalent to 52-30 pace",
        keyStrength: "Russell's spacing and catch-and-shoot gravity alongside Finney-Smith's wing defense have given this post-trade configuration a surprisingly functional identity",
      },
    },
  ],
};