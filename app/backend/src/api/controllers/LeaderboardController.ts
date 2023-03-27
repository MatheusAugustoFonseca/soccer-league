import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  private _service: LeaderboardService;
  constructor(service: LeaderboardService) {
    this._service = service;
  }

  async getLeaderboard(_req: Request, res: Response) {
    const results = await this._service.getLeaderboard();
    return res.status(200).json(results);
  }

  async getAwayLeaderboard(_req: Request, res: Response) {
    const results = await this._service.getAwayLeaderboard();
    return res.status(200).json(results);
  }
}
