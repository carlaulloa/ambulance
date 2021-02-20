import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";

@Injectable()
export class AuthenticationGuard implements CanLoad, CanActivate {

  constructor(private readonly authService: AuthService,
    private readonly router: Router){}

  canLoad(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const userIsLogged = this.authService.userIsLogged;
    if(!userIsLogged){
      this.router.navigate(['/auth']);
    }
    return userIsLogged;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.canLoad();
  }

}