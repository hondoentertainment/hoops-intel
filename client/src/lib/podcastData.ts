// Podcast Companion — Daily Episode Blueprint
// Last updated: May 8, 2026
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
  date: "May 8, 2026",
  episodeTitle: "SGA's Championship Statement + Pistons Flex Their Title Muscle",
  rundown: [
    {
      topic: "SGA Erupts for 38 as Thunder Demolish Lakers",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "Shai Gilgeous-Alexander: 38 PTS, 7 AST, 14-22 FG",
        "Thunder win 125-107, take commanding 2-0 series lead",
        "LeBron held to just 19 points on poor shooting",
        "OKC shoots 52.4% from field, 40% from three",
        "Thunder outscore Lakers by 18 in statement victory",
        "Jalen Williams adds 24 points in perfect complement"
      ],
      debateAngle: "Is this the changing of the guard moment where SGA officially passes LeBron as the West's alpha dog?",
      suggestedQuote: "When SGA gets cooking like that, dropping 38 with surgical precision, you're watching the next face of the league. LeBron at 19 points tells you everything about where this series is headed.",
      relevantPlayers: ["Shai Gilgeous-Alexander", "LeBron James", "Anthony Davis", "Jalen Williams"]
    },
    {
      topic: "Detroit's Championship DNA on Full Display",
      segment: "deep-dive",
      duration: "7 minutes",
      keyStats: [
        "Pistons beat Cavaliers 107-97 for 2-0 series lead",
        "Cade Cunningham: 26 PTS, 8 AST, 10-18 FG",
        "Isaiah Stewart dominates paint: 18 PTS, 11 REB",
        "Detroit holds Donovan Mitchell to 21 points",
        "Pistons shoot 48.9% from field at home",
        "Cleveland shooting just 42.1% through two games"
      ],
      debateAngle: "Are the Pistons' balanced attack and defensive intensity making them the most dangerous team nobody's talking about?",
      suggestedQuote: "This isn't just about Cade's 26 and 8—it's about Stewart bullying people in the paint, it's about their defense suffocating Mitchell. Detroit is playing championship basketball right now.",
      relevantPlayers: ["Cade Cunningham", "Isaiah Stewart", "Donovan Mitchell", "Jarrett Allen"]
    },
    {
      topic: "Are the Lakers Already Cooked?",
      segment: "hot-take",
      duration: "6 minutes",
      keyStats: [
        "Lakers trail 0-2 after 18-point road blowout",
        "LeBron: 19 PTS on 7-16 shooting, -22 plus-minus",
        "Anthony Davis: 22 PTS but couldn't stop the bleeding",
        "LA shooting just 44.2% from field in series",
        "Thunder defense holding Lakers to 104.5 PPG",
        "Historical 0-2 deficit recovery rate: 6.8%"
      ],
      debateAngle: "With LeBron struggling and the Thunder looking unstoppable, should we already start planning the Lakers' offseason?",
      suggestedQuote: "I'm not ready to write LeBron's obituary, but when you're getting worked by 18 at home and the King drops 19 points? That championship window might be slamming shut in real time.",
      relevantPlayers: ["LeBron James", "Anthony Davis", "Shai Gilgeous-Alexander", "Lu Dort"]
    },
    {
      topic: "Tonight's Do-or-Die Games + Playoff Roundup",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "76ers vs Knicks: Philly faces elimination down 0-2",
        "Spurs at Timberwolves: Pivotal Game 3, series tied 1-1",
        "Joel Embiid questionable with knee soreness",
        "Jaden McDaniels day-to-day for Minnesota",
        "Knicks are 4.5-point road favorites",
        "Both games on Prime Video starting at 7 ET"
      ],
      debateAngle: "Which desperate team has a better chance of avoiding the 0-3 death sentence—Philly at home or Cleveland in their next game?",
      suggestedQuote: "Joel Embiid with a bad knee and his season on the line? That's either going to be legendary or tragic. No in-between with playoff Embiid.",
      relevantPlayers: ["Joel Embiid", "Jalen Brunson", "Victor Wembanyama", "Anthony Edwards"]
    },
    {
      topic: "Championship Favorites Emerge + What's Next",
      segment: "closer",
      duration: "4 minutes",
      keyStats: [
        "Thunder and Pistons both up 2-0 in commanding fashion",
        "OKC allowing just 104.5 PPG in playoffs",
        "Detroit's balanced scoring: 4 players averaging 15+ PPG",
        "Both teams shooting over 48% from field in series",
        "Thunder have best championship odds at +220",
        "Pistons jumped to +450 after tonight's victory"
      ],
      debateAngle: "Are we watching the Thunder-Pistons Finals matchup take shape before our eyes?",
      suggestedQuote: "When you see championship execution like this—SGA's brilliance, Detroit's depth—you start circling these teams for June. The cream is rising to the top.",
      relevantPlayers: ["Shai Gilgeous-Alexander", "Cade Cunningham", "Jalen Williams", "Isaiah Stewart"]
    }
  ],
  coldOpen: "Shai Gilgeous-Alexander just dropped 38 points and ended the Lakers' season. Cade Cunningham orchestrated a masterpiece that has the Cavaliers on life support. Two championship contenders just got punched in the mouth, and we're about to break down how the Thunder and Pistons are separating themselves from the pack. This is Hoops Intel, and tonight we witnessed some serious changing-of-the-guard moments.",
  socialClip: "SGA's 38-point explosion + LeBron's 19-point struggle in the Thunder's 18-point blowout. Capture the exact moment when Shai hits his 6th three-pointer late in the third quarter with the crowd going absolutely insane, then cut to LeBron's frustrated reaction on the bench. Perfect 30-second clip showing the torch being passed in real time.",
  tweetThread: [
    "🔥 SGA just delivered a 38-point masterclass that might have ended the Lakers' season. LeBron held to 19 points. The changing of the guard is happening before our eyes. #ThunderUp",
    "🏀 Meanwhile in Detroit: Cade drops 26 & 8, Isaiah Stewart bullies the paint for 18 & 11, and the Pistons are up 2-0 looking like legitimate title contenders. Cleveland in serious trouble.",
    "📊 The numbers don't lie: Thunder shooting 52%, Lakers at 44%. Pistons holding Mitchell to 21 PPG. When elite teams turn up the defense in May, this is what domination looks like.",
    "🚨 Tonight's elimination games: 76ers MUST win at home vs Knicks, while Spurs-Wolves is pivotal Game 3. Embiid's knee vs his season. Drama incoming on Prime Video.",
    "💭 Bottom line: OKC and Detroit are playing championship basketball right now. Everyone else is playing catch-up. The cream is rising to the top. 🏆 #NBAPlayoffs"
  ]
};
