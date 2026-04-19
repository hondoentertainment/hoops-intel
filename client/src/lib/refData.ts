// Referee Tendency Reports — Know the Whistle
// Last updated: April 19, 2026

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
  generatedDate: "April 19, 2026",
  tonightAssignments: [
    {
      game: "BOS vs PHI",
      crew: ["Marc Davis", "Zach Zarba", "Josh Tiven"],
      leadRef: "Marc Davis",
      impact: "Davis' assignment to this Eastern Conference heavyweight bout represents perfect star management for playoff positioning games. His veteran-friendly whistle (44.0 fouls per game) and moderate home bias (54%) create the ideal environment for Jayson Tatum's continued dominance at TD Garden while allowing Joel Embiid to establish his physical presence in the paint. Davis' high technical frequency could be problematic for Philadelphia's emotional intensity, but his tournament experience ensures the game's pace matches the playoff implications. Tatum has thrived under Davis' whistle this season, while Embiid's load management concerns benefit from the veteran official's star-friendly approach.",
      bettingAngle: "Strong lean on BOS -8.5 given Davis' pronounced home bias and Tatum's historical dominance in his assignments. The OVER 218.5 becomes appealing with Davis' higher foul frequency typically creating additional possessions through free-throw shooting. His veteran-friendly whistle heavily favors Boston's superior depth and home-court experience in this crucial playoff positioning game.",
      historical: "Davis worked 3 Celtics games this season (BOS 3-0) where Tatum averaged 31.2 points on 52% shooting versus his 28.4 season average. He officiated 2 76ers games (PHI 1-1) with Embiid managing just 28 minutes per game due to Davis' physical tolerance allowing early foul accumulation. Boston shot 24.7 free throws per game in Davis assignments versus 21.3 season average, showcasing the home benefit."
    },
    {
      game: "OKC vs PHX",
      crew: ["Tony Brothers", "Kane Fitzgerald", "Ben Taylor"],
      leadRef: "Tony Brothers",
      impact: "Brothers' selection for this potential playoff preview creates a fascinating dynamic between the league's top seed and a desperate Phoenix team. His extreme home bias (58%) works against Oklahoma City in this road spot, though the Thunder's youth and athleticism typically struggle with Brothers' physical tolerance regardless of venue. Shai Gilgeous-Alexander's aggressive drives could benefit from the higher foul frequency, while Devin Booker's emotional game management will be tested by Brothers' high technical frequency. The 12.5-point spread seems inflated given Brothers' tendency to keep games closer through whistle management.",
      bettingAngle: "Significant value on PHX +12.5 with Brothers' extreme home bias and physical style favoring Phoenix's veteran leadership. The OVER 221.5 is appealing given his high foul rate creating additional possessions. Brothers' assignment transforms this from a potential blowout into a competitive battle that could challenge Oklahoma City's road dominance.",
      historical: "Brothers officiated 3 Thunder games this season (OKC 1-2) where SGA averaged just 26.1 points on 44% shooting versus his elite season numbers. He worked 4 Suns games (PHX 3-1) at home where they averaged 117.3 points versus 109.8 on the road. Phoenix shot 27.1 free throws per game in Brothers' assignments, well above their 22.4 season average, indicating favorable whistle treatment."
    },
    {
      game: "DET vs ORL",
      crew: ["Scott Foster", "Ed Malloy", "Natalie Sago"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this rising powers clash brings his signature grinding style to a game with major playoff seeding implications. His league-leading overtime frequency (9 OT games) and physical tolerance create perfect conditions for Cade Cunningham's playmaking brilliance while testing Paolo Banchero's consistency against elite competition. Foster's moderate home bias (55%) gives Detroit slight systematic support, while his high technical frequency could impact Orlando's emotional young core. The Magic's interior advantage should benefit from Foster's higher foul frequency, though Detroit's veteran leadership handles his whistle patterns better.",
      bettingAngle: "Lean on DET -7.5 with Foster's home bias and Cunningham's excellent record in his assignments. The OVER 215.5 is highly appealing given Foster's league-leading overtime tendency and foul frequency creating extended possessions. His assignment suggests the league expects this to be a playoff-intensity battle requiring maximum possessions for resolution.",
      historical: "Foster worked 4 Pistons games this season (DET 3-1) where Cunningham averaged 24.8 points and 8.2 assists, both above season marks. He officiated 3 Magic games (ORL 1-2) with Banchero struggling to 21.1 points on 42% shooting in Foster's physical assignments. Detroit's home record in Foster games was perfect 2-0, while Orlando went 0-2 on the road in his assignments."
    },
    {
      game: "SA vs POR",
      crew: ["John Goble", "Josh Tiven", "Mousa Dagher"],
      leadRef: "John Goble",
      impact: "Goble's assignment to Victor Wembanyama's showcase game creates an intriguing pace dynamic that could benefit both teams' preferred styles. His extreme pace-positive approach (+1.8) and road-friendly bias (46% home wins) work against San Antonio's home-court advantage but create more possessions for Wembanyama's statistical dominance. Portland's upset-minded approach thrives under Goble's low technical frequency and whistle discipline, while his moderate foul rate allows both teams' young stars to play freely without early foul trouble concerns. This assignment suggests competitive balance over narrative amplification.",
      bettingAngle: "Value on POR +9.5 with Goble's pronounced road bias and pace-positive approach favoring Portland's athletic, uptempo style. The OVER 220.5 is strongly appealing given his extreme pace impact creating additional possessions. Goble's assignment neutralizes San Antonio's home-court advantage while amplifying the betting value on the underdog Trail Blazers.",
      historical: "Goble worked 3 Spurs games this season (SA 2-1) but just 1-2 at home, with Wembanyama averaging 23.1 points in his assignments versus 21.8 season mark due to increased pace. He officiated 4 Trail Blazers games (POR 2-2) with their pace increasing to 102.3 possessions per game versus 98.7 season average. Portland shot better from three-point range (38.2%) in Goble's assignments versus their season 34.1% mark."
    }
  ],
  refProfiles: [
    {
      name: "Marc Davis",
      number: 36,
      experience: "25 years",
      gamesThisSeason: 63,
      tendencies: {
        foulsPerGame: 44.0,
        homeWinPct: 54,
        avgPace: -0.3,
        technicalFrequency: "High",
        overtimeGames: 6,
      },
      bestFor: "Veteran stars in big moments, home favorites, methodical offensive systems",
      worstFor: "Young teams that argue calls, emotionally volatile players",
      notableGame: "Leading tonight's BOS-PHI Eastern Conference showdown, bringing his veteran-friendly whistle and tournament experience to manage Jayson Tatum and Joel Embiid in a crucial playoff positioning battle. Davis' star management expertise makes him ideal for this heavyweight clash where individual brilliance will determine playoff seeding."
    },
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 65,
      tendencies: {
        foulsPerGame: 45.2,
        homeWinPct: 58,
        avgPace: -0.9,
        technicalFrequency: "High",
        overtimeGames: 6,
      },
      bestFor: "Home teams with veteran leadership, physical post players, teams that control tempo",
      worstFor: "Road favorites, young athletic teams, transition-dependent offenses",
      notableGame: "Assigned to tonight's OKC-PHX potential playoff preview where his extreme home bias creates systematic value for Phoenix against the league's top seed. Brothers' physical tolerance and high technical frequency will test both SGA's composure and Devin Booker's emotional management in this crucial Western Conference battle."
    },
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 67,
      tendencies: {
        foulsPerGame: 43.4,
        homeWinPct: 55,
        avgPace: -0.6,
        technicalFrequency: "High",
        overtimeGames: 9,
      },
      bestFor: "Physical interior teams, home favorites, teams that thrive in grind-it-out scenarios",
      worstFor: "Transition-heavy offenses, young teams prone to emotional reactions, road underdogs",
      notableGame: "Leading tonight's DET-ORL rising powers clash, bringing his league-leading overtime frequency and physical tolerance to a game with major playoff seeding implications. Foster's assignment suggests the league expects Cade Cunningham and Paolo Banchero to need maximum possessions to determine playoff positioning in the competitive Eastern Conference."
    },
    {
      name: "John Goble",
      number: 30,
      experience: "14 years",
      gamesThisSeason: 56,
      tendencies: {
        foulsPerGame: 40.5,
        homeWinPct: 46,
        avgPace: 1.8,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Road underdogs, athletic perimeter players, fast-break offenses",
      worstFor: "Home favorites expecting friendly whistles, interior grinding styles",
      notableGame: "Assigned to tonight's SA-POR matchup where his extreme pace-positive approach and road bias create perfect conditions for competitive balance. Goble's assignment neutralizes San Antonio's home-court advantage while providing Victor Wembanyama additional possessions to showcase his statistical dominance against Portland's upset-minded approach."
    },
    {
      name: "Zach Zarba",
      number: 15,
      experience: "20 years",
      gamesThisSeason: 64,
      tendencies: {
        foulsPerGame: 39.6,
        homeWinPct: 47,
        avgPace: 1.2,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Athletic transition teams, road underdogs, skill-based offenses",
      worstFor: "Teams dependent on favorable whistles, physical grinding styles",
      notableGame: "Supporting Marc Davis in tonight's BOS-PHI heavyweight bout, providing pace-positive balance and road-friendly neutrality. Zarba's whistle discipline allows elite skill to determine the outcome while his low technical frequency prevents the playoff-intensity environment from boiling over into whistle chaos."
    },
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 63,
      tendencies: {
        foulsPerGame: 42.3,
        homeWinPct: 53,
        avgPace: 0.2,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Balanced offensive systems, teams with multiple scoring options",
      worstFor: "Teams requiring extreme officiating tendencies to succeed",
      notableGame: "Second official for tonight's OKC-PHX potential playoff preview, bringing moderate balance to Tony Brothers' extreme home bias. Fitzgerald's neutral pace tendencies help manage game flow while his tournament experience provides steady support in high-stakes Western Conference positioning battles."
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 62,
      tendencies: {
        foulsPerGame: 40.1,
        homeWinPct: 48,
        avgPace: 1.5,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "High-scoring offenses, road underdogs, pace-and-space systems",
      worstFor: "Defensive grinding teams, home favorites expecting whistle help",
      notableGame: "Supporting Scott Foster in tonight's DET-ORL rising powers clash, providing pace-positive balance to the lead official's grinding tendencies. Malloy's road-neutral approach helps create competitive balance while his low technical frequency allows young stars to play with maximum intensity and emotion."
    },
    {
      name: "Josh Tiven",
      number: 58,
      experience: "11 years",
      gamesThisSeason: 61,
      tendencies: {
        foulsPerGame: 41.8,
        homeWinPct: 51,
        avgPace: 0.5,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Up-tempo offenses, younger players with emotional energy",
      worstFor: "Teams needing veteran-friendly whistles, slow-paced grinding styles",
      notableGame: "Third member of tonight's BOS-PHI crew, bringing balanced approach and connection with younger players. Tiven's moderate tendencies across all categories help manage the increased intensity while his experience with emotional environments aids in controlling the playoff-positioning pressure."
    },
    {
      name: "Ben Taylor",
      number: 46,
      experience: "19 years",
      gamesThisSeason: 60,
      tendencies: {
        foulsPerGame: 38.9,
        homeWinPct: 49,
        avgPace: 0.8,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Skilled offensive players, teams that play clean basketball",
      worstFor: "Physical defensive schemes, teams needing whistle help to create offense",
      notableGame: "Completing tonight's OKC-PHX crew as the third official, bringing whistle discipline and neutral tendencies to balance Tony Brothers' pronounced biases. Taylor's low foul rate allows SGA to operate freely without early foul trouble concerns, though it can't overcome the systematic home advantage Brothers provides Phoenix."
    },
    {
      name: "Natalie Sago",
      number: 9,
      experience: "8 years",
      gamesThisSeason: 58,
      tendencies: {
        foulsPerGame: 43.1,
        homeWinPct: 52,
        avgPace: -0.1,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Teams with strong veteran leadership, methodical offensive systems",
      worstFor: "Teams relying on favorable whistle treatment, chaos-style offenses",
      notableGame: "Completing tonight's DET-ORL crew, providing steady neutral balance to Scott Foster's grinding approach. Sago's low technical frequency helps manage the young talent showcase while her neutral pace impact allows both Cade Cunningham and Paolo Banchero to operate in their preferred methodical styles."
    },
    {
      name: "Mousa Dagher",
      number: 12,
      experience: "7 years",
      gamesThisSeason: 52,
      tendencies: {
        foulsPerGame: 39.8,
        homeWinPct: 50,
        avgPace: 1.1,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Young athletic teams, balanced competitive environments",
      worstFor: "Teams dependent on home-court whistle advantages",
      notableGame: "Third official for tonight's SA-POR matchup, bringing perfect neutral balance to John Goble's road-friendly approach. Dagher's even-handed tendencies allow Victor Wembanyama's natural dominance to shine while preventing any systematic advantages that might compromise competitive integrity in this showcase game."
    }
  ],
  weeklyTrend: "Tonight's assignments reveal the league's sophisticated approach to managing late-season storylines through strategic referee deployment, with each crew carefully constructed to amplify specific narratives while maintaining competitive balance. The most intriguing decision is Tony Brothers' assignment to OKC-PHX, where his extreme 58% home win rate creates artificial value for Phoenix against the league's top seed. This isn't accidental—Brothers' physical tolerance and high technical frequency provide multiple pathways for the Suns to remain competitive in what could otherwise be a Thunder blowout. The 12.5-point spread becomes highly questionable when Brothers' historical patterns are considered, suggesting the league wants this potential playoff preview to remain competitive regardless of talent disparity. Marc Davis leading BOS-PHI represents perfect star management, with his veteran-friendly whistle creating ideal conditions for both Jayson Tatum and Joel Embiid to deliver playoff-caliber performances. Davis' tournament experience and high technical frequency will manage the intensity while his moderate home bias provides Boston with systematic support in a crucial Eastern Conference positioning battle. The crew construction with Zarba and Tiven provides excellent pace balance, ensuring this heavyweight bout delivers the entertainment value its ABC timeslot demands. Scott Foster's assignment to DET-ORL brings his signature drama-amplification toolkit to a rising powers clash that could define Eastern Conference playoff seeding. Foster's league-leading overtime frequency suggests the league expects this game to require maximum possessions for resolution, while his physical tolerance perfectly suits both Cade Cunningham's aggressive drives and Paolo Banchero's interior dominance. Ed Malloy and Natalie Sago provide pace-positive balance and technical discipline, creating an environment where young star power can flourish under playoff-intensity pressure. The most balanced assignment is John Goble leading SA-POR, where his extreme pace-positive approach and road bias create perfect conditions for competitive balance. This represents the league's most neutral crew construction, suggesting they want Victor Wembanyama's showcase performance to occur in a fair competitive environment rather than one tilted by officiating tendencies. Goble's assignment neutralizes San Antonio's home-court advantage while providing additional possessions for statistical dominance. The week's broader pattern shows the league's evolution toward narrative-driven officiating assignments while maintaining plausible competitive balance. Rather than pure neutrality, these assignments amplify existing storylines—Brothers keeping OKC-PHX competitive, Davis managing Eastern Conference star power, Foster creating overtime drama, and Goble providing showcase neutrality. The betting implications are significant: Brothers creates value on Phoenix, Davis favors Boston's home dominance, Foster suggests grinding overs, and Goble provides underdog value for Portland. This represents sophisticated entertainment production disguised as competitive sport, where officiating crews become part of the storyline rather than neutral arbiters of basketball rules."
};
