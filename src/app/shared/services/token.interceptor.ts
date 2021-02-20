import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Injector } from "@angular/core";
import { Observable, of, throwError } from "rxjs";
import { catchError, mergeMap, retry } from "rxjs/operators";
import { AuthService } from "src/app/auth/auth.service";
import { AbstractStorage } from "./abstract-storage";

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private readonly storage: AbstractStorage,
    private readonly injector: Injector) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.storage.get('access_token');
    const requestCloned = request.clone({
      headers: request.headers.append('authorization', `Bearer ${accessToken}`)
    });

    const authService = this.injector.get(AuthService);

    return next.handle(requestCloned)
      .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.error instanceof ErrorEvent) {
          } else if (error.status === 409) {
            return authService.getNewAccessToken().pipe(
              retry(3), // reintenta las peticiones, primer tramo de la tuberia
              mergeMap((response: any) => {
                this.storage.save('access_token', response.accessToken);
                const newRequestClone = request.clone({
                  headers: request.headers.append('authorization', `Bearer ${response.accessToken}`)
                });
                return next.handle(newRequestClone);
              })
            )
          } else if (error.status === 409) {
            authService.logout();
          } else {
            if (error.error && error.error.result) {
              console.error(error);
            }
          }
          return throwError(error.error.result);
        })
      );
  }

}