import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private baseUrl = 'http://localhost:8080/general/';

  constructor(private http: HttpClient, private router: Router) { }

  getSeasonsList() {
    // todo dynamically
    return this.http.get(`${this.baseUrl}` + "getSeasonsList/CL");
  }

  getSeason(seasonname: string, competition: string) {
    return this.http.get("http://localhost:8080/completeSeasons/getAllPhases/"+seasonname+"/"+competition);
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

  // this will be moved to separate service - goalscorers service
  getGoalscorersTheNewestToRelocate(competition: string, teamname: string){
    return this.http.get("http://localhost:8080/goalscorers/getAllGoalScorers/" + competition+"/"+teamname);
  }

  //this will be moved to separate service - cards service
  getCardsTheNewestToRelocate(competition: string, teamname: string){
    return this.http.get("http://localhost:8080/cards/getAllCards/" + competition+"/"+teamname);
  }
}
