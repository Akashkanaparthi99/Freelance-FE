import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientRoutingModule } from './client-routing.module';
import { ClientListComponent } from './components/client-list/client-list.component';
import { ClientDetailsComponent } from './components/client-details/client-details.component';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailsComponent } from './components/project-details/project-details.component';
import { MaterialModule } from '../shared/material/material.module';
import { AddProjectComponent } from './components/add-project/add-project.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ClientListComponent,
    ClientDetailsComponent,
    ProjectListComponent,
    ProjectDetailsComponent,
    AddProjectComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
