import {UserInterface, CourseInterface} from './project.interfaces';

export class User implements UserInterface {
  id: string;
  firstName: string;
  lastName: string;

  constructor({id, firstName, lastName}) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

export class Course implements CourseInterface {
  id: string;
  duration: number;
  creationDate: Date;
  description: string;
  title: string;

  constructor({id, duration, creationDate, description, title}) {
    this.id = id;
    this.duration = duration;
    this.creationDate = creationDate;
    this.description = description;
    this.title = title;
  }
}
