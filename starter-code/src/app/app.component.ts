import { Component } from '@angular/core';
import { CinemaService } from './cinema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CinemaService]
})
export class AppComponent {
  title = 'Cinema Paradiso';
}
