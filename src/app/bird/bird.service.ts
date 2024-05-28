import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Bird } from '../models/bird';
import { BirdSearch } from '../models/bird-search';
import { BirdAdd } from '../models/bird-add';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  private apiUrl: string = environment.apiUrl;
  private headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) {}

  getMatchingBirds(birdSearch: BirdSearch) : Observable<Bird[]> {
    return this.http.get<Bird[]>(`${this.apiUrl}/getbirds?color=${birdSearch.color}&secondarycolor=${birdSearch.secondaryColor}&shape=${birdSearch.shape}&size=${birdSearch.size}&habitat=${birdSearch.habitat}`, {headers: this.headers});
  }

  addBird(birdAdd: BirdAdd) : Observable<any> {
    return this.http.post<void>(this.apiUrl + "/addbird", JSON.stringify(birdAdd), {headers: this.headers});
  }

  //implement 
  //implement delete
}
