import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { IMetadataColumn } from 'src/app/shared/interfaces/metadata-column.interface';

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
  constructor(private readonly configService: ConfigService) {
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
  }

}
