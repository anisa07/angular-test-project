import { Component, EventEmitter, Input, Output } from '@angular/core';
import CourseInterface from '@courses/shared/interfaces/course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input() public course: CourseInterface;
  @Output() public deleteCourse = new EventEmitter<string>();
  @Output() public editCourse = new EventEmitter<string>();

  public delete(id: string): void {
    this.deleteCourse.emit(id);
  }
}
