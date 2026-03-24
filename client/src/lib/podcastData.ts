// Podcast Companion — Daily Episode Blueprint
// Last updated: March 23, 2026
// Generated from today's Hoops Intel edition

// ═══════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════

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

// ═══════════════════════════════════════════════════════════
// DATA
// ═══════════════════════════════════════════════════════════

export const podcastCompanion: PodcastCompanionData = {
  date: "March 23, 2026",
  episodeTitle: "Luka's Step-Back Dagger, Hawks Can't Stop Winning, and SGA's Historic Streak",
  rundown: [
    {
      topic: "Luka's 38-Point Masterpiece Sinks the Rockets",
      segment: "opener",
      duration: "5-7 min",
      keyStats: [
        "38 PTS on 13-24 FG (54.2%), 5-8 from three",
        "Step-back three with 47 seconds left sealed 118-115 win",
        "Lakers have won 7 straight — 44-25, 2.5 games up on Houston for 3-seed",
        "Luka averaging 34.2 PPG over his last 6 games",
        "AD added 24/13 — the Luka-AD two-man game is elite"
      ],
      debateAngle: "Is Luka the best closer in the NBA right now? Three game-deciding shots in his last five games. Is he having a better individual stretch than anyone not named SGA?",
      suggestedQuote: "Luka hit a step-back three with 47 seconds left in Houston's own building. The Rockets had no answer. This is the version of Luka the Lakers traded everything for — and he's delivering.",
      relevantPlayers: ["Luka Dončić", "Anthony Davis", "Kevin Durant", "Austin Reaves"]
    },
    {
      topic: "SGA's 130 Consecutive 20-Point Games — An All-Time Record",
      segment: "deep-dive",
      duration: "8-10 min",
      keyStats: [
        "130 consecutive 20-point games — the longest streak in NBA history",
        "25 PTS in just three quarters vs. Brooklyn — didn't need the 4th",
        "Thunder 55-15, on pace for 65 wins",
        "11 straight wins — tied with Hawks for longest active streak",
        "OKC's point differential is +12.3 over the streak"
      ],
      debateAngle: "At what point does SGA's streak become the most impressive individual accomplishment in modern NBA history? Wilt's records were set in a different era. Is 130 straight 20-point games more impressive than a 50-point average season?",
      suggestedQuote: "SGA scored 25 in three quarters and sat down. He's so dominant that extending an all-time record is just another Tuesday night. The Thunder are on pace for 65 wins and the MVP race is over.",
      relevantPlayers: ["Shai Gilgeous-Alexander", "Chet Holmgren"]
    },
    {
      topic: "The Hawks Are the Hottest Team in Basketball",
      segment: "hot-take",
      duration: "5-7 min",
      keyStats: [
        "11 straight wins — longest active streak in NBA (tied with OKC)",
        "Jalen Johnson: 28/9/7 in Dallas — 14 triple-doubles this season",
        "Atlanta surged to 38-31, tied for 7th in East",
        "Best net rating in NBA over last 3 weeks",
        "Nickeil Alexander-Walker added 24 PTS"
      ],
      debateAngle: "Hot take: The Hawks are a legitimate second-round playoff team, not just a play-in story. Jalen Johnson is an All-NBA caliber player and nobody is giving Atlanta enough respect.",
      suggestedQuote: "Eleven straight wins and nobody is talking about the Hawks. Jalen Johnson had 28, 9, and 7 in Dallas. This team has the best net rating in the league over three weeks. Atlanta is for real.",
      relevantPlayers: ["Jalen Johnson", "Trae Young", "Nickeil Alexander-Walker", "Cooper Flagg"]
    },
    {
      topic: "Rapid-Fire: Warriors Below .500, Ingram's Hot Streak, Randle Stepping Up",
      segment: "rapid-fire",
      duration: "4-5 min",
      keyStats: [
        "Warriors 33-36 — dropped below .500 without Curry, lost to Celtics 118-101",
        "Brandon Ingram: 28 PTS for 3rd straight game — shooting 52% from three since trade",
        "Julius Randle: 28/8/4, second straight 28+ game without Edwards",
        "Jokic: 22/11/9 — one assist shy of triple-double, Nuggets win 3rd in 4",
        "Kawhi played 26 min on restriction — Clippers survive in New Orleans"
      ],
      debateAngle: "Is it time to declare the Warriors' dynasty officially over? Golden State is below .500, Curry has no timetable, and the roster around him is thin. Where does Golden State go from here?",
      suggestedQuote: "Golden State dropped below .500. No Curry. No direction. The Warriors are at a crossroads and the clock is ticking on the Curry era in San Francisco.",
      relevantPlayers: ["Stephen Curry", "Brandon Ingram", "Julius Randle", "Nikola Jokić", "Kawhi Leonard"]
    },
    {
      topic: "Looking Ahead: Cunningham vs. LaMelo, Thunder Go for 12 Straight",
      segment: "closer",
      duration: "3-4 min",
      keyStats: [
        "DET @ CHA — Cunningham (back spasms) expected to return vs. LaMelo on ESPN",
        "CLE @ ORL — Mobley vs. Banchero rematch, pivotal East seeding game",
        "OKC vs. MIL — Thunder go for 12th straight against depleted Bucks",
        "SAS vs. LAC — Wembanyama returns from rest to face Kawhi",
        "PHX vs. NYK — Brunson expected to return for road trip"
      ],
      debateAngle: "Thursday's DET-CHA game is the most important game of the night for the East playoff picture. If Charlotte wins, the play-in race blows wide open. If Detroit wins, the gap stays comfortable.",
      suggestedQuote: "Cade vs. LaMelo on ESPN Thursday night. Two ascending young guards. One is leading the best team in the East. The other is carrying Charlotte's playoff hopes. This is must-watch basketball.",
      relevantPlayers: ["Cade Cunningham", "LaMelo Ball", "Victor Wembanyama", "Jalen Brunson"]
    }
  ],
  coldOpen: "What's up everybody — welcome back to the show. Last night, Luka Doncic hit a step-back three with 47 seconds left to beat the Rockets in their own building. Thirty-eight points. Seven straight wins for the Lakers. Meanwhile, SGA just scored 25 in three quarters — extending his all-time record to 130 consecutive 20-point games — and the Hawks won their eleventh straight without anyone noticing. The NBA is in an absolute sweet spot right now. Let's get into it.",
  socialClip: "The SGA deep-dive segment comparing his 130-game streak to Wilt's records — this is the clip-worthy moment. The stat comparisons are jaw-dropping and the debate about whether this is the most impressive individual accomplishment in modern NBA history is compelling content that will drive engagement.",
  tweetThread: [
    "1/ NEW EPISODE: Luka's step-back dagger, SGA's historic streak, and the Hawks' silent takeover. Here's what you need to know from last night's NBA action. A thread.",
    "2/ Luka Doncic scored 38 points on 54% shooting and hit the game-sealing step-back three with 47 seconds left. The Lakers have won SEVEN STRAIGHT. He's averaging 34.2 PPG over his last six. This is the best basketball of his career.",
    "3/ SGA now has 130 CONSECUTIVE 20-point games. That's an all-time record. He scored 25 last night... in three quarters... and sat down. The Thunder are 55-15 and on pace for 65 wins. The MVP race is over.",
    "4/ Nobody is talking about the Hawks winning 11 straight games. Jalen Johnson had 28/9/7 in Dallas. Atlanta has the best net rating in the league over the last three weeks. This team is a legitimate playoff threat.",
    "5/ Also: Warriors dropped below .500 without Curry. Ingram scored 28 for the 3rd straight game in Toronto. Randle had 28 without Edwards. And Jokic was one assist shy of another triple-double. Full breakdown in today's episode."
  ]
};
