import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';

const routes: Routes = [
  // {
  //   path: 'project-details', component: ProjectDetailsComponent,
  //   children: [
  //     {path: 'id', component: ProjectDetailsComponent}
  //   ]
  // },
  {path: 'project-details/:id', component: ProjectDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
