import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { PageDashboardComponent } from './presentation/pages/page-dashboard/page-dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { VaccumComponent } from './presentation/views/vaccum/vaccum.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { SocketRepository } from './application/socket.repository';
import { SocketService } from './infraestructure/socket.service';
import { CovidComponent } from './presentation/views/covid/covid.component';
import { CovidRepository } from './application/covid.repository';
import { CovidService } from './infraestructure/covid.service';
import { CovidUseCase } from './application/covid.usercase';



@NgModule({
  declarations: [PageDashboardComponent, VaccumComponent, CovidComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    NgxChartsModule,
  ],
  providers: [
    CovidUseCase, 
    {
      provide: SocketRepository, useClass: SocketService
    },
    {
      provide: CovidRepository, useClass: CovidService
    }
  ]
})
export class DashboardModule { }
