// Referee Tendency Reports — Know the Whistle
// Last updated: May 1, 2026

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
  generatedDate: "May 1, 2026",
  tonightAssignments: [
    {
      game: "DET @ ORL",
      crew: ["Ed Malloy", "Courtney Kirkland", "John Butler"],
      leadRef: "Ed Malloy",
      impact: "Malloy's assignment to this potential series-clinching Game 5 brings his road-neutral tendencies (48% home win rate) and pace-positive approach (+1.7) to Orlando's historic upset opportunity against top-seeded Detroit. The Magic need just one more victory to complete one of the biggest upsets in NBA history, and Malloy's balanced approach prevents systematic advantages for either side while his pace-positive impact showcases Paolo Banchero's explosive offensive ability against Detroit's veteran defense. His clean whistle management and low technical frequency create perfect conditions for Orlando's young core to execute without interference while preventing Detroit from receiving desperate elimination-game officiating advantages. Malloy's road-neutral history makes this assignment ideal for competitive basketball where superior execution determines the outcome rather than systematic home advantages.",
      bettingAngle: "Value play on DET +3.5 as Malloy's road-neutral tendencies prevent systematic home advantages for Orlando while his pace-positive impact could favor Detroit's veteran execution. The OVER 208.5 becomes attractive given Malloy's pace acceleration and potential for high-scoring elimination basketball.",
      historical: "Malloy worked 4 Magic games this season (ORL 2-2) with Orlando averaging 3.8 more turnovers at home in Malloy assignments, struggling when pace acceleration exposes their youth. He officiated 3 Pistons games (DET 3-0) with Detroit shooting 46.2% from three on the road in Malloy assignments, thriving in his balanced competitive environments that reward veteran execution."
    },
    {
      game: "CLE @ TOR",
      crew: ["Kane Fitzgerald", "Sean Wright", "Natalie Sago"],
      leadRef: "Kane Fitzgerald",
      impact: "Fitzgerald's assignment to this series-shifting Game 3 brings his balanced championship-level approach (42.3 fouls per game) and moderate home bias (52% home win rate) to Toronto's first home game in a deadlocked 1-1 series. The Raptors need Fitzgerald's subtle systematic advantages and controlled whistle management to generate the home-court energy required to seize series control, while his slight pace-positive tendencies (+0.4) favor both teams' explosive offensive capabilities in what should be a competitive showcase. Fitzgerald's moderate home bias provides Pascal Siakam perfect conditions for interior dominance while his balanced approach prevents Cleveland from receiving systematic road disadvantages, creating ideal Game 3 dynamics where home-court atmosphere meets championship-level competitive balance in crucial series momentum basketball.",
      bettingAngle: "Lean toward TOR as Fitzgerald's moderate home bias creates subtle advantages for Raptors' home-court energy while his balanced approach maintains competitive flow. The OVER 216.5 looks strong given Fitzgerald's pace-positive impact showcasing both explosive offenses in series-shifting basketball.",
      historical: "Fitzgerald worked 4 Cavaliers games this season (CLE 2-2) with Cleveland averaging 26.3 assists per game on the road in Fitzgerald assignments, maintaining ball movement in his balanced environments. He officiated 3 Raptors games (TOR 2-1) with Toronto shooting 38.1% from three at home in Fitzgerald assignments, executing efficiently in his pace-positive showcase conditions."
    },
    {
      game: "LAL @ HOU",
      crew: ["Tony Brothers", "Lauren Holtkamp", "Tre Maddox"],
      leadRef: "Tony Brothers",
      impact: "Brothers' assignment to this crucial Game 2 brings his notorious home bias (58% home win rate) and grinding whistle-heavy approach (45.8 fouls per game) to Houston's opportunity to take commanding series control after their stunning Game 1 upset victory over the Lakers. The Rockets need Brothers' systematic home advantages and pace-grinding tendencies (-1.8) to generate the halfcourt execution required to neutralize LeBron James and Anthony Davis while amplifying Alperen Sengun's interior dominance through favorable whistle treatment and extended possessions. Brothers' grinding approach disrupts the Lakers' veteran pace-and-space execution while creating perfect conditions for Houston's young core to execute their methodical halfcourt attack in hostile Toyota Center atmosphere where his technical frequency could create emotional landmines for Los Angeles' championship leadership under elimination pressure.",
      bettingAngle: "Strong play on HOU -4.5 as Brothers' extreme home bias and grinding approach create systematic advantages for Houston's halfcourt execution while disrupting Lakers' veteran rhythm. The UNDER 211.5 is premium given Brothers' pace-grinding and whistle-heavy style extending possessions that favor Houston's methodical attack.",
      historical: "Brothers worked 3 Lakers games this season (LAL 1-2) with Los Angeles scoring 8.4 fewer fast-break points on the road in Brothers assignments, struggling when their pace is disrupted by his grinding approach. He officiated 4 Rockets games (HOU 3-1) with Houston shooting 52.1% from two-point range at home in Brothers assignments, dominating interior execution in his whistle-heavy halfcourt-friendly environments."
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
      notableGame: "Leading tonight's DET-ORL Game 5, bringing road-neutral showcase conditions that prevent systematic advantages while his pace-positive impact creates perfect elimination basketball where Orlando's superior execution can complete the historic upset without artificial interference."
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
      notableGame: "Leading tonight's CLE-TOR Game 3, bringing balanced championship-level approach with moderate home bias that creates perfect series-shifting conditions while maintaining competitive integrity in crucial momentum basketball."
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
      notableGame: "Leading tonight's LAL-HOU Game 2, bringing extreme home bias and grinding approach that creates systematic advantages for Houston's halfcourt execution while disrupting Lakers' championship rhythm through whistle-heavy pace manipulation."
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
      notableGame: "Recently controlled PHI-BOS Game 4, bringing legendary grinding expertise that helped Philadelphia force Game 5 through interior-friendly officiating and pace manipulation that favored Embiid's dominance over Boston's championship rhythm."
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
      notableGame: "Controlled several high-stakes regular season games with clean execution and balanced approach that maintains competitive integrity while allowing superior talent to determine outcomes through pure basketball."
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
      notableGame: "Supporting Tony Brothers in tonight's LAL-HOU Game 2, providing additional home bias amplification that complements Brothers' grinding approach while maintaining competitive flow in Houston's series-control opportunity."
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
      notableGame: "Supporting Ed Malloy in tonight's DET-ORL Game 5, bringing additional pace-positive impact and neutral approach that creates perfect elimination showcase conditions for Orlando's historic upset completion opportunity."
    },
    {
      name: "Sean Wright",
      number: 4,
      experience: "19 years",
      gamesThisSeason: 61,
      tendencies: {
        foulsPerGame: 43.9,
        homeWinPct: 53,
        avgPace: -0.2,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Balanced competitive teams, veteran leadership, methodical halfcourt execution, teams with strong coaching, physical defensive schemes",
      worstFor: "Pace-dependent transition offenses, young emotional teams, systems requiring extreme pace manipulation, undisciplined squads",
      notableGame: "Supporting Kane Fitzgerald in tonight's CLE-TOR Game 3, providing additional home bias and balanced approach that maintains competitive series-shifting dynamics while showcasing elite talent execution."
    },
    {
      name: "Natalie Sago",
      number: 9,
      experience: "8 years",
      gamesThisSeason: 54,
      tendencies: {
        foulsPerGame: 41.3,
        homeWinPct: 54,
        avgPace: 0.1,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Disciplined young teams, balanced systems, clean execution, teams with strong coaching, competitive showcases",
      worstFor: "Chaotic offensive systems, emotionally volatile players, teams requiring systematic advantages, pace-manipulation dependent styles",
      notableGame: "Supporting Kane Fitzgerald in tonight's CLE-TOR Game 3, bringing clean balanced approach that maintains competitive flow while Fitzgerald controls primary series-shifting dynamics in crucial momentum basketball."
    },
    {
      name: "John Butler",
      number: 37,
      experience: "14 years",
      gamesThisSeason: 57,
      tendencies: {
        foulsPerGame: 38.6,
        homeWinPct: 50,
        avgPace: 2.1,
        technicalFrequency: "Low",
        overtimeGames: 1,
      },
      bestFor: "Athletic transition teams, young skilled players, pace-and-space offenses, competitive balanced matchups, fast-break systems",
      worstFor: "Teams needing systematic advantages, grinding defensive styles, interior-dependent offenses, veteran-friendly whistle treatment",
      notableGame: "Supporting Ed Malloy in tonight's DET-ORL Game 5, providing maximum pace-positive impact and neutral treatment that creates perfect elimination conditions for Orlando's superior execution to complete the historic playoff upset."
    }
  ],
  weeklyTrend: "Thursday's playoff assignments reveal strategic officiating deployment designed to manage potential series-clinching scenarios, elimination desperation, and crucial momentum shifts through calculated referee tendency exploitation across high-stakes competitive dynamics spanning historic upset completions, series control opportunities, and championship survival basketball. The Ed Malloy assignment to DET-ORL Game 5 represents the most significant neutral deployment where his road-friendly tendencies (48% home win rate) and pace-positive approach (+1.7) create perfect showcase conditions for Orlando's potential historic upset completion without systematic interference, allowing Paolo Banchero's superior talent and execution to determine the outcome in pure competitive basketball rather than artificial home advantages, making this assignment ideal for Magic victory through merit-based officiating that rewards the better-performing team while Detroit faces elimination without systematic help from Brothers-style home bias manipulation. Malloy's clean approach and low technical frequency prevent elimination-game desperation from creating officiating chaos while his pace-positive impact showcases Orlando's youth and athleticism against Detroit's veteran execution, creating exploitable value on Detroit +3.5 through prevented systematic advantages while the OVER 208.5 becomes attractive through accelerated pace in elimination basketball featuring explosive young talent. The Kane Fitzgerald assignment to CLE-TOR Game 3 brings championship-level balance to crucial series-shifting basketball where both teams seek control of a deadlocked 1-1 matchup, with his moderate home bias (52%) and slight pace-positive impact (+0.4) providing subtle advantages for Toronto's home-court energy while maintaining competitive integrity that showcases Pascal Siakam against Donovan Mitchell in pure talent-based execution, creating perfect Game 3 dynamics where home atmosphere meets balanced officiating in momentum-defining basketball that rewards superior execution rather than systematic manipulation. The Tony Brothers assignment to LAL-HOU Game 2 delivers maximum home bias deployment where Houston can take commanding series control after their shocking Game 1 upset, with Brothers' extreme home favoritism (58%) and grinding whistle-heavy approach creating systematic advantages for the Rockets' halfcourt execution while disrupting LeBron and Davis through pace manipulation and technical frequency that creates emotional landmines for veteran championship leadership under pressure, making HOU -4.5 premium value through systematic advantages while the UNDER 211.5 becomes strong through pace-grinding creating extended possessions favoring Houston's methodical attack over Lakers' veteran rhythm. The supporting crew selections strategically amplify these primary tendencies through complementary approaches, with Courtney Kirkland and John Butler providing additional pace-positive and neutral impact around Malloy's balanced showcase conditions, Sean Wright and Natalie Sago offering home bias support and competitive balance around Fitzgerald's series-shifting management, and Lauren Holtkamp and Tre Maddox delivering additional home bias and grinding amplification around Brothers' systematic Houston advantages. The broader assignment pattern reveals calculated deployment where Malloy's neutrality creates pure competitive conditions for Orlando's merit-based upset completion, Fitzgerald's balance provides perfect series-shifting dynamics with subtle home advantages, and Brothers' extreme bias generates maximum systematic support for Houston's series-control opportunity through grinding pace manipulation that disrupts Lakers' championship execution. These assignments create clear betting value through predictable officiating impacts, particularly Malloy's road-neutral approach making Detroit +3.5 attractive through prevented systematic disadvantages while OVER 208.5 benefits from pace acceleration, Fitzgerald's moderate home bias supporting Toronto while OVER 216.5 profits from pace-positive showcase basketball, and Brothers' extreme grinding making HOU -4.5 and UNDER 211.5 premium through systematic advantages that amplify Houston's halfcourt execution while neutralizing Lakers' pace-and-space championship experience, establishing officiating deployment patterns that reward understanding referee tendency management in playoff scenarios where historic upsets, series control, and championship survival hang in the balance through strategic whistle management designed to maximize competitive drama while maintaining predetermined systematic advantages that create exploitable value for informed basketball analysts."
};
