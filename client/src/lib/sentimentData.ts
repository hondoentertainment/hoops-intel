// Social Sentiment Pulse — Daily NBA Sentiment Analysis
// Last updated: March 24, 2026
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
  generatedDate: "March 24, 2026",
  players: [
    { player: "Luka Doncic", team: "LAL", overallSentiment: 92, sentimentTrend: "positive", twitterScore: 95, redditScore: 88, volume: "viral", topTake: "Luka's 38-point masterclass with the step-back dagger proves he's the best closer in the NBA right now. Seven straight wins and counting.", contraryTake: "The Lakers are beating mediocre teams on a soft stretch of schedule. Wait until the playoffs when Luka has to play defense for 40 minutes.", performanceGap: 5, buzzTopics: ["step-back three", "clutch gene", "Lakers streak", "MVP dark horse", "better than LeBron era"] },
    { player: "Shai Gilgeous-Alexander", team: "OKC", overallSentiment: 96, sentimentTrend: "positive", twitterScore: 94, redditScore: 98, volume: "viral", topTake: "130 consecutive 20-point games is genuinely insane. SGA is having the most dominant regular season since Curry's unanimous MVP year.", contraryTake: "He scored 25 against the worst team in the league and sat the 4th quarter. The Thunder's schedule has been a joke since the All-Star break.", performanceGap: 2, buzzTopics: ["130 streak", "MVP lock", "Thunder dynasty", "best season ever", "sitting 4th quarters"] },
    { player: "Jalen Johnson", team: "ATL", overallSentiment: 85, sentimentTrend: "positive", twitterScore: 82, redditScore: 89, volume: "high", topTake: "Jalen Johnson is the most improved player in the NBA and it's not close. 28/9/7 and 11 straight wins — this man is a top-15 player.", contraryTake: "The Hawks are beating bad teams during a soft schedule pocket. The streak ends the moment they face a real contender in the playoffs.", performanceGap: 22, buzzTopics: ["11-game streak", "MIP candidate", "Hawks dark horse", "triple-double machine", "most underrated"] },
    { player: "Jayson Tatum", team: "BOS", overallSentiment: 68, sentimentTrend: "shifting", twitterScore: 62, redditScore: 74, volume: "high", topTake: "Tatum dropped 31 on the Warriors and Boston's won three straight. The defending champs are rounding into form at exactly the right time.", contraryTake: "He feasted on a Curry-less Warriors team that's below .500. Tatum still disappears in big moments and Boston looks a tier below OKC and Detroit.", performanceGap: -12, buzzTopics: ["defending champs", "overrated discourse", "empty stats", "playoff Tatum", "31 vs Warriors"] },
    { player: "Victor Wembanyama", team: "SAS", overallSentiment: 88, sentimentTrend: "positive", twitterScore: 90, redditScore: 86, volume: "high", topTake: "The Spurs are 51-18 and Wemby is the reason. He's the most impactful player in the league when you factor in defense. Generational.", contraryTake: "Wemby rested against the Clippers while the Spurs are 3.5 games back of OKC. You can't rest in a 1-seed race and claim to be the best.", performanceGap: 3, buzzTopics: ["generational", "DPOY", "rest management", "Spurs revival", "alien"] },
    { player: "Cooper Flagg", team: "DAL", overallSentiment: 72, sentimentTrend: "positive", twitterScore: 78, redditScore: 66, volume: "high", topTake: "Flagg dropped 25 and 8 boards against the hottest team in the league. ROY is a two-man race and Flagg is closing the gap fast.", contraryTake: "Dallas is tanking and Flagg gets empty stats on a lottery team. Knueppel is doing it on a team that actually wins games.", performanceGap: 10, buzzTopics: ["ROY race", "generational talent", "tank commander", "25 vs Hawks", "Duke to Dallas"] },
    { player: "Brandon Ingram", team: "TOR", overallSentiment: 78, sentimentTrend: "positive", twitterScore: 75, redditScore: 81, volume: "moderate", topTake: "Three straight 28-point games since the trade. Masai pulled off another heist and Ingram might be the best midseason acquisition in the league.", contraryTake: "Ingram always gets his numbers. The real question is whether Toronto can win a playoff series with him as the first option. History says no.", performanceGap: 15, buzzTopics: ["trade steal", "Masai magic", "28-point streak", "Raptors resurgence", "first option debate"] },
    { player: "Cade Cunningham", team: "DET", overallSentiment: 74, sentimentTrend: "shifting", twitterScore: 70, redditScore: 78, volume: "moderate", topTake: "Even with back spasms, the Pistons are 49-19 and the 1-seed. Cunningham is the engine of the best team in the East — MVP candidate.", contraryTake: "The back spasms are concerning heading into the playoffs. Detroit's depth is good enough that they might not even need him to hold the 1-seed.", performanceGap: -5, buzzTopics: ["back spasms", "1-seed", "MVP conversation", "Pistons culture", "injury concern"] },
    { player: "Julius Randle", team: "MIN", overallSentiment: 64, sentimentTrend: "positive", twitterScore: 58, redditScore: 70, volume: "moderate", topTake: "60 combined points in two games without Edwards. Randle is proving he can be a legit first option and Minnesota hasn't missed a beat.", contraryTake: "He's padding stats against Utah and bottom feeders. When Edwards comes back, Randle goes back to being a third option who can't shoot in the clutch.", performanceGap: 18, buzzTopics: ["filling in for Ant", "first option proof", "60 in two games", "Wolves depth", "redemption arc"] },
    { player: "Kevin Durant", team: "HOU", overallSentiment: 52, sentimentTrend: "negative", twitterScore: 48, redditScore: 56, volume: "moderate", topTake: "KD had 31 in the loss to the Lakers but Houston has dropped two straight home games. At 37, he's still elite on offense.", contraryTake: "The Rockets lost to the Lakers at home and KD's defense was invisible. Houston is 4-6 in their last 10 and trending in the wrong direction for the playoffs.", performanceGap: -8, buzzTopics: ["aging superstar", "Rockets slide", "home losses", "defense concerns", "playoff window closing"] },
    { player: "Nikola Jokic", team: "DEN", overallSentiment: 82, sentimentTrend: "positive", twitterScore: 78, redditScore: 86, volume: "moderate", topTake: "Near triple-double machine. Jokic had 22/11/9 and Denver is surging at the perfect time. Fourth MVP is still in play.", contraryTake: "Jokic plays at walking pace and the Nuggets barely beat a 23-win Memphis team. Denver's ceiling is a second-round exit.", performanceGap: 8, buzzTopics: ["triple-double watch", "fourth MVP", "Nuggets surge", "walking pace meme", "Murray resurgence"] },
    { player: "Stephen Curry", team: "GSW", overallSentiment: -15, sentimentTrend: "negative", twitterScore: -22, redditScore: -8, volume: "high", topTake: "The Warriors are below .500 without Curry and the franchise is at a crossroads. This might be Steph's last year in San Francisco.", contraryTake: "Curry's knee injury isn't his fault and the Warriors roster is terrible. He'll come back and drag this team into the play-in single-handedly.", performanceGap: -30, buzzTopics: ["dynasty over", "below .500", "trade Curry", "runner's knee", "franchise crossroads"] },
    { player: "LaMelo Ball", team: "CHA", overallSentiment: 76, sentimentTrend: "positive", twitterScore: 80, redditScore: 72, volume: "moderate", topTake: "LaMelo's 30/13 against Miami was a masterclass. Charlotte has won 9 of 12 and the play-in is locked up. He's an All-Star snub.", contraryTake: "Ball is a flashy player on a .500 team that won't get past the first round. His defense is still a liability and the Hornets ceiling is limited.", performanceGap: 8, buzzTopics: ["All-Star snub", "play-in surge", "30/13 vs Heat", "flashy passes", "Hornets playoff push"] },
    { player: "Giannis Antetokounmpo", team: "MIL", overallSentiment: -35, sentimentTrend: "negative", twitterScore: -42, redditScore: -28, volume: "high", topTake: "Giannis has missed 33 games this season and the Bucks are 28-41. Milwaukee's championship window is shut and it's time to rebuild.", contraryTake: "Healthy Giannis is still a top-5 player in the world. One bad injury season doesn't erase what he's done. Milwaukee needs to build better around him.", performanceGap: -20, buzzTopics: ["trade Giannis", "Bucks tank", "career high missed games", "wasted prime", "rebuild debate"] },
    { player: "Trae Young", team: "ATL", overallSentiment: 58, sentimentTrend: "positive", twitterScore: 55, redditScore: 62, volume: "moderate", topTake: "12 assists in the Hawks' 11th straight win. Trae is finally embracing the playmaker role and letting Johnson be the alpha scorer.", contraryTake: "Only 14 points in a win — Trae is becoming a secondary player on his own team. The Hawks are winning despite him, not because of him.", performanceGap: 12, buzzTopics: ["playmaker evolution", "Hawks streak", "12 assists", "secondary star", "Johnson's team now"] },
  ],
  teams: [
    { team: "OKC Thunder", fanMood: "ecstatic", moodScore: 95, topGrievance: "Only grievance is that SGA doesn't get enough national TV games. Also worried about playoff experience.", brightSpot: "55-15 record, 11-game win streak, SGA's historic 130 consecutive 20-point games. This is the best Thunder team since the KD era." },
    { team: "LAL Lakers", fanMood: "ecstatic", moodScore: 88, topGrievance: "Defensive lapses in the second half against Houston — gave up a 12-0 run before Luka bailed them out. Bench depth still thin.", brightSpot: "Seven-game winning streak and Luka averaging 34.2 over his last six. The 3-seed is secure and this team looks like a legitimate Finals contender." },
    { team: "ATL Hawks", fanMood: "ecstatic", moodScore: 90, topGrievance: "Zero national media attention despite the 11-game streak. Also anxious about whether this pace is sustainable or a mirage.", brightSpot: "Longest active win streak in the NBA. Jalen Johnson is an All-NBA candidate and the team chemistry is the best it's been in years." },
    { team: "DET Pistons", fanMood: "optimistic", moodScore: 72, topGrievance: "Cade's back spasms are a genuine worry heading into the playoffs. Can't afford to lose the franchise player now.", brightSpot: "Still the 1-seed at 49-19 with a 3-game cushion. The roster is deep enough to survive short-term absences." },
    { team: "BOS Celtics", fanMood: "optimistic", moodScore: 70, topGrievance: "Still not playing at championship level consistently. Tatum's efficiency comes and goes. Can they repeat?", brightSpot: "Three-game win streak, locked into the 2-seed, and Tatum's 31-point eruption against Golden State was encouraging." },
    { team: "GSW Warriors", fanMood: "frustrated", moodScore: -45, topGrievance: "Below .500 without Curry. No timetable for his return. The roster construction is terrible and the front office has no plan.", brightSpot: "Brandin Podziemski continues to develop (19 points vs Boston). At least there's one young piece to build around." },
    { team: "MIL Bucks", fanMood: "furious", moodScore: -72, topGrievance: "28-41 with Giannis missing 33 games. The season is a disaster. Myles Turner trade was a bust. Front office needs to be fired.", brightSpot: "Honestly? The draft pick is going to be good. Sometimes you have to lose to win later." },
    { team: "HOU Rockets", fanMood: "frustrated", moodScore: -25, topGrievance: "Two straight home losses including to the Lakers. The 4-6 record in the last 10 games is alarming. Are the Rockets pretenders?", brightSpot: "KD still dropped 31 against the Lakers. The talent is there — this is a slump, not a collapse. Still 41-27." },
    { team: "MIN Timberwolves", fanMood: "optimistic", moodScore: 65, topGrievance: "Edwards' knee injury timeline is vague. If he's not back by the playoffs, the Wolves' ceiling drops significantly.", brightSpot: "Winning without Ant proves the depth is real. Randle (60 points in two games) and Hyland are carrying the load beautifully." },
    { team: "MEM Grizzlies", fanMood: "furious", moodScore: -68, topGrievance: "Nine straight losses. Ja Morant still out with no timetable. The season is a complete write-off and the rebuild feels stalled.", brightSpot: "The lottery odds are improving by the day. A top-3 pick could accelerate the rebuild alongside a healthy Ja next season." },
  ],
  viralMoment: { description: "Luka Doncic's step-back three with 47 seconds left to seal the 118-115 win over the Rockets in Houston. The clip has been viewed over 28 million times across platforms, with the slow-motion replay of his shimmy celebration becoming an instant meme template.", player: "Luka Doncic", platform: "Twitter/X", engagement: "28.4M views, 312K likes, 89K retweets, 45K quote tweets" },
  overrated: { player: "Jayson Tatum", team: "BOS", explanation: "Social media is treating Tatum's 31-point game against a Curry-less Warriors team as proof that Boston is back. The Celtics are 46-23 but haven't beaten a team above .500 in their last five wins. Tatum's on-off numbers are mediocre and the defending champs look like a second-round exit waiting to happen. The internet is giving him credit for beating up on injured teams." },
  underrated: { player: "Jalen Johnson", team: "ATL", explanation: "Despite leading the longest winning streak in the NBA with 28/9/7 in Dallas and 14 triple-doubles on the season, Johnson gets almost zero national media coverage. Reddit loves him but mainstream Twitter barely acknowledges the Hawks exist. His performance gap is massive — he's playing like a top-15 player but gets discussed like a role player. The Hawks' 11-game streak would be the lead story on every network if it were the Celtics or Lakers." },
  narrative: "The NBA internet is split into two camps this week: Luka truthers riding the seven-game wave and SGA stans pointing at the 130-game record as proof of MVP supremacy. Meanwhile, the Hawks are winning 11 straight in near-total silence, the Warriors' subreddit has turned into a grief counseling forum, and Bucks fans are openly campaigning for a Giannis trade. The vibes are chaotic, the takes are scorching, and the playoff picture is somehow getting murkier by the day. Welcome to March Madness — the NBA version.",
};
