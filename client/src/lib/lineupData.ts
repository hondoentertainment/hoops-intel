// Lineup Intelligence — Weekly lineup analysis
// Last updated: November 9, 2026
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
  generatedDate: "November 9, 2026",
  weekLabel: "Week of November 9–15, 2026",

  leagueWideBest: [
    {
      players: ["Tyrese Maxey", "Kelly Oubre Jr.", "Paul George", "Joel Embiid", "Andre Drummond"],
      team: "PHI",
      minutesTogether: 387,
      netRating: 22.4,
      offRating: 122.7,
      defRating: 100.3,
      plusMinus: 148,
      record: "Equivalent to 14-2 pace",
      keyStrength: "Embiid's gravity creates uncontested mid-range and corner-three opportunities at a league-high rate; Maxey's transition attack off Drummond offensive boards is functionally unstoppable in the halfcourt break.",
    },
    {
      players: ["Jaylen Brown", "Jayson Tatum", "Jrue Holiday", "Al Horford", "Kristaps Porzingis"],
      team: "BOS",
      minutesTogether: 412,
      netRating: 19.8,
      offRating: 120.1,
      defRating: 100.3,
      plusMinus: 139,
      record: "Equivalent to 13-2 pace",
      keyStrength: "Four switchable defenders and two legitimate offensive initiators make Boston's starting five the most tactically versatile unit in the East; Porzingis as the pop-and-shoot five stretches defenses beyond their capacity to load up on Brown and Tatum.",
    },
    {
      players: ["LeBron James", "Anthony Davis", "Austin Reaves", "Rui Hachimura", "D'Angelo Russell"],
      team: "LAL",
      minutesTogether: 374,
      netRating: 17.9,
      offRating: 118.4,
      defRating: 100.5,
      plusMinus: 114,
      record: "Equivalent to 12-3 pace",
      keyStrength: "LeBron's playmaking combined with Davis's rim protection gives Los Angeles an elite two-way backbone; Reaves's off-ball movement and corner efficiency is the spacing catalyst the system requires to avoid defensive collapses on the paint-dominant duo.",
    },
    {
      players: ["Anthony Edwards", "Mike Conley", "Jaden McDaniels", "Karl-Anthony Towns", "Rudy Gobert"],
      team: "MIN",
      minutesTogether: 356,
      netRating: 16.3,
      offRating: 115.9,
      defRating: 99.6,
      plusMinus: 98,
      record: "Equivalent to 12-3 pace",
      keyStrength: "The Gobert-Towns twin-tower front court remains the league's most punishing defensive rebounding partnership; Edwards's improvement as a pick-and-roll initiator has unlocked the full offensive system Finch envisioned when the roster was assembled.",
    },
    {
      players: ["Luka Doncic", "Kyrie Irving", "Tim Hardaway Jr.", "P.J. Washington", "Dereck Lively II"],
      team: "DAL",
      minutesTogether: 341,
      netRating: 14.8,
      offRating: 119.2,
      defRating: 104.4,
      plusMinus: 86,
      record: "Equivalent to 11-4 pace",
      keyStrength: "Luka-Kyrie's dual-creation model is the most offensively dense backcourt pairing in the West; Lively's lob-threat athleticism and second-side rebounding give Dallas the vertical threat that prevents defenses from simply packing the paint against two non-shooter guards.",
    },
  ],

  biggestSurprise: {
    team: "LAC",
    description:
      "James Harden's five-man unit with Norman Powell, Paul George, Kawhi Leonard's replacement minutes via Terance Mann, and Ivica Zubac is posting a +11.4 net rating in 97 minutes together — an extraordinary number for a 2-7 team and a direct signal that the Clippers' losing record is a depth problem, not a star problem. Harden's 38-point home detonation Sunday accelerated league-wide reassessment of whether this core, when healthy, belongs in the West's second tier.",
  },

  teams: [
    // ── PHI 9-2 ──────────────────────────────────────────────────────────────
    {
      team: "PHI",
      teamRecord: "9-2",
      narrative:
        "Philadelphia's lineup picture is the clearest in the league precisely because everything runs through Embiid and the data confirms it without ambiguity: every unit he anchors posts a positive net rating and every unit he sits posts a negative one. Sunday's road survival at Chicago — Embiid playing 38 minutes on a knee-soreness probable tag — underlines the front office's core risk: the roster is built around a singular physical force who cannot be rested without systemic consequence. Maxey's growth as a ball-handler in pick-and-roll has partially insulated the offense during Embiid's brief rest stretches, but the defensive rating balloons from 100.3 to 109.8 the moment Embiid exits. The death lineup with Embiid, Maxey, Oubre, George, and Drummond has not lost a fourth-quarter possession battle yet this season, which is a remarkable early-season data point for a team that historically collapses in clutch moments.",

      bestUnit: {
        players: ["Tyrese Maxey", "Kelly Oubre Jr.", "Paul George", "Joel Embiid", "Andre Drummond"],
        team: "PHI",
        minutesTogether: 387,
        netRating: 22.4,
        offRating: 122.7,
        defRating: 100.3,
        plusMinus: 148,
        record: "Equivalent to 14-2 pace",
        keyStrength: "Embiid's post gravity and Maxey's transition attack create a two-wave offensive threat that no defensive scheme has consistently neutralized; Drummond's offensive rebounding (second-chance rate of 38%) extends possessions beyond any other five in the East.",
      },

      deathLineup: {
        players: ["Tyrese Maxey", "Paul George", "Kelly Oubre Jr.", "Joel Embiid", "Andre Drummond"],
        team: "PHI",
        minutesTogether: 68,
        netRating: 18.6,
        offRating: 119.4,
        defRating: 100.8,
        plusMinus: 44,
        record: "7-1 in games when closing",
        keyStrength: "Embiid's fourth-quarter post-up efficiency (1.14 PPP) makes this unit functionally unguardable in isolation; Maxey's ability to create his own shot off the bounce provides a secondary escape valve when defenses double the post.",
      },

      worstUnit: {
        players: ["Marcus Morris Sr.", "Mo Bamba", "Furkan Korkmaz", "Reggie Jackson", "KJ Martin"],
        team: "PHI",
        minutesTogether: 44,
        netRating: -14.7,
        offRating: 103.2,
        defRating: 117.9,
        plusMinus: -28,
        record: "Equivalent to 2-13 pace",
        keyStrength: "No identifying strength; this group lacks a reliable ball-handler, a consistent half-court shot creator, and a rim protector — the bench depth concern that will define Philadelphia's playoff ceiling if Embiid's injury history resurfaces.",
      },

      rookieLineup: {
        players: ["KJ Martin", "Ricky Council IV", "Jared McCain", "Mo Bamba", "Reggie Jackson"],
        team: "PHI",
        minutesTogether: 51,
        netRating: -6.3,
        offRating: 108.4,
        defRating: 114.7,
        plusMinus: -18,
        record: "Equivalent to 5-10 pace",
        keyStrength: "McCain's three-point creation off movement screens shows genuine promise as a future rotation piece; Council's athleticism in transition is a bright spot, but the unit needs a veteran organizer at point guard to avoid late-shot-clock breakdowns.",
      },
    },

    // ── LAL 9-2 ──────────────────────────────────────────────────────────────
    {
      team: "LAL",
      teamRecord: "9-2",
      narrative:
        "Los Angeles's lineup construction under JJ Redick has evolved into one of the league's most intelligently sequenced rotations, with LeBron's minutes managed around Davis's defensive anchor role in a way that keeps the team's net rating positive across all four quarters. Sunday's road win at Detroit — where the Lakers led by as few as five in the third — was the clearest illustration of Davis's defensive ceiling as the unit that closes games relies on him as the last line against Detroit's paint-attack model. The most significant trend in Lakers lineup data is Austin Reaves's emergence as the team's highest-value reserve: his unit with LeBron and Davis posts a +14.2 net rating in 89 minutes, the best small-ball combination the team has deployed. D'Angelo Russell's sixth-man minutes remain a mild liability on defense, but Redick has minimized his exposure in fourth quarters and the data supports the decision.",

      bestUnit: {
        players: ["LeBron James", "Anthony Davis", "Austin Reaves", "Rui Hachimura", "D'Angelo Russell"],
        team: "LAL",
        minutesTogether: 374,
        netRating: 17.9,
        offRating: 118.4,
        defRating: 100.5,
        plusMinus: 114,
        record: "Equivalent to 12-3 pace",
        keyStrength: "LeBron's orchestration at center of gravity and Davis's rim protection give Los Angeles a two-way backbone that no West opponent has cracked in sustained stretches; Reaves's corner shooting (44.1%) provides the spacing the paint-dominant duo requires.",
      },

      deathLineup: {
        players: ["LeBron James", "Anthony Davis", "Austin Reaves", "Rui Hachimura", "Jarred Vanderbilt"],
        team: "LAL",
        minutesTogether: 74,
        netRating: 16.1,
        offRating: 114.7,
        defRating: 98.6,
        plusMinus: 41,
        record: "8-1 in games when closing",
        keyStrength: "Vanderbilt replaces Russell in clutch minutes to create a genuinely switchable five-man defensive unit; LeBron's fourth-quarter playmaking efficiency (67.3 TS%) in clutch situations confirms his continued authority as a late-game closer.",
      },

      worstUnit: {
        players: ["D'Angelo Russell", "Max Christie", "Cam Reddish", "Wenyen Gabriel", "Christian Wood"],
        team: "LAL",
        minutesTogether: 58,
        netRating: -13.2,
        offRating: 105.8,
        defRating: 119.0,
        plusMinus: -31,
        record: "Equivalent to 3-12 pace",
        keyStrength: "No unit-level strength; Russell without LeBron as a safety valve becomes an isolation-heavy liability, and the lack of a rim protector in this group allows opponents to attack the paint at will during second-quarter bench minutes.",
      },
    },

    // ── BOS 8-2 ──────────────────────────────────────────────────────────────
    {
      team: "BOS",
      teamRecord: "8-2",
      narrative:
        "Boston's lineup data tells a story of rare depth: the Celtics have three distinct five-man groups posting net ratings above +10, which is the highest number of elite-tier lineups in the Eastern Conference. Tatum's 34-8-7 against Milwaukee on Sunday was a reflection of a system that generates quality looks rather than a performer overcoming his environment — the Celtics shot 47.3% from three in that game because defensive schemes cannot simultaneously account for Tatum, Brown, and Porzingis as shooting threats. The death lineup incorporating Holiday as the defensive anchor and Porzingis as the floor-spacing five has become the league's most versatile closing unit: opponents have failed to find a switch-or-drop dichotomy that works against it. Boston's only lineup liability remains the Payton Pritchard-led second group, which posts a -6.8 net rating when neither Tatum nor Brown shares the floor.",

      bestUnit: {
        players: ["Jaylen Brown", "Jayson Tatum", "Jrue Holiday", "Al Horford", "Kristaps Porzingis"],
        team: "BOS",
        minutesTogether: 412,
        netRating: 19.8,
        offRating: 120.1,
        defRating: 100.3,
        plusMinus: 139,
        record: "Equivalent to 13-2 pace",
        keyStrength: "Four perimeter defenders capable of switching 1-through-5 and two legitimate shot-creation threats; Porzingis's pop-and-catch three-point shooting (41.7%) stretches defenses to their absolute limit when Tatum attacks downhill.",
      },

      deathLineup: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Kristaps Porzingis", "Al Horford"],
        team: "BOS",
        minutesTogether: 83,
        netRating: 17.4,
        offRating: 116.9,
        defRating: 99.5,
        plusMinus: 49,
        record: "7-1 in games when closing",
        keyStrength: "Holiday's defensive assignment capability — taking any opposing ball-handler regardless of position — frees Tatum and Brown to focus their defensive energy on help-side rotations rather than primary assignments; the result is the league's lowest clutch-time opponent FG% at 39.1%.",
      },

      worstUnit: {
        players: ["Payton Pritchard", "Sam Hauser", "Oshae Brissett", "Luke Kornet", "Jordan Walsh"],
        team: "BOS",
        minutesTogether: 47,
        netRating: -8.4,
        offRating: 108.3,
        defRating: 116.7,
        plusMinus: -21,
        record: "Equivalent to 4-11 pace",
        keyStrength: "Hauser's catch-and-shoot three-point efficiency (40.9%) is the one exploitable positive; without a primary creator, the unit devolves into movement-heavy possessions that collapse against disciplined switching defenses.",
      },
    },

    // ── MIN 8-3 ──────────────────────────────────────────────────────────────
    {
      team: "MIN",
      teamRecord: "8-3",
      narrative:
        "Minnesota's lineup story this season is the most compelling developmental narrative in the Western Conference: Anthony Edwards's growth as a pick-and-roll initiator has transformed the team's offensive architecture from Gobert-dependent grind to a genuinely multi-dimensional attack. The twin-tower lineup with Gobert and Towns was widely dismissed as a defensive liability when first assembled, but the data at the season's one-quarter mark confirms it as the league's fourth-best unit by net rating and its elite rebounding margin (+12.4) has been the difference in four of the Wolves' eight wins. Edwards's Sunday eruption against Utah — 32 points on four threes — against a switching scheme designed to neutralize his drive is the most encouraging sign of his shooting evolution. The concern remains depth: Naz Reid's bench unit posts a credible +2.3 net rating but the fourth-string group with no starter is at -11.6.",

      bestUnit: {
        players: ["Anthony Edwards", "Mike Conley", "Jaden McDaniels", "Karl-Anthony Towns", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 356,
        netRating: 16.3,
        offRating: 115.9,
        defRating: 99.6,
        plusMinus: 98,
        record: "Equivalent to 12-3 pace",
        keyStrength: "Gobert-Towns twin-tower rebounding and rim protection anchors a defense that holds opponents to 44.8% at the rim; Edwards's improving three-point efficiency (38.4%) has opened the floor enough to make the paint attack viable on a consistent basis.",
      },

      deathLineup: {
        players: ["Anthony Edwards", "Mike Conley", "Jaden McDaniels", "Naz Reid", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 61,
        netRating: 11.7,
        offRating: 113.2,
        defRating: 101.5,
        plusMinus: 31,
        record: "6-2 in games when closing",
        keyStrength: "Reid replaces Towns in clutch minutes to increase switching versatility without sacrificing rim protection; Conley's late-game composure as a floor general and shot-clock manager is the undervalued connective tissue that keeps Minnesota's closing unit organized.",
      },

      worstUnit: {
        players: ["Monte Morris", "Nickeil Alexander-Walker", "Luka Garza", "Taurean Prince", "Josh Minott"],
        team: "MIN",
        minutesTogether: 39,
        netRating: -11.6,
        offRating: 104.7,
        defRating: 116.3,
        plusMinus: -20,
        record: "Equivalent to 3-12 pace",
        keyStrength: "No consistent strength; the unit lacks a creator capable of generating quality half-court shots and Garza's defensive limitations at the five are exposed by any team with an athletic center.",
      },

      rookieLineup: {
        players: ["Rob Dillingham", "Josh Minott", "Jaden McDaniels", "Naz Reid", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 48,
        netRating: 2.1,
        offRating: 110.4,
        defRating: 108.3,
        plusMinus: 6,
        record: "Equivalent to 8-7 pace",
        keyStrength: "Dillingham's first-step quickness in transition has produced three assist-to-turnover ratios above 4:1 in his last four outings; his ability to function as a Conley surrogate in second-unit minutes is a genuine organizational asset that reduces the depth concern.",
      },
    },

    // ── DAL 6-4 ──────────────────────────────────────────────────────────────
    {
      team: "DAL",
      teamRecord: "6-4",
      narrative:
        "Dallas's lineup data presents a tension that will define the Mavericks' season: the Luka-Kyrie dual-creation pairing is the most offensively explosive combination in the West, but it also creates a defensive floor problem that the surrounding cast has not consistently solved. Sunday's 37-point blowout of Brooklyn — with Luka posting 33 points and 12 assists — masked the reality that Dallas's defensive rating in games against top-ten offenses this season is a problematic 110.4. P.J. Washington's switching versatility at the four has been the primary defensive stabilizer, and the lineup data confirms that every closing unit Kidd constructs benefits from Washington's presence. Dereck Lively II's development as a lob threat and weak-side shot blocker is the most important organizational story in Dallas: his impact metrics with Luka (+18.3 net rating in 143 minutes) are the best big-man pairing data in the West.",

      bestUnit: {
        players: ["Luka Doncic", "Kyrie Irving", "Tim Hardaway Jr.", "P.J. Washington", "Dereck Lively II"],
        team: "DAL",
        minutesTogether: 341,
        netRating: 14.8,
        offRating: 119.2,
        defRating: 104.4,
        plusMinus: 86,
        record: "Equivalent to 11-4 pace",
        keyStrength: "Luka-Kyrie dual initiation creates the highest volume of open-three generation in the West; Lively's lob-threat athleticism prevents defenses from packing the paint, which is the only viable scheme against two non-shooter guards at the top of the key.",
      },

      deathLineup: {
        players: ["Luka Doncic", "Kyrie Irving", "P.J. Washington", "Dereck Lively II", "Josh Green"],
        team: "DAL",
        minutesTogether: 57,
        netRating: 9.4,
        offRating: 114.6,
        defRating: 105.2,
        plusMinus: 23,
        record: "5-3 in games when closing",
        keyStrength: "Green replaces Hardaway in clutch situations to add defensive athleticism on the wing; this unit's ability to switch 1-4 without exposing a rotation creates a defensively credible version of Kidd's preferred personnel.",
      },

      worstUnit: {
        players: ["Markieff Morris", "Dante Exum", "Olivier-Maxence Prosper", "Dwight Powell", "Jaden Hardy"],
        team: "DAL",
        minutesTogether: 41,
        netRating: -15.3,
        offRating: 102.4,
        defRating: 117.7,
        plusMinus: -27,
        record: "Equivalent to 2-13 pace",
        keyStrength: "No exploitable strength; this group's combination of aging athleticism, defensive positioning errors, and absence of a coherent ball-handler makes it the most vulnerable second-unit combination among the top-ten teams.",
      },
    },

    // ── DET 6-3 ──────────────────────────────────────────────────────────────
    {
      team: "DET",
      teamRecord: "6-3",
      narrative:
        "Detroit is the season's most significant organizational surprise and the lineup data explains why the front office's patience with the rebuild is paying dividends: Jalen Duren's impact metrics as a rim-protecting, rebounding center are the most advanced of any player his age in the league, and the five-man unit built around his interior dominance posts a +12.1 net rating in 219 minutes. Sunday's five-point home loss to Los Angeles — where Duren posted 21 points and 14 rebounds and pushed LeBron's team to 121-116 — is the proof-of-concept game that validates the organizational direction. Cade Cunningham's growth as a primary initiator has been the second major development: his unit with Duren posts the team's best net rating and his assist-to-turnover improvement (3.4:1, up from 2.1:1 last season) reflects genuine point guard maturation. The concern is the second unit, which relies heavily on Killian Hayes's ball-handling and posts a -9.7 net rating without a starter.",

      bestUnit: {
        players: ["Cade Cunningham", "Jalen Duren", "Ausar Thompson", "Bojan Bogdanovic", "Killian Hayes"],
        team: "DET",
        minutesTogether: 298,
        netRating: 12.1,
        offRating: 114.3,
        defRating: 102.2,
        plusMinus: 61,
        record: "Equivalent to 10-5 pace",
        keyStrength: "Duren's rebounding and rim protection anchors a defense that has held opponents under 48% at the rim in the last six games; Cunningham's improved pick-and-roll efficiency as a creator around Duren's screen-and-roll game is the offensive mechanism that makes this unit functionally threatening.",
      },

      deathLineup: {
        players: ["Cade Cunningham", "Jalen Duren", "Ausar Thompson", "Isaiah Stewart", "Bojan Bogdanovic"],
        team: "DET",
        minutesTogether: 52,
        netRating: 7.8,
        offRating: 111.4,
        defRating: 103.6,
        plusMinus: 18,
        record: "5-3 in games when closing",
        keyStrength: "Stewart's physicality as a secondary rim protector alongside Duren creates a twin-big closing unit that punishes smaller lineups on the glass; Bogdanovic's experience as a clutch catch-and-shoot option (43.8% from three in fourth quarters) is the offensive release valve.",
      },

      worstUnit: {
        players: ["Killian Hayes", "Hamidou Diallo", "Marcus Sasser", "James Wiseman", "Evan Fournier"],
        team: "DET",
        minutesTogether: 48,
        netRating: -13.1,
        offRating: 103.8,
        defRating: 116.9,
        plusMinus: -27,
        record: "Equivalent to 2-13 pace",
        keyStrength: "No consistent strength; Hayes's ball-handling in pick-and-roll without a credible secondary creator collapses the half-court offense, and Wiseman's defensive positioning errors remain a live concern in this group.",
      },

      rookieLineup: {
        players: ["Ron Holland II", "Ausar Thompson", "Marcus Sasser", "Jalen Duren", "Cade Cunningham"],
        team: "DET",
        minutesTogether: 63,
        netRating: 4.9,
        offRating: 111.7,
        defRating: 106.8,
        plusMinus: 14,
        record: "Equivalent to 8-7 pace",
        keyStrength: "Holland's athleticism in transition and defensive intensity have earned increasingly credible rotation minutes; his pairing with Thompson creates a wing-athleticism advantage that Detroit can exploit in up-tempo situations, and Duren's anchoring presence keeps the defensive rating manageable.",
      },
    },

    // ── MIA 4-6 ──────────────────────────────────────────────────────────────
    {
      team: "MIA",
      teamRecord: "4-6",
      narrative:
        "Miami's lineup data reveals a team whose record drastically undersells its competitive quality: Jimmy Butler's closing unit has a +14.9 net rating in 71 minutes of fourth-quarter action, the fourth-best clutch-time number in the East, in a season where the team is four games under winning. The paradox is a 36-minute net rating problem in second and third quarters — the intervals where the Heat's bench unit has been the worst in the conference at -16.2 net rating without a starter. Sunday's road comeback at Sacramento, where Miami trailed by eight entering the fourth, is the clearest illustration of Butler's individual ceiling as a clutch operator and the team's systemic inability to protect leads when he rests. Erik Spoelstra's challenge is not roster quality at the top — it is the absence of a credible second-unit anchor, a problem that will define whether Miami competes for a play-in position or falls into the lottery.",

      bestUnit: {
        players: ["Jimmy Butler", "Tyler Herro", "Bam Adebayo", "Duncan Robinson", "Kyle Lowry"],
        team: "MIA",
        minutesTogether: 309,
        netRating: 11.4,
        offRating: 114.7,
        defRating: 103.3,
        plusMinus: 60,
        record: "Equivalent to 10-5 pace",
        keyStrength: "Adebayo's defensive versatility at the five and Butler's isolation efficiency create a two-way backbone that ranks in the top five in the East; Robinson's catch-and-shoot three-point efficiency (42.3%) provides the spacing the Butler-Adebayo two-man game requires to function at peak effectiveness.",
      },

      deathLineup: {
        players: ["Jimmy Butler", "Bam Adebayo", "Tyler Herro", "Duncan Robinson", "Caleb Martin"],
        team: "MIA",
        minutesTogether: 71,
        netRating: 14.9,
        offRating: 116.2,
        defRating: 101.3,
        plusMinus: 46,
        record: "4-2 in games when closing",
        keyStrength: "Butler's fourth-quarter isolation efficiency (1.09 PPP) is the highest on the team and his defensive assignment in clutch situations functions as a one-man switching wall; Martin's willingness to defend any position adds a physical edge that helps Miami punish teams that go small in late-game situations.",
      },

      worstUnit: {
        players: ["Josh Richardson", "Nikola Jovic", "Orlando Robinson", "Jamal Cain", "Dru Smith"],
        team: "MIA",
        minutesTogether: 53,
        netRating: -16.2,
        offRating: 101.4,
        defRating: 117.6,
        plusMinus: -37,
        record: "Equivalent to 1-14 pace",
        keyStrength: "No identifying strength; this is the most significant roster liability on a team with legitimate closing-unit quality — the gap between Miami's starter performance and bench performance is the widest in the Eastern Conference.",
      },
    },

    // ── LAC 2-7 ──────────────────────────────────────────────────────────────
    {
      team: "LAC",
      teamRecord: "2-7",
      narrative:
        "The Clippers' lineup data is the most contradictory in the league: the top-unit net rating of +11.4 ranks inside the top eight in the NBA, but the team's bench groups are posting negative net ratings so catastrophically poor that the season-long numbers are dragged below zero. James Harden's 38-point home detonation Sunday — the night's highest scoring total and the game's most unexpected individual performance — reframes every assumption about this roster's offensive ceiling, but it also exposes the core problem: when Kawhi Leonard is out, the team has no second star capable of sharing creation responsibilities, and Harden's 38-point games come at the cost of the defensive positioning that competitive units require. The Zubac-Powell twin-big lineup has been the team's most reliable defensive configuration but it comes at a severe offensive spacing cost. If Kawhi returns before December, the lineup data suggests a team capable of .600 basketball; without him, the current trajectory points toward the play-in bubble.",

      bestUnit: {
        players: ["James Harden", "Norman Powell", "Paul George", "Terance Mann", "Ivica Zubac"],
        team: "LAC",
        minutesTogether: 97,
        netRating: 11.4,
        offRating: 116.8,
        defRating: 105.4,
        plusMinus: 47,
        record: "Equivalent to 10-5 pace",
        keyStrength: "Harden's orchestration with Powell as a secondary scorer creates a two-layer offensive attack that defenses have consistently underestimated; Zubac's screen-setting and rim-finishing efficiency (68.4% at the rim) makes the Harden-Zubac pick-and-roll one of the West's most productive two-man games.",
      },

      deathLineup: {
        players: ["James Harden", "Paul George", "Norman Powell", "Marcus Morris Sr.", "Ivica Zubac"],
        team: "LAC",
        minutesTogether: 38,
        netRating: 6.2,
        offRating: 112.4,
        defRating: 106.2,
        plusMinus: 10,
        record: "2-4 in games when closing",
        keyStrength: "Morris's physicality and George's defensive awareness provide a credible perimeter framework around Harden's creation, but the unit's 2-4 closing record reflects the deeper problem: Harden as the sole primary creator in high-leverage moments is a viability ceiling that becomes exploitable when the game slows.",
      },

      worstUnit: {
        players: ["Brandon Boston Jr.", "Amir Coffey", "Jason Preston", "Daniel Theis", "Xavier Moon"],
        team: "LAC",
        minutesTogether: 61,
        netRating: -18.9,
        offRating: 98.7,
        defRating: 117.6,
        plusMinus: -50,
        record: "Equivalent to 0-15 pace",
        keyStrength: "No identifying strength; this is the worst unit net rating among the ten teams in this report — the gap between the Clippers' star-level lineup and their depth-level lineup is the most extreme in the Western Conference and the primary explanation for the 2-7 record.",
      },
    },

    // ── SAC 1-9 ──────────────────────────────────────────────────────────────
    {
      team: "SAC",
      teamRecord: "1-9",
      narrative:
        "Sacramento's lineup data confirms what the record already suggests: this is a team whose individual talent significantly exceeds its organizational coherence. De'Aaron Fox's 27-7-5 in Sunday's fourth-quarter lead — before Miami's Butler-led comeback — is a data point about Fox's individual credibility, not about Sacramento's competitive identity. The Kings' best five-man unit posts a +6.1 net rating in 187 minutes, a number that would place them inside the playoff picture if sustained; the problem is that Mike Brown's rotation sequences expose the team's defensive liabilities at a frequency that makes sustained stretches of positive basketball impossible. Domantas Sabonis's rebounding remains the team's most elite individual metric (14.3 per game), but his defensive coverage at the five is being targeted by every opponent with a mobile center. The front office faces a genuine decision before December: is this a retention-and-development situation or a signal-trade moment for Fox, whose value remains near its peak?",

      bestUnit: {
        players: ["De'Aaron Fox", "Domantas Sabonis", "Kevin Huerter", "Harrison Barnes", "Malik Monk"],
        team: "SAC",
        minutesTogether: 187,
        netRating: 6.1,
        offRating: 113.4,
        defRating: 107.3,
        plusMinus: 39,
        record: "Equivalent to 8-7 pace",
        keyStrength: "Fox's transition attack off Sabonis offensive rebounds is the team's most reliable offensive sequence; Huerter's catch-and-shoot three-point efficiency (40.1%) and Monk's creation off the dribble provide enough secondary scoring to prevent defenses from loading exclusively on Fox.",
      },

      deathLineup: {
        players: ["De'Aaron Fox", "Malik Monk", "Kevin Huerter", "Harrison Barnes", "Domantas Sabonis"],
        team: "SAC",
        minutesTogether: 44,
        netRating: 2.3,
        offRating: 111.6,
        defRating: 109.3,
        plusMinus: 5,
        record: "1-7 in games when closing",
        keyStrength: "Fox's late-game isolation efficiency (0.94 PPP) is individually credible but the unit's 1-7 closing record reflects the structural problem: Sabonis's defensive coverage in switch situations is a live liability that smart teams exploit in clutch possessions.",
      },

      worstUnit: {
        players: ["Terence Davis", "Chimezie Metu", "Alex Len", "Louis King", "Jordan Ford"],
        team: "SAC",
        minutesTogether: 36,
        netRating: -19.4,
        offRating: 97.3,
        defRating: 116.7,
        plusMinus: -31,
        record: "Equivalent to 0-15 pace",
        keyStrength: "No identifying strength; this group lacks a ball-handler capable of generating quality half-court shots and the defensive communication breakdowns in this unit's possessions have contributed directly to three separate double-digit second-quarter deficits this season.",
      },
    },

    // ── HOU 5-5 ──────────────────────────────────────────────────────────────
    {
      team: "HOU",
      teamRecord: "5-5",
      narrative:
        "Houston represents the most fascinating developmental experiment in the Western Conference: a young core with two potential franchise players — Alperen Sengun and Jalen Green — who are showing lineup compatibility data that the front office has reason to feel genuinely optimistic about. The Sengun-Green two-man game posts a +8.7 net rating in 201 minutes of shared time, a number that reflects genuine synergy rather than sample-size noise. Ime Udoka's rotation sequences have been the primary area of analyst criticism — his bench deployment of Fred VanVleet in second-unit anchor minutes creates a +3.2 net rating group that is the most valuable non-starter combination in the Southwest — but his late-game lineup construction has been erratic, contributing to a 3-5 record in games decided by ten points or fewer. The rookies-and-young-core lineup with Sengun, Green, Amen Thompson, and Tari Eason has been the most exciting four-man combination on the roster and its net rating positive in an early-season environment is a legitimate organizational signal.",

      bestUnit: {
        players: ["Jalen Green", "Alperen Sengun", "Fred VanVleet", "Tari Eason", "Amen Thompson"],
        team: "HOU",
        minutesTogether: 267,
        netRating: 8.7,
        offRating: 113.2,
        defRating: 104.5,
        plusMinus: 42,
        record: "Equivalent to 9-6 pace",
        keyStrength: "Sengun's playmaking from the elbow (4.8 assists per 36 minutes as a center) creates open looks for Green's off-ball movement in ways that defenses have struggled to account for; Thompson's transition athleticism and defensive versatility make this unit's ceiling the highest of any under-25 starting group in the West.",
      },

      deathLineup: {
        players: ["Jalen Green", "Fred VanVleet", "Tari Eason", "Alperen Sengun", "Amen Thompson"],
        team: "HOU",
        minutesTogether: 48,
        netRating: 5.3,
        offRating: 110.7,
        defRating: 105.4,
        plusMinus: 11,
        record: "3-5 in games when closing",
        keyStrength: "VanVleet's composure as a floor general in clutch situations is the veteran stabilizer this young unit requires; Green's late-game shot creation has improved markedly (43.1% TS% in clutch situations, up from 38.4% last season) and his ability to get to the line in fourth quarters makes him a credible closing option.",
      },

      worstUnit: {
        players: ["Aaron Holiday", "Daishen Nix", "Jabari Smith Jr.", "Jeff Green", "Usman Garuba"],
        team: "HOU",
        minutesTogether: 44,
        netRating: -14.8,
        offRating: 102.3,
        defRating: 117.1,
        plusMinus: -28,
        record: "Equivalent to 2-13 pace",
        keyStrength: "No identifying strength; Jabari Smith Jr.'s defensive effort is the lone positive data point, but his offensive limitations as a creator against NBA-caliber switching defenses make this unit effectively a liability whenever it shares the floor for more than two consecutive possessions.",
      },

      rookieLineup: {
        players: ["Reed Sheppard", "Amen Thompson", "Tari Eason", "Alperen Sengun", "Jalen Green"],
        team: "HOU",
        minutesTogether: 71,
        netRating: 3.4,
        offRating: 110.9,
        defRating: 107.5,
        plusMinus: 11,
        record: "Equivalent to 8-7 pace",
        keyStrength: "Sheppard's three-point shooting (39.6% on catch-and-shoot attempts) has provided an unexpected spacing dimension that makes Green and Sengun's two-man game more effective; his defensive awareness and IQ at the point of attack have exceeded pre-draft projections and earned him consistent second-unit minutes.",
      },
    },
  ],
};