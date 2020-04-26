import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
// @ts-ignore
import CourseModel from '@courses/shared/models/course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnChanges, OnInit {
  @Input() course: CourseModel;
  @Output() deleteCourse = new EventEmitter<string>();
  date: string;

  delete(id: string) {
    this.deleteCourse.emit(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('OnChanges');
  }

  ngOnInit(): void {
    this.date = `${this.course.creationDate.getDate()}/${this.course.creationDate.getMonth() + 1}/${this.course.creationDate.getFullYear()}`;
    console.log('OnInit Course');
  }
}
