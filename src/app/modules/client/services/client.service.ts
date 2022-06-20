import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _baseUrl = 'http://localhost:8899/bidding-api/projects';
  constructor(private _httpClient: HttpClient) { }

  getProjects(): Observable<Project[]> { 
    return this._httpClient.get<Project[]>(this._baseUrl);
  }
}
