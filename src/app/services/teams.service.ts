import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }


  private baseUrl = 'http://localhost:8080/teams/';

  getTeamNames()
  {
    return this.http.get(`${this.baseUrl}` + "getAllTeamNames");
  }

  getTeamsList() {
    return this.http.get(`${this.baseUrl}` + "getAllTeamsWithLogo");
  }

  getSingleTeamStats(teamName: string)
  {
    return this.http.get(`${this.baseUrl}` + "getTeamStats/"+teamName);
  }

  createNewTeam(teamName: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}` + `create`, teamName);
  }

  updateTeam(tName: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/update/${tName}`, value);
  }


}
