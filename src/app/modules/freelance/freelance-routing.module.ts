import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FreelanceDetailsComponent } from './components/freelance-details/freelance-details.component';
import { FreelanceListComponent } from './components/freelance-list/freelance-list.component';

const routes: Routes = [
  {path: 'freelance-details/:id', component: FreelanceDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FreelanceRoutingModule { }
