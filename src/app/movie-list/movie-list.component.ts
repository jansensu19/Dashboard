import { Component, OnInit } from '@angular/core';
import { MovieService } from '../shared/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit {
  movies;

  constructor(private moviesService: MovieService) {}

  async ngOnInit() {
    this.movies = await this.moviesService.getFilms();
    console.log(this.movies);
  }
}
