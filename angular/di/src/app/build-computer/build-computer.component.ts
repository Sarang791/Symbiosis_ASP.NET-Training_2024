import { Component } from '@angular/core';
import { Computer } from '../computer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-build-computer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './build-computer.component.html',
  styleUrl: './build-computer.component.css'
})
export class BuildComputerComponent {
  public computer:Computer=null;
  cpus:string="";
  monitors:string="";
  keyboards:string="";
  makeComputer(){
    this.computer=new Computer(this.cpus,this.monitors,this.keyboards);
  }
}
