import { Pipe, PipeTransform } from '@angular/core';
import Course from '@courses/shared/classes/course.class';

@Pipe({
  name: 'filterCourse'
})
export class FilterCoursePipe implements PipeTransform {

  public transform(value: Array<Course>, searched: string): Array<Course> {
    if (!searched) {
      return value;
    }
    return value.filter(course => course.title.toLowerCase().includes(searched));
  }
}
