import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Game } from 'src/app/models/models';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private SERVICE_BASE_URL = 'https://worldcup.sfg.io/matches/';

  constructor(private http: HttpClient) {}

  getGamesByCountry(countryCode: string): Observable<Game[]> {
    return this.http.get<Game[]>(`${this.SERVICE_BASE_URL}country?fifa_code=${countryCode}`);
  }
}
