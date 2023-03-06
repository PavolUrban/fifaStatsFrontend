import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecordsInMatchesModel } from '../models/records-in-matches/records-in-matches.model';

@Injectable({
  providedIn: 'root'
})
export class RecordsInMatchesService {
  
  private baseUrl = 'http://localhost:8080/recordsInMatches';

  constructor(private http: HttpClient) { }

  // todo add return type
  getGoalDistribution(teamId: number) {
    return this.http.get(`${this.baseUrl}/getGoalDistribution/${teamId}`);
  }

  saveNewRecordInMatch(newRecordInMatch: RecordsInMatchesModel): Observable<void> {
    console.log('toto chcem ulozit');
    console.log(newRecordInMatch);
   
    return this.http.post<void>(`${this.baseUrl}/saveNewRecord`, newRecordInMatch);
  }

}
