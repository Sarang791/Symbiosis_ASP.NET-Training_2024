import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'squareroot',
  standalone: true
})
export class SquarerootPipe implements PipeTransform {

  transform(val: number): number {
    return Math.sqrt(val);
  }

}
