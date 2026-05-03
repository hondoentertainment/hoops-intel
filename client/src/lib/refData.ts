// Referee Tendency Reports — Know the Whistle
// Last updated: May 3, 2026

export interface RefereeProfile {
  name: string;
  number: number;
  experience: string;
  gamesThisSeason: number;
  tendencies: {
    foulsPerGame: number;
    homeWinPct: number;
    avgPace: number;
    technicalFrequency: "High" | "Average" | "Low";
    overtimeGames: number;
  };
  bestFor: string;
  worstFor: string;
  notableGame: string;
}

export interface TonightRefAssignment {
  game: string;
  crew: string[];
  leadRef: string;
  impact: string;
  bettingAngle: string;
  historical: string;
}

export interface RefData {
  generatedDate: string;
  tonightAssignments: TonightRefAssignment[];
  refProfiles: RefereeProfile[];
  weeklyTrend: string;
}

export const refData: RefData = {
  generatedDate: "May 3, 2026",
  tonightAssignments: [
    {
      game: "ORL @ DET",
      crew: ["Scott Foster", "Tony Brothers", "Lauren Holtkamp"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this winner-take-all Game 7 at Little Caesars Arena brings his grinding playoff approach (44.2 fouls per game) and moderate home bias (54% home win rate) to a series where Detroit desperately needs systematic advantages to overcome Orlando's youth and athleticism. The Pistons benefit from Foster's pace-slowing tendencies (-0.8) that disrupt the Magic's transition attack while his high technical frequency creates emotional landmines for Paolo Banchero and Orlando's young core. Foster's whistle-heavy approach favors Detroit's physical interior presence and veteran leadership, while his playoff reputation for manufacturing dramatic moments could create the hostile environment needed for the top-seeded Pistons to avoid a shocking elimination. Cade Cunningham thrives in Foster's methodical halfcourt environments, while Orlando's pace-dependent offense struggles when Foster grinds the game to his preferred tempo through consistent foul calls and technical threats that reward championship experience over youthful exuberance.",
      bettingAngle: "Premium play on DET -5.5 as Foster's grinding approach and moderate home bias create perfect conditions for Detroit's veteran leadership to dominate Orlando's inexperienced core in Game 7 pressure. The UNDER 184.5 is elite given Foster's pace-slowing impact (-0.8) and whistle-heavy style extending possessions in elimination basketball.",
      historical: "Foster worked 4 Pistons games this season (DET 3-1) with Detroit averaging 89.2 points allowed at home in Foster assignments, excelling in his grinding defensive environments. He officiated 2 Magic games (ORL 1-1) with Orlando committing 21.5 fouls per game on the road in Foster assignments, struggling with his physical whistle and technical frequency away from home."
    },
    {
      game: "TOR @ CLE",
      crew: ["Ed Malloy", "James Capers", "Ben Williams"],
      leadRef: "Ed Malloy",
      impact: "Malloy's assignment to this pivotal Game 7 in Cleveland brings his road-neutral approach (48% home win rate) and pace-positive tendencies (+1.7) to a matchup where pure talent should determine the outcome. The Cavaliers benefit from Malloy's balanced officiating that prevents systematic Toronto advantages while his pace-positive impact creates perfect showcase conditions for Donovan Mitchell's explosive scoring ability and Cleveland's athletic transition attack. Malloy's low technical frequency maintains competitive flow while his moderate foul calling (40.1 per game) allows skilled players like Mitchell and Scottie Barnes to operate without excessive whistle interference. This creates pure basketball execution where Cleveland's superior home-court energy and Mitchell's clutch gene can shine without officiating manipulation, making this a true test of which team wants it more in the winner-take-all atmosphere at Rocket Arena.",
      bettingAngle: "Strong value on CLE -3.5 as Malloy's road-neutral approach prevents systematic advantages for Toronto while his pace-positive impact showcases Cleveland's superior athletic execution at home. OVER 218.5 has appeal given Malloy's pace-positive tendencies (+1.7) and clean officiating style creating high-scoring Game 7 environments.",
      historical: "Malloy worked 5 Cavaliers games this season (CLE 4-1) with Cleveland averaging 118.4 points at home in Malloy assignments, thriving in his pace-positive showcase environments. He officiated 3 Raptors games (TOR 1-2) with Toronto shooting 43.2% from the field on the road in Malloy assignments, struggling to establish rhythm without systematic officiating advantages away from home."
    }
  ],
  refProfiles: [
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 71,
      tendencies: {
        foulsPerGame: 44.2,
        homeWinPct: 54,
        avgPace: -0.8,
        technicalFrequency: "High",
        overtimeGames: 8,
      },
      bestFor: "Grinding halfcourt teams, veteran leadership, physical interior play, teams thriving in dramatic environments, home teams with crowd energy",
      worstFor: "Fast-paced transition offenses, young teams prone to technical fouls, road teams needing neutral treatment, pace-dependent systems",
      notableGame: "Leading tonight's ORL-DET Game 7, bringing legendary grinding expertise and moderate home bias that creates systematic advantages for Detroit's championship experience while disrupting Orlando's pace-dependent youth through whistle-heavy elimination basketball."
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 65,
      tendencies: {
        foulsPerGame: 40.1,
        homeWinPct: 48,
        avgPace: 1.7,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Athletic transition teams, road underdogs, pace-and-space offenses, skilled perimeter players, competitive balanced matchups",
      worstFor: "Teams needing home-court whistle advantages, grinding defensive styles, interior-dependent offenses, systems requiring systematic help",
      notableGame: "Leading tonight's TOR-CLE Game 7, bringing road-neutral showcase conditions that prevent systematic advantages while his pace-positive impact creates pure competitive basketball where superior talent execution determines outcomes."
    },
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 69,
      tendencies: {
        foulsPerGame: 45.8,
        homeWinPct: 58,
        avgPace: -1.8,
        technicalFrequency: "High",
        overtimeGames: 7,
      },
      bestFor: "Home teams with veteran leadership, physical defensive schemes, grinding halfcourt execution, teams with strong crowd support, methodical offensive systems",
      worstFor: "Road teams needing neutral treatment, athletic transition offenses, pace-dependent systems, young teams prone to technical fouls, emotionally volatile players",
      notableGame: "Supporting Scott Foster in tonight's ORL-DET Game 7, providing additional grinding expertise and extreme home bias that amplifies Detroit's systematic advantages over Orlando's youthful inexperience."
    },
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 66,
      tendencies: {
        foulsPerGame: 42.3,
        homeWinPct: 52,
        avgPace: 0.4,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Championship-caliber teams, balanced offensive systems, competitive playoff environments, teams with veteran leadership, elite talent showcases",
      worstFor: "Teams requiring extreme officiating advantages, chaos-style offenses, systems dependent on pace manipulation, inexperienced playoff squads",
      notableGame: "Recently controlled PHI-BOS Game 5 with balanced championship approach that rewarded Philadelphia's veteran execution while maintaining competitive integrity in elimination scenarios."
    },
    {
      name: "James Capers",
      number: 19,
      experience: "28 years",
      gamesThisSeason: 67,
      tendencies: {
        foulsPerGame: 41.7,
        homeWinPct: 51,
        avgPace: -0.3,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Veteran-led teams, balanced competitive matchups, methodical execution, teams with strong coaching, disciplined systems",
      worstFor: "Chaotic young teams, pace-manipulation dependent offenses, systems requiring extreme systematic advantages, emotionally volatile players",
      notableGame: "Supporting Ed Malloy in tonight's TOR-CLE Game 7, providing additional veteran-friendly balance that complements Malloy's neutral approach while maintaining competitive flow in championship scenarios."
    },
    {
      name: "Lauren Holtkamp",
      number: 7,
      experience: "11 years",
      gamesThisSeason: 58,
      tendencies: {
        foulsPerGame: 43.2,
        homeWinPct: 55,
        avgPace: -0.6,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Home teams with disciplined systems, veteran point guards, methodical execution, teams with strong coaching, physical interior play",
      worstFor: "Chaotic transition offenses, emotionally volatile players, teams relying on pace manipulation, young undisciplined squads",
      notableGame: "Supporting Scott Foster in tonight's ORL-DET Game 7, providing additional home bias and grinding support that amplifies Foster's systematic advantages for Detroit's veteran leadership."
    },
    {
      name: "Ben Williams",
      number: 47,
      experience: "17 years",
      gamesThisSeason: 62,
      tendencies: {
        foulsPerGame: 38.9,
        homeWinPct: 46,
        avgPace: 1.8,
        technicalFrequency: "Low",
        overtimeGames: 1,
      },
      bestFor: "Road underdog teams, athletic transition offenses, pace-and-space systems, young skilled players, competitive neutral environments",
      worstFor: "Home teams requiring systematic advantages, physical grinding styles, interior-dependent systems, veteran-friendly whistle treatment",
      notableGame: "Supporting Ed Malloy in tonight's TOR-CLE Game 7, providing additional road-friendly pace-positive approach that prevents systematic home advantages while showcasing superior athletic execution."
    },
    {
      name: "Courtney Kirkland",
      number: 61,
      experience: "22 years",
      gamesThisSeason: 63,
      tendencies: {
        foulsPerGame: 39.8,
        homeWinPct: 49,
        avgPace: 1.2,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Athletic young teams, fast-break offenses, pace-and-space systems, competitive showcases, skilled perimeter play",
      worstFor: "Teams needing systematic home advantages, grinding defensive styles, systems dependent on whistle manipulation, interior-focused attacks",
      notableGame: "Recently controlled several high-scoring playoff games with pace-positive neutral approach that creates competitive environments where superior talent determines outcomes through athletic execution."
    },
    {
      name: "James Williams",
      number: 60,
      experience: "13 years",
      gamesThisSeason: 59,
      tendencies: {
        foulsPerGame: 39.7,
        homeWinPct: 50,
        avgPace: 2.1,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Young athletic teams, fast-break offenses, pace-and-space systems, skilled ball handlers, competitive showcases",
      worstFor: "Physical grinding teams, interior-dependent offenses, systems requiring whistle advantages, veteran-friendly treatment",
      notableGame: "Recently provided clean pace-positive officiating in multiple playoff games, showcasing elite athletic talent through minimal whistle interference in high-stakes competitive environments."
    },
    {
      name: "Tre Maddox",
      number: 23,
      experience: "9 years",
      gamesThisSeason: 55,
      tendencies: {
        foulsPerGame: 43.8,
        homeWinPct: 53,
        avgPace: -1.1,
        technicalFrequency: "Average",
        overtimeGames: 3,
      },
      bestFor: "Physical defensive teams, grinding halfcourt execution, veteran leadership, teams with strong interior presence, methodical systems",
      worstFor: "Fast-paced transition offenses, young emotional teams, pace-dependent systems, athletic perimeter-focused attacks",
      notableGame: "Recently supported grinding playoff environments with whistle-heavy approach that favors veteran execution and physical interior play in elimination scenarios."
    }
  ],
  weeklyTrend: "Sunday's dual Game 7 assignments reveal strategic officiating deployment designed to manage maximum-pressure elimination scenarios through contrasting approaches that reflect each matchup's competitive dynamics and championship implications. The Scott Foster assignment to ORL-DET Game 7 represents calculated grinding expertise deployment where his legendary whistle-heavy approach (44.2 fouls per game) and moderate home bias (54% home win rate) create systematic advantages for Detroit's veteran championship experience while disrupting Orlando's pace-dependent youth through technical frequency landmines and pace manipulation (-0.8) that rewards playoff DNA over athletic inexperience in winner-take-all pressure cooker basketball. Foster's grinding methodology, amplified by Tony Brothers' extreme home bias (58% home win rate) and Lauren Holtkamp's additional veteran-friendly approach, establishes perfect conditions for the Pistons' methodical halfcourt execution to overwhelm the Magic's transition-dependent system through systematic officiating advantages that favor championship pedigree in Game 7 atmosphere. The contrasting Ed Malloy assignment to TOR-CLE Game 7 provides road-neutral showcase conditions (48% home win rate) with significant pace-positive impact (+1.7) that prevents systematic advantages while creating pure competitive basketball where superior talent execution and home-court energy determine outcomes rather than officiating manipulation, making this a true test of championship mettle where Donovan Mitchell's clutch gene and Cleveland's athletic superiority can shine without whistle interference. This dual assignment strategy creates maximum betting value contrast between extreme systematic advantage exploitation (Foster grinding for Detroit veterans) and neutral competitive showcase environments (Malloy rewarding superior talent), establishing clear patterns where understanding referee tendency deployment generates exploitable value through predictable impact on pace manipulation, fouling frequency, home-court amplification, and technical frequency management in championship elimination scenarios. The supporting crew selections strategically amplify primary referee tendencies, with Brothers and Holtkamp providing additional grinding and home bias support for Foster's systematic Detroit advantages, while James Capers and Ben Williams deliver veteran balance and pace-positive impact that complements Malloy's neutral showcase approach for pure athletic competition. This week's broader pattern spanning Friday's Philadelphia historic comeback and tonight's twin Game 7s demonstrates sophisticated referee management across elimination scenarios, where extreme grinding bias targets specific veteran-favored situations requiring systematic advantages, while balanced neutral assignments create showcase environments for superior talent and athletic execution. The playoff stakes intensify referee tendency impact, making Foster's grinding approach and Brothers' home bias exponentially more valuable for Detroit's championship experience, while Malloy's neutral pace-positive impact becomes crucial for showcasing Cleveland's athletic superiority without systematic interference, creating predictable betting patterns where understanding officiating deployment through grinding versus showcase philosophies generates significant value in winner-take-all championship basketball where systematic advantages determine outcomes through calculated whistle deployment designed to reward veteran playoff experience over youthful athletic execution in maximum-pressure elimination environments."
};
