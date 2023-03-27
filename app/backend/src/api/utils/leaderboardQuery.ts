const leaderboardQuery = `SELECT teams.team_name AS name, 
CAST(SUM(IF(matches.home_team_goals > matches.away_team_goals, 3, 0)
+ IF(matches.home_team_goals = matches.away_team_goals, 1, 0)) AS SIGNED) AS totalPoints,
COUNT(matches.home_team_id) AS totalGames,
CAST(SUM(IF(matches.home_team_goals > matches.away_team_goals, 1, 0)) AS SIGNED) AS totalVictories,
CAST(SUM(IF(matches.home_team_goals < matches.away_team_goals, 1, 0)) AS SIGNED) AS totalLosses,
CAST(SUM(IF(matches.home_team_goals = matches.away_team_goals, 1, 0)) AS SIGNED) AS totalDraws,
CAST(SUM(matches.home_team_goals) AS SIGNED) AS goalsFavor,
CAST(SUM(matches.away_team_goals) AS SIGNED) AS goalsOwn,
CAST(SUM(matches.home_team_goals - matches.away_team_goals) AS SIGNED) AS goalsBalance,
CAST(SUM(IF(matches.home_team_goals > matches.away_team_goals, 3, 0)
+ IF(matches.home_team_goals = matches.away_team_goals, 1, 0))
/ (COUNT(matches.home_team_id) * 3) * 100 AS DECIMAL(5, 2)) AS efficiency
FROM matches JOIN teams ON teams.id = matches.home_team_id
WHERE matches.in_progress = false GROUP BY matches.home_team_id
ORDER BY totalPoints DESC,
totalVictories DESC,
goalsBalance DESC,
goalsFavor DESC,
goalsOwn DESC`;

export default leaderboardQuery;
