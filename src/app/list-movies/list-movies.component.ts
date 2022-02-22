import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.css']
})
export class ListMoviesComponent implements OnInit {

  movies=[] as any;

  constructor(private MovieService: MovieService) { }

  ngOnInit(): void {
    this.movies = this.MovieService.getMovies();
    console.log(this.movies);
  }

}
