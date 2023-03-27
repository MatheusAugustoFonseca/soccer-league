export default interface ILeaderboard {
  name: string;
  totalPoints: number;
  totalGames: number;
  totalVictories: number;
  totalDraws: number;
  totalLosses: number;
  totalFavor: number;
  goalsOwn: number;
  goalsBalance: number;
  efficiency: string;
}
