import { ModelStatic } from 'sequelize';
import Teams from '../../database/models/TeamModel';
import IServiceTeams from '../interfaces/IServiceTeams';
import ITeams from '../interfaces/ITeams';

export default class TeamsService implements IServiceTeams {
  protected teamsModel: ModelStatic<Teams> = Teams;

  async getAll(): Promise<ITeams[]> {
    // throw new Error('Method not implemented.');
    return this.teamsModel.findAll();
  }
}
