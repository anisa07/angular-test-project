import {
  Component,
  Input,
  OnChanges
} from '@angular/core';
// @ts-ignore
import Course from '@courses/shared/classes/course.class';
// @ts-ignore
import { FilterCoursesByQueryPipe } from '@pipes/filter-courses-by-query.pipe';
import {CoursesService} from '@app/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [ FilterCoursesByQueryPipe ]
})
export class CoursesListComponent implements OnChanges {
  public coursesList: Array<Course> = [];
  @Input() public searchedCourse: string;

  private getCourseList(): void {
    this.coursesList = this.filterCoursesByQueryPipe.transform(this.coursesService.getCourses(), this.searchedCourse);
  }

  public onDeleteCourse(id: string): void {
    const delCourse = confirm(`Do you want to delete this course?`);
    if (delCourse) {
      this.coursesService.deleteCourse(id);
      this.getCourseList();
    }
  }

  public handleLoadMore(): void {
    console.log('Load More');
  }

  constructor(private filterCoursesByQueryPipe: FilterCoursesByQueryPipe, private coursesService: CoursesService) {}

  public ngOnChanges(): void {
    this.getCourseList();
    console.log('OnChanges');
  }

  public trackByFun(index, item): string {
    return `${index}-${item.id}`;
  }
}
