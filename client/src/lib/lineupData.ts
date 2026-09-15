// Lineup Intelligence — Weekly lineup analysis
// Last updated: September 14, 2026
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
  generatedDate: "September 14, 2026",
  weekLabel: "Week of September 14–20, 2026",

  leagueWideBest: [
    {
      players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Harrison Barnes", "Devin Vassell"],
      team: "SAS",
      minutesTogether: 487,
      netRating: 24.1,
      offRating: 121.4,
      defRating: 97.3,
      plusMinus: 312,
      record: "Equivalent to 71-11 pace",
      keyStrength: "Wembanyama's gravity collapses drop coverage; Fox and Castle in transition before defenses set — a two-level speed asymmetry no rotation has solved."
    },
    {
      players: ["Shai Gilgeous-Alexander", "Chet Holmgren", "Jalen Williams", "Lu Dort", "Isaiah Hartenstein"],
      team: "OKC",
      minutesTogether: 462,
      netRating: 21.7,
      offRating: 119.8,
      defRating: 98.1,
      plusMinus: 274,
      record: "Equivalent to 68-14 pace",
      keyStrength: "Five-out spacing with Holmgren at the nail and SGA operating in the short roll — offense generates at will; Dort and Hartenstein form a switchless defensive backbone."
    },
    {
      players: ["Jalen Brunson", "Karl-Anthony Towns", "OG Anunoby", "Mikal Bridges", "Josh Hart"],
      team: "NYK",
      minutesTogether: 398,
      netRating: 18.3,
      offRating: 116.9,
      defRating: 98.6,
      plusMinus: 201,
      record: "Equivalent to 64-18 pace",
      keyStrength: "KAT's interior gravity unlocks Brunson's pull-up game at the highest efficiency of the championship run; Hart and Bridges provide relentless second-effort stops."
    },
    {
      players: ["Alperen Sengun", "Jalen Green", "Amen Thompson", "Fred VanVleet", "Dillon Brooks"],
      team: "HOU",
      minutesTogether: 341,
      netRating: 16.8,
      offRating: 115.2,
      defRating: 98.4,
      plusMinus: 158,
      record: "Equivalent to 62-20 pace",
      keyStrength: "Sengun's pick-and-roll partnership with VanVleet has matured into one of the league's three most efficient two-man actions; Thompson's off-ball cutting creates a permanent third threat."
    },
    {
      players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Tre Jones", "Keldon Johnson"],
      team: "SAS",
      minutesTogether: 187,
      netRating: 15.9,
      offRating: 118.3,
      defRating: 102.4,
      plusMinus: 82,
      record: "Equivalent to 61-21 pace",
      keyStrength: "Wembanyama at the five surrounded by four capable shooters — the secondary closing look San Antonio deploys when opponents load up on the Barnes-Vassell pairing."
    }
  ],

  biggestSurprise: {
    team: "HOU",
    description: "Houston's Sengun–VanVleet two-man game has posted the league's highest pick-and-roll points-per-possession mark in phase-two preseason integration, a number that looked impossible when VanVleet's usage was being redistributed around Green. The Rockets' best lineup is now producing at a 62-win pace — six wins above their actual regular-season finish — suggesting phase two is converting organizational schedule into on-court arithmetic ahead of any projected timeline."
  },

  teams: [
    {
      team: "OKC",
      teamRecord: "64-18",
      narrative: "Oklahoma City's best unit is structurally the most complete defensive organism in the league, with Dort and Hartenstein forming a switchless backbone that surrendered under 98 points per 100 in 462 shared minutes — a sample large enough to be definitive. SGA's ten-layer week-four refinement architecture is most visible inside this lineup: his decision latency in the short roll has compressed to a level Holmgren's timing is now calibrated around, not adjusting to. The death lineup, however, carries a genuine vulnerability: when Holmgren is off the floor in crunch possessions, OKC's rim protection drops by a measurable tier and opponents have begun hunting that window with urgency. The worst unit — centered around Tre Mann and rookie spacing — has been a consistent source of second-unit erosion, and Daigneault's bench sequencing will be the franchise's most scrutinized preseason variable heading into October.",
      bestUnit: {
        players: ["Shai Gilgeous-Alexander", "Chet Holmgren", "Jalen Williams", "Lu Dort", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 462,
        netRating: 21.7,
        offRating: 119.8,
        defRating: 98.1,
        plusMinus: 274,
        record: "Equivalent to 68-14 pace",
        keyStrength: "Five-out spacing with Holmgren at the nail and SGA operating in the short roll — offense generates at will; Dort and Hartenstein form a switchless defensive backbone."
      },
      deathLineup: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Lu Dort", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 94,
        netRating: 17.2,
        offRating: 116.1,
        defRating: 98.9,
        plusMinus: 44,
        record: "31-9 in games when closing",
        keyStrength: "Identical to the best unit — OKC's closing five is their starting five, with no meaningful personnel change. That depth of trust reflects a roster built without a seam."
      },
      worstUnit: {
        players: ["Tre Mann", "Aaron Wiggins", "Ousmane Dieng", "Jaylin Williams", "Kenrich Williams"],
        team: "OKC",
        minutesTogether: 58,
        netRating: -11.4,
        offRating: 104.2,
        defRating: 115.6,
        plusMinus: -36,
        record: "Equivalent to 27-55 pace",
        keyStrength: "Youth and athleticism — this unit competes but cannot yet generate quality offense without a creation anchor."
      },
      rookieLineup: {
        players: ["Ousmane Dieng", "Tre Mann", "Aaron Wiggins", "Jaylin Williams", "Shai Gilgeous-Alexander"],
        team: "OKC",
        minutesTogether: 41,
        netRating: 6.3,
        offRating: 113.4,
        defRating: 107.1,
        plusMinus: 14,
        record: "Equivalent to 51-31 pace",
        keyStrength: "SGA's presence anchors developmental reps at a positive net rating — OKC's pipeline structure gives young players live high-leverage situations at a pace no peer program matches."
      }
    },
    {
      team: "SAS",
      teamRecord: "62-20",
      narrative: "San Antonio's best lineup is the best lineup in basketball, full stop — 24.1 net rating across 487 minutes is a number that does not regress unless the personnel changes, and the personnel is locked through 2030-31. Wembanyama's thirty consecutive compound preparation mornings have produced a measurable refinement in his ball-screen read timing: he is now declining more coverages than he accepts, forcing opponents into rotation decisions before the catch rather than after it. Fox and Castle flanking him in transition is the league's most efficient three-man fast-break structure by points per possession, and Harrison Barnes's veteran spacing has been quietly essential to keeping weak-side defenders honest. The only structural question entering October is whether the worst unit — a deep-bench combination that has given up points at an alarming rate — creates exploitable game-flow windows in the second and third quarters that disciplined opponents can target before the starters return.",
      bestUnit: {
        players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Harrison Barnes", "Devin Vassell"],
        team: "SAS",
        minutesTogether: 487,
        netRating: 24.1,
        offRating: 121.4,
        defRating: 97.3,
        plusMinus: 312,
        record: "Equivalent to 71-11 pace",
        keyStrength: "Wembanyama's gravity collapses drop coverage; Fox and Castle in transition before defenses set — a two-level speed asymmetry no rotation has solved."
      },
      deathLineup: {
        players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Devin Vassell", "Harrison Barnes"],
        team: "SAS",
        minutesTogether: 112,
        netRating: 22.8,
        offRating: 120.7,
        defRating: 97.9,
        plusMinus: 71,
        record: "38-4 in games when closing",
        keyStrength: "Unchanged from the best unit in personnel and nearly unchanged in production — the death lineup is not a departure but a confirmation. San Antonio closes with the same five that opened, and the results validate that choice on every relevant metric."
      },
      worstUnit: {
        players: ["Blake Wesley", "Malaki Branham", "Charles Bassey", "Isaiah Roby", "Julian Champagnie"],
        team: "SAS",
        minutesTogether: 47,
        netRating: -14.2,
        offRating: 102.1,
        defRating: 116.3,
        plusMinus: -38,
        record: "Equivalent to 20-62 pace",
        keyStrength: "Athleticism and energy — but no reliable creation or perimeter containment at this tier makes the unit a liability in any meaningful game-flow context."
      },
      rookieLineup: {
        players: ["Stephon Castle", "Victor Wembanyama", "De'Aaron Fox", "Devin Vassell", "Tre Jones"],
        team: "SAS",
        minutesTogether: 203,
        netRating: 19.4,
        offRating: 118.6,
        defRating: 99.2,
        plusMinus: 109,
        record: "Equivalent to 65-17 pace",
        keyStrength: "Castle's extension-anchored confidence is visible in his decision timing — he is no longer reading the defense after the catch but before it, a preseason development that has materially upgraded this lineup's offensive floor."
      }
    },
    {
      team: "DEN",
      teamRecord: "54-28",
      narrative: "Denver's best lineup remains Jokic-centered and elite, but the structural cost of the system-draft retrofit is becoming visible in the data: the gap between their best and worst units is the widest of any top-six team, a sign that the organizational architecture is carrying more load than the depth can absorb. Jokic's layer-one installation is now permanently closed, which means the efficiency ceiling of this unit is known — and it is high — but the margin for further optimization is structurally gone. The death lineup functions because Jokic makes every closing situation workable regardless of supporting cast, but Murray's thirty-day directional silence means the closing unit is operating with a genuine second-option vacancy that opponents are increasingly willing to probe. The worst unit, which has leaked nearly 17 points per 100 in shared minutes, is the clearest evidence that the retrofit skeleton has not distributed load evenly across Denver's rotation.",
      bestUnit: {
        players: ["Nikola Jokic", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Kentavious Caldwell-Pope"],
        team: "DEN",
        minutesTogether: 389,
        netRating: 14.6,
        offRating: 117.3,
        defRating: 102.7,
        plusMinus: 158,
        record: "Equivalent to 59-23 pace",
        keyStrength: "Jokic orchestrates a read-heavy offense that no defense has fully solved in three seasons; Gordon's two-way versatility provides the defensive connective tissue that lets Porter and KCP stay offense-side."
      },
      deathLineup: {
        players: ["Nikola Jokic", "Jamal Murray", "Aaron Gordon", "Michael Porter Jr.", "Peyton Watson"],
        team: "DEN",
        minutesTogether: 67,
        netRating: 9.8,
        offRating: 114.2,
        defRating: 104.4,
        plusMinus: 18,
        record: "19-13 in games when closing",
        keyStrength: "Jokic's late-game creation is sui generis — but Murray's prolonged silence has reduced the closing unit's secondary threat to a level opponents can game-plan around, and Watson's defensive ceiling has not yet compensated for KCP's offensive reliability being benched."
      },
      worstUnit: {
        players: ["Reggie Jackson", "Julian Strawther", "Hunter Tyson", "Zeke Nnaji", "DeAndre Jordan"],
        team: "DEN",
        minutesTogether: 44,
        netRating: -16.8,
        offRating: 100.4,
        defRating: 117.2,
        plusMinus: -41,
        record: "Equivalent to 16-66 pace",
        keyStrength: "Veteran depth and garbage-time minutes — this unit has no identifiable strength at competitive intensity levels."
      }
    },
    {
      team: "NYK",
      teamRecord: "53-29",
      narrative: "New York's championship lineup has the highest floor of any East team by a significant margin — Brunson's 7.4 Finals APG and KAT's interior gravity create a two-pillar offense that opposing defenses cannot simultaneously contain. The best unit's 18.3 net rating is a championship-caliber number, and the fact that it has sustained across a 398-minute sample suggests the Finals run was not a statistical aberration but a structural confirmation. Anunoby and Bridges as the two-wing pairing remains arguably the East's deepest defensive positional combination, and Hart's second-effort rebounding has been consistently decisive in the two to four possession swings that determine close-game outcomes. The worst unit — a bench combination built around Donte DiVincenzo's creation — has been the one consistent negative in an otherwise clean organizational picture, though the championship-settled locker room means those minutes carry minimal cultural cost.",
      bestUnit: {
        players: ["Jalen Brunson", "Karl-Anthony Towns", "OG Anunoby", "Mikal Bridges", "Josh Hart"],
        team: "NYK",
        minutesTogether: 398,
        netRating: 18.3,
        offRating: 116.9,
        defRating: 98.6,
        plusMinus: 201,
        record: "Equivalent to 64-18 pace",
        keyStrength: "KAT's interior gravity unlocks Brunson's pull-up game at the highest efficiency of the championship run; Hart and Bridges provide relentless second-effort stops."
      },
      deathLineup: {
        players: ["Jalen Brunson", "Karl-Anthony Towns", "OG Anunoby", "Mikal Bridges", "Josh Hart"],
        team: "NYK",
        minutesTogether: 88,
        netRating: 16.9,
        offRating: 115.8,
        defRating: 98.9,
        plusMinus: 41,
        record: "29-7 in games when closing",
        keyStrength: "Same five, same structure, same results — New York closes with the championship unit and the data does not suggest any reason to deviate. Brunson's late-game shot creation is the East's most reliable individual closing mechanism."
      },
      worstUnit: {
        players: ["Donte DiVincenzo", "Precious Achiuwa", "Miles McBride", "Tyler Kolek", "Jericho Sims"],
        team: "NYK",
        minutesTogether: 52,
        netRating: -12.7,
        offRating: 104.8,
        defRating: 117.5,
        plusMinus: -37,
        record: "Equivalent to 24-58 pace",
        keyStrength: "Energy and pace — but no reliable half-court creation mechanism makes this unit exploitable against any organized defense."
      }
    },
    {
      team: "HOU",
      teamRecord: "52-30",
      narrative: "Houston's phase-two activation has produced the preseason's most significant lineup-level surprise: the Sengun–VanVleet two-man game is now generating pick-and-roll efficiency numbers that rank first in the league, a development that was structurally projected but has arrived on an accelerated schedule. The best unit's 16.8 net rating places it ahead of every team except San Antonio and Oklahoma City, and Amen Thompson's off-ball cutting has been the hidden variable — he is creating third-side actions that opponents cannot account for within their primary coverage schemes. The death lineup represents a genuine organizational choice: Dillon Brooks's defensive intensity in late possessions has been decisive enough that Ime Udoka has committed to keeping him on the floor in close games despite the offensive cost. The worst unit is a youth-development combination that has given the organization useful developmental data at a predictable efficiency cost.",
      bestUnit: {
        players: ["Alperen Sengun", "Jalen Green", "Amen Thompson", "Fred VanVleet", "Dillon Brooks"],
        team: "HOU",
        minutesTogether: 341,
        netRating: 16.8,
        offRating: 115.2,
        defRating: 98.4,
        plusMinus: 158,
        record: "Equivalent to 62-20 pace",
        keyStrength: "Sengun's pick-and-roll partnership with VanVleet has matured into one of the league's three most efficient two-man actions; Thompson's off-ball cutting creates a permanent third threat."
      },
      deathLineup: {
        players: ["Alperen Sengun", "Jalen Green", "Amen Thompson", "Fred VanVleet", "Dillon Brooks"],
        team: "HOU",
        minutesTogether: 71,
        netRating: 14.1,
        offRating: 113.6,
        defRating: 99.5,
        plusMinus: 28,
        record: "22-11 in games when closing",
        keyStrength: "Brooks's closing-minute defensive intensity has been Houston's most reliable late-game differentiator — his on-ball pressure forces ball-handlers into pull-up decisions that Sengun's help positioning then contests."
      },
      worstUnit: {
        players: ["Tari Eason", "Jae'Sean Tate", "Jeff Green", "Aaron Holiday", "Jabari Smith Jr."],
        team: "HOU",
        minutesTogether: 39,
        netRating: -13.1,
        offRating: 103.7,
        defRating: 116.8,
        plusMinus: -29,
        record: "Equivalent to 22-60 pace",
        keyStrength: "Physical toughness and defensive effort — but the absence of any creation at guard or the short roll makes the offense unplayable at competitive pace."
      },
      newLookLineup: {
        players: ["Alperen Sengun", "Jalen Green", "Amen Thompson", "Reed Sheppard", "Fred VanVleet"],
        team: "HOU",
        minutesTogether: 88,
        netRating: 11.4,
        offRating: 113.1,
        defRating: 101.7,
        plusMinus: 28,
        record: "Equivalent to 57-25 pace",
        keyStrength: "Sheppard's spacing at the four-guard spot has unlocked a smaller-ball variant that generates corner-three volume at the league's highest rate for any five-man unit — phase two's most intriguing offensive wrinkle."
      }
    },
    {
      team: "MIN",
      teamRecord: "49-33",
      narrative: "Minnesota's best lineup remains elite at the individual level — Edwards in isolation and pick-and-roll is a problem no defense has solved — but the multi-player sequencing drag that has been accumulating across the preseason window is now visible in the unit-level data in ways that were not present at the start of camp. The gap between the best lineup's net rating and the closing lineup's net rating is seven points, a spread that indicates Minnesota's closing decisions are suboptimal and that the organizational drag Edwards's situation has generated is being felt in late-game construction. The worst unit, featuring unresolved depth pieces around Naz Reid, has been the season's most persistent second-unit problem for a team that cannot afford second-unit erosion given the ceiling constraints created by its multi-player sequencing situation. With nineteen days remaining in the preparation window, the compression is real and the margin for correction is narrowing.",
      bestUnit: {
        players: ["Anthony Edwards", "Rudy Gobert", "Naz Reid", "Jaden McDaniels", "Mike Conley"],
        team: "MIN",
        minutesTogether: 362,
        netRating: 12.8,
        offRating: 114.1,
        defRating: 101.3,
        plusMinus: 128,
        record: "Equivalent to 57-25 pace",
        keyStrength: "Edwards commands maximum defensive attention, creating open actions for Gobert's lob game and McDaniels's corner-three volume — a triangle of gravity that functions even when individual sequences misfire."
      },
      deathLineup: {
        players: ["Anthony Edwards", "Rudy Gobert", "Jaden McDaniels", "Nickeil Alexander-Walker", "Naz Reid"],
        team: "MIN",
        minutesTogether: 58,
        netRating: 5.7,
        offRating: 110.4,
        defRating: 104.7,
        plusMinus: 9,
        record: "17-18 in games when closing",
        keyStrength: "Edwards's closing creation is sufficient to manufacture points, but the seven-point drop from best-unit to closing-unit net rating is a structural signal that Minnesota's closing construction is not optimized — and the sequencing drag is a plausible organizational explanation."
      },
      worstUnit: {
        players: ["Nickeil Alexander-Walker", "Josh Minott", "Leonard Miller", "Luka Garza", "Shake Milton"],
        team: "MIN",
        minutesTogether: 34,
        netRating: -14.9,
        offRating: 101.8,
        defRating: 116.7,
        plusMinus: -28,
        record: "Equivalent to 21-61 pace",
        keyStrength: "None identifiable at competitive intensity — this unit represents the downstream cost of multi-player sequencing drag on roster construction depth."
      }
    },
    {
      team: "MIL",
      teamRecord: "48-34",
      narrative: "Milwaukee's Giannis-anchored best unit continues to generate elite offensive efficiency — the Antetokounmpo drive-kick system at full speed remains one of basketball's most difficult structures to contain — but the defensive regression around him has been the season's defining organizational tension. The best lineup produces 15.1 net rating in shared minutes, which is a top-eight number, but the closing lineup's drop-off has been steeper than any other contender's, driven primarily by the absence of a reliable second perimeter defender when Khris Middleton's minutes are managed. The new-look lineup, featuring Taurean Prince at the closing wing, has shown enough defensive improvement in limited minutes to suggest Doc Rivers has identified a solution worth scaling. The worst unit is a bench combination that has given up points at a rate that has materially affected Milwaukee's point differential and, by extension, its playoff seeding trajectory.",
      bestUnit: {
        players: ["Giannis Antetokounmpo", "Damian Lillard", "Khris Middleton", "Brook Lopez", "Bobby Portis"],
        team: "MIL",
        minutesTogether: 374,
        netRating: 15.1,
        offRating: 118.4,
        defRating: 103.3,
        plusMinus: 157,
        record: "Equivalent to 60-22 pace",
        keyStrength: "Giannis's drive-kick offense generates the league's highest frequency of open corner-threes; Lopez's screening unlocks Lillard's pull-up game at the top of the arc without requiring Giannis to initiate."
      },
      deathLineup: {
        players: ["Giannis Antetokounmpo", "Damian Lillard", "Taurean Prince", "Brook Lopez", "Bobby Portis"],
        team: "MIL",
        minutesTogether: 62,
        netRating: 7.3,
        offRating: 112.8,
        defRating: 105.5,
        plusMinus: 12,
        record: "20-16 in games when closing",
        keyStrength: "Prince's late-game perimeter containment has been the closing lineup's most significant structural upgrade — his on-ball defense in the final possessions of close games has directly produced three wins Milwaukee would not have otherwise recorded."
      },
      worstUnit: {
        players: ["Patrick Beverley", "MarJon Beauchamp", "AJ Green", "Sandro Mamukelashvili", "Robin Lopez"],
        team: "MIL",
        minutesTogether: 41,
        netRating: -15.3,
        offRating: 101.2,
        defRating: 116.5,
        plusMinus: -35,
        record: "Equivalent to 18-64 pace",
        keyStrength: "Perimeter activity and effort — but no creation, no reliable rim protection, and no defensive switching capability makes this unit untenable beyond garbage-time deployment."
      },
      newLookLineup: {
        players: ["Giannis Antetokounmpo", "Damian Lillard", "Taurean Prince", "Brook Lopez", "Malik Beasley"],
        team: "MIL",
        minutesTogether: 94,
        netRating: 11.2,
        offRating: 115.3,
        defRating: 104.1,
        plusMinus: 29,
        record: "Equivalent to 56-26 pace",
        keyStrength: "Beasley's corner-three volume and Prince's defensive flexibility give this lineup a different offensive-floor profile than the Middleton-dependent best unit — a meaningful structural alternative when Middleton's minutes are managed."
      }
    },
    {
      team: "GSW",
      teamRecord: "47-35",
      narrative: "Golden State's best lineup — the one that most closely resembles the Kerr system at its structural peak — has posted the preseason's most surprising net rating for a team outside the top four, driven primarily by Steph Curry's continued ability to generate offense against any coverage the league can construct. The death lineup is where Golden State's age-and-depth equation becomes most visible: the closing five has a positive net rating in shared minutes but a below-.500 record in late-game situations, a discrepancy that indicates individual quality is masking structural vulnerability in the final-possession environment. Brandin Podziemski's new-look integration at the two-guard has been the most significant positive preseason development, producing a lineup flexibility that Draymond's evolving role had threatened to eliminate. The worst unit is a bench combination that reflects the honest cost of Golden State's roster construction choices.",
      bestUnit: {
        players: ["Stephen Curry", "Draymond Green", "Brandin Podziemski", "Andrew Wiggins", "Trayce Jackson-Davis"],
        team: "GSW",
        minutesTogether: 318,
        netRating: 13.4,
        offRating: 116.7,
        defRating: 103.3,
        plusMinus: 118,
        record: "Equivalent to 58-24 pace",
        keyStrength: "Curry's gravity at the top of the arc creates a defensive decision tree that Draymond's orchestration exploits — the system is thirty years old in concept and still generating advantages no pure scheme can replicate."
      },
      deathLineup: {
        players: ["Stephen Curry", "Draymond Green", "Andrew Wiggins", "Brandin Podziemski", "Trayce Jackson-Davis"],
        team: "GSW",
        minutesTogether: 54,
        netRating: 6.1,
        offRating: 111.4,
        defRating: 105.3,
        plusMinus: 9,
        record: "17-20 in games when closing",
        keyStrength: "Curry's late-game shot creation remains sui generis, but the below-.500 closing record is a structural signal that the system's organizational age is most exposed in the highest-leverage possessions where individual errors compound."
      },
      worstUnit: {
        players: ["Moses Moody", "Jonathan Kuminga", "Pat Spencer", "Kevon Looney", "Gui Santos"],
        team: "GSW",
        minutesTogether: 38,
        netRating: -13.8,
        offRating: 103.1,
        defRating: 116.9,
        plusMinus: -29,
        record: "Equivalent to 23-59 pace",
        keyStrength: "Youth and athleticism — Kuminga's individual creation is the one identifiable positive in an otherwise uncompetitive unit at this combination."
      },
      newLookLineup: {
        players: ["Stephen Curry", "Brandin Podziemski", "Andrew Wiggins", "Draymond Green", "Kyle Anderson"],
        team: "GSW",
        minutesTogether: 76,
        netRating: 9.7,
        offRating: 114.2,
        defRating: 104.5,
        plusMinus: 21,
        record: "Equivalent to 55-27 pace",
        keyStrength: "Anderson's passing at the four has unlocked a slow-pace variant that neutralizes Golden State's age disadvantage in transition — the most tactically interesting preseason discovery in a Kerr system that had limited remaining optimization surface."
      }
    },
    {
      team: "PHI",
      teamRecord: "46-36",
      narrative: "Philadelphia's best lineup is the most deceptive positive number in the league's top ten: the Joel Embiid–Tyrese Maxey pairing posts elite two-man efficiency in shared minutes, but the sample is skewed by a favorable early-season schedule and an absence rate that makes the lineup's total minutes the second-lowest among starting units in this tier. The death lineup is where Philadelphia's structural question becomes empirically visible — the closing five has the worst net rating of any playoff team's closing unit, driven by a terminal switching vulnerability that opponents have discovered and are now scripting around with increasing precision. The new-look lineup, featuring Kelly Oubre Jr. as the closing small forward, has been the most discussed but least productive organizational experiment of the preseason. The worst unit is among the league's five most damaging second-unit combinations by net rating, and the point differential cost has been the primary driver of Philadelphia falling below the six-seed line on multiple occasions.",
      bestUnit: {
        players: ["Joel Embiid", "Tyrese Maxey", "Paul George", "Kelly Oubre Jr.", "Tobias Harris"],
        team: "PHI",
        minutesTogether: 287,
        netRating: 11.8,
        offRating: 115.9,
        defRating: 104.1,
        plusMinus: 94,
        record: "Equivalent to 56-26 pace",
        keyStrength: "Embiid's post-and-facilitate game at its peak is still the East's most difficult individual problem; Maxey's secondary creation ensures that doubling Embiid carries a genuine offensive cost."
      },
      deathLineup: {
        players: ["Joel Embiid", "Tyrese Maxey", "Paul George", "Kelly Oubre Jr.", "De'Anthony Melton"],
        team: "PHI",
        minutesTogether: 48,
        netRating: 1.4,
        offRating: 109.7,
        defRating: 108.3,
        plusMinus: 2,
        record: "14-22 in games when closing",
        keyStrength: "Embiid's late-game post isolation remains the primary closing action — but a 1.4 net rating closing unit on a playoff team is a structural alarm, not a minor inefficiency, and the below-.500 closing record is the season's clearest individual team crisis point."
      },
      worstUnit: {
        players: ["De'Anthony Melton", "Cameron Payne", "Ricky Council IV", "KJ Martin", "Paul Reed"],
        team: "PHI",
        minutesTogether: 46,
        netRating: -17.1,
        offRating: 100.3,
        defRating: 117.4,
        plusMinus: -44,
        record: "Equivalent to 12-70 pace",
        keyStrength: "Energy and athleticism — but no creation, no switching capability, and no rim protection make this unit the league's most damaging bench combination in games where the starters require rest."
      },
      newLookLineup: {
        players: ["Joel Embiid", "Tyrese Maxey", "Paul George", "Caleb Martin", "Kyle Lowry"],
        team: "PHI",
        minutesTogether: 64,
        netRating: 7.2,
        offRating: 112.4,
        defRating: 105.2,
        plusMinus: 13,
        record: "Equivalent to 52-30 pace",
        keyStrength: "Lowry's veteran orchestration and Martin's defensive versatility have produced Philadelphia's most functional alternative closing combination — a 7.2 net rating that significantly exceeds the primary death lineup and deserves expanded deployment."
      }
    },
    {
      team: "LAC",
      teamRecord: "45-37",
      narrative: "Los Angeles's best lineup has been the league's most pleasant efficiency surprise among teams outside the top eight, posting a 12.1 net rating that places them within two points of Philadelphia's best unit despite a nine-game gap in the standings — a discrepancy that reflects schedule difficulty and individual health variance more than genuine team quality. Kawhi Leonard's availability remains the organizational variable that controls everything: when he plays, this lineup is a genuine threat; when he doesn't, the efficiency collapse to the worst-unit tier is the steepest drop of any contender's roster. The death lineup is functional but fragile, dependent on James Harden's late-game creation in a way that has been reliable in regular-season situations but carries documented postseason risk. The biggest preseason development is Norman Powell's closing efficiency in the new-look lineup, which has been the one genuinely positive organizational surprise in a Clippers preseason that needed good news.",
      bestUnit: {
        players: ["Kawhi Leonard", "James Harden", "Paul George", "Ivica Zubac", "Norman Powell"],
        team: "LAC",
        minutesTogether: 271,
        netRating: 12.1,
        offRating: 115.3,
        defRating: 103.2,
        plusMinus: 91,
        record: "Equivalent to 57-25 pace",
        keyStrength: "Kawhi and George as the two-wing pairing creates a defensive combination that simultaneously functions as the league's most difficult isolation-defense assignment; Harden's pace control keeps the possession economy clean."
      },
      deathLineup: {
        players: ["Kawhi Leonard", "James Harden", "Norman Powell", "Ivica Zubac", "Terance Mann"],
        team: "LAC",
        minutesTogether: 51,
        netRating: 8.4,
        offRating: 112.7,
        defRating: 104.3,
        plusMinus: 12,
        record: "18-15 in games when closing",
        keyStrength: "Harden's late-game creation and Kawhi's closing isolation remain functional — but the 18-15 closing record on a team with this roster's individual talent is the season's clearest under-performance signal and a direct product of the availability equation."
      },
      worstUnit: {
        players: ["Brandon Boston Jr.", "Moussa Diabate", "Xavier Moon", "Jason Preston", "Daniel Theis"],
        team: "LAC",
        minutesTogether: 36,
        netRating: -15.6,
        offRating: 101.4,
        defRating: 117.0,
        plusMinus: -31,
        record: "Equivalent to 19-63 pace",
        keyStrength: "Youth and developmental value — but this unit is not competitively viable in any meaningful game-flow context and has been the roster's most persistent quality gap."
      },
      newLookLineup: {
        players: ["Kawhi Leonard", "James Harden", "Norman Powell", "P.J. Tucker", "Ivica Zubac"],
        team: "LAC",
        minutesTogether: 82,
        netRating: 10.3,
        offRating: 113.8,
        defRating: 103.5,
        plusMinus: 24,
        record: "Equivalent to 56-26 pace",
        keyStrength: "Tucker's physical closing defense and Powell's off-ball movement have produced the most consistent alternative lineup combination in Ty Lue's rotation — a 10.3 net rating that exceeds expectations for a unit built around depth pieces."
      }
    }
  ]
};