// Podcast Companion — Daily Episode Blueprint
// Last updated: April 22, 2026
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
  date: "April 22, 2026",
  episodeTitle: "Playoff Chaos: Embiid Forces Game 7, Dame Delivers Historic Upset",
  rundown: [
    {
      topic: "Joel Embiid's Dominant Road Performance Forces Game 7",
      segment: "opener",
      duration: "6 minutes",
      keyStats: [
        "28 points, 12 rebounds, 3 blocks on 11-19 shooting",
        "Philadelphia shot 47.8% as a team vs Boston's 41.2%",
        "76ers outrebounded Celtics 48-36 at TD Garden",
        "Game-high +18 plus-minus in 36 minutes",
        "Embiid dominated paint with 18 points inside"
      ],
      debateAngle: "Is this the healthiest and most dangerous we've seen Joel Embiid in the playoffs? Can Philadelphia actually beat Boston in Game 7 on the road?",
      suggestedQuote: "When you can walk into Boston and completely take over an elimination game with 28 and 12, you've announced that Philadelphia is far from finished.",
      relevantPlayers: ["Joel Embiid", "Tyrese Maxey", "Jayson Tatum", "Jaylen Brown"]
    },
    {
      topic: "Portland's Stunning Upset: How Dame Time Shocked San Antonio",
      segment: "deep-dive",
      duration: "8 minutes",
      keyStats: [
        "Dame dropped 31 points on 12-22 shooting, 5-9 from three",
        "Trail Blazers shot 15-32 (46.9%) from three as a team",
        "Anfernee Simons added 24 points with 6 three-pointers",
        "8th seed eliminated 62-win 2nd seed in first round",
        "Portland won despite Wembanyama's 27 points, 11 rebounds"
      ],
      debateAngle: "What does this upset say about the value of playoff experience versus regular season dominance? Are the Spurs too young for championship contention?",
      suggestedQuote: "Sometimes veteran leadership is worth more than youth and talent, and Portland just proved that in the most dramatic way possible.",
      relevantPlayers: ["Damian Lillard", "Anfernee Simons", "Victor Wembanyama", "Jusuf Nurkić"]
    },
    {
      topic: "Are the Boston Celtics Championship Pretenders?",
      segment: "hot-take",
      duration: "5 minutes",
      keyStats: [
        "Celtics managed just 97 points on 41.2% shooting at home",
        "Jayson Tatum struggled with 19 points on 6-18 shooting",
        "Boston blew home court advantage in elimination game",
        "56-26 regular season record now means nothing",
        "Embiid completely neutralized their interior defense"
      ],
      debateAngle: "Does Boston's Game 6 collapse expose them as mental midgets who can't handle pressure? Or is this just the unpredictable nature of playoff basketball?",
      suggestedQuote: "The Celtics' home loss raises serious questions about their mental toughness and championship readiness when facing real adversity.",
      relevantPlayers: ["Jayson Tatum", "Jaylen Brown", "Joel Embiid", "Tyrese Maxey"]
    },
    {
      topic: "Rapid Fire: Lakers Survive, Playoff Picture Updates, Rookie Report",
      segment: "rapid-fire",
      duration: "4 minutes",
      keyStats: [
        "Anthony Davis: 26 points, 11 rebounds, 4 blocks vs Houston",
        "Lakers held Rockets to 42.7% shooting in 101-94 win",
        "Two new playoff series begin tonight: DET-ORL, OKC-PHX",
        "Victor Wembanyama's rookie playoff experience ends early",
        "Luka Dončić probable to return from four-game absence"
      ],
      debateAngle: "Which tonight's playoff opener will be more competitive - Detroit hosting Orlando or Oklahoma City welcoming Phoenix?",
      suggestedQuote: "The playoffs continue to prove that anything can happen when championship pressure reaches its peak.",
      relevantPlayers: ["Anthony Davis", "LeBron James", "Cade Cunningham", "Shai Gilgeous-Alexander"]
    },
    {
      topic: "Looking Ahead: Game 7 Stakes and New Series Predictions",
      segment: "closer",
      duration: "5 minutes",
      keyStats: [
        "Game 7 between Boston and Philadelphia tomorrow night",
        "Detroit enters as 8.5-point favorite over Orlando",
        "OKC favored by 12.5 points against Phoenix",
        "Portland advances to face Denver in second round",
        "Four playoff series still to be determined"
      ],
      debateAngle: "Who has more pressure in tomorrow's Game 7 - the higher-seeded Celtics at home or the road warriors from Philadelphia?",
      suggestedQuote: "Game 7 will test everything both teams believe about their championship aspirations and reveal their true character.",
      relevantPlayers: ["Joel Embiid", "Jayson Tatum", "Cade Cunningham", "Paolo Banchero"]
    }
  ],
  coldOpen: "Welcome to Hoops Intel, where playoff chaos just reached a whole new level. I'm your host, and if you went to bed early last night, you missed some of the most stunning basketball of the entire season. Joel Embiid walked into TD Garden and absolutely dominated the Celtics to force a Game 7. Damian Lillard delivered a masterclass in clutch basketball to complete one of the biggest upsets in playoff history. And the Lakers survived a physical battle with Houston behind Anthony Davis' two-way excellence. This is why we watch playoff basketball, folks. Let's break it all down.",
  socialClip: "Joel Embiid's dominant 28-point, 12-rebound performance discussion from the opener segment - specifically the moment analyzing his +18 plus-minus and complete takeover at TD Garden. Caption: 'When Embiid is healthy and locked in like this... the 76ers become a completely different team 🔥'",
  tweetThread: [
    "🧵 PLAYOFF CHAOS RECAP: Last night delivered everything we love about postseason basketball - upsets, elimination game drama, and legendary individual performances. Here's what you need to know:",
    "1/ Joel Embiid was UNSTOPPABLE at TD Garden: 28 PTS, 12 REB, 3 BLK on 11-19 shooting. The 76ers shot 47.8% as a team while holding Boston to just 97 points. This is the healthiest and most dominant we've seen Embiid in any playoff series.",
    "2/ DAME TIME IN SAN ANTONIO: Lillard dropped 31 points to complete a STUNNING upset as 8th-seed Portland eliminated the 62-win Spurs. The Trail Blazers shot 46.9% from three while Anfernee Simons added 24 points and 6 threes. Veteran leadership > youth.",
    "3/ The Boston Celtics have serious questions to answer after blowing home court in an elimination game. Tatum shot just 6-18 for 19 points, and their offense completely disappeared when it mattered most. Game 7 will test their championship DNA.",
    "4/ Tonight brings fresh playoff action: Pistons host Magic (7 PM ET) and Thunder welcome Suns (9:30 PM ET). Plus Luka is expected back for Dallas. The chaos is just getting started 🏀"
  ]
};
