import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from './movie.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  apiUrl = 'https://swapi.dev/api/films/';

  constructor(private http: HttpClient) {}

  tester() {
    this.http.get('https://swapi.dev/api/films/').subscribe((data) => {
      console.log(data);
    });
  }

  async getFilms() {
    let data;
    await this.http
      .get<any>(`${this.apiUrl}`)
      .toPromise()
      .then((response) => (data = response.results));
    return data;
  }

  async getFilm(name: string) {
    let data: Movie = new Movie();
    await this.http
      .get<Movie>(`${this.apiUrl}${name}`)
      .toPromise()
      .then((response) => (data = response));
    return data;
  }
}
