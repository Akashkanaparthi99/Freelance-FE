import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/components/login/login.component';
import { SignupComponent } from './modules/auth/components/signup/signup.component';
import { ProjectListComponent } from './modules/client/components/project-list/project-list.component';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { PageNotFoundComponent } from './modules/shared/components/page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'category/:categoryName', component:ProjectListComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
