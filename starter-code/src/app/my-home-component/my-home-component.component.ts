import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';

@Component({
  selector: 'app-my-home-component',
  templateUrl: './my-home-component.component.html',
  styleUrls: ['./my-home-component.component.css']
})
export class MyHomeComponentComponent implements OnInit {

  constructor(public movieService: CinemaService) { }

  ngOnInit() {
  }

}
