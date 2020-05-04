import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-course-search',
  templateUrl: './course-search.component.html',
  styleUrls: ['./course-search.component.scss']
})
export class CourseSearchComponent {
  public searchQuery = '';
  @Output() public searchCourse = new EventEmitter<string>();
}
