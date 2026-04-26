// Podcast Companion — Daily Episode Blueprint
// Last updated: April 26, 2026
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
  date: "April 26, 2026",
  episodeTitle: "Rookie Magic: Banchero Stuns Detroit, SGA Demolishes Phoenix in Playoff Openers",
  rundown: [
    {
      topic: "Paolo Banchero's Playoff Masterpiece Delivers Historic Upset",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "29 points, 8 rebounds, 5 assists on 11-19 shooting",
        "Led 15-4 fourth quarter run to seal the upset",
        "Orlando's first playoff win in over a decade",
        "8th seed Magic beat 60-win top seed Pistons 113-105",
        "Banchero shot 57.9% from field in playoff debut",
        "First rookie to score 25+ in playoff debut upset since 2019"
      ],
      debateAngle: "Is this the arrival of Orlando as a legitimate championship threat or just rookie magic that won't sustain?",
      suggestedQuote: "When a 21-year-old walks into his first playoff game and completely dominates a 60-win championship favorite, you're not just watching an upset - you're witnessing the birth of a superstar.",
      relevantPlayers: ["Paolo Banchero", "Cade Cunningham", "Anthony Black"]
    },
    {
      topic: "Thunder's Championship Statement: SGA's Dominant Playoff Opener",
      segment: "deep-dive",
      duration: "7 minutes",
      keyStats: [
        "Shai Gilgeous-Alexander: 34 points, 7 assists on 61.9% shooting",
        "Thunder led by as many as 20 points in 121-109 victory",
        "OKC forced 18 Phoenix turnovers with suffocating defense",
        "Thunder shot 48.9% from field, 40.0% from three",
        "SGA posted game-high +19 plus-minus in 36 minutes",
        "Oklahoma City's 64-18 regular season best in franchise history"
      ],
      debateAngle: "Are the Thunder the West's most complete championship contender when they're firing on all cylinders?",
      suggestedQuote: "Shai Gilgeous-Alexander just put the entire Western Conference on notice - when he plays at this level, no team can match Oklahoma City's offensive explosiveness.",
      relevantPlayers: ["Shai Gilgeous-Alexander", "Devin Booker", "Jalen Williams"]
    },
    {
      topic: "The Pistons Problem: Are 60-Win Teams Championship Frauds?",
      segment: "hot-take",
      duration: "6 minutes",
      keyStats: [
        "Detroit's 60-22 record led to top seed in East",
        "Pistons were 12.5-point home favorites against Orlando",
        "Cade Cunningham shot just 42.1% (8-19) in the loss",
        "Detroit allowed 113 points to 8th-seeded offense",
        "Pistons went 7-3 in final 10 games entering playoffs",
        "Only 3 teams since 2010 lost Game 1 at home as 1-seed and won series"
      ],
      debateAngle: "Do regular season records mean nothing in today's NBA, or is Detroit still the East favorite despite this upset?",
      suggestedQuote: "Championship favorites can't afford to drop home games to eighth seeds - Detroit just proved they might not be ready for the moment when it matters most.",
      relevantPlayers: ["Cade Cunningham", "Paolo Banchero", "Isaiah Stewart"]
    },
    {
      topic: "Playoff Rapid Fire: Edwards Dominates, Knicks Grind, Game 7 Drama",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "Anthony Edwards: 28 points, outdueled Nikola Jokic",
        "Jalen Brunson: 26 points in road win over Hawks",
        "Trae Young held to 19 points on 35.3% shooting",
        "Minnesota led Denver by as many as 18 points",
        "Spurs-Blazers Game 7 tips at 3:30 PM ET today",
        "Victor Wembanyama averaged 31.2 PPG in first 6 games"
      ],
      debateAngle: "Which Friday performance was more impressive - Edwards outplaying the defending champ or Brunson's road mastery?",
      suggestedQuote: "Anthony Edwards just announced that Minnesota's playoff run last year was no fluke - the Timberwolves might be the West's most dangerous lower seed.",
      relevantPlayers: ["Anthony Edwards", "Jalen Brunson", "Nikola Jokic", "Trae Young"]
    },
    {
      topic: "Saturday's Must-Watch Games and Playoff Storylines",
      segment: "closer",
      duration: "4 minutes",
      keyStats: [
        "Spurs-Blazers Game 7 at 3:30 PM - elimination drama",
        "Celtics-Sixers Game 3 with series tied 1-1",
        "Cavaliers-Raptors begins afternoon slate at 1:00 PM",
        "Lakers begin conference semis against Rockets",
        "Wembanyama needs 7 more points for 200 in 7 games",
        "Four different games across 8.5 hours of basketball"
      ],
      debateAngle: "Is today's Spurs-Blazers Game 7 the most anticipated elimination game of the first round?",
      suggestedQuote: "Game 7 between San Antonio and Portland isn't just about survival - it's about which franchise gets to carry championship momentum into the conference semifinals.",
      relevantPlayers: ["Victor Wembanyama", "Damian Lillard", "Jayson Tatum", "Anthony Davis"]
    }
  ],
  coldOpen: "Good morning, basketball junkies! What happens when a 21-year-old rookie walks into his first playoff game and completely destroys a 60-win championship favorite? You get the kind of magic that only happens in April and May. Paolo Banchero just announced his arrival on basketball's biggest stage with 29 points and the upset of the century, while Shai Gilgeous-Alexander reminded everyone why Oklahoma City might be the most dangerous team in the league. Plus, we've got Game 7 elimination drama on deck. This is Hoops Intel - let's dive into the madness.",
  socialClip: "30-second highlight package of Paolo Banchero's fourth quarter takeover against Detroit, featuring his clutch baskets and defensive plays, overlaid with playoff debut statistics and 'ROOKIE MAGIC' graphics. Perfect for Instagram Reels and TikTok with dramatic music building to his series-clinching free throws.",
  tweetThread: [
    "🚨 PLAYOFF UPSET ALERT: Paolo Banchero just delivered one of the greatest playoff debuts in NBA history - 29 points, 8 rebounds, and a stunning upset of 60-win Detroit. The Magic are LEGIT. 🪄",
    "Shai Gilgeous-Alexander put on an absolute clinic: 34 points on 62% shooting as OKC demolished Phoenix by 12. When SGA plays like this, the Thunder look unbeatable. Championship statement made. ⚡",
    "Anthony Edwards outdueled Nikola Jokic with 28 points, proving Minnesota's playoff run last year was no fluke. The defending champs just got served notice by the Wolves. 🐺",
    "TODAY'S MUST-WATCH: Spurs vs Blazers Game 7 at 3:30 PM. Victor Wembanyama vs Damian Lillard. Winner-take-all elimination drama. This is why we love playoff basketball. 🔥",
    "Full breakdown of last night's playoff chaos + today's Game 7 preview now live on the pod. The first round is already delivering historic moments. Link in bio! 🎧"
  ]
};
