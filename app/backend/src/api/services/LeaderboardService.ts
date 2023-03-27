import { ModelStatic, QueryTypes } from 'sequelize';
import Matches from '../../database/models/MatchesModel';
import IserviceLeaderboard from '../interfaces/IServiceLeaderboard';
import awayLeaderboardQuery from '../utils/awayLeaderboardQuery ';
import leaderboardQuery from '../utils/homeLeaderboardQuery';

export default class LeaderboardService implements IserviceLeaderboard {
  protected matchesModel: ModelStatic<Matches> = Matches;
  async getLeaderboard(): Promise<object[] | undefined> {
    const query = await this.matchesModel.sequelize?.query(leaderboardQuery, {
      type: QueryTypes.SELECT });
    const board = query;
    return board;
  }

  async getAwayLeaderboard(): Promise<object[] | undefined> {
    const query = await this.matchesModel.sequelize?.query(awayLeaderboardQuery, {
      type: QueryTypes.SELECT });
    const board = query;
    return board;
  }
}
