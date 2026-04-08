// Podcast Companion — Daily Episode Blueprint
// Last updated: April 7, 2026
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
  date: "April 7, 2026",
  episodeTitle: "Cavaliers Drop 142 in Memphis Massacre | Pistons STUNNED by Magic | Spurs Streak Hits 13",
  rundown: [
    {
      topic: "Cavaliers Erupt for Season-High 142 Points",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "Cleveland 142-126 over Memphis — highest team total this season",
        "Donovan Mitchell: 38 points on 15-24 shooting, 6-11 from three",
        "Cavaliers shot 58% from field, made 18 three-pointers",
        "Jarrett Allen: 24 points, 14 rebounds on 11-15 shooting",
        "Darius Garland: 22 points, 11 assists orchestrating the offense",
        "Cleveland (51-29) now 6 games behind East 4-seed"
      ],
      debateAngle: "Is this the performance that officially puts Cleveland in the championship conversation? When Mitchell gets this hot and the role players execute like this, are the Cavaliers actually capable of making a Finals run?",
      suggestedQuote: "Mitchell was unconscious from three-point range, going 6-of-11 while the entire team shot 58% from the field. This wasn't just good offense — this was historically great offense that should terrify every team in the East.",
      relevantPlayers: ["Donovan Mitchell", "Jarrett Allen", "Darius Garland", "Evan Mobley", "Ja Morant"]
    },
    {
      topic: "Paolo Banchero's Breakout Upset of East Leaders",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "Orlando 123, Detroit 107 — Magic upset East-leading Pistons",
        "Paolo Banchero: 35 points, 8 rebounds on 13-22 shooting",
        "Banchero scored 23 second-half points to take over the game",
        "Franz Wagner returned with 22 points after injury absence",
        "Detroit shot just 44% without Cade Cunningham (collapsed lung)",
        "Pistons' East lead cut to just 2 games over Boston"
      ],
      debateAngle: "Was this the moment Banchero officially announced himself as a franchise player? Can Orlando actually make playoff noise with Wagner healthy, or was this just one magical night against a Cunningham-less Pistons team?",
      suggestedQuote: "This wasn't just Paolo having a good game — this was a 22-year-old taking over against the best team in the East and willing his team to a statement victory. Wagner's return gives them legitimate depth.",
      relevantPlayers: ["Paolo Banchero", "Franz Wagner", "Wendell Carter Jr.", "Cade Cunningham", "Isaiah Stewart"]
    },
    {
      topic: "Are the Spurs Actually Championship Ready?",
      segment: "hot-take",
      duration: "7 minutes",
      keyStats: [
        "San Antonio extends streak to 13 games — longest in NBA this season",
        "Victor Wembanyama: 28 points, 12 rebounds, 5 blocks vs Embiid",
        "Spurs (61-19) lead West by 2 games over Oklahoma City",
        "Wembanyama making cases for both MVP and DPOY",
        "Jeremy Sochan added 19 points in perfect complementary role",
        "Philadelphia held to just 42% shooting"
      ],
      debateAngle: "Hot take time: Are the Spurs actually better championship contenders than Boston or Denver right now? This 13-game streak isn't just about Wembanyama — the entire roster is clicking at the perfect time. Is this their year?",
      suggestedQuote: "Thirteen straight wins while leading the West isn't luck — it's championship-level basketball. Wembanyama dominated Embiid on both ends, and role players like Sochan are stepping up in big moments. They look unstoppable.",
      relevantPlayers: ["Victor Wembanyama", "Jeremy Sochan", "Stephon Castle", "Joel Embiid"]
    },
    {
      topic: "Around the League: Knicks Clutch, Nuggets Survive",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "New York 108-105 over Atlanta — Brunson 29/8, clutch free throws",
        "Knicks (52-28) win 4th straight, maintain 3-seed stranglehold",
        "Trae Young: 32 points, 9 assists — 4th straight 30+ point game",
        "Denver 137-132 over Portland in overtime thriller",
        "Jokic triple-double: 31 points, 14 rebounds, 12 assists",
        "Trail Blazers (40-40) still fighting for play-in position"
      ],
      debateAngle: "Quick hits: Is Jalen Brunson the most clutch point guard in the East? Should we be worried about Trae putting up video game numbers but Atlanta still can't close games? And are the Nuggets showing championship resolve or concerning vulnerability?",
      suggestedQuote: "Brunson hit the clutch free throws when it mattered most — that's championship DNA. Meanwhile, Trae's been unconscious with four straight 30-point games, but the Hawks can't execute in crunch time.",
      relevantPlayers: ["Jalen Brunson", "Trae Young", "Nikola Jokic", "Damian Lillard", "OG Anunoby"]
    },
    {
      topic: "East Race Chaos and What's Next",
      segment: "closer",
      duration: "6 minutes",
      keyStats: [
        "Detroit's East lead cut to 2 games after Orlando upset",
        "Boston has won 6 straight, breathing down Pistons' neck",
        "Cade Cunningham still out with collapsed lung — no timeline",
        "Atlanta just 1 game ahead of Philadelphia for 5-seed",
        "No games Monday — rest day before final week chaos",
        "Playoff positioning battles resume Tuesday"
      ],
      debateAngle: "The East 1-seed is suddenly in jeopardy with Cunningham out and Boston surging. Looking ahead to the final week: Could Detroit actually lose the top seed? And is Orlando's upset the spark they need for a playoff push?",
      suggestedQuote: "Detroit went from comfortable 1-seed to looking over their shoulder at Boston in the span of one week. Without Cunningham, they're vulnerable, and tonight's loss to Orlando proves it. The final week just got very interesting.",
      relevantPlayers: ["Cade Cunningham", "Jayson Tatum", "Paolo Banchero", "Joel Embiid"]
    }
  ],
  coldOpen: "What's good, Hoops Intel family! The Cleveland Cavaliers just put up 142 points — the highest total by ANY team this season — while Donovan Mitchell went absolutely nuclear for 38. But that wasn't even the only shocker of the night. Paolo Banchero dropped 35 to upset the East-leading Pistons, cutting Detroit's lead to just 2 games with one week left. The Spurs extended their win streak to 13 — that's the longest in the NBA this season — and suddenly the entire playoff picture is in chaos. We're breaking down the most insane night of basketball in weeks. Let's dive in!",
  socialClip: "Mitchell's 38-point explosion highlight reel set to the audio: 'Mitchell was unconscious from three-point range, going 6-of-11 while the entire team shot 58% from the field. This wasn't just good offense — this was historically great offense that should terrify every team in the East.' Show the made threes, Allen's dunks, and Cleveland's bench going wild. 60-second clip perfect for Instagram and TikTok.",
  tweetThread: [
    "🔥 HOOPS INTEL POD IS LIVE 🔥\n\nCavaliers dropped 142 points (season-high!) while Mitchell went OFF for 38\n\nBanchero SHOCKED the East leaders with 35 in Orlando upset\n\nSpurs hit 13 straight wins — longest streak in NBA\n\nThe playoff race just got WILD\n\n🎧 Link in bio",
    "Mitchell was absolutely unconscious: 38 PTS on 15-24 shooting, 6-11 from three 🎯\n\nCavaliers shot 58% as a TEAM and made 18 threes in the 142-126 massacre of Memphis\n\nWhen Mitchell gets this hot, Cleveland becomes championship-level scary",
    "Paolo Banchero's coming-of-age game: 35 points to upset the East-leading Pistons 👑\n\n23 second-half points to completely take over\n\nFranz Wagner returned with 22 points\n\nDetroit's lead over Boston cut to just 2 games — the 1-seed is in jeopardy",
    "Victor Wembanyama: 28/12/5 blocks while DOMINATING Joel Embiid 🚫\n\nSpurs win their 13th straight — longest streak in the NBA this season\n\n61-19 record leading the West by 2 games\n\nThey look absolutely unstoppable heading into playoffs",
    "Final week chaos brewing:\n\n• Detroit's 1-seed suddenly vulnerable without Cade\n• Boston won 6 straight, breathing down their necks  \n• Orlando back in playoff race after Banchero's explosion\n• Spurs on historic 13-game heater\n\nPlayoff positioning is about to be WILD 🍿"
  ]
};
