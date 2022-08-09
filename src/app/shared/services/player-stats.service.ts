import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayerStatsService {

  constructor(private http : HttpClient) { }


  private baseUrl = 'http://localhost:8080/playerStats/';


  getGlobalPlayersStats(): Observable<any> {
    return this.http.get(`${this.baseUrl}` + "getGlobalStats");
  }
}
