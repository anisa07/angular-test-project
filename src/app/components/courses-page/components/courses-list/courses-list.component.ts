import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck, Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
// @ts-ignore
import Course from '@courses/shared/classes/course.class';
// @ts-ignore
import { FilterCoursePipe } from '@pipes/filter-course.pipe';

import { coursesList } from './courses-list.data';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
  providers: [ FilterCoursePipe ]
})
export class CoursesListComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  public coursesList: Array<Course> = [];
  @Input() public searchedCourse: string;

  public get noCourses(): boolean {
    return !this.coursesList.length;
  }

  public onDeleteCourse(id): void {
    console.log(`${id} will be deleted`);
  }

  public handleLoadMore(): void {
    console.log('Load More');
  }

  constructor(private filterCoursePipe: FilterCoursePipe) {
    console.log('Constructor');
  }

  public ngOnInit(): void {
    console.log('OnInit List');
  }

  public ngDoCheck(): void {
    this.coursesList = this.filterCoursePipe.transform(coursesList, this.searchedCourse);
    console.log('DoCheck');
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
