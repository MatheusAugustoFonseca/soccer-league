import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  private _matchesService: MatchesService;
  constructor(matchesService: MatchesService = new MatchesService()) {
    this._matchesService = matchesService;
  }

  async getAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    // console.log(inProgress);
    if (inProgress) {
      const filtered = await this._matchesService.byProgress(inProgress.toString());
      // console.log(filtered);
      return res.status(200).json(filtered);
    }
    const allMatches = await this._matchesService.getAll();
    return res.status(200).json(allMatches);
  }

  async finishingMatch(req: Request, res: Response) {
    const { id } = req.params;
    await this._matchesService.finishingMatch(+id);
    return res.status(200).json({ message: 'Finished' });
  }

  async updateMatch(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    console.log(typeof homeTeamGoals, 'bofore await homeTeamGoals');
    await this._matchesService.updateMatch(+id, homeTeamGoals, awayTeamGoals);
    console.log(typeof id, 'typeOOOOOOOOF');
    console.log(typeof homeTeamGoals, 'homeTeamGoals');

    return res.status(200).json({ message: 'Updated' });
  }
}
