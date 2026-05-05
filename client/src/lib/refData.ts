// Referee Tendency Reports — Know the Whistle
// Last updated: May 5, 2026

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
  generatedDate: "May 5, 2026",
  tonightAssignments: [
    {
      game: "CLE @ DET",
      crew: ["Tony Brothers", "James Capers", "Lauren Holtkamp"],
      leadRef: "Tony Brothers",
      impact: "Brothers' assignment to this Eastern Conference Semifinals opener at Little Caesars Arena brings his notorious home-friendly approach (58% home win rate) and significant pace-negative impact (-1.8) to a matchup where Detroit's championship experience meets Cleveland's road resilience. The Pistons benefit enormously from Brothers' systematic home advantages that amplify crowd energy and create whistles favoring Cade Cunningham's aggressive drives while his pace disruption perfectly counters Cleveland's preferred transition attack. Brothers' whistle-heavy style (45.6 fouls per game) and high technical frequency create a grinding environment that rewards Detroit's veteran playoff experience over Cleveland's youthful energy, while his pace-negative impact destroys Donovan Mitchell's explosive scoring rhythm by forcing halfcourt execution where Detroit's home structure dominates. The psychological factor cannot be overstated as Brothers' reputation for home bias creates additional pressure on Cleveland's young core while empowering Detroit's crowd to influence crucial calls in late-game situations. This assignment fundamentally alters competitive dynamics by eliminating Cleveland's transition advantages while maximizing Detroit's home-court systematic benefits through calculated whistle deployment that rewards physical interior play and veteran leadership over athletic explosiveness.",
      bettingAngle: "Premium play on DET -3.5 as Brothers' extreme home bias and pace disruption create perfect storm conditions for Detroit's veteran playoff execution to dominate Cleveland's transition-dependent attack. The UNDER 203.5 is elite given Brothers' grinding pace impact (-1.8) and whistle-heavy style destroying offensive rhythm.",
      historical: "Brothers worked 3 Pistons games this season (DET 3-0) with Detroit averaging 108.9 points at home in Brothers assignments, thriving in his grinding systematic advantages. He officiated 2 Cavaliers games (CLE 0-2) with Cleveland shooting just 41.2% on the road in Brothers games, struggling when pace disruption eliminates their transition attack."
    },
    {
      game: "LAL @ OKC",
      crew: ["Scott Foster", "Ben Williams", "Tre Maddox"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this Western Conference heavyweight clash at Paycom Center brings his legendary home-friendly approach (56% home win rate) and significant pace-negative impact (-1.2) to a matchup where Oklahoma City's championship momentum meets Los Angeles' playoff experience. The Thunder benefit substantially from Foster's systematic home advantages that amplify their elite crowd energy while his pace disruption neutralizes the Lakers' transition attack led by LeBron James, forcing grinding halfcourt execution where Shai Gilgeous-Alexander's methodical scoring dominates. Foster's whistle-heavy style (44.8 fouls per game) and high technical frequency create a dramatic environment that rewards OKC's home structure over LA's veteran road experience, while his pace-negative impact fundamentally alters competitive dynamics by preventing the Lakers from using their championship experience to control tempo through transition basketball. The psychological warfare aspect becomes crucial as Foster's reputation for creating dramatic moments and home bias adds pressure on LeBron and Anthony Davis to execute in hostile territory while empowering Oklahoma City's young core to thrive in systematic advantages. Foster's high overtime frequency (9 games) suggests this could extend beyond regulation, favoring the Thunder's deeper roster and home crowd energy in crucial extra periods where his whistle patterns historically reward home teams through calculated late-game advantages.",
      bettingAngle: "Elite value on OKC -5.5 as Foster's extreme home bias and pace disruption create perfect conditions for Thunder's championship momentum to overwhelm Lakers' transition-based attack. The UNDER 218.5 has premium value given Foster's grinding pace impact (-1.2) and whistle-heavy style destroying offensive flow.",
      historical: "Foster worked 4 Thunder games this season (OKC 4-0) with Oklahoma City averaging 121.3 points at home in Foster assignments, dominating through his systematic advantages. He officiated 3 Lakers games (LAL 1-2) with Los Angeles shooting 43.1% on the road in Foster games, struggling when pace disruption eliminates their veteran transition execution."
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
      notableGame: "Leading tonight's CLE-DET Eastern Conference Semifinals opener, providing extreme home bias and grinding pace disruption that favors Detroit's veteran playoff execution over Cleveland's transition-dependent youthful athleticism in hostile Little Caesars Arena environment."
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
      notableGame: "Leading tonight's LAL-OKC Western Conference heavyweight clash, creating systematic home advantages and pace disruption that favor Thunder's championship momentum over Lakers' veteran transition attack through legendary grinding expertise."
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
      notableGame: "Supporting Scott Foster in tonight's LAL-OKC battle, providing pace-positive balance that partially offsets Foster's grinding approach while maintaining competitive flow in Western Conference championship stakes."
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
      notableGame: "Supporting Tony Brothers in tonight's CLE-DET semifinals opener, providing veteran stability that complements Brothers' home bias while maintaining structural integrity in Eastern Conference championship implications."
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
      notableGame: "Supporting Tony Brothers in tonight's CLE-DET matchup, providing additional home-friendly structure that amplifies Brothers' systematic advantages while maintaining competitive discipline in conference semifinals stakes."
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
      notableGame: "Supporting Scott Foster in tonight's LAL-OKC Western Conference clash, providing additional grinding support that amplifies Foster's pace-negative impact while maintaining physical interior control in championship-stakes environment."
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
      notableGame: "Recently controlled multiple high-stakes playoff games with championship-level expertise, creating balanced competitive environments where elite talent and veteran execution determine outcomes through neutral professional officiating."
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
      notableGame: "Recently provided road-friendly pace-positive officiating in Western Conference playoffs, creating athletic showcase environments where superior talent and explosiveness determine outcomes through minimal interference."
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
      notableGame: "Recently controlled high-scoring playoff contests with clean pace-positive approach, showcasing elite athletic talent through minimal whistle interference and competitive neutral treatment."
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
      notableGame: "Recently provided extreme pace-positive officiating in multiple playoff games, creating showcase environments where athletic superiority and explosive offensive talent determine outcomes through acceleration and minimal interference."
    }
  ],
  weeklyTrend: "Monday's Eastern and Western Conference Semifinals assignments reveal strategic referee deployment designed to maximize home-court advantages and create predictable grinding environments that reward veteran playoff execution over youthful athleticism through calculated whistle philosophy selection across championship-stakes matchups. The Tony Brothers assignment to CLE-DET represents extreme home bias deployment where his notorious systematic advantages (58% home win rate) and significant pace disruption (-1.8) create perfect storm conditions for Detroit's veteran championship experience to dominate Cleveland's transition-dependent attack, amplifying Little Caesars Arena crowd energy while destroying the Cavaliers' preferred uptempo rhythm through whistle-heavy grinding execution that rewards Cade Cunningham's aggressive drives over Donovan Mitchell's explosive scoring bursts. Brothers' high technical frequency and physical interior favoritism systematically disadvantage Cleveland's young core while empowering Detroit's playoff-tested veterans to thrive in hostile officiating conditions designed to reward home structure over road athleticism. The complementary Scott Foster assignment to LAL-OKC provides similar home-friendly grinding advantages where his legendary systematic bias (56% home win rate) and pace-negative impact (-1.2) create dramatic environments that favor Oklahoma City's championship momentum over the Lakers' veteran transition attack, forcing halfcourt execution where Shai Gilgeous-Alexander's methodical scoring dominates while LeBron James faces hostile whistle treatment that neutralizes Los Angeles' championship experience through pace disruption and psychological pressure. Foster's high overtime frequency (9 games) suggests extended drama that favors OKC's deeper roster and crowd energy in crucial extra periods where his reputation for home bias becomes exponentially more impactful. This dual assignment strategy creates maximum betting value concentration on home teams with grinding approaches, establishing predictable patterns where understanding referee tendency deployment generates exploitable advantages through systematic recognition of when officiating philosophy rewards veteran home execution over road athleticism and transition basketball. The supporting crew selections strategically amplify primary referee impacts, with James Capers and Lauren Holtkamp providing additional home-friendly structure for Brothers' systematic advantages, while Ben Williams and Tre Maddox deliver pace balance and grinding support that complements Foster's dramatic approach without eliminating Oklahoma City's fundamental home benefits. This week's broader pattern spanning conference semifinals openers demonstrates calculated referee management designed to create home-court decisive advantages through grinding pace disruption, where whistle-heavy styles and systematic bias reward veteran playoff execution and crowd energy over youthful road athleticism and transition-dependent systems. The championship stakes amplify referee tendency impact exponentially, making Brothers' extreme home bias crucial for establishing Detroit's systematic advantages while Foster's grinding drama becomes decisive for showcasing Oklahoma City's home momentum over the Lakers' veteran road experience, creating clear betting patterns where understanding home-friendly officiating deployment through grinding systematic philosophies generates significant value in conference semifinals basketball where pace disruption and whistle advantages determine outcomes through calculated deployment of referees whose career tendencies historically reward veteran home execution over explosive road athleticism in maximum-pressure playoff environments where crowd energy and systematic advantages become exponentially more impactful than neutral competitive balance."
};
