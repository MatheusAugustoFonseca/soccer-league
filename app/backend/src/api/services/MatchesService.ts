import { ModelStatic } from 'sequelize';
import Teams from '../../database/models/TeamModel';
import Matches from '../../database/models/MatchesModel';
import IMatches from '../interfaces/IMatches';
import IServiceMatches from '../interfaces/IServiceMatches';
// import CustomError from '../utils/CustomError';

export default class MatchesService implements IServiceMatches {
  protected matchesModel: ModelStatic<Matches> = Matches;
  protected teamsModel: ModelStatic<Teams> = Teams;

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

  async updateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void> {
    await this.matchesModel.update({
      homeTeamGoals, awayTeamGoals }, { where: { id } });
  }

  // async createMatch(
  //   homeTeamId: number,
  //   awayTeamId: number,
  //   homeTeamGoals: number,
  //   awayTeamGoals: number,
  // ) {
  //   if (homeTeamId === awayTeamId) {
  //     throw new CustomError('It is not possible to create a match with two equal teams', '422');
  //   }
  //   const homeTeam = await this.teamsModel.findOne({ where: { id: homeTeamId } });
  //   const awayTeam = await this.teamsModel.findOne({ where: { id: awayTeamId } });
  //   if (!homeTeam || !awayTeam) {
  //     throw new CustomError('There is no team with such id!', '404');
  //   }

  //   const creatingMatch = await this.matchesModel.create({
  //     homeTeamId, awayTeamId, homeTeamGoals, awayTeamGoals, inProgress: true });
  //   return creatingMatch;
  // }
}
