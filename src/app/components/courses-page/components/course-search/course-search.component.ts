import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent {
  public searchLine = '';
  @Output() public searchCourse = new EventEmitter<string>();

  private handleSearch(): void {
    const value = this.searchLine ? this.searchLine.trim().toLowerCase() : '';
    this.searchCourse.emit(value);
  }
}
