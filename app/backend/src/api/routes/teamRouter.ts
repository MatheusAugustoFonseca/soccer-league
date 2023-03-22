import { Router, Request, Response } from 'express';
import TeamsController from '../controllers/TeamsController';
import TeamsService from '../services/TeamsService';

const router = Router();

const teamsService = new TeamsService();
const teamsController = new TeamsController(teamsService);

router.get('/', (req: Request, res: Response) => teamsController.getAll(req, res));

export default router;
