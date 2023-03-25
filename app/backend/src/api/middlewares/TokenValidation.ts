import { NextFunction, Request, Response } from 'express';
import jwt = require('jsonwebtoken');
import CustomError from '../utils/CustomError';
// import IToken from '../interfaces/IToken';

const TOKEN_SECRET = process.env.JWT_SECRET || 'jwt_secret';

// export default class TokenValidation {
//   public static tokenValidation = (req: Request, _res: Response, next: NextFunction) => {
//     const { authorization: token } = req.headers;
//     if (!token) {
//       throw new CustomError('Token not found', '401');
//     }

//     try {
//       const verifyToken = jwt.verify(token, TOKEN_SECRET);
//       req.body.user = verifyToken;
//     } catch (error) {
//       throw new CustomError('Token must be a valid token', '401');
//     }
//     next();
//   };
// }
export default class TokenValidation {
  public static tokenValidation(req: Request, _res: Response, next: NextFunction) {
    const { authorization: token } = req.headers;
    if (!token) {
      throw new CustomError('Token not found', '401');
    }

    try {
      const verifyToken = jwt.verify(token, TOKEN_SECRET);
      req.body = verifyToken;
    } catch (error) {
      throw new CustomError('Token must be a valid token', '401');
    }
    next();
  }
}
