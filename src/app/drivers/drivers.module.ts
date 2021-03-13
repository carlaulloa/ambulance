import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageDriversComponent } from './presentation/pages/page-drivers/page-drivers.component';
import { DriversRoutingModule } from './drivers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DriverOperationRepository } from './application/driver-operation.repository';
import { DriverOperation } from './infraestructure/driver.operation';
import { DriverUsecase } from './application/driver.usecase';
import { FormDriverComponent } from './presentation/views/form-driver/form-driver.component';

@NgModule({
  declarations: [PageDriversComponent, FormDriverComponent],
  imports: [
    CommonModule,
    DriversRoutingModule,
    SharedModule
  ], 
  providers: [
    DriverUsecase,
    {
      provide: DriverOperationRepository,
      useClass: DriverOperation
    }
  ]
})
export class DriversModule { }
