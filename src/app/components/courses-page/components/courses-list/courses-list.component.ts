import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';
// @ts-ignore
import Course from '@courses/shared/classes/course.class';
import { coursesList } from './courses-list.data';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss']
})
export class CoursesListComponent implements OnInit, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy {
  public coursesList: Array<Course> = [];

  public onDeleteCourse(id): void {
    console.log(`${id} will be deleted`);
  }

  public handleLoadMore(): void {
    console.log('Load More');
  }

  constructor() {
    console.log('Constructor');
  }

  public ngOnInit(): void {
    this.coursesList = coursesList;
    console.log('OnInit List');
  }

  public ngDoCheck(): void {
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
