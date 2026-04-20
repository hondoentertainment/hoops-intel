// Podcast Companion — Daily Episode Blueprint
// Last updated: April 20, 2026
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
  date: "April 20, 2026",
  episodeTitle: "Thunder Drop 35-Point BOMB on Suns | Banchero's 31-Point Stunner Upsets Pistons | Tatum Goes Nuclear in Celtics Beatdown",
  rundown: [
    {
      topic: "Oklahoma City's Historic 35-Point Demolition of Phoenix",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "OKC wins 119-84, largest margin of victory this season",
        "Shai drops 29 points on 64.7% shooting (11-17 FG)",
        "Thunder shoot 52.1% as team, hold Suns to 36.8%",
        "Phoenix falls to 45-38, playoff hopes in serious jeopardy",
        "Six Thunder players score in double figures",
        "35-point margin ties franchise record for playoff-positioning game"
      ],
      debateAngle: "Is this the performance that officially announces OKC as the West's title favorite over San Antonio and Denver?",
      suggestedQuote: "When you're shooting 52% as a team and your superstar looks like he's playing a different sport than everyone else, that's championship DNA right there.",
      relevantPlayers: ["Shai Gilgeous-Alexander", "Chet Holmgren", "Josh Giddey", "Devin Booker"]
    },
    {
      topic: "Paolo Banchero's Career-High 31 Powers Stunning Magic Upset",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "Banchero explodes for career-high 31 points on 60% shooting",
        "Orlando upsets conference-leading Detroit 112-101 on the road",
        "Magic shoot 48.7% while Pistons manage just 43.1% at home",
        "Banchero adds 8 rebounds, 6 assists in complete performance",
        "Franz Wagner contributes 23 points as secondary scorer",
        "Detroit suffers rare home loss, record drops to 60-23"
      ],
      debateAngle: "Has Banchero officially arrived as a superstar, and are the Magic now a legitimate threat to upset higher seeds in the playoffs?",
      suggestedQuote: "This wasn't just a career night for Paolo - this was a coming-out party. When you can walk into the East's best team's building and drop 31 like it's nothing, you're not a young player anymore. You're a problem.",
      relevantPlayers: ["Paolo Banchero", "Franz Wagner", "Markelle Fultz", "Cade Cunningham"]
    },
    {
      topic: "Are Boston and OKC Creating a Championship Gap?",
      segment: "hot-take",
      duration: "7 minutes",
      keyStats: [
        "Celtics demolish 76ers 123-91 behind Tatum's 35 points",
        "Tatum shoots unconscious 7-12 from three in just 31 minutes",
        "Boston and OKC combine for 67-point margin in home wins",
        "Both teams shoot over 50% while holding opponents under 41%",
        "Philadelphia and Phoenix both considered playoff contenders before Saturday",
        "Combined 18 turnovers from Philly in blowout loss"
      ],
      debateAngle: "Hot Take: Saturday night proved there are only 4-5 real championship contenders, and the gap between elite and good is bigger than we thought.",
      suggestedQuote: "When Boston and OKC are both winning by 30+ on the same night, making it look effortless, that tells me we might have a two-tier league this season. The true contenders and everybody else.",
      relevantPlayers: ["Jayson Tatum", "Jaylen Brown", "Shai Gilgeous-Alexander", "Joel Embiid"]
    },
    {
      topic: "Rapid Fire: Wemby's Dominance, Playoff Race Chaos, Sunday Preview",
      segment: "rapid-fire",
      duration: "6 minutes",
      keyStats: [
        "Wembanyama: 24 points, 11 rebounds, 4 blocks in Spurs win",
        "Phoenix now 3-7 in last 10 games, playoff position in danger",
        "Eastern Conference 5-8 seeds separated by just 1 game",
        "Denver's 13-game win streak continues into Sunday vs Minnesota",
        "Three teams tied at 46-37 fighting for Eastern playoff spots",
        "Tonight's Knicks-Hawks game could shake up entire East bracket"
      ],
      debateAngle: "Which collapse would be more shocking - Phoenix missing the playoffs entirely or Philadelphia falling to the play-in tournament?",
      suggestedQuote: "The playoff race went from interesting to absolutely bonkers in one night. Phoenix is in free fall, Philly looks lost, and Orlando just announced they're not going away quietly.",
      relevantPlayers: ["Victor Wembanyama", "Trae Young", "Jalen Brunson", "Nikola Jokić"]
    },
    {
      topic: "Sunday's Must-Watch: Can Anyone Stop Denver's Historic Run?",
      segment: "closer",
      duration: "5 minutes",
      keyStats: [
        "Nuggets riding 13-game winning streak into Minnesota matchup",
        "Denver 8.5-point favorites despite Timberwolves' talent",
        "Jokić averaging near triple-double during the streak",
        "Knicks-Hawks on NBC could determine Eastern playoff seeding",
        "Three games tonight with major postseason implications",
        "Cleveland visits Toronto in crucial conference battle"
      ],
      debateAngle: "Is Denver's 13-game streak the most impressive run of the season, and can Minnesota's defense finally slow down the machine?",
      suggestedQuote: "Thirteen straight wins isn't luck - that's championship muscle memory. But if anyone can play spoiler tonight, it's a desperate Minnesota team with nothing to lose and everything to prove.",
      relevantPlayers: ["Nikola Jokić", "Anthony Edwards", "Rudy Gobert", "Jamal Murray"]
    }
  ],
  coldOpen: "Saturday night wasn't just basketball - it was a statement. While Shai Gilgeous-Alexander and the Thunder were busy dropping a 35-point nuclear bomb on Phoenix, Paolo Banchero walked into Detroit and announced himself as a superstar with a career-high 31 points. Meanwhile in Boston, Jayson Tatum went absolutely unconscious from three, hitting seven triples in a 32-point beatdown of Philadelphia. When the best teams in the league win by a combined 67 points on the same night, that's not coincidence - that's championship DNA separating itself from the pack.",
  socialClip: "Paolo Banchero career-high 31 points upset reaction - Focus on the moment when Banchero hits his 30th point and the Little Caesars Arena crowd realizes they're witnessing something special. Cut to his celebration, teammates' reactions, and overlay the stat: 'Career-High 31 Points | 60% Shooting | Upset of East's #1 Seed'. Perfect for Instagram Reels and TikTok with trending audio.",
  tweetThread: [
    "🚨 SATURDAY NIGHT RECAP THREAD 🚨 What a night of basketball! Three massive storylines that are reshaping the playoff picture heading into the final stretch...",
    "1️⃣ THUNDER STATEMENT: OKC absolutely DEMOLISHED Phoenix 119-84. Shai dropped 29 on 64% shooting. The Suns got held to 36.8% FG and their playoff hopes might be over. This was championship-level dominance.",
    "2️⃣ BANCHERO BREAKOUT: Career-high 31 points for Paolo in Orlando's STUNNING 112-101 upset of Detroit on the road. The Magic just announced they're not going away quietly in the playoff race. Star is born! ⭐",
    "3️⃣ CELTICS NUCLEAR: Tatum went unconscious with 35 points (7 threes!) in Boston's 32-point destruction of Philly. When the best teams win by 30+, that's the championship gap showing itself.",
    "Sunday's must-watch: Can ANYONE stop Denver's 13-game win streak? Minnesota visits Denver tonight in what could be the game of the weekend. Plus Knicks-Hawks will shake up the entire Eastern playoff picture! 🔥"
  ]
};
