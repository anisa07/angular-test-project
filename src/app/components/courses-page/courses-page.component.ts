import { Component, OnInit } from '@angular/core';
import { CoursesService } from '@app/services/courses.service';
import CourseInterface from '@courses/shared/interfaces/course.interface';
import { Router} from '@angular/router';
import { BreadcrumbsService } from '@app/services/breadcrumbs.service';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent implements OnInit {
  public coursesList: Array<CourseInterface> = [];
  public searchQuery: string;
  public showDeleteModal: boolean;
  public showLoadMore = true;
  private courseId: string;
  private currentPage = 0;

  constructor(private coursesService: CoursesService, private router: Router, private breadcrumbsService: BreadcrumbsService) {
  }

  public onSearchCourseByQuery(query: string): void {
    if (this.searchQuery !== query) {
      this.coursesList = [];
      this.searchQuery = query;
      this.currentPage = 0;
      this.showLoadMore = true;
    }

    this.loadCourses();
  }

  public showDeleteCourseModal(id: string): void {
    this.courseId = id;
    this.toggleModal();
  }

  public deleteCourseById(): void {
    this.coursesService.deleteCourse(this.courseId);
    // this.coursesList = this.coursesService.getCourses();
    this.toggleModal();
  }

  public addCourse(): void {
    this.breadcrumbsService.updateBreadcrumbsLink(this.breadcrumbsService.getBreadcrumbs.length - 1, '/courses');
    this.router.navigate(['/courses/new']);
  }

  public editCourse(id: string): void {
    this.breadcrumbsService.addBreadcrumbs({
      name: this.coursesService.getCourseById(id).name
    }, '/courses');
    this.router.navigate([`/courses/${id}`]);
  }

  public loadMoreCourses(): void {
    this.loadCourses();
  }

  public ngOnInit(): void {
    this.loadCourses();
  }

  private toggleModal(): void {
    this.showDeleteModal = !this.showDeleteModal;
  }

  private loadCourses(): void {
    if (this.showLoadMore) {
      this.coursesService.loadCourses(this.currentPage, this.searchQuery).subscribe(coursesData => {
        this.currentPage++;
        this.coursesList = [...this.coursesList, ...coursesData.courses];
        this.showLoadMore = this.coursesList.length !== coursesData.allLength;
      });
    }
  }
}
