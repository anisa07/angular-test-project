import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
// @ts-ignore
import CourseModel from '@courses/shared/models/course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnChanges, OnInit {
  @Input() private course: CourseModel;
  @Output() private deleteCourse = new EventEmitter<string>();
  private date: string;

  private delete(id: string) {
    this.deleteCourse.emit(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('OnChanges');
    // tslint:disable-next-line:max-line-length
    this.date = `${this.course.creationDate.getDate()}/${this.course.creationDate.getMonth() + 1}/${this.course.creationDate.getFullYear()}`;
  }

  ngOnInit(): void {
    console.log('OnInit Course');
  }
}
