// Podcast Companion — Daily Episode Blueprint
// Last updated: April 25, 2026
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
  date: "April 25, 2026",
  episodeTitle: "Wemby's 38-Point Masterpiece Forces Game 7 • AD Powers Lakers Past Rockets • Tatum Redeems Himself in Philly",
  rundown: [
    {
      topic: "Victor Wembanyama's 38-Point Game 7-Forcing Masterpiece",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "38 points on 15-24 shooting (62.5% FG)",
        "15 rebounds in dominant glass control",
        "3 blocks while altering countless more shots",
        "14 fourth-quarter points to seal the victory",
        "First rookie with 35+ points in elimination game since LeBron 2006"
      ],
      debateAngle: "Is this the single most impressive rookie playoff performance we've ever witnessed? Wemby just walked into Portland facing elimination and completely took over both ends of the floor like a seasoned veteran.",
      suggestedQuote: "This wasn't just a rookie having a good game - this was generational talent announcing itself on the biggest stage. When you can dominate like that in a hostile environment with your season on the line, you're not a prospect anymore, you're a superstar.",
      relevantPlayers: ["Victor Wembanyama", "Damian Lillard", "LeBron James", "Tim Duncan"]
    },
    {
      topic: "The Lakers' Championship DNA Shines in Overtime Thriller",
      segment: "deep-dive",
      duration: "7 minutes",
      keyStats: [
        "Overcame 18-point third-quarter deficit",
        "AD's 35 points and 12 rebounds with 8 overtime points",
        "LeBron's game-winning assist with 12 seconds left",
        "4-6 from three in overtime (67% clutch shooting)",
        "Lakers advance to face whoever emerges from Spurs-Blazers Game 7"
      ],
      debateAngle: "Are we sleeping on the Lakers as title contenders? This team just showed they can overcome massive deficits and execute in the clutch moments that separate champions from pretenders.",
      suggestedQuote: "Anthony Davis in overtime was absolutely unstoppable. Those post moves, that rim protection - this is exactly what championship-level two-way dominance looks like when everything is on the line.",
      relevantPlayers: ["Anthony Davis", "LeBron James", "Alperen Şengün", "Fred VanVleet"]
    },
    {
      topic: "Does Tatum's Bounce-Back Performance Change Everything for Boston?",
      segment: "hot-take",
      duration: "6 minutes",
      keyStats: [
        "31 points on 12-21 shooting after Game 1 struggles",
        "Series now tied 1-1 with home court advantage stolen",
        "Jaylen Brown added 24 points on 9-16 shooting",
        "Celtics led by 15 in the fourth quarter",
        "Joel Embiid held to 23 points on 8-18 shooting"
      ],
      debateAngle: "Hot take: Tatum's Game 2 performance was more impressive than Wemby's 38-piece because it showed championship-level mental toughness. Stars separate themselves by how they respond to adversity.",
      suggestedQuote: "This is what elite players do - they get punched in the mouth in Game 1, then come back and dominate on the road when everyone's questioning them. That's championship DNA right there.",
      relevantPlayers: ["Jayson Tatum", "Jaylen Brown", "Joel Embiid", "Tyrese Maxey"]
    },
    {
      topic: "Friday's Playoff Slate: Four New Series Tip Off",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "Top-seeded Pistons (-7.5) visit scrappy Magic at 1 PM",
        "Thunder's 64-win juggernaut (-11.5) faces Suns at 3:30 PM",
        "Knicks-Hawks battle features Brunson vs Trae Young at 6 PM",
        "Defending champ Nuggets (-6) visit dangerous Timberwolves at 8:30 PM",
        "Four series begin today with championship implications"
      ],
      debateAngle: "Which of these four new series has the highest upset potential? The Magic hosting Detroit feels like the most dangerous 8-seed situation we've seen in years.",
      suggestedQuote: "Paolo Banchero making his playoff debut at home against the top seed? That has all the ingredients for magic to happen in Orlando - pun absolutely intended.",
      relevantPlayers: ["Cade Cunningham", "Paolo Banchero", "Shai Gilgeous-Alexander", "Devin Booker", "Jalen Brunson", "Trae Young", "Nikola Jokić", "Karl-Anthony Towns"]
    },
    {
      topic: "Game 7 Madness and What's Next in the Playoffs",
      segment: "closer",
      duration: "4 minutes",
      keyStats: [
        "Spurs-Blazers Game 7 will determine who faces the Lakers",
        "Winner gets a Lakers team riding high after overtime heroics",
        "Eastern Conference features three series still to begin",
        "Road teams went 3-0 in Thursday's elimination games",
        "Playoff intensity reaching fever pitch across both conferences"
      ],
      debateAngle: "Is this the most wide-open playoff field we've seen in years? With upsets brewing and stars stepping up, anyone can make a championship run right now.",
      suggestedQuote: "This is why we love playoff basketball - one night you're watching a rookie announce himself as a superstar, the next you're seeing veterans show why experience matters most. Buckle up, folks - this ride is just getting started.",
      relevantPlayers: ["Victor Wembanyama", "Anthony Davis", "Jayson Tatum", "Damian Lillard"]
    }
  ],
  coldOpen: "Victor Wembanyama just dropped 38 points to force Game 7, Anthony Davis put the Lakers on his back in overtime, and Jayson Tatum reminded everyone why Boston's dangerous when their backs are against the wall. Three superstar performances, three series-shifting moments, and four brand new playoff series tipping off today. This is Hoops Intel, and if you thought the playoffs were intense before, just wait until you hear what happened on Thursday night.",
  socialClip: "Victor Wembanyama absolutely DOMINATED in Portland with 38 points and 15 rebounds to force Game 7! The rookie phenom shot 15-24 from the field and scored 14 fourth-quarter points to keep San Antonio's championship dreams alive. This wasn't just a good game - this was a generational talent announcing himself on the biggest stage in basketball.",
  tweetThread: [
    "🔥 PLAYOFF MADNESS THREAD 🔥\n\nThursday night delivered LEGENDARY performances:\n\n• Wemby: 38 PTS forces Game 7\n• AD: 35 PTS in OT thriller \n• Tatum: 31 PTS redemption game\n\nRoad teams went 3-0 in elimination scenarios. Playoff basketball hits different 🏀",
    "Victor Wembanyama just had the most dominant rookie playoff performance since LeBron in 2006\n\n38 PTS | 15 REB | 3 BLK\n15-24 FG | 14 4th quarter points\n\nWalked into Portland facing elimination and took over like a seasoned veteran. Generational talent on full display 🌟",
    "Anthony Davis in OVERTIME was absolutely UNSTOPPABLE\n\n35 PTS | 12 REB | 4 BLK\n8 points in OT to seal series\n\nOvercame 18-point deficit to advance Lakers to conference semis. This is championship-level two-way dominance when everything's on the line 💪",
    "Jayson Tatum's bounce-back performance in Philly was ELITE\n\n31 PTS | 8 REB | 5 AST\n12-21 FG on the road\n\nSeries now tied 1-1 after stealing home court advantage. This is how superstars respond to Game 1 struggles - pure championship DNA 🔥",
    "TODAY'S PLAYOFF SLATE IS LOADED:\n\n🏀 1 PM: Pistons @ Magic (Peacock)\n🏀 3:30 PM: Thunder @ Suns (NBC) \n🏀 6 PM: Knicks @ Hawks (NBC)\n🏀 8:30 PM: Nuggets @ Timberwolves (ABC)\n\nFour new series begin + Spurs-Blazers Game 7 looming. Playoff intensity at MAXIMUM 📺"
  ]
};
