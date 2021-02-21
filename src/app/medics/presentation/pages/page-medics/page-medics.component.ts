import { Component, OnInit } from '@angular/core';
import { MedicEntity } from 'src/app/medics/domain/medic.entity';
import { IMetadataColumn } from 'src/app/shared/interfaces/metadata-column.interface';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FormMedicComponent } from '../../views/form-medic/form-medic.component';
import metadataColumn from '../../../mocks/metadata-column.json';
import { ConfigService } from 'src/app/config/config.service';
import { MedicUsecase } from 'src/app/medics/application/medic.usercase';
import { MatDialogRef } from '@angular/material/dialog';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ExportComponent } from 'src/app/shared/components/export/export.component';
@Component({
  selector: 'amb-page-medics',
  templateUrl: './page-medics.component.html',
  styleUrls: ['./page-medics.component.css']
})
export class PageMedicsComponent implements OnInit {
  metadataColumns: IMetadataColumn[] = metadataColumn;
  data: MedicEntity[] = [];
  totalRecords: number = 0;
  currentPage = 0;
  
  constructor(private readonly configService: ConfigService,
    private readonly utilsService: UtilsService,
    private readonly medicUseCase: MedicUsecase,
    private readonly bottomSheet: MatBottomSheet
    ) { 
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

  openForm(row: MedicEntity | any = null) {
    const ref: MatDialogRef<any> = this.utilsService.openModal(FormMedicComponent, {
      disableClose: true, // agregar un boton para cerrar
      panelClass: "container-modal", // 
      data: row
    });
    
    ref.afterClosed().subscribe((response) => {
        if (!response) {
          return;
        }
        if (!row) {
          this.medicUseCase
            .insert(response)
            .subscribe(() => this.list(this.currentPage));
        } else {
          this.medicUseCase
            .update(row.id, response)
            .subscribe(() => this.list(this.currentPage));
        }
      })  
  }

  list(page: number){
    //this.totalRecords = mockMedics.length;
    //this.data = mockMedics.slice(page * 4, page * 4 + 4) as MedicEntity[];
    this.currentPage = page;
    this.medicUseCase.getByPage(page).subscribe((data: any) => {
      this.data = data.records as MedicEntity[];
      //this.data = mockMedics.slice(page * 4, page * 4 + 4) as MedicEntity[];
      console.log(this.data);
      this.totalRecords = data.totalRecords;
    })
  }

  changePage(page: number) {
    this.list(page);
  }

  delete(row: MedicEntity) {
    this.utilsService
      .confirm()
      .afterClosed()
      .subscribe((response: any) => {
        if (!response) {
          return;
        }

        this.medicUseCase
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
