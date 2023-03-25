import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  private _matchesService: MatchesService;
  constructor(matchesService: MatchesService = new MatchesService()) {
    this._matchesService = matchesService;
  }

  async getAll(_req: Request, res: Response) {
    const allMatches = await this._matchesService.getAll();
    res.status(200).json(allMatches);
  }
}
