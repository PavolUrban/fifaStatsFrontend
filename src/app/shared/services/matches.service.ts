import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Matches } from '../models/matches';
import { FilteredMatchesRequestModel } from '../models/matches/custom-matches-request.model';
import { MatchDetailModel } from '../models/match-detail.model';
import { DataToCreateMatchModel } from '../models/matches/data-to-create-match.model';
import { TopMatchesRequestModel } from '../models/matches/top-matches-request.model';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  private readonly baseUrl = 'http://localhost:8080/matchesV2';
  private readonly localStorageKeyCompetition = 'lastSelectedCompetition';
  private readonly localStorageKeyCompetitionPhase = 'lastSelectedCompetitionPhase';
  private readonly localStorageKeySeason = 'lastSelectedSeason';

  constructor(private http: HttpClient) { }

  public getFilteredMatches$(filteredMatchesRequest: FilteredMatchesRequestModel): Observable<Matches[]>{
    return this.http.post<Matches[]>(`${this.baseUrl}/getFilteredMatches`, filteredMatchesRequest);
  }

  public getMatchDetails$(matchId: number): Observable<MatchDetailModel> {
    return this.http.get<MatchDetailModel>(`${this.baseUrl}/getMatchDetails/${matchId}`);
  }

  public getDataToCreateMatch$(): Observable<DataToCreateMatchModel>{
    return this.http.get<DataToCreateMatchModel>(`${this.baseUrl}/getDataToCreateMatch`);
  }

  public createOrUpdateMatch$(match: Matches): Observable<void> {
    return this.http.post<void>(`${this.baseUrl}/createOrUpdateMatch`, match);
  }

  public getTopMatches(topMatchesRequest: TopMatchesRequestModel): Observable<Matches[]> {
    return this.http.post<Matches[]>(`${this.baseUrl}/getTopMatches`, topMatchesRequest);
  }

  public getNewMatchObject(): Matches {
    const match: Matches = new Matches();
    match.scorehome = 0;
    match.scoreaway = 0;
    match.competition = this.checkLocalStorageOrSetDefault(this.localStorageKeyCompetition, 'CL');
    match.competitionPhase = this.checkLocalStorageOrSetDefault(this.localStorageKeyCompetitionPhase, 'GROUP A');
    match.season = this.checkLocalStorageOrSetDefault(this.localStorageKeySeason, 'FIFA23');
    match.playerH = 'Pavol Jay';
    match.playerA = 'Kotlik';
    return match;
  }
  
  private checkLocalStorageOrSetDefault(localStorageKey: string, defaultValue: string): string {
    return localStorage.getItem(localStorageKey) ? localStorage.getItem(localStorageKey) : defaultValue;
  }





























 // this is probably not needed??? maybe it could be replaced by  getMatchDetails
  getMatchById(matchId: number){
    return this.http.get(`${this.baseUrl}/getMatchById/${matchId}`);
  }

  // UNCHECKED

  getH2HStatistics(firstTeam: string, secondTeam: string) {
    return this.http.get(`${this.baseUrl}/getH2HStats/${firstTeam}/${secondTeam}`);
  }

  // todo maybe move this to global?
  getCompetitionPhasesAndSeasonList(){
    return this.http.get(`${this.baseUrl}getCompetitionPhasesAndSeasonsList/`);    
  }


}
