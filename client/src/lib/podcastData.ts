// Podcast Companion — Daily Episode Blueprint
// Last updated: April 16, 2026
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
  date: "April 16, 2026",
  episodeTitle: "Curry's Time Machine: 35 Points at 38 Saves Warriors as Maxey Claims Philadelphia's Playoff Spot",
  rundown: [
    {
      topic: "Stephen Curry's Vintage Masterpiece Defies Father Time",
      segment: "opener",
      duration: "8 minutes",
      keyStats: [
        "35 points on 12-of-23 shooting at age 38",
        "7-of-12 from three in elimination game",
        "Third game back from 73-day absence",
        "Warriors advance to Friday elimination at Phoenix",
        "Clippers eliminated at 42-40 record"
      ],
      debateAngle: "Is this the most impressive individual performance of the 2026 season given Curry's age and injury layoff?",
      suggestedQuote: "This wasn't just basketball — it was the controlled fury of a legend refusing to let time write his final chapter. Curry just reminded everyone why he's the most dangerous player alive when his back is against the wall.",
      relevantPlayers: ["Stephen Curry", "Kawhi Leonard", "Kristaps Porzingis", "Gui Santos", "Bennedict Mathurin"]
    },
    {
      topic: "Tyrese Maxey's Coming-of-Age Performance Clinches East 7-Seed",
      segment: "deep-dive",
      duration: "10 minutes",
      keyStats: [
        "31 points, 6 assists in 42 minutes of leadership",
        "11-of-25 shooting with surgical mid-range precision",
        "VJ Edgecombe's 19-11 double-double as rookie X-factor",
        "Paolo Banchero's nightmare: 7-22 FG, 0-5 3PT, 6 turnovers",
        "Philadelphia vs Boston Round 1 matchup locked"
      ],
      debateAngle: "Has Maxey proven he can be the franchise cornerstone for a championship contender, or does he still need a co-star?",
      suggestedQuote: "Maxey didn't just score 31 points — he commanded every possession like a franchise player should. Meanwhile, Banchero wilted under pressure when Orlando needed him most. That's the difference between rising stars and proven stars.",
      relevantPlayers: ["Tyrese Maxey", "Paolo Banchero", "VJ Edgecombe", "Desmond Bane", "Kelly Oubre Jr."]
    },
    {
      topic: "Friday's Double Elimination: Can Lightning Strike Twice?",
      segment: "hot-take",
      duration: "6 minutes",
      keyStats: [
        "Charlotte at Orlando 7:00 ET for East 8-seed",
        "Golden State at Phoenix 9:30 ET for West 8-seed",
        "Banchero needs redemption after 7-22 shooting",
        "Curry faces back-to-back elimination games at 38",
        "Winners face Detroit (60-22) and Oklahoma City (64-18)"
      ],
      debateAngle: "Is it realistic to expect Curry to deliver another masterpiece just three days later on the road?",
      suggestedQuote: "Curry's 35-point elimination game was legendary, but expecting lightning to strike twice in three days at age 38? That's asking for a miracle even from a four-time champion. Phoenix's depth and home court should end this magical run.",
      relevantPlayers: ["Stephen Curry", "Paolo Banchero", "LaMelo Ball", "Devin Booker", "Kon Knueppel"]
    },
    {
      topic: "Playoff Picture Rapid Fire: Six Matchups Locked and Loaded",
      segment: "rapid-fire",
      duration: "5 minutes",
      keyStats: [
        "Detroit awaits East 8-seed (Orlando or Charlotte)",
        "Boston locked in vs Philadelphia's young core",
        "Oklahoma City awaits West 8-seed (Phoenix or Golden State)",
        "Lakers-Rockets features Luka's injury uncertainty",
        "Rookie VJ Edgecombe already playoff-tested with 19-11 game"
      ],
      debateAngle: "Which first-round series has the most upset potential?",
      suggestedQuote: "Philadelphia at Boston is the sleeper series nobody's talking about. Maxey's on fire, Edgecombe looks fearless, and hunger beats experience more often than we think. Don't sleep on this 7-2 matchup.",
      relevantPlayers: ["Tyrese Maxey", "Jayson Tatum", "VJ Edgecombe", "Luka Dončić", "Victor Wembanyama"]
    },
    {
      topic: "The Pressure Cooker: Championship Windows Opening and Closing",
      segment: "closer",
      duration: "4 minutes",
      keyStats: [
        "Curry's Warriors facing potential dynasty finale",
        "Philadelphia's youth movement hitting playoff stage",
        "Clippers' season ends with Leonard playing through injury",
        "Oklahoma City and San Antonio as title favorites",
        "First round starts Saturday with four games"
      ],
      debateAngle: "Are we watching the end of the Curry-Warriors era or the beginning of another championship run?",
      suggestedQuote: "This postseason feels different. Old guard legends like Curry refusing to fade away, young guns like Maxey and Edgecombe announcing themselves on the biggest stage. The championship window isn't just shifting — it's exploding wide open.",
      relevantPlayers: ["Stephen Curry", "Tyrese Maxey", "Victor Wembanyama", "Shai Gilgeous-Alexander", "Kawhi Leonard"]
    }
  ],
  coldOpen: "Stephen Curry is 38 years old. He just played his third game in 73 days. His knees are held together by hope and advanced medicine. And last night? He dropped 35 points with seven three-pointers in an elimination game to save the Warriors' season. Meanwhile in Philadelphia, 23-year-old Tyrese Maxey scored 31 to punch his team's playoff ticket while Paolo Banchero crumbled under pressure. Father Time is undefeated, they say. Tell that to Steph Curry. This is Hoops Intel, and we've got stories that'll make you believe in basketball magic again.",
  socialClip: "Curry's reaction after his seventh three-pointer with 2:47 left in the fourth quarter — the slow turn to the camera, the subtle shimmy, and the ice-cold stare of a legend who refuses to go quietly. Caption it: 'Age is just a number when you're Stephen Curry.' This clip will break the internet and trend for 48 hours straight.",
  tweetThread: [
    "🧵 THREAD: Last night proved basketball is still magical. Curry (38) drops 35 in elimination game while rookie VJ Edgecombe posts 19-11 double-double. Old legends, young stars, and everything in between. Let's break down the wildest playoff night of 2026... 1/5",
    "Stephen Curry just delivered the performance of the season. 35 points, 7 threes, elimination game, age 38, third game back from 73-day absence. This wasn't just basketball — it was time travel. The Warriors live to fight Friday at Phoenix. Absolutely legendary. 2/5",
    "Tyrese Maxey (31 pts, 6 ast) proved he's franchise material while Paolo Banchero (7-22 FG, 6 TO) wilted under pressure. Philadelphia gets Boston in Round 1. The difference between rising to the moment and shrinking from it was on full display. 3/5",
    "VJ Edgecombe's 19-11 double-double as a rookie in a playoff-clinching game might be the most underrated performance of the night. Kid played 42 minutes without fear. Philadelphia just found their postseason X-factor at the perfect time. 4/5",
    "Friday's elimination doubleheader: CHA @ ORL (7 ET), GSW @ PHX (9:30 ET). Can Banchero bounce back? Can Curry do it twice in three days? Two franchise players, two elimination games, everything on the line. Appointment television. 5/5"
  ]
};
