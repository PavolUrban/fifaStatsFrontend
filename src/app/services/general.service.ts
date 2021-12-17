import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private baseUrl = 'http://localhost:8080/general/';

  constructor(private http: HttpClient) { }

  getSeasonsList() {
    // todo dynamically
    return this.http.get(`${this.baseUrl}` + "getSeasonsList/CL");
  }

  getGroupStage(seasonname: string, competition: string) {
    return this.http.get("http://localhost:8080/completeSeasons/getAllPhases/"+seasonname+"/"+competition);
  }

  getPlayOff(seasonname: string, competition: string) {
    return this.http.get("http://localhost:8080/completeSeasons/getAllPlayOff/"+seasonname+"/"+competition);
  }

  getAllTopGoalScorers(){
    return this.http.get("http://localhost:8080/globalStats/getAllGoalScorers");
  }

  // todo zjednotit servicy, teraz je v tom chaos
  getTopGoalScorersForTeam(teamName: string) {
    return this.http.get("http://localhost:8080/globalStats/getSingleTeamGoalScorers/"+teamName);
  }

  getTeamStats(){
    return this.http.get("http://localhost:8080/globalStats/getTopTeamStats");
  }

  getWinnersList(competition: string) {
    return this.http.get("http://localhost:8080/globalStats/winnersList"+"/"+competition);
  }

  getTrophyRoom() {
    return this.http.get("http://localhost:8080/globalStats/trophyRoom");
  }

  getAllCards() {
    return this.http.get("http://localhost:8080/globalStats/getAllCards");
  }
}
