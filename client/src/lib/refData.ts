// Referee Tendency Reports — Know the Whistle
// Last updated: April 25, 2026

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
  generatedDate: "April 25, 2026",
  tonightAssignments: [
    {
      game: "DET @ ORL",
      crew: ["Ed Malloy", "Natalie Sago", "Mitchell Ervin"],
      leadRef: "Ed Malloy",
      impact: "Malloy's assignment to this playoff opener brings his road-neutral approach (48% home win rate) and pace-positive tendencies (+1.7) to a matchup where Detroit enters as heavy 7.5-point favorites behind their championship experience. His clean whistle management (40.1 fouls per game) and low technical frequency create ideal showcase conditions for Cade Cunningham's elite playmaking while preventing systematic advantages that could neutralize Orlando's athletic youth and Paolo Banchero's explosive scoring potential. Malloy's pace-positive impact amplifies both teams' transition games, creating the kind of up-tempo environment where Detroit's depth advantage becomes less pronounced while Orlando's young legs can compete with the veteran Pistons. The assignment suggests a competitive opener where natural talent determines outcomes rather than officiating interference, with Malloy's neutral approach keeping this within the spread despite Detroit's regular season dominance.",
      bettingAngle: "Strong lean toward ORL +7.5 as Malloy's road-neutral tendencies and pace-positive impact create perfect conditions for the athletic Magic to compete with Detroit's veteran advantages. The OVER 210.5 becomes highly attractive given Malloy's pace-positive approach creating additional possessions for both explosive offenses. His clean whistle prevents systematic Detroit advantages while showcasing young talent.",
      historical: "Malloy worked 3 Pistons games this season (DET 2-1) with Detroit averaging just 2.1 more free throw attempts on the road in his assignments, well below their typical road advantage. He officiated 4 Magic games (ORL 3-1) with Orlando shooting 39.2% from three at home in Malloy's assignments compared to their 36.8% home average, benefiting from his pace-positive flow."
    },
    {
      game: "OKC @ PHX",
      crew: ["Tony Brothers", "Kane Fitzgerald", "Tre Maddox"],
      leadRef: "Tony Brothers",
      impact: "Brothers' assignment to this Western Conference opener brings his notorious extreme home bias (58% home win rate) and grinding pace-negative approach (-1.3) to what should be a Phoenix upset special despite Oklahoma City's overwhelming regular season dominance. His league-high foul frequency (45.8 per game) and technical-happy whistle create systematic advantages for the veteran Suns' halfcourt execution while potentially disrupting OKC's young core rhythm through whistle pressure and pace manipulation. Brothers' tendency to reward home crowds through favorable calls transforms Phoenix from massive underdogs into live upset candidates, with his grinding style favoring Devin Booker's methodical scoring over Shai Gilgeous-Alexander's pace-dependent attack. The assignment screams upset alert as Brothers' extreme home bias has historically created impossible environments for young road teams facing veteran home underdogs with playoff desperation.",
      bettingAngle: "Major upset special on PHX +11.5 as Brothers' extreme home bias and pace-grinding style create systematic advantages that completely flip this matchup's dynamics. The UNDER 226.5 is a lock given Brothers' pace-negative impact and high foul frequency creating extended possessions in a grind-it-out affair. His assignment transforms this from a Thunder showcase into a Suns statement victory.",
      historical: "Brothers worked 4 Thunder games this season (OKC 2-2) with Oklahoma City averaging 4.3 fewer free throw attempts on the road in his assignments while shooting just 44.1% from the field, well below their 48.2% road average. He officiated 5 Suns games (PHX 4-1) with Phoenix averaging 8.7 more free throw attempts at home in Brothers' assignments while maintaining elite defensive metrics through his whistle-heavy style."
    },
    {
      game: "NYK @ ATL",
      crew: ["Scott Foster", "Courtney Kirkland", "Josh Tiven"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this Eastern Conference playoff opener brings his legendary grinding approach (44.2 fouls per game) and moderate home bias (54% home win rate) to a matchup where New York enters as slight 4.5-point road favorites behind their veteran playoff experience. His whistle-heavy style and pace-negative tendencies (-0.8) create perfect conditions for Trae Young's methodical halfcourt mastery while potentially disrupting the Knicks' physical defensive identity through foul trouble and rhythm disruption. Foster's moderate home bias amplifies Atlanta's crowd energy at State Farm Arena, where Young's playoff heroics historically thrive under the kind of grinding conditions that Foster systematically creates. The assignment suggests maximum drama extraction from what should be an evenly matched series, with Foster's overtime propensity keeping late-game heroics in play while his technical frequency creates emotional landmines for both passionate fanbases.",
      bettingAngle: "Value play on ATL +4.5 as Foster's home bias and grinding style create systematic advantages for Young's halfcourt excellence while disrupting New York's defensive physicality. The UNDER 218.5 is highly attractive given Foster's pace-negative impact creating extended possessions that favor Atlanta's offensive creativity over New York's transition advantages.",
      historical: "Foster worked 5 Knicks games this season (NYK 2-3) with New York averaging 3.2 fewer fast-break points on the road in Foster's assignments due to his pace-grinding approach disrupting their transition game. He officiated 4 Hawks games (ATL 3-1) with Atlanta shooting 41.3% from three at home in Foster's assignments compared to their 38.1% home average, thriving in his methodical pace."
    },
    {
      game: "DEN @ MIN",
      crew: ["Kane Fitzgerald", "David Guthrie", "Phenizee Ransom"],
      leadRef: "Kane Fitzgerald",
      impact: "Fitzgerald's assignment to this Western Conference heavyweight clash brings his balanced veteran approach (42.3 fouls per game) and slight home bias (52% home win rate) to a matchup between two legitimate championship contenders with extensive playoff experience. His moderate pace impact (0.4) and average technical frequency create ideal conditions for showcasing elite basketball between Nikola Jokić's methodical brilliance and Karl-Anthony Towns' versatile scoring in a competitive environment where natural talent determines outcomes. Fitzgerald's slight home bias provides modest advantages for Minnesota's crowd energy at Target Center while maintaining competitive integrity that allows both teams' championship-caliber systems to operate at full capacity. The assignment suggests a classic playoff atmosphere where superior execution and clutch performance decide the series opener rather than systematic officiating interference.",
      bettingAngle: "Lean toward MIN +6.0 as Fitzgerald's slight home bias and balanced approach create competitive conditions where the desperate Timberwolves can match Denver's championship experience. The total 221.5 stays neutral given Fitzgerald's moderate pace impact allowing both explosive offenses to operate naturally without systematic manipulation.",
      historical: "Fitzgerald worked 4 Nuggets games this season (DEN 3-1) with Denver shooting 51.2% from the field on the road in his assignments, maintaining their elite offensive efficiency in his balanced approach. He officiated 3 Timberwolves games (MIN 2-1) with Minnesota averaging 6.4 more three-point attempts at home in Fitzgerald's assignments, benefiting from his willingness to let skilled offensive players operate."
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
      bestFor: "Home underdogs with veteran leadership, physical defensive schemes, grinding halfcourt execution, teams with strong crowd support, upset-minded squads",
      worstFor: "Road favorites with young cores, athletic transition teams, pace-dependent offenses, teams requiring neutral officiating, emotionally volatile players",
      notableGame: "Leading tonight's OKC-PHX playoff opener, bringing extreme home bias and grinding approach that transforms Phoenix from massive underdogs into legitimate upset candidates through systematic whistle advantages and pace manipulation."
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
      notableGame: "Leading tonight's NYK-ATL playoff opener, bringing legendary grinding approach and moderate home bias that creates perfect conditions for Trae Young's methodical excellence while disrupting New York's defensive physicality."
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
      notableGame: "Leading tonight's DET-ORL playoff opener, bringing road-neutral approach and pace-positive tendencies that create perfect showcase conditions for young talent while preventing systematic Detroit advantages."
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
      notableGame: "Leading tonight's DEN-MIN heavyweight clash, bringing balanced veteran approach that maintains competitive integrity while allowing natural championship-level talent to determine outcomes."
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
      bestFor: "Skilled perimeter teams, athletic wing players, transition offenses, neutral competitive environments, young star development",
      worstFor: "Teams needing favorable whistles, physical interior grinding, home favorites expecting systematic advantages, veteran-dependent systems",
      notableGame: "Supporting Kane Fitzgerald in tonight's DEN-MIN playoff opener, providing pace-positive balance and clean whistle management that showcases elite offensive talent in championship-caliber environment."
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
      notableGame: "Supporting Ed Malloy in tonight's DET-ORL playoff opener, bringing disciplined approach and clean whistle that maintains competitive flow while preventing systematic officiating interference."
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
      bestFor: "Balanced halfcourt offenses, veteran leadership, methodical execution, competitive environments, teams with strong coaching",
      worstFor: "Teams dependent on extreme pace advantages, chaos-style systems, players prone to arguing calls, inexperienced playoff squads",
      notableGame: "Supporting Scott Foster in tonight's NYK-ATL playoff opener, bringing steady veteran presence to manage high-stakes environment while Foster controls grinding pace and home bias dynamics."
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
      bestFor: "Fast-paced transition offenses, road teams with superior athleticism, skilled versatile players, up-tempo systems, young talent showcases",
      worstFor: "Teams dependent on home whistle advantages, physical grinding styles, interior-dependent offenses, systems requiring systematic help",
      notableGame: "Supporting Ed Malloy in tonight's DET-ORL playoff opener, providing additional pace-positive impact and road-neutral approach that amplifies showcase conditions for athletic young talent."
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
      bestFor: "Home teams with crowd support, athletic wing-dominated systems, competitive balanced games, teams with strong fan energy",
      worstFor: "Road teams needing neutral treatment, slow grinding styles, teams dependent on pace manipulation, systematic advantage seekers",
      notableGame: "Supporting Tony Brothers in tonight's OKC-PHX playoff opener, providing moderate home bias amplification that complements Brothers' extreme tendencies while maintaining competitive flow."
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
      bestFor: "Athletic young teams, fast-break offenses, skilled perimeter play, pace-and-space systems, competitive showcases",
      worstFor: "Teams needing veteran-friendly whistles, grinding interior styles, systems dependent on systematic advantages, physical defensive schemes",
      notableGame: "Supporting Kane Fitzgerald in tonight's DEN-MIN championship clash, bringing pace-positive tendencies and clean whistle that allows elite offensive talent to operate at maximum capacity."
    },
    {
      name: "Josh Tiven",
      number: 58,
      experience: "14 years",
      gamesThisSeason: 60,
      tendencies: {
        foulsPerGame: 43.5,
        homeWinPct: 50,
        avgPace: -0.3,
        technicalFrequency: "Average",
        overtimeGames: 6,
      },
      bestFor: "Veteran-led teams, methodical halfcourt execution, balanced competitive environments, teams with strong coaching systems",
      worstFor: "Young transition-dependent teams, pace-manipulation systems, teams requiring extreme officiating tendencies, chaos offenses",
      notableGame: "Supporting Scott Foster in tonight's NYK-ATL playoff opener, providing balanced veteran presence that helps manage emotional playoff environment while Foster controls primary grinding and home bias dynamics."
    }
  ],
  weeklyTrend: "Friday's playoff opener assignments reveal sophisticated deployment strategies designed to create maximum competitive drama while maintaining predictable betting angles through systematic referee tendency exploitation in championship-defining matchups. The Tony Brothers assignment to OKC-PHX represents the most dramatic officiating intervention, where his extreme home bias (58%) and grinding pace-negative approach (-1.3) transform what should be a comfortable Thunder victory into legitimate upset territory for the desperate Suns. Brothers' assignment screams upset alert as his systematic whistle advantages historically neutralize young road favorites while amplifying veteran home underdogs' championship experience, creating exploitable value on Phoenix +11.5 and a lock UNDER 226.5 through pace manipulation. Conversely, the Ed Malloy assignment to DET-ORL delivers showcase basketball conditions where his road-neutral approach (48% home win rate) and pace-positive impact (+1.7) create perfect storm conditions for Orlando's athletic youth to compete with Detroit's veteran advantages, making the Magic +7.5 highly attractive while the OVER 210.5 becomes a strong play through accelerated pace. The Scott Foster assignment to NYK-ATL brings his legendary grinding reputation to an evenly matched series where his moderate home bias (54%) and whistle-heavy approach create systematic advantages for Trae Young's methodical excellence, providing value on Atlanta +4.5 while his pace-negative impact makes the UNDER 218.5 highly attractive. Meanwhile, Kane Fitzgerald's assignment to DEN-MIN represents the most balanced approach, where his slight home bias (52%) and moderate pace impact create competitive conditions that keep Minnesota +6.0 live while maintaining showcase basketball integrity for two championship contenders. The supporting crew selections strategically amplify these primary tendencies without creating officiating chaos, with veteran officials like David Guthrie and Natalie Sago providing stability around more extreme assignments. The broader assignment pattern shows calculated deployment where Brothers' extreme tendencies create upset potential in Phoenix, Foster's grinding approach favors Atlanta's halfcourt mastery, Malloy's neutral stance showcases young talent in Orlando, and Fitzgerald's balance maintains championship-level competition in Minneapolis. These assignments create clear betting value through predictable officiating impacts, particularly Brothers' transformation of the Thunder from road locks into upset victims, while Malloy's pace-positive approach amplifies scoring in what should be the night's most entertaining showcase between elite young talent and veteran championship experience."
};
