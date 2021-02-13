import { Component, OnInit } from '@angular/core';
import { MedicEntity } from 'src/app/medics/domain/medic.entity';
import { IMetadataColumn } from 'src/app/shared/interfaces/metadata-column.interface';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FormMedicComponent } from '../../views/form-medic/form-medic.component';
import metadataColumn from '../../../mocks/metadata-column.json';
import { ConfigService } from 'src/app/config/config.service';
import { MedicUsecase } from 'src/app/medics/application/medic.usercase';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'amb-page-medics',
  templateUrl: './page-medics.component.html',
  styleUrls: ['./page-medics.component.css']
})
export class PageMedicsComponent implements OnInit {
  metadataColumns: IMetadataColumn[] = metadataColumn;
  data: MedicEntity[] = [];
  totalRecords: number = 0;
  
  constructor(private readonly configService: ConfigService,
    private readonly utilsService: UtilsService,
    private readonly medicUseCase: MedicUsecase) { 
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
          return false;
        }
        if (!response.id) {
          console.log(response)
          //this.medicUseCase.insert(response).subscribe(res => console.log(res));
        } else {
        }
      })
  }

  changePage(pageIndex: number){
    this.list(pageIndex);
  }

  list(page: number){
    /*this.totalRecords = mockMedics.length;
    this.data = mockMedics.slice(page * 4, page * 4 + 4);*/
    this.medicUseCase.getByPage(1)
      .subscribe(data => console.log(data))
  }

}
