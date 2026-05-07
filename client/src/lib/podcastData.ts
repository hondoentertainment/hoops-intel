// Podcast Companion — Daily Episode Blueprint
// Last updated: May 7, 2026
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
  date: "May 7, 2026",
  episodeTitle: "Wemby's Historic Night & Brunson's MSG Magic: Series Momentum Shifts",
  
  rundown: [
    {
      topic: "Wembanyama's 38-Point Masterpiece Evens the Series",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "38 points, 15 rebounds, 4 blocks on 15-22 shooting",
        "Largest playoff margin in Spurs franchise history (38 points)",
        "Chris Paul's 14 assists orchestrated the blowout",
        "Minnesota shot just 37.2% from the field",
        "Anthony Edwards held to 19 points on poor efficiency"
      ],
      debateAngle: "Is this the moment we realized Wembanyama is ready to carry a championship team, or was this just Minnesota cracking under playoff pressure?",
      suggestedQuote: "When you watch a 20-year-old completely dismantle a conference semifinals opponent like that, you're not just seeing a bounce-back game — you're witnessing the birth of a playoff legend.",
      relevantPlayers: ["Victor Wembanyama", "Chris Paul", "Anthony Edwards", "Jaden McDaniels"]
    },
    
    {
      topic: "The Anatomy of Championship Defense: How San Antonio Flipped the Script",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "Spurs held Minnesota to 95 points after allowing 112 in Game 1",
        "Forced 18 turnovers compared to just 9 in Game 1",
        "Outrebounded the Timberwolves 52-38",
        "Limited Minnesota's fast break points to just 8",
        "Held Edwards 8 points below his playoff average"
      ],
      debateAngle: "What adjustments did Gregg Popovich make defensively that completely neutralized Minnesota's Game 1 game plan?",
      suggestedQuote: "This wasn't just about Wemby's offense — San Antonio's defensive adjustments were surgical. They turned Minnesota's strength into their biggest weakness overnight.",
      relevantPlayers: ["Victor Wembanyama", "Devin Vassell", "Jeremy Sochan", "Chris Paul"]
    },
    
    {
      topic: "Are the 76ers Already Cooked? The 0-2 Hole Reality Check",
      segment: "hot-take",
      duration: "7 minutes",
      keyStats: [
        "Teams down 0-2 in playoffs win series just 6.8% of the time",
        "Joel Embiid's 29 points despite knee issues",
        "Brunson's 31 points marked his 4th 30+ game this playoffs",
        "Knicks shot 47.8% from three in the fourth quarter",
        "Philadelphia's bench was outscored 28-15"
      ],
      debateAngle: "With Embiid clearly compromised and their championship window closing, should Philadelphia consider this season a wrap or can they pull off a historic comeback?",
      suggestedQuote: "I hate to say it, but this feels like the end of an era in Philadelphia. When your MVP is playing on one leg and still giving you 29 and 12, but it's not enough, that tells you everything.",
      relevantPlayers: ["Joel Embiid", "Jalen Brunson", "Tyrese Maxey", "Josh Hart"]
    },
    
    {
      topic: "Playoff Rapid Fire: Injuries, Tonight's Games, and Series Swings",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "Anthony Davis questionable with back stiffness for tonight",
        "Detroit favored by 6.5 points in potential 2-0 series clincher",
        "OKC laying 12.5 points against the Lakers at home",
        "OG Anunoby played through hamstring issues in Game 2",
        "Thunder could take commanding control of the West bracket"
      ],
      debateAngle: "Which of tonight's games has bigger championship implications — Detroit potentially going up 2-0 on Cleveland or OKC dominating the Lakers again?",
      suggestedQuote: "Tonight could be the night we see two more series slip away. Cleveland and the Lakers both face potential elimination scenarios, and that desperation creates must-see TV.",
      relevantPlayers: ["Anthony Davis", "Cade Cunningham", "Donovan Mitchell", "Shai Gilgeous-Alexander"]
    },
    
    {
      topic: "Looking Ahead: Championship Contenders and Pretenders Taking Shape",
      segment: "closer",
      duration: "6 minutes",
      keyStats: [
        "San Antonio and New York both showing championship-level execution",
        "Four teams could be facing elimination by Thursday",
        "Victor Wembanyama averaging 28.5 PPG in the playoffs",
        "Jalen Brunson has transformed into a legitimate playoff star",
        "Home court advantage proving decisive across the board"
      ],
      debateAngle: "After tonight's performances, who are your top three championship favorites and why?",
      suggestedQuote: "We're starting to separate the championship wheat from the chaff. Some teams are rising to the moment, others are wilting under the pressure — and that's what makes the playoffs beautiful.",
      relevantPlayers: ["Victor Wembanyama", "Jalen Brunson", "Shai Gilgeous-Alexander", "Cade Cunningham"]
    }
  ],
  
  coldOpen: "What's good, basketball junkies! Last night was UNREAL. Victor Wembanyama just dropped 38 and 15 in the most dominant playoff performance we've seen all postseason, absolutely demolishing Minnesota in a 38-point blowout that tied their series. Meanwhile, Jalen Brunson was clutch incarnate at MSG, dropping 31 to put the Knicks up 2-0 on Philly. We've got championship momentum shifts, historic performances, and tonight's games could decide the entire playoff landscape. I'm your host, and this is Hoops Intel — let's break it all down!",
  
  socialClip: "Animated highlight reel of Wembanyama's dominant sequences from the 38-point game, overlaid with his final stats (38 PTS, 15 REB, 4 BLK) and the text 'HISTORIC PLAYOFF PERFORMANCE' with the caption: 'When Wemby responds, he responds LOUD 🔥 This is what championship-level dominance looks like #NBAPlayoffs'",
  
  tweetThread: [
    "🎧 NEW EPISODE: Wemby's Historic Night & Brunson's MSG Magic — We're breaking down the most dominant playoff performances of the postseason so far",
    "Victor Wembanyama: 38 PTS, 15 REB, 4 BLK in a 38-POINT blowout. The largest playoff margin in Spurs franchise history. This wasn't just a bounce-back — this was a statement.",
    "Meanwhile Jalen Brunson continues his playoff transformation: 31 PTS, 8 AST at Madison Square Garden to put the Knicks up 2-0. Championship-level execution when it mattered most.",
    "Tonight's games are MASSIVE: Detroit can go up 2-0 on Cleveland, OKC can dominate the Lakers again. We could see two more series slip away by 11 PM ET.",
    "Full breakdown of the championship contenders taking shape, plus why the 76ers might already be cooked despite Embiid's heroic effort. Link in bio! 🏀"
  ]
};
