import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { MedicOperationRepository } from './application/medic-operation.repository';
import { MedicOperation } from './infraestructure/medic.operation';
import { MedicUsecase } from './application/medic.usercase';
import { PageMedicsComponent } from './presentation/pages/page-medics/page-medics.component';
import { MedicsRoutingModule } from './medics-routing.module';
import { SharedModule } from '../shared/shared.module';
import { FormMedicComponent } from './presentation/views/form-medic/form-medic.component';

@NgModule({
  declarations: [PageMedicsComponent, FormMedicComponent],
  imports: [
    CommonModule,
    MedicsRoutingModule,
    HttpClientModule,
    SharedModule
  ],
  providers: [
    MedicUsecase,
    {
      provide: MedicOperationRepository,
      useClass: MedicOperation
    }
  ],
  exports: []
})
export class MedicsModule { }
