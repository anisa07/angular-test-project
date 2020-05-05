import CourseModel from '../models/course.interface';

export default class Course implements CourseModel {
  public id: string;
  public duration: number;
  public creationDate: Date;
  public description: string;
  public title: string;
  public topRated: boolean;

  constructor({id, duration, creationDate, description, title, topRated}: CourseModel) {
    this.id = id;
    this.duration = duration;
    this.creationDate = creationDate;
    this.description = description;
    this.title = title;
    this.topRated = topRated;
  }
}
