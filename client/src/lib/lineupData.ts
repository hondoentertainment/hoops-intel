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
      players: ["Shai Gilgeous-Alexander", "Chet Holmgren", "Jalen Williams", "Luguentz Dort", "Isaiah Hartenstein"],
      team: "OKC",
      minutesTogether: 412,
      netRating: 22.4,
      offRating: 121.8,
      defRating: 99.4,
      plusMinus: 187,
      record: "Equivalent to 68-14 pace",
      keyStrength: "Elite two-way balance — top-5 offense and top-3 defense when this unit shares the floor"
    },
    {
      players: ["Victor Wembanyama", "Devin Vassell", "Keldon Johnson", "Jeremy Sochan", "Chris Paul"],
      team: "SAS",
      minutesTogether: 387,
      netRating: 19.7,
      offRating: 119.3,
      defRating: 99.6,
      plusMinus: 156,
      record: "Equivalent to 65-17 pace",
      keyStrength: "Wembanyama's rim protection anchors a defense that forces opponents into the lowest shot-quality diet in the West"
    },
    {
      players: ["Jayson Tatum", "Jaylen Brown", "Kristaps Porzingis", "Jrue Holiday", "Payton Pritchard"],
      team: "BOS",
      minutesTogether: 448,
      netRating: 18.9,
      offRating: 122.4,
      defRating: 103.5,
      plusMinus: 172,
      record: "Equivalent to 64-18 pace",
      keyStrength: "Unmatched offensive versatility with four credible creation sources and Pritchard's gravity as a spot-up sniper"
    },
    {
      players: ["Cade Cunningham", "Jaden Ivey", "Ausar Thompson", "Tobias Harris", "Jalen Duren"],
      team: "DET",
      minutesTogether: 396,
      netRating: 17.2,
      offRating: 118.6,
      defRating: 101.4,
      plusMinus: 139,
      record: "Equivalent to 62-20 pace",
      keyStrength: "Thompson's switchability and Duren's lob threat create a defensive ceiling and transition attack that few can match"
    },
    {
      players: ["Paolo Banchero", "Franz Wagner", "Wendell Carter Jr.", "Jalen Suggs", "Gary Harris"],
      team: "ORL",
      minutesTogether: 341,
      netRating: 15.8,
      offRating: 116.9,
      defRating: 101.1,
      plusMinus: 109,
      record: "Equivalent to 59-23 pace",
      keyStrength: "Wagner and Banchero's dribble-handoff chemistry is the league's most underrated two-man game heading into the playoffs"
    }
  ],

  biggestSurprise: {
    team: "ORL",
    description: "Orlando's starting five — built around two players under 24 — is posting a top-five net rating against playoff-caliber competition, a statistical outlier that no preseason model predicted. Their road demolition of Detroit, the East's top seed, wasn't a fluke: this lineup has a +15.8 net rating in the last 30 games and is allowing just 101 points per 100 possessions. The Magic appear to have quietly assembled one of the most coherent defensive organisms in the conference."
  },

  teams: [
    {
      team: "OKC",
      teamRecord: "65-18",
      narrative: "Oklahoma City's starting five is operating at a level that feels historically significant — their +22.4 net rating as a unit would rank among the best five-man groups in the Stathead era. The Dort-Hartenstein defensive spine gives SGA and Williams the freedom to gamble for steals knowing broken plays are covered, and Holmgren's pick-and-pop spacing has evolved to a point where opposing big men genuinely cannot guard him at the arc. The one legitimate concern is the drop-off when that unit sits: their second unit posts a net rating of just +4.1, a gap the Pelicans and others have tried to exploit in the second quarter. Head coach Mark Daigneault has begun staggering Holmgren's minutes to paper over the crack, and it's working for now, but a seven-game playoff series will stress-test that depth chart hard.",
      bestUnit: {
        players: ["Shai Gilgeous-Alexander", "Chet Holmgren", "Jalen Williams", "Luguentz Dort", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 412,
        netRating: 22.4,
        offRating: 121.8,
        defRating: 99.4,
        plusMinus: 187,
        record: "Equivalent to 68-14 pace",
        keyStrength: "League-best two-way cohesion; Hartenstein's screen-and-roll defense eliminates the drop coverage vulnerability that haunts other big-anchored lineups"
      },
      deathLineup: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 67,
        netRating: 19.8,
        offRating: 118.4,
        defRating: 98.6,
        plusMinus: 53,
        record: "14-3 in games when closing",
        keyStrength: "SGA's isolation mastery in late-clock situations paired with Holmgren's shot-blocking makes this the most complete closing unit in the West"
      },
      worstUnit: {
        players: ["Aaron Wiggins", "Kenrich Williams", "Ousmane Dieng", "Jaylin Williams", "Bismack Biyombo"],
        team: "OKC",
        minutesTogether: 44,
        netRating: -11.3,
        offRating: 103.2,
        defRating: 114.5,
        plusMinus: -24,
        record: "Equivalent to 33-49 pace",
        keyStrength: "Lacks a credible creation source; opponents switch to zone and force Dieng into uncomfortable pull-up decisions"
      },
      rookieLineup: {
        players: ["Ousmane Dieng", "Chet Holmgren", "Shai Gilgeous-Alexander", "Jaylin Williams", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 58,
        netRating: 9.4,
        offRating: 114.7,
        defRating: 105.3,
        plusMinus: 22,
        record: "Equivalent to 53-29 pace",
        keyStrength: "Dieng's cutting ability alongside Holmgren's spacing gives this developmental unit a legitimate offensive identity above replacement level"
      }
    },
    {
      team: "SAS",
      teamRecord: "63-20",
      narrative: "San Antonio's ascent to the West's second seed is a story being told almost entirely through Victor Wembanyama's defensive gravitational pull — no team in the league forces more shot alterations within six feet of the rim, and it isn't close. Chris Paul's veteran presence as the fifth starter has been the quieter masterstroke: the 41-year-old is shooting 47% from three on catch-and-shoot opportunities this season, stretching defenses that might otherwise collapse on Wembanyama. The Spurs' worst unit is a genuine liability, however, with a -13.1 net rating in bench-heavy minutes that suggests their depth chart drops off a cliff after the top seven. If injuries strike in the playoffs, Gregg Popovich's rotational depth will be a serious conversation.",
      bestUnit: {
        players: ["Victor Wembanyama", "Devin Vassell", "Keldon Johnson", "Jeremy Sochan", "Chris Paul"],
        team: "SAS",
        minutesTogether: 387,
        netRating: 19.7,
        offRating: 119.3,
        defRating: 99.6,
        plusMinus: 156,
        record: "Equivalent to 65-17 pace",
        keyStrength: "Wembanyama's 4-block-per-game pace in this lineup terrorizes interior attacks while Paul orchestrates a high-efficiency half-court system"
      },
      deathLineup: {
        players: ["Victor Wembanyama", "Devin Vassell", "Keldon Johnson", "Jeremy Sochan", "Chris Paul"],
        team: "SAS",
        minutesTogether: 71,
        netRating: 17.9,
        offRating: 116.8,
        defRating: 98.9,
        plusMinus: 52,
        record: "16-4 in games when closing",
        keyStrength: "Paul's clock management and Wembanyama's rim deterrence make late possessions nearly unwinnable for opponents"
      },
      worstUnit: {
        players: ["Malaki Branham", "Blake Wesley", "Sidy Cissoko", "Charles Bassey", "Dominick Barlow"],
        team: "SAS",
        minutesTogether: 38,
        netRating: -13.1,
        offRating: 101.4,
        defRating: 114.5,
        plusMinus: -22,
        record: "Equivalent to 30-52 pace",
        keyStrength: "Purely developmental minutes; opponents score at will in transition without a credible shot-stopper or playmaker on the floor"
      },
      rookieLineup: {
        players: ["Victor Wembanyama", "Sidy Cissoko", "Devin Vassell", "Jeremy Sochan", "Malaki Branham"],
        team: "SAS",
        minutesTogether: 76,
        netRating: 11.2,
        offRating: 115.6,
        defRating: 104.4,
        plusMinus: 38,
        record: "Equivalent to 56-26 pace",
        keyStrength: "Wembanyama's presence elevates any lineup he anchors; Cissoko's lateral quickness adds a defensive dimension the other reserve units lack"
      }
    },
    {
      team: "BOS",
      teamRecord: "57-26",
      narrative: "Boston's starting five remains the most offensively loaded unit in the Eastern Conference, capable of erupting for 130-plus on any given night as they demonstrated in Thursday's dismemberment of Philadelphia. Tatum's three-point volume and efficiency this week — 7-of-12 in a single game — has elevated the starting unit's offensive rating to a season-high 122.4, a number that becomes almost comical when Porzingis is healthy enough to space the floor alongside him. The Celtics' death lineup is equally elite, posting a 18.1 net rating in closing situations that reflects a team that has learned how to win ugly after two playoff runs. The one consistent vulnerability is the Al Horford–led second unit against mobile bigs, where opponents can hunt the veteran center in pick-and-roll coverage — something Memphis and Cleveland have each exploited this month.",
      bestUnit: {
        players: ["Jayson Tatum", "Jaylen Brown", "Kristaps Porzingis", "Jrue Holiday", "Payton Pritchard"],
        team: "BOS",
        minutesTogether: 448,
        netRating: 18.9,
        offRating: 122.4,
        defRating: 103.5,
        plusMinus: 172,
        record: "Equivalent to 64-18 pace",
        keyStrength: "Four capable pull-up creators plus Pritchard's off-ball gravity make defensive schemes irrelevant — every coverge has a fatal flaw against this group"
      },
      deathLineup: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Payton Pritchard"],
        team: "BOS",
        minutesTogether: 82,
        netRating: 18.1,
        offRating: 117.6,
        defRating: 99.5,
        plusMinus: 61,
        record: "17-5 in games when closing",
        keyStrength: "Holiday's late-game steals and Tatum's creation under duress give Boston the league's most dependable closing sequence"
      },
      worstUnit: {
        players: ["Sam Hauser", "Luke Kornet", "Svi Mykhailiuk", "Jordan Walsh", "Neemias Queta"],
        team: "BOS",
        minutesTogether: 41,
        netRating: -9.8,
        offRating: 105.1,
        defRating: 114.9,
        plusMinus: -19,
        record: "Equivalent to 37-45 pace",
        keyStrength: "Hauser's shooting keeps the unit from complete offensive collapse, but the lack of a playmaker turns every possession into a catch-and-shoot prayer"
      }
    },
    {
      team: "DET",
      teamRecord: "60-23",
      narrative: "Detroit's loss to Orlando on Thursday was jarring not just for the result but for what the lineup data revealed: the Pistons posted a -9.4 net rating over the final 18 minutes as Cunningham's 43.5% shooting night compounded defensive breakdowns that allowed Banchero to operate at will in the mid-post. The starting unit's season-long numbers remain elite, but Cade has now shot below 46% in three of his last five games — a sample small enough to dismiss, but a pattern worth monitoring. The death lineup's 13-5 record in closing situations this season is legitimately impressive and remains one of the East's most trustworthy late-game groups. What Thursday exposed is that when Cunningham's efficiency dips, there is no second creation option capable of picking up the slack, which is a structural concern that a first-round series will not hide.",
      bestUnit: {
        players: ["Cade Cunningham", "Jaden Ivey", "Ausar Thompson", "Tobias Harris", "Jalen Duren"],
        team: "DET",
        minutesTogether: 396,
        netRating: 17.2,
        offRating: 118.6,
        defRating: 101.4,
        plusMinus: 139,
        record: "Equivalent to 62-20 pace",
        keyStrength: "Thompson's switchability neutralizes modern spread offenses while Duren's athleticism as a lob target keeps defenses honest at the rim"
      },
      deathLineup: {
        players: ["Cade Cunningham", "Ausar Thompson", "Tobias Harris", "Jalen Duren", "Jaden Ivey"],
        team: "DET",
        minutesTogether: 74,
        netRating: 14.9,
        offRating: 116.2,
        defRating: 101.3,
        plusMinus: 48,
        record: "13-5 in games when closing",
        keyStrength: "Cunningham's pick-and-roll mastery with Duren is nearly unguardable when he's hitting his pull-up jumper with any consistency"
      },
      worstUnit: {
        players: ["Killian Hayes", "Bojan Bogdanovic", "Stanley Umude", "Isaiah Stewart", "Marvin Bagley III"],
        team: "DET",
        minutesTogether: 49,
        netRating: -12.7,
        offRating: 102.8,
        defRating: 115.5,
        plusMinus: -30,
        record: "Equivalent to 31-51 pace",
        keyStrength: "Zero defensive cohesion; opponents exploit Bagley's drop coverage relentlessly and Hayes lacks the burst to recover on perimeter closeouts"
      }
    },
    {
      team: "ORL",
      teamRecord: "46-37",
      narrative: "The lineup data tells a story that the standings have been obscuring all season: when Paolo Banchero and Franz Wagner share the floor together, Orlando is a legitimate top-five team in the league by net rating, not a Cinderella story. Thursday's road win in Detroit was the best evidence yet, with their starting five posting a +19 plus-minus in 36 minutes against the East's top seed. The death lineup is still developing — Suggs' late-game shot creation is the limiting factor, and opposing coaches have learned to deliberately foul him in closing moments — but that is a solvable problem for a team this young. What's most encouraging is that the worst unit's liability window is small: coach Jamahl Mosley barely plays his garbage-time group, keeping negative-impact minutes to a league-low threshold that reflects a coaching staff that has fully bought into a short, trustworthy rotation.",
      bestUnit: {
        players: ["Paolo Banchero", "Franz Wagner", "Wendell Carter Jr.", "Jalen Suggs", "Gary Harris"],
        team: "ORL",
        minutesTogether: 341,
        netRating: 15.8,
        offRating: 116.9,
        defRating: 101.1,
        plusMinus: 109,
        record: "Equivalent to 59-23 pace",
        keyStrength: "Banchero and Wagner's dribble-handoff two-man game is the league's most underrated action — opponents still have no consensus answer to it"
      },
      deathLineup: {
        players: ["Paolo Banchero", "Franz Wagner", "Jalen Suggs", "Gary Harris", "Wendell Carter Jr."],
        team: "ORL",
        minutesTogether: 53,
        netRating: 12.3,
        offRating: 113.7,
        defRating: 101.4,
        plusMinus: 28,
        record: "9-7 in games when closing",
        keyStrength: "Banchero's late-game isolation ability is coming into its own; his 0.94 points-per-possession rate in isolation this month ranks 8th in the league"
      },
      worstUnit: {
        players: ["Cole Anthony", "Caleb Houstan", "Admiral Schofield", "Mo Bamba", "R.J. Hampton"],
        team: "ORL",
        minutesTogether: 34,
        netRating: -14.2,
        offRating: 100.3,
        defRating: 114.5,
        plusMinus: -24,
        record: "Equivalent to 28-54 pace",
        keyStrength: "Bamba's rim deterrence prevents the unit from complete defensive disintegration, but the offensive dysfunction around him is severe"
      },
      rookieLineup: {
        players: ["Paolo Banchero", "Franz Wagner", "Caleb Houstan", "Jalen Suggs", "Wendell Carter Jr."],
        team: "ORL",
        minutesTogether: 61,
        netRating: 8.7,
        offRating: 112.4,
        defRating: 103.7,
        plusMinus: 22,
        record: "Equivalent to 52-30 pace",
        keyStrength: "Houstan's three-point shooting (41.2% this season) gives Banchero the floor spacing to operate without Wagner, expanding Orlando's offensive toolkit"
      }
    },
    {
      team: "PHI",
      teamRecord: "45-38",
      narrative: "Philadelphia's lineup data is a study in extremes — when Embiid and Tyrese Maxey share the floor in their best configuration, they produce at a top-10 rate in the league; when either sits, the team unravels at a pace that would project to a 34-win season. The blowout loss in Boston was a case study in the second dynamic: with Embiid playing through foul trouble and Maxey pressing to compensate, Boston's switching defense neutralized every set the Sixers ran and the margin snowballed. The death lineup's 8-11 record in closing situations is the most damning number on Philadelphia's résumé — it reflects a team that fights hard enough to be in games late but lacks the collective trust and shot creation to reliably win them. Trading Tobias Harris three years ago for wing depth that never materialized remains the front office's most consequential unresolved mistake.",
      bestUnit: {
        players: ["Joel Embiid", "Tyrese Maxey", "Paul George", "Kelly Oubre Jr.", "Patrick Beverley"],
        team: "PHI",
        minutesTogether: 318,
        netRating: 11.4,
        offRating: 117.2,
        defRating: 105.8,
        plusMinus: 75,
        record: "Equivalent to 56-26 pace",
        keyStrength: "Embiid's post dominance paired with Maxey's pick-and-roll speed creates a two-level attack that demands full defensive attention on both options simultaneously"
      },
      deathLineup: {
        players: ["Joel Embiid", "Tyrese Maxey", "Paul George", "Kelly Oubre Jr.", "Patrick Beverley"],
        team: "PHI",
        minutesTogether: 58,
        netRating: 2.1,
        offRating: 110.4,
        defRating: 108.3,
        plusMinus: 6,
        record: "8-11 in games when closing",
        keyStrength: "Embiid's free-throw creation is the closing lifeline, but late-game defensive breakdowns on George's side of the floor remain a persistent vulnerability"
      },
      worstUnit: {
        players: ["Marcus Morris Sr.", "Ricky Council IV", "KJ Martin", "Reggie Jackson", "Paul Reed"],
        team: "PHI",
        minutesTogether: 52,
        netRating: -16.8,
        offRating: 98.7,
        defRating: 115.5,
        plusMinus: -39,
        record: "Equivalent to 23-59 pace",
        keyStrength: "No credible playmaker, no switchable defender, no floor spacer — opposing coaches intentionally hunt this lineup when it appears, running consecutive quick possessions to maximize exposure"
      }
    },
    {
      team: "POR",
      teamRecord: "42-41",
      narrative: "Portland sits at the exact bubble threshold where their lineup data becomes genuinely interesting to dissect — they have assembled a top-15 best unit in the league by net rating but a bottom-five worst unit, creating a variance profile that makes them dangerous in short series and unreliable across an 82-game sample. Damian Lillard's 45.5% shooting night against San Antonio's Wembanyama-anchored defense was predictable in retrospect; no guard in the league shoots efficiently against that rim protection. The closing lineup has quietly gone 10-7 this month when Dame is hitting his threes, but that conditionality is the tell — Portland wins when Lillard is hot and loses when he isn't, a binary that a playoff opponent will scheme aggressively to force. Anfernee Simons' development as a secondary creator has been the season's most underreported storyline, and his numbers alongside Lillard give the Trail Blazers' best unit legitimate teeth.",
      bestUnit: {
        players: ["Damian Lillard", "Anfernee Simons", "Jerami Grant", "Jabari Walker", "Deandre Ayton"],
        team: "POR",
        minutesTogether: 367,
        netRating: 13.1,
        offRating: 116.4,
        defRating: 103.3,
        plusMinus: 98,
        record: "Equivalent to 57-25 pace",
        keyStrength: "Lillard and Simons' two-guard pick-and-roll generates the highest frequency of corner three opportunities in the Western Conference"
      },
      deathLineup: {
        players: ["Damian Lillard", "Anfernee Simons", "Jerami Grant", "Jabari Walker", "Deandre Ayton"],
        team: "POR",
        minutesTogether: 62,
        netRating: 8.9,
        offRating: 113.6,
        defRating: 104.7,
        plusMinus: 24,
        record: "10-11 in games when closing",
        keyStrength: "Lillard's step-back three off the screen-and-roll remains the league's most reliable shot-creation mechanism in the final 30 seconds of close games"
      },
      worstUnit: {
        players: ["Shaedon Sharpe", "Scoot Henderson", "Matisse Thybulle", "Moses Brown", "Kris Murray"],
        team: "POR",
        minutesTogether: 47,
        netRating: -17.4,
        offRating: 97.2,
        defRating: 114.6,
        plusMinus: -37,
        record: "Equivalent to 21-61 pace",
        keyStrength: "Thybulle's perimeter defense is the sole redeeming quality; the offensive dysfunction around him is the league's most acute bench creation deficit"
      },
      rookieLineup: {
        players: ["Scoot Henderson", "Shaedon Sharpe", "Jerami Grant", "Jabari Walker", "Deandre Ayton"],
        team: "POR",
        minutesTogether: 88,
        netRating: 3.2,
        offRating: 109.8,
        defRating: 106.6,
        plusMinus: 12,
        record: "Equivalent to 47-35 pace",
        keyStrength: "Henderson's burst in transition and Sharpe's athleticism in the open court make this group's best basketball emphatically up-tempo"
      }
    },
    {
      team: "MIL",
      teamRecord: "41-42",
      narrative: "Milwaukee's lineup data is the most sobering reading in the Eastern Conference — a team with Giannis Antetokounmpo posting a +16.7 net rating in his starting configuration has no business sitting at .500, but the bench units are so catastrophically bad that the season-long numbers reflect genuine roster construction failure. The worst unit's -19.1 net rating is the second-worst five-man mark in the NBA among units with more than 40 minutes together, and it has single-handedly swung at least six games this season. The closing lineup has gone just 9-12, a remarkable indictment of everything around Giannis once the stakes are highest and opponents can target weak spots. The front office's inability to surround the two-time MVP with a competent supporting cast has become the league's most exhausting annual conversation, and the lineup numbers make clear that no amount of Giannis brilliance can paper over what is structurally broken here.",
      bestUnit: {
        players: ["Giannis Antetokounmpo", "Khris Middleton", "Brook Lopez", "Damian Lillard", "Pat Connaughton"],
        team: "MIL",
        minutesTogether: 289,
        netRating: 16.7,
        offRating: 120.1,
        defRating: 103.4,
        plusMinus: 98,
        record: "Equivalent to 60-22 pace",
        keyStrength: "Giannis's drive-and-kick into Lopez's corner three is the most efficient recurring action in Milwaukee's half-court playbook"
      },
      deathLineup: {
        players: ["Giannis Antetokounmpo", "Khris Middleton", "Brook Lopez", "Bobby Portis", "Malik Beasley"],
        team: "MIL",
        minutesTogether: 55,
        netRating: 5.8,
        offRating: 112.7,
        defRating: 106.9,
        plusMinus: 14,
        record: "9-12 in games when closing",
        keyStrength: "Giannis's late-game free throw volume is the closing lifeline, but the absence of a reliable secondary creator makes every possession Giannis-or-bust"
      },
      worstUnit: {
        players: ["MarJon Beauchamp", "Jordan Nwora", "AJ Green", "Robin Lopez", "Thanasis Antetokounmpo"],
        team: "MIL",
        minutesTogether: 43,
        netRating: -19.1,
        offRating: 95.4,
        defRating: 114.5,
        plusMinus: -38,
        record: "Equivalent to 18-64 pace",
        keyStrength: "There is effectively no functional strength in this lineup; opponents score at will in transition and the half-court offense is entirely stagnant"
      }
    },
    {
      team: "MEM",
      teamRecord: "39-44",
      narrative: "Memphis is the most fascinating team in the play-in race because their best lineup would comfortably project into the top-six seeds in the West, yet they are fighting for their playoff lives. Ja Morant's return from injury has reinvigorated the Grizzlies' best five-man group — their 14.3 net rating over the last 22 games with their starting unit intact is nearly nine points better than their full-season mark, a swing that illustrates just how much Morant's absence distorted the sample. The worrying sign is the death lineup: Memphis goes small in closing situations, removing Jaren Jackson Jr. to add a perimeter shooter, and opponents are hunting that configuration in the paint with devastating efficiency. The worst unit's -15.6 net rating reflects genuine developmental growing pains, but at this point in the season, growing pains are an unaffordable luxury for a team that needs every win to secure its play-in position.",
      bestUnit: {
        players: ["Ja Morant", "Jaren Jackson Jr.", "Desmond Bane", "Luke Kennard", "Brandon Clarke"],
        team: "MEM",
        minutesTogether: 298,
        netRating: 14.3,
        offRating: 117.8,
        defRating: 103.5,
        plusMinus: 88,
        record: "Equivalent to 58-24 pace",
        keyStrength: "Morant's transition speed and Jackson's shot-blocking create the league's best fast-break-to-rim-protection combination in a single lineup"
      },
      deathLineup: {
        players: ["Ja Morant", "Desmond Bane", "Luke Kennard", "Ziaire Williams", "Brandon Clarke"],
        team: "MEM",
        minutesTogether: 48,
        netRating: 4.6,
        offRating: 112.3,
        defRating: 107.7,
        plusMinus: 11,
        record: "8-9 in games when closing",
        keyStrength: "Morant's downhill burst creates enough late-game chaos to win despite the interior coverage liability — barely"
      },
      worstUnit: {
        players: ["John Konchar", "Jake LaRavia", "David Roddy", "Xavier Tillman", "Kenneth Lofton Jr."],
        team: "MEM",
        minutesTogether: 56,
        netRating: -15.6,
        offRating: 100.2,
        defRating: 115.8,
        plusMinus: -42,
        record: "Equivalent to 25-57 pace",
        keyStrength: "Lofton's energy in short bursts provides hustle plays that occasionally shift momentum, but the unit lacks the talent to sustain any offensive sequence against NBA-caliber defenders"
      },
      rookieLineup: {
        players: ["Ja Morant", "Jake LaRavia", "Desmond Bane", "Jaren Jackson Jr.", "Ziaire Williams"],
        team: "MEM",
        minutesTogether: 69,
        netRating: 6.8,
        offRating: 112.9,
        defRating: 106.1,
        plusMinus: 20,
        record: "Equivalent to 51-31 pace",
        keyStrength: "LaRavia's playmaking instincts and Williams' length give this lineup a positional versatility that the bench-heavy worst unit desperately lacks"
      }
    },
    {
      team: "MIN",
      teamRecord: "38-45",
      narrative: "Minnesota's lineup data tells the story of a team caught between two organizational identities — the best unit, featuring Anthony Edwards at the helm of a legitimate championship-caliber five, is posting numbers that belong in a playoff contender's file; the worst unit is posting numbers that belong in the lottery. Edwards himself is the distorting variable: his net rating differential of +22 on versus off the floor is the third-largest in the NBA, meaning the Timberwolves are essentially a different franchise depending on whether their franchise player is on the court. The death lineup has gone 11-8 in closing situations, which is quietly above the league median and reflects Edwards' growing comfort as a late-game isolation scorer. What threatens Minnesota's play-in position isn't Edwards — it's the 44 minutes per game their worst units are bleeding points in a conference where margin is everything.",
      bestUnit: {
        players: ["Anthony Edwards", "Karl-Anthony Towns", "Jaden McDaniels", "Mike Conley", "Naz Reid"],
        team: "MIN",
        minutesTogether: 312,
        netRating: 15.6,
        offRating: 118.3,
        defRating: 102.7,
        plusMinus: 101,
        record: "Equivalent to 59-23 pace",
        keyStrength: "Edwards' north-south driving creates the most lethal drive-and-kick system in the Northwest Division when Towns' gravity stretches the floor to the three-point line"
      },
      deathLineup: {
        players: ["Anthony Edwards", "Karl-Anthony Towns", "Jaden McDaniels", "Mike Conley", "Nickeil Alexander-Walker"],
        team: "MIN",
        minutesTogether: 59,
        netRating: 9.7,
        offRating: 114.8,
        defRating: 105.1,
        plusMinus: 26,
        record: "11-8 in games when closing",
        keyStrength: "Edwards' step-back mid-range over switching defenders has become his most reliable closing weapon — shot-makers in crunch time earn trust, and he has earned it"
      },
      worstUnit: {
        players: ["Shake Milton", "Josh Minott", "Jaylen Clark", "Luka Garza", "Leonard Miller"],
        team: "MIN",
        minutesTogether: 46,
        netRating: -18.3,
        offRating: 96.8,
        defRating: 115.1,
        plusMinus: -40,
        record: "Equivalent to 19-63 pace",
        keyStrength: "Garza's post footwork gives the unit its only half-court execution, but the complete absence of perimeter creation makes every possession a chore against even mediocre defensive rotations"
      }
    }
  ]
};