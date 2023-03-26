import { Router, Request, Response } from 'express';
import MatchesController from '../controllers/MatchesController';
import MatchesService from '../services/MatchesService';

const router = Router();

const matchesService = new MatchesService();
const matchesController = new MatchesController(matchesService);

router.get('/', (req: Request, res: Response) => matchesController.getAll(req, res));

export default router;