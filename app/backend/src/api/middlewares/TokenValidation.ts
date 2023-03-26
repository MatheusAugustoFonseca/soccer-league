import { NextFunction, Request, Response } from 'express';
import jwt = require('jsonwebtoken');
import CustomError from '../utils/CustomError';
// import { decodeToken } from '../utils/JWT';
// import IToken from '../interfaces/IToken';

const TOKEN_SECRET = process.env.JWT_SECRET || 'jwt_secret';

export default class TokenValidation {
  public static tokenValidation(req: Request, res: Response, next: NextFunction) {
    // const { authorization: token } = req.headers;
    const token = req.headers.authorization;
    if (!token) {
      throw new CustomError('Token not found', '401');
    }

    try {
      const verifyToken = jwt.verify(token, TOKEN_SECRET);
      // req.body = verifyToken;
      req.body.user = verifyToken;
      // res.locals.user = verifyToken;
      next();
    } catch (error) {
      throw new CustomError('Token must be a valid token', '401');
    }
  }

  // public static tokenValidation(req: Request, res: Response, next: NextFunction) {
  //   // const { authorization: token } = req.headers;
  //   try {
  //     const token = req.headers.authorization;
  //     if (!token) {
  //       throw new CustomError('Token not found', '401');
  //     }
  //     const verifyToken = decodeToken(token);
  //     req.body = verifyToken;
  //     // req.body.user = verifyToken;
  //     // res.locals.user = verifyToken;
  //     next();
  //   } catch (error) {
  //     throw new CustomError('Token must be a valid token', '401');
  //   }
  // }
}
