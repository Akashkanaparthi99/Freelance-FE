import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { Category } from 'src/app/models/category';
import { Freelance } from 'src/app/models/freelance';
// import { Skill } from 'src/app/models/skill';

@Injectable({
  providedIn: 'root'
})
export class FreelanceService {

  private _baseUrl: string = "http://localhost:8899/freelance-api/freelancers"
  
  constructor(private _httpClient: HttpClient) { }

  getFreelanceList = (): Observable<Freelance[]> => {
    return this._httpClient.get<Freelance[]>(this._baseUrl);
  }
  getById = (id: number): Observable<Freelance> => {
    return this._httpClient.get<Freelance>(this._baseUrl.concat("/get-by-id/") + id);
  }

  getByFilter = (type: string, value: any): Observable<Freelance[]> => {
    return this._httpClient.get<Freelance[]>(this._baseUrl.concat("/"+type + "/" + value));
  }
  getByChoice = (category: string, rating: number, skill: string): Observable<Freelance[]> => {
    let url = this._baseUrl.concat(`choice?category=${category}&rating=${rating}&skill=${skill}`);
    return this._httpClient.get<Freelance[]>(url)
  }

  getFreelance = (): Observable<Freelance> => { 
    return this._httpClient.get<Freelance>(this._baseUrl.concat("/filters"));
  }

  getAllSkills = (): Observable<string[]> => { 
    let url = "http://localhost:8899/freelance-api/skills";
    return this._httpClient.get<string[]>(url);
  }
  getCategories = (): Observable<string[]> => {
    return this._httpClient.get<string[]>("http://localhost:8899/freelance-api/category");
  }
  getRating = (): Observable<string[]> => { 
    return this._httpClient.get<string[]>(this._baseUrl.concat("/distinct/ratings"));
  }

  getDistinctValues = (value: string): Observable<string[]> => { 
    return this._httpClient.get<string[]>(this._baseUrl.concat("/value/" + value));
  }
  // getByTypeAndValue = (type: string, value: string): Observable<Freelance[]> => { 
  //   return this._httpClient.get<Freelance[]>(this._baseUrl.concat(
  // }
}
