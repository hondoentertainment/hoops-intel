// Podcast Companion — Daily Episode Blueprint
// Last updated: April 22, 2026
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
  date: "April 22, 2026",
  episodeTitle: "Embiid's Masterpiece & Dame's Historic Upset Rock the NBA Playoffs",
  rundown: [
    {
      topic: "Joel Embiid Eliminates the Celtics at TD Garden",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "32 points on 13-21 shooting in Game 7",
        "14 rebounds dominating the glass",
        "Game-high +21 plus-minus in 38 minutes",
        "76ers won by 14 points (111-97)",
        "Celtics shot just 40.8% from the field",
        "Philadelphia's first conference semifinals since 2019"
      ],
      debateAngle: "Was this the best Game 7 road performance we've seen in the last decade? And does this catapult Embiid into the true championship superstar conversation?",
      suggestedQuote: "When you can walk into Boston and completely dominate an elimination game with 32 points and 14 rebounds, you've announced that Philadelphia is ready to make a serious championship run.",
      relevantPlayers: ["Joel Embiid", "Tyrese Maxey", "Jayson Tatum", "Jaylen Brown"]
    },
    {
      topic: "Portland's Historic Upset: How the 8-Seed Eliminated 62-Win San Antonio",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "Trail Blazers shot 15-32 from three-point range",
        "Dame Lillard: 31 points, 5 three-pointers made",
        "Anfernee Simons: 24 points, 6 three-pointers",
        "Spurs finished 62-20 in regular season",
        "Wembanyama had 27 points, 11 rebounds in loss",
        "Portland reaches conference semifinals after missing playoffs for years"
      ],
      debateAngle: "Is this the biggest upset in first-round playoff history? And what does it say about the importance of veteran leadership versus young talent in the postseason?",
      suggestedQuote: "Portland's elimination of the 62-win Spurs proves that veteran leadership and playoff experience can overcome talent and regular season success when the pressure reaches its peak.",
      relevantPlayers: ["Damian Lillard", "Anfernee Simons", "Victor Wembanyama", "Jusuf Nurkic"]
    },
    {
      topic: "Are the Boston Celtics Championship Pretenders?",
      segment: "hot-take",
      duration: "6 minutes",
      keyStats: [
        "Celtics were 56-26 in regular season",
        "Lost Game 7 at home by 14 points",
        "Tatum shot 7-19 for just 21 points",
        "Boston managed only 97 points total",
        "Gave up 32 points to Embiid on elite efficiency",
        "Failed to reach conference semifinals"
      ],
      debateAngle: "Hot take time - are the Celtics championship pretenders who crumble under real pressure? This home Game 7 loss is absolutely devastating for their championship credibility.",
      suggestedQuote: "Boston's devastating Game 7 loss at home raises serious questions about their championship DNA and ability to handle pressure when it matters most.",
      relevantPlayers: ["Jayson Tatum", "Jaylen Brown", "Joel Embiid", "Marcus Smart"]
    },
    {
      topic: "Lakers Lock In, Rookie Watch, and Tonight's Playoff Action",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "Anthony Davis: 26 points, 11 rebounds, 4 blocks vs Houston",
        "LeBron James added 22 points, 8 assists",
        "Lakers held Rockets to 42.7% shooting",
        "Wembanyama still leads ROY race despite early exit",
        "Two playoff series begin tonight: DET-ORL, OKC-PHX",
        "Pistons are 8.5-point favorites over Magic"
      ],
      debateAngle: "Quick hits on whether the Lakers are peaking at the right time, if Wembanyama's early playoff exit hurts his ROY case, and predictions for tonight's openers.",
      suggestedQuote: "Davis dominated both ends while anchoring a defense that completely stifled Houston's offensive rhythm throughout the contest.",
      relevantPlayers: ["Anthony Davis", "LeBron James", "Victor Wembanyama", "Cade Cunningham", "Paolo Banchero"]
    },
    {
      topic: "Championship Chaos: What These Upsets Mean for the Title Race",
      segment: "closer",
      duration: "7 minutes",
      keyStats: [
        "Two higher seeds eliminated in stunning fashion",
        "Philadelphia now faces New York in round two",
        "Portland gets Denver in conference semifinals",
        "Oklahoma City and Detroit begin as heavy favorites tonight",
        "Multiple championship contenders already eliminated",
        "Road teams dominated Monday's elimination games"
      ],
      debateAngle: "With Boston out and San Antonio shocked, who are the real championship favorites now? And are we witnessing one of the most unpredictable playoffs ever?",
      suggestedQuote: "Monday night perfectly captured the unpredictable magic that makes the NBA playoffs the greatest show in sports, with elimination games revealing the true character of championship contenders.",
      relevantPlayers: ["Joel Embiid", "Damian Lillard", "Shai Gilgeous-Alexander", "Cade Cunningham", "Nikola Jokic"]
    }
  ],
  coldOpen: "What's good Hoops Intel family! Welcome back to your daily NBA intelligence briefing. I'm your host and we need to talk about what just happened last night because the NBA playoffs just delivered absolute CHAOS. Joel Embiid walked into TD Garden and put up 32 and 14 to eliminate the Boston Celtics in Game 7. Meanwhile, Dame Lillard and the eighth-seeded Trail Blazers just completed one of the biggest upsets in playoff history, knocking out the 62-win San Antonio Spurs. Two championship contenders are going home, two underdogs are advancing, and the entire playoff picture just got flipped upside down. We're breaking it all down in the next 36 minutes, so strap in because this is going to be a wild ride through the most shocking night of playoff basketball we've seen in years.",
  socialClip: "Joel Embiid walking off the TD Garden court after dropping 32 points in Game 7 to eliminate the Celtics. Capture the moment he raises his arms to the stunned Boston crowd, with the overlay text: 'EMBIID SILENCES TD GARDEN' and '32 PTS • 14 REB • GAME 7 MASTERPIECE'. Use the audio of the crowd going silent mixed with Embiid's postgame quote about proving doubters wrong. Perfect 60-second clip that captures the shock and dominance.",
  tweetThread: [
    "🧵 THREAD: Last night's NBA playoffs delivered absolute CHAOS with two massive upsets that completely changed the championship picture. Let's break down the madness...",
    "1/ JOEL EMBIID IS DIFFERENT 🔥 32 points, 14 rebounds in Game 7 AT TD Garden to eliminate the 56-win Celtics. That's how you announce you're ready for a championship run. Absolutely dominant two-way performance when it mattered most.",
    "2/ DAME TIME IN THE PLAYOFFS ⏰ The Trail Blazers just eliminated the 62-WIN Spurs in one of the biggest first-round upsets ever. Lillard (31 pts) and Simons (24 pts, 6 threes) were unconscious from deep. Veteran leadership > regular season records.",
    "3/ THE CELTICS ARE IN CRISIS 📉 Getting eliminated at home in Game 7 after a 56-win season raises serious championship DNA questions. Tatum shot 7-19, they managed just 97 points, and got outplayed in every key moment. Devastating for their title hopes.",
    "4/ TONIGHT'S SLATE 🏀 DET hosts ORL (7 PM ET) and OKC welcomes PHX (9:30 PM ET) to begin their playoff runs. After last night's chaos, can the higher seeds avoid more upsets? This postseason is already legendary. #NBAPlayoffs #HoopsIntel"
  ]
};
