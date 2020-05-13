import { Component } from '@angular/core';
import { CoursesService} from '@app/services/courses.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent {
  public searchQuery: string;
  public showDeleteModal: boolean;
  private courseId: string;

  constructor(private coursesService: CoursesService) {
  }

  public onSearchCourseByQuery(query: string): void {
    this.searchQuery = query;
  }

  public showDeleteCourseModal(id: string): void {
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
