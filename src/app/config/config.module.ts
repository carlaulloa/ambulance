import { ModuleWithProviders, NgModule } from '@angular/core';
import { Config } from './layer.interface';
import { AMB_CONFIG } from './tokens';



@NgModule()
export class ConfigModule {
  /**
   * devuelve un modulo
   * @param config 
   */
  static forRoot(config: Config): ModuleWithProviders<ConfigModule> {
    return {
      ngModule: ConfigModule,
      providers: [
        {
          provide: AMB_CONFIG,
          useValue: config
        }
      ]
    }
  }
 }
