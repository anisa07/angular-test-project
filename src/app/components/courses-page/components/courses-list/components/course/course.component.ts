import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import CourseInterface from '@courses/shared/interfaces/course.interface';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnChanges, OnInit {
  @Input() public course: CourseInterface;
  @Output() public deleteCourse = new EventEmitter<string>();

  public delete(id: string): void {
    this.deleteCourse.emit(id);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    console.log('OnChanges');
  }

  public ngOnInit(): void {
    console.log('OnInit Course');
  }
}
