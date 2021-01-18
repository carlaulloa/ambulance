import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './presentation/views/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from './presentation/views/menu/menu.component';
import {MatListModule} from '@angular/material/list';
import { PageLoginComponent } from './presentation/pages/page-login/page-login.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [HeaderComponent, MenuComponent, PageLoginComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    MatListModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PageLoginComponent,
    RouterModule
  ]
})
export class CoreModule { }
