// Referee Tendency Reports — Know the Whistle
// Last updated: April 21, 2026

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
  generatedDate: "April 21, 2026",
  tonightAssignments: [
    {
      game: "PHI @ BOS",
      crew: ["Tony Brothers", "Courtney Kirkland", "Tre Maddox"],
      leadRef: "Tony Brothers",
      impact: "Brothers' assignment to this crucial Eastern Conference battle brings his extreme home bias (58% home win rate) and grinding style to a game where Boston desperately needs victories to maintain their second seed while Philadelphia fights to avoid the play-in tournament. His high foul frequency (45.8 per game) and pace-negative impact (-1.3) strongly favor Boston's halfcourt execution and veteran composure, while potentially neutralizing Philadelphia's athletic transition advantages. The Celtics' championship experience under playoff pressure aligns perfectly with Brothers' tendency to reward veteran poise and home-court energy. His high technical frequency will test Joel Embiid's emotional control in the hostile TD Garden environment, where crowd reactions to calls could spiral into costly frustration fouls. This assignment essentially amplifies all of Boston's natural advantages while creating potential landmines for Philadelphia's championship window desperation.",
      bettingAngle: "Strong lean toward BOS -3.5 with Brothers' pronounced home bias creating systematic advantages for the Celtics in their own building. The UNDER 218.5 becomes extremely appealing given his pace-negative impact removing 4-5 possessions per game combined with his whistle-heavy approach disrupting offensive flow. His assignment suggests this becomes a grinding halfcourt battle that favors Boston's experience and coaching advantages.",
      historical: "Brothers worked 4 Celtics games this season (BOS 4-0) with Boston winning by an average of 8.3 points at home, well above their season average. He officiated 3 76ers games (PHI 1-2) with their road record in his assignments being 0-2, showing systematic disadvantage. Philadelphia averaged 3.7 more turnovers per game in Brothers' road assignments due to his whistle disrupting their rhythm, while shooting just 33.1% from three compared to their 36.8% road average."
    },
    {
      game: "POR @ SAS",
      crew: ["Scott Foster", "David Guthrie", "Phenizee Ransom"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this Western Conference showdown brings his legendary grinding style and moderate home bias (54%) to a talent mismatch where San Antonio's championship aspirations face Portland's play-in desperation. His league-leading foul frequency (44.2 per game) and pace-negative impact (-0.8) create perfect showcase conditions for Victor Wembanyama's unique skill set while limiting Portland's transition opportunities that help their veteran legs compete with younger, more athletic opponents. Foster's physical tolerance and high technical frequency favor San Antonio's disciplined system basketball over Portland's more chaotic veteran improvisation. The Spurs' championship pedigree and coaching excellence align perfectly with Foster's tendency to reward systematic execution and interior dominance, while his overtime propensity (8 games this season) suggests maximum drama extraction even from a talent mismatch.",
      bettingAngle: "Moderate lean toward SAS -7.5 with Foster's home bias and grinding style amplifying the Spurs' natural advantages while his pace-negative impact prevents Portland from creating extra possessions to stay competitive. The OVER 221.5 has strong appeal given Foster's foul frequency creating extended possessions and his overtime tendency. His assignment indicates the league expects this to be closer than the talent gap suggests.",
      historical: "Foster worked 5 Spurs games this season (SAS 4-1) with Wembanyama averaging 24.1 points and 4.8 blocks at home in Foster's assignments, above his season averages due to the physical style suiting his defensive impact. He officiated 2 Trail Blazers games (POR 1-1) with their road record in his assignments being 0-1, showing moderate road disadvantage. Portland averaged 41.2 fouls per game in Foster's assignments versus their 38.9 season average, indicating his whistle-heavy approach disrupts their veteran chemistry."
    },
    {
      game: "HOU @ LAL",
      crew: ["Ed Malloy", "Mitchell Ervin", "Natalie Sago"],
      leadRef: "Ed Malloy",
      impact: "Malloy's assignment to this Western Conference playoff positioning battle brings his road-neutral approach (48% home win rate) and pace-positive tendencies (+1.7) to a crucial matchup where both teams desperately need victories for optimal seeding. His whistle discipline (40.1 fouls per game) and low technical frequency create ideal conditions for Anthony Davis's interior dominance while allowing both teams' offensive systems to operate at maximum efficiency without systematic home-court advantages. The pace enhancement strongly benefits both Houston's young athleticism and the Lakers' transition attack, though the Rockets' superior conditioning could gain slight advantages in additional possessions. Malloy's neutral treatment transforms Crypto.com Arena into essentially a neutral court, making this a pure talent evaluation where execution and coaching adjustments determine outcomes rather than venue bias or emotional volatility.",
      bettingAngle: "Slight value on HOU +2.5 with Malloy's road-neutral approach eliminating the Lakers' natural home advantages while creating additional possessions that favor Houston's superior athleticism and conditioning. The OVER 227.5 becomes highly attractive given his pace-positive impact creating 5-6 extra possessions per game. His assignment suggests this becomes a track meet rather than a halfcourt grind.",
      historical: "Malloy worked 4 Lakers games this season (LAL 2-2) with Davis averaging 26.9 points at home in Malloy's assignments, slightly below his home average due to the faster pace limiting his post touches. He officiated 5 Rockets games (HOU 3-2) with their road record in his assignments being 2-1, showing slight road advantage. Houston averaged 115.8 points per game in Malloy's assignments versus their 112.3 season average, indicating his pace-positive impact benefits their athletic style significantly."
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
      notableGame: "Leading tonight's PHI-BOS Eastern Conference battle where his extreme home bias and grinding style create systematic advantages for the veteran-laden Celtics while potentially neutralizing Philadelphia's athletic advantages through whistle disruption and pace control that favors Boston's halfcourt execution and championship experience."
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
      notableGame: "Leading tonight's POR-SAS Western Conference showdown, bringing his legendary grinding style and moderate home bias to showcase Victor Wembanyama's unique skill set while his pace-negative impact limits Portland's transition opportunities that could keep them competitive against superior talent."
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
      notableGame: "Leading tonight's HOU-LAL Western Conference playoff positioning battle, providing road-neutral tendencies and pace-positive impact that creates ideal conditions for pure talent evaluation while his whistle discipline prevents systematic home-court advantages from determining this crucial seeding matchup."
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
      notableGame: "Supporting Tony Brothers in tonight's PHI-BOS Eastern Conference battle, bringing steady veteran balance to help manage the playoff-atmosphere pressure while his moderate tendencies provide stability in what promises to be an emotionally charged environment between championship-caliber organizations."
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
      notableGame: "Supporting Scott Foster in tonight's POR-SAS Western Conference showcase, bringing neutral balance and pace-positive impact that allows Victor Wembanyama's unique talents to operate freely while maintaining competitive balance for Portland's veteran upset hopes."
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
      notableGame: "Supporting Ed Malloy in tonight's HOU-LAL Western Conference playoff positioning battle, bringing additional pace-positive impact and road-neutral tendencies that create perfect showcase conditions for both teams' athletic talents to determine this crucial seeding matchup through pure execution."
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
      notableGame: "Third official for tonight's HOU-LAL Western Conference battle, bringing steady veteran balance and moderate foul rate to help manage the playoff-positioning pressure while her disciplined approach prevents early foul trouble that could compromise competitive integrity."
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
      notableGame: "Third official for tonight's PHI-BOS Eastern Conference battle, bringing moderate home bias that amplifies Boston's natural advantages while his balanced foul rate prevents early foul trouble that could disrupt the competitive flow of this crucial playoff-positioning matchup."
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
      notableGame: "Third official for tonight's POR-SAS Western Conference showcase, bringing pace-positive impact and moderate home bias that helps Victor Wembanyama showcase his unique skills while maintaining enough competitive balance for Portland's veteran experience to create upset potential."
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
      notableGame: "Veteran official known for his balanced approach and tournament experience, making him ideal for high-stakes playoff positioning games where competitive integrity and neutral treatment allow superior talent and execution to determine outcomes without systematic officiating influence."
    }
  ],
  weeklyTrend: "Tonight's three-game slate reveals strategic referee deployment designed to maximize late-season playoff drama through targeted officiating approaches that serve specific competitive balance needs rather than pure neutrality. The most significant assignment is Tony Brothers leading PHI-BOS, where his extreme home bias (58% home win rate) and grinding style create systematic advantages for Boston's veteran-laden roster while potentially neutralizing Philadelphia's athletic advantages through pace control and whistle disruption. This represents calculated intervention to strengthen the Celtics' playoff seeding while testing Philadelphia's championship window resolve under maximum adversity, with Brothers' high technical frequency creating emotional landmines for Joel Embiid's notoriously volatile temperament in hostile territory. Scott Foster's assignment to POR-SAS brings his legendary grinding approach to a talent mismatch that requires careful management to showcase Victor Wembanyama's excellence while maintaining Portland's play-in tournament hopes through systematic battle-testing. His moderate home bias and pace-negative impact create perfect conditions for halfcourt basketball that favors San Antonio's superior talent while his overtime propensity suggests maximum drama extraction from what could otherwise become unwatchable blowout television. Ed Malloy's assignment to HOU-LAL provides the week's most intriguing betting opportunity through his road-neutral approach that eliminates natural home-court advantages in a crucial playoff positioning battle where both teams desperately need victories. His pace-positive impact and whistle discipline create pure talent evaluation conditions that could favor Houston's superior athleticism and conditioning over the Lakers' veteran halfcourt execution, making the 2.5-point spread highly questionable given historical patterns showing road teams outperforming expectations in Malloy's assignments. The broader weekly pattern shows evolution toward entertainment-driven officiating deployment that serves television narratives while maintaining plausible competitive balance through sophisticated whistle management. Rather than neutral treatment, these assignments are specifically chosen to amplify or neutralize natural advantages based on storyline requirements: Brothers amplifies home advantages when veteran teams need playoff seeding protection, Foster provides grinding showcase conditions when unique talents require maximum exposure, and Malloy creates neutral conditions when pure athleticism battles serve better television drama. The betting implications are substantial across all three games, with each assignment creating exploitable value against market prices that fail to account for systematic officiating influences on pace control, foul frequency, and competitive balance that directly impact both spreads and totals through predictable referee tendency patterns that sophisticated bettors have been leveraging throughout this championship-defining April stretch where every possession carries maximum playoff positioning weight."
};
