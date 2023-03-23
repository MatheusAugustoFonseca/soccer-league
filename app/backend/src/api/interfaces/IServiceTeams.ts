import Teams from '../../database/models/TeamModel';
import ITeams from './ITeams';

export default interface IServiceTeams {
  getAll(): Promise<ITeams[]>;
  findById(id: number): Promise<Teams | null>;
}
