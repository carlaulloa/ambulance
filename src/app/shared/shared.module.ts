import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TitleComponent } from './components/title/title.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ContainerListComponent } from './components/container-list/container-list.component';
import { MatCardModule } from '@angular/material/card';
import { TableComponent } from './components/table/table.component';
import { MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { PhotoComponent } from './components/photo/photo.component';
import { UploadDirective } from './directives/upload.directive';
import { WebcamModule } from 'ngx-webcam';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RolesAllowedDirective } from './directives/roles-allowed.directive';
import { ConfirmComponent } from './components/confirm/confirm.component';




/*
Si no voy a usar el modulo solo debo agregarlo al exports
para que pueda ser usado por otros
*/
@NgModule({
  declarations: [TitleComponent, ContainerListComponent, TableComponent, PhotoComponent, UploadDirective, RolesAllowedDirective, ConfirmComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatDialogModule,
    WebcamModule,
    MatSlideToggleModule,
    MatPaginatorModule
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    TitleComponent,
    ContainerListComponent,
    TableComponent,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    PhotoComponent,
    MatPaginatorModule,
    RolesAllowedDirective
  ]
})
export class SharedModule { }
