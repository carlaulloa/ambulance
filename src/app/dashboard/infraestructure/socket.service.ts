import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { SocketRepository } from "../application/socket.repository";
import * as io from "socket.io-client";


@Injectable({
  providedIn: 'root'
})
export class SocketService extends SocketRepository {

  socket: any;

  constructor(){
    super();
    this.socket = io(environment.urlSocket);
  }

  listen(eventName: string ){
    return new Observable(observer => {
      this.socket.on(eventName, (result: any) => {
        console.log(result);
        observer.next(result);
      })
    })
  }

}