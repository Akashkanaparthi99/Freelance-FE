import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplyComponent } from '../auth/components/apply/apply.component';
import { AuthService } from '../auth/services/auth.service';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

const routes: Routes = [
  // {
  //   path: 'project-details', component: ProjectDetailsComponent,
  //   children: [
  //     {path: 'id', component: ProjectDetailsComponent}
  //   ]
  // },
  { path: 'project-details/:id', component: ProjectDetailsComponent },
  {path: 'apply', component: ApplyComponent,canActivate: [AuthService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
