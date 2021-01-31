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
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { PageLockScreenComponent } from './presentation/pages/page-lock-screen/page-lock-screen.component';
import {MatCardModule} from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';


@NgModule({
  declarations: [HeaderComponent, MenuComponent, PageLoginComponent, PageLockScreenComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatMenuModule,
    FlexLayoutModule,
    MatListModule,
    RouterModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  exports: [
    HeaderComponent,
    MenuComponent,
    PageLoginComponent,
    RouterModule
  ]
})
export class CoreModule { }
