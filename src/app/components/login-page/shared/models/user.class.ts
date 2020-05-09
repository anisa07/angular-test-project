import UserInterface from '../interfaces/user.interface';

export default class UserModel implements UserInterface {
  public userName: string;
  public password: string;

  constructor({ userName, password}: UserInterface) {
    this.userName = userName;
    this.password = password;
  }
}
