// Podcast Companion — Daily Episode Blueprint
// Last updated: May 3, 2026
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
  date: "May 3, 2026",
  episodeTitle: "Embiid's Masterpiece: 76ers Complete Historic 3-1 Comeback + Twin Game 7s Tonight",
  rundown: [
    {
      topic: "76ers Shock the World with Historic Game 7 Road Win",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "PHI wins 109-100 at TD Garden to complete 3-1 comeback",
        "Joel Embiid: 34 PTS, 12 REB, 6 AST on 12-26 shooting", 
        "Tyrese Maxey: 30 PTS, 11 REB, 7 AST in support",
        "VJ Edgecombe: 23 PTS on 5-8 from three as rookie",
        "Only 6th team since 2010 to overcome 3-1 deficit",
        "Boston season ends at home despite 56-26 record"
      ],
      debateAngle: "Is this Joel Embiid's defining career moment, or does he need championship hardware to cement his legacy?",
      suggestedQuote: "When you trail 3-1 and your season's on the line, you find out what your stars are really made of. Joel Embiid just authored one of the greatest Game 7 performances in playoff history.",
      relevantPlayers: ["Joel Embiid", "Tyrese Maxey", "VJ Edgecombe", "Jaylen Brown", "Jayson Tatum"]
    },
    {
      topic: "Breaking Down Philadelphia's Perfect Storm",
      segment: "deep-dive", 
      duration: "10 minutes",
      keyStats: [
        "Embiid shot 46% from field in elimination games",
        "Maxey averaged 28 PPG over final 3 games",
        "Rookie Edgecombe: 15 threes made in series",
        "PHI outrebounded BOS 48-41 in Game 7",
        "Boston shot just 41% in decisive loss",
        "Tatum: 8-24 FG in season-ending performance"
      ],
      debateAngle: "What was more important - Philadelphia's stars stepping up or Boston's stars shrinking in the moment?",
      suggestedQuote: "Championship teams are built on moments like this. The 76ers didn't just win a game, they showed they have that killer instinct when everything's on the line.",
      relevantPlayers: ["Joel Embiid", "Tyrese Maxey", "VJ Edgecombe", "Jayson Tatum", "Jaylen Brown"]
    },
    {
      topic: "Is This the End of Boston's Championship Window?",
      segment: "hot-take",
      duration: "7 minutes", 
      keyStats: [
        "Celtics led series 3-1 with home court",
        "Tatum: 22 PTS on 33% shooting in Game 7",
        "Brown: 33 PTS but couldn't carry team",
        "Boston 0-2 in home Game 7s since 2018",
        "Core of Tatum/Brown is 0-1 in Finals",
        "Age concerns with Al Horford at 40"
      ],
      debateAngle: "After blowing a 3-1 lead at home, are the Celtics' championship aspirations officially over with this core?",
      suggestedQuote: "When you have a 3-1 lead, home court for Game 7, and your franchise player goes 8-for-24, that's not just losing - that's championship windows slamming shut.",
      relevantPlayers: ["Jayson Tatum", "Jaylen Brown", "Al Horford", "Marcus Smart"]
    },
    {
      topic: "Game 7 Sunday Double-Header Preview",
      segment: "rapid-fire",
      duration: "6 minutes",
      keyStats: [
        "DET hosts ORL at 3:30 PM ET on ABC", 
        "CLE hosts TOR at 7:30 PM ET on NBC",
        "Cunningham: 32 PTS forced Detroit Game 7",
        "Barnes: 25 PTS, 14 AST in Toronto's OT win",
        "Magic 1-3 on road this postseason",
        "Cavaliers 3-1 at Rocket Arena in playoffs"
      ],
      debateAngle: "Which Game 7 has higher upset potential - Orlando in Detroit or Toronto in Cleveland?",
      suggestedQuote: "Two Game 7s in one day is why we love playoff basketball. Pure elimination drama where one possession can define entire seasons.",
      relevantPlayers: ["Cade Cunningham", "Paolo Banchero", "Scottie Barnes", "Donovan Mitchell"]
    },
    {
      topic: "What's Next After This Wild Weekend",
      segment: "closer",
      duration: "5 minutes",
      keyStats: [
        "PHI advances to face winner of DET/ORL",
        "Conference semifinals could start Tuesday",
        "Embiid managing right knee after heavy minutes",
        "4 Eastern Conference teams still alive",
        "West playoffs ahead of schedule currently",
        "Rookie Edgecombe now legitimate playoff factor"
      ],
      debateAngle: "Can Philadelphia's momentum from this historic comeback carry them to the Finals?",
      suggestedQuote: "Sometimes the hardest series to win is the one right after you pull off the impossible. Philadelphia just used every emotional bullet they had - can they reload for another war?",
      relevantPlayers: ["Joel Embiid", "Tyrese Maxey", "VJ Edgecombe"]
    }
  ],
  coldOpen: "The impossible just happened at TD Garden. Joel Embiid dropped 34 and 12, Tyrese Maxey added 30, and rookie VJ Edgecombe hit five threes as Philadelphia completed one of the most stunning comebacks in playoff history - overcoming a 3-1 deficit to eliminate Boston on their home floor. Meanwhile, two more Game 7s await us today as the Eastern Conference continues its absolute chaos. This is Hoops Intel, I'm your host, and we've got a LOT to unpack.",
  socialClip: "Joel Embiid's dominant Game 7 performance breakdown - 34 points, 12 rebounds, and the defining moment of his career as Philadelphia completes the 3-1 comeback at TD Garden. The crowd reaction when VJ Edgecombe hit his fifth three-pointer is absolutely electric.",
  tweetThread: [
    "🚨 PODCAST THREAD: Breaking down Philadelphia's HISTORIC 3-1 comeback and tonight's twin Game 7s 🚨",
    "Joel Embiid just delivered one of the greatest Game 7 performances ever: 34 PTS, 12 REB, 6 AST at TD Garden to eliminate the favored Celtics. This is what playoff legends are made of.",
    "But let's talk about the supporting cast - Tyrese Maxey with 30 and 11, and ROOKIE VJ Edgecombe drilling 5 threes in a Game 7 elimination game. That's championship-level depth right there.",
    "Meanwhile, Boston's season ends with Jayson Tatum going 8-24 in Game 7 at home. After blowing a 3-1 lead, serious questions about this core's championship ceiling.",
    "Tonight we get TWO more Game 7s: Magic @ Pistons (3:30 ET, ABC) and Raptors @ Cavaliers (7:30 ET, NBC). Pure playoff basketball doesn't get better than winner-take-all elimination games. 🏀🔥"
  ]
};
