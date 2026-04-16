// Referee Tendency Reports — Know the Whistle
// Last updated: April 16, 2026

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
  generatedDate: "April 16, 2026",
  tonightAssignments: [
    {
      game: "CHA @ ORL",
      crew: ["Scott Foster", "Ed Malloy", "Zach Zarba"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this elimination game is pure theater management. His league-leading overtime tendency (9 OT games) and physical tolerance create the perfect environment for Paolo Banchero's redemption arc after Tuesday's 7-of-22 nightmare. Foster's higher foul frequency (43.4 per game) benefits Orlando's interior advantage while his home bias (55%) provides systematic support for the Magic's must-win scenario. LaMelo Ball's emotional style could clash with Foster's high technical frequency, potentially giving Orlando crucial possessions if Charlotte's star gets frustrated.",
      bettingAngle: "Strong lean on ORL -3.5 based on Foster's pronounced home bias and physical tolerance that favors Banchero's interior game. His overtime tendency makes the OVER 218.5 appealing, especially given his foul frequency typically extends games through free-throw shooting. Foster's assignment suggests the league expects a grinding, physical battle that goes deep into the fourth quarter.",
      historical: "Foster worked 3 Magic games this season (ORL 2-1) where Banchero averaged 24.7 points on 48% shooting, well above his season averages. He officiated 2 Hornets games (CHA 0-2) with LaMelo Ball receiving 2 technical fouls across those contests. Orlando shot 28.3 free throws per game in Foster's assignments versus 22.1 league average, showcasing his whistle frequency benefits for interior-focused teams."
    },
    {
      game: "GSW @ PHX",
      crew: ["Tony Brothers", "Kane Fitzgerald", "Ben Taylor"],
      leadRef: "Tony Brothers",
      impact: "Brothers' selection for Stephen Curry's potential season finale represents the league's most controversial assignment decision. His extreme home bias (58%) creates a significant systematic disadvantage for Golden State in an elimination game where Curry needs every possible edge. The physical tolerance that favored Philadelphia Tuesday night now works against the Warriors' aging core, while his high technical frequency could be devastating if Curry or Draymond Green lose composure. Phoenix's length and athleticism thrive under Brothers' whistle, particularly benefiting Devin Booker's aggressive drives and Kevin Durant's post-up game.",
      bettingAngle: "Overwhelming lean on PHX -5.5 given Brothers' extreme home bias and the fact that his physical style strongly favors Phoenix's younger, more athletic roster. The OVER 224.5 becomes appealing with his higher foul rate typically creating more possessions through free throws. Brothers' assignment essentially transforms this from a pick'em game into a Phoenix statement spot.",
      historical: "Brothers officiated 4 Suns games this season (PHX 3-1) where they averaged 119.8 points at home versus 112.1 on the road, demonstrating his home-court amplification. He worked 4 Warriors games (GSW 1-3) with Curry averaging just 23.1 points on 41% shooting in Brothers' assignments versus 28.4 points on 46% shooting with other officials. The Suns shot 26.8 free throws per game in Brothers' games, well above their 21.9 season average."
    }
  ],
  refProfiles: [
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
      notableGame: "Leading tonight's CHA-ORL elimination game, bringing his league-leading overtime frequency and physical tolerance to Orlando's crucial redemption opportunity. Foster's assignment suggests the league expects Paolo Banchero's bounce-back performance to require maximum possessions and physical play to overcome Charlotte's magical run."
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
      worstFor: "Road favorites, aging superstars, transition-dependent offenses",
      notableGame: "Assigned to tonight's GSW-PHX elimination game where his extreme home bias creates a massive systematic advantage for Phoenix. Brothers' selection for Stephen Curry's potential farewell represents the most controversial officiating decision of the playoffs, essentially forcing the Warriors to overcome both the Suns and the whistle."
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
      notableGame: "Supporting Foster's crew in tonight's CHA-ORL game, providing pace-positive balance to the lead official's grinding tendencies. Malloy's road-neutral approach helps offset Foster's home bias while his low technical frequency prevents the elimination pressure from boiling over into whistle chaos."
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
      notableGame: "Second official for tonight's GSW-PHX elimination game, bringing moderate balance to Tony Brothers' extreme home bias. Fitzgerald's neutral pace tendencies help manage the game flow while his tournament experience provides steady support in the pressure-cooker elimination environment."
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
      notableGame: "Third member of tonight's CHA-ORL crew, providing road-friendly balance to Scott Foster's home bias. Zarba's pace-positive approach creates opportunities for LaMelo Ball's transition magic while his whistle discipline allows skill to determine the outcome rather than foul trouble."
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
      notableGame: "Completing tonight's GSW-PHX crew as the third official, bringing whistle discipline and neutral tendencies to balance Tony Brothers' pronounced biases. Taylor's low foul rate allows Stephen Curry to operate freely without early foul trouble concerns, though it can't overcome the systematic home advantage."
    },
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
      notableGame: "Fresh off leading Tuesday's GSW-LAC elimination game where his veteran-friendly whistle helped Stephen Curry deliver his 35-point masterpiece. Davis' tournament-tested experience makes him a prime candidate for this weekend's first-round assignments where star management will be crucial."
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
      notableGame: "Available for first-round assignments after providing excellent pace management in Tuesday's elimination games. Goble's extreme pace-positive tendencies and road bias make him valuable for creating competitive balance in potential blowout scenarios."
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
      notableGame: "Being held in reserve for first-round games where his balanced approach and connection with younger players will be valuable. Tiven's moderate tendencies across all categories make him ideal for managing the increased intensity of seven-game series basketball."
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
      notableGame: "Available for weekend assignments after providing steady third-official work throughout the play-in tournament. Sago's neutral pace impact and low technical frequency make her valuable for maintaining competitive integrity in high-stakes playoff environments."
    }
  ],
  weeklyTrend: "Tonight's elimination game assignments reveal the league's most polarizing officiating strategy of the postseason, with each crew seemingly designed to amplify rather than neutralize the existing competitive dynamics. The most shocking decision is Tony Brothers' assignment to Stephen Curry's potential elimination game in Phoenix. Brothers' extreme 58% home win rate isn't just above league average—it's a systematic disadvantage being imposed on the Warriors in what should be a neutral competitive environment. The league's decision to pair Brothers with Kane Fitzgerald's moderate balance and Ben Taylor's whistle discipline suggests they want the home-court advantage without completely destroying competitive integrity, but the damage is already done. This crew construction essentially transforms PHX -5.5 from a reasonable line into a gift, with Brothers' physical tolerance and high technical frequency creating multiple pathways for Golden State's season to end on whistles rather than basketball execution. The strategic implications are staggering: if Curry's legendary career ends tonight, it will be partly due to a systematic officiating disadvantage that was completely avoidable. The CHA-ORL assignment tells a more balanced story about managing elimination drama. Scott Foster's selection as lead official brings his league-leading overtime frequency (9 OT games) and physical tolerance to Paolo Banchero's redemption narrative. Foster's 55% home win rate provides Orlando with systematic support, while his high technical frequency could prove problematic for LaMelo Ball's emotional style. Ed Malloy's pace-positive expertise and Zach Zarba's road-friendly approach provide the perfect balance, creating an environment where skill and execution determine the outcome rather than whistle patterns. This crew is built for drama—Foster's overtime tendency suggests the league expects this elimination game to require maximum possessions for resolution. The week's broader pattern shows the league's evolving philosophy toward officiating assignments: rather than neutralizing competitive advantages, they're amplifying narratives. Tuesday's assignments (Brothers favoring Philadelphia's home court, Davis managing Curry's comeback story) established this approach, and tonight's assignments double down on it. The betting implications are crystal clear—Brothers' assignment to GSW-PHX creates artificial value on Phoenix's spread, while Foster's crew in CHA-ORL suggests a grinding, high-possession game that favors the over. The notable absence of certain veteran officials (Marc Davis, John Goble) suggests they're being preserved for first-round assignments where neutrality will be more important than narrative management. But tonight's assignments raise fundamental questions about competitive integrity: should officiating crews be selected to enhance storylines, or should they be chosen to provide the most neutral possible environment? The league's answer is becoming increasingly clear, and it prioritizes entertainment value over pure competition."
};
