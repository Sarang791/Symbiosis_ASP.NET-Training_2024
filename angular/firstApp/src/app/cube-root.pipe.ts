import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cubeRoot',
  standalone: true
})
export class CubeRootPipe implements PipeTransform {

  transform(val : number): number {
    return val**3;
  }

}
