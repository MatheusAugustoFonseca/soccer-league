import 'express-async-errors';
import * as express from 'express';
import teamRouter from './api/routes/teamRouter';
import loginRouter from './api/routes/loginRouter';
import matchesRouter from './api/routes/matchesRouter';
import leaderboardRouter from './api/routes/leaderboardRouter';
import ErrorHandler from './api/middlewares/ErrorHandler';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use('/teams', teamRouter);
    this.app.use('/login', loginRouter);
    this.app.use('/matches', matchesRouter);
    this.app.use('/leaderboard', leaderboardRouter);
    this.app.use(ErrorHandler.handle);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
