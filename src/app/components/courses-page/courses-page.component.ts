import { Component } from '@angular/core';

@Component({
  selector: 'app-courses-page',
  templateUrl: './courses-page.component.html',
  styleUrls: ['./courses-page.component.scss']
})
export class CoursesPageComponent {
  public searchedCourseTitle: string;
  public onSearchCourseByTitle(name: string): void {
    this.searchedCourseTitle = name;
  }
}
