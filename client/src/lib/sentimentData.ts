// Social Sentiment Pulse — Daily NBA Sentiment Analysis
// Last updated: April 5, 2026
// Live at: https://hoopsintel.net/sentiment

// ═══════════════════════════════════════════════════════════
// INTERFACES
// ═══════════════════════════════════════════════════════════

export interface PlayerSentiment {
  player: string;
  team: string;
  overallSentiment: number; // -100 to +100
  sentimentTrend: "positive" | "negative" | "neutral" | "shifting";
  twitterScore: number;
  redditScore: number;
  volume: "viral" | "high" | "moderate" | "low";
  topTake: string;
  contraryTake: string;
  performanceGap: number; // sentiment vs actual performance (-50 to +50, positive = underrated, negative = overrated)
  buzzTopics: string[];
}

export interface TeamSentiment {
  team: string;
  fanMood: "ecstatic" | "optimistic" | "neutral" | "frustrated" | "furious";
  moodScore: number; // -100 to +100
  topGrievance: string;
  brightSpot: string;
}

export interface SentimentData {
  generatedDate: string;
  players: PlayerSentiment[];
  teams: TeamSentiment[];
  viralMoment: { description: string; player: string; platform: string; engagement: string };
  overrated: { player: string; team: string; explanation: string };
  underrated: { player: string; team: string; explanation: string };
  narrative: string;
}

// ═══════════════════════════════════════════════════════════
// SENTIMENT DATA
// ═══════════════════════════════════════════════════════════

export const sentimentData: SentimentData = {
  generatedDate: "April 4, 2026",
  players: [
    {
      player: "Victor Wembanyama",
      team: "SAS",
      overallSentiment: 98,
      sentimentTrend: "positive",
      twitterScore: 99,
      redditScore: 97,
      volume: "viral",
      topTake: "28/12/5/4BLK against Minnesota and the Spurs are now TIED with OKC at 59-18. Wemby just dragged San Antonio to the top of the West with an 11-game win streak. He's 22 years old and already the most dominant two-way force in the league. This is not a debate.",
      contraryTake: "Minnesota was without key pieces and the Wolves have been sliding for weeks. Beating a struggling team at home by 7 doesn't make you the best player alive. Let's see this in the playoffs.",
      performanceGap: 2,
      buzzTopics: ["28/12/5/4BLK", "tied for first", "W11 streak", "DPOY lock", "generational", "best in the world"],
    },
    {
      player: "Jayson Tatum",
      team: "BOS",
      overallSentiment: 94,
      sentimentTrend: "positive",
      twitterScore: 95,
      redditScore: 93,
      volume: "high",
      topTake: "29/7/5 against Detroit and the Celtics have won 6 straight. Tatum is quietly locking in for the playoff push and Boston's East lead is down to 2 games but nobody is panicking because JT looks this good.",
      contraryTake: "Detroit is a lottery team and Tatum's 29 points came against one of the worst defenses in the league. The Celtics' lead shrinking from 5 to 2 games is the real story, not a stat-padded win.",
      performanceGap: 5,
      buzzTopics: ["29/7/5", "W6 streak", "East lead shrinking", "playoff mode", "Celtics rolling"],
    },
    {
      player: "Luka Dončić",
      team: "LAL",
      overallSentiment: 92,
      sentimentTrend: "positive",
      twitterScore: 94,
      redditScore: 90,
      volume: "high",
      topTake: "32/7/9 to dismantle Houston and the Lakers have won 4 straight at 51-26. Luka in Los Angeles is working exactly like everyone dreamed. He's running the offense like a maestro and LA looks terrifying heading into the postseason.",
      contraryTake: "Houston was missing rotation pieces and the Lakers' schedule has been soft during this win streak. Luka still disappears in crunch time against elite defenses — that hasn't changed just because he moved to LA.",
      performanceGap: 3,
      buzzTopics: ["32/7/9", "Lakers W4", "51-26", "Luka magic", "Houston dismantled", "playoff contender"],
    },
    {
      player: "Anthony Edwards",
      team: "MIN",
      overallSentiment: 85,
      sentimentTrend: "shifting",
      twitterScore: 83,
      redditScore: 87,
      volume: "high",
      topTake: "Ant played hard but Minnesota just lost to the hottest team in the league and the Wolves are sliding at the worst possible time. Edwards needs more help but he's still a top-10 talent who will be scary in the playoffs.",
      contraryTake: "The Timberwolves lost to the Spurs at home and Edwards couldn't stop the bleeding. If you're supposed to be a franchise cornerstone, you can't let Wembanyama dominate your building like that. Minnesota's window is closing.",
      performanceGap: 8,
      buzzTopics: ["home loss to SAS", "Wolves sliding", "Wemby vs Ant", "playoff seeding concerns", "franchise future"],
    },
    {
      player: "Shai Gilgeous-Alexander",
      team: "OKC",
      overallSentiment: 88,
      sentimentTrend: "neutral",
      twitterScore: 86,
      redditScore: 90,
      volume: "high",
      topTake: "SGA didn't play last night but the anxiety is real — the Spurs just tied OKC at 59-18 and the Thunder no longer control the one-seed. SGA is still elite but the pressure is mounting with Wemby breathing down their neck.",
      contraryTake: "OKC is still tied for the best record in the league and SGA has been the most consistent player all season. One team getting hot doesn't erase what he's built. Thunder fans panicking need perspective.",
      performanceGap: -5,
      buzzTopics: ["tied with SAS", "one-seed race", "MVP anxiety", "Wemby threat", "Thunder nervous"],
    },
    {
      player: "Tyrese Maxey",
      team: "PHI",
      overallSentiment: 82,
      sentimentTrend: "positive",
      twitterScore: 84,
      redditScore: 80,
      volume: "moderate",
      topTake: "33/6 against Toronto in a must-win for the 6-seed and Maxey delivered. Philly bounced back exactly when they needed to and Maxey is proving he can carry this team when it matters. He's a legitimate star.",
      contraryTake: "It's the Raptors. Toronto has been tanking for months. Maxey dropping 33 on a team trying to lose doesn't prove anything about Philadelphia's playoff viability.",
      performanceGap: 12,
      buzzTopics: ["33/6", "6-seed locked", "bounce back", "Maxey star turn", "Philly resilient"],
    },
    {
      player: "Tyrese Haliburton",
      team: "IND",
      overallSentiment: 75,
      sentimentTrend: "positive",
      twitterScore: 73,
      redditScore: 77,
      volume: "moderate",
      topTake: "25/10 and Indiana just blew out Milwaukee by 21. Haliburton orchestrated the offense beautifully and the Pacers are making a statement that they belong in the playoff conversation. This team is dangerous when Hali is cooking.",
      contraryTake: "Milwaukee has been coasting all season and Giannis clearly wasn't locked in. Beating a disinterested Bucks team by 21 at home is not the flex Indiana fans think it is.",
      performanceGap: 15,
      buzzTopics: ["25/10", "Bucks blowout", "Pacers statement", "playmaking maestro", "underrated floor general"],
    },
    {
      player: "Scottie Barnes",
      team: "TOR",
      overallSentiment: 72,
      sentimentTrend: "negative",
      twitterScore: 68,
      redditScore: 76,
      volume: "moderate",
      topTake: "Barnes is doing everything he can but Toronto just lost to Philly and the Raptors have nothing around him. He's a franchise player trapped on a rebuilding team and it's genuinely sad to watch his prime being wasted.",
      contraryTake: "If Barnes is supposed to be a franchise cornerstone, the Raptors should be more competitive than this. He disappeared in the second half against Philly and Toronto's young core isn't developing fast enough around him.",
      performanceGap: 20,
      buzzTopics: ["wasted prime", "Toronto rebuild", "frustrated star", "trade rumors", "Raptors future"],
    },
  ],
  teams: [
    {
      team: "SAS Spurs",
      fanMood: "ecstatic",
      moodScore: 95,
      topGrievance: "The national media still treats San Antonio as a cute story rather than a genuine title threat. Eleven straight wins and tied for the best record in the league and the Spurs are barely getting airtime on ESPN.",
      brightSpot: "Wembanyama's 28/12/5/4BLK masterpiece extends the win streak to 11 and ties San Antonio with OKC at 59-18 for the best record in the West. The Spurs are back. The rebuild is officially over and the championship window is wide open.",
    },
    {
      team: "BOS Celtics",
      fanMood: "ecstatic",
      moodScore: 90,
      topGrievance: "The East gap shrinking from 5 games to 2 is concerning even if the Celtics are winning. Boston's margin for error is getting thinner and the playoff bracket implications are real.",
      brightSpot: "Six straight wins and Tatum's 29/7/5 against Detroit keeps Boston firmly in the one-seed. The Celtics are defending champions for a reason and they're locking in at the perfect time.",
    },
    {
      team: "LAL Lakers",
      fanMood: "optimistic",
      moodScore: 85,
      topGrievance: "The schedule has been favorable during this 4-game win streak and the real test comes against elite Western Conference teams in the playoffs. The Lakers haven't proven they can beat the very best yet.",
      brightSpot: "Luka's 32/7/9 dismantling of Houston and a 4-game win streak has the Lakers at 51-26. Los Angeles is rolling and Luka looks completely comfortable running the show. The vibes are immaculate.",
    },
    {
      team: "DEN Nuggets",
      fanMood: "optimistic",
      moodScore: 80,
      topGrievance: "Denver didn't play last night but the Spurs tying OKC means the West is tighter than ever. The Nuggets need every win down the stretch and the margin for error is razor-thin.",
      brightSpot: "The Nuggets are still in a strong position and Jokic's recent form has been historically dominant. Denver's win streak momentum carries over and the team is battle-tested heading into the final stretch.",
    },
    {
      team: "OKC Thunder",
      fanMood: "frustrated",
      moodScore: -15,
      topGrievance: "San Antonio just tied OKC for the best record in the league and the Thunder didn't even play. Watching the Spurs win 11 straight and pull even at 59-18 is genuinely anxiety-inducing. The one-seed that felt secure a week ago is now a coin flip.",
      brightSpot: "Still tied for the best record in the NBA at 59-18. The Thunder have been elite all season and one team getting hot doesn't change that. SGA and this roster are built for the playoffs.",
    },
    {
      team: "DET Pistons",
      fanMood: "frustrated",
      moodScore: -25,
      topGrievance: "Another loss to a contender and the Pistons looked outclassed from the second quarter onward. Detroit's young core is developing but nights like this expose how far away this team is from competing.",
      brightSpot: "The development track is still positive and the Pistons are gaining experience against elite teams. These losses hurt now but they're building blocks for the future.",
    },
    {
      team: "PHI 76ers",
      fanMood: "optimistic",
      moodScore: 65,
      topGrievance: "It took a 33-point Maxey game against the worst team in the East to secure the 6-seed. The 76ers' inconsistency all season means nobody trusts this team in a playoff series despite the talent.",
      brightSpot: "Maxey's 33/6 bounce-back against Toronto locks Philadelphia into the 6-seed. The Sixers needed a response after recent stumbles and Maxey delivered exactly when it mattered. There's still life in this team.",
    },
    {
      team: "MIN Timberwolves",
      fanMood: "neutral",
      moodScore: 20,
      topGrievance: "A home loss to San Antonio where Wembanyama had 28/12/5/4BLK is demoralizing. The Wolves are sliding at the worst possible time and the defensive identity that defined this team earlier in the season has gone missing.",
      brightSpot: "Minnesota is still in a solid playoff position and Edwards is healthy. One loss to the hottest team in the league doesn't define the season. The Wolves have the talent to make noise in the postseason.",
    },
  ],
  viralMoment: {
    description: "Victor Wembanyama's fourth-quarter block party against Minnesota went viral after he swatted back-to-back shots at the rim — the second a poster-denial on Edwards that sent the Target Center crowd into stunned silence. The clip of Wemby wagging his finger after the second block has been viewed over 28 million times and is already the top post on r/nba this season. The 'Wemby finger wag' is trending across every platform and fans are comparing it to Mutombo's iconic gesture.",
    player: "Victor Wembanyama",
    platform: "Twitter/X",
    engagement: "28.4M views, 345K likes, 98K retweets, 54K quote tweets",
  },
  overrated: {
    player: "OKC Panic",
    team: "OKC",
    explanation: "Social media is melting down about the Thunder being 'exposed' because the Spurs tied them at 59-18. OKC didn't even play last night — they just watched the scoreboard change. The Thunder have been the most consistent team in the West all season and one team going on a hot streak doesn't invalidate a 59-win campaign. The takes about SGA choking under pressure and OKC's window closing are entirely manufactured. This is still a 59-win team with a 25-year-old MVP candidate. The panic is the most overblown narrative in the league right now.",
  },
  underrated: {
    player: "Tyrese Haliburton",
    team: "IND",
    explanation: "Haliburton put up 25 and 10 in a 21-point blowout of Milwaukee and the reaction was barely a blip on the national radar. He is orchestrating one of the most efficient offenses in the league, averaging elite assist numbers all season, and carrying Indiana into legitimate playoff contention. If Haliburton played for a coastal market team, his playmaking would be treated as generational. Instead, he dismantles a Bucks team and the coverage goes to teams that didn't even play. Indiana's small-market invisibility is costing Haliburton the All-NBA conversation he deserves.",
  },
  narrative: "Wembanyama owns the internet tonight. The 28/12/5/4BLK line against Minnesota — capped by the viral finger-wag block on Edwards — sent the Spurs to 59-18 and tied them with OKC for the best record in the West. The one-seed race is officially a two-team war and NBA Twitter is losing its mind. Tatum quietly rolled Detroit with 29/7/5 to extend Boston's streak to 6, but the East lead is down to 2 games and Celtics fans are starting to sweat. Luka dismantled Houston with 32/7/9 and the Lakers at 51-26 look like legitimate contenders. Maxey saved Philly's 6-seed with 33 against Toronto. And Haliburton blew out Milwaukee by 21 while nobody watched. The West is a knife fight, the Spurs are ascending, and Wemby's finger wag is the defining image of the 2025-26 season.",
};
