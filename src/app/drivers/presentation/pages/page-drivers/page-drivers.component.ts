import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfigService } from 'src/app/config/config.service';
import { DriverUsecase } from 'src/app/drivers/application/driver.usecase';
import { DriverEntity } from 'src/app/drivers/domain/driver.entity';
import { ExportComponent } from 'src/app/shared/components/export/export.component';
import { IMetadataColumn } from 'src/app/shared/interfaces/metadata-column.interface';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FormDriverComponent } from '../../views/form-driver/form-driver.component';

@Component({
  selector: 'amb-page-drivers',
  templateUrl: './page-drivers.component.html',
  styleUrls: ['./page-drivers.component.css']
})
export class PageDriversComponent implements OnInit {
  metadataColumns: IMetadataColumn[] = [{
    field: 'id',
    title: 'ID'
  }, {
    field: 'fullName',
    title: 'Nombre Completo'
  }, {
    field: 'license',
    title: 'Licencia de Conducir'
  }];
  data: any[] = [
    {
      id: 1, fullName: "alterto vega", license: "456225452"
    },
    {
      id: 2, fullName: "alterto vega", license: "456225452"
    },
    {
      id: 3, fullName: "alterto vega", license: "456225452"
    }, {
      id: 4, fullName: "alterto vega", license: "456225452"
    },
    {
      id: 5, fullName: "alterto vega", license: "456225452"
    }
  ];
  totalRecords: number = 0;
  currentPage = 0;

  constructor(private readonly configService: ConfigService,
    private readonly utilsService: UtilsService,
    private readonly driverUseCase: DriverUsecase,
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

  openForm(row: DriverEntity | any = null) {
    const ref: MatDialogRef<any> = this.utilsService.openModal(FormDriverComponent, {
      disableClose: true, // agregar un boton para cerrar
      panelClass: "container-modal", // 
      data: row
    });
    
    ref.afterClosed().subscribe((response) => {
        if (!response) {
          return;
        }
        if (!row) {
          this.driverUseCase
            .insert(response)
            .subscribe(() => this.list(this.currentPage));
        } else {
          this.driverUseCase
            .update(row.id, response)
            .subscribe(() => this.list(this.currentPage));
        }
      })  
  }

  list(page: number){
    //this.totalRecords = mockMedics.length;
    //this.data = mockMedics.slice(page * 4, page * 4 + 4) as MedicEntity[];
    this.currentPage = page;
    this.driverUseCase.getByPage(page).subscribe((data: any) => {
      this.data = data.records as DriverEntity[];
      //this.data = mockMedics.slice(page * 4, page * 4 + 4) as MedicEntity[];
      this.totalRecords = data.totalRecords;
    })
  }

  changePage(page: number) {
    this.list(page);
  }

  delete(row: DriverEntity) {
    this.utilsService
      .confirm()
      .afterClosed()
      .subscribe((response: any) => {
        if (!response) {
          return;
        }
        this.driverUseCase
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
