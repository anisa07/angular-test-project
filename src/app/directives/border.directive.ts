import {Directive, ElementRef, Input, OnChanges, SimpleChanges} from '@angular/core';

@Directive({
  selector: '[appBorder]'
})
export class BorderDirective implements OnChanges {
  @Input('appBorder') public creationDate: Date;

  constructor(private element: ElementRef) {
  }

  public ngOnChanges(): void {
    const courseDate = this.creationDate.getTime();
    const currentDate = Date.now();
    const fourteenDays = 3600000 * 24 * 14;
    if (courseDate < currentDate && courseDate >= currentDate - fourteenDays) {
      this.element.nativeElement.style.boxShadow = '10px 10px 10px #32cd32';
      this.element.nativeElement.style.border = '2px solid #7cfc00';
    }
    if (courseDate > currentDate) {
      this.element.nativeElement.style.boxShadow = '10px 10px 10px #4d4dff';
      this.element.nativeElement.style.border = '2px solid #120a8f';
    }
  }
}
