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

  getAllPlayers(){
    return this.http.get(`${this.baseUrl}/getPlayerNames`);
  }

  savePlayerStat(playerName: string, recordType: string, recordSignature: string, details: string, teamName: string, matchId: number) {
    return this.http.post(`${this.baseUrl}/savePlayerRecord`, {playerName, recordType, recordSignature, details, teamName, matchId});

  }
}
