import { Pipe, PipeTransform } from '@angular/core';
import CourseInterface from '@courses/shared/interfaces/course.interface';

@Pipe({
  name: 'orderCoursesByDate'
})
export class OrderCoursesByDatePipe implements PipeTransform {

  public transform(value: Array<CourseInterface>): Array<CourseInterface> {
    return value.sort((item1, item2) => {
        const date1 = new Date(item1.date);
        const date2 = new Date(item2.date);
        return date1.getTime() - date2.getTime();
    });
  }

}
