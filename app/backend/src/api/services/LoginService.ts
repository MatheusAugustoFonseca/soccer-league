import { ModelStatic } from 'sequelize';
import * as bcrypt from 'bcryptjs';
import Users from '../../database/models/UsersModel';
import IServiceLogin from '../interfaces/IServiceLogin';
import JWT from '../utils/JWT';
import CustomError from '../utils/CustomError';
import checkLogin from '../utils/joi/validateJoi';

export default class LoginService implements IServiceLogin {
  public model: ModelStatic<Users> = Users;
  async login(email: string, password: string) {
    checkLogin(email, password);
    const userOn = await this.model.findOne({
      where: {
        email,
      },
    });
    if (!userOn) {
      throw new CustomError('Invalid email or password', '401');
    }
    const validPassword = bcrypt.compareSync(password, userOn.password);
    if (!validPassword) {
      throw new CustomError('Invalid email or password', '401');
    }
    console.log(userOn);
    // console.log(email, password);

    return JWT.createToken(userOn.email);
  }
}
