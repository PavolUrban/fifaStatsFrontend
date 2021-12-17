import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  
  private baseUrl = 'http://localhost:8080/api/file/upload/';

  constructor(private httpClient: HttpClient) { }

  // 1 x UploadFileController
  save(teamname: string, formData) {
    return this.httpClient.post<any>(this.baseUrl + teamname, formData);
  }

  // 3 x DownloadFileController
  getMatchLogos(firstTeam: string, secondTeam: string) {
    return this.httpClient.get("http://localhost:8080/api/matchlogos/" + firstTeam + "/" + secondTeam);
  }

  getAllLogos() {
    return this.httpClient.get("http://localhost:8080/api/getAllLogos");
  }

  getSingleTeamLogo(teamname: string) {
    return this.httpClient.get("http://localhost:8080/api/getSingleTeamLogo/" + teamname);
  }

}
