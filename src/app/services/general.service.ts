import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private baseUrl = 'http://localhost:8080/general/';

  constructor(private http: HttpClient) { }

  getSeasonsList() {
    console.log("called "+this.baseUrl+"getSeasonsList");
    return this.http.get(`${this.baseUrl}` + "getSeasonsList/CL");// todo dynamically
  }

  //http://localhost:8080/completeSeasons/getAllPhases/FIFA20/CL
  getGroupStage(seasonname, competition)
  {
    return this.http.get("http://localhost:8080/completeSeasons/getAllPhases/"+seasonname+"/"+competition); //todo remove and make it dynamic
  }

  getPlayOff(seasonname, competition)
  {
    return this.http.get("http://localhost:8080/completeSeasons/getAllPlayOff/"+seasonname+"/"+competition);
  }


  // separate global stats
  getTopGoalScorers()
  {
    return this.http.get("http://localhost:8080/globalStats/getAllTimeGoalScorers");
  }

  getTeamStats()
  {
    return this.http.get("http://localhost:8080/globalStats/getTopTeamStats");
  }

  getWinnersList(competition: string){
    return this.http.get("http://localhost:8080/globalStats/winnersList"+"/"+competition);
  }

  getTrophyRoom(){
    return this.http.get("http://localhost:8080/globalStats/trophyRoom");
  }
}
