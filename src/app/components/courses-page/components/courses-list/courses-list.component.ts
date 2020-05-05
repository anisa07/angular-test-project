import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  Input, OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';
// @ts-ignore
import Course from '@courses/shared/classes/course.class';
// @ts-ignore
import { FilterCoursesByQueryPipe } from '@pipes/filter-courses-by-query.pipe';

import { coursesList } from './courses-list.data';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [ FilterCoursesByQueryPipe ]
})
export class CoursesListComponent implements OnInit, OnChanges, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  public coursesList: Array<Course> = [];
  @Input() public searchedCourse: string;

  public onDeleteCourse(id): void {
    console.log(`${id} will be deleted`);
  }

  public handleLoadMore(): void {
    console.log('Load More');
  }

  constructor(private filterCoursesByQueryPipe: FilterCoursesByQueryPipe) {
    console.log('Constructor');
  }

  public ngOnInit(): void {
    console.log('OnInit List');
  }

  public ngOnChanges(): void {
    this.coursesList = this.filterCoursesByQueryPipe.transform(coursesList, this.searchedCourse);
    console.log('OnChanges');
  }

  public ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  public ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  public ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  public ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

  public ngOnDestroy(): void {
    console.log('Destroy');
  }

  public trackByFun(index, item): string {
    return `${index}-${item.id}`;
  }
}
