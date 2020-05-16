import { Component, OnInit } from '@angular/core';
import { CoursesService } from '@app/services/courses.service';
import { ActivatedRoute, Router } from '@angular/router';
import CourseInterface from '@courses/shared/interfaces/course.interface';
import { BreadcrumbsService} from '@app/services/breadcrumbs.service';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course-page.component.html',
  styleUrls: ['./edit-course-page.component.scss']
})
export class EditCoursePageComponent implements OnInit {
  public course: CourseInterface;
  private courseId: string;

  constructor(private coursesService: CoursesService,
              private route: ActivatedRoute,
              private router: Router,
              private breadcrumbsService: BreadcrumbsService) { }

  public ngOnInit(): void {
    this.courseId = this.route.snapshot.paramMap.get('id');
    this.course = { ...this.coursesService.getCourseById(this.courseId) };
  }

  public updateCourse(): void {
    this.course.creationDate = new Date(this.course.creationDate);
    this.coursesService.updateCourse(this.course);
    this.router.navigate(['/courses']);
    this.breadcrumbsService.removeBreadcrumbs('Courses');
  }

  public cancelUpdate(): void {
    this.router.navigate(['/courses']);
  }
}
