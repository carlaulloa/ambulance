import { AfterContentInit, Component, ContentChildren, EventEmitter, Input, OnChanges, OnInit, Output, QueryList, ViewChild } from '@angular/core';
import { MatColumnDef, MatTable, MatTableDataSource } from '@angular/material/table';
import { IMetadataColumn } from '../../interfaces/metadata-column.interface';

@Component({
  selector: 'amb-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterContentInit, OnChanges {
  @Input() data: any;
  @Input() metadataColumns: IMetadataColumn[] = [];
  @Input() total: number = 0;
  @Output() onChangePage: EventEmitter<number> = new EventEmitter<number>();
  // va a seleccionar el primero , si tengo varios uso viewchildren 
  @ViewChild(MatTable, { static: true }) table: MatTable<any> | undefined;
  // lo que no forma parte del view se llama content
  @ContentChildren(MatColumnDef) columnsDef: QueryList<MatColumnDef> | undefined;

  dataSource: any;
  listFields: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.listFields = this.metadataColumns.map(el => el.field);
    this.loadData();
  }

  ngOnChanges(){
    this.loadData();
  }

  /**
   * Esto se ejecuta cuando todo el content ha cargado
   */
  ngAfterContentInit(){
    if(!this.columnsDef) return;
    this.columnsDef.forEach((columnDef) => this.table?.addColumnDef(columnDef));
    if(this.columnsDef.length){
      this.listFields.push('actions');
    }
  }

  loadData(): void {
    this.dataSource = new MatTableDataSource<any>(this.data);
  }

  handlerPage(evt: any){
    this.onChangePage.emit(evt.pageIndex);
  }
}
