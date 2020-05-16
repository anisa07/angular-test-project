import { Injectable } from '@angular/core';
import { coursesList } from '../data/courses-list.data';
import CourseInterface from '@courses/shared/interfaces/course.interface';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  private coursesList: Array<CourseInterface> = coursesList;

  public getCourses(): Array<CourseInterface> {
    return [...this.coursesList];
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
