import { AfterContentInit, Component, OnInit } from '@angular/core';
import { IMetadataColumn } from 'src/app/shared/interfaces/metadata-column.interface';

@Component({
  selector: 'amb-page-medics',
  templateUrl: './page-medics.component.html',
  styleUrls: ['./page-medics.component.css']
})
export class PageMedicsComponent implements OnInit {
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
    field: 'cmp',
    title: 'CMP'
  }, {
    field: 'dni',
    title: "Documento de Identidad"
  }];
  data: any[] = [
    {
      id: 1, name: "alterto", lastName: "vega", cmp: "45625", dni: "78652416"
    },
    {
      id: 2, name: "alterto", lastName: "vega", cmp: "45625", dni: "78652416"
    },
    {
      id: 3, name: "alterto", lastName: "vega", cmp: "45625", dni: "78652416"
    },{
      id: 4, name: "alterto", lastName: "vega", cmp: "45625", dni: "78652416"
    },
    {
      id: 5, name: "alterto", lastName: "vega", cmp: "45625", dni: "78652416"

    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
