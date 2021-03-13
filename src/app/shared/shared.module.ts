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
import { ExportComponent } from './components/export/export.component';
import {MatListModule} from '@angular/material/list';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { ExportUseCase } from './application/export.usecase';





/*
Si no voy a usar el modulo solo debo agregarlo al exports
para que pueda ser usado por otros
*/
@NgModule({
  declarations: [TitleComponent, ContainerListComponent, TableComponent, PhotoComponent, UploadDirective, RolesAllowedDirective, ConfirmComponent, ExportComponent],
  imports: [
    MatButtonModule,
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    FlexLayoutModule,
    MatTableModule,
    MatDialogModule,
    MatSlideToggleModule,
    MatPaginatorModule,
    WebcamModule,
    MatBottomSheetModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    FlexLayoutModule,
    MatToolbarModule,
    TitleComponent,
    ContainerListComponent,
    TableComponent,
    MatTableModule,
    MatTooltipModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    PhotoComponent,
    RolesAllowedDirective,
    ExportComponent,
    MatBottomSheetModule,
    MatListModule
  ],
  providers: [
    ExportUseCase
  ]
})
export class SharedModule { }
