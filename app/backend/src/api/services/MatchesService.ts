import { ModelStatic } from 'sequelize';
import Teams from '../../database/models/TeamModel';
import Matches from '../../database/models/MatchesModel';
import IMatches from '../interfaces/IMatches';
import IServiceMatches from '../interfaces/IServiceMatches';

export default class MatchesService implements IServiceMatches {
  protected matchesModel: ModelStatic<Matches> = Matches;

  async getAll(): Promise<IMatches[]> {
    return this.matchesModel.findAll({
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
  }

  async byProgress(query: string): Promise<IMatches[]> {
    const inProgress = query === 'true';

    const matches = await this.matchesModel.findAll({
      where: { inProgress },
      include: [
        { model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] } },
        { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } },
      ],
    });
    return matches;
  }

  async finishingMatch(id: number): Promise<void> {
    await this.matchesModel.update({
      inProgress: false }, { where: { id } });
  }
}
