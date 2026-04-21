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
      game: "BOS @ PHI",
      crew: ["Scott Foster", "Kane Fitzgerald", "Josh Tiven"],
      leadRef: "Scott Foster",
      impact: "Foster's assignment to this crucial Eastern Conference battle brings his signature grinding style and moderate home bias to a game where Philadelphia desperately needs every advantage to avoid slipping into the play-in tournament. His 56% home win rate provides the 76ers with systematic support, while his league-leading overtime frequency (8 games) suggests this Jayson Tatum vs. Joel Embiid showcase could require extra time for resolution. Foster's high technical frequency will test both teams' emotional control, particularly in this playoff-atmosphere environment where every possession matters for seeding. The physical tolerance favors Embiid's interior dominance while potentially limiting Boston's transition advantages through whistle management.",
      bettingAngle: "Strong value on PHI +3.5 with Foster's pronounced home bias working directly in Philadelphia's favor during their desperate playoff push. The OVER 218.5 becomes highly appealing given Foster's foul frequency and overtime tendency creating extended possessions. His assignment suggests the league expects this battle to be decided in the final possessions, making live betting advantageous as emotions escalate.",
      historical: "Foster worked 4 Celtics games this season (BOS 2-2) with Tatum averaging 27.1 points but shooting just 43% on the road due to physical defensive tolerance. He officiated 3 76ers games (PHI 2-1) at home where Embiid averaged 31.2 points and 12.4 rebounds, well above his season averages. Philadelphia shot 28.1 free throws per game in Foster's Wells Fargo Center assignments versus 24.7 season average, showing clear systematic home advantage."
    },
    {
      game: "SAS @ POR",
      crew: ["Tony Brothers", "Ed Malloy", "Ben Taylor"],
      leadRef: "Tony Brothers",
      impact: "Brothers' assignment to this Western Conference clash brings his extreme home bias (58%) to a game where Portland desperately needs home victories to maintain their play-in positioning. His physical tolerance and high technical frequency create challenging conditions for Victor Wembanyama's finesse game on the road while favoring Portland's scrappy, defensive identity. The 7.5-point spread seems inflated given Brothers' historical pattern of keeping games competitive through whistle management, particularly when home underdogs have veteran leadership. San Antonio's youth combined with Brothers' road-unfriendly approach could create opportunities for upset value, though Wembanyama's dominance has been overwhelming regardless of officiating.",
      bettingAngle: "Significant value on POR +7.5 with Brothers' extreme home bias working directly in Portland's favor against a young San Antonio team. The UNDER 221.5 is appealing given his physical tolerance and pace-negative tendencies disrupting San Antonio's preferred tempo. Brothers' assignment prevents this from being the blowout many expect, creating a grinding environment that favors Portland's veteran playoff experience.",
      historical: "Brothers worked 3 Spurs games this season (SAS 2-1) but their road record in his assignments was only 1-2, well below their overall road dominance. He officiated 4 Trail Blazers games (POR 3-1) with their home record in his assignments being 2-0. Portland shot 26.2 free throws per game in Brothers' Moda Center assignments versus 22.8 season average, indicating systematic home support that could neutralize San Antonio's talent advantage."
    },
    {
      game: "LAL @ HOU",
      crew: ["Zach Zarba", "Natalie Sago", "Derek Richardson"],
      leadRef: "Zach Zarba",
      impact: "Zarba's assignment to this Western Conference showdown brings his road-friendly approach and whistle discipline to a game where both teams are jockeying for optimal playoff seeding. His 47% home win rate actually favors the visiting Lakers, while his pace-positive impact (+1.3) creates additional possessions for both Anthony Davis's interior dominance and Houston's athletic perimeter attack. The low technical frequency allows stars like Davis and Alperen Şengün to operate with maximum intensity without whistle interference. Zarba's neutral approach transforms this into a pure talent evaluation that should favor Los Angeles's veteran experience and superior depth during their current five-game winning streak.",
      bettingAngle: "Strong value on LAL -2.5 with Zarba's pronounced road bias working against Houston's home-court advantage. The OVER 227.5 becomes highly appealing given his pace-positive impact creating 4-5 additional possessions per game. His assignment essentially neutralizes the venue advantage and transforms this into a talent-based evaluation that favors the Lakers' superior roster construction and current momentum.",
      historical: "Zarba worked 4 Lakers games this season (LAL 3-1) with Davis averaging 25.8 points and 11.2 rebounds on the road, both above his season averages due to neutral officiating and increased pace. He officiated 3 Rockets games (HOU 1-2) with their home record in his assignments being a disappointing 0-2. Houston averaged just 22.9 free throws per game in Zarba's home assignments versus their 25.1 season average, highlighting his road-neutral approach that eliminates home cooking."
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
        homeWinPct: 56,
        avgPace: -0.8,
        technicalFrequency: "High",
        overtimeGames: 8,
      },
      bestFor: "Physical interior teams, home favorites, teams that thrive in grind-it-out scenarios, veteran leadership",
      worstFor: "Transition-heavy offenses, young teams prone to emotional reactions, road favorites expecting neutral treatment",
      notableGame: "Leading tonight's BOS-PHI Eastern Conference battle, bringing his league-leading overtime frequency and home bias to a Jayson Tatum vs. Joel Embiid showcase. Foster's assignment suggests this crucial playoff positioning game will require maximum possessions for resolution, while his physical tolerance and technical frequency will test both teams' emotional control in a desperate must-win environment for Philadelphia."
    },
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
      bestFor: "Home teams with veteran leadership, physical post players, teams that control tempo and interior presence",
      worstFor: "Road favorites, young athletic teams, transition-dependent offenses, teams needing neutral officiating",
      notableGame: "Leading tonight's SAS-POR Western Conference battle where his extreme home bias could create upset potential for Portland's veteran-laden roster. Brothers' physical tolerance and high technical frequency will test Victor Wembanyama's road composure while potentially disrupting San Antonio's pace-and-space system through whistle management that favors grinding, defensive basketball."
    },
    {
      name: "Zach Zarba",
      number: 15,
      experience: "20 years",
      gamesThisSeason: 68,
      tendencies: {
        foulsPerGame: 39.6,
        homeWinPct: 47,
        avgPace: 1.3,
        technicalFrequency: "Low",
        overtimeGames: 4,
      },
      bestFor: "Athletic transition teams, road underdogs, skill-based offenses, clean basketball",
      worstFor: "Teams dependent on favorable whistles, physical grinding styles, home favorites expecting help",
      notableGame: "Leading tonight's LAL-HOU Western Conference showdown where his road-friendly approach and whistle discipline create ideal conditions for Anthony Davis and the Lakers to establish dominance away from home. Zarba's pace-positive tendencies and neutral officiating style transform this into a pure talent evaluation that should favor Los Angeles's superior roster depth and current winning momentum."
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
      bestFor: "Balanced offensive systems, teams with multiple scoring options, neutral competitive environments",
      worstFor: "Teams requiring extreme officiating tendencies to succeed, chaos-style offenses",
      notableGame: "Supporting Scott Foster in tonight's BOS-PHI Eastern Conference showcase, providing moderate balance to Foster's extreme tendencies. Fitzgerald's neutral approach across most categories helps manage the playoff-intensity pressure while his tournament experience provides steady support in high-stakes conference positioning battles between two championship-caliber organizations."
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
      bestFor: "High-scoring offenses, road underdogs, pace-and-space systems, skilled perimeter players",
      worstFor: "Defensive grinding teams, home favorites expecting whistle help, interior-dependent offenses",
      notableGame: "Second official for tonight's SAS-POR Western Conference battle, providing pace-positive balance to Tony Brothers' grinding home-bias approach. Malloy's road-neutral tendencies help create some competitive balance while his low technical frequency allows stars like Wembanyama to operate with maximum intensity without whistle interference disrupting their natural rhythm and flow."
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
      bestFor: "Teams with strong veteran leadership, methodical offensive systems, balanced competitive environments",
      worstFor: "Teams relying on favorable whistle treatment, chaos-style offenses, emotional volatile players",
      notableGame: "Supporting Zach Zarba in tonight's LAL-HOU Western Conference showdown, providing steady veteran balance to Zarba's road-friendly approach. Sago's neutral tendencies and low technical frequency help manage the playoff-positioning pressure while her foul frequency creates enough action to keep both teams engaged without disrupting the competitive flow or favoring either side systematically."
    },
    {
      name: "Josh Tiven",
      number: 58,
      experience: "11 years",
      gamesThisSeason: 64,
      tendencies: {
        foulsPerGame: 41.9,
        homeWinPct: 50,
        avgPace: 0.7,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Up-tempo offenses, younger players with emotional energy, skill-based basketball",
      worstFor: "Teams needing veteran-friendly whistles, slow-paced grinding styles",
      notableGame: "Third official for tonight's BOS-PHI showcase, bringing perfect neutral balance and connection with star players. Tiven's moderate tendencies across all categories help manage the Tatum-Embiid intensity while his experience with high-pressure environments aids in controlling the playoff-positioning desperation without favoring either side through systematic whistle management."
    },
    {
      name: "Ben Taylor",
      number: 46,
      experience: "19 years",
      gamesThisSeason: 63,
      tendencies: {
        foulsPerGame: 38.9,
        homeWinPct: 49,
        avgPace: 0.9,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Skilled offensive players, teams that play clean basketball, pace-and-space systems",
      worstFor: "Physical defensive schemes, teams needing whistle help to create offense",
      notableGame: "Completing tonight's SAS-POR crew as third official, bringing whistle discipline and neutral tendencies to balance Tony Brothers' pronounced home bias. Taylor's low foul rate allows both Wembanyama and Portland's veterans to operate freely without early foul trouble concerns, though his neutral approach can't overcome the systematic home advantage Brothers provides the Trail Blazers."
    },
    {
      name: "Derek Richardson",
      number: 63,
      experience: "12 years",
      gamesThisSeason: 59,
      tendencies: {
        foulsPerGame: 40.7,
        homeWinPct: 49,
        avgPace: 1.1,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Athletic perimeter teams, balanced competitive environments, transition basketball",
      worstFor: "Teams dependent on home-court whistle advantages, interior grinding styles",
      notableGame: "Third official for tonight's LAL-HOU Western Conference battle, bringing perfect neutral balance to Zach Zarba's road-friendly approach. Richardson's even-handed tendencies and pace-positive impact allow both Anthony Davis and Alperen Şengün to showcase their skills while preventing any systematic advantages that might compromise the competitive integrity of this crucial playoff positioning matchup."
    },
    {
      name: "John Goble",
      number: 30,
      experience: "14 years",
      gamesThisSeason: 61,
      tendencies: {
        foulsPerGame: 40.4,
        homeWinPct: 47,
        avgPace: 2.1,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Road underdogs, athletic perimeter players, fast-break offenses, skilled position-less basketball",
      worstFor: "Home favorites expecting friendly whistles, interior grinding styles, teams dependent on home-court advantages",
      notableGame: "Veteran official known for his extreme road-friendly approach and pace-positive impact, creating ideal conditions for visiting teams to establish dominance through superior talent rather than venue advantages. His whistle discipline and low technical frequency make him perfect for games where skill should determine outcomes over systematic officiating influence or emotional volatility."
    }
  ],
  weeklyTrend: "Tonight's three-game slate reveals the league's sophisticated approach to managing late-season playoff positioning narratives through strategic referee deployment, with each crew carefully constructed to either amplify natural advantages or create competitive balance based on storyline priorities and television entertainment value. The most intriguing assignment is Scott Foster leading BOS-PHI, where his moderate home bias and overtime tendency provide Philadelphia with both systematic support and extended opportunity to steal a crucial victory against Boston's superior talent. This represents the league's commitment to maintaining playoff drama by ensuring desperate teams like the 76ers receive optimal conditions to extend their season, with Foster's physical tolerance favoring Embiid's interior dominance while his high technical frequency could disrupt Boston's rhythm through emotional management challenges. The 3.5-point spread becomes questionable when Foster's historical patterns favor competitive games that often require overtime resolution. Tony Brothers' assignment to SAS-POR brings his signature home bias amplification to a game where Portland's veteran leadership could exploit his systematic support for grinding, defensive basketball. Brothers' extreme home advantage (58%) works directly against San Antonio's youth and road inexperience, while his physical tolerance and pace-negative tendencies disrupt the Spurs' preferred tempo and spacing. The 7.5-point spread seems inflated given Brothers' consistent pattern of keeping games competitive through whistle management that prevents blowouts, particularly when home underdogs possess the veteran savvy that Portland's roster demonstrates. This assignment suggests the league expects Portland to remain viable in their play-in chase despite talent disadvantages. Zach Zarba leading LAL-HOU represents the most neutral assignment, where his road-friendly approach and pace-positive tendencies create pure talent evaluation conditions that should favor the Lakers' superior depth and current momentum. Zarba's whistle discipline prevents systematic advantages while his low technical frequency allows stars like Anthony Davis to operate at maximum intensity without interference. The 2.5-point spread accurately reflects the talent gap when officiating variables are neutralized, making this the most predictable outcome of the night. The broader pattern shows the league's evolution toward entertainment-driven officiating assignments while maintaining plausible competitive balance. Rather than pure neutrality, these assignments serve specific narrative purposes: Foster amplifies drama in must-win scenarios, Brothers prevents talent mismatches from becoming blowouts, and Zarba provides clean talent evaluation when storylines don't require intervention. The betting implications are significant across all three games, with each assignment creating value against conventional wisdom that fails to account for systematic officiating influences on game flow, pace, and competitive balance."
};
