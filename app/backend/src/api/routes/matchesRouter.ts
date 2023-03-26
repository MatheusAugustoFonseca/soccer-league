import { Router, Request, Response, NextFunction } from 'express';
import MatchesController from '../controllers/MatchesController';
import TokenValidation from '../middlewares/TokenValidation';
import MatchesService from '../services/MatchesService';

const router = Router();

const matchesService = new MatchesService();
const matchesController = new MatchesController(matchesService);

router.get('/', (req: Request, res: Response) => matchesController.getAll(req, res));

router.patch(
  '/:id/finish',
  TokenValidation.tokenValidation,
  (req: Request, res: Response) =>
    matchesController.finishingMatch(req, res),
);

router.patch(
  '/:id',
  (req: Request, res: Response, next: NextFunction) =>
    TokenValidation.tokenValidation(req, res, next),
  (req: Request, res: Response) =>
    matchesController.updateMatch(req, res),
);

// router.post(
//   '/',
//   (req: Request, res: Response, next: NextFunction) =>
//     TokenValidation.tokenValidation(req, res, next),
//   (req: Request, res: Response) => matchesController.createMatch(req, res),
// );
router.post(
  '/',
  TokenValidation.tokenValidation,
  (req: Request, res: Response) => matchesController.createMatch(req, res),
);

export default router;
