import { Component, OnInit } from '@angular/core';
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
    field: 'name',
    title: 'Nombre'
  }, {
    field: 'lastName',
    title: 'Apellido'
  }, {
    field: 'license',
    title: 'Licencia de Conducir'
  }];
  data: any[] = [
    {
      id: 1, name: "alterto", lastName: "vega", license: "456225452"
    },
    {
      id: 2, name: "alterto", lastName: "vega", license: "456225452"
    },
    {
      id: 3, name: "alterto", lastName: "vega", license: "456225452"
    },{
      id: 4, name: "alterto", lastName: "vega", license: "456225452"
    },
    {
      id: 5, name: "alterto", lastName: "vega", license: "456225452"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
