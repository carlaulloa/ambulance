import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { AbstractStorage } from "./abstract-storage";

@Injectable()
export class  TokenInterceptor implements HttpInterceptor {

  constructor(private readonly storage: AbstractStorage) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.storage.get('access_token');
    const requestCloned = request.clone({
      headers: request.headers.append('authorization', `Bearer ${accessToken}`)
    });
    return next.handle(requestCloned);
  }

}