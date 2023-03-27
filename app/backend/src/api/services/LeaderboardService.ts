import { ModelStatic, QueryTypes } from 'sequelize';
import Matches from '../../database/models/MatchesModel';
import IserviceLeaderboard from '../interfaces/IServiceLeaderboard';
import leaderboardQuery from '../utils/leaderboardQuery';

export default class LeaderboardService implements IserviceLeaderboard {
  protected matchesModel: ModelStatic<Matches> = Matches;
  async getLeaderboard(): Promise<object[] | undefined> {
    const query = await this.matchesModel.sequelize?.query(leaderboardQuery, {
      type: QueryTypes.SELECT });
    const board = await query;
    return board;
  }
}
