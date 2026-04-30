// Referee Tendency Reports — Know the Whistle
// Last updated: April 30, 2026

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
  generatedDate: "April 30, 2026",
  tonightAssignments: [
    {
      game: "NYK @ ATL",
      crew: ["Tony Brothers", "Lauren Holtkamp", "Jacyn Goble"],
      leadRef: "Tony Brothers",
      impact: "Brothers' assignment to this pivotal Game 3 brings his notorious home bias (58% home win rate) and grinding whistle-heavy approach (45.8 fouls per game) to Atlanta's desperate last stand against elimination. The Hawks face a commanding 0-2 deficit after falling at Madison Square Garden and need Brothers' systematic home advantages to generate the defensive intensity required to extend the series. His pace-negative tendencies (-1.8) favor Atlanta's halfcourt execution over New York's athletic transition game while his high technical frequency creates emotional landmines for the Knicks' veteran leadership in hostile State Farm Arena atmosphere. Brothers' grinding approach neutralizes Jalen Brunson's pace-and-space brilliance while amplifying Trae Young's individual shot creation through extended possessions and favorable whistle treatment, creating perfect conditions for the Hawks' survival basketball against New York's series-closing execution.",
      bettingAngle: "Strong fade on NYK -4.5 as Brothers' extreme home bias and pace-grinding create systematic advantages for Atlanta's desperate elimination game. The UNDER 212.5 is premium given Brothers' whistle-heavy approach and pace-negative impact creating extended possessions that favor Atlanta's halfcourt survival.",
      historical: "Brothers worked 4 Hawks games this season (ATL 3-1) with Atlanta shooting 8.3% better from three at home in Brothers' assignments, thriving in his pace-grinding that showcases Young's shot creation. He officiated 3 Knicks games (NYK 1-2) with New York averaging 4.7 fewer assists on the road in Brothers assignments, struggling when their ball movement is disrupted by his whistle-heavy grinding approach."
    },
    {
      game: "BOS @ PHI",
      crew: ["Scott Foster", "Bill Kennedy", "Tre Maddox"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this potential series-clinching Game 4 brings his legendary grinding expertise (44.2 fouls per game) and moderate home bias (54% home win rate) to Philadelphia's desperate elimination scenario after falling behind 2-1 following their stunning Game 3 upset victory. The Sixers need Foster's systematic home advantages and pace-negative tendencies (-0.8) to generate the grinding defensive intensity required to force Game 5, while his whistle-heavy approach creates foul trouble opportunities for Boston's championship-caliber depth. Foster's grinding style favors Joel Embiid's interior dominance while disrupting Boston's pace-and-space execution through extended possessions and physical play allowance, creating perfect conditions for Philadelphia's survival basketball against the Celtics' series-closing championship experience. His high technical frequency and overtime propensity keep dramatic late-game scenarios in play where Embiid's individual brilliance can overcome Boston's systematic advantages.",
      bettingAngle: "Value play on PHI +3.5 as Foster's moderate home bias and grinding approach create systematic advantages for Embiid's dominance while disrupting Boston's rhythm offense. The UNDER 209.5 is strong given Foster's pace-negative impact and whistle-heavy style creating extended defensive possessions.",
      historical: "Foster worked 5 Celtics games this season (BOS 3-2) with Boston shooting just 33.8% from three on the road in Foster assignments, struggling when their pace-and-space is disrupted by his grinding approach. He officiated 4 Sixers games (PHI 3-1) with Philadelphia averaging 6.2 more free throw attempts at home in Foster assignments, benefiting from his whistle-heavy interior-friendly officiating style."
    },
    {
      game: "DEN @ MIN",
      crew: ["Kane Fitzgerald", "Sean Williams", "Nate Green"],
      leadRef: "Kane Fitzgerald",
      impact: "Fitzgerald's assignment to this winner-take-all Game 5 elimination showdown brings his balanced championship-level approach (42.3 fouls per game) and moderate home bias (52% home win rate) to the most pressure-packed scenario in tonight's slate with both teams facing season-ending stakes. The series tied 2-2 creates perfect conditions for Fitzgerald's controlled whistle management and slight pace-positive tendencies (+0.4) to showcase elite talent without artificial manipulation, allowing Anthony Edwards' explosive athleticism to battle Jamal Murray's championship experience in pure competitive basketball. His moderate home bias provides subtle advantages for Minnesota's Target Center energy while his balanced approach prevents systematic manipulation, creating perfect elimination game conditions where veteran execution and youthful desperation clash in championship-defining moments. Fitzgerald's championship experience manages maximum intensity without interference while his pace-positive impact amplifies both teams' offensive firepower in do-or-die basketball.",
      bettingAngle: "Lean toward MIN +2.5 as Fitzgerald's moderate home bias creates subtle systematic advantages for Edwards' explosive potential in elimination desperation. The OVER 218.5 becomes attractive given Fitzgerald's pace-positive impact showcasing both explosive offenses in winner-take-all intensity.",
      historical: "Fitzgerald worked 3 Timberwolves games this season (MIN 2-1) with Minnesota averaging 12.4 more transition points at home in Fitzgerald assignments, thriving in his pace-positive approach that showcases Edwards' athleticism. He officiated 4 Nuggets games (DEN 2-2) with Denver shooting 47.1% from the field on the road in Fitzgerald assignments, maintaining offensive efficiency in his balanced competitive environments."
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
      notableGame: "Leading tonight's NYK-ATL Game 3, bringing extreme home bias and grinding approach that creates systematic advantages for Atlanta's desperate elimination survival while disrupting New York's pace-and-space execution through whistle-heavy manipulation."
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
      notableGame: "Leading tonight's BOS-PHI Game 4, bringing legendary grinding expertise and moderate home bias that creates systematic advantages for Embiid's interior dominance while disrupting Boston's championship rhythm in desperate Philadelphia atmosphere."
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
      notableGame: "Leading tonight's DEN-MIN Game 5, bringing balanced championship-level approach that creates showcase conditions for Edwards vs Murray elimination battle while maintaining competitive integrity in winner-take-all basketball."
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
      notableGame: "Supporting Tony Brothers in tonight's NYK-ATL Game 3, providing additional home bias amplification that complements Brothers' grinding approach while maintaining competitive flow in desperate Atlanta atmosphere."
    },
    {
      name: "Bill Kennedy",
      number: 55,
      experience: "26 years",
      gamesThisSeason: 64,
      tendencies: {
        foulsPerGame: 41.9,
        homeWinPct: 53,
        avgPace: -0.3,
        technicalFrequency: "Low",
        overtimeGames: 6,
      },
      bestFor: "Veteran-led teams, methodical halfcourt systems, teams with strong leadership, physical defensive schemes, experienced playoff squads",
      worstFor: "Young athletic teams, fast-break dependent offenses, teams requiring pace acceleration, emotionally driven systems",
      notableGame: "Supporting Scott Foster in tonight's BOS-PHI Game 4, bringing veteran stability and clean whistle that maintains championship-level competitive flow while Foster controls primary grinding tendencies."
    },
    {
      name: "Sean Williams",
      number: 7,
      experience: "17 years",
      gamesThisSeason: 64,
      tendencies: {
        foulsPerGame: 43.7,
        homeWinPct: 55,
        avgPace: -0.5,
        technicalFrequency: "Average",
        overtimeGames: 6,
      },
      bestFor: "Home teams with crowd energy, physical interior play, veteran leadership, methodical execution, defensive-minded systems",
      worstFor: "Road teams requiring neutral treatment, fast-paced offenses, young teams prone to foul trouble, transition-dependent systems",
      notableGame: "Supporting Kane Fitzgerald in tonight's DEN-MIN Game 5, providing additional home bias amplification that complements Fitzgerald's balanced approach while maintaining elimination game intensity."
    },
    {
      name: "Jacyn Goble",
      number: 68,
      experience: "9 years",
      gamesThisSeason: 55,
      tendencies: {
        foulsPerGame: 40.8,
        homeWinPct: 56,
        avgPace: -1.2,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Home teams with grinding styles, disciplined offensive systems, teams with veteran leadership, physical defensive schemes",
      worstFor: "Athletic transition teams, pace-dependent offenses, teams requiring neutral treatment, fast-break systems",
      notableGame: "Supporting Tony Brothers in tonight's NYK-ATL Game 3, bringing additional pace-grinding and home bias that amplifies Brothers' systematic advantages for Atlanta's desperate elimination survival."
    },
    {
      name: "Tre Maddox",
      number: 23,
      experience: "7 years",
      gamesThisSeason: 52,
      tendencies: {
        foulsPerGame: 42.1,
        homeWinPct: 51,
        avgPace: 0.2,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Balanced competitive games, disciplined young players, methodical systems, teams with strong coaching, clean execution",
      worstFor: "Chaotic offensive systems, emotionally volatile players, teams requiring systematic advantages, pace-manipulation dependent styles",
      notableGame: "Supporting Scott Foster in tonight's BOS-PHI Game 4, bringing clean balanced approach that maintains competitive flow while Foster controls primary grinding dynamics in elimination basketball."
    },
    {
      name: "Nate Green",
      number: 65,
      experience: "6 years",
      gamesThisSeason: 49,
      tendencies: {
        foulsPerGame: 39.4,
        homeWinPct: 50,
        avgPace: 1.1,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Athletic young teams, fast-break offenses, skilled perimeter play, pace-and-space systems, competitive showcases",
      worstFor: "Teams needing veteran-friendly whistles, grinding interior styles, systems dependent on systematic advantages, physical defensive schemes",
      notableGame: "Supporting Kane Fitzgerald in tonight's DEN-MIN Game 5, providing pace-positive amplification that showcases both teams' athletic talent while maintaining competitive balance in elimination showdown."
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
      notableGame: "Recently officiated ORL-DET Game 4, bringing road-neutral showcase conditions that allowed Orlando's superior execution and momentum to nearly complete one of the biggest playoff upsets in NBA history without artificial home court interference."
    }
  ],
  weeklyTrend: "Wednesday's playoff assignments reveal strategic officiating deployment designed to manage elimination desperation, series-clinching opportunities, and winner-take-all scenarios through calculated referee tendency exploitation across multiple high-stakes competitive dynamics. The Tony Brothers assignment to NYK-ATL Game 3 represents the most aggressive home bias deployment, where his extreme home favoritism (58%) and grinding whistle-heavy approach create systematic advantages for Atlanta's desperate elimination survival against New York's series-closing execution, making this assignment ideal for Hawks survival basketball through pace disruption and favorable whistle treatment that neutralizes the Knicks' athletic advantages while amplifying Trae Young's individual brilliance in hostile home atmosphere. Brothers' assignment screams desperation management as his grinding approach and technical frequency create emotional landmines for New York's veteran leadership while generating the systematic home advantages Atlanta needs to force Game 4, creating exploitable fade value on New York -4.5 through neutralized road execution while the UNDER 212.5 becomes premium through pace-grinding creating extended defensive possessions favoring Atlanta's halfcourt survival instincts. The Scott Foster assignment to BOS-PHI Game 4 brings his legendary grinding expertise to another elimination scenario where Philadelphia faces series defeat after Boston seized a 2-1 lead, with Foster's moderate home bias (54%) and whistle-heavy approach creating systematic advantages for Joel Embiid's interior dominance while disrupting Boston's championship rhythm through foul trouble and pace manipulation in desperate Philadelphia atmosphere, providing value on Philadelphia +3.5 while his pace-negative impact makes the UNDER 209.5 strong through grinding execution favoring Embiid's individual brilliance over Boston's systematic team advantages. The Kane Fitzgerald assignment to DEN-MIN Game 5 delivers championship-level competitive balance to the night's most pressure-packed winner-take-all scenario where both teams face season-ending stakes, with his moderate home bias (52%) and slight pace-positive impact (+0.4) creating perfect elimination game conditions for Anthony Edwards' explosive athleticism against Jamal Murray's championship experience, making Minnesota +2.5 attractive through subtle systematic advantages while the OVER 218.5 becomes strong through accelerated pace showcasing both explosive offenses in do-or-die competitive basketball. The supporting crew selections strategically amplify these primary tendencies without creating officiating chaos, with Lauren Holtkamp and Jacyn Goble providing additional home bias and pace-grinding around Brothers' Atlanta advantages, Bill Kennedy and Tre Maddox offering veteran stability around Foster's grinding approach, and Sean Williams and Nate Green complementing Fitzgerald's balanced elimination management. The broader assignment pattern shows calculated deployment where Brothers' extreme bias creates Atlanta's survival pathway through systematic home advantages, Foster's grinding generates Philadelphia's elimination response through interior-friendly officiating, and Fitzgerald's balance showcases elite talent in pure winner-take-all basketball. These assignments create clear betting value through predictable officiating impacts, particularly Brothers' systematic home bias making Atlanta +4.5 fade premium through pace disruption neutralizing New York's advantages, Foster's grinding approach providing Philadelphia +3.5 value through interior-friendly systematic advantages, and Fitzgerald's balanced showcase creating Minnesota +2.5 appeal through subtle home bias in elimination desperation, establishing systematic advantages that reward understanding referee tendency deployment in championship-defining playoff moments where elimination survival, series-closing execution, and winner-take-all dynamics hang in the balance through strategic officiating management designed to maximize competitive drama while maintaining predetermined systematic advantages."
};
