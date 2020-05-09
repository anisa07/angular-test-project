import CourseInterface from '../interfaces/course.interface';

export default class CourseModel implements CourseInterface {
  public id: string;
  public duration: number;
  public creationDate: Date;
  public description: string;
  public title: string;
  public topRated: boolean;

  constructor({ id, duration, creationDate, description, title, topRated}: CourseInterface) {
    this.id = id;
    this.duration = duration;
    this.creationDate = creationDate;
    this.description = description;
    this.title = title;
    this.topRated = topRated;
  }
}
