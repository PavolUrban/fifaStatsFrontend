import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SeasonsRequestModel } from '../models/seasons/seasons-request.model';
import { Observable } from 'rxjs';
import { SeasonWrapper } from '../models/seasons/season-wrapper.model';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  private baseUrl = 'http://localhost:8080/seasons';

  constructor(private http: HttpClient) { }

  getSeasonV2(seasonsRequest: SeasonsRequestModel): Observable<SeasonWrapper> {
    return this.http.post<SeasonWrapper>(`${this.baseUrl}/getAllPhases`, seasonsRequest);
  }
}
