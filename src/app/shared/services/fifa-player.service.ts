import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FifaPlayerModelDB } from '../models/fifa-player-db.model';
import { IndividualRecordsRequestModel } from '../models/individual-records/individual-records-request.model';
import { FifaPlayerWithRecordModel } from '../models/fifa-player-with-record.model';
import { FifaPlayerCoreDTOModel } from '../models/fifa-player/fifa-player-core-dto.model';
import { FifaPlayerStatsPerSeasonWrapperModel } from '../models/fifa-player/fifa-player-stats-per-season-wrapper.model';

@Injectable({
  providedIn: 'root'
})
export class FifaPlayerService {
  
  private baseUrl = 'http://localhost:8080/fifaPlayer';

  constructor(private http: HttpClient) { }

  getStatsForPlayer(playerId: number): Observable<FifaPlayerStatsPerSeasonWrapperModel> {
    return this.http.get<FifaPlayerStatsPerSeasonWrapperModel>(`${this.baseUrl}/getStatsForPlayer/${playerId}`);
  }

  getPlayersWithRecords(request: IndividualRecordsRequestModel): Observable<FifaPlayerWithRecordModel[]> {
    return this.http.post<FifaPlayerWithRecordModel[]>(`${this.baseUrl}/getPlayersWithRecord`, request);
  }

  findPlayersByName(nameSubstring: string): Observable<FifaPlayerCoreDTOModel[]> {
    return this.http.get<FifaPlayerCoreDTOModel[]>(`${this.baseUrl}/getPlayersByName/${nameSubstring}`);
  }
}
