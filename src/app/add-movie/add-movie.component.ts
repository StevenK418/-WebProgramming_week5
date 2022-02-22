import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})
export class AddMovieComponent implements OnInit {

  constructor(private movieService: MovieService) { }


  addNewMovie(movietitle: HTMLInputElement, moviediretcor: HTMLInputElement, movieyear: HTMLInputElement):boolean
  {
    this.movieService.addMovie(movietitle.value, moviediretcor.value, movieyear.value);
    return false;
  }
  ngOnInit(): void {
  }

}
