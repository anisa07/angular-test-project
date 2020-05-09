import { Pipe, PipeTransform } from '@angular/core';
import CourseModel from '@courses/shared/models/course.class';

@Pipe({
  name: 'filterCoursesByQuery'
})
export class FilterCoursesByQueryPipe implements PipeTransform {

  public transform(value: Array<CourseModel>, searchedCourseTitle: string): Array<CourseModel> {
    if (!searchedCourseTitle) {
      return value;
    }
    return value.filter(course => course.title.toLowerCase().includes(searchedCourseTitle.trim().toLowerCase()));
  }
}
