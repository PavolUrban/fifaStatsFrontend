import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GlobalStatsService {

  private baseUrl = 'http://localhost:8080/globalStats';

  constructor(private http: HttpClient) { }

  getTeamStats(){
    return this.http.get(`${this.baseUrl}/getTopTeamStats`);
  }

  getWinnersList(competition: string) {
    return this.http.get(`${this.baseUrl}/winnersList/${competition}`);
  }

  getTrophyRoom() {
    return this.http.get(`${this.baseUrl}/trophyRoom`);
  }

  getTrophyRoomTeams() {
    return this.http.get(`${this.baseUrl}/teamTrophiesCount/allCompetitions`);
  }

}
