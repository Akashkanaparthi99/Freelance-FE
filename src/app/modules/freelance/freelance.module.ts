import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FreelanceRoutingModule } from './freelance-routing.module';
import { FreelanceDetailsComponent } from './components/freelance-details/freelance-details.component';
import { FreelanceListComponent } from './components/freelance-list/freelance-list.component';


@NgModule({
  declarations: [
    FreelanceDetailsComponent,
    FreelanceListComponent
  ],
  imports: [
    CommonModule,
    FreelanceRoutingModule
  ]
})
export class FreelanceModule { }
