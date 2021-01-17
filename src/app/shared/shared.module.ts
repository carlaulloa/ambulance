import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';


/*
Si no voy a usar el modulo solo debo agregarlo al exports
para que pueda ser usado por otros
*/
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule
  ]
})
export class SharedModule { }
