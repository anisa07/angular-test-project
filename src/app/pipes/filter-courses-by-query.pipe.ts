import { Pipe, PipeTransform } from '@angular/core';
import CourseInterface from '@courses/shared/interfaces/course.interface';

@Pipe({
  name: 'filterCoursesByQuery'
})
export class FilterCoursesByQueryPipe implements PipeTransform {

  public transform(value: Array<CourseInterface>, searchQuery: string): Array<CourseInterface> {
    if (!searchQuery) {
      return value;
    }
    return value.filter(course => course.title.toLowerCase().includes(searchQuery.trim().toLowerCase()));
  }
}
