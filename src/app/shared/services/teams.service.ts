import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teams } from '../models/teams';
import { SingleTeamModel } from '../models/single-team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private baseUrl = 'http://localhost:8080/teams';

  constructor(private http: HttpClient) { }

  // CHECKED
  getSingleTeamStats(teamId: number): Observable<SingleTeamModel> {
    return this.http.get<SingleTeamModel>(`${this.baseUrl}/getTeamStats/${teamId}`);
  }

  getTeamsList(recalculate: boolean): Observable<Teams[]> {
    return this.http.get<Teams[]>(`${this.baseUrl}/getAllTeams/${recalculate}`);
  }

  getTeamNames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/getAllTeamNames`);
  }
















  // todo rework to send team OBJECT
  createNewTeam(teamName: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `create`, teamName);
  }

  updateTeam(tName: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${tName}`, value);
  }
  
}
