// Podcast Companion — Daily Episode Blueprint
// Last updated: April 28, 2026
// Generated from today's Hoops Intel edition

export interface TalkingPoint {
  topic: string;
  segment: "opener" | "deep-dive" | "hot-take" | "rapid-fire" | "closer";
  duration: string;
  keyStats: string[];
  debateAngle: string;
  suggestedQuote: string;
  relevantPlayers: string[];
}

export interface PodcastCompanionData {
  date: string;
  episodeTitle: string;
  rundown: TalkingPoint[];
  coldOpen: string;
  socialClip: string;
  tweetThread: string[];
}

export const podcastCompanion: PodcastCompanionData = {
  date: "April 28, 2026",
  episodeTitle: "MAGIC KINGDOM: Banchero's Historic Upset Shakes NBA Championship Race",
  rundown: [
    {
      topic: "Orlando's Historic Upset Over Detroit",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "Paolo Banchero: 26 points, 8 rebounds, 10-18 shooting",
        "Orlando sweeps Detroit 4-0 as 8th seed vs 1st seed",
        "Pistons went 60-22 in regular season",
        "Magic's first conference semifinals since 2020",
        "14-4 Orlando closing run in final 6 minutes",
        "Biggest playoff upset in over a decade"
      ],
      debateAngle: "Is Paolo Banchero already a top-10 player in the NBA after this series?",
      suggestedQuote: "When a 20-year-old can carry an eighth seed past a 60-win championship favorite, you're not just watching an upset - you're watching the birth of a superstar on basketball's biggest stage.",
      relevantPlayers: ["Paolo Banchero", "Franz Wagner", "Cade Cunningham", "Jalen Suggs"]
    },
    {
      topic: "Thunder Emerge as Championship Contenders",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "Shai Gilgeous-Alexander: 38 points, 7 assists, 14-22 FG",
        "OKC advances 4-1 over Phoenix with 131-122 win",
        "Thunder went 64-18 in regular season",
        "SGA averaging 34.2 PPG in playoffs",
        "Chet Holmgren: 16 points, 9 rebounds, 3 blocks",
        "Thunder outscored Suns by 45 points in fourth quarters"
      ],
      debateAngle: "Are the Thunder now the Western Conference favorites over San Antonio and Denver?",
      suggestedQuote: "Shai Gilgeous-Alexander's 38-point masterpiece didn't just advance Oklahoma City - it announced them as legitimate championship contenders who can match any team's star power.",
      relevantPlayers: ["Shai Gilgeous-Alexander", "Chet Holmgren", "Devin Booker", "Josh Giddey"]
    },
    {
      topic: "Championship Windows Opening and Closing",
      segment: "hot-take",
      duration: "7 minutes",
      keyStats: [
        "Detroit's 60 wins meant nothing in playoff execution",
        "Phoenix eliminated despite Booker's 28 points",
        "Nikola Jokic's triple-double saved Denver's season",
        "Four different rookies making major playoff impact",
        "Age gap: Banchero (20) vs Booker (29) vs Embiid (32)",
        "Young teams (OKC, ORL, SAS) dominating veterans"
      ],
      debateAngle: "Hot Take: The NBA's championship window has officially shifted to teams built around players 25 and under",
      suggestedQuote: "We're witnessing a seismic shift where championship DNA isn't about veteran leadership anymore - it's about young stars who grew up in the social media era and thrive under pressure.",
      relevantPlayers: ["Paolo Banchero", "Victor Wembanyama", "Shai Gilgeous-Alexander", "Devin Booker"]
    },
    {
      topic: "Monday's Must-Watch Games",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "Celtics lead Sixers 2-0, can take 3-0 stranglehold",
        "Joel Embiid probable with knee soreness",
        "Knicks up 1-0 on Hawks at Madison Square Garden",
        "Trae Young questionable with ankle sprain",
        "Spurs-Blazers conference semifinals begin",
        "Wembanyama averaging 31.8 PPG in playoffs"
      ],
      debateAngle: "Which Game 3 is more crucial - Boston trying to sweep Philly or New York taking control against Atlanta?",
      suggestedQuote: "Monday night could end two seasons and launch two championship runs - that's the beauty of playoff basketball in late April.",
      relevantPlayers: ["Jayson Tatum", "Joel Embiid", "Jalen Brunson", "Trae Young", "Victor Wembanyama"]
    },
    {
      topic: "Looking Ahead to Conference Semifinals",
      segment: "closer",
      duration: "6 minutes",
      keyStats: [
        "Orlando advances to face winner of BOS-PHI",
        "OKC awaits DEN-MIN winner in West semis",
        "San Antonio begins semis vs Portland tonight",
        "Six teams still alive in championship hunt",
        "Average age of remaining stars: 24.8 years",
        "Three rookie standouts still playing"
      ],
      debateAngle: "Which conference semifinals matchup will produce the most surprising result?",
      suggestedQuote: "The championship race just got infinitely more interesting - when eighth seeds are eliminating top seeds and rookies are outplaying All-Stars, anything can happen in the next round.",
      relevantPlayers: ["Paolo Banchero", "Victor Wembanyama", "Shai Gilgeous-Alexander", "Nikola Jokic"]
    }
  ],
  coldOpen: "What's good, Hoops Intel family! Sunday night just gave us one of the most shocking results in NBA playoff history. The eighth-seeded Orlando Magic didn't just beat the top-seeded Detroit Pistons - they SWEPT them. Paolo Banchero dropped 26 points to close out a 60-win team that was supposed to be championship bound. Meanwhile, Shai Gilgeous-Alexander put up 38 to send the Thunder to the conference semifinals, and Nikola Jokic's triple-double kept Denver's title defense alive. The playoff landscape just got turned completely upside down, and we're breaking down every single moment right now on Hoops Intel.",
  socialClip: "Clip the moment we break down Paolo Banchero's series-clinching performance - specifically the part where we analyze his 14-4 closing run and compare it to other historic rookie playoff moments. The energy when we talk about him being 'championship ready at 20' will be perfect for social.",
  tweetThread: [
    "🚨 HOOPS INTEL POD DROP: \"Magic Kingdom\" - Breaking down Paolo Banchero's historic upset that just shook the entire NBA championship race",
    "🎯 MAIN TOPICS: Orlando's stunning sweep of Detroit, SGA's 38-point masterpiece advancing OKC, and why championship windows are shifting to players under 25",
    "📊 THE NUMBERS: Banchero (26 pts), SGA (38 pts), Jokic (32-15-11 triple-double) - three performances that defined Sunday's playoff chaos",
    "🔥 HOT TAKE ALERT: We argue the NBA's title window has officially shifted to teams built around stars 25 and under - and the data backs it up",
    "🎧 FULL EP: Link in bio - 36 minutes of championship analysis, playoff predictions, and why Monday's games could end two seasons 🏀"
  ]
};
