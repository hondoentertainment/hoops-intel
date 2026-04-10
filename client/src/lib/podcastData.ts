// Podcast Companion — Daily Episode Blueprint
// Last updated: April 9, 2026
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
  date: "April 9, 2026",
  episodeTitle: "Thunder's Championship Statement + Pistons Demolish Bucks + West Top Seed Race Heats Up",
  rundown: [
    {
      topic: "Thunder Complete Dominant LA Sweep - Championship Contenders or Championship Favorites?",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "SGA drops 32 points on 12-of-20 shooting",
        "Thunder win by 18 points at Intuit Dome", 
        "OKC outscored both LA teams by 54 points combined",
        "Thunder now 64-16, just 1 game behind SA for top seed",
        "8-game winning streak for Oklahoma City",
        "Thunder shot 54% from field as team"
      ],
      debateAngle: "Are the Thunder now the West favorites over San Antonio? This LA sweep was surgical - they dismantled both teams with different styles of dominance. SGA is playing at an MVP level and their depth is unmatched.",
      suggestedQuote: "When you can go into LA and beat both teams by a combined 54 points, you're not just contending - you're making a championship statement. The Thunder look like the most complete team in basketball right now.",
      relevantPlayers: ["Shai Gilgeous-Alexander", "Chet Holmgren", "Josh Giddey", "Paul George", "Norman Powell"]
    },
    {
      topic: "East vs West Gap: Pistons Obliterate Bucks 137-111 in Conference Superiority Showcase",
      segment: "deep-dive", 
      duration: "10 minutes",
      keyStats: [
        "Detroit wins by 26 points in wire-to-wire beatdown",
        "Pistons shot 58% from field vs Bucks defense",
        "Cade Cunningham: 28 points, 11 assists on 11-17 shooting",
        "Detroit led by 25 at halftime",
        "East top seed (58-22) vs West would-be 10-seed (31-49)",
        "Giannis had 26 points but team was outclassed"
      ],
      debateAngle: "This game perfectly illustrated the conference disparity. The East's 1-seed destroyed what would barely be a play-in team in the West. Is the East championship path dramatically easier than the West bloodbath?",
      suggestedQuote: "This wasn't just a win - it was a clinic. Detroit showed why they're the East favorites while Milwaukee showed why conference records can be deceiving. The gap between East and West is real.",
      relevantPlayers: ["Cade Cunningham", "Isaiah Stewart", "Jalen Duren", "Giannis Antetokounmpo", "Bobby Portis"]
    },
    {
      topic: "Hot Take: San Antonio's Home Perfection Makes Them Unbeatable in the Playoffs",
      segment: "hot-take",
      duration: "6 minutes", 
      keyStats: [
        "Spurs now 31-0 at Frost Bank Center this season",
        "Wembanyama: 26 points, 12 rebounds, 4 blocks vs Portland",
        "SA maintains 1-game lead over OKC for top seed",
        "Only team with perfect home record in NBA history through 31 games",
        "Wembanyama averaging 24.1 PPG, 11.8 RPG, 3.2 BPG",
        "Spurs 61-19 overall record"
      ],
      debateAngle: "Here's the hot take: San Antonio's perfect home record makes them championship locks. In a seven-game series, if you literally cannot lose at home, you only need to steal ONE road game. That's an impossible advantage.",
      suggestedQuote: "Thirty-one and zero at home isn't just a stat - it's a psychological weapon. When you know you're unbeatable on your home court, that changes everything about how you approach a playoff series.",
      relevantPlayers: ["Victor Wembanyama", "Devin Vassell", "Jeremy Sochan", "Damian Lillard", "Anfernee Simons"]
    },
    {
      topic: "Rapid Fire: Mitchell's Clutch Gene + Orlando's Upset + Jokic's Triple-Double Mastery",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "Mitchell hits 5 threes including 2 clutch fourth-quarter daggers",
        "Paolo Banchero explodes for 31 points in upset over Minnesota", 
        "Jokic records 15th triple-double: 27-13-12 vs Memphis",
        "Cleveland strengthens 4-seed grip with Atlanta victory",
        "Orlando moves closer to home-court advantage in play-in",
        "Denver officially locks up 4-seed with comfortable win"
      ],
      debateAngle: "Which performance was more impressive - Mitchell's clutch shooting in a tight game with seeding implications, or Banchero's explosion leading an upset victory? Both players delivered when their teams needed it most.",
      suggestedQuote: "The beauty of this time of year is every game matters. Mitchell delivered clutch moments, Banchero shocked Minnesota, and Jokic just casually dropped another triple-double. Peak basketball season right here.",
      relevantPlayers: ["Donovan Mitchell", "Paolo Banchero", "Nikola Jokic", "Franz Wagner", "Anthony Edwards"]
    },
    {
      topic: "Tonight's Must-Watch: Celtics-Knicks at MSG + Lakers-Warriors Rivalry Renewed",
      segment: "closer",
      duration: "4 minutes",
      keyStats: [
        "Boston (54-25) visits New York (51-28) on Prime Video",
        "Only 3 games separate 2-seed Celtics from 3-seed Knicks", 
        "Lakers (50-29) travel to Warriors (37-42) in late game",
        "Both games have major playoff positioning implications",
        "Celtics favored by 1.5 at Madison Square Garden",
        "Lakers favored by 3.5 at Chase Center despite road game"
      ],
      debateAngle: "Which game has higher stakes - Celtics-Knicks for potential home-court advantage, or Lakers-Warriors where Golden State is fighting for their playoff lives? Both have different types of desperation.",
      suggestedQuote: "Tonight's slate is appointment television. Celtics-Knicks at MSG for seeding, Lakers-Warriors for survival. This is why we love late-season NBA basketball - every possession matters.",
      relevantPlayers: ["Jayson Tatum", "Jalen Brunson", "LeBron James", "Stephen Curry"]
    }
  ],
  coldOpen: "What's good, Hoops Intel family! The Thunder just sent shockwaves through the league with their LA demolition tour - sixty points from SGA across two games, outscoring both Lakers AND Clippers by a combined 54 points. Meanwhile, Detroit reminded everyone why the East-West gap is real with a 26-point beatdown of Milwaukee. San Antonio stayed perfect at home - that's 31-0 at Frost Bank Center - while tonight brings Celtics-Knicks at MSG and Lakers-Warriors for survival. Championship races are heating up, and we're breaking down every angle. Let's dive in!",
  socialClip: "Thunder's Championship Statement: SGA drops 32 as OKC completes dominant LA sweep, outscoring Lakers and Clippers by 54 combined points. Are they now the West favorites over San Antonio? Full breakdown of their surgical precision and what it means for the title race.",
  tweetThread: [
    "🧵 HOOPS INTEL THREAD: Thunder complete statement LA sweep, Pistons demolish Bucks, and tonight brings must-watch games at MSG and Golden State. Here's what you need to know from an absolutely loaded Wednesday 👇",
    "⚡ THUNDER DOMINANCE: SGA's 32 points cap off a PERFECT LA sweep. Combined 54-point margin over Lakers/Clippers is surgical. OKC now just 1 game behind SA for West top seed. This team looks ready for a championship run 🏆",
    "🔥 EAST SUPERIORITY: Detroit's 137-111 demolition of Milwaukee perfectly illustrated the conference gap. Cade's 28/11 led a wire-to-wire beatdown. East 1-seed vs what would barely be West play-in team tells the whole story",
    "🏠 SPURS PERFECTION: 31-0 at home after beating Portland. Wemby's 26/12/4 blocks was just another night at the office. In playoff basketball, being literally unbeatable at home is the ultimate trump card",
    "🎯 TONIGHT'S STAKES: Celtics @ Knicks at MSG for potential home-court advantage. Lakers @ Warriors where GS fights for their season. Both on Prime Video. This is peak NBA basketball - every possession matters! 🔥"
  ]
};
