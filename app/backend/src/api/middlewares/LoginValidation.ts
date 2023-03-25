import { NextFunction, Request, Response } from 'express';

const verifyUserInput = async (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!password || !email) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  next();
};

// const verifyPassword = async () => {

// }

export default verifyUserInput;
