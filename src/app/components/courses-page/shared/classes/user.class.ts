import UserModel from '../models/user.interface';

export default class User implements UserModel {
  id: string;
  firstName: string;
  lastName: string;

  constructor({id, firstName, lastName}: UserModel) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
