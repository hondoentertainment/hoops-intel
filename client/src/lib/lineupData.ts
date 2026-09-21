// Lineup Intelligence — Weekly lineup analysis
// Last updated: September 21, 2026
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
  generatedDate: "September 21, 2026",
  weekLabel: "Week of September 21–27, 2026",
  leagueWideBest: [
    {
      players: ["De'Aaron Fox", "Stephon Castle", "Harrison Barnes", "Jeremy Sochan", "Victor Wembanyama"],
      team: "SAS",
      minutesTogether: 412,
      netRating: 24.1,
      offRating: 122.8,
      defRating: 98.7,
      plusMinus: 198,
      record: "Equivalent to 71-11 pace",
      keyStrength: "Wembanyama's rim protection creates a negative-space defensive anchor that liberates Fox and Castle to gamble in passing lanes; the unit forces turnovers on 19.4% of opponent possessions."
    },
    {
      players: ["Shai Gilgeous-Alexander", "Luguentz Dort", "Chet Holmgren", "Jalen Williams", "Isaiah Hartenstein"],
      team: "OKC",
      minutesTogether: 387,
      netRating: 21.7,
      offRating: 120.3,
      defRating: 98.6,
      plusMinus: 167,
      record: "Equivalent to 68-14 pace",
      keyStrength: "The league's most disciplined pick-and-roll defense — Hartenstein's drop coverage and Holmgren's hedge stunts combine to hold ball-handlers to 0.72 PPP on two-man actions."
    },
    {
      players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Mitchell Robinson"],
      team: "NYK",
      minutesTogether: 358,
      netRating: 19.4,
      offRating: 118.6,
      defRating: 99.2,
      plusMinus: 139,
      record: "Equivalent to 65-17 pace",
      keyStrength: "Championship cohesion in its third full season together; Brunson's late-clock creation paired with Towns's gravity at the elbow produces the East's highest-efficiency half-court offense at 1.19 PPP."
    },
    {
      players: ["Alperen Sengun", "Jalen Green", "Amen Thompson", "Fred VanVleet", "Jabari Smith Jr."],
      team: "HOU",
      minutesTogether: 321,
      netRating: 17.2,
      offRating: 117.9,
      defRating: 100.7,
      plusMinus: 110,
      record: "Equivalent to 62-20 pace",
      keyStrength: "Sengun's passing out of the post unlocks second-side corner threes at a 42.1% clip; Thompson's transition reads off live-ball turnovers add six fast-break points per 100 above league average."
    },
    {
      players: ["De'Aaron Fox", "Stephon Castle", "Harrison Barnes", "Victor Wembanyama", "Charles Bassey"],
      team: "SAS",
      minutesTogether: 187,
      netRating: 16.8,
      offRating: 116.4,
      defRating: 99.6,
      plusMinus: 63,
      record: "Equivalent to 61-21 pace",
      keyStrength: "A secondary Spurs five that maintains elite defensive integrity without Sochan; Bassey's screen-setting liberates Wembanyama to roam the weak side as a pure help defender."
    }
  ],
  biggestSurprise: {
    team: "HOU",
    description: "Houston's Sengun–Green–Thompson–VanVleet–Smith Jr. starting unit has quietly posted the fourth-best net rating among all five-man lineups with 300-plus minutes, a benchmark most analysts assigned to the Clippers or Grizzlies heading into the preseason window. Phase two of Sengun's preparation has produced measurable on-court dividends — his assist rate in this lineup is up 31% over last season's equivalent five-man grouping, suggesting the coaching staff's investment in his playmaking development is compounding ahead of schedule."
  },
  teams: [
    {
      team: "OKC",
      teamRecord: "64-18",
      bestUnit: {
        players: ["Shai Gilgeous-Alexander", "Luguentz Dort", "Chet Holmgren", "Jalen Williams", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 387,
        netRating: 21.7,
        offRating: 120.3,
        defRating: 98.6,
        plusMinus: 167,
        record: "Equivalent to 68-14 pace",
        keyStrength: "Elite pick-and-roll defense anchored by Hartenstein's timing and Holmgren's weakside rotations; holds opposing two-man actions to 0.72 PPP."
      },
      deathLineup: {
        players: ["Shai Gilgeous-Alexander", "Luguentz Dort", "Jalen Williams", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 94,
        netRating: 18.9,
        offRating: 118.1,
        defRating: 99.2,
        plusMinus: 71,
        record: "38-9 in games when closing",
        keyStrength: "SGA's ability to draw fouls in the clutch — 8.4 free-throw attempts per 36 in close-game minutes — combined with Dort's perimeter lockdown makes this OKC's most reliable crunch-time configuration."
      },
      worstUnit: {
        players: ["Aaron Wiggins", "Isaiah Joe", "Kenrich Williams", "Ousmane Dieng", "Jaylin Williams"],
        team: "OKC",
        minutesTogether: 44,
        netRating: -11.3,
        offRating: 104.2,
        defRating: 115.5,
        plusMinus: -20,
        record: "Equivalent to 28-54 pace",
        keyStrength: "No identifiable strength; the unit collapses against any competent ball-mover and ranks last on the roster in half-court offensive efficiency at 0.89 PPP."
      },
      rookieLineup: {
        players: ["Shai Gilgeous-Alexander", "Luguentz Dort", "Ousmane Dieng", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 67,
        netRating: 9.4,
        offRating: 113.8,
        defRating: 104.4,
        plusMinus: 25,
        record: "Equivalent to 53-29 pace",
        keyStrength: "Dieng's athleticism and improving three-point shot (38.1% this season) give OKC a viable wing rotation piece; the unit works when Dieng stays off the ball and spaces for SGA's drives."
      },
      narrative: "Oklahoma City's starting five remains the league's most complete two-way unit, posting a top-two net rating at nearly 390 minutes together — a cohesion dividend from three consecutive years of continuity under Mark Daigneault. SGA's week-five optimization phase is already visible in the numbers: his points-per-shot-quality metric in the starting unit is up 0.08 from the season baseline, a marginal gain that compounds into roughly four additional points per 100 possessions over a full game. The primary structural concern is the reserve depth drop-off — the gap between OKC's best and worst five-man units is among the widest in the league, and opponents who extend games into deep bench minutes consistently neutralize the Thunder's net-rating advantage. Daigneault's crunch-time rotation discipline has papered over this liability all season, but a prolonged Finals run against a team with more balanced depth would expose it."
    },
    {
      team: "SAS",
      teamRecord: "62-20",
      bestUnit: {
        players: ["De'Aaron Fox", "Stephon Castle", "Harrison Barnes", "Jeremy Sochan", "Victor Wembanyama"],
        team: "SAS",
        minutesTogether: 412,
        netRating: 24.1,
        offRating: 122.8,
        defRating: 98.7,
        plusMinus: 198,
        record: "Equivalent to 71-11 pace",
        keyStrength: "Wembanyama's rim protection liberates Fox and Castle to gamble in passing lanes; the unit forces turnovers on 19.4% of opponent possessions — highest in the league among qualified lineups."
      },
      deathLineup: {
        players: ["De'Aaron Fox", "Stephon Castle", "Jeremy Sochan", "Victor Wembanyama", "Harrison Barnes"],
        team: "SAS",
        minutesTogether: 88,
        netRating: 22.4,
        offRating: 121.3,
        defRating: 98.9,
        plusMinus: 79,
        record: "41-7 in games when closing",
        keyStrength: "The highest-performing crunch-time lineup in the league; Fox's late-clock isolation (1.12 PPP) and Wembanyama's shot-alteration gravity make San Antonio's closing possessions nearly unguardable."
      },
      worstUnit: {
        players: ["Malaki Branham", "Blake Wesley", "Sidy Cissoko", "Dom Barlow", "Charles Bassey"],
        team: "SAS",
        minutesTogether: 38,
        netRating: -9.7,
        offRating: 106.1,
        defRating: 115.8,
        plusMinus: -15,
        record: "Equivalent to 32-50 pace",
        keyStrength: "Developmental minutes rather than competitive utility; Bassey's screen-setting and rim-running are legitimate, but the unit lacks any half-court creation and ranks 29th leaguewide in assist rate."
      },
      rookieLineup: {
        players: ["De'Aaron Fox", "Stephon Castle", "Sidy Cissoko", "Jeremy Sochan", "Victor Wembanyama"],
        team: "SAS",
        minutesTogether: 54,
        netRating: 11.2,
        offRating: 115.4,
        defRating: 104.2,
        plusMinus: 24,
        record: "Equivalent to 55-27 pace",
        keyStrength: "Cissoko's length and defensive instincts allow Popovich to experiment without sacrificing team identity; the unit's defensive profile holds up because Wembanyama's deterrence covers developmental lapses."
      },
      narrative: "San Antonio's best lineup is not just the league's best this season — it is arguably the most dominant five-man unit in the post-bubble era by net rating at scale, and thirty-seven consecutive mornings of compound preparation have done nothing to slow its trajectory. The Fox–Castle backcourt pairing has matured into something structurally unique: two elite defenders at the point-of-attack who also function as legitimate half-court creators, with Wembanyama serving as the offensive release valve and defensive umbrella simultaneously. The death lineup's 41-7 record in close-game finishes tells the full story of why the Spurs won the Finals — no team in the league has fewer decision points in crunch time, because the hierarchy is that clear. The bench drop-off is real but irrelevant in a playoff context where Popovich routinely runs his top seven in the final three rounds; the question entering next season is whether Castle's extension timeline disrupts that calculus before training camp."
    },
    {
      team: "NYK",
      teamRecord: "53-29",
      bestUnit: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Mitchell Robinson"],
        team: "NYK",
        minutesTogether: 358,
        netRating: 19.4,
        offRating: 118.6,
        defRating: 99.2,
        plusMinus: 139,
        record: "Equivalent to 65-17 pace",
        keyStrength: "Championship-bred half-court efficiency at 1.19 PPP; Brunson's late-clock creation and Towns's elbow gravity make every possession feel manageable against any defensive scheme."
      },
      deathLineup: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Mitchell Robinson"],
        team: "NYK",
        minutesTogether: 79,
        netRating: 17.1,
        offRating: 116.9,
        defRating: 99.8,
        plusMinus: 54,
        record: "29-14 in games when closing",
        keyStrength: "The same five that wins in the regular season close games — New York's crunch-time unit is identical to its starting unit, a continuity advantage that eliminates lineup-switch vulnerability late in games."
      },
      worstUnit: {
        players: ["Miles McBride", "Precious Achiuwa", "Bojan Bogdanovic", "Jericho Sims", "Josh Hart"],
        team: "NYK",
        minutesTogether: 51,
        netRating: -8.4,
        offRating: 107.3,
        defRating: 115.7,
        plusMinus: -17,
        record: "Equivalent to 35-47 pace",
        keyStrength: "Hart's energy and offensive rebounding (18.1 OREB%) are genuine positives, but the unit's half-court offense stalls completely without a primary creator and opponents exploit the lack of shooting around Hart."
      },
      narrative: "New York's championship core has entered a third season together with the kind of quiet confidence that only comes from having won it all — the starting five's 358 minutes together produce a net rating that would rank top-three in any recent season, and Brunson's settled contract situation means zero organizational drag heading into training camp. The most interesting structural development is how Tom Thibodeau has simplified his rotation: the death lineup is now literally the same as the starting five, a philosophical concession that depth is less important than continuity in crunch time. That approach worked in the Finals but will face stress if Towns or Robinson misses time — the drop-off to the McBride-Achiuwa-Bogdanovic unit is steep enough to flip net rating by nearly 28 points per 100. KAT's health heading into the preseason window is the single variable that could change this team's ceiling calculation more than any other."
    },
    {
      team: "DEN",
      teamRecord: "54-28",
      bestUnit: {
        players: ["Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Nikola Jokic", "Christian Braun"],
        team: "DEN",
        minutesTogether: 334,
        netRating: 14.8,
        offRating: 118.2,
        defRating: 103.4,
        plusMinus: 99,
        record: "Equivalent to 59-23 pace",
        keyStrength: "Jokic's orchestration remains the offense's central nervous system; when Murray is healthy and attacking downhill, this lineup generates the league's highest rate of assisted dunks at 14.2 per 100 possessions."
      },
      deathLineup: {
        players: ["Jamal Murray", "Christian Braun", "Aaron Gordon", "Michael Porter Jr.", "Nikola Jokic"],
        team: "DEN",
        minutesTogether: 61,
        netRating: 8.3,
        offRating: 114.6,
        defRating: 106.3,
        plusMinus: 20,
        record: "22-18 in games when closing",
        keyStrength: "Jokic's playmaking under pressure and Gordon's switchability give Denver functional crunch-time options, though Murray's chronic knee management has reduced his close-game availability to 71% of qualifying games."
      },
      worstUnit: {
        players: ["Reggie Jackson", "Peyton Watson", "Zeke Nnaji", "Julian Strawther", "DeAndre Jordan"],
        team: "DEN",
        minutesTogether: 47,
        netRating: -14.2,
        offRating: 101.8,
        defRating: 116.0,
        plusMinus: -27,
        record: "Equivalent to 22-60 pace",
        keyStrength: "No identifiable competitive strength; this unit exists as a garbage-time vehicle and has been outscored in 34 of 47 minutes played, with Watson's defensive activity the lone bright spot."
      },
      narrative: "Denver's organizational situation is the league's most urgent unresolved variable, and it is starting to show in the lineup data. The starting five's net rating has declined for three consecutive months as Murray's knee management limits his availability in close-game minutes — the death lineup's 22-18 closing record is the worst among the top eight seeds by win percentage, and the gap between what Jokic can produce with a healthy Murray versus a managed Murray is roughly six net-rating points per 100. The bench unit is genuinely concerning: the Nnaji–Jackson–Jordan configuration is a negative-28-point-per-100 disaster that opponents now actively target by fouling starters into rest situations. Michael Malone has done exceptional work keeping the regular-season record intact, but the layer-two organizational complications described in Jokic's pulse profile are beginning to manifest as structural lineup inefficiency that wins and losses alone cannot obscure."
    },
    {
      team: "HOU",
      teamRecord: "52-30",
      bestUnit: {
        players: ["Alperen Sengun", "Jalen Green", "Amen Thompson", "Fred VanVleet", "Jabari Smith Jr."],
        team: "HOU",
        minutesTogether: 321,
        netRating: 17.2,
        offRating: 117.9,
        defRating: 100.7,
        plusMinus: 110,
        record: "Equivalent to 62-20 pace",
        keyStrength: "Sengun's post-passing unlocks second-side corner threes at 42.1%; Thompson's transition reads generate six fast-break points per 100 above league average."
      },
      deathLineup: {
        players: ["Fred VanVleet", "Jalen Green", "Amen Thompson", "Jabari Smith Jr.", "Alperen Sengun"],
        team: "HOU",
        minutesTogether: 72,
        netRating: 13.6,
        offRating: 115.2,
        defRating: 101.6,
        plusMinus: 39,
        record: "27-13 in games when closing",
        keyStrength: "VanVleet's late-game composure and foul-drawing efficiency (6.1 FTA per 36 in close minutes) anchor Houston's crunch-time execution; Sengun's ability to make the correct read under pressure has improved 22% by decision-point metrics."
      },
      worstUnit: {
        players: ["Aaron Holiday", "Tari Eason", "Jeff Green", "Boban Marjanovic", "Cam Whitmore"],
        team: "HOU",
        minutesTogether: 39,
        netRating: -12.1,
        offRating: 103.4,
        defRating: 115.5,
        plusMinus: -19,
        record: "Equivalent to 27-55 pace",
        keyStrength: "Eason's defensive motor and Whitmore's raw athleticism show flashes, but the unit has no spacing, no creation, and opponents score 1.19 PPP against it in half-court sets."
      },
      rookieLineup: {
        players: ["Fred VanVleet", "Jalen Green", "Amen Thompson", "Jabari Smith Jr.", "Cam Whitmore"],
        team: "HOU",
        minutesTogether: 58,
        netRating: 6.8,
        offRating: 112.4,
        defRating: 105.6,
        plusMinus: 16,
        record: "Equivalent to 51-31 pace",
        keyStrength: "Whitmore's finishing at the rim (67.2% at the basket) and off-ball movement give this lineup a legitimate second scoring option when Green is resting; the unit's defensive effort rating ranks 8th leaguewide."
      },
      narrative: "Houston's ascent to the league's fourth-best starting-lineup net rating is the summer's most significant basketball story, and Sengun's phase-two preparation trajectory is the engine driving it. The Rockets' starting five has now outperformed its preseason projection in every lineup metric that matters — offensive rating, defensive rating, and net rating all sit above the 90th percentile for teams at this record — which suggests the coaching staff's playbook expansion around Sengun's passing has created structural advantages that opponents have not yet solved. The closing lineup's 27-13 record validates the thesis that this is a complete team rather than a regular-season accumulator. The remaining question is roster depth: the Holiday–Green–Marjanovic bench grouping is a legitimate liability against playoff teams with the depth to exploit it, and Ime Udoka's rotational discipline will be tested the moment a starter misses a week in a seven-game series."
    },
    {
      team: "MIN",
      teamRecord: "49-33",
      bestUnit: {
        players: ["Anthony Edwards", "Mike Conley", "Jaden McDaniels", "Julius Randle", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 298,
        netRating: 12.4,
        offRating: 114.8,
        defRating: 102.4,
        plusMinus: 74,
        record: "Equivalent to 56-26 pace",
        keyStrength: "Gobert's drop coverage and Jaden McDaniels's switchability create a two-shell defensive system that holds opponents to 46.1% at the rim — third-best among qualified lineups — while Edwards's pull-up gravity opens floor space for corner shooters."
      },
      deathLineup: {
        players: ["Anthony Edwards", "Mike Conley", "Jaden McDaniels", "Julius Randle", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 68,
        netRating: 9.7,
        offRating: 112.6,
        defRating: 102.9,
        plusMinus: 26,
        record: "21-17 in games when closing",
        keyStrength: "Edwards is the only player in the league averaging over 32 points per 36 minutes in clutch time (final five minutes, within five points); his isolation efficiency of 1.09 PPP in those situations is what keeps Minnesota competitive despite multi-player roster complexity."
      },
      worstUnit: {
        players: ["Nickeil Alexander-Walker", "Jordan McLaughlin", "Luka Garza", "Leonard Miller", "Wendell Moore Jr."],
        team: "MIN",
        minutesTogether: 42,
        netRating: -13.6,
        offRating: 102.7,
        defRating: 116.3,
        plusMinus: -23,
        record: "Equivalent to 24-58 pace",
        keyStrength: "No competitive strength identified; the unit lacks a primary creator, a reliable three-point shooter above 33%, and a rim protector, making it exploitable from every angle of attack."
      },
      narrative: "Minnesota's ceiling remains Anthony Edwards, and Edwards alone — his individual competitive posture is among the top three in the league, but the multi-player sequencing drag referenced in his pulse profile is now quantifiable in the lineup data. The starting five's net rating has underperformed its talent projection by 4.2 points per 100 all season, a gap that traces directly to the roster's half-court spacing inefficiency when Randle is used as a primary handler rather than a secondary creator. The closing lineup's 21-17 record is functional but not dominant — in games decided by three or fewer, Minnesota goes to Edwards isolation at a 67% rate, which is both a testament to his quality and a structural tell that opponents now game-plan around explicitly. The twelve-day preseason runway's compression phase is arriving with more open roster variables than any other top-ten team, and the framework's concern about sequencing drag accumulating into October is reflected plainly in this team's worst-unit metrics."
    },
    {
      team: "BOS",
      teamRecord: "51-31",
      bestUnit: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Kristaps Porzingis"],
        team: "BOS",
        minutesTogether: 276,
        netRating: 15.6,
        offRating: 119.1,
        defRating: 103.5,
        plusMinus: 86,
        record: "Equivalent to 60-22 pace",
        keyStrength: "Boston's five-out offensive spacing with Porzingis and Horford stretching the floor simultaneously creates drive-and-kick geometry that generates open threes at a 44.1 team rate in this specific configuration."
      },
      deathLineup: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Kristaps Porzingis"],
        team: "BOS",
        minutesTogether: 71,
        netRating: 12.8,
        offRating: 117.2,
        defRating: 104.4,
        plusMinus: 36,
        record: "26-16 in games when closing",
        keyStrength: "Tatum and Brown's combined clutch-time scoring (38.4 PPG in final-five-minute situations) gives Boston a dual-threat closing attack; Jrue Holiday's defensive positioning in scramble situations ranks first among all guards in the league."
      },
      worstUnit: {
        players: ["Payton Pritchard", "Sam Hauser", "Svi Mykhailiuk", "Luke Kornet", "Xavier Tillman"],
        team: "BOS",
        minutesTogether: 36,
        netRating: -10.8,
        offRating: 106.4,
        defRating: 117.2,
        plusMinus: -16,
        record: "Equivalent to 30-52 pace",
        keyStrength: "Hauser's corner three-point shooting (40.8% on the season) is a genuine asset, but the unit surrenders rim attempts at an alarming rate without a qualified rim protector and collapses against any competent pick-and-roll team."
      },
      newLookLineup: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Kristaps Porzingis", "Robert Williams III"],
        team: "BOS",
        minutesTogether: 82,
        netRating: 13.9,
        offRating: 116.8,
        defRating: 102.9,
        plusMinus: 46,
        record: "Equivalent to 58-24 pace",
        keyStrength: "Robert Williams's return from his third knee surgery has given Boston a legitimate big-to-big defensive pairing; his rim protection metrics (5.8 BPG per 100) in this lineup complement Porzingis's perimeter coverage in ways Horford's lower-bounce athleticism no longer can."
      },
      narrative: "Boston's starting five is the East's second-best by net rating, but the gap between their best and second-best lineup configurations signals that Joe Mazzulla is still searching for the optimal big-man pairing. The Horford version produces better spacing; the Robert Williams version produces better rim protection — and the decision of which to prioritize in a playoff series will define Boston's ceiling more than any other single variable. Tatum's individual preparation posture is clean, but the team's 51-31 record underperforms its point differential, which projects closer to a 56-win pace — a sign that Boston has been losing some close games it statistically should win. The Pritchard–Hauser–Kornet bench grouping remains the franchise's most persistent structural vulnerability, a unit opponents actively target by switching matchups to force Kornet onto guards in pick-and-roll coverage."
    },
    {
      team: "LAL",
      teamRecord: "48-34",
      bestUnit: {
        players: ["LeBron James", "Austin Reaves", "Rui Hachimura", "Anthony Davis", "D'Angelo Russell"],
        team: "LAL",
        minutesTogether: 264,
        netRating: 11.8,
        offRating: 115.6,
        defRating: 103.8,
        plusMinus: 62,
        record: "Equivalent to 55-27 pace",
        keyStrength: "Davis's two-way dominance anchors a lineup that ranks top-five in both offensive and defensive rebounding rate; LeBron's playmaking at age 41 continues to defy physiological expectation, with 9.1 APG in this specific five-man configuration."
      },
      deathLineup: {
        players: ["LeBron James", "Austin Reaves", "Rui Hachimura", "Anthony Davis", "D'Angelo Russell"],
        team: "LAL",
        minutesTogether: 63,
        netRating: 9.2,
        offRating: 113.4,
        defRating: 104.2,
        plusMinus: 23,
        record: "20-19 in games when closing",
        keyStrength: "LeBron's experience managing possession value in crunch time is unmatched; his turnover rate drops to 8.1% in clutch minutes — third-lowest in the league — while his assist-to-potential-assist ratio remains above 0.80."
      },
      worstUnit: {
        players: ["Gabe Vincent", "Max Christie", "Taurean Prince", "Wenyen Gabriel", "Colin Castleton"],
        team: "LAL",
        minutesTogether: 48,
        netRating: -13.4,
        offRating: 103.1,
        defRating: 116.5,
        plusMinus: -26,
        record: "Equivalent to 25-57 pace",
        keyStrength: "Christie shows enough athleticism and positional versatility to project as a viable rotation player long-term, but this grouping currently produces negative value in every measurable category and is exploited relentlessly in transition."
      },
      narrative: "Los Angeles's lineup data tells two distinct stories depending on whether LeBron and Davis are on the floor simultaneously. The Davis–LeBron pairing ranks in the top ten leaguewide by net rating at 264 minutes together — a number that should be higher but is suppressed by load management protocols that keep one or both off the floor in blowouts. The closing lineup's 20-19 record is the data point that should concern Lakers fans most: in games decided by five or fewer in the final two minutes, JJ Redick's team is essentially coin-flip territory, which is a function of D'Angelo Russell's inconsistent shot creation in high-leverage situations (0.88 PPP on isolation plays in the final five minutes). The bench depth gap is severe enough that the Vincent–Gabriel–Castleton unit has effectively become a liability tax on every game the starters keep close — opponents who extend into overtime against LA have a significant structural advantage."
    },
    {
      team: "MEM",
      teamRecord: "47-35",
      bestUnit: {
        players: ["Ja Morant", "Desmond Bane", "Jaren Jackson Jr.", "Vince Williams Jr.", "GG Jackson II"],
        team: "MEM",
        minutesTogether: 243,
        netRating: 13.1,
        offRating: 116.2,
        defRating: 103.1,
        plusMinus: 64,
        record: "Equivalent to 57-25 pace",
        keyStrength: "Ja Morant's return to full health has restored the Grizzlies' transition attack to its 2022-23 peak; the unit generates 18.4 fast-break points per game, leads the league in rim attempts per 100 possessions, and produces the second-highest rate of and-one opportunities in the NBA."
      },
      deathLineup: {
        players: ["Ja Morant", "Desmond Bane", "Jaren Jackson Jr.", "GG Jackson II", "Vince Williams Jr."],
        team: "MEM",
        minutesTogether: 57,
        netRating: 10.4,
        offRating: 113.8,
        defRating: 103.4,
        plusMinus: 24,
        record: "22-16 in games when closing",
        keyStrength: "JJJ's shot-blocking deterrence and Bane's late-clock three-point shooting (39.4% on clutch-time attempts) give Memphis a legitimate closing combination; Morant's foul-drawing in late situations (9.2 FTA per 36) is the lineup's primary scoring engine."
      },
      worstUnit: {
        players: ["John Konchar", "Luke Kennard", "David Roddy", "Santi Aldama", "Xavier Tillman Sr."],
        team: "MEM",
        minutesTogether: 53,
        netRating: -11.7,
        offRating: 104.8,
        defRating: 116.5,
        plusMinus: -25,
        record: "Equivalent to 28-54 pace",
        keyStrength: "Aldama's stretch-four capabilities and Kennard's spot-up shooting provide spacing, but the unit has no playmaking, no rim protection, and opponents have learned to probe Konchar in pick-and-roll coverage relentlessly."
      },
      rookieLineup: {
        players: ["Ja Morant", "Desmond Bane", "GG Jackson II", "Vince Williams Jr.", "Jaren Jackson Jr."],
        team: "MEM",
        minutesTogether: 76,
        netRating: 11.8,
        offRating: 114.9,
        defRating: 103.1,
        plusMinus: 36,
        record: "Equivalent to 55-27 pace",
        keyStrength: "GG Jackson II has emerged as the Grizzlies' most versatile offensive piece off the second option — his pull-up mid-range game grades at 1.04 PPP, giving Memphis a secondary creator who does not require the ball in isolation to be effective."
      },
      narrative: "Memphis is the league's best story in the back half of the top ten, and the lineup data explains why: Ja Morant's full-health season has unlocked a transition-based offensive profile that no other team in the league can replicate at the same rate or efficiency. The starting five's net rating on a per-100 basis projects to a 57-win pace despite the team sitting at 47-35, reflecting the fact that Taylor Jenkins has been conservative with starter minutes in games already decided. GG Jackson II's development into a legitimate second-unit offensive creator changes the calculus for Memphis's playoff viability — the rookie lineup's 76 minutes together at an 11.8 net rating suggests Memphis has found a functional six-man configuration that can hold its own against playoff benches. The Konchar–Kennard–Tillman bench unit remains a structural liability that experienced playoff coaches will exploit, but for the first time in three seasons, Taylor Jenkins has enough firepower in his top seven to limit those exposures."
    },
    {
      team: "PHI",
      teamRecord: "44-38",
      bestUnit: {
        players: ["Tyrese Maxey", "Paul George", "Kelly Oubre Jr.", "Joel Embiid", "Andre Drummond"],
        team: "PHI",
        minutesTogether: 198,
        netRating: 10.2,
        offRating: 114.1,
        defRating: 103.9,
        plusMinus: 40,
        record: "Equivalent to 53-29 pace",
        keyStrength: "When both Embiid and Maxey are healthy simultaneously — which has occurred in only 198 of a possible 390 potential minutes — the offense grades at 1.16 PPP in half-court sets, driven by Maxey's gravity forcing help and Embiid's post-up efficiency at 1.08 PPP."
      },
      deathLineup: {
        players: ["Tyrese Maxey", "Paul George", "Kelly Oubre Jr.", "Joel Embiid", "Andre Drummond"],
        team: "PHI",
        minutesTogether: 44,
        netRating: 6.7,
        offRating: 111.8,
        defRating: 105.1,
        plusMinus: 12,
        record: "14-16 in games when closing",
        keyStrength: "Embiid's post-up game in crunch time is genuinely elite (1.11 PPP in the final five minutes), but Philadelphia's closing record is losing because the team reaches crunch time in fewer games than its record implies — it either wins or loses by large margins with unusual frequency."
      },
      worstUnit: {
        players: ["Kyle Lowry", "Shake Milton", "Danny Green", "Paul Reed", "Mo Bamba"],
        team: "PHI",
        minutesTogether: 41,
        netRating: -16.3,
        offRating: 100.4,
        defRating: 116.7,
        plusMinus: -27,
        record: "Equivalent to 18-64 pace",
        keyStrength: "No identifiable competitive strength; the unit allows the second-highest rate of open corner threes in the league and converts possessions at a rate that ranks last among all 82-game-qualified lineups with 40-plus minutes."
      },
      narrative: "Philadelphia's lineup data is less an analysis than a health-availability audit: the starting five's performance when Embiid and Maxey share the floor projects to a 53-win pace, but the team's actual record sits at 44-38 because that combination has been available for barely half of all possible minutes. Nick Nurse has done admirable work constructing functional configurations around whoever is healthy on a given night, but the structural reality is that Philadelphia's bench depth — exemplified by the Lowry–Milton–Bamba grouping that posts a -16.3 net rating — is catastrophic enough to drag the full-season average below any reasonable projection for a team with this top-end talent. The 14-16 closing record is the most transparent symptom of the core problem: Philadelphia gets to crunch time in fewer games than any other playoff team because its blowout variance is extreme in both directions, a sign that the roster is simultaneously top-heavy and dangerously thin."
    }
  ]
};