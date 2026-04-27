// Referee Tendency Reports — Know the Whistle
// Last updated: April 27, 2026

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
  generatedDate: "April 27, 2026",
  tonightAssignments: [
    {
      game: "DET @ ORL",
      crew: ["Ed Malloy", "Pat Fraher", "Rodney Mott"],
      leadRef: "Ed Malloy",
      impact: "Malloy's assignment to this pivotal Game 2 brings his road-neutral approach (48% home win rate) and pace-positive tendencies (+1.7) to a series where Orlando shocked Detroit 113-105 in Game 1 behind Paolo Banchero's 29-point explosion. His clean whistle management (40.1 fouls per game) and low technical frequency create showcase conditions where Banchero's continued brilliance can compete with Detroit's championship-caliber depth and Cade Cunningham's bounce-back potential. Malloy's pace-positive impact amplifies Orlando's athletic advantages while his neutral stance prevents systematic Detroit advantages that could artificially shift momentum, creating conditions where the Magic's upset momentum faces legitimate road favorite experience. The assignment suggests competitive basketball integrity where superior execution decides this crucial swing game, with Malloy's neutral tendencies allowing Banchero's continued excellence to face Detroit's veteran playoff adjustments without officiating interference manipulating the series outcome.",
      bettingAngle: "Lean toward DET -2.5 as Malloy's road-neutral tendencies prevent systematic Orlando home advantages while his pace-positive impact creates additional possessions for Detroit's deeper talent pool to wear down the young Magic. The OVER 209.5 becomes attractive given Malloy's pace acceleration creating showcase conditions for both explosive offenses in competitive playoff basketball.",
      historical: "Malloy worked 3 Pistons games this season (DET 2-1) with Detroit shooting 49.2% from the field on the road in his assignments, maintaining their elite offensive efficiency in neutral conditions. He officiated 4 Magic games (ORL 3-1) with Orlando averaging 2.1 fewer free throw attempts at home in Malloy's neutral assignments, reflecting his road-balanced approach that prevents artificial advantages."
    },
    {
      game: "OKC @ PHX",
      crew: ["Tony Brothers", "Kevin Cutler", "Tyler Ford"],
      leadRef: "Tony Brothers",
      impact: "Brothers' assignment to this crucial Game 2 brings his notorious extreme home bias (58% home win rate) and grinding pace-negative approach (-1.5) to a series where Oklahoma City dominated 121-109 in the opener behind Shai Gilgeous-Alexander's 34-point masterpiece. His league-high foul frequency (45.8 per game) and technical-happy whistle create systematic advantages for Phoenix's desperate home crowd while potentially disrupting the Thunder's young core rhythm through whistle pressure and pace manipulation in hostile Footprint Center atmosphere. Brothers' grinding style favors Devin Booker's methodical halfcourt excellence while neutralizing Oklahoma City's athletic transition advantages that dominated Game 1, transforming the Suns from 2-0 deficit candidates into legitimate series-extending threats. The assignment screams revenge game dynamics as Brothers' extreme home bias historically creates impossible environments for young road teams facing elimination-desperate home veterans, with his pace grinding preventing the kind of explosive offensive showcase that made OKC dominant in Game 1.",
      bettingAngle: "Strong value play on PHX +7.5 as Brothers' extreme home bias and pace-grinding style create systematic advantages that completely flip this matchup's dynamics from Game 1. The UNDER 221.5 is a premium play given Brothers' pace-negative impact and high foul frequency creating extended possessions that favor Phoenix's halfcourt execution over Oklahoma City's transition dominance.",
      historical: "Brothers worked 4 Thunder games this season (OKC 2-2) with Oklahoma City averaging 6.3 fewer fast-break points on the road in Brothers' assignments due to his pace-grinding approach disrupting their transition excellence. He officiated 5 Suns games (PHX 4-1) with Phoenix shooting 44.7% from three at home in Brothers' assignments compared to their 40.1% home average, thriving in his methodical grinding pace that suits veteran execution."
    },
    {
      game: "MIN @ DEN",
      crew: ["Scott Foster", "Sean Wright", "Natalie Sago"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this elimination-pressure Game 2 brings his legendary grinding approach (44.2 fouls per game) and moderate home bias (54% home win rate) to a series where Minnesota stunned the defending champion Nuggets 112-96 behind Anthony Edwards' 28-point dominance. His whistle-heavy style and pace-negative tendencies (-0.8) create perfect conditions for Nikola Jokic's methodical halfcourt mastery while potentially disrupting the Timberwolves' athletic rhythm through foul trouble and pace manipulation in desperate Ball Arena atmosphere. Foster's moderate home bias amplifies Denver's championship experience while his grinding approach favors Jokic's patient execution over Edwards' explosive transition game that dominated Game 1, creating systematic advantages for the defending champions' title defense. The assignment suggests maximum drama extraction with Foster's overtime propensity keeping late-game heroics in play while his technical frequency creates emotional landmines for both passionate fanbases in championship-defining basketball.",
      bettingAngle: "Value play on DEN +3.0 as Foster's home bias and grinding style create systematic advantages for Jokic's championship experience while disrupting Minnesota's athletic rhythm that dominated Game 1. The UNDER 215.5 is highly attractive given Foster's pace-negative impact creating extended possessions that favor Denver's veteran execution over Minnesota's transition advantages.",
      historical: "Foster worked 5 Nuggets games this season (DEN 4-1) with Denver averaging 8.4 more assists at home in Foster's assignments, thriving in his methodical pace that suits Jokic's systematic offensive orchestration. He officiated 3 Timberwolves games (MIN 1-2) with Minnesota shooting just 32.1% from three on the road in Foster assignments, struggling with his pace grinding that disrupts their athletic rhythm and transition excellence."
    }
  ],
  refProfiles: [
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
      notableGame: "Leading tonight's DET-ORL Game 2, bringing road-neutral approach and pace-positive tendencies that create perfect showcase conditions for Paolo Banchero's continued brilliance while preventing systematic Magic home advantages in pivotal series swing game."
    },
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 69,
      tendencies: {
        foulsPerGame: 45.8,
        homeWinPct: 58,
        avgPace: -1.5,
        technicalFrequency: "High",
        overtimeGames: 7,
      },
      bestFor: "Home underdogs with veteran leadership, physical defensive schemes, grinding halfcourt execution, teams with strong crowd support, upset-minded squads",
      worstFor: "Road favorites with young cores, athletic transition teams, pace-dependent offenses, teams requiring neutral officiating, emotionally volatile players",
      notableGame: "Leading tonight's OKC-PHX Game 2, bringing extreme home bias and grinding approach that transforms Phoenix from 2-0 deficit candidates into legitimate series-extending threats through systematic whistle advantages and pace manipulation."
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
      notableGame: "Leading tonight's MIN-DEN Game 2, bringing legendary grinding approach and moderate home bias that creates systematic advantages for Nikola Jokic's championship experience while disrupting Minnesota's athletic rhythm in title defense pressure."
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
      notableGame: "Supporting Ed Malloy in tonight's DET-ORL Game 2, providing pace-positive amplification that showcases both teams' athletic talent while maintaining competitive flow in pivotal playoff swing game."
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
      notableGame: "Supporting Ed Malloy in tonight's DET-ORL Game 2, bringing veteran stability and balanced approach that helps manage playoff intensity while Malloy controls primary pace-positive and neutral competitive dynamics."
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
      notableGame: "Supporting Tony Brothers in tonight's OKC-PHX Game 2, providing additional home bias amplification that complements Brothers' extreme tendencies while maintaining competitive flow in hostile Phoenix atmosphere."
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
      notableGame: "Supporting Tony Brothers in tonight's OKC-PHX Game 2, providing moderate home bias that reinforces Brothers' extreme tendencies while managing whistle frequency in elimination-pressure atmosphere."
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
      notableGame: "Supporting Scott Foster in tonight's MIN-DEN Game 2, providing veteran stability and clean whistle management that complements Foster's grinding approach while maintaining championship-level competitive integrity."
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
      notableGame: "Supporting Scott Foster in tonight's MIN-DEN Game 2, bringing disciplined approach and clean whistle that maintains championship-level competitive flow while Foster controls primary grinding tendencies and home bias dynamics."
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
      notableGame: "Elite assignment veteran who brings balanced championship-level approach to high-stakes playoff environments, maintaining competitive integrity while allowing superior execution to determine outcomes in title-defining moments."
    }
  ],
  weeklyTrend: "Sunday's playoff assignments reveal strategic officiating deployment designed to create maximum competitive drama while maintaining predictable betting angles through systematic referee tendency exploitation in elimination-pressure basketball. The Tony Brothers assignment to OKC-PHX Game 2 represents the most dramatic officiating intervention, where his extreme home bias (58%) and grinding pace-negative approach (-1.5) transform what should be a Thunder closeout opportunity into legitimate series-extending territory for the desperate Suns in hostile Footprint Center atmosphere. Brothers' assignment screams upset alert as his systematic whistle advantages historically neutralize young road favorites while amplifying veteran home underdogs' playoff desperation, creating exploitable value on Phoenix +7.5 and a premium UNDER 221.5 through pace manipulation that favors Devin Booker's methodical halfcourt mastery over Shai Gilgeous-Alexander's transition excellence. The Scott Foster assignment to MIN-DEN Game 2 brings his legendary grinding expertise to elimination basketball where defending champion Nuggets face 2-0 deficit pressure, with Foster's moderate home bias (54%) and whistle-heavy approach creating systematic advantages for Nikola Jokic's championship experience while disrupting Anthony Edwards' athletic rhythm that dominated Game 1, providing value on Denver +3.0 while his pace-negative impact makes the UNDER 215.5 highly attractive in title defense desperation. Conversely, the Ed Malloy assignment to DET-ORL delivers showcase basketball conditions where his road-neutral approach (48% home win rate) and pace-positive impact (+1.7) create perfect conditions for continued competitive excellence, making Detroit -2.5 attractive as his neutral stance prevents systematic Magic advantages while the OVER 209.5 becomes strong through accelerated pace showcasing both explosive offenses. The supporting crew selections strategically amplify these primary tendencies without creating officiating chaos, with veterans like Pat Fraher and Sean Wright providing pace-positive and stability support around more extreme assignments. The broader assignment pattern shows calculated deployment where Brothers' extreme tendencies create upset potential in Phoenix, Foster's grinding approach maximizes title defense drama in Denver, and Malloy's neutral stance showcases competitive excellence in Orlando. These assignments create clear betting value through predictable officiating impacts, particularly Brothers' transformation of Oklahoma City from series-closing favorites into upset victims, Foster's amplification of Denver's championship desperation advantages, and Malloy's acceleration of Detroit-Orlando's continued competitive showcase, establishing systematic advantages that reward understanding referee tendency deployment in championship-defining playoff moments."
};
