// Referee Tendency Reports — Know the Whistle
// Last updated: April 26, 2026

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
  generatedDate: "April 26, 2026",
  tonightAssignments: [
    {
      game: "CLE @ TOR",
      crew: ["Tony Brothers", "Kevin Cutler", "Ben Williams"],
      leadRef: "Tony Brothers",
      impact: "Brothers' assignment to this playoff opener brings his notorious extreme home bias (58% home win rate) and grinding pace-negative approach (-1.5) to a matchup where Cleveland enters as slight 3.5-point road favorites behind Donovan Mitchell's playoff experience. His league-high foul frequency (45.8 per game) and technical-happy whistle create systematic advantages for Toronto's veteran halfcourt execution while potentially disrupting the Cavaliers' young core rhythm through whistle pressure and pace manipulation. Brothers' tendency to reward home crowds through favorable calls transforms the Raptors from underdogs into live upset candidates, with his grinding style favoring Scottie Barnes' methodical development over Cleveland's pace-dependent attack. The assignment screams upset alert as Brothers' extreme home bias historically creates impossible environments for young road teams facing desperate home underdogs in playoff atmospheres.",
      bettingAngle: "Major upset special on TOR +3.5 as Brothers' extreme home bias and pace-grinding style create systematic advantages that completely flip this matchup's dynamics. The UNDER 212.5 is a strong play given Brothers' pace-negative impact and high foul frequency creating extended possessions in a grind-it-out affair. His assignment transforms Cleveland from road favorites into upset victims.",
      historical: "Brothers worked 5 Cavaliers games this season (CLE 2-3) with Cleveland averaging 4.1 fewer free throw attempts on the road in his assignments while shooting just 43.8% from the field, well below their 47.1% road average. He officiated 4 Raptors games (TOR 3-1) with Toronto averaging 7.2 more free throw attempts at home in Brothers' assignments while maintaining elite defensive metrics through his whistle-heavy style."
    },
    {
      game: "SAS @ POR",
      crew: ["Scott Foster", "Tre Maddox", "Phenizee Ransom"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this decisive Game 7 brings his legendary grinding approach (44.2 fouls per game) and moderate home bias (54% home win rate) to the highest-stakes environment in basketball where Portland faces elimination against Victor Wembanyama's championship-caliber Spurs. His whistle-heavy style and pace-negative tendencies (-0.8) create perfect conditions for Damian Lillard's clutch halfcourt mastery while potentially disrupting San Antonio's young core through foul trouble and rhythm disruption in the hostile Moda Center atmosphere. Foster's Game 7 expertise and moderate home bias amplify Portland's crowd energy in their elimination game, where Lillard's playoff heroics historically thrive under the kind of grinding conditions that Foster systematically creates. The assignment suggests maximum drama extraction with Foster's overtime propensity keeping late-game heroics in play while his technical frequency creates emotional landmines for both passionate fanbases in do-or-die basketball.",
      bettingAngle: "Value play on POR +4.0 as Foster's home bias and grinding style create systematic advantages for Lillard's clutch excellence while disrupting San Antonio's young rhythm in hostile territory. The UNDER 218.5 is highly attractive given Foster's pace-negative impact creating extended possessions that favor Portland's veteran experience over San Antonio's athletic advantages in Game 7 pressure.",
      historical: "Foster worked 6 Spurs games this season (SAS 3-3) with San Antonio averaging 3.8 fewer fast-break points on the road in Foster's assignments due to his pace-grinding approach disrupting their transition game. He officiated 3 Trail Blazers games (POR 2-1) with Portland shooting 42.1% from three at home in Foster's assignments compared to their 38.9% home average, thriving in his methodical Game 7 pace."
    },
    {
      game: "BOS @ PHI",
      crew: ["Ed Malloy", "Natalie Sago", "Josh Tiven"],
      leadRef: "Ed Malloy",
      impact: "Malloy's assignment to this pivotal Game 3 brings his road-neutral approach (48% home win rate) and pace-positive tendencies (+1.7) to a series deadlocked 1-1 where Boston enters as slight 2.0-point road favorites behind Jayson Tatum's playoff excellence. His clean whistle management (40.1 fouls per game) and low technical frequency create ideal showcase conditions for elite basketball between two championship contenders with extensive playoff experience. Malloy's pace-positive impact amplifies both teams' transition games while his neutral approach prevents systematic advantages that could artificially tip the series balance, creating conditions where Tatum's road mastery can compete with Joel Embiid's home dominance. The assignment suggests competitive basketball integrity where superior execution and clutch performance decide this crucial swing game rather than officiating interference, with Malloy's neutral tendencies keeping both fanbases focused on basketball rather than whistle complaints.",
      bettingAngle: "Lean toward BOS -2.0 as Malloy's road-neutral tendencies and pace-positive impact create perfect conditions for Tatum's road excellence to continue against Philadelphia's home court pressure. The OVER 213.5 becomes attractive given Malloy's pace-positive approach creating additional possessions for both elite offenses in competitive playoff basketball.",
      historical: "Malloy worked 4 Celtics games this season (BOS 3-1) with Boston shooting 47.3% from the field on the road in his assignments, maintaining their elite offensive efficiency in his neutral approach. He officiated 5 Sixers games (PHI 3-2) with Philadelphia averaging just 1.2 more free throw attempts at home in Malloy's assignments, reflecting his road-neutral whistle that prevents systematic home advantages."
    },
    {
      game: "LAL @ HOU",
      crew: ["Kane Fitzgerald", "David Guthrie", "Courtney Kirkland"],
      leadRef: "Kane Fitzgerald",
      impact: "Fitzgerald's assignment to this conference semifinals opener brings his balanced veteran approach (42.3 fouls per game) and slight home bias (52% home win rate) to a matchup where the Lakers enter as 5.5-point road favorites behind Anthony Davis' dominant playoff form after advancing past Houston in their dramatic first-round series. His moderate pace impact (+0.4) and average technical frequency create competitive showcase conditions for Davis' championship experience to face Houston's young core's redemption quest in Toyota Center's hostile atmosphere. Fitzgerald's slight home bias provides modest advantages for the Rockets' crowd energy while maintaining competitive integrity that allows both teams' championship-caliber systems to operate at full capacity. The assignment suggests revenge game dynamics where Houston's desperation and home court energy can compete with Los Angeles' veteran playoff experience, creating the kind of competitive environment where Davis' dominance must overcome systematic crowd-influenced advantages.",
      bettingAngle: "Value play on HOU +5.5 as Fitzgerald's slight home bias and balanced approach create competitive conditions where the desperate Rockets can match Los Angeles' championship experience through crowd energy and revenge motivation. The total 224.5 leans slightly OVER given Fitzgerald's moderate pace-positive impact allowing both explosive offenses to showcase their playoff intensity.",
      historical: "Fitzgerald worked 4 Lakers games this season (LAL 3-1) with Los Angeles shooting 48.9% from the field on the road in his assignments, slightly below their 49.7% road average due to his balanced approach creating competitive conditions. He officiated 5 Rockets games (HOU 3-2) with Houston averaging 5.3 more three-point attempts at home in Fitzgerald's assignments, benefiting from his willingness to let skilled offensive players operate in front of supportive crowds."
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
        avgPace: -1.5,
        technicalFrequency: "High",
        overtimeGames: 7,
      },
      bestFor: "Home underdogs with veteran leadership, physical defensive schemes, grinding halfcourt execution, teams with strong crowd support, upset-minded squads",
      worstFor: "Road favorites with young cores, athletic transition teams, pace-dependent offenses, teams requiring neutral officiating, emotionally volatile players",
      notableGame: "Leading tonight's CLE-TOR playoff opener, bringing extreme home bias and grinding approach that transforms Toronto from underdogs into legitimate upset candidates through systematic whistle advantages and pace manipulation in hostile Scotiabank Arena atmosphere."
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
      notableGame: "Leading tonight's SAS-POR Game 7 elimination contest, bringing legendary grinding approach and moderate home bias that creates perfect conditions for Damian Lillard's clutch excellence while disrupting San Antonio's young core rhythm in do-or-die basketball."
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
      notableGame: "Leading tonight's BOS-PHI Game 3 with series tied 1-1, bringing road-neutral approach and pace-positive tendencies that create perfect showcase conditions for Jayson Tatum's road excellence while preventing systematic Philadelphia home advantages."
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
      notableGame: "Leading tonight's LAL-HOU conference semifinals opener, bringing balanced veteran approach that creates competitive revenge game conditions while allowing Anthony Davis' championship experience to face Houston's young core redemption quest."
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
      notableGame: "Supporting Kane Fitzgerald in tonight's LAL-HOU semifinals opener, providing pace-positive balance and clean whistle management that showcases elite offensive talent in high-stakes championship-caliber environment between playoff rivals."
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
      notableGame: "Supporting Ed Malloy in tonight's BOS-PHI Game 3, bringing disciplined approach and clean whistle that maintains competitive flow while preventing systematic officiating interference in pivotal series swing game."
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
      notableGame: "Supporting Kane Fitzgerald in tonight's LAL-HOU semifinals opener, bringing steady veteran presence to manage high-stakes revenge game atmosphere while Fitzgerald controls primary competitive balance and home bias dynamics."
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
      notableGame: "Supporting Tony Brothers in tonight's CLE-TOR playoff opener, providing additional home bias amplification that complements Brothers' extreme tendencies while maintaining competitive flow in hostile Canadian atmosphere."
    },
    {
      name: "Ben Williams",
      number: 72,
      experience: "11 years",
      gamesThisSeason: 56,
      tendencies: {
        foulsPerGame: 39.4,
        homeWinPct: 53,
        avgPace: 1.1,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Athletic young teams, fast-break offenses, skilled perimeter play, pace-and-space systems, competitive showcases",
      worstFor: "Teams needing veteran-friendly whistles, grinding interior styles, systems dependent on systematic advantages, physical defensive schemes",
      notableGame: "Supporting Tony Brothers in tonight's CLE-TOR playoff opener, providing pace-positive balance that prevents complete pace grinding while Brothers maintains primary home bias control in crucial Canadian playoff atmosphere."
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
      notableGame: "Supporting Scott Foster in tonight's SAS-POR Game 7, providing moderate home bias amplification that complements Foster's grinding approach while maintaining competitive drama in elimination basketball at Moda Center."
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
      notableGame: "Supporting Scott Foster in tonight's SAS-POR Game 7 elimination contest, bringing pace-positive tendencies and clean whistle that prevents complete pace grinding while Foster controls primary Game 7 drama and home bias dynamics."
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
      notableGame: "Supporting Ed Malloy in tonight's BOS-PHI Game 3, providing balanced veteran presence that helps manage emotional playoff environment while Malloy controls primary pace-positive impact and road-neutral competitive dynamics."
    }
  ],
  weeklyTrend: "Saturday's playoff assignments reveal sophisticated deployment strategies designed to create maximum competitive drama while maintaining predictable betting angles through systematic referee tendency exploitation in championship-defining matchups. The Tony Brothers assignment to CLE-TOR represents the most dramatic officiating intervention, where his extreme home bias (58%) and grinding pace-negative approach (-1.5) transform what should be a comfortable Cavaliers victory into legitimate upset territory for the desperate Raptors in hostile Scotiabank Arena. Brothers' assignment screams upset alert as his systematic whistle advantages historically neutralize young road favorites while amplifying veteran home underdogs' playoff experience, creating exploitable value on Toronto +3.5 and a strong UNDER 212.5 through pace manipulation. The Scott Foster assignment to SAS-POR Game 7 brings his legendary grinding expertise to elimination basketball where his moderate home bias (54%) and whistle-heavy approach create perfect conditions for Damian Lillard's clutch halfcourt mastery while disrupting Victor Wembanyama's young core through foul trouble, providing value on Portland +4.0 while his pace-negative impact makes the UNDER 218.5 highly attractive in do-or-die basketball. Conversely, the Ed Malloy assignment to BOS-PHI delivers showcase basketball conditions where his road-neutral approach (48% home win rate) and pace-positive impact (+1.7) create perfect conditions for Jayson Tatum's road excellence to continue, making Boston -2.0 attractive while the OVER 213.5 becomes strong through accelerated pace in competitive playoff basketball. Meanwhile, Kane Fitzgerald's assignment to LAL-HOU represents balanced approach deployment where his slight home bias (52%) and moderate pace impact create revenge game conditions that keep Houston +5.5 live while showcasing Anthony Davis' championship experience against young core redemption quests. The supporting crew selections strategically amplify these primary tendencies without creating officiating chaos, with veteran officials like David Guthrie and Natalie Sago providing stability around more extreme assignments. The broader assignment pattern shows calculated deployment where Brothers' extreme tendencies create upset potential in Toronto, Foster's grinding approach maximizes Game 7 drama in Portland, Malloy's neutral stance showcases elite competition in Philadelphia, and Fitzgerald's balance maintains competitive revenge dynamics in Houston. These assignments create clear betting value through predictable officiating impacts, particularly Brothers' transformation of Cleveland from road favorites into upset victims, Foster's amplification of Portland's elimination desperation, and Malloy's acceleration of Boston-Philadelphia's elite offensive showcase, while Fitzgerald maintains competitive balance in Lakers-Rockets' high-stakes semifinals opener."
};
