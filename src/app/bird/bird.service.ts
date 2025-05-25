import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Bird } from '../models/bird';
import { BirdSearch } from '../models/bird-search';
import { BirdAdd } from '../models/bird-add';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  private apiUrl: string = environment.apiUrl;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getMatchingBirds(birdSearch: BirdSearch) : Observable<Bird[]> {
    let params = new HttpParams()
    .set('size', birdSearch.size)
    .set('shape', birdSearch.shape)

    birdSearch.colors.forEach(color => params = params.append('colors', color));
    birdSearch.habitats.forEach(habitat => params = params.append('habitats', habitat));

    return this.http.get<Bird[]>(this.apiUrl + '/search',
      {params, headers: this.headers});
  }

  addBird(birdAdd: BirdAdd) : Observable<any> {
      return this.http.post(this.apiUrl + '/addbird', birdAdd, {
    headers: this.headers, responseType: 'text'
  });
  }
}


