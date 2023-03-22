// import Teams from 'src/database/models/Teams';

import ITeams from './ITeams';

export default interface IServiceTeams {
  getAll(): Promise<ITeams[]>
}
