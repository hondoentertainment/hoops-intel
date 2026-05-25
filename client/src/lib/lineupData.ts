// Lineup Intelligence — Weekly lineup analysis
// Last updated: May 25, 2026
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
  generatedDate: "May 25, 2026",
  weekLabel: "Week of May 25–31, 2026",

  leagueWideBest: [
    {
      players: ["De'Aaron Fox", "Stephon Castle", "Julian Champagnie", "Harrison Barnes", "Victor Wembanyama"],
      team: "SAS",
      minutesTogether: 387,
      netRating: 22.4,
      offRating: 121.8,
      defRating: 99.4,
      plusMinus: +148,
      record: "Equivalent to 68-14 pace",
      keyStrength: "Wembanyama's gravity creates open threes for Castle and Champagnie while Fox attacks closeouts — a five-man unit with no stoppable option.",
    },
    {
      players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
      team: "NYK",
      minutesTogether: 412,
      netRating: 19.7,
      offRating: 119.3,
      defRating: 99.6,
      plusMinus: +138,
      record: "Equivalent to 65-17 pace",
      keyStrength: "Hart's relentless offensive rebounding and Towns' passing from the elbow combine with Brunson's isolation scoring to give the Knicks three distinct paths to a basket.",
    },
    {
      players: ["Shai Gilgeous-Alexander", "Jared McCain", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
      team: "OKC",
      minutesTogether: 398,
      netRating: 18.3,
      offRating: 118.6,
      defRating: 100.3,
      plusMinus: +124,
      record: "Equivalent to 64-18 pace",
      keyStrength: "The league's most suffocating defensive five when Dort and Holmgren are both active — opponents score under 100 points per 100 possessions against this group.",
    },
    {
      players: ["Tyrese Haliburton", "Andrew Nembhard", "Pascal Siakam", "Myles Turner", "Bennedict Mathurin"],
      team: "IND",
      minutesTogether: 341,
      netRating: 16.9,
      offRating: 117.4,
      defRating: 100.5,
      plusMinus: +97,
      record: "Equivalent to 62-20 pace",
      keyStrength: "Haliburton and Nembhard's two-point-guard looks create the league's best drive-and-kick offense — defenses collapse on Haliburton and Mathurin punishes them from the corners.",
    },
    {
      players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Payton Pritchard"],
      team: "BOS",
      minutesTogether: 358,
      netRating: 15.8,
      offRating: 116.2,
      defRating: 100.4,
      plusMinus: +96,
      record: "Equivalent to 60-22 pace",
      keyStrength: "Horford at the five allows Pritchard's shooting to stretch the floor to five positions — when Holiday locks up the opponent's primary creator, Boston's defense approaches historically elite territory.",
    },
  ],

  biggestSurprise: {
    team: "SAS",
    description:
      "Stephon Castle's closing lineup has outscored opponents by 31 points in 47 playoff minutes — a net rating of +21.7 that no analyst projected from a 20-year-old point guard in his first postseason. Castle's ability to eliminate turnovers under pressure (just 3 in 6 playoff games) while running San Antonio's late-game sets suggests Gregg Popovich has found his succession plan at point guard far ahead of schedule.",
  },

  teams: [
    // ─── OKC (64-18) ────────────────────────────────────────────────────────────
    {
      team: "OKC",
      teamRecord: "64-18",
      narrative:
        "Oklahoma City's identity is built on Shai Gilgeous-Alexander's isolation mastery paired with the most disciplined team defense in the Western Conference, but Game 4 of the WCF exposed a troubling trend: when San Antonio's switching scheme takes SGA off rhythm, the Thunder have no secondary engine capable of generating quality looks. Jared McCain's Game 3 explosion (+28, 24 points) proved the upside exists, but his disappearing act in Game 4 revealed that San Antonio has already solved him. The Dort–Holmgren defensive pairing remains the unit's saving grace — opponents post a 98.4 defensive rating against that duo — but OKC's offense cannot survive a second straight SGA-neutralization game in the WCF. If McCain does not establish himself as a genuine second option in Game 5, the Thunder's 64-win regular season will end at the conference finals for the second consecutive year.",

      bestUnit: {
        players: ["Shai Gilgeous-Alexander", "Jared McCain", "Luguentz Dort", "Chet Holmgren", "Isaiah Hartenstein"],
        team: "OKC",
        minutesTogether: 398,
        netRating: 18.3,
        offRating: 118.6,
        defRating: 100.3,
        plusMinus: +124,
        record: "Equivalent to 64-18 pace",
        keyStrength: "Holmgren's rim protection anchors a defense that holds opponents under 100 points per 100 possessions while SGA's isolation creates consistent high-quality offense.",
      },

      deathLineup: {
        players: ["Shai Gilgeous-Alexander", "Jared McCain", "Luguentz Dort", "Chet Holmgren", "Aaron Wiggins"],
        team: "OKC",
        minutesTogether: 61,
        netRating: 11.2,
        offRating: 114.8,
        defRating: 103.6,
        plusMinus: +23,
        record: "9-4 in games when closing",
        keyStrength: "Wiggins replaces Hartenstein to add a third wing defender in crunch time — this lineup surrenders nothing at the rim and forces opponents into contested mid-range attempts.",
      },

      worstUnit: {
        players: ["Isaiah Joe", "Cason Wallace", "Kenrich Williams", "Jaylin Williams", "Ousmane Dieng"],
        team: "OKC",
        minutesTogether: 44,
        netRating: -14.7,
        offRating: 102.3,
        defRating: 117.0,
        plusMinus: -21,
        record: "Equivalent to 26-56 pace",
        keyStrength: "No discernible strength — this garbage-time unit lacks a single shot creator and opponents exploit Dieng's lateral quickness deficiencies mercilessly.",
      },

      rookieLineup: {
        players: ["Shai Gilgeous-Alexander", "Jared McCain", "Luguentz Dort", "Aaron Wiggins", "Chet Holmgren"],
        team: "OKC",
        minutesTogether: 187,
        netRating: 13.4,
        offRating: 115.9,
        defRating: 102.5,
        plusMinus: +85,
        record: "Equivalent to 60-22 pace",
        keyStrength: "McCain's off-ball movement and catch-and-shoot gravity alongside SGA creates a two-man game that defenses cannot crowd — his 24-point Game 3 was the blueprint.",
      },
    },

    // ─── SAS (62-20) ────────────────────────────────────────────────────────────
    {
      team: "SAS",
      teamRecord: "62-20",
      narrative:
        "San Antonio's Game 4 performance was the most complete team statement of the 2026 playoffs — Wembanyama's 31/18/5 was the headline, but the real story was how every piece fit around him simultaneously. Castle bounced back from his two-game shooting nightmare, Fox managed the game with a decisiveness that was absent in Games 2 and 3, and San Antonio's defensive switching scheme — the same scheme that neutralized SGA — held OKC's entire roster below their averages. The Spurs' best lineup now posts a +22.4 net rating in playoff minutes, the highest of any five-man unit still active in the postseason. The question heading into Game 5 is whether this is a program that has fully arrived or a team capable of one great performance every two games — Wembanyama's answer in Game 4 was unambiguous.",

      bestUnit: {
        players: ["De'Aaron Fox", "Stephon Castle", "Julian Champagnie", "Harrison Barnes", "Victor Wembanyama"],
        team: "SAS",
        minutesTogether: 387,
        netRating: 22.4,
        offRating: 121.8,
        defRating: 99.4,
        plusMinus: +148,
        record: "Equivalent to 68-14 pace",
        keyStrength: "Wembanyama's gravity is indefensible — this lineup generates the most corner-three attempts in the WCF because every closeout is a forced choice between stopping Fox's drive or Champagnie's release.",
      },

      deathLineup: {
        players: ["De'Aaron Fox", "Stephon Castle", "Harrison Barnes", "Keldon Johnson", "Victor Wembanyama"],
        team: "SAS",
        minutesTogether: 47,
        netRating: 21.7,
        offRating: 120.4,
        defRating: 98.7,
        plusMinus: +31,
        record: "11-5 in games when closing",
        keyStrength: "Johnson replaces Champagnie for a second physical wing who can guard multiple positions — this lineup won the final four minutes of Game 4 and has not been outscored in WCF crunch time.",
      },

      worstUnit: {
        players: ["Blake Wesley", "Tre Jones", "Sidy Cissoko", "Charles Bassey", "Malaki Branham"],
        team: "SAS",
        minutesTogether: 38,
        netRating: -16.2,
        offRating: 99.8,
        defRating: 116.0,
        plusMinus: -20,
        record: "Equivalent to 22-60 pace",
        keyStrength: "Youth and energy are the only offerings — this unit clocks in at an average age of 21.4 and has not yet developed the off-ball discipline to punish playoff defenses.",
      },

      rookieLineup: {
        players: ["Stephon Castle", "De'Aaron Fox", "Julian Champagnie", "Harrison Barnes", "Victor Wembanyama"],
        team: "SAS",
        minutesTogether: 219,
        netRating: 19.8,
        offRating: 120.1,
        defRating: 100.3,
        plusMinus: +107,
        record: "Equivalent to 65-17 pace",
        keyStrength: "Castle's bounce-back Game 4 is the proof of concept — when he attacks downhill instead of settling for pull-up threes, this lineup's floor-spacing becomes impossible to guard.",
      },
    },

    // ─── NYK (53-29) ────────────────────────────────────────────────────────────
    {
      team: "NYK",
      teamRecord: "53-29",
      narrative:
        "New York's 3-0 ECF lead is built on the most balanced five-man offensive attack in the Eastern Conference — four players capable of creating their own shot and a fifth (Josh Hart) who turns every offensive rebound into a secondary possession that Cleveland simply cannot sustain. Brunson's zero-turnover Game 2 was the intellectual blueprint: take what the defense gives, share the ball early, and let Bridges and Anunoby punish every closeout decision Cleveland makes. The death lineup's +19.7 net rating in crunch-time minutes is the best of any remaining postseason team, and tonight's potential clinch game at Cleveland represents Brunson's clearest opportunity to cement his Playoff MVP case before a national audience. The Knicks' only vulnerability remains their second unit — when Brunson and the starters rest, Cleveland has found brief windows to manufacture momentum, but the starting five has been ruthless enough to erase those deficits every time.",

      bestUnit: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
        team: "NYK",
        minutesTogether: 412,
        netRating: 19.7,
        offRating: 119.3,
        defRating: 99.6,
        plusMinus: +138,
        record: "Equivalent to 65-17 pace",
        keyStrength: "Four legitimate isolation options force defenses into impossible rotations — Hart's offensive rebounding adds a fifth possession per game that functions as a free-throw equivalent.",
      },

      deathLineup: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Josh Hart"],
        team: "NYK",
        minutesTogether: 74,
        netRating: 22.1,
        offRating: 121.7,
        defRating: 99.6,
        plusMinus: +48,
        record: "13-3 in games when closing",
        keyStrength: "The same five that starts is the same five that closes — no lineup change, no rotation adjustment, no second-guessing. Tom Thibodeau's trust in this group is their greatest psychological weapon.",
      },

      worstUnit: {
        players: ["Miles McBride", "Precious Achiuwa", "Bojan Bogdanovic", "Landry Shamet", "Jericho Sims"],
        team: "NYK",
        minutesTogether: 52,
        netRating: -13.1,
        offRating: 103.4,
        defRating: 116.5,
        plusMinus: -23,
        record: "Equivalent to 28-54 pace",
        keyStrength: "Bogdanovic's floor spacing is the lone weapon — this unit cannot defend any 1-4 pick-and-roll sequence reliably and Cleveland has exploited every minute it's played.",
      },

      newLookLineup: {
        players: ["Jalen Brunson", "Mikal Bridges", "OG Anunoby", "Karl-Anthony Towns", "Precious Achiuwa"],
        team: "NYK",
        minutesTogether: 89,
        netRating: 9.3,
        offRating: 113.2,
        defRating: 103.9,
        plusMinus: +28,
        record: "Equivalent to 55-27 pace",
        keyStrength: "Achiuwa's physicality allows Thibodeau to rest Hart in less critical moments while keeping Towns at the five — a functional bridge unit that has not been exploited in the ECF.",
      },
    },

    // ─── BOS (60-22) ────────────────────────────────────────────────────────────
    {
      team: "BOS",
      teamRecord: "60-22",
      narrative:
        "Boston's postseason exit means this lineup analysis is a retrospective, but the Celtics' data remains the most instructive in the league for understanding what a championship-caliber unit looks like at its ceiling. The Tatum–Brown–Holiday–Horford–Pritchard lineup posted a +15.8 net rating across 358 playoff minutes and held opponents to 100.4 points per 100 possessions — a mark that would rank third in the regular season. Horford's continued effectiveness as a drop coverage anchor at age 40 is the league's most underappreciated lineup secret, and the Celtics' inability to replicate this unit's performance when White replaced Holiday reveals just how irreplaceable Holiday's defensive assignments have become to Boston's structure. The question for next season is whether this core is a championship contender that ran into Wembanyama's ceiling or a team whose window has quietly begun to close.",

      bestUnit: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Payton Pritchard"],
        team: "BOS",
        minutesTogether: 358,
        netRating: 15.8,
        offRating: 116.2,
        defRating: 100.4,
        plusMinus: +96,
        record: "Equivalent to 60-22 pace",
        keyStrength: "Horford's drop coverage and Holiday's point-of-attack defense create a defensive structure that forces opponents into contested pull-up jumpers — the exact shot Boston wants to surrender.",
      },

      deathLineup: {
        players: ["Jayson Tatum", "Jaylen Brown", "Jrue Holiday", "Al Horford", "Sam Hauser"],
        team: "BOS",
        minutesTogether: 68,
        netRating: 13.4,
        offRating: 115.8,
        defRating: 102.4,
        plusMinus: +31,
        record: "10-6 in games when closing",
        keyStrength: "Hauser's shooting (44.1% from three this season) stretches the floor enough to create driving lanes for Tatum and Brown — a reliable crunch-time configuration that Boston trusts unconditionally.",
      },

      worstUnit: {
        players: ["Payton Pritchard", "Jordan Walsh", "Sam Hauser", "Luke Kornet", "Neemias Queta"],
        team: "BOS",
        minutesTogether: 47,
        netRating: -12.8,
        offRating: 104.1,
        defRating: 116.9,
        plusMinus: -20,
        record: "Equivalent to 29-53 pace",
        keyStrength: "Pritchard's three-point volume is the only consistent threat — this lineup is catastrophically undersized and opponents attack Queta and Kornet on consecutive possessions without fail.",
      },
    },

    // ─── IND (57-25) ────────────────────────────────────────────────────────────
    {
      team: "IND",
      teamRecord: "57-25",
      narrative:
        "Indiana's two-point-guard lineups have quietly become the most analytically interesting construction in the Eastern Conference — when Haliburton and Nembhard share the floor, the Pacers generate more catch-and-shoot corner threes than any other backcourt pairing in the league, and Mathurin's willingness to spot up in the dunker spot while Siakam operates from the high post gives Indiana a five-out threat that bigger, slower rosters cannot keep up with. Myles Turner's screen-and-roll chemistry with Haliburton has reached its peak efficiency this season, with Turner converting 68.4% of his pick-and-roll dives when Haliburton is the ball handler. The Pacers' ceiling is directly proportional to Haliburton's health — their worst unit, featuring backup centers and off-bench wings, ranks among the most exploitable in the conference and represents a legitimate reason why Indiana has not yet pushed into the Finals conversation despite their record.",

      bestUnit: {
        players: ["Tyrese Haliburton", "Andrew Nembhard", "Pascal Siakam", "Myles Turner", "Bennedict Mathurin"],
        team: "IND",
        minutesTogether: 341,
        netRating: 16.9,
        offRating: 117.4,
        defRating: 100.5,
        plusMinus: +97,
        record: "Equivalent to 62-20 pace",
        keyStrength: "The league's most efficient two-point-guard look — Haliburton and Nembhard create so many kick-ahead opportunities that Indiana ranks second in corner-three attempts when this unit is on the floor.",
      },

      deathLineup: {
        players: ["Tyrese Haliburton", "Andrew Nembhard", "Pascal Siakam", "Myles Turner", "Aaron Nesmith"],
        team: "IND",
        minutesTogether: 58,
        netRating: 14.2,
        offRating: 115.6,
        defRating: 101.4,
        plusMinus: +28,
        record: "10-5 in games when closing",
        keyStrength: "Nesmith's physicality replaces Mathurin's youth in crunch time — he contests without fouling and has not committed a late-game foul in six straight playoff appearances.",
      },

      worstUnit: {
        players: ["T.J. McConnell", "Kendall Brown", "Isaiah Jackson", "James Wiseman", "Ben Sheppard"],
        team: "IND",
        minutesTogether: 41,
        netRating: -15.3,
        offRating: 101.2,
        defRating: 116.5,
        plusMinus: -21,
        record: "Equivalent to 24-58 pace",
        keyStrength: "McConnell's activity level is the sole positive — this lineup has no reliable jump shooter and opponents switch everything without consequence against this personnel.",
      },
    },

    // ─── CLE (52-30) ────────────────────────────────────────────────────────────
    {
      team: "CLE",
      teamRecord: "52-30",
      narrative:
        "Cleveland's ECF collapse is the most statistically damning team-level lineup story of the 2026 postseason. The Cavaliers' starting five posts a +8.3 net rating in non-crunch regular-season minutes but a catastrophic -18.4 net rating in ECF crunch time — a 26.7-point swing that represents a complete system failure under pressure. Mitchell's -53 cumulative plus/minus while scoring 78 ECF points is the arithmetic proof of a team that generates points without generating wins, and Evan Mobley's inability to contain Karl-Anthony Towns in a five-out alignment has been Cleveland's single most exploited structural weakness. Garland's playmaking has been the one genuine bright spot — he posts a +4.1 net rating with Mitchell off the floor — but tonight's elimination game at home is Cleveland's last opportunity to prove these three Conference Finals games were an aberration rather than a verdict.",

      bestUnit: {
        players: ["Darius Garland", "Donovan Mitchell", "Evan Mobley", "Jarrett Allen", "Isaac Okoro"],
        team: "CLE",
        minutesTogether: 374,
        netRating: 8.3,
        offRating: 112.4,
        defRating: 104.1,
        plusMinus: +52,
        record: "Equivalent to 55-27 pace",
        keyStrength: "Allen and Mobley's two-big defensive scheme protects the rim as effectively as any frontcourt in the East — the problem is New York's five-out offense has made this scheme irrelevant in the ECF.",
      },

      deathLineup: {
        players: ["Darius Garland", "Donovan Mitchell", "Evan Mobley", "Jarrett Allen", "Max Strus"],
        team: "CLE",
        minutesTogether: 63,
        netRating: -18.4,
        offRating: 107.2,
        defRating: 125.6,
        plusMinus: -39,
        record: "3-11 in games when closing",
        keyStrength: "Strus' three-point shooting is the designed solution — the execution has been the problem. This lineup has been outscored by 39 points in ECF crunch-time minutes and has not yet solved New York's switching scheme.",
      },

      worstUnit: {
        players: ["Ty Jerome", "Craig Porter Jr.", "Georges Niang", "Dean Wade", "Tristan Thompson"],
        team: "CLE",
        minutesTogether: 39,
        netRating: -17.9,
        offRating: 100.4,
        defRating: 118.3,
        plusMinus: -24,
        record: "Equivalent to 22-60 pace",
        keyStrength: "Niang's catch-and-shoot three-point volume is the only threat opponents respect — this unit functions exclusively as a clock-management tool and has been destroyed against playoff-caliber second units.",
      },

      newLookLineup: {
        players: ["Darius Garland", "Donovan Mitchell", "Isaac Okoro", "Evan Mobley", "Sam Merrill"],
        team: "CLE",
        minutesTogether: 76,
        netRating: 4.7,
        offRating: 110.8,
        defRating: 106.1,
        plusMinus: +12,
        record: "Equivalent to 52-30 pace",
        keyStrength: "Merrill's shooting off screens creates the spacing that Allen's two-big look lacks — this lineup has been Cleveland's most functional against New York's switching defense and deserves more minutes in Game 4.",
      },
    },

    // ─── MIL (49-33) ────────────────────────────────────────────────────────────
    {
      team: "MIL",
      teamRecord: "49-33",
      narrative:
        "Milwaukee's season ended in the second round, but the Bucks' lineup data tells a story that will define their offseason decisions more than any individual statistic. Giannis Antetokounmpo's best lineup — when flanked by Damian Lillard, Khris Middleton, Bobby Portis, and Brook Lopez — posts a +12.4 net rating that ranks among the league's best, but that lineup played just 187 minutes together all season because Middleton's health and Lillard's shoulder both limited their concurrent availability. The Bucks are one consistent injury-free season away from being the Eastern Conference's most dangerous team, but their depth is so thin that their worst lineup is also the most exploitable in the conference. Milwaukee's offseason calculus is binary: retool the depth or trust that this core's ceiling — when healthy — justifies another run.",

      bestUnit: {
        players: ["Damian Lillard", "Khris Middleton", "Giannis Antetokounmpo", "Bobby Portis", "Brook Lopez"],
        team: "MIL",
        minutesTogether: 187,
        netRating: 12.4,
        offRating: 116.8,
        defRating: 104.4,
        plusMinus: +78,
        record: "Equivalent to 58-24 pace",
        keyStrength: "Giannis' drive-and-kick is most lethal with Middleton's mid-post scoring — defenses cannot decide which threat to prioritize and Lopez's three-point shooting from the nail punishes every help rotation.",
      },

      deathLineup: {
        players: ["Damian Lillard", "Khris Middleton", "Giannis Antetokounmpo", "Malik Beasley", "Brook Lopez"],
        team: "MIL",
        minutesTogether: 54,
        netRating: 7.8,
        offRating: 114.2,
        defRating: 106.4,
        plusMinus: +14,
        record: "8-7 in games when closing",
        keyStrength: "Beasley's off-ball shooting replaces Portis' physicality in crunch time — this lineup sacrifices offensive rebounding for a cleaner floor that gives Lillard and Giannis more direct driving lanes.",
      },

      worstUnit: {
        players: ["A.J. Green", "MarJon Beauchamp", "Pat Connaughton", "Thanasis Antetokounmpo", "Robin Lopez"],
        team: "MIL",
        minutesTogether: 43,
        netRating: -18.6,
        offRating: 98.7,
        defRating: 117.3,
        plusMinus: -27,
        record: "Equivalent to 19-63 pace",
        keyStrength: "There is no strength — this lineup's only function is to give Giannis and Lillard rest and hope opponents are distracted enough not to score on every possession, which they reliably are not.",
      },
    },

    // ─── DEN (48-34) ────────────────────────────────────────────────────────────
    {
      team: "DEN",
      teamRecord: "48-34",
      narrative:
        "Denver's lineup data is a study in the limits of a single-superstar system. Nikola Jokić's best lineup — when surrounded by Jamal Murray, Michael Porter Jr., Aaron Gordon, and Kentavious Caldwell-Pope — remains one of the most analytically sophisticated five-man units in basketball, generating points through movement and positioning rather than athleticism. But without Murray, who missed 24 games this season, Denver's net rating drops from +9.4 to +1.2 — the largest single-player dependency swing in the Western Conference. The Nuggets' inability to advance past the second round reflects a roster construction that has not evolved around Jokić's genius: they need two more point-of-attack defenders and a reliable secondary playmaker, not a sixth man who mirrors Murray's skill set at 60% efficiency.",

      bestUnit: {
        players: ["Jamal Murray", "Kentavious Caldwell-Pope", "Michael Porter Jr.", "Aaron Gordon", "Nikola Jokić"],
        team: "DEN",
        minutesTogether: 421,
        netRating: 14.1,
        offRating: 118.3,
        defRating: 104.2,
        plusMinus: +98,
        record: "Equivalent to 60-22 pace",
        keyStrength: "Jokić's passing from the elbow with MPJ spotting up at the arc and Gordon crashing the glass is the most reliably efficient offensive pattern in the Western Conference — defenses have no clean answer.",
      },

      deathLineup: {
        players: ["Jamal Murray", "Kentavious Caldwell-Pope", "Michael Porter Jr.", "Aaron Gordon", "Nikola Jokić"],
        team: "DEN",
        minutesTogether: 71,
        netRating: 11.7,
        offRating: 116.4,
        defRating: 104.7,
        plusMinus: +28,
        record: "11-8 in games when closing",
        keyStrength: "The starting five closes games because Denver has no better option — but this group's poise in late-game Jokić post-ups is genuine, with a 58.3% points-per-possession rate in crunch-time possessions.",
      },

      worstUnit: {
        players: ["Reggie Jackson", "Julian Strawther", "Peyton Watson", "Zeke Nnaji", "DeAndre Jordan"],
        team: "DEN",
        minutesTogether: 36,
        netRating: -16.4,
        offRating: 100.8,
        defRating: 117.2,
        plusMinus: -19,
        record: "Equivalent to 23-59 pace",
        keyStrength: "Strawther's three-point shooting provides occasional spark, but this lineup is defensively incoherent — opponents post up Jordan and Nnaji interchangeably and score on 71% of such possessions.",
      },
    },

    // ─── LAL (46-36) ────────────────────────────────────────────────────────────
    {
      team: "LAL",
      teamRecord: "46-36",
      narrative:
        "Los Angeles' lineup story this season is entirely about the three-week stretch when LeBron James, Anthony Davis, and Austin Reaves were simultaneously healthy and in form — during that stretch, the Lakers' best five-man unit posted a +16.8 net rating and the offense reached 119.2 points per 100 possessions, numbers that would place them among the West's elite. The problem is that stretch lasted 22 games and the Lakers finished 46-36. Davis' durability — or lack thereof — is the defining variable in every lineup calculation Los Angeles makes, and their death lineup's 4-9 crunch-time record reflects what happens when a team built around a fragile superstar reaches the end of games without him. The Lakers' front office faces the same structural question it has faced for three seasons: can this version of this roster win 50 games and make noise in April, or is a full rebuild the more honest path forward?",

      bestUnit: {
        players: ["LeBron James", "Austin Reaves", "Anthony Davis", "Rui Hachimura", "D'Angelo Russell"],
        team: "LAL",
        minutesTogether: 298,
        netRating: 11.8,
        offRating: 115.6,
        defRating: 103.8,
        plusMinus: +59,
        record: "Equivalent to 57-25 pace",
        keyStrength: "LeBron's court vision and Davis' two-way dominance create an offense-defense synergy that no other Laker pairing replicates — when both are engaged, this lineup is genuinely threatening.",
      },

      deathLineup: {
        players: ["LeBron James", "Austin Reaves", "Anthony Davis", "Jarred Vanderbilt", "Gabe Vincent"],
        team: "LAL",
        minutesTogether: 49,
        netRating: 3.4,
        offRating: 110.2,
        defRating: 106.8,
        plusMinus: +6,
        record: "4-9 in games when closing",
        keyStrength: "Vanderbilt's physical defense and Vincent's off-ball movement are the right concepts — the execution in late-game situations has been inconsistent, particularly when Davis is limited by foul trouble.",
      },

      worstUnit: {
        players: ["Spencer Dinwiddie", "Cam Reddish", "Maxwell Lewis", "Wenyen Gabriel", "Christian Wood"],
        team: "LAL",
        minutesTogether: 42,
        netRating: -17.2,
        offRating: 101.3,
        defRating: 118.5,
        plusMinus: -24,
        record: "Equivalent to 21-61 pace",
        keyStrength: "Reddish's length creates occasional contest opportunities on defense, but this unit has no ball handler capable of generating a quality mid-game shot against a set defense.",
      },
    },

    // ─── MIN (45-37) ────────────────────────────────────────────────────────────
    {
      team: "MIN",
      teamRecord: "45-37",
      narrative:
        "Minnesota's season is a cautionary tale about what happens when a franchise-defining trade creates lineup chemistry problems that take an entire season to resolve. The Rudy Gobert–Julius Randle frontcourt pairing has been analytically inconsistent — exceptional on paper, clunky in execution — primarily because Randle's mid-post isolation tendencies conflict with Gobert's requirement for paint presence and screening angles. The bright spot has been Anthony Edwards, whose best lineup now posts a +13.7 net rating when paired with Mike Conley and Jaden McDaniels — a configuration that lets Edwards operate in transition and isolation without the half-court traffic that Randle's game generates. Minnesota's offseason question is straightforward and uncomfortable: is Randle the right co-star for Anthony Edwards, or did they trade for the wrong player?",

      bestUnit: {
        players: ["Anthony Edwards", "Mike Conley", "Jaden McDaniels", "Julius Randle", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 367,
        netRating: 10.3,
        offRating: 113.8,
        defRating: 103.5,
        plusMinus: +64,
        record: "Equivalent to 55-27 pace",
        keyStrength: "Gobert's screening and McDaniels' switchability create a defensive identity that complements Edwards' offensive burst — Conley's two-man game with Gobert remains the league's most reliable pick-and-roll pairing.",
      },

      deathLineup: {
        players: ["Anthony Edwards", "Mike Conley", "Jaden McDaniels", "Naz Reid", "Rudy Gobert"],
        team: "MIN",
        minutesTogether: 56,
        netRating: 8.6,
        offRating: 112.4,
        defRating: 103.8,
        plusMinus: +16,
        record: "8-8 in games when closing",
        keyStrength: "Reid replaces Randle's mid-post isolation with pick-and-pop shooting and rim running — a more versatile crunch-time option that gives Edwards cleaner driving lanes in the final minutes.",
      },

      worstUnit: {
        players: ["Nickeil Alexander-Walker", "Josh Minott", "Leonard Miller", "Luka Garza", "Monte Morris"],
        team: "MIN",
        minutesTogether: 35,
        netRating: -19.1,
        offRating: 98.4,
        defRating: 117.5,
        plusMinus: -22,
        record: "Equivalent to 18-64 pace",
        keyStrength: "Miller's length provides token rim protection — this lineup cannot create a quality offensive possession against any playoff-caliber defense and exists purely as a rest-the-starters configuration.",
      },
    },
  ],
};