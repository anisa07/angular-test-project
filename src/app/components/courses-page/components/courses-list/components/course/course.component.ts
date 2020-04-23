import { Component, EventEmitter, Input, Output } from '@angular/core';
import CourseModel from '../../../../shared/models/course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent {
  @Input() course: CourseModel;
  @Output() deleteCourse = new EventEmitter<string>();

  delete(id: string) {
    this.deleteCourse.emit(id);
  }
}
