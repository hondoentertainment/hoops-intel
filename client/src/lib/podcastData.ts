// Podcast Companion — Daily Episode Blueprint
// Last updated: April 27, 2026
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
  date: "April 27, 2026",
  episodeTitle: "Playoff Chaos: Tatum's Statement, Wemby's Coronation, and Siakam's Vintage Magic",
  rundown: [
    {
      topic: "Jayson Tatum's Championship Declaration",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "35 points on 13-21 shooting (61.9% FG)",
        "6 three-pointers made, 8 rebounds, 6 assists",
        "Boston's 128-96 victory = 32-point demolition",
        "Tatum's +28 in 34 minutes of dominance",
        "Celtics shot 52.4% from field, 41.7% from three",
        "Philadelphia held to just 96 points at home"
      ],
      debateAngle: "Is Tatum now the Eastern Conference's most dangerous playoff performer, or does Giannis still hold that crown when healthy?",
      suggestedQuote: "When you can walk into a hostile playoff environment and drop 35 while turning a competitive game into a 32-point laugher, you're not just making a statement — you're writing championship résumé material in real time.",
      relevantPlayers: ["Jayson Tatum", "Jaylen Brown", "Joel Embiid", "James Harden"]
    },
    {
      topic: "Victor Wembanyama's Historic Rookie Playoff Run",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "31 points, 14 rebounds, 4 blocks in series clincher",
        "12-19 shooting (63.2% FG) with elite efficiency",
        "Averaging 31.8 PPG, 13.2 RPG, 4.3 BPG this playoffs",
        "At 20 years old, youngest to average 30+ in playoff series",
        "San Antonio 4-2 series victory advances to conference semis",
        "Shot 61.2% from field across entire first round"
      ],
      debateAngle: "Are we witnessing the fastest superstar ascension in NBA history, and can Wemby actually carry San Antonio to a championship in Year 1?",
      suggestedQuote: "What Wembanyama accomplished in this series isn't just rookie excellence — it's generational basketball that happens maybe once every two decades. Tim Duncan didn't do this as a rookie. Anthony Davis didn't do this. We're in uncharted territory.",
      relevantPlayers: ["Victor Wembanyama", "Damian Lillard", "Tim Duncan", "Anthony Davis"]
    },
    {
      topic: "Are the Lakers Already Cooked?",
      segment: "hot-take",
      duration: "7 minutes",
      keyStats: [
        "LeBron: 20 points on 7-18 shooting (38.9% FG)",
        "Anthony Davis: 16 points on 6-14 shooting (42.9% FG)",
        "Lakers outrebounded 52-38 by Houston",
        "Alperen Şengün: 26 points, 12 rebounds, 8 assists",
        "Houston shot 49.2% from field vs Lakers' 41.3%",
        "Lakers entered playoffs with championship expectations"
      ],
      debateAngle: "Is this the beginning of the end for LeBron and AD, or just one bad game against a hungry young team?",
      suggestedQuote: "When you watch LeBron and AD get physically dominated by Alperen Şengün and a bunch of 23-year-olds, you have to ask — is Father Time finally catching up to this Lakers core, or can championship experience still trump youthful legs?",
      relevantPlayers: ["LeBron James", "Anthony Davis", "Alperen Şengün", "Jalen Green"]
    },
    {
      topic: "Rapid Fire: Upset Alerts and Playoff Chaos",
      segment: "rapid-fire",
      duration: "6 minutes",
      keyStats: [
        "Pascal Siakam: 28 points, 11 rebounds in upset over Cleveland",
        "Toronto shot 48.9% vs Cleveland's 42.2%",
        "Paolo Banchero leads Orlando to 1-0 lead over 60-win Detroit",
        "Minnesota up 1-0 on defending champion Denver",
        "Four lower seeds currently leading their series",
        "Only 2 of 8 playoff series going according to seeding"
      ],
      debateAngle: "Is this playoff chaos sustainable, or will higher seeds eventually impose their will with superior talent?",
      suggestedQuote: "When Pascal Siakam can turn back the clock like it's 2019 and Paolo Banchero is outplaying an entire 60-win roster, you realize playoff basketball truly is a different beast where anything can happen.",
      relevantPlayers: ["Pascal Siakam", "Paolo Banchero", "Anthony Edwards", "Donovan Mitchell"]
    },
    {
      topic: "Sunday's Must-Watch Games and Championship Implications",
      segment: "closer",
      duration: "5 minutes",
      keyStats: [
        "Magic can take 2-0 lead over 60-win Pistons at 8 PM ET",
        "Thunder looking to go up 2-0 on Suns at 9:30 PM ET",
        "Timberwolves could put defending champs on brink at 10:30 PM ET",
        "Three potential 2-0 series leads on the line",
        "Home teams are 6-2 in playoff games so far",
        "Lower seeds have won 5 of 8 completed games"
      ],
      debateAngle: "Which Sunday game has the biggest championship implications — Orlando potentially stunning Detroit, or Minnesota putting Denver on the brink?",
      suggestedQuote: "Sunday night could completely reshape the championship landscape. If Orlando goes up 2-0, Minnesota puts Denver on the brink, and OKC takes command — we're looking at the most chaotic playoff picture in recent memory.",
      relevantPlayers: ["Paolo Banchero", "Cade Cunningham", "Anthony Edwards", "Nikola Jokic"]
    }
  ],
  coldOpen: "What's good, Hoops Intel family! Saturday night was absolutely BONKERS. Jayson Tatum dropped 35 in a 32-point demolition that had Philly fans heading for the exits. Victor Wembanyama clinched his first playoff series with 31 and 14 like he's been doing this for a decade. And Pascal Siakam? He turned back the clock to upset Cleveland and remind everyone that playoff experience is still undefeated. We've got championship statements, rookie coronations, and upset alerts that are flipping the entire playoff picture upside down. Buckle up — this is gonna be a wild ride through the most chaotic Saturday in recent playoff memory.",
  socialClip: "Tatum's Takeover Moment: Pull the audio from the 'Championship Declaration' segment where we break down Tatum's 35-point explosion and debate whether he's now the East's most dangerous playoff performer. Include the stats overlay showing his 13-21 shooting and the +28 plus-minus. Perfect for Instagram Reels and TikTok with the quote about 'writing championship résumé material in real time.' This clip encapsulates the night's biggest individual performance while setting up Sunday's storylines.",
  tweetThread: [
    "🎧 NEW EPISODE: 'Playoff Chaos: Tatum's Statement, Wemby's Coronation, and Siakam's Vintage Magic' — Saturday's playoff action was absolutely UNREAL. Here's what you need to know 🧵",
    "1️⃣ TATUM'S TAKEOVER: 35 points on 13-21 shooting in a 32-point DEMOLITION of Philly. When you can walk into a hostile playoff environment and turn a game into a laugher, you're writing championship résumé material in real time 🔥",
    "2️⃣ WEMBY'S CORONATION: 31 points, 14 rebounds to CLINCH his first playoff series. At 20 years old, we're witnessing generational basketball that happens maybe once every two decades. The Spurs are legitimate championship threats 👑",
    "3️⃣ SIAKAM'S VINTAGE MAGIC: Turned back the clock with 28 and 11 to UPSET Cleveland. When playoff experience meets home court magic, anything can happen. The Raptors just reminded everyone they know how to win big games 🦖",
    "4️⃣ SUNDAY'S STAKES: Magic can shock Detroit again, T-Wolves could put defending champs on the brink, Thunder looking to take command. Championship implications everywhere you look 👀 Full episode link in bio — let's hoop! 🏀"
  ]
};
