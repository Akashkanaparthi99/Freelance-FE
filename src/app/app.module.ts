import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './modules/shared/material/material.module';
import { NavBarComponent } from './modules/shared/components/nav-bar/nav-bar.component';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';
import {  HttpClientModule } from '@angular/common/http';
import { FreelanceModule } from './modules/freelance/freelance.module';
import { ClientModule } from './modules/client/client.module';
import { AuthModule } from './modules/auth/auth.module';
import { CategoryComponent } from './modules/shared/components/category/category.component';
import { MatDialog} from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    PageNotFoundComponent,
    CategoryComponent,
  ],
  imports: [
    BrowserModule,
    FreelanceModule,
   
    AuthModule, ClientModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [
    MatDialog
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
