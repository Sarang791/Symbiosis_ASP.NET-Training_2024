import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListAComponent } from './list-a/list-a.component';
import { PipingComponent } from './piping/piping.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ListAComponent,PipingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'firstApp';
}
