import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHistoryComponent } from './presentation/pages/page-history/page-history.component';
import { HistoriesRoutingModule } from './histories-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HistoryUsecase } from './application/history.usecase';
import { HistoryOperationRepository } from './application/history-operation.repository';
import { HistoryOperation } from './infraestructure/history.operation';
import { FormHistoryComponent } from './presentation/views/form-history/form-history.component';

@NgModule({
  declarations: [PageHistoryComponent, FormHistoryComponent],
  imports: [
    CommonModule,
    HistoriesRoutingModule,
    SharedModule
  ],
  providers: [
    HistoryUsecase, 
    {
      provide: HistoryOperationRepository,
      useClass: HistoryOperation
    }
  ]
})
export class HistoriesModule { }
