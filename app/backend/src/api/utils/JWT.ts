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

// const validateToken = (token: string) => {
//   try {
//     const decoded = jwt.verify(token, TOKEN_SECRET);
//     return decoded;
//   } catch (error) {
//     return { type: 401, message: 'Invalid token' };
//   }
// };

export default { createToken };
