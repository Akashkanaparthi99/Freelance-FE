import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  isLoggedIn!: boolean;
  constructor() {
    this.isLoggedIn = false;
  }
  isUserLoggedIn = () => {
    return this.isLoggedIn;
  };
  loginUser = (username: string, password: string): Observable<boolean> => {
    if (username == 'akash@gmail.com' && password == '1234') {
      this.isLoggedIn = true;
      return of(this.isLoggedIn);
    }
    return of(false);

  };
}
