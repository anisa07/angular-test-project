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
  private coursesList: Array<Course> = [];

  onDeleteCourse(id): void {
    console.log(`${id} will be deleted`);
  }

  handleLoadMore(): void {
    console.log('Load More');
  }

  constructor() {
    console.log('Constructor');
  }

  ngOnInit(): void {
    this.coursesList = coursesList;
    console.log('OnInit List');
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('Destroy');
  }

  trackByFun(index, item): string {
    return `${index}-${item.id}`;
  }
}
