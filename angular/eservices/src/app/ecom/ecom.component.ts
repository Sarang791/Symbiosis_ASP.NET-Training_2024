import { Component } from '@angular/core';
import { Employee } from '../employee';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ecom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ecom.component.html',
  styleUrl: './ecom.component.css'
})
export class EcomComponent {
  e1:Employee = new Employee(1,"a",989000);
  e2:Employee = new Employee(2,"b",989000);
  e3:Employee = new Employee(3,"c",989000);
  e4:Employee = new Employee(4,"d",989000);
  e5:Employee = new Employee(5,"e",989000);

  employees:Array<Employee>=[this.e1,this.e2,this.e3,this.e4,this.e5]

}
