import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import CourseModel from '../../../../shared/models/course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnChanges, OnInit {
  @Input() course: CourseModel;
  @Output() deleteCourse = new EventEmitter<string>();

  delete(id: string) {
    this.deleteCourse.emit(id);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('OnChanges');
  }

  ngOnInit(): void {
    console.log('OnInit Course');
  }
}
