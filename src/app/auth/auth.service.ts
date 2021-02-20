import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AbstractStorage } from '../shared/services/abstract-storage';
import { UserEntity } from '../users/domain/user.entity';
import { take } from 'rxjs/operators';
import jwtDecode from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLogged = false;

  constructor(private readonly httpClient: HttpClient,
    private readonly storage: AbstractStorage,
    private readonly router: Router) { }

  login(user: UserEntity) {
    this.httpClient.post(`${environment.pathAPI}/users/login`, {
      correo: user.correo,
      password: user.contrasena
    })
      .pipe(take(1))
      .subscribe((data: any) => {
        this.isLogged = true;
        this.storage.save('access_token', data.accessToken);
        this.storage.save('refreshToken', data.refreshToken);
        this.router.navigate(['/dashboard']);
      });
  }

  logout() {
    this.isLogged = false;
    this.storage.clear();
    this.router.navigate(['/auth']);
  }

  get userIsLogged(): boolean {
    const accessToken = this.storage.get('access_token');
    return this.isLogged || !!accessToken;
  }

  private getRolesUser(): string[] {
    const accessToken = this.storage.get('access_token') as string;
    const payload: any = jwtDecode(!accessToken ? '' : (accessToken as string));
    const rolesUser = payload["roles"];
    return rolesUser;
  }

  isUserInRoles(...rolesAllowed: string[]): boolean {
    const rolesUser = this.getRolesUser();
    let isAllowed = false;
    for (const role of rolesAllowed) {
      if (rolesUser.indexOf(role) > -1) {
        isAllowed = true;
        break;
      }
    }
    return isAllowed;
  }

  getNewAccessToken(): Observable<{ accessToken: string, refreshToken: string }> {
    const refreshToken = this.storage.get('refreshToken');
    return this.httpClient.get<{ accessToken: string, refreshToken: string }>
      (`${environment.pathAPI}/users/refresh/${refreshToken}`);
  }

}
