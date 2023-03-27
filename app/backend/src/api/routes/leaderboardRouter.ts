import { Router, Request, Response } from 'express';
import LeaderboardController from '../controllers/LeaderboardController';
import LeaderboardService from '../services/LeaderboardService';

const router = Router();

const leaderboardService = new LeaderboardService();
const leaderboardController = new LeaderboardController(leaderboardService);

router.get('/home', (req: Request, res: Response) =>
  leaderboardController.getLeaderboard(req, res));

router.get('/away', (req: Request, res: Response) =>
  leaderboardController.getAwayLeaderboard(req, res));

export default router;
