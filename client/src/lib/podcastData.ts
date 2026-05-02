// Podcast Companion — Daily Episode Blueprint
// Last updated: May 2, 2026
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
  date: "May 2, 2026",
  episodeTitle: "Vintage LeBron Dominates, Raptors Stun Cavs in OT, & Pistons Avoid Historic Upset",
  rundown: [
    {
      topic: "LeBron's Championship DNA Silences the Doubters",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "31 points, 8 assists, 6 rebounds on 12-19 shooting",
        "Lakers dominated 98-78, evening series 1-1",
        "Held Rockets to just 36.2% shooting",
        "Game-high +24 plus-minus",
        "20-point road blowout reverses Game 1 narrative",
        "Anthony Davis added 22 points, 11 rebounds, 3 blocks"
      ],
      debateAngle: "Are we witnessing the greatest elimination-pressure performer in NBA history, or is this just LeBron doing what legends do when their backs are against the wall?",
      suggestedQuote: "This wasn't just vintage LeBron — this was a masterclass in championship-level basketball when it matters most. The Lakers' 20-point road dominance proved that reports of their demise were greatly exaggerated.",
      relevantPlayers: ["LeBron James", "Anthony Davis", "Austin Reaves", "Alperen Sengun"]
    },
    {
      topic: "Toronto's Overtime Magic: How the Raptors Seized Control",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "Pascal Siakam: 29 points, 8 rebounds, 6 assists",
        "112-110 overtime victory gives Raptors 2-1 series lead",
        "Scottie Barnes: 19 points, 12 rebounds, 8 assists",
        "Donovan Mitchell scored 33 but couldn't prevent defeat",
        "Raptors forced crucial turnovers in overtime",
        "Home crowd provided elimination-level energy"
      ],
      debateAngle: "Is this the series-defining moment that proves Toronto's championship experience still matters, or did Cleveland just have a bad night on the road?",
      suggestedQuote: "Siakam's overtime heroics weren't just about the 29 points — this was about championship DNA taking over when the lights got brightest. The Raptors just put the Cavaliers in serious trouble.",
      relevantPlayers: ["Pascal Siakam", "Scottie Barnes", "Donovan Mitchell", "Darius Garland"]
    },
    {
      topic: "Are the Magic Choking Away Historic Opportunity?",
      segment: "hot-take",
      duration: "6 minutes",
      keyStats: [
        "Orlando led series 3-1, now faces Game 6 elimination",
        "Paolo Banchero struggled with just 18 points on poor shooting",
        "Cade Cunningham delivered 28 points in elimination game",
        "Detroit shot 53.4% vs Orlando's 37.1%",
        "Would have been one of biggest upsets in NBA history",
        "Pistons' veteran experience finally showed up"
      ],
      debateAngle: "Is Paolo Banchero crumbling under rookie pressure in the biggest moments, or is this just what happens when veteran playoff experience meets youthful inexperience?",
      suggestedQuote: "The Magic had a chance to make history and they're letting it slip away. This is exactly why rookie-led teams struggle to close out experienced championship contenders in the playoffs.",
      relevantPlayers: ["Paolo Banchero", "Cade Cunningham", "Franz Wagner", "Isaiah Stewart"]
    },
    {
      topic: "Playoff Rapid Fire: What We Learned Thursday",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "LeBron leads Thursday Pulse Index at 96.2",
        "Three road teams delivered statement victories",
        "Veteran playoff experience dominated young cores",
        "Series momentum completely shifted in multiple matchups",
        "Championship DNA separated contenders from pretenders",
        "Elimination pressure revealed true character"
      ],
      debateAngle: "Does veteran playoff experience still trump youth and athleticism in crucial postseason moments?",
      suggestedQuote: "Thursday night proved that when the stakes get highest, there's still no substitute for championship-level experience and playoff poise.",
      relevantPlayers: ["LeBron James", "Pascal Siakam", "Cade Cunningham", "Anthony Davis"]
    },
    {
      topic: "Friday's Must-Watch: Sixers-Celtics Game 5 Showdown",
      segment: "closer",
      duration: "4 minutes",
      keyStats: [
        "Series tied 2-2 heading to TD Garden",
        "Joel Embiid probable with knee soreness",
        "Jaylen Brown questionable with ankle sprain",
        "Boston -4.5 favorites at home",
        "Winner advances to face Knicks",
        "Elimination atmosphere at TD Garden"
      ],
      debateAngle: "Can Joel Embiid's vintage playoff dominance continue on the road, or will Boston's home-court advantage prove decisive in Game 5?",
      suggestedQuote: "This Sixers-Celtics Game 5 has all the ingredients for an instant classic — two desperate teams, playoff legends, and TD Garden electricity. Don't miss this one.",
      relevantPlayers: ["Joel Embiid", "Jayson Tatum", "Jaylen Brown", "James Harden"]
    }
  ],
  coldOpen: "What's good, Hoops Intel family! Welcome back to your daily dose of NBA intelligence. I'm your host, and we've got some WILD playoff action to break down from Thursday night. LeBron James just delivered a vintage 31-point masterpiece that has everyone remembering why you never count out the King. Meanwhile, the Raptors pulled off overtime magic in Toronto, and the Magic might be choking away one of the biggest upsets in NBA history. We're diving deep into all of it, plus looking ahead to tonight's must-watch Sixers-Celtics Game 5. This is Hoops Intel — let's get into it!",
  socialClip: "LeBron's Elimination Pressure Excellence: Cut from the opener segment discussing LeBron's 31-point road dominance, focusing on the quote about 'championship-level basketball when it matters most' with overlay graphics showing his shooting efficiency and the 20-point margin of victory. Perfect for Twitter/Instagram with strong visual elements.",
  tweetThread: [
    "🧵 THREAD: Thursday's playoff action delivered MASSIVE momentum shifts across three crucial games. Here's what you need to know from last night's drama:",
    "1/5 👑 VINTAGE LEBRON: 31 points, 8 assists, +24 in the Lakers' dominant 98-78 road victory over Houston. This is exactly why you never count out championship DNA when backs are against the wall. Series now tied 1-1.",
    "2/5 🦕 RAPTORS MAGIC: Pascal Siakam's 29-point overtime masterpiece stunned Cleveland 112-110, giving Toronto a 2-1 series lead. The home crowd energy was ELECTRIC and the Cavs are now in serious trouble on the road.",
    "3/5 🪄 MAGIC STRUGGLES: Orlando's historic upset bid hit a major snag as Detroit avoided elimination with a 93-79 victory. Paolo Banchero struggled and now the Magic face Game 6 pressure after leading 3-1. Rookie pressure showing?",
    "4/5 🔥 TONIGHT'S MUST-WATCH: Sixers @ Celtics Game 5 at TD Garden with the series tied 2-2. Joel Embiid vs Jayson Tatum in an elimination atmosphere. Winner faces the Knicks. This one has instant classic written all over it.",
    "5/5 📊 The Pulse Index belongs to LeBron (96.2) followed by Siakam and Cunningham. Veteran playoff experience dominated Thursday night. New episode breaking it all down is LIVE now! 🎧 #HoopsIntel #NBAPlayoffs"
  ]
};
