import { Request, Response } from 'express';
import LoginService from '../services/LoginService';
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
}
