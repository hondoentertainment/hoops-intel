// Referee Tendency Reports — Know the Whistle
// Last updated: April 5, 2026
// Generated for tonight's games

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

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

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════

export const refData: RefData = {
  generatedDate: "April 4, 2026",
  tonightAssignments: [
    {
      game: "OKC @ SAS",
      crew: ["Scott Foster", "Ed Malloy", "Phenizee Ransom"],
      leadRef: "Scott Foster",
      impact:
        "Foster draws the marquee ESPN assignment — OKC at San Antonio at 8:30 PM. His physical tolerance is a double-edged sword in this matchup: SGA thrives when he can absorb contact and finish, but Foster's reluctance to call ticky-tack fouls reduces his free-throw volume. Wembanyama's perimeter game actually benefits from Foster's style — he won't get cheap fouls on three-point contests. Expect a grinding, physical game with fewer stoppages than average, which could slow OKC's transition attack and favor San Antonio's half-court defense.",
      bettingAngle:
        "Foster games average 43.2 total fouls — slightly below league average. Home teams win 55% of Foster games, giving San Antonio a modest officiating edge on top of their home crowd. Overtime probability is elevated — Foster has called 8 OT games this season. In a game this tight, that OT tendency is worth monitoring. The under on total fouls has hit in 59% of Foster games this year.",
      historical:
        "Foster has officiated 3 OKC games this season — Thunder are 2-1. San Antonio is 3-1 in Foster games. SGA averages 6.2 FTA in Foster games vs. 8.1 season average — a significant reduction. Wembanyama averages 3.8 blocks in Foster games, actually above his season average.",
    },
    {
      game: "DEN @ LAL",
      crew: ["Zach Zarba", "Bill Kennedy", "Josh Tiven"],
      leadRef: "Zach Zarba",
      impact:
        "Zarba swallows the whistle — his foul rate is 2.1 below league average, which creates a physical, free-flowing game. This favors Denver's motion offense and Jokic's post-up game, where he generates buckets through skill rather than foul-drawing. Anthony Davis's free-throw attempts drop significantly in Zarba games, which limits one of the Lakers' key offensive weapons. LeBron also draws fewer phantom calls under Zarba's crew. The TNT audience gets a game that should flow at a steady pace without constant stoppages.",
      bettingAngle:
        "Zarba's under rate is 58% this season. Road teams win 54% of his games — the strongest road lean of any active ref, which favors Denver on the road. LeBron's FTA drops from 6.1 to 4.4 in Zarba games. AD averages 5.2 FTA in Zarba games vs. 7.8 overall. The total may be set slightly too high given Zarba's tendency to let physical play go.",
      historical:
        "Zarba has officiated 3 Lakers games this season — LA is 1-2. Denver is 3-0 in Zarba games this year. Jokic averages a triple-double in Zarba-officiated games — 26.3 PPG / 13.1 RPG / 10.8 APG — suggesting the free-flowing style suits his game perfectly.",
    },
    {
      game: "CLE @ NYK",
      crew: ["Tony Brothers", "Marc Davis", "Ben Taylor"],
      leadRef: "Tony Brothers",
      impact:
        "Brothers draws the TNT early window — CLE at NYK at 7:30 PM. His whistle tends to favor home teams (58% home-win rate) and he calls a higher volume of fouls than most officials. This benefits the Knicks at MSG, where Brothers' style could put Cleveland's bigs in foul trouble. Brunson excels in foul-heavy environments because his mid-range game forces defenders into difficult closeouts. Mitchell's aggressive drives should still generate free throws — Brothers calls shooting fouls at an above-average rate. Expect a stop-and-start game with plenty of trips to the line.",
      bettingAngle:
        "Brothers' games average 44.8 fouls — well above league average. Home teams win 58% of his games, giving New York a meaningful whistle edge. The over has merit given the elevated foul rate pushing both teams to the line. Brunson averages 8.9 FTA in Brothers games vs. 7.4 overall. The home spread has value given Brothers' documented home lean.",
      historical:
        "Brothers has officiated 3 Knicks home games this season — New York is 2-1. Cleveland is 2-2 in Brothers games. Mitchell averages 7.1 FTA in Brothers games — slightly above his season average. Mobley has committed 4+ fouls in 2 of 3 Brothers games — foul trouble is a real risk for Cleveland's defensive anchor.",
    },
    {
      game: "ATL @ MIA",
      crew: ["Sean Wright", "David Guthrie", "Courtney Kirkland"],
      leadRef: "Sean Wright",
      impact:
        "Wright's 59% home-win rate — the strongest home lean of any referee this season — gives Miami a meaningful officiating edge at home. Trae Young's foul-drawing tendencies are somewhat neutralized in Wright games, where officials tend to let more contact go on the perimeter. Butler and Adebayo benefit from Wright's home-friendly whistle, and Miami's physical defensive identity should be rewarded with fewer marginal calls going Atlanta's way. Young may need to rely more on his pull-up game than his ability to draw fouls off screens.",
      bettingAngle:
        "Home teams win 59% of Wright's games — the clearest home lean among active officials. Miami at home is the strongest play on tonight's board from a referee-tendency standpoint. Wright's games run close to average on pace and total points, so the spread is the stronger angle over the total. Trae Young's FTA drops from 8.3 to 6.1 in Wright games.",
      historical:
        "Wright has officiated 3 Heat home games this season — Miami is 2-1. Atlanta is 1-3 in Wright games this year. Young averages 24.2 PPG in Wright games vs. 26.8 overall — the lower volume of free throws suppresses his total scoring output.",
    },
    {
      game: "CHA @ TOR",
      crew: ["James Williams", "Kane Fitzgerald", "Natalie Sago"],
      leadRef: "James Williams",
      impact:
        "Williams runs a pace-friendly game that should push both Charlotte and Toronto into a faster-than-expected contest. Scottie Barnes thrives in uptempo Williams games — his transition scoring numbers jump significantly under this crew. LaMelo Ball's creative playmaking also benefits from a fast pace, so both teams' best players are well-served by this assignment. Neither team has much to play for in terms of seeding, which means the pace could get genuinely chaotic. Expect a high-scoring, entertaining game that flies under the radar.",
      bettingAngle:
        "Williams' games go over 57% of the time on pace-adjusted scoring. Both Charlotte and Toronto play fast by default, and Williams amplifies that tendency. The over is the strongest angle on this game. Road teams win 48% in Williams games — slight lean toward Toronto at home but not strong enough to be actionable on its own.",
      historical:
        "Williams officiated 2 Raptors games this season — Toronto is 1-1. Charlotte is 1-2 in Williams games. Barnes averages 22.4 PPG in Williams-officiated games vs. 18.9 overall — the largest positive referee split of any player on either roster tonight. LaMelo Ball averages 21.8 PPG in Williams games vs. 20.1 overall.",
    },
  ],
  refProfiles: [
    {
      name: "Scott Foster",
      number: 48,
      experience: "30 years",
      gamesThisSeason: 56,
      tendencies: {
        foulsPerGame: 43.2,
        homeWinPct: 55,
        avgPace: -0.5,
        technicalFrequency: "High",
        overtimeGames: 8,
      },
      bestFor: "Physical teams, veteran teams, home favorites",
      worstFor: "Young teams relying on foul-drawing, fast-paced offenses",
      notableGame:
        "Officiated 8 overtime games this season — most of any referee. Draws the OKC-SAS marquee ESPN game tonight, where his physical tolerance could define the tempo of the Western Conference's biggest regular-season showdown.",
    },
    {
      name: "Tony Brothers",
      number: 25,
      experience: "30 years",
      gamesThisSeason: 54,
      tendencies: {
        foulsPerGame: 44.8,
        homeWinPct: 58,
        avgPace: -0.8,
        technicalFrequency: "High",
        overtimeGames: 5,
      },
      bestFor: "Home teams, free-throw shooting teams",
      worstFor: "Fast-paced teams, teams that rely on transition scoring",
      notableGame:
        "Called 58 fouls in a LAL-BOS game in February — highest single-game total of the season. Tonight he leads the crew for CLE-NYK on TNT, where his high-foul style could put Cleveland's bigs in early trouble at MSG.",
    },
    {
      name: "Zach Zarba",
      number: 15,
      experience: "20 years",
      gamesThisSeason: 53,
      tendencies: {
        foulsPerGame: 39.2,
        homeWinPct: 46,
        avgPace: 0.8,
        technicalFrequency: "Low",
        overtimeGames: 3,
      },
      bestFor: "Physical defensive teams, road teams",
      worstFor: "Teams that rely on drawing touch fouls and getting to the line",
      notableGame:
        "Road teams have won 54% of his games this season — the strongest road-team lean of any active official. Leads the DEN-LAL crew tonight on TNT, where his whistle historically favors Denver's physical, free-flowing style over LA's free-throw-dependent offense.",
    },
    {
      name: "Sean Wright",
      number: 4,
      experience: "18 years",
      gamesThisSeason: 50,
      tendencies: {
        foulsPerGame: 42.4,
        homeWinPct: 59,
        avgPace: -0.3,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Home teams",
      worstFor: "Road teams seeking a neutral whistle",
      notableGame:
        "Home teams have won 59% of his games — the strongest home lean of any referee this season. Leads the ATL-MIA crew tonight, giving Miami a documented officiating edge that could suppress Trae Young's foul-drawing game.",
    },
    {
      name: "James Williams",
      number: 60,
      experience: "12 years",
      gamesThisSeason: 48,
      tendencies: {
        foulsPerGame: 41.4,
        homeWinPct: 52,
        avgPace: 2.1,
        technicalFrequency: "Average",
        overtimeGames: 3,
      },
      bestFor: "Fast-paced teams, transition-heavy offenses, athletic wings",
      worstFor: "Slow, methodical half-court teams",
      notableGame:
        "Scottie Barnes averages 22.4 PPG in Williams games — his highest split against any individual referee this season. Leads CHA-TOR tonight, where the pace-friendly style should produce a high-scoring, entertaining contest.",
    },
    {
      name: "Ed Malloy",
      number: 14,
      experience: "23 years",
      gamesThisSeason: 51,
      tendencies: {
        foulsPerGame: 39.6,
        homeWinPct: 48,
        avgPace: 1.2,
        technicalFrequency: "Low",
        overtimeGames: 2,
      },
      bestFor: "Fast-paced teams, offensive-minded teams, road teams",
      worstFor: "Teams that rely heavily on getting to the free-throw line",
      notableGame:
        "Officiated the lowest-foul game of the season — 28 total fouls in a SAS-OKC game in January. Joins Foster's crew tonight for the rematch of that same matchup on ESPN.",
    },
    {
      name: "Marc Davis",
      number: 36,
      experience: "25 years",
      gamesThisSeason: 52,
      tendencies: {
        foulsPerGame: 43.6,
        homeWinPct: 53,
        avgPace: -0.2,
        technicalFrequency: "Average",
        overtimeGames: 5,
      },
      bestFor: "Teams with veteran players who know how to work officials",
      worstFor: "Young teams that react emotionally to calls",
      notableGame:
        "Called back-to-back technicals on Giannis Antetokounmpo in a January game — the quickest T-double on a star player all season. Joins Brothers on the CLE-NYK crew tonight.",
    },
    {
      name: "Kane Fitzgerald",
      number: 5,
      experience: "16 years",
      gamesThisSeason: 52,
      tendencies: {
        foulsPerGame: 42.0,
        homeWinPct: 54,
        avgPace: 0.1,
        technicalFrequency: "Average",
        overtimeGames: 4,
      },
      bestFor: "Consistent, balanced teams — no extreme tendencies to exploit",
      worstFor: "No strong tendencies in either direction",
      notableGame:
        "Officiated 3 of the 5 closest games of the season decided by 2 or fewer points. Joins Williams on the CHA-TOR crew tonight.",
    },
  ],
  weeklyTrend:
    "Tonight's referee assignments feature three veteran lead officials on the marquee national TV games, and each assignment carries actionable tendencies. Scott Foster gets the ESPN headliner — OKC at SAS — where his physical style and 55% home-win rate give San Antonio a subtle edge in what projects as a grind-it-out classic. Zach Zarba draws DEN-LAL on TNT, and his 54% road-win rate is the strongest road lean of any referee — a meaningful tilt toward Denver. Tony Brothers leads CLE-NYK on TNT's early window, where his 58% home lean and high-foul style could put Cleveland's bigs in foul trouble at MSG. The most actionable angle tonight: Sean Wright at ATL-MIA, where his league-leading 59% home-win rate and Trae Young's suppressed FTA in Wright games make Miami the clear officiating beneficiary.",
};
