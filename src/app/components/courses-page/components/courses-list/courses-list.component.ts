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
  coursesList: Array<Course> = [];

  onDeleteCourse(id) {
    console.log(`${id} will be deleted`);
  }

  handleLoadMore() {
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

  ngAfterContentInit() {
    console.log('AfterContentInit');
  }

  ngAfterContentChecked() {
    console.log('AfterContentChecked');
  }

  ngAfterViewInit() {
    console.log('AfterViewInit');
  }

  ngAfterViewChecked() {
    console.log('AfterViewChecked');
  }

  ngOnDestroy() {
    console.log('Destroy');
  }

  trackByFun(index, item) {
    return `${index}-${item.id}`;
  }
}
