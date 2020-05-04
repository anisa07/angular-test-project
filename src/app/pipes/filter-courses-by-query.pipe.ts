import { Pipe, PipeTransform } from '@angular/core';
import Course from '@courses/shared/classes/course.class';

@Pipe({
  name: 'filterCoursesByQuery'
})
export class FilterCoursesByQueryPipe implements PipeTransform {

  public transform(value: Array<Course>, searchQuery: string): Array<Course> {
    if (!searchQuery) {
      return value;
    }
    return value.filter(course => course.title.toLowerCase().includes(searchQuery.trim().toLowerCase()));
  }
}
