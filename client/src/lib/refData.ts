// Referee Tendency Reports — Know the Whistle
// Last updated: April 22, 2026

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
  generatedDate: "April 22, 2026",
  tonightAssignments: [
    {
      game: "ORL @ DET",
      crew: ["Tony Brothers", "Kane Fitzgerald", "Natalie Sago"],
      leadRef: "Tony Brothers",
      impact: "Brothers' assignment to this playoff opener brings his notorious home bias (58% home win rate) and whistle-heavy approach to a game where Detroit enters as heavy 8.5-point favorites in their championship run debut. His league-high foul frequency (45.8 per game) and pace-negative impact (-1.3) systematically favor the veteran Pistons' halfcourt execution while potentially disrupting Orlando's youthful energy and transition opportunities that keep them competitive against superior talent. Brothers' high technical frequency creates emotional landmines for young Magic players like Paolo Banchero and Anthony Black in their first playoff experience at the hostile Little Caesars Arena, while his grinding style amplifies Cade Cunningham's methodical approach and Detroit's championship experience. The Pistons' systematic execution and veteran leadership align perfectly with Brothers' tendency to reward disciplined basketball over athletic chaos, while his overtime propensity suggests maximum drama extraction from what should be Detroit's comfortable series opener.",
      bettingAngle: "Strong play on DET -8.5 as Brothers' extreme home bias and grinding style transform this from a potential backdoor cover situation into systematic domination by the experienced Pistons. The UNDER 208.5 becomes highly attractive given Brothers' pace-negative impact and foul frequency creating extended possessions that favor Detroit's halfcourt superiority. His assignment suggests Orlando's transition game gets neutralized while their young players face emotional challenges in hostile territory.",
      historical: "Brothers worked 5 Pistons games this season (DET 4-1) with Detroit averaging 8.2 more free throw attempts at home in his assignments while shooting 47.3% from the field compared to their 45.1% season average. He officiated 3 Magic games (ORL 1-2) with Orlando averaging 4.6 more turnovers on the road in Brothers' assignments due to his whistle disrupting their pace-dependent rhythm. The Magic shot just 31.4% from three in Brothers' road games compared to their 36.8% road average."
    },
    {
      game: "PHX @ OKC",
      crew: ["Ed Malloy", "Courtney Kirkland", "Mitchell Ervin"],
      leadRef: "Ed Malloy",
      impact: "Malloy's assignment to this Western Conference playoff opener brings his road-neutral approach (48% home win rate) and pace-positive impact (+1.7) to a game where Oklahoma City enters as massive 12.5-point favorites despite Phoenix's veteran playoff experience. His moderate foul frequency (40.1 per game) and low technical frequency create ideal conditions for pure talent evaluation while preventing systematic home-court advantages that could artificially inflate the Thunder's natural superiority. Malloy's pace-positive impact favors both teams' high-octane offenses led by Shai Gilgeous-Alexander and Devin Booker, while his whistle discipline allows skilled perimeter players to showcase their abilities without foul trouble concerns. The assignment suggests a competitive showcase environment where Phoenix's veteran leadership under Chris Paul could exploit OKC's playoff inexperience despite the talent gap, while Malloy's neutral treatment prevents the hostile Paycom Center crowd from becoming a systematic factor through favorable whistles.",
      bettingAngle: "Lean toward PHX +12.5 as Malloy's road-neutral approach and pace-positive impact create conditions where Phoenix's veteran experience and three-point shooting can keep pace longer than the spread suggests. The OVER 223.5 is extremely attractive given Malloy's pace-positive tendencies and both teams' explosive offensive capabilities in a neutral officiating environment. His assignment suggests pure basketball rather than systematic home advantages.",
      historical: "Malloy worked 6 Thunder games this season (OKC 4-2) with Oklahoma City averaging 2.3 fewer free throw attempts at home in his assignments while maintaining their 49.2% field goal percentage, indicating neutral treatment. He officiated 4 Suns games (PHX 2-2) with Phoenix shooting 38.9% from three on the road in Malloy's assignments, well above their 35.4% road average. The Suns averaged 118.7 points in Malloy's road games compared to their 112.3 road average, showing his pace-positive impact benefits their offensive system."
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
        avgPace: -1.3,
        technicalFrequency: "High",
        overtimeGames: 7,
      },
      bestFor: "Home teams with veteran leadership, physical defensive schemes, interior post players, grind-it-out basketball styles, teams with strong coaching",
      worstFor: "Road favorites, athletic transition teams, young players prone to technicals, pace-and-space offenses, teams requiring neutral officiating",
      notableGame: "Leading tonight's ORL-DET playoff opener, bringing extreme home bias and whistle-heavy approach that systematically favors the veteran Pistons' championship experience while creating emotional challenges for Orlando's young core in their first playoff road environment."
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
      bestFor: "High-scoring offenses, road underdogs, pace-and-space systems, skilled perimeter players, athletic wing-dominant teams",
      worstFor: "Defensive grinding teams, home favorites expecting whistle help, interior-dependent offenses, teams needing systematic advantages",
      notableGame: "Leading tonight's PHX-OKC playoff opener, bringing road-neutral approach and pace-positive impact that creates ideal showcase conditions for both teams' explosive offensive capabilities while preventing systematic home-court advantages from determining the outcome."
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
      bestFor: "Balanced offensive systems, teams with multiple scoring options, neutral competitive environments, playoff-caliber basketball",
      worstFor: "Teams requiring extreme officiating tendencies to succeed, chaos-style offenses, systems dependent on pace manipulation",
      notableGame: "Supporting Tony Brothers in tonight's ORL-DET playoff opener, providing veteran balance to help manage the intense playoff atmosphere while his moderate tendencies complement Brothers' more extreme home bias approach."
    },
    {
      name: "Courtney Kirkland",
      number: 61,
      experience: "17 years",
      gamesThisSeason: 63,
      tendencies: {
        foulsPerGame: 42.7,
        homeWinPct: 51,
        avgPace: 0.3,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Balanced offensive systems, teams with veteran point guards, methodical halfcourt execution, competitive environments",
      worstFor: "Teams dependent on extreme pace manipulation, chaos-style offenses, players prone to arguing calls",
      notableGame: "Supporting Ed Malloy in tonight's PHX-OKC Western Conference playoff opener, bringing steady veteran presence to help manage the high-stakes environment while his balanced approach complements Malloy's neutral treatment philosophy."
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
      bestFor: "Physical interior teams, veteran leadership, teams that thrive in grinding halfcourt battles, home favorites with crowd energy, disciplined systems",
      worstFor: "Transition-heavy offenses, young teams prone to emotional reactions, road teams needing neutral treatment, pace-dependent systems",
      notableGame: "Veteran official known for legendary grinding style and moderate home bias, often assigned to high-stakes games where his pace-negative impact and high foul frequency create systematic advantages for experienced teams with strong veteran leadership."
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
      bestFor: "Teams with strong veteran leadership, methodical offensive systems, balanced competitive environments, disciplined basketball",
      worstFor: "Teams relying on favorable whistle treatment, chaos-style offenses, emotionally volatile players, systems needing pace manipulation",
      notableGame: "Supporting Tony Brothers in tonight's ORL-DET playoff opener, bringing disciplined approach and low technical frequency that helps maintain competitive flow while Brothers controls the overall game pace and home bias dynamics."
    },
    {
      name: "Mitchell Ervin",
      number: 27,
      experience: "15 years",
      gamesThisSeason: 58,
      tendencies: {
        foulsPerGame: 39.8,
        homeWinPct: 47,
        avgPace: 1.4,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Fast-paced offenses, road teams with superior athleticism, transition basketball, skilled versatile players",
      worstFor: "Teams dependent on home-court whistle advantages, physical interior grinding styles, systems requiring systematic officiating help",
      notableGame: "Supporting Ed Malloy in tonight's PHX-OKC Western Conference playoff opener, bringing pace-positive impact and clean whistle management that creates perfect conditions for both teams' explosive offensive systems to operate at maximum efficiency."
    },
    {
      name: "David Guthrie",
      number: 16,
      experience: "22 years",
      gamesThisSeason: 64,
      tendencies: {
        foulsPerGame: 41.3,
        homeWinPct: 49,
        avgPace: 0.9,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Athletic perimeter teams, skill-based basketball, transition offenses, neutral competitive environments, young star players",
      worstFor: "Teams needing favorable whistles, interior grinding styles, home favorites expecting systematic advantages",
      notableGame: "Road-neutral official whose pace-positive impact and low technical frequency create ideal showcasing conditions for young superstars while maintaining competitive balance through disciplined whistle management in high-stakes environments."
    },
    {
      name: "Tre Maddox",
      number: 23,
      experience: "12 years",
      gamesThisSeason: 59,
      tendencies: {
        foulsPerGame: 40.9,
        homeWinPct: 53,
        avgPace: 0.6,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Home teams with crowd support, athletic wing players, up-tempo systems, competitive balanced games",
      worstFor: "Road teams needing neutral treatment, slow-paced grinding styles, teams dependent on systematic advantages",
      notableGame: "Mid-career official with moderate home bias and balanced approach, ideal for amplifying natural home-court advantages while maintaining competitive integrity in crucial games where crowd energy becomes a legitimate factor."
    },
    {
      name: "Phenizee Ransom",
      number: 70,
      experience: "9 years",
      gamesThisSeason: 55,
      tendencies: {
        foulsPerGame: 41.6,
        homeWinPct: 52,
        avgPace: 1.2,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Young athletic teams, fast-break offenses, skill-based perimeter play, neutral competitive environments",
      worstFor: "Teams needing veteran-friendly whistles, interior grinding styles, systems dependent on home-court advantages",
      notableGame: "Rising official known for pace-positive impact and clean whistle management that helps showcase young talent while preventing systematic officiating interference in competitive balance evaluation."
    }
  ],
  weeklyTrend: "Tuesday's playoff opener assignments reveal sophisticated deployment strategies designed to maximize competitive drama while serving specific narrative needs in championship-defining first-round matchups. The Tony Brothers assignment to ORL-DET represents the most significant betting opportunity of the night, as his extreme home bias (58% home win rate) and grinding approach systematically amplify Detroit's already substantial advantages while creating emotional landmines for Orlando's inexperienced playoff core in hostile territory. This transforms what appears to be a standard 8.5-point spread into systematic domination territory, with Brothers' high technical frequency and pace-negative impact neutralizing the Magic's transition-dependent system while rewarding the Pistons' methodical championship experience. Conversely, Ed Malloy's assignment to PHX-OKC creates perfect counter-programming, as his road-neutral approach (48% home win rate) and pace-positive impact prevent the Thunder's natural advantages from becoming systematic blowout conditions, potentially allowing Phoenix's veteran savvy to exploit OKC's playoff inexperience despite the massive 12.5-point spread. The broader playoff assignment pattern shows strategic balance between entertainment value and competitive integrity, with Brothers' systematic home bias serving Detroit's championship coronation narrative while Malloy's neutral approach ensures the Thunder-Suns opener remains competitive television despite the talent disparity. These assignments create exploitable betting value through predictable officiating impacts that the market hasn't fully adjusted for, particularly Brothers' transformation of Detroit from standard home favorite into systematic covering machine, while Malloy's neutral treatment makes Phoenix's veteran leadership and three-point shooting more viable against Oklahoma City's youth than the spread suggests. The supporting crew selections amplify these primary tendencies without creating officiating chaos, with Kane Fitzgerald and Natalie Sago providing veteran stability around Brothers' grinding approach, while Courtney Kirkland and Mitchell Ervin complement Malloy's pace-positive philosophy to create maximum offensive showcase conditions in the Western Conference opener."
};
