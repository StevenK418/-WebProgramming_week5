import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movie?:Movie;

  constructor() { }

  movieList =
  [
    new Movie('The Godfather', '1972','Francis Ford Coppola'),
    new Movie('Millers Crossing', '1990','The Coen Brothers'),
    new Movie('Dial M for Murder', '1954','Alfred Hitchcock'),
    new Movie('Whiplash','2014', 'Damien Chazelle')
  ];

  getMovies()
  {
    return this.movieList;
  }

  addMovie(movieTitle:string, moviedirector:string, movieyear:string)
  {
    this.movieList.push(new Movie(movieTitle, moviedirector, movieyear));
  }

  ngOnInit()
  {

  }
}
