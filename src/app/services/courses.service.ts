import { Injectable } from '@angular/core';
import { coursesList } from '../data/courses-list.data';
import Course from '@courses/shared/models/course.class';

@Injectable({
  providedIn: 'root'
})

export class CoursesService {
  private coursesList: Array<Course> = coursesList;

  public getCourses(): Array<Course> {
    return [...this.coursesList];
  }

  public addCourse(course: Course): void {
    this.coursesList.push(course);
  }

  public getCourseById(id: string): Course {
    return this.coursesList.find(item => item.id === id);
  }

  public updateCourse(course: Course): void {
    this.coursesList.forEach(item => {
      if (item.id === course.id) {
        item = course;
      }
    });
  }

  public deleteCourse(id: string): void {
    this.coursesList = this.coursesList.filter(item => item.id !== id);
  }
}
