import { HttpClient} from '@angular/common/http';
import { identifierName } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';
import { Project } from 'src/app/models/project';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  private _baseUrl = 'http://localhost:8899/bidding-api/projects';
  constructor(private _httpClient: HttpClient) { }

  getProjects=(): Observable<Project[]> => { 
    return this._httpClient.get<Project[]>(this._baseUrl);
  }

  getByCategory = (category: string): Observable<Project[]> => {
    return this._httpClient.get<Project[]>(this._baseUrl.concat("/category/") + category);
  }

  getCategories = (): Observable<Category[]> => {
    return this._httpClient.get<Category[]>("http://localhost:8899/freelance-api/category");
  }
  
  addProject = (project: Project): Observable<string> => { 
    return this._httpClient.post<string>(this._baseUrl, project);
  }

  getProjectById = (id: number): Observable<Project> => { 
    return this._httpClient.get<Project>(this._baseUrl.concat("/project-id/" + id));
  }
}
