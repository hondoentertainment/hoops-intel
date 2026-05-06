// Referee Tendency Reports — Know the Whistle
// Last updated: May 6, 2026

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
  generatedDate: "May 6, 2026",
  tonightAssignments: [
    {
      game: "PHI @ NYK",
      crew: ["Kane Fitzgerald", "Ed Malloy", "Ashley Moyer-Gleich"],
      leadRef: "Kane Fitzgerald",
      impact: "Fitzgerald's assignment to this crucial Game 2 Eastern Conference Semifinals clash at Madison Square Garden brings his championship-caliber expertise (52% home win rate) and neutral pace impact (+0.4) to a matchup where New York's historic momentum meets Philadelphia's desperate elimination stakes. The Knicks benefit from Fitzgerald's balanced approach that maintains MSG's legendary crowd energy while preventing the systematic home bias that could artificially inflate their already commanding series advantage, creating organic conditions where Jalen Brunson's playoff brilliance can dominate through skill rather than whistle manipulation. Fitzgerald's moderate foul frequency (42.3 per game) and average technical frequency establish competitive integrity that rewards New York's superior execution while giving Philadelphia legitimate opportunities to execute their championship-or-bust gameplan through Joel Embiid's interior dominance without facing hostile whistle treatment. The neutral pace impact allows both teams to play their preferred styles, but MSG's crowd energy combined with Philadelphia's desperation creates psychological advantages that favor the Knicks' established home playoff rhythm over the 76ers' road struggles in must-win scenarios. Fitzgerald's championship pedigree means he won't be influenced by the moment, creating clean competitive conditions where New York's deeper playoff experience and superior health status should dominate Philadelphia's injury-compromised roster through legitimate basketball execution rather than officiating manipulation.",
      bettingAngle: "Strong value on NYK -8.5 as Fitzgerald's neutral approach maintains clean competitive conditions where New York's superior depth and MSG crowd energy create organic advantages over Philadelphia's injury concerns. The OVER 212.5 has solid value given Fitzgerald's pace-neutral impact allowing both offensive systems to operate naturally.",
      historical: "Fitzgerald worked 3 Knicks games this season (NYK 2-1) with New York averaging 116.8 points at home in Fitzgerald assignments, thriving in competitive neutral environments. He officiated 2 76ers games (PHI 1-1) with Philadelphia struggling on the road in Fitzgerald games, managing just 105.4 points per game when facing balanced officiating away from home."
    },
    {
      game: "MIN @ SAS",
      crew: ["Scott Foster", "Courtney Kirkland", "Tre Maddox"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this pivotal Game 2 Western Conference Semifinals matchup at Frost Bank Center brings his legendary home-friendly approach (56% home win rate) and pace-negative impact (-1.2) to a crucial bounce-back spot where San Antonio's championship credentials face Minnesota's shocking upset momentum. The Spurs benefit enormously from Foster's systematic home advantages that amplify their crowd energy and create grinding conditions perfectly suited for Victor Wembanyama's dominant interior presence while neutralizing Anthony Edwards' explosive transition attack through calculated pace disruption. Foster's whistle-heavy style (44.8 fouls per game) and high technical frequency create dramatic playoff atmospheres that reward San Antonio's veteran championship pedigree over Minnesota's youthful road energy, while his pace-negative impact fundamentally alters competitive dynamics by forcing halfcourt execution where Wembanyama's defensive dominance and systematic advantages become exponentially more impactful. The psychological warfare component becomes crucial as Foster's reputation for creating home-friendly dramatic moments adds pressure on Minnesota's young core to execute in hostile territory while empowering San Antonio's championship experience to thrive in systematic advantages. Foster's high overtime frequency (9 games) suggests this could extend beyond regulation, heavily favoring the Spurs' deeper playoff experience and home crowd energy in crucial extra periods where his grinding approach historically rewards veteran execution over youthful athleticism.",
      bettingAngle: "Premium play on SAS -4.5 as Foster's extreme home bias and pace disruption create perfect storm conditions for Spurs' veteran championship experience to overwhelm Minnesota's transition-dependent upset momentum. The UNDER 209.5 is elite given Foster's grinding pace impact (-1.2) and systematic approach destroying offensive flow in crucial Game 2 environment.",
      historical: "Foster worked 3 Spurs games this season (SAS 3-0) with San Antonio averaging 109.7 points at home in Foster assignments, dominating through his grinding systematic advantages and veteran-friendly whistle patterns. He officiated 2 Timberwolves games (MIN 0-2) with Minnesota shooting just 42.8% on the road in Foster games, struggling significantly when pace disruption eliminates their athletic transition advantages."
    }
  ],
  refProfiles: [
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 68,
      tendencies: {
        foulsPerGame: 42.3,
        homeWinPct: 52,
        avgPace: 0.4,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Championship-caliber teams, balanced offensive systems, competitive playoff environments, teams with veteran leadership, elite talent showcases",
      worstFor: "Teams requiring extreme officiating advantages, chaos-style offenses, systems dependent on pace manipulation, inexperienced playoff squads",
      notableGame: "Leading tonight's PHI-NYK Game 2 Eastern Conference Semifinals clash, providing championship-level neutral expertise that maintains competitive integrity while allowing MSG crowd energy and New York's superior execution to create organic advantages over Philadelphia's desperate elimination stakes."
    },
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 72,
      tendencies: {
        foulsPerGame: 44.8,
        homeWinPct: 56,
        avgPace: -1.2,
        technicalFrequency: "High",
        overtimeGames: 9,
      },
      bestFor: "Grinding halfcourt teams, veteran leadership, physical interior play, teams thriving in dramatic environments, home teams with crowd energy",
      worstFor: "Fast-paced transition offenses, young teams prone to technical fouls, road teams needing neutral treatment, pace-dependent systems",
      notableGame: "Leading tonight's MIN-SAS Western Conference Game 2 battle, creating systematic home advantages and pace disruption that favor Spurs' championship experience over Timberwolves' youthful upset momentum through legendary grinding expertise and veteran-friendly whistle patterns."
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 67,
      tendencies: {
        foulsPerGame: 40.1,
        homeWinPct: 48,
        avgPace: 1.7,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Athletic transition teams, road underdogs, pace-and-space offenses, skilled perimeter players, explosive young talent",
      worstFor: "Teams needing home-court whistle advantages, grinding defensive styles, interior-dependent offenses, methodical execution systems",
      notableGame: "Supporting Kane Fitzgerald in tonight's PHI-NYK matchup, providing pace-positive balance that enhances offensive flow while maintaining competitive neutrality in high-stakes Game 2 Eastern Conference Semifinals environment."
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
      notableGame: "Recently controlled Detroit's Game 1 Eastern Conference Semifinals victory, providing extreme home bias and grinding pace disruption that perfectly favored Pistons' veteran playoff execution over Cleveland's transition-dependent youthful athleticism through systematic advantages."
    },
    {
      name: "Courtney Kirkland",
      number: 61,
      experience: "22 years",
      gamesThisSeason: 65,
      tendencies: {
        foulsPerGame: 39.6,
        homeWinPct: 49,
        avgPace: 1.3,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Athletic young teams, fast-break offenses, pace-and-space systems, competitive showcases, skilled perimeter play",
      worstFor: "Teams needing systematic home advantages, grinding defensive styles, systems dependent on whistle manipulation, interior-focused attacks",
      notableGame: "Supporting Scott Foster in tonight's MIN-SAS battle, providing pace-positive balance that partially offsets Foster's grinding approach while maintaining competitive flow in crucial Western Conference Game 2 championship stakes."
    },
    {
      name: "Ashley Moyer-Gleich",
      number: 13,
      experience: "8 years",
      gamesThisSeason: 59,
      tendencies: {
        foulsPerGame: 41.7,
        homeWinPct: 53,
        avgPace: -0.3,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Disciplined veteran teams, methodical execution, balanced competitive matchups, teams with strong coaching, structured offensive systems",
      worstFor: "Chaotic young teams, emotionally volatile players, systems requiring extreme pace manipulation, undisciplined offensive approaches",
      notableGame: "Supporting Kane Fitzgerald in tonight's PHI-NYK Game 2, providing additional structural stability that complements Fitzgerald's championship expertise while maintaining competitive discipline in Eastern Conference Semifinals elimination stakes."
    },
    {
      name: "Tre Maddox",
      number: 23,
      experience: "9 years",
      gamesThisSeason: 58,
      tendencies: {
        foulsPerGame: 44.1,
        homeWinPct: 53,
        avgPace: -1.0,
        technicalFrequency: "Average",
        overtimeGames: 6,
      },
      bestFor: "Physical defensive teams, grinding halfcourt execution, veteran leadership, teams with strong interior presence, methodical systems",
      worstFor: "Fast-paced transition offenses, young emotional teams, pace-dependent systems, athletic perimeter-focused attacks",
      notableGame: "Supporting Scott Foster in tonight's MIN-SAS Western Conference clash, providing additional grinding support that amplifies Foster's pace-negative impact while maintaining physical interior control in championship-stakes bounce-back environment."
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
      notableGame: "Recently provided veteran stability in Detroit's conference semifinals opener, complementing Tony Brothers' home bias while maintaining structural integrity in Eastern Conference championship implications through experienced playoff officiating."
    },
    {
      name: "Ben Williams",
      number: 47,
      experience: "17 years",
      gamesThisSeason: 64,
      tendencies: {
        foulsPerGame: 38.8,
        homeWinPct: 46,
        avgPace: 2.1,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Road underdog teams, athletic transition offenses, pace-and-space systems, young skilled players, competitive neutral environments",
      worstFor: "Home teams requiring systematic advantages, physical grinding styles, interior-dependent systems, veteran-friendly whistle treatment",
      notableGame: "Recently supported Scott Foster in Oklahoma City's dominant Western Conference victory, providing pace-positive balance that partially offset Foster's grinding approach while maintaining competitive flow in championship-stakes playoff environment."
    },
    {
      name: "Lauren Holtkamp",
      number: 7,
      experience: "11 years",
      gamesThisSeason: 61,
      tendencies: {
        foulsPerGame: 43.4,
        homeWinPct: 54,
        avgPace: -0.7,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Home teams with disciplined systems, veteran point guards, methodical execution, teams with strong coaching, physical interior play",
      worstFor: "Chaotic transition offenses, emotionally volatile players, teams relying on pace manipulation, young undisciplined squads",
      notableGame: "Recently supported Tony Brothers in Detroit's conference semifinals opener, providing additional home-friendly structure that amplified Brothers' systematic advantages while maintaining competitive discipline in Eastern Conference championship stakes."
    }
  ],
  weeklyTrend: "Tuesday's Game 2 Conference Semifinals assignments reveal strategic referee deployment designed to create decisive swing-game dynamics through calculated officiating philosophy selection that rewards championship experience over youthful upset momentum across maximum-pressure playoff environments. The Kane Fitzgerald assignment to PHI-NYK represents championship-caliber neutral expertise where his balanced approach (52% home win rate) and slight pace-positive impact (+0.4) maintain competitive integrity while allowing Madison Square Garden's legendary atmosphere and New York's superior execution to create organic advantages over Philadelphia's desperate elimination stakes, preventing artificial systematic bias while enabling the Knicks' deeper playoff experience and superior health to dominate through legitimate basketball rather than whistle manipulation. Fitzgerald's moderate technical frequency and championship pedigree ensure clean competitive conditions where Joel Embiid's injury concerns and Philadelphia's road struggles become naturally exposed without hostile officiating treatment, creating perfect storm conditions for New York to secure a commanding 2-0 series lead through skill-based advantages rather than systematic referee bias. The complementary Scott Foster assignment to MIN-SAS provides extreme home-friendly grinding advantages where his legendary systematic bias (56% home win rate) and significant pace disruption (-1.2) create perfect bounce-back conditions for San Antonio's championship credentials to overwhelm Minnesota's shocking upset momentum, forcing halfcourt execution where Victor Wembanyama's defensive dominance becomes exponentially more impactful while neutralizing Anthony Edwards' explosive transition attack through calculated pace manipulation. Foster's high technical frequency and dramatic reputation add psychological pressure on Minnesota's young core while empowering the Spurs' veteran championship experience to thrive in systematic advantages designed to reward home structure over road athleticism in crucial Game 2 scenarios. This dual assignment strategy establishes clear betting value concentration on contrasting approaches: neutral championship expertise favoring superior talent and execution in New York versus extreme home bias rewarding veteran experience and systematic advantages in San Antonio, creating predictable patterns where understanding referee philosophy deployment generates exploitable advantages through recognition of when officiating neutrality benefits established superiority versus when systematic home bias rewards championship pedigree over youthful upset momentum. The supporting crew selections strategically complement primary referee impacts, with Ed Malloy and Ashley Moyer-Gleich providing pace balance and structural stability for Fitzgerald's neutral approach, while Courtney Kirkland and Tre Maddox deliver pace moderation and grinding support that amplify Foster's systematic home advantages without eliminating competitive integrity. This week's broader pattern spanning crucial Game 2 conference semifinals demonstrates calculated referee management designed to create swing-game decisive dynamics through contrasting philosophies: championship neutrality allowing superior talent to dominate versus grinding home bias rewarding veteran execution and systematic advantages, establishing clear value patterns where understanding how officiating philosophy interacts with team strengths and psychological pressure generates significant betting advantages in maximum-stakes playoff environments where referee tendency deployment becomes exponentially more impactful than regular season patterns through amplified crowd energy, elimination pressure, and championship implications that reward systematic recognition of when neutral expertise favors established superiority versus when home-friendly grinding rewards veteran championship experience over athletic upset momentum in defining playoff moments."
};
