// Lineup Intelligence — Weekly lineup analysis
// Last updated: August 24, 2026
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
  generatedDate: "August 24, 2026",
  weekLabel: "Week of August 24–30, 2026",

  leagueWideBest: [
    {
      players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Harrison Barnes", "Keldon Johnson"],
      team: "SAS",
      minutesTogether: 412,
      netRating: 22.4,
      offRating: 121.8,
      defRating: 99.4,
      plusMinus: 198,
      record: "Equivalent to 67-15 pace",
      keyStrength: "Wembanyama's rim gravity + Fox's transition velocity collapses defenses before they can load up — the most unguardable unit in basketball when running in space",
    },
    {
      players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
      team: "OKC",
      minutesTogether: 387,
      netRating: 19.7,
      offRating: 118.3,
      defRating: 98.6,
      plusMinus: 164,
      record: "Equivalent to 64-18 pace",
      keyStrength: "Dort and Holmgren form the league's most versatile two-man defensive shell, allowing SGA to gamble on steals without structural exposure — a defensive architecture with no clear analog",
    },
    {
      players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
      team: "NYK",
      minutesTogether: 356,
      netRating: 17.2,
      offRating: 117.6,
      defRating: 100.4,
      plusMinus: 131,
      record: "Equivalent to 59-23 pace",
      keyStrength: "Championship-forged cohesion — this exact five has played 356 minutes together and operates with the kind of positional interchangeability that only rings and adversity produce",
    },
    {
      players: ["Nikola Jokic", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Kentavious Caldwell-Pope"],
      team: "DEN",
      minutesTogether: 298,
      netRating: 16.1,
      offRating: 119.2,
      defRating: 103.1,
      plusMinus: 103,
      record: "Equivalent to 57-25 pace",
      keyStrength: "Jokic's playmaking from the elbow makes every cutter dangerous simultaneously — five players who know exactly where the ball is going before it leaves his hands",
    },
    {
      players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Devin Vassell", "Julian Champagnie"],
      team: "SAS",
      minutesTogether: 187,
      netRating: 15.8,
      offRating: 120.1,
      defRating: 104.3,
      plusMinus: 63,
      record: "Equivalent to 56-26 pace",
      keyStrength: "Wemby's shot-blocking radius and Castle's instinctive passing lanes make this second-unit hybrid the league's most dangerous switch to when closing minutes demand a change of pace",
    },
  ],

  biggestSurprise: {
    team: "HOU",
    description:
      "Houston's Alperen Sengun–Jabari Smith Jr. two-big closing lineup has posted a +18.4 net rating in crunch time — a number that would be extraordinary for any starting unit, let alone a late-game pairing most coaches would consider structurally vulnerable. The Rockets are daring opponents to attack the paint against Sengun while Smith cleans every miss, and the answer so far is that nobody can. It is the most counterintuitive elite lineup in the league and the one number that keeps Houston's front office honest at the extension table.",
  },

  teams: [
    // 1. OKC Thunder — 64-18
    {
      team: "OKC",
      teamRecord: "64-18",
      narrative:
        "Oklahoma City's best lineup is the cleanest organizational expression in the Western Conference — five players who know their role, execute it without ego, and defend at a level that makes opponents choose between two bad options on every possession. The SGA–Holmgren pick-and-roll is the league's most efficient two-man game when both defenders collapse, because Dort and Williams punish rotations from the weak side before the recovery arrives. The worst unit is a scheduling artifact: Tre Mann has logged significant garbage-time minutes against backups who inflate opponent offensive ratings, skewing the unit's defensive number in ways the coaching staff actively discounts. OKC's death lineup is the truest reflection of Mark Daigneault's philosophy — no ball-stopper, no hero, just five players running the same set they've run a thousand times.",
      bestUnit: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 387,
        netRating: 19.7,
        offRating: 118.3,
        defRating: 98.6,
        plusMinus: 164,
        record: "Equivalent to 64-18 pace",
        keyStrength: "Dort–Holmgren defensive tandem allows SGA to gamble on steals; Hartenstein's screen-setting generates the cleanest pick-and-roll looks SGA has ever operated from",
      },
      deathLineup: {
        players: ["Shai Gilgeous-Alexander", "Jalen Williams", "Luguentz Dort", "Chet Holmgren", "Aaron Wiggins"],
        team: "OKC",
        minutesTogether: 74,
        netRating: 14.9,
        offRating: 113.6,
        defRating: 98.7,
        plusMinus: 47,
        record: "18-6 in games when closing",
        keyStrength: "Wiggins replaces Hartenstein in closing minutes for a fifth shooter who keeps the floor spaced and denies easy rotations to SGA's driving lanes",
      },
      worstUnit: {
        players: ["Tre Mann", "Cason Wallace", "Ousmane Dieng", "Jaylin Williams", "Kenrich Williams"],
        team: "OKC",
        minutesTogether: 41,
        netRating: -9.8,
        offRating: 104.2,
        defRating: 114.0,
        plusMinus: -18,
        record: "Equivalent to 36-46 pace",
        keyStrength: "Developmental minutes unit — meaningful only as a roster-depth data point, not a competitive indicator",
      },
      rookieLineup: {
        players: ["Shai Gilgeous-Alexander", "Cason Wallace", "Ousmane Dieng", "Chet Holmgren", "Jaylin Williams"],
        team: "OKC",
        minutesTogether: 88,
        netRating: 6.4,
        offRating: 112.1,
        defRating: 105.7,
        plusMinus: 24,
        record: "Equivalent to 48-34 pace",
        keyStrength: "Dieng's length and shooting create second-unit separation that OKC's younger core can leverage without SGA carrying the load — a genuine developmental unit with competitive upside",
      },
    },

    // 2. SAS Spurs — 62-20
    {
      team: "SAS",
      teamRecord: "62-20",
      narrative:
        "San Antonio has constructed the most imposing lineup architecture in the NBA — two top-four Pulse Index players sharing the floor with a third who just graduated from signing-ceremony territory, and the collective unit data reflects every bit of that organizational achievement. The Wembanyama–Fox–Castle trident has logged 412 minutes together and produced a net rating that would lead the league by historical margin if sustained across a full season. The worst unit is the only meaningful caveat in San Antonio's lineup book: when Wembanyama sits and the second unit is asked to generate offense without a true creator at the five, the Spurs bleed points against switching defenses that take away Vassell's catch-and-shoot rhythms. That vulnerability is known and managed, but it is real. Pop's death lineup is a statement — Castle starts every closing possession with the ball, a vote of confidence that would have been stunning eighteen months ago and is now simply correct.",
      bestUnit: {
        players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Harrison Barnes", "Keldon Johnson"],
        team: "SAS",
        minutesTogether: 412,
        netRating: 22.4,
        offRating: 121.8,
        defRating: 99.4,
        plusMinus: 198,
        record: "Equivalent to 67-15 pace",
        keyStrength: "Wembanyama's shot-blocking radius makes every defensive rotation optional — opponents cannot attack the rim and cannot shoot over him from distance, a structural impossibility no other team imposes",
      },
      deathLineup: {
        players: ["Victor Wembanyama", "De'Aaron Fox", "Stephon Castle", "Devin Vassell", "Keldon Johnson"],
        team: "SAS",
        minutesTogether: 89,
        netRating: 18.3,
        offRating: 119.4,
        defRating: 101.1,
        plusMinus: 69,
        record: "22-4 in games when closing",
        keyStrength: "Castle's closing-minute handle removes the ball from Fox in transition and forces opponents to guard two different rhythm-setters — the Spurs have not lost a game decided by three or fewer when this five finishes",
      },
      worstUnit: {
        players: ["Blake Wesley", "Tre Jones", "Malaki Branham", "Julian Champagnie", "Charles Bassey"],
        team: "SAS",
        minutesTogether: 53,
        netRating: -11.2,
        offRating: 103.8,
        defRating: 115.0,
        plusMinus: -26,
        record: "Equivalent to 31-51 pace",
        keyStrength: "Pure development — this lineup exists to log minutes and accumulate film, not compete at the margin",
      },
      rookieLineup: {
        players: ["De'Aaron Fox", "Stephon Castle", "Devin Vassell", "Julian Champagnie", "Victor Wembanyama"],
        team: "SAS",
        minutesTogether: 187,
        netRating: 15.8,
        offRating: 120.1,
        defRating: 104.3,
        plusMinus: 63,
        record: "Equivalent to 56-26 pace",
        keyStrength: "Castle's integration into the starting five has been seamless — his decision-making beside Fox creates a backcourt that generates the same pace advantages without the defensive exposure younger rookies normally introduce",
      },
    },

    // 3. DEN Nuggets — 54-28
    {
      team: "DEN",
      teamRecord: "54-28",
      narrative:
        "Denver's lineup data tells two stories simultaneously, and the gap between them is the Murray situation rendered in plus-minus. The Jokic-anchored starting five with a healthy Murray is the fourth-best lineup in basketball by net rating — a historically connected unit that has been together long enough to operate on muscle memory. The closing lineup with Murray at reduced minutes tells a more complicated story: the defensive rating climbs two full points when Murray plays fewer than eighteen minutes, a data point Denver's front office is acutely aware of as negotiations stretch toward day ten. The worst unit confirms what scouts have noted all year — when Jokic rests and the Nuggets ask Reggie Jackson to create offense at the one, the offense stagnates at a rate that exposes Denver's roster depth concerns more honestly than any front-office statement. The Jokic–Gordon two-man game in short-roll coverage remains the most sophisticated defensive wrinkle in the West.",
      bestUnit: {
        players: ["Nikola Jokic", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Kentavious Caldwell-Pope"],
        team: "DEN",
        minutesTogether: 298,
        netRating: 16.1,
        offRating: 119.2,
        defRating: 103.1,
        plusMinus: 103,
        record: "Equivalent to 57-25 pace",
        keyStrength: "Jokic's playmaking IQ makes every cut pre-read — MPJ and KCP shooting off Jokic passes rather than manufactured catch-and-shoot situations elevates both players above their individual shot-creation ceilings",
      },
      deathLineup: {
        players: ["Nikola Jokic", "Jamal Murray", "Michael Porter Jr.", "Aaron Gordon", "Reggie Jackson"],
        team: "DEN",
        minutesTogether: 61,
        netRating: 11.4,
        offRating: 116.8,
        defRating: 105.4,
        plusMinus: 30,
        record: "14-9 in games when closing",
        keyStrength: "Jackson's closing-minute role is strictly ball-movement and spacing — Jokic runs every late-game set, and Jackson's presence keeps defenses from loading up on Gordon's cut-sealing",
      },
      worstUnit: {
        players: ["Reggie Jackson", "Christian Braun", "Peyton Watson", "Zeke Nnaji", "DeAndre Jordan"],
        team: "DEN",
        minutesTogether: 38,
        netRating: -13.6,
        offRating: 101.4,
        defRating: 115.0,
        plusMinus: -22,
        record: "Equivalent to 27-55 pace",
        keyStrength: "No identifiable competitive strength — a depth unit that underscores how thin Denver becomes when its top four sit simultaneously",
      },
    },

    // 4. NYK Knicks — 53-29
    {
      team: "NYK",
      teamRecord: "53-29",
      narrative:
        "New York's lineup data is the cleanest championship confirmation in the Eastern Conference — the starting five that won the title is also the best five-man unit by net rating, and the minutes together reflect a continuity of construction that Thibodeau has protected aggressively all season. Brunson and Towns have developed the most reliable high-ball-screen connection in the East, with Towns's shooting range forcing centers to step out and Brunson's downhill burst punishing every half-step of hesitation. The worst unit is an anomaly: the second unit's defensive rating craters when Mitchell Robinson logs heavy minutes alongside bench guards who cannot navigate his coverage limitations, a vulnerability that was papered over in the playoffs by favorable matchups but remains a structural note in the data. The closing lineup's 19-5 record in decided games is the organizational signature of a team that trusts its process in the final two minutes more than almost anyone in basketball.",
      bestUnit: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
        team: "NYK",
        minutesTogether: 356,
        netRating: 17.2,
        offRating: 117.6,
        defRating: 100.4,
        plusMinus: 131,
        record: "Equivalent to 59-23 pace",
        keyStrength: "Championship cohesion — this exact five has developed a defensive rotation language that functions without verbal communication, with Hart's off-ball activity disguising Brunson's gambling tendencies on the weak side",
      },
      deathLineup: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
        team: "NYK",
        minutesTogether: 92,
        netRating: 15.6,
        offRating: 116.2,
        defRating: 100.6,
        plusMinus: 61,
        record: "19-5 in games when closing",
        keyStrength: "Thibodeau does not change this lineup in close games — the same five that starts is the same five that closes, a philosophical statement about earned trust that the win record validates completely",
      },
      worstUnit: {
        players: ["Donte DiVincenzo", "Precious Achiuwa", "Mitchell Robinson", "Miles McBride", "Alec Burks"],
        team: "NYK",
        minutesTogether: 44,
        netRating: -10.4,
        offRating: 105.8,
        defRating: 116.2,
        plusMinus: -20,
        record: "Equivalent to 33-49 pace",
        keyStrength: "No reliable offensive creation — Robinson's coverage limitations become exposed when opponents isolate bench guards and dare the five-man unit to switch",
      },
    },

    // 5. HOU Rockets — 52-30
    {
      team: "HOU",
      teamRecord: "52-30",
      narrative:
        "Houston's lineup data is the most analytically provocative file in the Western Conference right now, and the Sengun–Smith closing pairing sits at the center of it. A +18.4 net rating in crunch time for a two-big lineup defies conventional wisdom about late-game spacing requirements, but the Rockets have made it work by surrounding both bigs with shooters who punish every recovery rotation before it can reset. Sengun's presence as the hub of the offense makes the entire structure function — his passing from the elbow turns a potentially crowded paint into a geometric advantage that creates clean corner threes rather than contested mid-range shots. The worst unit confirms the roster's remaining gap: without Sengun organizing the offense, Houston's bench guards cannot generate quality shots against set defenses, and the points come in trickles rather than flows. The extension standoff enters day nine with every number on the table pointing toward resolution — the lineup data makes Houston's organizational interest in retaining Sengun at market rate self-evident.",
      bestUnit: {
        players: ["Alperen Sengun", "Jabari Smith Jr.", "Jalen Green", "Fred VanVleet", "Dillon Brooks"],
        team: "HOU",
        minutesTogether: 334,
        netRating: 14.8,
        offRating: 116.4,
        defRating: 101.6,
        plusMinus: 106,
        record: "Equivalent to 55-27 pace",
        keyStrength: "Sengun's elbow passing makes Brooks and VanVleet corner threats rather than catch-and-shoot afterthoughts — the offense is genuinely easier for everyone when Sengun is the hub",
      },
      deathLineup: {
        players: ["Alperen Sengun", "Jabari Smith Jr.", "Jalen Green", "Fred VanVleet", "Amen Thompson"],
        team: "HOU",
        minutesTogether: 67,
        netRating: 18.4,
        offRating: 118.9,
        defRating: 100.5,
        plusMinus: 52,
        record: "16-8 in games when closing",
        keyStrength: "Thompson's athleticism and Sengun's rim gravity create a paint-and-perimeter dynamic that no late-game defense has solved — the most surprising closing lineup number in the NBA",
      },
      worstUnit: {
        players: ["Jeff Green", "Aaron Holiday", "Tari Eason", "Boban Marjanovic", "Cam Whitmore"],
        team: "HOU",
        minutesTogether: 36,
        netRating: -12.1,
        offRating: 102.3,
        defRating: 114.4,
        plusMinus: -19,
        record: "Equivalent to 30-52 pace",
        keyStrength: "Depth unit with no on-ball creator — exposes the drop-off in Houston's roster quality once Sengun and VanVleet exit simultaneously",
      },
    },

    // 6. MIN Timberwolves — 49-33
    {
      team: "MIN",
      teamRecord: "49-33",
      narrative:
        "Minnesota's lineup data reflects the organizational tension that the Pulse Index has tracked for nine days — Anthony Edwards is personally locked, individually dominant, and surrounded by a supporting cast whose extension sequencing creates enough ambient uncertainty to suppress the team's ceiling below what the talent level would otherwise suggest. The best unit functions at a high level when Rudy Gobert's defensive range covers for perimeter defenders taking necessary offensive risks, but the off-rating tells the real story: Minnesota ranks sixth in the West in offensive efficiency with their best lineup on the floor, a gap from the top two that is almost entirely explained by supporting-cast shot quality around Edwards. The worst unit is a Gobert-out disaster — the Timberwolves simply cannot defend the rim against quality opposition when their anchor is resting, and the data shows it without ambiguity. Edwards's personal numbers within every lineup remain elite; the team context is what limits the organizational picture.",
      bestUnit: {
        players: ["Anthony Edwards", "Mike Conley", "Jaden McDaniels", "Karl-Anthony Towns", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 318,
        netRating: 12.6,
        offRating: 114.8,
        defRating: 102.2,
        plusMinus: 86,
        record: "Equivalent to 53-29 pace",
        keyStrength: "Gobert's rim protection allows Jaden McDaniels to gamble on perimeter steals without defensive consequence — a structural freedom that elevates the entire unit's defensive ceiling",
      },
      deathLineup: {
        players: ["Anthony Edwards", "Mike Conley", "Jaden McDaniels", "Naz Reid", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 58,
        netRating: 10.2,
        offRating: 113.4,
        defRating: 103.2,
        plusMinus: 25,
        record: "13-11 in games when closing",
        keyStrength: "Reid replaces KAT in closing minutes for better defensive rebounding without sacrificing the stretch threat — a tactical adjustment that Finch makes consistently in games decided by five or fewer",
      },
      worstUnit: {
        players: ["Monte Morris", "Jordan McLaughlin", "Jaylen Clark", "Leonard Miller", "Luka Garza"],
        team: "MIN",
        minutesTogether: 33,
        netRating: -14.3,
        offRating: 100.6,
        defRating: 114.9,
        plusMinus: -21,
        record: "Equivalent to 25-57 pace",
        keyStrength: "No identifiable competitive strength — a depth-minimum lineup that exposes Minnesota's lack of quality depth behind the starting seven",
      },
    },

    // 7. LAC Clippers — 48-34
    {
      team: "LAC",
      teamRecord: "48-34",
      narrative:
        "Los Angeles's lineup data tells the story of a team that overperforms its talent quartile when its best five are healthy and underperforms dramatically when rotation disruptions force Ty Lue into improvisation. The Kawhi Leonard–Paul George frontcourt partnership, when both are available and engaged, generates a defensive versatility that makes the Clippers genuinely difficult to score on from the perimeter — and the net rating of that unit reflects it. The closing lineup is where the Clippers' organizational identity is most clearly expressed: Lue trusts James Harden in late-game possessions more than the advanced metrics suggest he should, but the record in decided games suggests Harden's pull-up three-point threat opens driving lanes for Leonard that the data may not fully capture. The worst unit is the roster's honest confession — depth past eight players is a genuine weakness, and the numbers in garbage time reflect a team that has not prioritized roster construction beyond its core.",
      bestUnit: {
        players: ["Kawhi Leonard", "Paul George", "James Harden", "Ivica Zubac", "Norman Powell"],
        team: "LAC",
        minutesTogether: 271,
        netRating: 13.4,
        offRating: 115.6,
        defRating: 102.2,
        plusMinus: 78,
        record: "Equivalent to 54-28 pace",
        keyStrength: "Leonard and George's defensive versatility allows Lue to switch every screen without conceding a size disadvantage — the most complete two-way wing pairing in the Western Conference",
      },
      deathLineup: {
        players: ["Kawhi Leonard", "Paul George", "James Harden", "Ivica Zubac", "Terance Mann"],
        team: "LAC",
        minutesTogether: 55,
        netRating: 11.8,
        offRating: 114.2,
        defRating: 102.4,
        plusMinus: 28,
        record: "14-10 in games when closing",
        keyStrength: "Mann's off-ball cutting and defensive versatility off the bench gives Lue a closing five that can guard four positions without a matchup liability — Harden's pull-up threat keeps closing defenses from loading toward Leonard",
      },
      worstUnit: {
        players: ["John Wall", "Amir Coffey", "Xavier Moon", "Moses Brown", "KJ Martin"],
        team: "LAC",
        minutesTogether: 29,
        netRating: -15.1,
        offRating: 99.8,
        defRating: 114.9,
        plusMinus: -19,
        record: "Equivalent to 22-60 pace",
        keyStrength: "No identifiable strength — a depth unit that reflects the Clippers' known roster construction gap beyond their eight-man rotation",
      },
    },

    // 8. PHX Suns — 47-35
    {
      team: "PHX",
      teamRecord: "47-35",
      narrative:
        "Phoenix's lineup data is a portrait of how a genuinely elite offensive engine can carry a team into the playoff tier while its defensive infrastructure remains structurally compromised. The Booker–Durant two-man game generates an off-rating that ranks fourth in the NBA when their best lineup is on the floor — and it does so without requiring either player to operate outside his comfort zone, which means the efficiency is sustainable rather than variance-driven. The closing lineup is where the Suns' identity is tested: Durant's post game in late-game isolation is the highest-percentage late-clock option in the league, and Phoenix runs it without hesitation, which simplifies their decision-making in a way that offensive-oriented teams rarely achieve. The worst unit is the architectural confession — the Suns have no reliable defensive big off the bench, and when Deandre Ayton rests against a second unit with a quality roll man, the paint gives up points at an alarming rate that the starting lineup's offensive efficiency can only partially offset.",
      bestUnit: {
        players: ["Kevin Durant", "Devin Booker", "Bradley Beal", "Deandre Ayton", "Grayson Allen"],
        team: "PHX",
        minutesTogether: 286,
        netRating: 11.9,
        offRating: 119.4,
        defRating: 107.5,
        plusMinus: 73,
        record: "Equivalent to 52-30 pace",
        keyStrength: "Durant and Booker's two-man game from the high post is the most efficient two-player offensive structure in the NBA — both players shoot above 45% off each other's creation and neither needs a screen to get a good look",
      },
      deathLineup: {
        players: ["Kevin Durant", "Devin Booker", "Bradley Beal", "Deandre Ayton", "Eric Gordon"],
        team: "PHX",
        minutesTogether: 48,
        netRating: 9.6,
        offRating: 117.8,
        defRating: 108.2,
        plusMinus: 20,
        record: "13-12 in games when closing",
        keyStrength: "Durant's post isolation is the Suns' primary late-game weapon — Gordon spaces the floor on the weak side and Ayton's offensive rebounding keeps possessions alive when Durant's pull-up falls short",
      },
      worstUnit: {
        players: ["Jordan Goodwin", "Damion Lee", "Saben Lee", "Bismack Biyombo", "Ish Wainright"],
        team: "PHX",
        minutesTogether: 31,
        netRating: -16.2,
        offRating: 98.4,
        defRating: 114.6,
        plusMinus: -22,
        record: "Equivalent to 20-62 pace",
        keyStrength: "No identifiable competitive strength — this lineup exists entirely to manage star minutes against opponents already conceding the game",
      },
    },

    // 9. MEM Grizzlies — 46-36
    {
      team: "MEM",
      teamRecord: "46-36",
      narrative:
        "Memphis's lineup data is the most encouraging developmental story in the Western Conference outside of San Antonio — a young core that has logged enough minutes together to generate genuine chemistry and a defensive identity that reflects Taylor Jenkins's system rather than individual talent alone. The Ja Morant–Jaren Jackson Jr. pairing continues to be the West's best kept lineup secret: their net rating when sharing the floor is ten points better than Memphis's overall team mark, a gap that reflects the compounding advantage of two players who have spent four years learning to play within each other's rhythms. The closing lineup is where Memphis still has work to do — Morant's late-game decision-making in half-court sets, specifically his tendency to seek his own shot before the shot clock forces a simpler read, remains the coaching staff's primary development target. The worst unit is the roster's age revealing itself: Memphis's ninth and tenth players have no business competing at NBA pace yet, which is by design and not a concern worth contextualizing as a competitive liability.",
      bestUnit: {
        players: ["Ja Morant", "Jaren Jackson Jr.", "Desmond Bane", "Brandon Clarke", "Luke Kennard"],
        team: "MEM",
        minutesTogether: 304,
        netRating: 13.2,
        offRating: 114.6,
        defRating: 101.4,
        plusMinus: 86,
        record: "Equivalent to 54-28 pace",
        keyStrength: "Jackson's shot-blocking and Morant's pace-setting create a defensive-to-offensive transition game that scores before opponents can set — the Grizzlies' best possession is the one that starts before the other team is ready",
      },
      deathLineup: {
        players: ["Ja Morant", "Jaren Jackson Jr.", "Desmond Bane", "Ziaire Williams", "Xavier Tillman"],
        team: "MEM",
        minutesTogether: 52,
        netRating: 8.4,
        offRating: 112.2,
        defRating: 103.8,
        plusMinus: 19,
        record: "11-13 in games when closing",
        keyStrength: "Williams's versatility gives Jenkins a closing lineup that can switch one through four without a size mismatch — a meaningful tactical upgrade over what Memphis could deploy in closing situations two years ago",
      },
      worstUnit: {
        players: ["John Konchar", "David Roddy", "Jake LaRavia", "Vince Williams Jr.", "Santi Aldama"],
        team: "MEM",
        minutesTogether: 39,
        netRating: -11.8,
        offRating: 103.2,
        defRating: 115.0,
        plusMinus: -20,
        record: "Equivalent to 30-52 pace",
        keyStrength: "Developmental minutes unit — Aldama's shooting is the one competitive element, but the lineup has no reliable ball-handler to create quality looks",
      },
      rookieLineup: {
        players: ["Ja Morant", "GG Jackson II", "Ziaire Williams", "Jaren Jackson Jr.", "Santi Aldama"],
        team: "MEM",
        minutesTogether: 96,
        netRating: 7.1,
        offRating: 111.4,
        defRating: 104.3,
        plusMinus: 29,
        record: "Equivalent to 49-33 pace",
        keyStrength: "GG Jackson's scoring aggression off the bench has made him a genuine rotation piece — his willingness to attack closeouts gives Morant a secondary creation option that Memphis lacked in this lineup configuration last season",
      },
    },

    // 10. SAC Kings — 44-38
    {
      team: "SAC",
      teamRecord: "44-38",
      narrative:
        "Sacramento's lineup data is the most conflicted analytical picture in the top ten — a team with the talent to crack fifty wins that has consistently underachieved against the data's implied ceiling, primarily because the De'Aaron Fox departure left an organizational wound that Domantas Sabonis's numbers alone cannot close. The best lineup's net rating is respectable but not elite for a team with Sabonis's caliber of passing at the five, and the explanation is straightforward: without a true first-option ball-handler who can create downhill threat off the dribble, Sacramento's offense asks Sabonis to do more than even his historic playmaking skill set was designed to carry. The closing lineup is the Kings' most pressing coaching challenge — Mike Brown has not found a reliable late-game ball-handler to operate the two-minute offense with consistency, and the record in games decided by three or fewer reflects it. The worst unit suggests that once Sabonis rests, the organizational depth drops faster than any other playoff team in the West.",
      bestUnit: {
        players: ["Domantas Sabonis", "Keegan Murray", "Kevin Huerter", "Malik Monk", "Harrison Barnes"],
        team: "SAC",
        minutesTogether: 276,
        netRating: 10.4,
        offRating: 113.6,
        defRating: 103.2,
        plusMinus: 62,
        record: "Equivalent to 50-32 pace",
        keyStrength: "Sabonis's passing vision from the elbows makes Murray and Huerter's off-ball movement dangerous — three capable shooters surrounding a facilitating big is the offense's most reliable structural advantage",
      },
      deathLineup: {
        players: ["Domantas Sabonis", "Keegan Murray", "Kevin Huerter", "Malik Monk", "Trey Lyles"],
        team: "SAC",
        minutesTogether: 43,
        netRating: 6.8,
        offRating: 111.4,
        defRating: 104.6,
        plusMinus: 13,
        record: "9-15 in games when closing",
        keyStrength: "Lyles's closing-minute role is stretch and screen — he gives Monk a pick-and-roll option that Sacramento runs when defenses load up on Sabonis's isolation game in the final two minutes",
      },
      worstUnit: {
        players: ["Terence Davis", "Chimezie Metu", "Louis King", "Neemias Queta", "Jordan Ford"],
        team: "SAC",
        minutesTogether: 28,
        netRating: -13.7,
        offRating: 101.6,
        defRating: 115.3,
        plusMinus: -17,
        record: "Equivalent to 26-56 pace",
        keyStrength: "No identifiable competitive strength — this unit confirms Sacramento's roster construction leaves almost no margin for error when the rotation is disrupted beyond the starting seven",
      },
      newLookLineup: {
        players: ["Domantas Sabonis", "Keegan Murray", "DeMar DeRozan", "Malik Monk", "Harrison Barnes"],
        team: "SAC",
        minutesTogether: 114,
        netRating: 9.1,
        offRating: 114.8,
        defRating: 105.7,
        plusMinus: 44,
        record: "Equivalent to 50-32 pace",
        keyStrength: "DeRozan's mid-range creation beside Sabonis's passing gives Sacramento a two-man half-court game that opponents cannot ignore — the acquisition has added a shot-creation layer that Monk and Huerter cannot replicate off the dribble",
      },
    },
  ],
};