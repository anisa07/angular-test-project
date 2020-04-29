import UserModel from '../models/user.interface';

export default class User implements UserModel {
  public id: string;
  public firstName: string;
  public lastName: string;

  constructor({id, firstName, lastName}: UserModel) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
