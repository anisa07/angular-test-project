import { Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-delete-course-modal-content',
  templateUrl: './delete-course-modal-content.component.html',
  styleUrls: ['./delete-course-modal-content.component.scss']
})
export class DeleteCourseModalContentComponent {
  @Output() public deleteCourse = new EventEmitter<void>();
  @Output() public cancelDeleteCourse = new EventEmitter<void>();
}
