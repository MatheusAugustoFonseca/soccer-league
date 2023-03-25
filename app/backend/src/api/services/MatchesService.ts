import { ModelStatic } from 'sequelize';
import Teams from '../../database/models/TeamModel';
import Matches from '../../database/models/MatchesModel';
import IMatches from '../interfaces/IMatches';
import IServiceMatches from '../interfaces/IServiceMatches';

export default class MatchesService implements IServiceMatches {
  protected matchesModel: ModelStatic<Matches> = Matches;

  async getAll(): Promise<IMatches[]> {
    // throw new Error('Method not implemented.');
    return this.matchesModel.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
  }
}
