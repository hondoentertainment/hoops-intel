// Referee Tendency Reports — Know the Whistle
// Last updated: May 8, 2026

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
  generatedDate: "May 8, 2026",
  tonightAssignments: [
    {
      game: "NYK @ PHI",
      crew: ["Kane Fitzgerald", "Ed Malloy", "Ashley Moyer-Gleich"],
      leadRef: "Kane Fitzgerald",
      impact: "Fitzgerald's assignment to this crucial Game 3 elimination battle at Wells Fargo Center brings his championship-caliber neutrality (52% home win rate) and slight pace enhancement (+0.4) to a pivotal spot where Philadelphia's desperate season-saving performance faces New York's road warrior championship confidence in must-win territory. The balanced approach actually favors the more talented Knicks roster, as Fitzgerald's fair officiating prevents Philadelphia from gaining the systematic home advantages they desperately need in this elimination scenario, while his pace-positive tendency slightly enhances Jalen Brunson's transition mastery and New York's superior athletic depth. Fitzgerald's moderate foul frequency (42.3 per game) creates competitive flow that rewards execution over emotion, favoring the Knicks' championship poise and road experience over Philadelphia's desperation-driven home court energy, while his average technical management prevents the dramatic momentum swings that could spark miraculous 76ers comeback magic. The psychological element becomes critical as Fitzgerald's reputation for championship-level fairness adds pressure on Philadelphia to execute perfectly without systematic advantages, while empowering New York's confidence to close out the series through superior talent and execution in hostile territory. His moderate overtime tendency suggests potential extended drama, but the Knicks' deeper playoff experience and superior conditioning position them perfectly for crucial extra periods where championship execution trumps home desperation.",
      bettingAngle: "Premium value on NYK -3.5 as Fitzgerald's championship neutrality prevents Philadelphia from gaining the systematic home bias they desperately need in elimination stakes, while favoring the more talented Knicks through fair execution-based officiating. The OVER 212.5 has slight appeal given Fitzgerald's pace-positive tendency (+0.4) potentially enhancing offensive flow in what could be a high-scoring elimination thriller.",
      historical: "Fitzgerald worked 3 Knicks games this season (NYK 2-1) with New York thriving on neutral officiating, averaging 112.8 points on the road in Fitzgerald assignments while showcasing their championship-level execution. He officiated 2 76ers games (PHI 0-2) with Philadelphia struggling without systematic home advantages, managing just 106.3 points per game when facing fair championship-level officiating that rewards talent over home desperation."
    },
    {
      game: "SAS @ MIN",
      crew: ["Scott Foster", "Tony Brothers", "Courtney Kirkland"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this series-defining Game 3 battle at Target Center brings his legendary grinding expertise (56% home win rate) and pace disruption mastery (-1.2) to a pivotal clash where Minnesota's desperate home response faces San Antonio's championship experience in what could be the series' deciding moment. The home bias surprisingly favors the Timberwolves in this crucial swing game, as Foster's systematic advantages amplify Target Center's crowd energy and create grinding conditions perfectly suited for Anthony Edwards' explosive home performances while potentially neutralizing Victor Wembanyama's structured excellence through calculated pace manipulation that forces chaotic halfcourt battles. Foster's whistle-heavy approach (44.8 fouls per game) and high technical frequency create dramatic playoff atmospheres that could spark Minnesota's young core while testing San Antonio's championship composure, as his grinding pace disruption eliminates the Spurs' transition advantages and forces emotional battles where home crowd energy becomes exponentially more impactful. The psychological warfare becomes crucial as Foster's reputation for dramatic home-friendly moments adds confidence to Minnesota's bounce-back desperation while creating pressure on the Spurs' road execution in hostile territory where systematic disadvantages could neutralize their talent advantages. Foster's high overtime tendency (9 games) suggests potential extended drama that heavily favors Minnesota's explosive athleticism and home crowd energy over San Antonio's structured approach in chaotic extra periods where Foster's grinding philosophy rewards emotion over execution.",
      bettingAngle: "Strong play on MIN +4.5 as Foster's systematic home bias and pace disruption create perfect storm conditions for Timberwolves' explosive home response to overwhelm Spurs' structured road approach in crucial Game 3 environment. The UNDER 216.5 is premium given Foster's grinding pace impact (-1.2) destroying offensive rhythm in hostile playoff atmosphere.",
      historical: "Foster worked 3 Spurs games this season (SAS 1-2) with San Antonio struggling on the road in Foster assignments, averaging just 109.4 points when facing his grinding pace disruption and systematic road disadvantages. He officiated 4 Timberwolves games (MIN 3-1) with Minnesota dominating at home in Foster games, averaging 118.7 points while thriving on his systematic home advantages and crowd energy amplification."
    }
  ],
  refProfiles: [
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 71,
      tendencies: {
        foulsPerGame: 42.3,
        homeWinPct: 52,
        avgPace: 0.4,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Championship-caliber teams, balanced offensive systems, competitive playoff environments, teams with veteran leadership, elite talent showcases",
      worstFor: "Teams requiring extreme officiating advantages, chaos-style offenses, systems dependent on pace manipulation, inexperienced playoff squads",
      notableGame: "Leading tonight's NYK-PHI elimination Game 3, providing championship-level neutral expertise that prevents Philadelphia from gaining systematic home advantages while favoring New York's superior talent through fair execution-based officiating in Wells Fargo Center's hostile environment."
    },
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 73,
      tendencies: {
        foulsPerGame: 44.8,
        homeWinPct: 56,
        avgPace: -1.2,
        technicalFrequency: "High",
        overtimeGames: 9,
      },
      bestFor: "Home teams with crowd energy, grinding halfcourt execution, veteran leadership, physical interior play, teams thriving in dramatic environments",
      worstFor: "Fast-paced transition offenses, young teams prone to technical fouls, road teams needing neutral treatment, pace-dependent systems",
      notableGame: "Leading tonight's SAS-MIN pivotal Game 3 battle, creating systematic home advantages and pace disruption that could spark Minnesota's desperate bounce-back response while testing San Antonio's championship composure through grinding playoff warfare at Target Center."
    },
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 70,
      tendencies: {
        foulsPerGame: 45.6,
        homeWinPct: 58,
        avgPace: -1.8,
        technicalFrequency: "High",
        overtimeGames: 8,
      },
      bestFor: "Home teams with veteran leadership, physical defensive schemes, grinding halfcourt execution, teams with strong crowd support, interior-focused attacks",
      worstFor: "Road teams needing neutral treatment, athletic transition offenses, pace-dependent systems, young teams prone to technical fouls, perimeter-focused attacks",
      notableGame: "Supporting Scott Foster in tonight's SAS-MIN series-defining clash, providing additional grinding expertise and systematic home bias that amplifies Target Center's crowd energy while creating pace-negative conditions favoring Minnesota's emotional response over San Antonio's structured execution."
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 68,
      tendencies: {
        foulsPerGame: 40.1,
        homeWinPct: 48,
        avgPace: 1.7,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Athletic transition teams, road underdogs, pace-and-space offenses, skilled perimeter players, explosive young talent",
      worstFor: "Teams needing home-court whistle advantages, grinding defensive styles, interior-dependent offenses, methodical execution systems",
      notableGame: "Supporting Kane Fitzgerald in tonight's NYK-PHI elimination battle, providing pace-positive balance that enhances offensive flow while maintaining competitive neutrality that could favor New York's athletic advantages over Philadelphia's home desperation."
    },
    {
      name: "Ashley Moyer-Gleich",
      number: 13,
      experience: "8 years",
      gamesThisSeason: 62,
      tendencies: {
        foulsPerGame: 41.7,
        homeWinPct: 53,
        avgPace: -0.3,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Disciplined veteran teams, methodical execution, balanced competitive matchups, teams with strong coaching, structured offensive systems",
      worstFor: "Chaotic young teams, emotionally volatile players, systems requiring extreme pace manipulation, undisciplined offensive approaches",
      notableGame: "Supporting Kane Fitzgerald in tonight's NYK-PHI Game 3 elimination, providing structural stability that complements Fitzgerald's championship neutrality while maintaining competitive discipline in Philadelphia's season-saving desperate stakes environment."
    },
    {
      name: "Courtney Kirkland",
      number: 61,
      experience: "22 years",
      gamesThisSeason: 67,
      tendencies: {
        foulsPerGame: 39.6,
        homeWinPct: 49,
        avgPace: 1.3,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Athletic young teams, fast-break offenses, pace-and-space systems, competitive showcases, skilled perimeter play",
      worstFor: "Teams needing systematic home advantages, grinding defensive styles, systems dependent on whistle manipulation, interior-focused attacks",
      notableGame: "Supporting Scott Foster in tonight's SAS-MIN pivotal Game 3, providing pace-positive balance that partially offsets Foster's grinding approach while maintaining competitive flow in Target Center's hostile championship-stakes environment."
    },
    {
      name: "James Capers",
      number: 19,
      experience: "28 years",
      gamesThisSeason: 69,
      tendencies: {
        foulsPerGame: 41.9,
        homeWinPct: 51,
        avgPace: -0.2,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Veteran-led teams, balanced competitive matchups, methodical execution, teams with strong coaching, disciplined systems",
      worstFor: "Chaotic young teams, pace-manipulation dependent offenses, systems requiring extreme systematic advantages, emotionally volatile players",
      notableGame: "Recently provided veteran stability in conference semifinals action, complementing primary referee approaches with balanced expertise while maintaining structural integrity in championship-stakes playoff environments through experienced officiating leadership."
    },
    {
      name: "Lauren Holtkamp",
      number: 7,
      experience: "11 years",
      gamesThisSeason: 63,
      tendencies: {
        foulsPerGame: 43.4,
        homeWinPct: 54,
        avgPace: -0.7,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Home teams with disciplined systems, veteran point guards, methodical execution, teams with strong coaching, physical interior play",
      worstFor: "Chaotic transition offenses, emotionally volatile players, teams relying on pace manipulation, young undisciplined squads",
      notableGame: "Recently provided home-friendly structure and methodical control in conference semifinals action, amplifying systematic advantages while maintaining competitive discipline in championship-stakes elimination environments."
    },
    {
      name: "Ben Williams",
      number: 47,
      experience: "17 years",
      gamesThisSeason: 66,
      tendencies: {
        foulsPerGame: 38.8,
        homeWinPct: 46,
        avgPace: 2.1,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Road underdog teams, athletic transition offenses, pace-and-space systems, young skilled players, competitive neutral environments",
      worstFor: "Home teams requiring systematic advantages, physical grinding styles, interior-dependent systems, veteran-friendly whistle treatment",
      notableGame: "Recently supported pace-positive playoff officiating in conference semifinals action, providing offensive flow enhancement while maintaining competitive neutrality in high-stakes championship environments."
    },
    {
      name: "Tre Maddox",
      number: 23,
      experience: "9 years",
      gamesThisSeason: 61,
      tendencies: {
        foulsPerGame: 44.1,
        homeWinPct: 53,
        avgPace: -1.0,
        technicalFrequency: "Average",
        overtimeGames: 6,
      },
      bestFor: "Physical defensive teams, grinding halfcourt execution, veteran leadership, teams with strong interior presence, methodical systems",
      worstFor: "Fast-paced transition offenses, young emotional teams, pace-dependent systems, athletic perimeter-focused attacks",
      notableGame: "Recently provided grinding support and pace-negative control in championship-stakes conference semifinals action, amplifying physical interior advantages while maintaining structural discipline in hostile playoff environments."
    }
  ],
  weeklyTrend: "Thursday's Game 3 Conference Semifinals assignments reveal strategic referee deployment designed to create series-defining dynamics through calculated officiating philosophy that amplifies elimination pressure and championship stakes across two pivotal swing games that could determine entire postseason trajectories. The Kane Fitzgerald assignment to NYK-PHI represents championship-level neutral warfare where his fair officiating approach (52% home win rate) and slight pace enhancement (+0.4) creates competitive conditions that actually disadvantage Philadelphia's desperate home elimination scenario, preventing the systematic home advantages the 76ers desperately need while favoring New York's superior talent and championship experience through execution-based officiating that rewards skill over emotion. Fitzgerald's moderate approach systematically eliminates Philadelphia's potential for miraculous home court magic while empowering the Knicks' road warrior confidence to close out the series through superior depth and playoff poise, creating psychological pressure on the 76ers to execute perfectly without systematic help while allowing New York's championship experience to thrive in hostile territory where fair officiating becomes their greatest advantage. The contrasting Scott Foster assignment to SAS-MIN provides extreme home-friendly grinding warfare where his legendary systematic bias (56% home win rate) and significant pace disruption (-1.2) create perfect storm conditions for Minnesota's desperate bounce-back response to overwhelm San Antonio's structured road approach, forcing chaotic halfcourt battles where Target Center's crowd energy becomes exponentially more impactful through Foster's whistle-heavy control and technical-prone dramatic management. Foster's grinding philosophy systematically eliminates the Spurs' transition advantages while amplifying Minnesota's explosive home athleticism and emotional energy, creating enormous pressure on San Antonio's championship composure while empowering the Timberwolves' young core to thrive in systematic home advantages designed to reward crowd energy over road structure in pivotal swing-game scenarios where home momentum could determine series outcomes. This dual assignment strategy establishes contrasting betting value concentrations: neutral championship execution favoring talent over desperation in Philadelphia's elimination stakes versus extreme home bias rewarding explosive athleticism and crowd energy amplification in Minnesota's bounce-back scenario, creating predictable patterns where understanding referee philosophy deployment in elimination contexts generates massive exploitable advantages through recognition of when fair officiating favors road talent while systematic home bias rewards desperate home responses. The supporting crew selections strategically amplify primary referee impacts, with Ed Malloy and Ashley Moyer-Gleich providing pace balance and structural stability for Fitzgerald's neutral approach, while Tony Brothers and Courtney Kirkland deliver additional grinding support and systematic home amplification that complement Foster's dramatic expertise without eliminating competitive flow. This week's broader pattern spanning crucial elimination and swing-game dynamics demonstrates calculated referee management designed to create series-defining moments through contrasting officiating philosophies: neutral championship warfare favoring execution and talent versus systematic home bias rewarding emotion and crowd energy, establishing clear value patterns where understanding how officiating philosophy interacts with elimination pressure and championship stakes generates significant betting advantages in maximum-pressure playoff environments where referee tendency deployment becomes exponentially more impactful than regular season patterns through amplified crowd energy, legacy pressure, and championship implications that reward systematic recognition of when neutral officiating favors road talent while extreme home bias empowers desperate home responses in defining playoff moments that could reshape entire conference semifinals landscapes."
};
