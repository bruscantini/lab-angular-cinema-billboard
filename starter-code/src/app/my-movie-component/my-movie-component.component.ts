import { Component, OnInit } from '@angular/core';
import { CinemaService } from '../cinema.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-my-movie-component',
  templateUrl: './my-movie-component.component.html',
  styleUrls: ['./my-movie-component.component.css']
})
export class MyMovieComponentComponent implements OnInit {
  movieId: number;
  movie: Object;

  constructor(public movieService: CinemaService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .subscribe((params) => this.movieId = +params['id']);
    this.movie = this.movieService.getMovie(this.movieId);
  }

}
