// Podcast Companion — Daily Episode Blueprint
// Last updated: May 4, 2026
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
  date: "May 4, 2026",
  episodeTitle: "Game 7 Magic: Detroit & Cleveland Punch Semifinal Tickets as East Heats Up",
  rundown: [
    {
      topic: "Detroit's Historic Game 7 Demolition Job",
      segment: "opener",
      duration: "6 minutes",
      keyStats: [
        "DET 116, ORL 94 — 22-point blowout in winner-take-all game",
        "Cade Cunningham: 28 PTS, 11 AST on 11-18 shooting",
        "Isaiah Stewart: 22 PTS, 14 REB, dominated the paint",
        "First conference semifinals since 2008 — 18-year drought ends",
        "Pistons shot 52% from field, never trailed after Q1"
      ],
      debateAngle: "Is this Pistons team built for a deep playoff run or will experience catch up to them in the semifinals?",
      suggestedQuote: "Cade Cunningham just delivered the performance Detroit has been waiting 18 years to see — that wasn't just a Game 7 win, that was a championship-level statement.",
      relevantPlayers: ["Cade Cunningham", "Isaiah Stewart", "Paolo Banchero", "Ausar Thompson"]
    },
    {
      topic: "Donovan Mitchell's Clutch Gene on Full Display",
      segment: "deep-dive",
      duration: "8 minutes",
      keyStats: [
        "CLE 114, TOR 102 — survived tense Game 7 battle",
        "Donovan Mitchell: 35 PTS, 8 AST, 5 threes on 13-24 shooting",
        "Evan Mobley: 18 PTS, 12 REB, 4 BLK anchored defense",
        "Decisive 16-4 run in fourth quarter broke Toronto's resistance",
        "Mitchell averaging 28.4 PPG this playoff series"
      ],
      debateAngle: "How does Mitchell's Game 7 performance rank among the clutch playoff moments of his career, and what does it say about Cleveland's championship ceiling?",
      suggestedQuote: "When the lights are brightest and the stakes are highest, Donovan Mitchell transforms into a completely different player — that 35-point Game 7 was pure playoff basketball poetry.",
      relevantPlayers: ["Donovan Mitchell", "Evan Mobley", "Scottie Barnes", "Pascal Siakam", "Jarrett Allen"]
    },
    {
      topic: "Are the 76ers Actually Built Different This Time?",
      segment: "hot-take",
      duration: "7 minutes",
      keyStats: [
        "PHI completed historic 3-1 comeback vs Boston",
        "Tonight: PHI @ NYK, 8 PM ET at Madison Square Garden",
        "Joel Embiid probable with knee management",
        "VJ Edgecombe emerging as clutch rookie contributor",
        "Knicks are 4.5-point home favorites"
      ],
      debateAngle: "Is Philadelphia's stunning Boston comeback proof they're finally mentally tough enough for a title run, or will the bright lights of MSG expose them again?",
      suggestedQuote: "I've seen this movie before with Philadelphia — they get our hopes up, then crumble under pressure. But something feels different about this group after that Boston series.",
      relevantPlayers: ["Joel Embiid", "VJ Edgecombe", "Jalen Brunson", "Julius Randle"]
    },
    {
      topic: "Rapid Fire: West Coast Drama & Rookie Watch",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "MIN @ SAS tonight — Edwards vs Wembanyama clash",
        "Victor Wembanyama probable with back tightness",
        "Anthony Edwards questionable with ankle soreness",
        "VJ Edgecombe leads rookie playoff scoring at 14.2 PPG",
        "Spurs 6.5-point home favorites over Minnesota"
      ],
      debateAngle: "Which tonight's Western Conference matchup has higher championship implications — the star power or the system basketball?",
      suggestedQuote: "Tonight's Spurs-Timberwolves game is pure basketball porn — you've got Wembanyama's defensive brilliance against Edwards' explosive offense in a playoff atmosphere.",
      relevantPlayers: ["Victor Wembanyama", "Anthony Edwards", "VJ Edgecombe", "Amen Thompson"]
    },
    {
      topic: "Eastern Conference Semifinals: The Road Ahead",
      segment: "closer",
      duration: "4 minutes",
      keyStats: [
        "East semifinals bracket now set with four teams advancing",
        "Detroit's first conference semis since 2008 championship window",
        "Cleveland-Detroit eventual matchup promises contrasting styles",
        "Philadelphia's momentum vs New York's home court advantage",
        "Conference finals picture starting to crystallize"
      ],
      debateAngle: "Which Eastern Conference semifinal matchup is more likely to produce a legitimate championship contender?",
      suggestedQuote: "The Eastern Conference just got infinitely more interesting — you've got Detroit's young hunger, Cleveland's veteran savvy, Philly's resilience, and New York's desperation all colliding in the semifinals.",
      relevantPlayers: ["Cade Cunningham", "Donovan Mitchell", "Joel Embiid", "Jalen Brunson"]
    }
  ],
  coldOpen: "Game 7 magic happened twice last night, and the Eastern Conference playoff picture just got absolutely electric. Detroit ended an 18-year conference semifinal drought with a statement 22-point blowout of Orlando, while Donovan Mitchell went full superhero mode with 35 points to push Cleveland past Toronto. But here's the thing — tonight we get 76ers-Knicks at Madison Square Garden with Philly riding that historic Boston comeback momentum. Plus, the West Coast serves up Wembanyama versus Anthony Edwards in what might be the most aesthetically pleasing basketball game of the playoffs so far. I'm your host, this is Hoops Intel, and we're about to break down why last night's Game 7s were just the appetizer for tonight's main course.",
  socialClip: "Cade Cunningham's 28-point, 11-assist masterclass in Detroit's historic Game 7 victory — breaking down how the young star orchestrated the Pistons' first conference semifinals berth since 2008 with surgical precision against Orlando's defense.",
  tweetThread: [
    "🎧 NEW @HoopsIntel: Game 7 magic struck twice last night as Detroit & Cleveland punched semifinal tickets with dominant performances. Plus tonight's PHI-NYK thriller at MSG has title implications 🧵",
    "Detroit's 116-94 Game 7 demolition of Orlando wasn't just a win — it was an 18-year drought-ending STATEMENT. Cade (28/11) and Stewart (22/14) showed this young core is built for playoff moments 🔥",
    "Donovan Mitchell's 35-point Game 7 masterpiece proves he's built different in elimination games. That 16-4 fourth quarter run by Cleveland broke Toronto's hearts and showcased championship-level composure 💯",
    "Tonight's 76ers-Knicks opener at MSG is must-watch basketball. Philly's riding that historic 3-1 Boston comeback momentum, but can they handle the bright lights and hostile crowd? Embiid vs Randle is appointment television 📺",
    "The Eastern Conference semifinals just got SPICY. Detroit's youth vs Cleveland's experience. Philly's resilience vs New York's desperation. Four teams with legitimate title dreams — who survives? 🏆"
  ]
};
