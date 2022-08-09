import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeasonBySeasonService {
  
  private baseUrl = 'http://localhost:8080/seasonBySeason';

  constructor(private http: HttpClient) { }

  getSeasonBySeasonStats() {
    return this.http.get(`${this.baseUrl}/getStats`);
  }
}
