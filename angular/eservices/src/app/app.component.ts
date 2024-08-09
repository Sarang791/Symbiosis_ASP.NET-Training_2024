import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EcomComponent } from './ecom/ecom.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EcomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'eservices';
}
