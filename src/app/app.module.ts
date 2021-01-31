import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicsModule } from './medics/medics.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { IconService } from './shared/services/icon.service';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './shared/classes/paginator';
import { ConfigModule } from './config/config.module';
import { AMB_CONFIG } from './config/info';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SharedModule,
    CoreModule,
    ConfigModule.forRoot(AMB_CONFIG)
  ],
  providers: [{
    provide: MatPaginatorIntl, useClass: Paginator
  }],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private readonly iconService: IconService) {
    
  }

}
