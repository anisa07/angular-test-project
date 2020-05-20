import {
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import CourseInterface from '@courses/shared/interfaces/course.interface';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent {
  @Input() public coursesList: Array<CourseInterface> = [];
  @Input() public showLoadMore: boolean;
  @Output() public deleteCourse = new EventEmitter<string>();
  @Output() public editCourse = new EventEmitter<string>();
  @Output() public loadMore = new EventEmitter<void>();

  constructor() { }

  public onDeleteCourse(id: string): void {
    this.deleteCourse.emit(id);
  }

  public trackByFun(index, item): string {
    return `${index}-${item.id}`;
  }
}
