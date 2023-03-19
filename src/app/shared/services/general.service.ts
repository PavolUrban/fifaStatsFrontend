import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RecordsInMatchesRequestModel } from '../models/records-in-matches/records-in-matches-request.model';
import { GoalscorersModel } from '../models/goalscorers.model';
import { PlayerWithCardsModel } from '../models/players-with-cards.model';

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  private baseUrl = 'http://localhost:8080/general';

  constructor(private http: HttpClient) { }
  
  // todo dynamically - this has to be in some kind of state
  getSeasonsList(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/getSeasonsList/CL`);
  }

  // this will be moved to separate service - goalscorers service
  getGoalscorersTheNewestToRelocate(detailsRequest: RecordsInMatchesRequestModel): Observable<GoalscorersModel>{
    return this.http.post<GoalscorersModel>("http://localhost:8080/goalscorers/getAllGoalScorers", detailsRequest);
  }

  // this will be moved to separate service - cards service
  getCardsTheNewestToRelocate(detailsRequest: RecordsInMatchesRequestModel): Observable<PlayerWithCardsModel>{
    return this.http.post<PlayerWithCardsModel>("http://localhost:8080/cards/getAllCards", detailsRequest);
  }
}
