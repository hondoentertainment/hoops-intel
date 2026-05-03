// Referee Tendency Reports — Know the Whistle
// Last updated: May 3, 2026

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
  generatedDate: "May 3, 2026",
  tonightAssignments: [
    {
      game: "ORL @ DET",
      crew: ["Tony Brothers", "Kane Fitzgerald", "Lauren Holtkamp"],
      leadRef: "Tony Brothers",
      impact: "Brothers' assignment to this winner-take-all Game 7 at Little Caesars Arena brings his extreme home bias (58% home win rate) and grinding approach (45.8 fouls per game) to a series where Detroit has seized all momentum with consecutive elimination victories. The Pistons desperately need Brothers' systematic home advantages and pace-grinding tendencies (-1.8) to overwhelm Orlando's youthful execution while creating the physical halfcourt environment that favors their championship experience over the Magic's athleticism. Brothers' high technical frequency creates emotional landmines for Orlando's young core while his whistle-heavy approach disrupts their pace-and-space execution, generating perfect conditions for Detroit's veteran leadership to emerge in the hostile Little Caesars Arena atmosphere where Cade Cunningham can dominate through favorable treatment and systematic playoff officiating that rewards championship DNA over rookie inexperience in Game 7 pressure cooker scenarios.",
      bettingAngle: "Premium play on DET -4.5 as Brothers' extreme home bias and grinding approach create maximum systematic advantages for Detroit's championship experience while disrupting Orlando's pace-dependent youth. The UNDER 182.5 is elite given Brothers' pace-grinding style (-1.8) and whistle-heavy approach extending possessions in winner-take-all basketball.",
      historical: "Brothers worked 6 Pistons games this season (DET 5-1) with Detroit shooting 51.4% from the field at home in Brothers assignments, thriving in his grinding physical environments. He officiated 3 Magic games (ORL 1-2) with Orlando committing 19.3 fouls per game on the road in Brothers assignments, struggling with his whistle-heavy approach and technical frequency away from home."
    },
    {
      game: "TOR @ CLE",
      crew: ["Ed Malloy", "Courtney Kirkland", "Ben Williams"],
      leadRef: "Ed Malloy",
      impact: "Malloy's assignment to this pivotal Game 5 in Cleveland with the series tied 2-2 brings his road-neutral approach (48% home win rate) and pace-positive tendencies (1.7) to a matchup where momentum completely shifted after Mitchell's explosive Game 4 performance. The Cavaliers benefit from Malloy's balanced officiating that prevents systematic advantages while his pace-positive impact creates perfect showcase conditions for Donovan Mitchell's explosive scoring ability and Cleveland's athletic transition attack. Malloy's low technical frequency maintains competitive flow while his moderate foul calling (40.1 per game) allows skilled players like Mitchell and Pascal Siakam to operate without excessive whistle interference, creating pure basketball execution where superior talent and home-court energy determine outcomes rather than systematic officiating manipulation in this series-defining Game 5 battle.",
      bettingAngle: "Strong value on CLE -2.5 as Malloy's road-neutral approach prevents systematic advantages for Toronto while his pace-positive impact showcases Cleveland's superior athletic execution at home. OVER 221.5 has appeal given Malloy's pace-positive tendencies and clean officiating style creating high-scoring showcase environments.",
      historical: "Malloy worked 5 Cavaliers games this season (CLE 4-1) with Cleveland averaging 117.2 points at home in Malloy assignments, thriving in his pace-positive showcase environments. He officiated 4 Raptors games (TOR 2-2) with Toronto shooting 44.8% from the field on the road in Malloy assignments, struggling to establish rhythm without systematic officiating advantages away from home."
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
      notableGame: "Leading tonight's ORL-DET Game 7, bringing extreme home bias and grinding approach that creates systematic advantages for Detroit's championship experience while disrupting Orlando's youthful pace-dependent execution through whistle-heavy Game 7 basketball."
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
      notableGame: "Leading tonight's TOR-CLE Game 5, bringing road-neutral showcase conditions that prevent systematic advantages while his pace-positive impact creates perfect competitive basketball where superior talent execution determines outcomes."
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
      notableGame: "Recently controlled PHI-BOS Game 5, bringing legendary grinding expertise that created systematic advantages for Boston's home-court execution while disrupting Philadelphia's pace-dependent championship hopes through interior-friendly officiating."
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
      notableGame: "Supporting Tony Brothers in tonight's ORL-DET Game 7, providing balanced championship-level approach that complements Brothers' home bias while maintaining competitive integrity in winner-take-all elimination basketball."
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
      notableGame: "Recently supported Scott Foster in PHI-BOS elimination basketball, providing additional veteran-friendly approach that complemented Foster's grinding style while maintaining competitive balance in championship scenarios."
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
      notableGame: "Supporting Tony Brothers in tonight's ORL-DET Game 7, providing additional home bias amplification that complements his grinding approach while maintaining competitive flow in playoff elimination scenarios."
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
      notableGame: "Supporting Ed Malloy in tonight's TOR-CLE Game 5, bringing additional pace-positive impact and neutral approach that creates showcase conditions for superior talent to determine outcomes in series-defining basketball."
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
      notableGame: "Supporting Ed Malloy in tonight's TOR-CLE Game 5, providing additional road-friendly pace-positive approach that prevents systematic home advantages while showcasing superior athletic execution in competitive environments."
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
      notableGame: "Recently controlled several high-scoring regular season games with clean pace-positive approach that showcases elite athletic talent while maintaining competitive flow through minimal whistle interference in showcase environments."
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
      notableGame: "Recently supported Scott Foster in PHI-BOS elimination basketball, providing additional grinding impact and home bias that complemented Foster's whistle-heavy approach in winner-take-all championship scenarios."
    }
  ],
  weeklyTrend: "Saturday's playoff Game 7 and Game 5 assignments reveal strategic officiating deployment designed to manage maximum-pressure elimination scenarios where championship survival and series momentum create the ultimate competitive environments requiring calculated referee tendency exploitation. The Tony Brothers assignment to ORL-DET Game 7 represents the most extreme home bias deployment where his legendary grinding approach (45.8 fouls per game) and systematic home advantages (58% home win rate) create perfect conditions for Detroit's championship experience to overwhelm Orlando's youthful execution through pace manipulation (-1.8) and technical frequency landmines that reward veteran playoff DNA over rookie inexperience in winner-take-all pressure cooker basketball. Brothers' extreme whistle-heavy approach and high technical frequency create systematic advantages for the Pistons' championship pedigree while disrupting the Magic's pace-dependent athletic execution, generating premium betting value through DET -4.5 and UNDER 182.5 where grinding pace manipulation favors methodical veteran leadership over explosive youthful energy in Game 7 atmosphere. The contrasting Ed Malloy assignment to TOR-CLE Game 5 provides road-neutral showcase conditions (48% home win rate) with pace-positive tendencies (1.7) that prevent systematic advantages while creating competitive basketball where superior talent execution determines outcomes rather than officiating manipulation, making CLE -2.5 valuable through pure athletic superiority and OVER 221.5 appealing through pace-positive showcase environments that highlight skilled offensive execution. This dual assignment strategy creates maximum contrast between extreme systematic advantage deployment (Brothers favoring veteran home teams) and neutral competitive showcase conditions (Malloy rewarding superior talent), establishing clear betting patterns where understanding referee tendency deployment generates exploitable value through predictable officiating impact on pace, fouling, and home-court amplification in championship elimination scenarios. The supporting crew selections strategically amplify primary referee tendencies, with Kane Fitzgerald and Lauren Holtkamp providing additional home bias and grinding support for Brothers' extreme Detroit advantages, while Courtney Kirkland and Ben Williams deliver extra pace-positive and road-neutral impact that complements Malloy's showcase approach for pure competitive basketball where athletic superiority prevails over systematic officiating manipulation. Friday's Scott Foster deployment to PHI-BOS Game 5 created the template for extreme grinding home bias that Brothers now amplifies to maximum levels in Game 7, while Thursday's varied approaches spanning Brothers' extreme bias, Malloy's neutrality, and Fitzgerald's balance demonstrate calculated referee tendency management across different competitive scenarios requiring specific officiating deployment to manage championship pressure, series momentum, and elimination stakes through systematic advantages or neutral showcase conditions. The broader weekly pattern reveals sophisticated referee assignment deployment where extreme home bias (Brothers, Foster) targets specific veteran-favored scenarios requiring systematic advantages, balanced competitive assignments (Malloy, Fitzgerald) create showcase environments for superior talent, and supporting crew selections amplify primary tendencies through complementary approaches that generate predictable betting value through understanding officiating impact on pace manipulation, fouling patterns, home-court amplification, and technical frequency management in championship elimination basketball where systematic advantages determine outcomes through calculated whistle deployment designed to reward veteran playoff experience over youthful athletic execution."
};
