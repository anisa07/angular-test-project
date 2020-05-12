import { Pipe, PipeTransform } from '@angular/core';
import CourseInterface from '@courses/shared/interfaces/course.interface';

@Pipe({
  name: 'filterCoursesByQuery'
})
export class FilterCoursesByQueryPipe implements PipeTransform {

  public transform(value: Array<CourseInterface>, searchedQuery: string): Array<CourseInterface> {
    if (!searchedQuery) {
      return value;
    }
    return value.filter(course => course.title.toLowerCase().includes(searchedQuery.trim().toLowerCase()));
  }
}
