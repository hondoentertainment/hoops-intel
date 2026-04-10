// Podcast Companion — Daily Episode Blueprint
// Last updated: April 10, 2026
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
  date: "April 10, 2026",
  episodeTitle: "Siakam's Statement Night — Lakers Crush Warriors Dreams — Tonight's MASSIVE 15-Game Slate",
  rundown: [
    {
      topic: "Raptors Demolish Heat — Siakam's 32-Point Masterclass Shakes Up East Playoff Race",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "Pascal Siakam: 32 points on 12-of-19 shooting",
        "Raptors shot 52% from the field in dominant wire-to-wire win",
        "Toronto moves into tie for 5th place in East at 45-35",
        "Heat drop to 41-39, falling further behind in playoff race",
        "Scottie Barnes added 24 points and 7 assists",
        "Raptors led by as many as 18 points in fourth quarter"
      ],
      debateAngle: "Are the Raptors peaking at the perfect time, or is this just another false hope moment in their inconsistent season? Can they maintain this level against elite competition?",
      suggestedQuote: "When Pascal Siakam is playing like THIS — 32 points on elite efficiency — the Raptors look like a team nobody wants to face in the playoffs. But we've seen this movie before in Toronto.",
      relevantPlayers: ["Pascal Siakam", "Scottie Barnes", "OG Anunoby", "Jimmy Butler", "Bam Adebayo"]
    },
    {
      topic: "Lakers Statement Win — LeBron Vintage Performance Crushes Warriors' Playoff Dreams",
      segment: "deep-dive",
      duration: "9 minutes",
      keyStats: [
        "LeBron James: 28 points, 9 assists, 6 rebounds in vintage performance",
        "Lakers dominated 119-103 at Chase Center for statement road win",
        "Anthony Davis added 22 points and 12 rebounds in paint dominance",
        "Warriors fall to 37-43, playoff hopes hanging by thread",
        "Lakers maintain 5th seed at 51-29 with bounce-back victory",
        "Golden State now 27 games behind West leader Oklahoma City"
      ],
      debateAngle: "Is this the moment we officially say goodbye to the Warriors dynasty? And are the Lakers secretly the most dangerous team nobody wants to face in the West playoffs?",
      suggestedQuote: "That wasn't just LeBron turning back the clock — that was the Lakers sending a message that they're ready to make noise in May. Meanwhile, the Warriors dynasty might be officially over.",
      relevantPlayers: ["LeBron James", "Anthony Davis", "Austin Reaves", "Stephen Curry", "Klay Thompson"]
    },
    {
      topic: "MSG Magic Returns — Are the Knicks the East's Most Dangerous Dark Horse?",
      segment: "hot-take",
      duration: "6 minutes",
      keyStats: [
        "Knicks edge Celtics 112-106 in defensive grind at MSG",
        "Jalen Brunson: 26 points, 7 assists on 10-of-18 shooting",
        "New York now within 2 games of Boston for 2nd seed",
        "Knicks held Celtics to 41% shooting and forced 16 turnovers",
        "Julius Randle: 20 points, 10 rebounds in physical battle",
        "Both teams shot under 45% in playoff-style intensity"
      ],
      debateAngle: "Hot take time: The Knicks are the team I'd LEAST want to face in a seven-game series in the East. Their defense, their crowd, their grit — are they being massively underestimated?",
      suggestedQuote: "I'm telling you right now — nobody, and I mean NOBODY, wants to play a seven-game series against these Knicks at Madison Square Garden. They're built different.",
      relevantPlayers: ["Jalen Brunson", "Julius Randle", "Mitchell Robinson", "Jayson Tatum", "Jaylen Brown"]
    },
    {
      topic: "Rapid Fire Round — Rockets Surge Continues, Rookie Watch, Warriors in Freefall",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "Alperen Şengün near triple-double: 25 points, 11 rebounds, 8 assists",
        "Houston improves to 51-29, solidifying 3rd seed in West",
        "Bennedict Mathurin explodes for 27 points on 11-of-17 shooting",
        "Pacers crush Nets 123-94 in 29-point blowout",
        "Coby White leads Bulls past Wizards 119-108",
        "Victor Wembanyama still runaway ROY leader despite not playing"
      ],
      debateAngle: "Quick debates: Is Houston for real as a championship contender? Should we be more excited about Mathurin's development? And are the Warriors officially in panic mode?",
      suggestedQuote: "Don't sleep on Houston — Şengün is special, they're 51-29, and they might be the West's biggest sleeper. Meanwhile, Bennedict Mathurin is showing why Indiana struck gold.",
      relevantPlayers: ["Alperen Şengün", "Bennedict Mathurin", "Victor Wembanyama", "Coby White", "Tyrese Haliburton"]
    },
    {
      topic: "Tonight's MASSIVE 15-Game Slate — OKC at Denver Headlines Championship-Level Action",
      segment: "closer",
      duration: "7 minutes",
      keyStats: [
        "15-game slate features critical playoff positioning battles",
        "OKC (64-16) visits Denver (52-28) in West heavyweight bout",
        "Thunder vs Nuggets could be playoff preview at Ball Arena",
        "Detroit (58-22) visits Charlotte looking to clinch East superiority",
        "Minnesota at Houston features two teams fighting for seeding",
        "Knicks host Raptors in rematch after both won yesterday"
      ],
      debateAngle: "Which game tonight has the highest stakes: Thunder-Nuggets for West positioning, or are we sleeping on some of these other playoff race battles?",
      suggestedQuote: "Tonight's slate is absolutely bonkers — Thunder at Nuggets is must-watch basketball, but don't sleep on Wolves-Rockets or that Knicks-Raptors rematch. Championship implications everywhere.",
      relevantPlayers: ["Shai Gilgeous-Alexander", "Jamal Murray", "Nikola Jokic", "Cade Cunningham", "LaMelo Ball"]
    }
  ],
  coldOpen: "What's up Hoops Intel family! If you thought yesterday was wild, buckle up because we're just getting started. Pascal Siakam went nuclear with 32 points to crush Miami's playoff dreams, LeBron turned back the clock to embarrass the Warriors at Chase Center, and the Knicks are making MSG magic again with a statement win over Boston. But here's the kicker — tonight's 15-game slate might be the most important night of the regular season with Thunder-Nuggets headlining absolute chaos. I'm your host, and this is Hoops Intel where the basketball never stops. Let's dive in!",
  socialClip: "Clip LeBron's vintage performance breakdown where we break down his 28 points and 9 assists, emphasizing 'This wasn't just turning back the clock — this was the Lakers announcing they're ready for May' with highlights of his best plays against the Warriors. Perfect for Instagram Reels and TikTok.",
  tweetThread: [
    "🚨 HOOPS INTEL DAILY DROP 🚨\n\nPascal Siakam DEMOLISHED Miami with 32 points on 12-of-19 shooting. The Raptors are now tied for 5th in the East after a 128-114 beatdown.\n\nAre they peaking at the perfect time? 👀",
    "LeBron James said 'not today' to Father Time ⏰\n\n28 points, 9 assists, crushing the Warriors 119-103 AT CHASE CENTER\n\nThe Lakers just sent a message to the entire Western Conference. This team is DANGEROUS in May.",
    "MSG MAGIC IS BACK 🏀✨\n\nKnicks edge Celtics 112-106 in a defensive grind\nJalen Brunson: 26 points, 7 assists\nNow just 2 games behind Boston for the 2-seed\n\nNobody wants to play a playoff series at Madison Square Garden.",
    "Quick hits from last night:\n• Alperen Şengün near triple-double (25/11/8)\n• Bennedict Mathurin explodes for 27 points\n• Warriors playoff hopes in serious trouble\n• Rockets solidify 3rd seed at 51-29\n\nThe playoff picture is getting WILD 🔥",
    "TONIGHT: 15-GAME BONANZA 🍿\n\n🔥 OKC @ Denver (Thunder vs Nuggets heavyweight bout)\n🔥 Detroit @ Charlotte (East powerhouse travels)\n🔥 Minnesota @ Houston (Critical seeding battle)\n\nChampionship implications EVERYWHERE\n\nFull breakdown in today's pod! ⬆️"
  ]
};
