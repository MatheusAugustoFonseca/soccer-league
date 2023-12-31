import { NextFunction, Request, Response } from 'express';

export default class ErrorHandler {
  public static handle(err: Error, _req: Request, res: Response, _next: NextFunction): Response {
    if (err instanceof Error && err.stack) {
      return res.status(+err.stack).json({ message: err.message });
    }
    return res.status(500).json({ message: 'erro não identificado' });
  }
}
