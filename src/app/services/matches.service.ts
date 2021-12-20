import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {

  private baseUrl = 'http://localhost:8080/matches/';

  constructor(private http: HttpClient) { }

  getMatchesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}getMatches`);
  }

  createMatch(match: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `newmatch/create`, match);
  }
  
  updateMatch(match: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}` + `/update/existingMatch`, match);
  }

  getCustomMatches(competition: string, season: string, competitionPhase: string){
    return this.http.get(`${this.baseUrl}getCustomGroupMatches/${competition}/${season}/${competitionPhase}`);
  }

  getH2HStatistics(firstTeam: string, secondTeam: string) {
    return this.http.get(`${this.baseUrl}/getH2HStats/${firstTeam}/${secondTeam}`);
  }

  getDataToCreateMatch(){
    return this.http.get(`${this.baseUrl}getDataToCreateMatch/`);
  }

  // todo maybe move this to global?
  getCompetitionPhasesAndSeasonList(){
    return this.http.get(`${this.baseUrl}getCompetitionPhasesAndSeasonsList/`);    
  }

  getMatchesWithCustomFilters(season: string, competition: string, competitionPhase: string, teamName: string){
    return this.http.get(`${this.baseUrl}/getFilteredMatches/${season}/${competition}/${competitionPhase}/${teamName}`);
  }
    //getFilteredMatches/{season}/{competition}/{competitionPhase}/{teamName}  }

}
