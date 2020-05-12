import { Pipe, PipeTransform } from '@angular/core';
import CourseInterface from '@courses/shared/interfaces/course.interface';

@Pipe({
  name: 'orderCoursesByDate'
})
export class OrderCoursesByDatePipe implements PipeTransform {

  public transform(value: Array<CourseInterface>): Array<CourseInterface> {
    return value.sort((item1, item2) =>
      item1.creationDate.getTime() - item2.creationDate.getTime());
  }

}
