import CustomError from '../CustomError';
import loginSchema from './loginSchema';

const checkLogin = (email: string, password: string) => {
  const { error } = loginSchema.validate({ email, password });
  if (error) {
    throw new CustomError('Invalid email or password', '401');
  }
};

export default checkLogin;
