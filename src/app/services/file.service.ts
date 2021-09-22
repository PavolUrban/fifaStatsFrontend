import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private httpClient : HttpClient) { }

  getImage(): Observable<any> {

    return this.httpClient.get('http://localhost:8080/api/file/15', { responseType: 'blob' });
  }

  getImage2(){

    return this.httpClient.get('http://localhost:8080/api/file/15');
  }

  getImages(): Observable<any> {

    return this.httpClient.get('http://localhost:8080/api/file/all');
  }

  private baseUrl = 'http://localhost:8080/api/file/upload/';
  save(teamname, formData){
    return this.httpClient.post<any>(this.baseUrl+ teamname, formData);
  }

  getMatchLogos(firstTeam: string, secondTeam: string)
  {
    return this.httpClient.get("http://localhost:8080/api/matchlogos/"+firstTeam+"/"+secondTeam);

  }

}
