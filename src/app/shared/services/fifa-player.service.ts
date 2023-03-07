import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FifaPlayerModelDB } from '../models/fifa-player-db.model';
import { IndividualRecordsRequestModel } from '../models/individual-records/individual-records-request.model';
import { FifaPlayerWithRecordModel } from '../models/fifa-player-with-record.model';

@Injectable({
  providedIn: 'root'
})
export class FifaPlayerService {
  
  private baseUrl = 'http://localhost:8080/fifaPlayer';

  constructor(private http: HttpClient) { }

  // use id here
  getAllPlayerStats(playerName: string) {
    return this.http.get(`${this.baseUrl}/getStats/${playerName}`);
  }

  getPlayersWithRecords(request: IndividualRecordsRequestModel): Observable<FifaPlayerWithRecordModel[]> {
    return this.http.post<FifaPlayerWithRecordModel[]>(`${this.baseUrl}/getPlayersWithRecord`, request);
  }

  findPlayersByName(nameSubstring: string): Observable<FifaPlayerModelDB[]> {
    return this.http.get<FifaPlayerModelDB[]>(`${this.baseUrl}/getPlayersByName/${nameSubstring}`);
  }
}
