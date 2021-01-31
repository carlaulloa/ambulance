import { Inject, Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Config } from "./layer.interface";
import { AMB_CONFIG } from "./tokens";
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  /**
   * puede enviar incluso a los suscriptores que se suscribieron despues d ecrear el observable
   */
  private configSubject: BehaviorSubject<Config>;

  constructor(@Inject(AMB_CONFIG) config: Config){
    this.configSubject = new BehaviorSubject<Config>(config);
  }

  set config(value: any){
    let config = this.configSubject.getValue();
    config = _.merge({}, config, value);

    this.configSubject.next(config);
  }

  get config(): any {
    return this.configSubject.asObservable();
  }
}