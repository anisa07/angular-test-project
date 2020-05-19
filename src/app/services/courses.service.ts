import { Injectable } from '@angular/core';
// import { coursesList } from '../data/courses-list.data';
import CourseInterface from '@courses/shared/interfaces/course.interface';
import { courseNamePerPage, apiURL } from '../../config';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  public coursesList: Array<CourseInterface> = [];


  constructor(private http: HttpClient) { }

  public loadCourses(currentPage, textFragment?): Observable<{ courses: Array<CourseInterface>, allLength: number }> {
    let url = `${apiURL}/courses?start=${currentPage === 0 ? currentPage + courseNamePerPage : 0 }&count=${courseNamePerPage}`;
    if (textFragment) {
      url += `&textFragment=${textFragment}`;
    }

    return this.http.get(url).pipe(
      map((res: { courses: Array<CourseInterface>, allLength: number }) =>  res)
    );
  }

  public addCourse(course: CourseInterface): void {
    this.coursesList.push(course);
  }

  public getCourseById(id: string): CourseInterface {
    return this.coursesList.find(item => item.id === id);
  }

  public updateCourse(updatedCourse: CourseInterface): void {
    this.deleteCourse(updatedCourse.id);
    this.addCourse(updatedCourse);
  }

  public deleteCourse(id: string): void {
    this.coursesList = this.coursesList.filter(item => item.id !== id);
  }
}
