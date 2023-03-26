import { NextFunction, Request, Response } from 'express';
import LoginService from '../services/LoginService';
// import CustomError from '../utils/CustomError';
// import TeamsService from '../services/TeamsService';

export default class LoginController {
  private _loginService: LoginService;
  constructor(loginService: LoginService = new LoginService()) {
    this._loginService = loginService;
  }

  async loggin(req: Request, res: Response) {
    const { email, password } = req.body;
    const token = await this._loginService.login(email, password);
    res.status(200).json({ token });
  }

  // async role(req: Request, res: Response) {
  //   const { authorization: token } = req.headers;
  //   if (!token) throw new CustomError('Token not found', '401');
  //   const getRole = await this._loginService.role(token);
  //   res.status(200).json({ role: getRole });
  // }
  async role(req: Request, res: Response, next: NextFunction) {
    // const { authorization } = req.headers;
    try {
      const { email } = req.body.user;
      const role = await this._loginService.role(email);
      return res.status(200).json({ role });
    } catch (error) {
      next(error);
    }
  }
}
