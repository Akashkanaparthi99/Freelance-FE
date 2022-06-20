import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Freelance } from 'src/app/models/freelance';

@Injectable({
  providedIn: 'root'
})
export class FreelanceService {

  private _baseUrl: string = "http://localhost:8899/freelance-api/freelancers"
  
  constructor(private _httpClient: HttpClient) { }

  getFreelanceList = (): Observable<Freelance[]>=> {
  return this._httpClient.get<Freelance[]>(this._baseUrl);
  }
  getById = (id: number): Observable<Freelance> => { 
    return this._httpClient.get<Freelance>(this._baseUrl.concat("/get-by-id/")+id);
  }

}
