import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfigService } from 'src/app/config/config.service';
import { HistoryUsecase } from 'src/app/histories/application/history.usecase';
import { HistoryEntity } from 'src/app/histories/domain/history.entity';
import { ExportComponent } from 'src/app/shared/components/export/export.component';
import { IMetadataColumn } from 'src/app/shared/interfaces/metadata-column.interface';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FormHistoryComponent } from '../../views/form-history/form-history.component';

@Component({
  selector: 'amb-page-history',
  templateUrl: './page-history.component.html',
  styleUrls: ['./page-history.component.css']
})
export class PageHistoryComponent implements OnInit {
  metadataColumns: IMetadataColumn[] = [{
    field: 'id',
    title: 'ID'
  }, {
    field: 'name',
    title: 'Nombre'
  }];
  data: any[] = [
    {
      id: 1, name: "alterto"
    },
    {
      id: 2, name: "alterto"
    },
    {
      id: 3, name: "alterto"
    },{
      id: 4, name: "alterto"
    },
    {
      id: 5, name: "alterto"
    }
  ];
  totalRecords: number = 0;
  currentPage = 0;

  constructor(private readonly configService: ConfigService,
    private readonly utilsService: UtilsService,
    private readonly historyUseCase: HistoryUsecase,
    private readonly bottomSheet: MatBottomSheet) {
    this.configService.config = {
      layout: {
        menu: {
          hidden: false
        },
        header: {
          hidden: false
        }
      }
    }
  }

  ngOnInit(): void {
    this.list(0);
  }

  openForm(row: HistoryEntity | any = null) {
    const ref: MatDialogRef<any> = this.utilsService.openModal(FormHistoryComponent, {
      disableClose: true, // agregar un boton para cerrar
      panelClass: "container-modal", // 
      data: row
    });
    
    ref.afterClosed().subscribe((response) => {
        if (!response) {
          return;
        }
        if (!row) {
          this.historyUseCase
            .insert(response)
            .subscribe(() => this.list(this.currentPage));
        } else {
          this.historyUseCase
            .update(row.id, response)
            .subscribe(() => this.list(this.currentPage));
        }
      })  
  }

  list(page: number){
    //this.totalRecords = mockMedics.length;
    //this.data = mockMedics.slice(page * 4, page * 4 + 4) as MedicEntity[];
    this.currentPage = page;
    this.historyUseCase.getByPage(page).subscribe((data: any) => {
      this.data = data.records as HistoryEntity[];
      //this.data = mockMedics.slice(page * 4, page * 4 + 4) as MedicEntity[];
      this.totalRecords = data.totalRecords;
    })
  }

  changePage(page: number) {
    this.list(page);
  }

  delete(row: HistoryEntity) {
    this.utilsService
      .confirm()
      .afterClosed()
      .subscribe((response: any) => {
        if (!response) {
          return;
        }
        this.historyUseCase
          .delete(+row.id)
          .subscribe(() => this.list(this.currentPage));
      });
  }

  openExport(){
    this.bottomSheet.open(ExportComponent, {
      data: this.data
    });
  }
}
