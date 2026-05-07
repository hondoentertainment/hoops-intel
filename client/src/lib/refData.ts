// Referee Tendency Reports — Know the Whistle
// Last updated: May 7, 2026

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
  generatedDate: "May 7, 2026",
  tonightAssignments: [
    {
      game: "CLE @ DET",
      crew: ["Tony Brothers", "James Capers", "Lauren Holtkamp"],
      leadRef: "Tony Brothers",
      impact: "Brothers' assignment to this crucial Game 2 Eastern Conference Semifinals clash at Little Caesars Arena brings his notorious home-friendly approach (58% home win rate) and grinding pace disruption (-1.8) to a pivotal matchup where Detroit's championship momentum faces Cleveland's desperate road elimination stakes. The Pistons benefit enormously from Brothers' systematic home advantages that amplify their crowd energy and create grinding conditions perfectly suited for Cade Cunningham's methodical execution while neutralizing Donovan Mitchell's explosive scoring through calculated pace disruption and whistle-heavy control. Brothers' extreme foul frequency (45.6 per game) and high technical tendency create dramatic playoff atmospheres that reward Detroit's veteran championship experience over Cleveland's road struggles, while his pace-negative impact fundamentally alters competitive dynamics by forcing halfcourt execution where the Pistons' superior depth and home court structure become exponentially more impactful. The psychological warfare component becomes crucial as Brothers' reputation for creating home-friendly dramatic moments adds pressure on Cleveland's young core to execute in hostile territory while empowering Detroit's championship experience to thrive in systematic advantages. Brothers' high overtime frequency (8 games) suggests this could extend beyond regulation, heavily favoring the Pistons' deeper playoff experience and home crowd energy in crucial extra periods where his grinding approach historically rewards veteran execution over athletic talent.",
      bettingAngle: "Elite play on DET -6.5 as Brothers' extreme home bias and pace disruption create perfect storm conditions for Pistons' championship experience to overwhelm Cleveland's transition-dependent road struggles. The UNDER 218.5 is premium given Brothers' grinding pace impact (-1.8) and systematic approach destroying offensive flow in crucial Game 2 environment.",
      historical: "Brothers worked 3 Pistons games this season (DET 3-0) with Detroit averaging 114.2 points at home in Brothers assignments, dominating through his grinding systematic advantages and veteran-friendly whistle patterns. He officiated 2 Cavaliers games (CLE 0-2) with Cleveland shooting just 41.3% on the road in Brothers games, struggling significantly when pace disruption eliminates their athletic transition advantages and Mitchell's rhythm."
    },
    {
      game: "LAL @ OKC",
      crew: ["Scott Foster", "Ben Williams", "Ashley Moyer-Gleich"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this potentially series-defining Game 2 Western Conference Semifinals battle at Paycom Center brings his legendary home-friendly expertise (56% home win rate) and pace-disrupting mastery (-1.2) to a crucial spot where Oklahoma City's championship dominance faces the Lakers' desperate championship-or-bust elimination scenario. The Thunder benefit massively from Foster's systematic home advantages that amplify their suffocating defensive identity and create grinding conditions perfectly suited for Shai Gilgeous-Alexander's controlled execution while neutralizing LeBron James' transition leadership through calculated pace manipulation that favors OKC's structured halfcourt excellence. Foster's whistle-heavy approach (44.8 fouls per game) and high technical frequency create dramatic playoff environments that reward Oklahoma City's young championship discipline over the Lakers' aging veteran frustrations, while his pace-negative impact fundamentally destroys the Lakers' aging-core transition advantages by forcing halfcourt execution where the Thunder's elite defensive system becomes exponentially more dominant. The psychological element becomes critical as Foster's reputation for creating home-friendly dramatic moments adds enormous pressure on LeBron's legacy chase while empowering OKC's championship confidence to thrive in systematic advantages designed to reward defensive structure over offensive talent. Foster's overtime tendency suggests potential extended drama that heavily favors the Thunder's superior conditioning and home crowd energy over the Lakers' aging legs in crucial extra periods.",
      bettingAngle: "Maximum value on OKC -12.5 as Foster's extreme home bias and pace disruption create perfect conditions for Thunder's defensive dominance to completely overwhelm Lakers' transition-dependent aging core. The UNDER 211.5 is elite given Foster's grinding pace impact (-1.2) and systematic defensive advantages amplification in hostile road environment.",
      historical: "Foster worked 4 Thunder games this season (OKC 4-0) with Oklahoma City averaging 118.5 points at home in Foster assignments, completely dominating through his defensive-friendly systematic advantages and pace control mastery. He officiated 3 Lakers games (LAL 1-2) with Los Angeles struggling significantly on the road in Foster games, managing just 102.7 points per game when facing grinding pace disruption that eliminates their transition advantages and exposes aging-core halfcourt limitations."
    }
  ],
  refProfiles: [
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
      notableGame: "Leading tonight's CLE-DET Game 2 Eastern Conference Semifinals battle, providing extreme home bias and grinding pace disruption that perfectly favor Pistons' veteran playoff execution over Cleveland's transition-dependent road athleticism through systematic home advantages and veteran-friendly whistle patterns."
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
      notableGame: "Leading tonight's LAL-OKC Western Conference Game 2 elimination battle, creating systematic home advantages and pace disruption that favor Thunder's championship defensive structure over Lakers' aging-core transition dependence through legendary grinding expertise and dramatic playoff control."
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
      notableGame: "Supporting Tony Brothers in tonight's CLE-DET conference semifinals clash, complementing Brothers' home bias with veteran stability while maintaining structural integrity in Eastern Conference championship implications through experienced playoff officiating expertise."
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
      notableGame: "Supporting Scott Foster in tonight's LAL-OKC battle, providing pace-positive balance that partially offsets Foster's grinding approach while maintaining competitive flow in Western Conference championship-stakes elimination environment."
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
      notableGame: "Supporting Scott Foster in tonight's LAL-OKC Game 2, providing additional structural stability that complements Foster's grinding expertise while maintaining competitive discipline in Western Conference Semifinals elimination stakes."
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
      notableGame: "Supporting Tony Brothers in tonight's CLE-DET conference semifinals opener, providing additional home-friendly structure that amplifies Brothers' systematic advantages while maintaining competitive discipline in Eastern Conference championship stakes."
    },
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
      notableGame: "Recently provided championship-level neutral expertise in crucial conference semifinals action, maintaining competitive integrity while allowing superior talent and execution to create organic advantages through balanced playoff officiating approach."
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
      notableGame: "Recently supported championship-level officiating in conference semifinals action, providing pace-positive balance that enhances offensive flow while maintaining competitive neutrality in high-stakes playoff environments."
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
      notableGame: "Recently provided pace-positive balance in crucial conference semifinals action, partially offsetting grinding approaches while maintaining competitive flow in championship-stakes playoff environment."
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
      notableGame: "Recently provided grinding support that amplified pace-negative impacts while maintaining physical interior control in championship-stakes conference semifinals bounce-back environment."
    }
  ],
  weeklyTrend: "Wednesday's Game 2 Conference Semifinals assignments reveal strategic referee deployment designed to create decisive series-shifting dynamics through calculated home-bias amplification that rewards championship experience and systematic advantages over road athleticism across maximum-pressure elimination environments. The Tony Brothers assignment to CLE-DET represents extreme home-friendly grinding warfare where his notorious systematic bias (58% home win rate) and significant pace disruption (-1.8) create perfect storm conditions for Detroit's veteran championship experience to overwhelm Cleveland's transition-dependent road struggles, forcing halfcourt execution where the Pistons' superior depth and home court structure become exponentially more impactful through Brothers' whistle-heavy control and technical-prone dramatic management. Brothers' grinding approach systematically destroys Cleveland's athletic advantages while amplifying Little Caesars Arena's crowd energy and Detroit's methodical execution, creating psychological pressure on the Cavaliers' young core while empowering the Pistons' championship pedigree to thrive in veteran-friendly systematic advantages designed to reward home structure over road athleticism in crucial swing-game scenarios. The complementary Scott Foster assignment to LAL-OKC provides equally extreme home-friendly grinding advantages where his legendary systematic bias (56% home win rate) and pace disruption (-1.2) create perfect conditions for Oklahoma City's defensive dominance to completely overwhelm the Lakers' aging-core transition dependence, forcing grinding halfcourt battles where the Thunder's championship discipline and superior conditioning become exponentially more dominant through Foster's dramatic control and veteran-hostile whistle patterns. Foster's approach systematically eliminates LeBron James' transition leadership advantages while amplifying Paycom Center's hostile environment and OKC's structured execution, creating enormous pressure on the Lakers' legacy-chase desperation while empowering the Thunder's championship confidence to dominate through defensive systematic advantages that reward youth over aging athleticism in elimination stakes. This dual assignment strategy establishes clear betting value concentration on extreme home bias rewarding championship experience and systematic advantages: grinding warfare favoring veteran execution and crowd energy amplification in Detroit versus defensive structure dominance through pace disruption and hostile environment creation in Oklahoma City, creating predictable patterns where understanding referee philosophy deployment generates massive exploitable advantages through recognition of when extreme systematic home bias rewards championship pedigree and structural advantages over road athleticism and aging-core desperation. The supporting crew selections strategically amplify primary referee impacts, with James Capers and Lauren Holtkamp providing additional grinding support and home-friendly structure for Brothers' systematic advantages, while Ben Williams and Ashley Moyer-Gleich deliver pace moderation and structural stability that complement Foster's grinding mastery without eliminating competitive drama. This week's broader pattern spanning crucial Game 2 conference semifinals demonstrates calculated referee management designed to create series-defining swing-game dynamics through extreme home bias amplification: grinding systematic warfare favoring veteran championship experience versus defensive structure dominance rewarding youth over aging athleticism, establishing clear value patterns where understanding how officiating philosophy interacts with championship stakes and elimination pressure generates significant betting advantages in maximum-pressure playoff environments where referee tendency deployment becomes exponentially more impactful than regular season patterns through amplified crowd energy, legacy pressure, and championship implications that reward systematic recognition of when extreme home bias favors veteran execution and structural advantages over road athleticism and desperation-driven aging cores in defining playoff moments that could determine entire championship landscapes."
};
