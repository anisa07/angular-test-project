import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

const MILLISECONDS_IN_14_DAYS = 3600000 * 24 * 14;

@Directive({
  selector: '[appCourseBorder]'
})
export class CourseBorderDirective implements OnChanges {
  @Input('appCourseBorder') public creationDate: Date;

  constructor(private element: ElementRef) {
  }

  public ngOnChanges(): void {
    const date = new Date(this.creationDate);
    const courseDate = date.getTime();
    const currentDate = Date.now();
    if (courseDate < currentDate && courseDate >= currentDate - MILLISECONDS_IN_14_DAYS) {
      this.element.nativeElement.style.boxShadow = '10px 10px 10px #32cd32';
      this.element.nativeElement.style.border = '2px solid #7cfc00';
    }
    if (courseDate > currentDate) {
      this.element.nativeElement.style.boxShadow = '10px 10px 10px #4d4dff';
      this.element.nativeElement.style.border = '2px solid #120a8f';
    }
  }
}
