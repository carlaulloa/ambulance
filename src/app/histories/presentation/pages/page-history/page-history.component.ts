import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/config/config.service';
import { IMetadataColumn } from 'src/app/shared/interfaces/metadata-column.interface';

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
