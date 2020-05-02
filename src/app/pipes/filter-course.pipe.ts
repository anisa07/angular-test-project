import { Pipe, PipeTransform } from '@angular/core';
import CourseModel from '@courses/shared/models/course.interface';

@Pipe({
  name: 'filterCourse'
})
export class FilterCoursePipe implements PipeTransform {

  public transform(value: Array<CourseModel>, searched: string): Array<CourseModel> {
    if (!searched) {
      return value;
    }
    return value.filter(course => course.title.toLowerCase().includes(searched));
  }
}
