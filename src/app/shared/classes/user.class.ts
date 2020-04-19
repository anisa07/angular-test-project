import UserInterface from '../interfaces/user.interface';

export default class User implements UserInterface {
  id: string;
  firstName: string;
  lastName: string;

  constructor({id, firstName, lastName}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
