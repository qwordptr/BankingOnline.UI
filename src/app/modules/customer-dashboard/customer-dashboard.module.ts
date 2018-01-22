import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {CoreModule} from "../core/core.module";

@NgModule({
  imports: [
    CommonModule, CoreModule
  ],
  exports: [ DashboardComponent ],
  declarations: [ DashboardComponent ]
})
export class CustomerDashboardModule { }
