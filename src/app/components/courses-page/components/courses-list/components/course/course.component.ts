import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
// @ts-ignore
import CourseModel from '@courses/shared/models/course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnChanges, OnInit {
  @Input() public course: CourseModel;
  @Output() public deleteCourse = new EventEmitter<string>();

  public delete(id: string): void {
    this.deleteCourse.emit(id);
  }

  public get date(): string {
    return `${this.course.creationDate.getDate()}/${this.course.creationDate.getMonth() + 1}/${this.course.creationDate.getFullYear()}`;
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('OnChanges');
  }

  public ngOnInit(): void {
    console.log('OnInit Course');
  }
}
