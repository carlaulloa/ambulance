import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http'; 
import { MedicOperationRepository } from './application/medic-operation.repository';
import { MedicOperation } from './infraestructure/medic.operation';
import { MedicUsecase } from './application/medic.usercase';
import { MedicsComponent } from './presentation/pages/medics/medics.component';

@NgModule({
  declarations: [MedicsComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    MedicUsecase,
    {
      provide: MedicOperationRepository,
      useClass: MedicOperation
    }
  ],
  exports: [MedicsComponent]
})
export class MedicsModule { }
