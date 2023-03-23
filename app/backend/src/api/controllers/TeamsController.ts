import { Request, Response } from 'express';
import TeamsService from '../services/TeamsService';

export default class TeamsController {
  private _teamsService: TeamsService;
  constructor(teamsService: TeamsService = new TeamsService()) {
    this._teamsService = teamsService;
  }

  async getAll(_req: Request, res: Response) {
    const allTeams = await this._teamsService.getAll();
    res.status(200).json(allTeams);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const team = await this._teamsService.findById(+id);
    res.status(200).json(team);
  }
}
