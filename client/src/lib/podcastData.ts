// Podcast Companion — Daily Episode Blueprint
// Last updated: May 5, 2026
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
  date: "May 5, 2026",
  episodeTitle: "Brunson's MSG Masterpiece & Edwards' Clutch Takeover Rock Conference Semifinals",
  
  rundown: [
    {
      topic: "Knicks Demolish 76ers in Historic 39-Point Conference Semifinals Blowout",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "Jalen Brunson: 41 points on 16-24 shooting",
        "Knicks shot 58% from the field",
        "Largest playoff victory margin in franchise history",
        "Julius Randle: 28 points, 12 rebounds",
        "137-98 final score at Madison Square Garden",
        "Never trailed after opening minutes"
      ],
      debateAngle: "Is this the most dominant Knicks playoff performance since the 1990s, and does it prove they're legitimate championship contenders?",
      suggestedQuote: "This wasn't just a Game 1 victory—Brunson and the Knicks just announced to the entire NBA that their championship window is wide open right now.",
      relevantPlayers: ["Jalen Brunson", "Julius Randle", "Josh Hart", "Joel Embiid"]
    },
    {
      topic: "Anthony Edwards' Clutch Gene: Breaking Down the 32 Second-Half Points That Stunned San Antonio",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "Edwards: 32 points in final two quarters",
        "Minnesota overcame 15-point deficit",
        "104-102 road victory at Frost Bank Center",
        "Karl-Anthony Towns: 24 points, 11 rebounds",
        "Wembanyama: 28 points, 14 rebounds in losing effort",
        "Timberwolves shot 47% in second half"
      ],
      debateAngle: "Does Edwards' clutch performance prove he's evolved into a championship-level closer, or was this just one hot shooting night?",
      suggestedQuote: "When the lights get brightest and the stakes get highest, Anthony Edwards just proved he's built for these championship moments.",
      relevantPlayers: ["Anthony Edwards", "Karl-Anthony Towns", "Victor Wembanyama", "Devin Vassell"]
    },
    {
      topic: "Joel Embiid's Playoff Struggles Continue: Is the Championship Window Closing in Philadelphia?",
      segment: "hot-take",
      duration: "6 minutes",
      keyStats: [
        "Embiid: Only 19 points on poor shooting",
        "76ers shot just 42% as team",
        "39-point loss erases Boston comeback momentum",
        "Embiid's playoff averages declining in big games",
        "Philadelphia's +/- catastrophic across board",
        "Home court advantage now crucial for series"
      ],
      debateAngle: "After the historic Boston comeback, is this blowout loss proof that Embiid can't handle the pressure of championship-level playoff basketball?",
      suggestedQuote: "Joel Embiid looked overwhelmed by the Garden atmosphere when championship stakes arrived—that's a problem for a supposed superstar.",
      relevantPlayers: ["Joel Embiid", "VJ Edgecombe", "Jalen Brunson", "Julius Randle"]
    },
    {
      topic: "Tonight's Must-Watch Games: Thunder vs Lakers and Pistons vs Cavaliers Set Championship Tone",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "OKC 64-18 hosts Lakers 53-29 at 8:30 ET",
        "Thunder favored by 5.5 points",
        "LeBron probable with ankle management",
        "Detroit 60-22 hosts Cleveland 52-30 at 7:00 ET",
        "Both teams survived 7-game first rounds",
        "Anthony Davis questionable with shoulder"
      ],
      debateAngle: "Which game has bigger championship implications: LeBron's experience against OKC's youth or the Eastern bloodbath in Detroit?",
      suggestedQuote: "Tonight we find out if Oklahoma City's home court magic can contain LeBron's playoff brilliance—this could define the West.",
      relevantPlayers: ["LeBron James", "Shai Gilgeous-Alexander", "Cade Cunningham", "Donovan Mitchell"]
    },
    {
      topic: "Conference Semifinals Predictions and What These Opening Results Tell Us About Championship Favorites",
      segment: "closer",
      duration: "7 minutes",
      keyStats: [
        "Knicks now -180 favorites in East semifinals",
        "Timberwolves steal home court in West",
        "Thunder still championship betting favorites",
        "4 teams remain unbeaten at home in playoffs",
        "Road teams 3-1 in conference semifinals openers",
        "Average margin of victory: 20.5 points"
      ],
      debateAngle: "Do these blowout results prove home court advantage is everything, or are we seeing the true championship contenders separate from pretenders?",
      suggestedQuote: "The conference semifinals are exposing who's ready for championship basketball and who's just happy to be here—tonight's games continue that separation.",
      relevantPlayers: ["Jalen Brunson", "Anthony Edwards", "Shai Gilgeous-Alexander", "Victor Wembanyama"]
    }
  ],

  coldOpen: "What's good, Hoops Intel family! Welcome back to your daily NBA intelligence briefing. I'm your host, and we've got some WILD stuff to unpack from last night's conference semifinals openers. Jalen Brunson just put on an absolute clinic at MSG—41 points in a 39-point blowout that had Spike Lee doing backflips. Meanwhile, Anthony Edwards said 'hold my drink' and dropped 32 in the second half to steal a road game in San Antonio. The playoffs just got REAL spicy, and we're breaking down every angle right now!",

  socialClip: "Extract the moment when we analyze Brunson's 41-point performance, specifically the debate about whether this proves the Knicks are legitimate championship contenders. Include the stat about it being the largest playoff victory in franchise history and the host's passionate delivery about their championship window being 'wide open.' This clip should be 45-60 seconds and capture the energy of MSG crowd reactions.",

  tweetThread: [
    "🎙️ NEW EPISODE: Brunson's MSG Masterpiece & Edwards' Clutch Takeover Rock Conference Semifinals\n\nJalen Brunson dropped 41 in a HISTORIC 39-point blowout while Ant-Man scored 32 in the 2nd half to steal Game 1 in San Antonio 🔥\n\nFull breakdown ⬇️",
    "KNICKS STATEMENT GAME 📢\n\n✅ 137-98 demolition of Philly\n✅ Largest playoff win in franchise history\n✅ Brunson: 41 PTS on 16-24 shooting\n✅ Randle: 28 & 12\n✅ 58% team shooting\n\nMSG was ELECTRIC and the Knicks looked like championship contenders",
    "ANTHONY EDWARDS TAKEOVER 🐺\n\n32 points in the 2nd half to overcome a 15-point deficit on the ROAD against the West's 2-seed?\n\nThat's championship DNA right there. KAT added 24 & 11 while Wemby fought with 28 & 14 in the loss.",
    "TONIGHT'S MASSIVE GAMES 🏀\n\n🔥 Thunder vs Lakers (8:30 ET)\n🔥 Pistons vs Cavaliers (7:00 ET)\n\nLeBron's playoff experience vs OKC's home magic\nTwo 7-game survivors battle in Detroit\n\nWhich has bigger title implications?",
    "The conference semifinals are separating REAL contenders from pretenders 💯\n\nRoad teams going 3-1 in openers with an average margin of 20+ points\n\nHome court means everything, but star power means MORE\n\nFull episode link in bio! 🎧"
  ]
};
