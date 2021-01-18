import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageDashboardComponent } from './presentation/pages/page-dashboard/page-dashboard.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [PageDashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
