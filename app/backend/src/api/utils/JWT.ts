import jwt = require('jsonwebtoken');
// import IToken from '../interfaces/IToken';

const TOKEN_SECRET = process.env.JWT_SECRET || 'jwt_secret';

const jwtConfig: jwt.SignOptions = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const createToken = (email: string) => {
  const token = jwt.sign({ email }, TOKEN_SECRET, jwtConfig);
  return token;
};

const decodeToken = (token: string) => jwt.verify(token, TOKEN_SECRET);

export { createToken, decodeToken };
