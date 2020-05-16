import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import CourseInterface from '@courses/shared/interfaces/course.interface';
import { FilterCoursesByQueryPipe} from '@pipes/filter-courses-by-query.pipe';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [ FilterCoursesByQueryPipe ]
})
export class CoursesListComponent {
  @Input() public coursesList: Array<CourseInterface> = [];
  @Input() public searchQuery: string;
  @Output() public deleteCourse = new EventEmitter<string>();

  constructor(private filterCoursesByQueryPipe: FilterCoursesByQueryPipe) { }

  public onDeleteCourse(id: string): void {
    this.deleteCourse.emit(id);
  }

  public handleLoadMore(): void {
    console.log('Load More');
  }

  public trackByFun(index, item): string {
    return `${index}-${item.id}`;
  }

  public get filteredCoursesList(): Array<CourseInterface> {
    return  this.filterCoursesByQueryPipe.transform(this.coursesList, this.searchQuery);
  }
}
