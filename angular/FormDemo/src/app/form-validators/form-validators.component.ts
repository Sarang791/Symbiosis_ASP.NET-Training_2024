import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-form-validators',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './form-validators.component.html',
  styleUrl: './form-validators.component.css'
})

export class FormValidatorsComponent {
  Name : string ="";
  Email : string =""
  Gender : string=""
  Marrital_Status : string =""
  Country : string ="";
  address : string ="";
  countrylist =[{'id' :1,'name' : "India"},{'id' :2,'name' : "Nepal"},{'id' :3,'name' : "Japan"},{'id' :4,'name' : "USA"},{'id' :5,'name' : "UAE"}]
  foremail: any;

  onSubmit(contactForm:{value:any}){
    console.log(contactForm.value);
    this.Name=contactForm.value.firstname +" "+contactForm.value.lastname;
    this.Email = contactForm.value.email;
    this.Gender = contactForm.value.gender;
    this.Marrital_Status = contactForm.value.isMarried;
    this.Country = contactForm.value.country;
    this.address = contactForm.value.Address.city +" "+contactForm.value.Address.street +" "+contactForm.value.Address.pincode;
  }

}
