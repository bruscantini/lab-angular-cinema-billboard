import { Injectable } from '@angular/core';
import  Movies from './movie-list';

@Injectable()
export class CinemaService {
  movies: Object[];

  constructor() {
    this.movies = Movies;
  }

  getMovies(){
    return this.movies;
  }

  getMovie(id: number){
    return this.movies.find((movie) => {
      return (movie['id'] === id);
    });
  }

}
