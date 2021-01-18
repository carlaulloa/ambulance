import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleComponent } from './components/title/title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerListComponent } from './components/container-list/container-list.component';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';

/*
Si no voy a usar el modulo solo debo agregarlo al exports
para que pueda ser usado por otros
*/
@NgModule({
  declarations: [TitleComponent, ContainerListComponent, TableComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    TitleComponent,
    ContainerListComponent,
    TableComponent
  ]
})
export class SharedModule { }
