import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SquarerootPipe } from '../squareroot.pipe';
import { ReversePipe } from '../reverse.pipe';
import { CubeRootPipe } from '../cube-root.pipe';
import { PalindromePipe } from '../palindrome.pipe';


@Component({
  selector: 'app-piping',
  standalone: true,
  imports: [CommonModule,FormsModule,SquarerootPipe,ReversePipe,CubeRootPipe,PalindromePipe],
  templateUrl: './piping.component.html',
  styleUrl: './piping.component.css'
})
export class PipingComponent {
  croot:number=0;
  today : Date =new Date();
  Name : string = "Sarang";
  num : number = 16;
  pdrome :string ="";
}
