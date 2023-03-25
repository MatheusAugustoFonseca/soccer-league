import { Router, Request, Response } from 'express';
import LoginController from '../controllers/LoginController';
import verifyUserInput from '../middlewares/LoginValidation';
import LoginService from '../services/LoginService';

const router = Router();

const loginService = new LoginService();
const loginController = new LoginController(loginService);

router.post(
  '/',
  verifyUserInput,
  (req: Request, res: Response) => loginController.loggin(req, res),
);

export default router;
