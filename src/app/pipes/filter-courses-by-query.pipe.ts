import { Pipe, PipeTransform } from '@angular/core';
import CourseInterface from '@courses/shared/interfaces/course.interface';

@Pipe({
  name: 'filterCoursesByQuery'
})
export class FilterCoursesByQueryPipe implements PipeTransform {

  public transform(value: Array<CourseInterface>, searchedCourseTitle: string): Array<CourseInterface> {
    if (!searchedCourseTitle) {
      return value;
    }
    return value.filter(course => course.title.toLowerCase().includes(searchedCourseTitle.trim().toLowerCase()));
  }
}
