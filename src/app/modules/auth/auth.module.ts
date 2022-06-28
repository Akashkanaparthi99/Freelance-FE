import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { MaterialModule } from '../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ApplyComponent } from './components/apply/apply.component';


@NgModule({
  declarations: [
    SignupComponent,
    LoginComponent,
    ApplyComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    AuthRoutingModule
  ]
})
export class AuthModule { }
