import { Router, Request, Response, NextFunction } from 'express';
import LoginController from '../controllers/LoginController';
import verifyUserInput from '../middlewares/LoginValidation';
import TokenValidation from '../middlewares/TokenValidation';
import LoginService from '../services/LoginService';

const router = Router();

const loginService = new LoginService();
const loginController = new LoginController(loginService);

router.post(
  '/',
  verifyUserInput,
  (req: Request, res: Response) => loginController.loggin(req, res),
);
router.get(
  '/role',
  TokenValidation.tokenValidation,
  (req: Request, res: Response, next: NextFunction) => loginController.role(req, res, next),
);

export default router;
