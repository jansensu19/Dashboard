import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { actors } from './actors.model';

@Injectable()
export class ActorService {
  apiUrl = 'https://swapi.dev/api/people/';

  constructor(private http: HttpClient) {}

  tester() {
    this.http.get('https://swapi.dev/api/people/').subscribe((data) => {
      console.log(data);
    });
  }

  async getActors() {
    let data;
    await this.http
      .get<any>(`${this.apiUrl}`)
      .toPromise()
      .then((response) => (data = response.results));
    return data;
  }

  async getActor(name: string) {
    let data: actors = new actors();
    await this.http
      .get<actors>(`${this.apiUrl}${name}`)
      .toPromise()
      .then((response) => (data = response));
    return data;
  }
}
