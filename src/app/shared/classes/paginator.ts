import { Injectable } from "@angular/core";
import { MatPaginatorIntl } from "@angular/material/paginator";

@Injectable()
export class Paginator extends MatPaginatorIntl {
  constructor() {
    super();
    this.nextPageLabel = "Siguiente página";
    this.previousPageLabel = "Anterior pág."
    this.itemsPerPageLabel = "Items por pág.";
    this.lastPageLabel = "Última pág.";
  }

 /*
  getRangeLabel = (page: number, pageSize: number, length: number) => {

  }*/
}
