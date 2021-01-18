import { Component, OnInit } from '@angular/core';
import { IMetadataColumn } from 'src/app/shared/interfaces/metadata-column.interface';

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
    field: 'fullname',
    title: 'Nombre Completo'
  }, {
    field: 'license',
    title: 'Licencia de conducir'
  }];
  data: any[] = [
    {
      id: 1, fullname: "Alberto Vega", license: "456225452"
    },
    {
      id: 2, fullname: "Alberto Vega", license: "456225452"
    },
    {
      id: 3, fullname: "Alberto Vega", license: "456225452"
    },{
      id: 4, fullname: "Alberto Vega", license: "456225452"
    },
    {
      id: 5, fullname: "Alberto Vega", license: "456225452"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
