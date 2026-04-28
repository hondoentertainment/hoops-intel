// Referee Tendency Reports — Know the Whistle
// Last updated: April 28, 2026

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
  generatedDate: "April 28, 2026",
  tonightAssignments: [
    {
      game: "PHI @ BOS",
      crew: ["Tony Brothers", "Kevin Cutler", "Tyler Ford"],
      leadRef: "Tony Brothers",
      impact: "Brothers' assignment to this crucial Game 3 brings his notorious extreme home bias (58% home win rate) and grinding pace-negative approach (-1.8) to a series where Boston dominated the first two games in Philadelphia behind Jayson Tatum's explosive scoring. His league-high foul frequency (45.8 per game) and technical-happy whistle create systematic advantages for the Celtics' championship-caliber crowd at TD Garden while potentially disrupting Philadelphia's desperate rhythm through whistle pressure in elimination-level atmosphere. Brothers' grinding style favors Boston's methodical halfcourt execution while neutralizing any Philadelphia transition advantages, transforming what should be a potential Sixers desperation comeback into a systematic Celtics stranglehold opportunity. The assignment screams series-ending dynamics as Brothers' extreme home bias historically creates impossible environments for desperate road teams facing elimination, with his pace grinding preventing the kind of explosive offensive showcase that Philadelphia needs to extend this series.",
      bettingAngle: "Strong value play on BOS -8.5 as Brothers' extreme home bias and pace-grinding style create systematic advantages that heavily favor the home Celtics in their series-closing opportunity. The UNDER 218.5 is a premium play given Brothers' pace-negative impact and high foul frequency creating extended possessions that favor Boston's methodical execution over Philadelphia's desperation pace.",
      historical: "Brothers worked 3 Celtics games this season (BOS 3-0) with Boston shooting 48.7% from the field at home in Brothers' assignments, thriving in his methodical grinding pace that suits their championship-caliber execution. He officiated 4 Sixers games (PHI 1-3) with Philadelphia averaging 4.2 fewer fast-break points on the road in Brothers' assignments, struggling with his pace-grinding approach that disrupts their transition opportunities."
    },
    {
      game: "ATL @ NYK",
      crew: ["Scott Foster", "Sean Wright", "Natalie Sago"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this pivotal Game 2 brings his legendary grinding approach (44.2 fouls per game) and moderate home bias (54% home win rate) to a series where New York took Game 1 behind Jalen Brunson's Madison Square Garden magic. His whistle-heavy style and pace-negative tendencies (-0.8) create perfect conditions for the Knicks' physical halfcourt execution while potentially disrupting Atlanta's athletic rhythm through foul trouble and pace manipulation in hostile MSG atmosphere. Foster's moderate home bias amplifies New York's crowd energy while his grinding approach favors Brunson's methodical playmaking over Trae Young's explosive transition game, creating systematic advantages for the Knicks' championship push. The assignment suggests maximum drama extraction with Foster's overtime propensity keeping late-game heroics in play while his technical frequency creates emotional landmines for Young's volatile style in pressure-packed Garden atmosphere.",
      bettingAngle: "Value play on NYK -6.0 as Foster's home bias and grinding style create systematic advantages for Brunson's championship experience while disrupting Atlanta's athletic rhythm. The UNDER 212.5 is highly attractive given Foster's pace-negative impact creating extended possessions that favor New York's methodical execution over Atlanta's pace-dependent offense.",
      historical: "Foster worked 5 Knicks games this season (NYK 4-1) with New York averaging 7.3 more assists at home in Foster's assignments, thriving in his methodical pace that suits Brunson's systematic offensive orchestration. He officiated 4 Hawks games (ATL 2-2) with Atlanta shooting just 33.8% from three on the road in Foster assignments, struggling with his pace grinding that disrupts Young's rhythm and transition excellence."
    },
    {
      game: "POR @ SAS",
      crew: ["Kane Fitzgerald", "Pat Fraher", "Rodney Mott"],
      leadRef: "Kane Fitzgerald",
      impact: "Fitzgerald's assignment to this Western Conference semifinals opener brings his balanced championship-level approach (42.3 fouls per game) and moderate home bias (52% home win rate) to a series where San Antonio begins their title run against upstart Portland behind Victor Wembanyama's playoff dominance. His controlled whistle management and slight pace-positive tendencies (+0.4) create showcase conditions for both Wembanyama's two-way brilliance and Portland's upset momentum while maintaining competitive integrity in conference semifinals basketball. Fitzgerald's moderate home bias provides slight systematic advantages for the Spurs' championship-caliber crowd while his balanced approach prevents artificial manipulation, allowing superior talent execution to determine outcomes in this talent-disparity matchup. The assignment suggests competitive showcase basketball where Fitzgerald's championship-level experience manages the intensity while allowing Wembanyama's generational talent to face legitimate playoff competition without officiating interference determining the outcome.",
      bettingAngle: "Lean toward SAS -12.5 as Fitzgerald's moderate home bias and balanced approach create slight systematic advantages for the superior Spurs talent while preventing artificial Portland advantages. The OVER 216.5 becomes attractive given Fitzgerald's slight pace-positive impact creating showcase conditions for both explosive offenses in conference semifinals basketball.",
      historical: "Fitzgerald worked 4 Spurs games this season (SAS 3-1) with San Antonio averaging 12.8 more points in the paint at home in Fitzgerald's assignments, showcasing Wembanyama's dominance in balanced competitive conditions. He officiated 3 Trail Blazers games (POR 2-1) with Portland shooting 41.2% from three on the road in Fitzgerald assignments, maintaining their offensive efficiency in neutral championship-level officiating environments."
    }
  ],
  refProfiles: [
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
      notableGame: "Leading tonight's PHI-BOS Game 3, bringing extreme home bias and grinding approach that creates systematic advantages for the Celtics' series-closing opportunity while disrupting Philadelphia's desperation rhythm through pace manipulation and whistle pressure."
    },
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
      notableGame: "Leading tonight's ATL-NYK Game 2, bringing legendary grinding approach and moderate home bias that creates systematic advantages for Brunson's championship experience while disrupting Atlanta's athletic rhythm in hostile MSG atmosphere."
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
      notableGame: "Leading tonight's POR-SAS Game 1, bringing balanced championship-level approach that creates showcase conditions for Wembanyama's conference semifinals debut while maintaining competitive integrity in talent-disparity matchup."
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
      notableGame: "Elite assignment veteran known for creating road-neutral showcase conditions that allow superior execution to determine outcomes without systematic home advantages or pace manipulation interference."
    },
    {
      name: "Kevin Cutler",
      number: 34,
      experience: "14 years",
      gamesThisSeason: 58,
      tendencies: {
        foulsPerGame: 40.8,
        homeWinPct: 56,
        avgPace: -0.7,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Home teams with strong crowd support, physical defensive schemes, veteran-led squads, teams thriving in emotional environments",
      worstFor: "Road teams needing neutral treatment, athletic transition offenses, young teams prone to foul trouble, pace-dependent systems",
      notableGame: "Supporting Tony Brothers in tonight's PHI-BOS Game 3, providing additional home bias amplification that complements Brothers' extreme tendencies while maintaining competitive flow in hostile Boston atmosphere."
    },
    {
      name: "Tyler Ford",
      number: 39,
      experience: "15 years",
      gamesThisSeason: 59,
      tendencies: {
        foulsPerGame: 43.4,
        homeWinPct: 53,
        avgPace: -0.4,
        technicalFrequency: "Average",
        overtimeGames: 6,
      },
      bestFor: "Home teams with crowd energy, physical interior play, veteran leadership, teams with strong halfcourt execution, methodical offenses",
      worstFor: "Road teams requiring neutral treatment, fast-paced transition systems, young cores prone to foul trouble, pace-manipulation dependent teams",
      notableGame: "Supporting Tony Brothers in tonight's PHI-BOS Game 3, providing moderate home bias that reinforces Brothers' extreme tendencies while managing whistle frequency in elimination-pressure atmosphere."
    },
    {
      name: "Sean Wright",
      number: 4,
      experience: "20 years",
      gamesThisSeason: 64,
      tendencies: {
        foulsPerGame: 41.9,
        homeWinPct: 52,
        avgPace: -0.2,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Veteran teams with disciplined execution, methodical halfcourt systems, teams with strong coaching, experienced playoff performers",
      worstFor: "Young chaotic offenses, teams requiring extreme pace advantages, emotionally volatile players, systems dependent on energy fluctuations",
      notableGame: "Supporting Scott Foster in tonight's ATL-NYK Game 2, providing veteran stability and clean whistle management that complements Foster's grinding approach while maintaining championship-level competitive integrity."
    },
    {
      name: "Natalie Sago",
      number: 9,
      experience: "8 years",
      gamesThisSeason: 62,
      tendencies: {
        foulsPerGame: 43.1,
        homeWinPct: 51,
        avgPace: -0.1,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Teams with disciplined offensive systems, veteran point guards, methodical execution, balanced competitive games, skilled shot-makers",
      worstFor: "Chaos-style offenses, emotionally volatile players, teams relying on whistle advantages, pace-manipulation dependent systems",
      notableGame: "Supporting Scott Foster in tonight's ATL-NYK Game 2, bringing disciplined approach and clean whistle that maintains championship-level competitive flow while Foster controls primary grinding tendencies and home bias dynamics."
    },
    {
      name: "Pat Fraher",
      number: 26,
      experience: "18 years",
      gamesThisSeason: 61,
      tendencies: {
        foulsPerGame: 41.7,
        homeWinPct: 51,
        avgPace: 1.2,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Athletic young teams, fast-break offenses, skilled perimeter play, pace-and-space systems, competitive showcases",
      worstFor: "Teams needing veteran-friendly whistles, grinding interior styles, systems dependent on systematic advantages, physical defensive schemes",
      notableGame: "Supporting Kane Fitzgerald in tonight's POR-SAS Game 1, providing pace-positive amplification that showcases both teams' athletic talent while maintaining competitive flow in conference semifinals opener."
    },
    {
      name: "Rodney Mott",
      number: 71,
      experience: "29 years",
      gamesThisSeason: 63,
      tendencies: {
        foulsPerGame: 42.8,
        homeWinPct: 49,
        avgPace: 0.6,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Veteran-led teams, methodical execution, balanced competitive environments, teams with strong coaching systems, experienced players",
      worstFor: "Young chaotic offenses, teams requiring extreme pace manipulation, systems dependent on emotional energy, inexperienced playoff squads",
      notableGame: "Supporting Kane Fitzgerald in tonight's POR-SAS Game 1, bringing veteran stability and balanced approach that helps manage conference semifinals intensity while Fitzgerald controls primary showcase dynamics."
    }
  ],
  weeklyTrend: "Monday's playoff assignments reveal strategic officiating deployment designed to create series-defining moments through calculated referee tendency exploitation in elimination and conference semifinals basketball. The Tony Brothers assignment to PHI-BOS Game 3 represents the most dramatic officiating intervention, where his extreme home bias (58%) and grinding pace-negative approach (-1.8) transform what should be a competitive Game 3 into systematic Celtics advantages for their series-closing opportunity at TD Garden. Brothers' assignment screams series-ending dynamics as his systematic whistle advantages historically favor home teams in elimination scenarios while his pace grinding prevents Philadelphia from generating the explosive offensive rhythm necessary for desperate road comebacks, creating exploitable value on Boston -8.5 and a premium UNDER 218.5 through pace manipulation that heavily favors the methodical Celtics over desperate Sixers. The Scott Foster assignment to ATL-NYK Game 2 brings his legendary grinding expertise to crucial swing-game basketball where the Knicks seek a commanding 2-0 series lead, with Foster's moderate home bias (54%) and whistle-heavy approach creating systematic advantages for Jalen Brunson's championship experience while disrupting Trae Young's volatile rhythm in hostile Madison Square Garden atmosphere, providing value on New York -6.0 while his pace-negative impact makes the UNDER 212.5 highly attractive in methodical grinding basketball. Conversely, the Kane Fitzgerald assignment to POR-SAS delivers championship-level showcase conditions where his balanced approach (52% home win rate) and slight pace-positive impact (+0.4) create perfect conditions for Victor Wembanyama's conference semifinals debut against legitimate playoff competition, making San Antonio -12.5 attractive as his moderate home bias amplifies superior talent advantages while the OVER 216.5 becomes strong through accelerated pace showcasing both explosive offenses. The supporting crew selections strategically amplify these primary tendencies without creating officiating chaos, with veterans like Kevin Cutler and Tyler Ford providing additional home bias support around Brothers' extreme assignment, Sean Wright and Natalie Sago offering stability around Foster's grinding approach, and Pat Fraher and Rodney Mott complementing Fitzgerald's showcase management. The broader assignment pattern shows calculated deployment where Brothers' extreme tendencies create systematic Celtics advantages for series closure, Foster's grinding approach maximizes Knicks' home court advantages in swing-game dynamics, and Fitzgerald's balanced stance showcases championship-caliber talent in conference semifinals opener. These assignments create clear betting value through predictable officiating impacts, particularly Brothers' transformation of a competitive Game 3 into systematic Boston advantages, Foster's amplification of New York's methodical grinding strengths, and Fitzgerald's showcase acceleration of superior Spurs talent, establishing systematic advantages that reward understanding referee tendency deployment in championship-defining playoff moments where series momentum and conference semifinals advancement hang in the balance."
};
