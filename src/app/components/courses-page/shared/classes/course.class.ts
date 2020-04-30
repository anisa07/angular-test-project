import CourseModel from '../models/course.interface';

export default class Course implements CourseModel {
  public id: string;
  public duration: number;
  public creationDate: Date;
  public description: string;
  public title: string;

  constructor({id, duration, creationDate, description, title}: CourseModel) {
    this.id = id;
    this.duration = duration;
    this.creationDate = creationDate;
    this.description = description;
    this.title = title;
  }
}
