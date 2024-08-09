import { Pipe, PipeTransform } from '@angular/core';
import { ReversePipe } from './reverse.pipe';
import { reverse } from 'dns';

@Pipe({
  name: 'palindrome',
  standalone: true
})
export class PalindromePipe implements PipeTransform {

  
  transform(val:string): string {
    let temp : string = val.toLowerCase();
    let flag : string = "yes";
    for(let i = 0;i<temp.length/2+1 ;i++){
      if(temp[i]!=temp[temp.length-i-1]){
        flag ="no";
        break;
      }
    }
    return flag;
  }
}
