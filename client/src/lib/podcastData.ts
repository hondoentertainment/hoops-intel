// Podcast Companion — Daily Episode Blueprint
// Last updated: April 14, 2026
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
  date: "April 14, 2026",
  episodeTitle: "The Real Season Begins: Play-In Chaos and Curry's Stunning Return",
  
  rundown: [
    {
      topic: "Play-In Tournament Tips Off: Heat-Hornets and Suns-Blazers Battle for Survival",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "Charlotte leads play-in teams with 44-38 record",
        "Miami riding 143-point explosion from Sunday",
        "Phoenix demolished OKC by 32 points to close season",
        "Portland won 4 of final 6 to secure play-in berth",
        "Winners advance, losers face Golden State's rejuvenated Stephen Curry",
        "Kon Knueppel set rookie record with 268 made threes"
      ],
      debateAngle: "Which play-in game has higher upset potential — Miami's veteran experience in Charlotte or Portland's explosive scoring against Phoenix?",
      suggestedQuote: "Tonight's not about the 82 games we just finished — it's about the next 48 minutes that determine who's playing real basketball and who's going home. The play-in tournament was designed for this exact chaos.",
      relevantPlayers: ["Bam Adebayo", "Kon Knueppel", "Anfernee Simons", "Jamaree Bouyea"]
    },

    {
      topic: "Bam Adebayo's Dominant Stretch: Can Miami's All-Star Lead the Heat Past Charlotte?",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "Adebayo shooting 67% from field over last 5 games",
        "25 points, 10 rebounds, 3 steals in Sunday's win",
        "Miami outscored Atlanta 143-119 in season finale",
        "Heat are 6-4 in last 10 but trending up at perfect time",
        "Charlotte allows 115.8 PPG to opposing centers this season",
        "Adebayo's playoff experience: 4 previous postseasons"
      ],
      debateAngle: "Is Bam Adebayo playing well enough right now to single-handedly carry Miami through the play-in tournament, or does this Heat team still have too many offensive inconsistencies?",
      suggestedQuote: "When Bam Adebayo is shooting 67% and grabbing double-digit rebounds while anchoring the defense, the Miami Heat become a completely different animal. This is playoff Bam arriving right on schedule.",
      relevantPlayers: ["Bam Adebayo", "Jimmy Herro", "Terry Rozier", "Miles Bridges"]
    },

    {
      topic: "Stephen Curry's Miraculous Return: 24 Points After 73 Days Changes Everything",
      segment: "hot-take",
      duration: "6 minutes",
      keyStats: [
        "Curry scored 24 points, 4 threes in just 29 minutes",
        "73-day absence due to bilateral knee issues",
        "Warriors went from play-in afterthought to most dangerous 10-seed",
        "Golden State faces tonight's loser on Wednesday",
        "Curry is 38 years old — oldest to score 20+ after 70+ day absence",
        "Warriors' championship experience with healthy Curry"
      ],
      debateAngle: "HOT TAKE: A healthy Stephen Curry makes the Warriors more dangerous than any team that finishes 37-45 has a right to be — are they actually the scariest Wednesday matchup now?",
      suggestedQuote: "Seventy-three days off, 38 years old, comes back and drops 24 points like he never left. Stephen Curry just turned the play-in tournament completely upside down with one performance.",
      relevantPlayers: ["Stephen Curry", "Draymond Green", "Klay Thompson"]
    },

    {
      topic: "Rapid Fire: Kon's Record, Bouyea's Breakout, and Tournament Storylines",
      segment: "rapid-fire",
      duration: "7 minutes",
      keyStats: [
        "Kon Knueppel: 268 threes (previous rookie record: 206)",
        "Jamaree Bouyea: 27 points, 9 assists, +37 vs OKC",
        "Anfernee Simons: 24 PPG since March 1st",
        "All four play-in teams report clean injury reports",
        "Phoenix -4.5 favorites despite Portland's hot streak",
        "Charlotte -1.5 at home despite Miami's recent dominance"
      ],
      debateAngle: "Which rookie performance tonight matters more for their legacy — Kon Knueppel trying to lead Charlotte past Miami or VJ Edgecombe waiting to face the winner on Wednesday?",
      suggestedQuote: "Kon Knueppel didn't just break the rookie three-point record — he obliterated it. Tonight we find out if that shooting translates to winning basketball when everything's on the line.",
      relevantPlayers: ["Kon Knueppel", "Jamaree Bouyea", "Anfernee Simons", "VJ Edgecombe"]
    },

    {
      topic: "Looking Ahead: Wednesday's Elimination Games and Playoff Picture Clarity",
      segment: "closer",
      duration: "5 minutes",
      keyStats: [
        "Winners advance to Friday's playoff openers",
        "Losers face elimination Wednesday night",
        "Philadelphia and Lakers await advancement game winners",
        "Clippers-Warriors winner faces tonight's Western loser",
        "Play-in tournament expanded playoff field by 33%",
        "First round begins Friday with 8 games across 4 days"
      ],
      debateAngle: "Does tonight's result matter more for who advances or for setting up Wednesday's elimination games with maximum drama?",
      suggestedQuote: "Two games tonight, two teams advance, two teams face elimination Wednesday. This is exactly the chaos Adam Silver envisioned when he created the play-in tournament — and we're absolutely here for it.",
      relevantPlayers: ["Joel Embiid", "LeBron James", "Paul George", "Victor Wembanyama"]
    }
  ],

  coldOpen: "Eighty-two games are in the books, and they don't mean a damn thing anymore. Tonight, the play-in tournament tips off with two games that will determine playoff dreams and heartbreak. Bam Adebayo is shooting 67% and looking unstoppable. Kon Knueppel just broke the rookie three-point record. And oh yeah — Stephen Curry just returned after 73 days to remind everyone why he's the most dangerous player alive. The real season starts now. This is Hoops Intel.",

  socialClip: "Stephen Curry return segment (1:30-3:00) — Focus on the 73-day absence stat and the quote about making Warriors the 'scariest Wednesday matchup.' Perfect for viral social with Curry highlights and the age/comeback angle. Include graphics showing 24 points, 4 threes, 29 minutes.",

  tweetThread: [
    "🏀 THE REAL SEASON BEGINS: Play-in tournament tips off TONIGHT with Heat-Hornets (7:30 ET) and Suns-Blazers (10:00 ET). Latest Hoops Intel pod breaks down why these games will be pure chaos 🧵",
    
    "📈 BAM'S DOMINANCE: Adebayo shooting 67% over last 5 games with elite defense. Heat riding Sunday's 143-point explosion into Charlotte. Can veteran playoff experience trump the Hornets' home court and Kon's record-breaking shooting?",
    
    "🔥 CURRY CHANGES EVERYTHING: 24 points, 4 threes after 73 days off. At 38 years old. Warriors went from play-in afterthought to the most dangerous elimination game opponent in tournament history. Wednesday just got terrifying.",
    
    "🎯 ROOKIE RECORDS: Kon Knueppel's 268 made threes obliterated the previous mark by 62. Tonight he gets to prove that shooting translates to winning basketball when everything's on the line. Pressure's on the 19-year-old.",
    
    "⚡ FULL POD BREAKDOWN: All the stats, storylines, and predictions you need for tonight's chaos. Link in bio — because these games are too good to watch unprepared. The play-in tournament delivers again. #HoopsIntel"
  ]
};
