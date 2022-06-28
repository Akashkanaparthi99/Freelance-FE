import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  retUrl: string = '';
  constructor(private _router: Router,
    private _loginService: LoginService,
    private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this._activatedRoute.queryParamMap.subscribe((map) => {
      let url = map.get('returnUrl');
      if (url) this.retUrl = url;
    });
  }
  loginForm = new FormGroup({
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required])
  })
  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  login = (loginForm: FormGroup) => {
    let user = loginForm.value;
    this._loginService.loginUser(user.email, user.password).subscribe({
      next: (data: boolean) => {
        if (!data) this._router.navigate(['home']);
        else if (data && this.retUrl != '') {
          console.log(`${data}`);
          this._router.navigate([this.retUrl]);
        } else {
          this._router.navigate(['home']);
        }
      },
    });
  }
}
