import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialogRef } from '@angular/material/dialog';
import { ConfigService } from 'src/app/config/config.service';
import { ExportComponent } from 'src/app/shared/components/export/export.component';
import { IMetadataColumn } from 'src/app/shared/interfaces/metadata-column.interface';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { UserUsecase } from 'src/app/users/application/user.usecase';
import { UserEntity } from 'src/app/users/domain/user.entity';
import { FormUserComponent } from '../../views/form-user/form-user.component';

@Component({
  selector: 'amb-page-users',
  templateUrl: './page-users.component.html',
  styleUrls: ['./page-users.component.css']
})
export class PageUsersComponent implements OnInit {
  metadataColumns: IMetadataColumn[] = [{
    field: 'id',
    title: 'ID'
  }, {
    field: 'nombre',
    title: 'Nombre'
  }, {
    field: 'correo',
    title: 'Correo'
  }, {
    field: 'activo',
    title: 'Activo'
  },];
  data: any[] = [];
  totalRecords: number = 0;
  currentPage = 0;

  constructor(private readonly configService: ConfigService,
    private readonly utilsService: UtilsService,
    private readonly userUseCase: UserUsecase,
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

  openForm(row: UserEntity | any = null) {
    const ref: MatDialogRef<any> = this.utilsService.openModal(FormUserComponent, {
      disableClose: true, // agregar un boton para cerrar
      panelClass: "container-modal", // 
      data: row
    });
    
    ref.afterClosed().subscribe((response) => {
        if (!response) {
          return;
        }
        if (!row) {
          this.userUseCase
            .insert(response)
            .subscribe(() => this.list(this.currentPage));
        } else {
          this.userUseCase
            .update(row.id, response)
            .subscribe(() => this.list(this.currentPage));
        }
      })  
  }

  list(page: number){
    //this.totalRecords = mockMedics.length;
    //this.data = mockMedics.slice(page * 4, page * 4 + 4) as MedicEntity[];
    this.currentPage = page;
    this.userUseCase.getByPage(page).subscribe((data: any) => {
      this.data = data.records as UserEntity[];
      //this.data = mockMedics.slice(page * 4, page * 4 + 4) as MedicEntity[];
      this.totalRecords = data.totalRecords;
    })
  }

  changePage(page: number) {
    this.list(page);
  }

  delete(row: UserEntity) {
    this.utilsService
      .confirm()
      .afterClosed()
      .subscribe((response: any) => {
        if (!response) {
          return;
        }
        this.userUseCase
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
