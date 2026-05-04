// Referee Tendency Reports — Know the Whistle
// Last updated: May 4, 2026

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
  generatedDate: "May 4, 2026",
  tonightAssignments: [
    {
      game: "PHI @ NYK",
      crew: ["Kane Fitzgerald", "Courtney Kirkland", "Tre Maddox"],
      leadRef: "Kane Fitzgerald",
      impact: "Fitzgerald's assignment to this Eastern Conference Semifinals opener at Madison Square Garden brings his championship-caliber officiating approach (42.3 fouls per game) and moderate home bias (52% home win rate) to a matchup where Philadelphia's historic momentum meets New York's playoff hunger. The 76ers benefit from Fitzgerald's experience managing high-stakes games after their stunning Boston comeback, while his balanced approach prevents extreme systematic advantages for either side. Fitzgerald's neutral pace impact (0.4) maintains competitive flow without disrupting either team's preferred tempo, creating showcase conditions where Joel Embiid's playoff dominance and Jalen Brunson's home-court mastery can determine the outcome through pure execution. His average technical frequency keeps emotions controlled while allowing the intensity of playoff basketball at MSG to build naturally. This assignment favors the team with superior playoff experience and execution under pressure, making it a true test of championship mettle between two hungry franchises.",
      bettingAngle: "Value on PHI +4.5 as Fitzgerald's championship approach rewards veteran playoff execution over home-court advantages, favoring Philadelphia's proven postseason DNA. The OVER 207.5 has appeal given Fitzgerald's balanced officiating creating competitive showcase conditions for two explosive offenses.",
      bettingAngle: "Strong value on PHI +4.5 as Fitzgerald's championship-caliber approach rewards Philadelphia's veteran playoff execution and historic momentum over New York's home-court noise. His balanced officiating prevents systematic MSG advantages while showcasing elite talent execution.",
      historical: "Fitzgerald worked 4 Sixers games this season (PHI 3-1) with Philadelphia averaging 112.8 points in his assignments, excelling in his balanced competitive environments. He officiated 3 Knicks games (NYK 2-1) with New York shooting 47.8% from the field at home in Fitzgerald assignments, thriving in his showcase conditions but lacking systematic home advantages."
    },
    {
      game: "MIN @ SAS",
      crew: ["Ed Malloy", "James Capers", "Lauren Holtkamp"],
      leadRef: "Ed Malloy",
      impact: "Malloy's assignment to this Western Conference showdown in San Antonio brings his road-friendly approach (48% home win rate) and significant pace-positive impact (+1.7) to a matchup where Minnesota's explosive athleticism faces the Spurs' elite defense. The Timberwolves benefit enormously from Malloy's road-neutral tendencies that prevent systematic advantages for San Antonio's home crowd while his pace acceleration creates perfect conditions for Anthony Edwards' transition attack and Minnesota's athletic advantages. Malloy's clean officiating style (40.1 fouls per game) and low technical frequency allow skilled players to operate freely, favoring Minnesota's superior athleticism over San Antonio's methodical execution. His pace-positive impact directly counters Victor Wembanyama's rim protection effectiveness by creating fast-break opportunities before the Spurs can establish their defensive sets. This assignment creates a pure athletic showcase where Minnesota's speed and explosiveness can overwhelm San Antonio's structured approach through pace manipulation and neutral officiating that prevents home-court systematic advantages.",
      bettingAngle: "Premium play on MIN +6.5 as Malloy's road-friendly approach and pace-positive impact create perfect conditions for Minnesota's athletic superiority to overwhelm San Antonio's home structure. The OVER 221.5 is elite given Malloy's pace acceleration (+1.7) favoring explosive offensive execution.",
      historical: "Malloy worked 3 Timberwolves games this season (MIN 3-0) with Minnesota averaging 121.7 points on the road in Malloy assignments, dominating in his pace-positive athletic environments. He officiated 4 Spurs games (SAS 2-2) with San Antonio allowing 115.3 points at home in Malloy assignments, struggling when pace acceleration disrupts their defensive structure."
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
      notableGame: "Leading tonight's PHI-NYK Eastern Conference Semifinals opener, bringing championship-level officiating that rewards veteran playoff execution and historic momentum over home-court systematic advantages in showcase MSG environment."
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
      notableGame: "Leading tonight's MIN-SAS Western Conference battle, providing road-friendly pace-positive conditions that favor Minnesota's athletic explosion over San Antonio's structured home defense through pace acceleration and neutral officiating."
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
      notableGame: "Recently controlled multiple high-stakes playoff games with legendary grinding expertise, creating systematic advantages for veteran teams while disrupting youthful athleticism through whistle-heavy pace manipulation."
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
      bestFor: "Home teams with veteran leadership, physical defensive schemes, grinding halfcourt execution, teams with strong crowd support",
      worstFor: "Road teams needing neutral treatment, athletic transition offenses, pace-dependent systems, young teams prone to technical fouls",
      notableGame: "Recently provided extreme home bias and grinding support in multiple playoff scenarios, amplifying crowd energy advantages for veteran teams through whistle-heavy pace disruption."
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
      notableGame: "Supporting Ed Malloy in tonight's MIN-SAS battle, providing veteran-friendly balance that complements Malloy's pace-positive approach while maintaining competitive integrity in Western Conference action."
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
      notableGame: "Supporting Ed Malloy in tonight's MIN-SAS matchup, providing additional structure that balances Malloy's pace-positive approach while maintaining competitive flow in Western Conference playoffs."
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
      notableGame: "Supporting Kane Fitzgerald in tonight's PHI-NYK Eastern Conference Semifinals opener, providing pace-positive balance that complements Fitzgerald's championship approach while maintaining clean competitive flow."
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
      notableGame: "Supporting Kane Fitzgerald in tonight's PHI-NYK semifinals opener, providing physical interior support that balances Fitzgerald's championship approach while allowing veteran execution to flourish."
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
      notableGame: "Recently provided clean pace-positive officiating in multiple playoff games, showcasing elite athletic talent through minimal whistle interference and road-friendly neutral treatment."
    },
    {
      name: "James Williams",
      number: 60,
      experience: "13 years",
      gamesThisSeason: 62,
      tendencies: {
        foulsPerGame: 39.4,
        homeWinPct: 50,
        avgPace: 2.3,
        technicalFrequency: "Low",
        overtimeGames: 1,
      },
      bestFor: "Young athletic teams, fast-break offenses, pace-and-space systems, skilled ball handlers, explosive offensive talent",
      worstFor: "Physical grinding teams, interior-dependent offenses, systems requiring whistle advantages, methodical execution styles",
      notableGame: "Recently controlled high-scoring playoff contests with extreme pace-positive impact, creating showcase environments where superior athleticism determines outcomes through minimal interference."
    }
  ],
  weeklyTrend: "Sunday's Eastern Conference Semifinals assignments reveal sophisticated referee deployment designed to manage contrasting competitive dynamics through strategic officiating philosophy selection that maximizes championship integrity while creating predictable betting value patterns. The Kane Fitzgerald assignment to PHI-NYK represents championship-caliber expertise deployment where his balanced approach (42.3 fouls per game) and moderate home bias (52% home win rate) creates showcase conditions that reward Philadelphia's proven playoff execution and historic momentum over New York's home-court advantages, favoring veteran championship DNA in maximum-pressure MSG environments where systematic advantages matter less than clutch performance under bright lights. Fitzgerald's neutral pace impact (0.4) maintains competitive flow without disrupting either team's preferred tempo, allowing Joel Embiid's playoff dominance and the Sixers' stunning Boston comeback momentum to shine through pure basketball execution rather than officiating manipulation. The contrasting Ed Malloy assignment to MIN-SAS provides road-friendly pace acceleration (+1.7) that fundamentally alters competitive dynamics by preventing San Antonio's home-court systematic advantages while creating perfect conditions for Minnesota's athletic superiority to overwhelm the Spurs' structured defense through pace manipulation and neutral treatment that rewards explosiveness over methodical execution. Malloy's road-friendly approach (48% home win rate) and clean officiating style (40.1 fouls per game) directly counters Victor Wembanyama's rim protection effectiveness by accelerating possessions and creating fast-break opportunities before San Antonio can establish defensive sets, making this a pure athletic showcase where Anthony Edwards' transition attack becomes exponentially more dangerous. This dual assignment strategy creates maximum betting value contrast between championship showcase conditions (Fitzgerald rewarding proven playoff execution) and athletic explosion environments (Malloy favoring pace and athleticism), establishing predictable patterns where understanding referee tendency deployment generates exploitable advantages through systematic recognition of when officiating philosophy favors veteran championship experience versus youthful athletic dominance. The supporting crew selections strategically balance primary referee impacts, with Courtney Kirkland and Tre Maddox providing pace-positive balance and physical interior support for Fitzgerald's championship approach, while James Capers and Lauren Holtkamp deliver veteran stability and structural support that complements Malloy's pace acceleration without eliminating Minnesota's systematic athletic advantages. This week's broader pattern spanning Friday's historic Philadelphia comeback momentum and tonight's conference semifinals openers demonstrates calculated referee management across escalating playoff stakes, where championship-caliber assignments reward proven postseason execution while pace-positive deployments create athletic showcase environments that favor superior talent and explosiveness over structured methodical approaches. The conference semifinals stakes amplify referee tendency impact exponentially, making Fitzgerald's championship approach crucial for rewarding Philadelphia's playoff DNA and historic momentum, while Malloy's pace-positive road-friendly impact becomes decisive for showcasing Minnesota's athletic superiority over San Antonio's home structure, creating clear betting patterns where understanding officiating deployment through championship versus athletic showcase philosophies generates significant value in high-stakes playoff basketball where systematic advantages and pace manipulation determine outcomes through calculated whistle philosophy designed to reward either proven championship execution or explosive athletic dominance depending on competitive matchup dynamics."
};
