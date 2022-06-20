import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/models/category';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private _httpClient: HttpClient) { }

  getCategories = (): Observable<Category[]> => {
   return this._httpClient.get<Category[]>("http://localhost:8899/freelance-api/category");
  }
}
