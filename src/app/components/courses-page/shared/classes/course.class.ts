import CourseModel from '../models/course.interface';

export default class Course implements CourseModel {
  id: string;
  duration: number;
  creationDate: Date;
  description: string;
  title: string;

  constructor({id, duration, creationDate, description, title}: CourseModel) {
    this.id = id;
    this.duration = duration;
    this.creationDate = creationDate;
    this.description = description;
    this.title = title;
  }
}
