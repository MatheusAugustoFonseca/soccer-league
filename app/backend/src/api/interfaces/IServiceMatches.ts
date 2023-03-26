import IMatches from './IMatches';

export default interface IServiceMatches {
  getAll(): Promise<IMatches[]>;
  byProgress(query: string): Promise<IMatches[]>
  finishingMatch(id: number): Promise<void>
  updateMatch(id: number, homeTeamGoals: number, awayTeamGoals: number): Promise<void>;
}
