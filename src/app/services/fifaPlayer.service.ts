import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FifaPlayerService {
  
  private baseUrl = 'http://localhost:8080/fifaPlayer';

  constructor(private http: HttpClient) { }

  getAllPlayerStats(playerName: string) {
    return this.http.get(`${this.baseUrl}/getStats/${playerName}`);
  }
}
