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

  //todo these 3 functions should be soon removed
  insertGoalscorersToNewTable(data){
    console.log("calling insertnewg");
    console.log(data);
    return this.http.post("http://localhost:8080/globalStats/insertGoalscorers", data);
  }

  insertPlayersWithCardsToNewTable(data){
    console.log("posielam data");
    console.log(data);
    return this.http.post("http://localhost:8080/globalStats/insertPlayersWithCards", data); 
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
