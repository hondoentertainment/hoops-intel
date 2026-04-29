// Podcast Companion — Daily Episode Blueprint
// Last updated: April 29, 2026
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
  date: "April 29, 2026",
  episodeTitle: "Playoff Shockwaves: Embiid's Heroics, Wemby's Statement & Historic Upsets",
  rundown: [
    {
      topic: "Joel Embiid Saves Philadelphia's Season with Elimination Game Masterpiece",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "35 points, 12 rebounds, 3 blocks on 13-21 shooting",
        "113-97 road victory at TD Garden",
        "First Sixers playoff road win in Boston since 2012",
        "+22 plus-minus leading all players",
        "Celtics now lead series 2-1 instead of sweeping"
      ],
      debateAngle: "Can Embiid single-handedly carry the Sixers to a historic series comeback, or was this just delaying the inevitable against a superior Celtics team?",
      suggestedQuote: "This is what championship DNA looks like - when your back is against the wall, when elimination is staring you in the face, you either fold or you become legendary. Embiid chose legendary last night.",
      relevantPlayers: ["Joel Embiid", "Jayson Tatum", "Tobias Harris", "Tyrese Maxey"]
    },
    {
      topic: "Victor Wembanyama Announces His Arrival on the Conference Semifinals Stage",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "31 points, 14 rebounds, 6 blocks in conference semifinals debut",
        "12-18 shooting (66.7%) from the field",
        "114-95 dominant home victory over Portland",
        "Spurs outscored Trail Blazers by 19 points",
        "31.2 PPG, 13.4 RPG, 4.8 BPG through playoffs"
      ],
      debateAngle: "Is Wembanyama's two-way dominance already making the Spurs the Western Conference favorites, or does playoff inexperience still make them vulnerable against veteran teams?",
      suggestedQuote: "We're watching basketball history unfold in real time. When a 20-year-old can dominate both ends of the floor like this in his first conference semifinals appearance, you're not just watching a future superstar - you're watching the present changing before your eyes.",
      relevantPlayers: ["Victor Wembanyama", "Damian Lillard", "Devin Vassell", "Paolo Banchero"]
    },
    {
      topic: "Are We Witnessing the Most Unpredictable Playoffs in NBA History?",
      segment: "hot-take",
      duration: "7 minutes",
      keyStats: [
        "8th-seeded Orlando leads 1st-seeded Detroit 3-0",
        "Philadelphia forces Game 4 after facing elimination",
        "5th-seeded Toronto takes 1-0 lead over 4th-seeded Cleveland",
        "Multiple series going opposite of seeding expectations",
        "Historic upset potential across multiple matchups"
      ],
      debateAngle: "Does this level of playoff chaos prove the regular season means nothing anymore, or are we seeing the natural evolution of NBA parity finally paying off?",
      suggestedQuote: "Forget everything you thought you knew about playoff basketball. When the 8th seed is about to sweep the 1 seed and elimination games are being won on the road, we're not just seeing upsets - we're seeing a complete paradigm shift.",
      relevantPlayers: ["Paolo Banchero", "Cade Cunningham", "Joel Embiid", "Pascal Siakam"]
    },
    {
      topic: "Rapid Fire: Knicks Domination, Rookie Brilliance, and Tonight's Must-Watch Games",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "Knicks beat Hawks 126-97 for commanding 2-0 lead",
        "Jalen Brunson: 28 points, 8 assists on 11-18 shooting",
        "Orlando can complete historic upset tonight at Detroit",
        "LeBron and Lakers begin series against Houston",
        "Wembanyama leads rookie playoff performers"
      ],
      debateAngle: "Which of tonight's games has the highest stakes - Orlando's potential historic upset, Cleveland's must-win home game, or the Lakers-Rockets series opener?",
      suggestedQuote: "Three games tonight, three completely different storylines. You've got history in the making in Detroit, desperation in Cleveland, and championship expectations colliding in Los Angeles.",
      relevantPlayers: ["Jalen Brunson", "Paolo Banchero", "LeBron James", "Donovan Mitchell"]
    },
    {
      topic: "Championship Contenders Are Separating Themselves - What's Next?",
      segment: "closer",
      duration: "6 minutes",
      keyStats: [
        "Spurs and Thunder emerge as Western Conference powerhouses",
        "Eastern Conference wide open with multiple upsets brewing",
        "Embiid's health becomes crucial for Sixers' survival",
        "Madison Square Garden energy propelling Knicks forward",
        "Conference semifinals field taking shape dramatically"
      ],
      debateAngle: "After these playoff shakeups, who are your real championship favorites heading into the deeper rounds?",
      suggestedQuote: "This is what makes playoff basketball beautiful - all the regular season expectations, all the expert predictions, all the seeding advantages mean absolutely nothing when it's win or go home. Pure basketball, pure heart, pure championship dreams on the line.",
      relevantPlayers: ["Victor Wembanyama", "Joel Embiid", "Paolo Banchero", "Jalen Brunson"]
    }
  ],
  coldOpen: "The NBA playoffs just delivered one of the most shocking nights in recent memory. Joel Embiid erupted for 35 points to stun the Celtics in Boston and save Philadelphia's season. Victor Wembanyama dominated his conference semifinals debut with 31 and 6 blocks. And the 8th-seeded Magic are one win away from completing the biggest upset in NBA history. This is Hoops Intel, I'm your host, and we're about to break down a night that just changed everything about these playoffs.",
  socialClip: "Embiid's dominance saving the Sixers season - capture the moment he hit that dagger three in the fourth quarter with the crowd stunned silent, then cut to his celebration. Perfect 30-second clip showing elimination game heroics with dramatic music overlay.",
  tweetThread: [
    "🚨 PLAYOFF CHAOS ALERT 🚨 Last night delivered the most shocking results of the 2026 postseason and we're breaking it ALL down on today's @HoopsIntel pod 🎧",
    "Joel Embiid just delivered one of the greatest elimination game performances in NBA history → 35 PTS, 12 REB, stunning the Celtics IN BOSTON to force Game 4. Championship DNA on full display 💎",
    "Victor Wembanyama's conference semifinals debut: 31 PTS, 14 REB, 6 BLK on 66% shooting. The Spurs look UNSTOPPABLE and Wemby is announcing his arrival on basketball's biggest stage 👽",
    "Meanwhile, Paolo Banchero and the 8th-seeded Magic are ONE WIN away from completing the biggest upset in NBA playoff history. Tonight in Detroit could be legendary 🪄",
    "From elimination game heroics to historic upsets brewing - this episode breaks down why these might be the most unpredictable playoffs we've ever witnessed 🔥 Link in bio!"
  ]
};
