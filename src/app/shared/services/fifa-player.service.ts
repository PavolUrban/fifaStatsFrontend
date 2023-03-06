import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FifaPlayerModelDB } from '../models/fifa-player-db.model';

@Injectable({
  providedIn: 'root'
})
export class FifaPlayerService {
  
  private baseUrl = 'http://localhost:8080/fifaPlayer';

  constructor(private http: HttpClient) { }

  getAllPlayerStats(playerName: string) {
    return this.http.get(`${this.baseUrl}/getStats/${playerName}`);
  }

  getPlayersWithRecords(recordType: string, competition: string, competitionPhase: string) {
    return this.http.get(`${this.baseUrl}/getPlayersWithRecord/${recordType}/${competition}/${competitionPhase}`);
  }

  findPlayersByName(nameSubstring: string): Observable<FifaPlayerModelDB[]> {
    return this.http.get<FifaPlayerModelDB[]>(`${this.baseUrl}/getPlayersByName/${nameSubstring}`);
  }
}
