import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Teams } from '../models/teams';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private baseUrl = 'http://localhost:8080/teams';

  constructor(private http: HttpClient) { }

  getTeamNames(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/getAllTeamNames`);
  }

  getTeamsList(recalculate: boolean): Observable<Teams[]> {
    return this.http.get<Teams[]>(`${this.baseUrl}/getAllTeamsWithLogo/${recalculate}`);
  }

  getSingleTeamStats(teamName: string) {
    return this.http.get(`${this.baseUrl}/getTeamStats/${teamName}`);
  }

  createNewTeam(teamName: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `create`, teamName);
  }

  updateTeam(tName: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${tName}`, value);
  }
  
}
