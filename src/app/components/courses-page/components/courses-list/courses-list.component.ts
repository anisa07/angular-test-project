import {
  Component,
  DoCheck,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
// @ts-ignore
import Course from '@courses/shared/models/course.class';
// @ts-ignore
import { FilterCoursesByQueryPipe} from '@pipes/filter-courses-by-query.pipe';
import { CoursesService} from '@app/services/courses.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [ FilterCoursesByQueryPipe ]
})
export class CoursesListComponent implements DoCheck {
  public coursesList: Array<Course> = [];
  @Input() public searchedCourseTitle: string;
  @Output() public deleteCourse = new EventEmitter<string>();

  constructor(private filterCoursesByQueryPipe: FilterCoursesByQueryPipe,
              private coursesService: CoursesService
  ) {

  }

  public ngDoCheck(): void {
   this.updateCourseList();
  }

  public shouldDeleteCourse(id: string): void {
    this.deleteCourse.emit(id);
  }

  public handleLoadMore(): void {
    console.log('Load More');
  }

  public trackByFun(index, item): string {
    return `${index}-${item.id}`;
  }

  private updateCourseList(): void {
    this.coursesList = this.filterCoursesByQueryPipe.transform(this.coursesService.getCourses(), this.searchedCourseTitle);
  }
}
