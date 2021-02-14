import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Tokens } from '../shared/interfaces/tokens.interface';
import { AbstractStorage } from '../shared/services/abstract-storage';
import { UserEntity } from '../users/domain/user.entity';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
        this.storage.save('access_token', data.accessToken);
        this.storage.save('refreshToken', data.refreshToken);
        this.router.navigate(['/dashboard']);
      });
  }

}
