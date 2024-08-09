import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {
  temp :string ="";
  transform(val : string): string {
    
    for(let i = val.length-1 ;i>=0;i--){
      this.temp = this.temp+val[i];
    }
    return this.temp;
  }

}
