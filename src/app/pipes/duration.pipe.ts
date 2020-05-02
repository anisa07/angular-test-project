import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform {

  public transform(value: number): string {
    const hours = Math.floor(value / 60);
    const min = value % 60;
    let duration = hours ? `${hours}h` : '';
    duration = min ? `${duration} ${min}min` : duration;
    return duration;
  }

}
