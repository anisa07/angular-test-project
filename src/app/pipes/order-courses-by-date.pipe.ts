import { Pipe, PipeTransform } from '@angular/core';
import CourseModel from '@courses/shared/models/course.interface';

@Pipe({
  name: 'orderCoursesByDate'
})
export class OrderCoursesByDatePipe implements PipeTransform {

  public transform(value: Array<CourseModel>): Array<CourseModel> {
    return value.sort((item1, item2) =>
      item1.creationDate.getTime() - item2.creationDate.getTime());
  }

}
