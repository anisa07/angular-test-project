import { Component } from '@angular/core';
import { CoursesService} from '@app/services/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent {
  public searchedCourseQuery: string;
  public showDeleteModal: boolean;
  private courseId: string;

  constructor(private coursesService: CoursesService) {
  }

  public onSearchCourseByTitle(name: string): void {
    this.searchedCourseQuery = name;
  }

  public onShowDeleteCourseModal(id: string): void {
    this.courseId = id;
    this.toggleModal();
  }

  public deleteCourseById(): void {
    this.coursesService.deleteCourse(this.courseId);
    this.toggleModal();
  }

  private toggleModal(): void {
    this.showDeleteModal = !this.showDeleteModal;
  }
}
