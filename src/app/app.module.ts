import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MedicsModule } from './medics/medics.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { IconService } from './shared/services/icon.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { Paginator } from './shared/classes/paginator';
import { ConfigModule } from './config/config.module';
import { AMB_CONFIG } from './config/info';
import { AbstractStorage } from './shared/services/abstract-storage';
import { StorageService } from './shared/services/storage.service';
import { TokenInterceptor } from './shared/services/token.interceptor';
import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { ExportRepository } from './shared/infraestructure/export.repository';
import { ExportService } from './shared/services/export.service';
import { MyErrorHandler } from './shared/services/error.handler.service';


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
  providers: [
  AuthenticationGuard, 
  {
    provide: MatPaginatorIntl, useClass: Paginator
  }, {
    provide: AbstractStorage, useClass: StorageService  
  }, {
    provide: ExportRepository, useClass: ExportService
  },{
    provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true
  },{
    provide: ErrorHandler, useClass: MyErrorHandler
  }],
  bootstrap: [AppComponent]
})
export class AppModule { 

  constructor(private readonly iconService: IconService) {
    
  }

}
