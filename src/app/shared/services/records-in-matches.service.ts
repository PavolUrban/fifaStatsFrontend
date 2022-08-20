import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecordsInMatchesService {
  
  private baseUrl = 'http://localhost:8080/recordsInMatches';

  constructor(private http: HttpClient) { }

  getGoalDistribution(teamName: string) {
    return this.http.get(`${this.baseUrl}/getGoalDistribution/${teamName}`);
  }
}
