// Referee Tendency Reports — Know the Whistle
// Last updated: May 2, 2026

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
  generatedDate: "May 2, 2026",
  tonightAssignments: [
    {
      game: "PHI @ BOS",
      crew: ["Scott Foster", "James Capers", "Tre Maddox"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this winner-take-all Game 5 at TD Garden brings his notorious grinding approach (44.2 fouls per game) and home bias (54% home win rate) to a series where Philadelphia has seized momentum after their stunning Game 4 victory. The Celtics desperately need Foster's systematic home advantages and pace-grinding tendencies (-0.8) to disrupt Joel Embiid's dominant interior presence while creating the halfcourt execution required to contain Tyrese Maxey's explosive scoring through extended possessions and whistle-heavy basketball. Foster's high technical frequency could create emotional landmines for Philadelphia's championship-hungry veterans while his grinding approach neutralizes their pace-and-space execution, generating perfect conditions for Boston's championship DNA to emerge in hostile TD Garden atmosphere where Jayson Tatum can dominate through favorable whistle treatment and systematic playoff officiating that rewards veteran leadership over youthful exuberance in elimination pressure.",
      bettingAngle: "Strong play on BOS -4.5 as Foster's extreme home bias and grinding approach create systematic advantages for Boston's halfcourt execution while disrupting Philadelphia's pace-dependent offense. The UNDER 218.5 is premium given Foster's pace-grinding style and whistle-heavy approach extending possessions in winner-take-all basketball.",
      historical: "Foster worked 5 Celtics games this season (BOS 4-1) with Boston shooting 49.2% from the field at home in Foster assignments, thriving in his grinding halfcourt environments. He officiated 4 Sixers games (PHI 2-2) with Philadelphia committing 18.8 fouls per game on the road in Foster assignments, struggling with his whistle-heavy approach away from home."
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
      notableGame: "Leading tonight's PHI-BOS Game 5, bringing legendary grinding expertise that creates systematic advantages for Boston's home-court execution while disrupting Philadelphia's pace-dependent championship hopes through interior-friendly officiating and technical frequency management."
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
      notableGame: "Recently controlled LAL-HOU Game 2, bringing extreme home bias and grinding approach that created systematic advantages for Houston's halfcourt execution while disrupting Lakers' championship rhythm through whistle-heavy pace manipulation."
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
      notableGame: "Recently controlled DET-ORL Game 5, bringing road-neutral showcase conditions that prevented systematic advantages while his pace-positive impact created perfect elimination basketball where Orlando could compete through pure execution."
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
      notableGame: "Recently controlled CLE-TOR Game 3, bringing balanced championship-level approach with moderate home bias that created perfect series-shifting conditions while maintaining competitive integrity in crucial momentum basketball."
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
      notableGame: "Controlled several high-scoring regular season games with clean pace-positive approach that showcases elite athletic talent while maintaining competitive flow through minimal whistle interference."
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
      notableGame: "Supporting Scott Foster in tonight's PHI-BOS Game 5, providing additional veteran-friendly approach that complements Foster's grinding style while maintaining competitive balance in winner-take-all elimination basketball."
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
      notableGame: "Recently supported Brothers in LAL-HOU series, providing additional home bias amplification that complemented grinding approach while maintaining competitive flow in playoff elimination scenarios."
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
      notableGame: "Recently supported Ed Malloy in elimination games, bringing additional pace-positive impact and neutral approach that creates showcase conditions for superior talent to determine outcomes."
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
      notableGame: "Supporting Scott Foster in tonight's PHI-BOS Game 5, providing additional grinding impact and home bias that complements Foster's whistle-heavy approach in winner-take-all championship basketball."
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
      notableGame: "Controlled several upset-friendly games this season with road-friendly approach that prevents systematic home advantages while pace-positive impact showcases superior athletic execution."
    }
  ],
  weeklyTrend: "Friday's single-game playoff assignment reveals strategic officiating deployment designed to manage winner-take-all Game 5 dynamics where momentum shifts and championship survival create maximum pressure scenarios requiring calculated referee tendency exploitation. The Scott Foster assignment to PHI-BOS represents the most significant grinding deployment where his extreme whistle-heavy approach (44.2 fouls per game) and systematic home bias (54%) create perfect conditions for Boston's home-court advantage amplification while disrupting Philadelphia's pace-dependent championship execution through technical frequency and pace manipulation that rewards veteran leadership over youthful exuberance. Foster's legendary grinding expertise and high technical frequency create emotional landmines for Philadelphia's championship-hungry core while his pace-negative impact (-0.8) neutralizes their explosive transition offense, generating systematic advantages for Boston's halfcourt execution through extended possessions and whistle-heavy basketball that favors Jayson Tatum's superstar treatment over Joel Embiid's interior dominance in hostile TD Garden atmosphere where crowd energy meets systematic officiating bias. The supporting crew selection strategically amplifies Foster's primary tendencies through complementary grinding approaches, with James Capers providing additional veteran-friendly balance and methodical execution support while Tre Maddox delivers extra home bias and pace-grinding amplification that creates maximum systematic advantages for Boston's championship survival through whistle manipulation that extends possessions favoring their halfcourt expertise over Philadelphia's athletic transition attack. This assignment pattern creates premium betting value through predictable officiating impact, particularly BOS -4.5 becoming strong through systematic home advantages and grinding pace manipulation while UNDER 218.5 profits from Foster's whistle-heavy approach creating extended possessions that favor Boston's methodical execution over explosive scoring environments, establishing clear officiating deployment where championship-level grinding meets home bias amplification designed to reward veteran playoff experience over youthful championship hunger in winner-take-all elimination basketball. The broader weekly assignment context reveals calculated referee tendency management where Thursday's varied approaches (Malloy's neutrality, Fitzgerald's balance, Brothers' extreme bias) created diverse competitive environments spanning historic upsets, series control, and momentum shifts, while Friday's singular Foster deployment concentrates maximum grinding impact and home bias into one crucial Game 5 where Boston's championship survival requires systematic officiating advantages to overcome Philadelphia's superior talent execution and series momentum through pace manipulation and whistle-heavy basketball that creates emotional pressure for road underdogs while rewarding home-court veteran leadership with favorable treatment in hostile playoff atmosphere. Foster's assignment specifically targets Philadelphia's pace-dependent system vulnerabilities while amplifying Boston's halfcourt strengths through systematic advantages that make BOS -4.5 premium value and UNDER 218.5 strong through grinding approach that extends possessions favoring methodical execution over explosive athletic performance, creating exploitable officiating patterns that reward understanding referee tendency deployment in championship elimination scenarios where systematic advantages determine outcomes through calculated whistle management designed to maximize home-court impact while creating technical frequency landmines for emotionally charged road championship contenders facing hostile crowd energy and systematic officiating bias working against their pace-dependent championship execution."
};
