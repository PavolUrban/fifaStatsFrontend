import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OverallSeasonStats } from '../models/overall-season-stats.model';

@Injectable({
  providedIn: 'root'
})
export class SeasonBySeasonService {
  
  private baseUrl = 'http://localhost:8080/seasonBySeason';

  constructor(private http: HttpClient) { }

  getSeasonBySeasonStats(): Observable<OverallSeasonStats> {
    return this.http.get<OverallSeasonStats>(`${this.baseUrl}/getStats`);
  }
}
