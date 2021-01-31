import { AfterContentInit, Component, OnInit } from '@angular/core';
import { MedicEntity } from 'src/app/medics/domain/medic.entity';
import { IMetadataColumn } from 'src/app/shared/interfaces/metadata-column.interface';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { FormMedicComponent } from '../../views/form-medic/form-medic.component';
import mockMedics from '../../../mocks/medics.json'; 
import metadataColumn from '../../../mocks/metadata-column.json';
import { ConfigService } from 'src/app/config/config.service';
@Component({
  selector: 'amb-page-medics',
  templateUrl: './page-medics.component.html',
  styleUrls: ['./page-medics.component.css']
})
export class PageMedicsComponent implements OnInit {
  metadataColumns: IMetadataColumn[] = metadataColumn;
  data: MedicEntity[] = mockMedics;
  totalRecords: number = 0;
  
  constructor(private readonly configService: ConfigService,
    private readonly utilsService: UtilsService) { 
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
    this.utilsService.openModal(FormMedicComponent, {
      disableClose: true, // agregar un boton para cerrar
      panelClass: "container-modal", // 
      data: row
    });
  }

  changePage(pageIndex: number){
    this.list(pageIndex);
  }

  list(page: number){
    this.totalRecords = mockMedics.length;
    this.data = mockMedics.slice(page * 4, page * 4 + 4);
  }

}
