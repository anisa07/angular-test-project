import CourseInterface from '../interfaces/course.interface';

export default class Course implements CourseInterface {
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
