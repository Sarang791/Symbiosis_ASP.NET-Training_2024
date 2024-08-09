import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemplateDrivenComponent } from './template-driven/template-driven.component';
import { FormValidatorsComponent } from './form-validators/form-validators.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TemplateDrivenComponent,FormValidatorsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'FormDemo';
}
