// import UsersModel from '../../database/models/UsersModel';

// export default interface IServiceLogin {
//   login(email: string, password: string): Promise<UsersModel> | void;
// }
export default interface IServiceLogin {
  login(email: string, password: string): void;
}
