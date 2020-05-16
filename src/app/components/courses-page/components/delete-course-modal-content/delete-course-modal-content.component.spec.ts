import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteCourseModalContentComponent } from './delete-course-modal-content.component';

describe('DeleteCourseModalContentComponent', () => {
  let component: DeleteCourseModalContentComponent;
  let fixture: ComponentFixture<DeleteCourseModalContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteCourseModalContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteCourseModalContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
