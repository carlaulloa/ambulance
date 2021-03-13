import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { UserOperationRepository } from "../application/user-operation.repository";
import { UserEntity } from "../domain/user.entity";

@Injectable()
export class UserOperation extends UserOperationRepository {

  constructor(private readonly http: HttpClient) {
    super();
  }

  insert(user: UserEntity): Observable<UserEntity> {
    return this.http.post<UserEntity>(`${environment.pathAPI}/users/`, user);
  }
  update(id: number, user: UserEntity): Observable<UserEntity> {
    return this.http.put<UserEntity>(`${environment.pathAPI}/users/${id}`, user);
  }
  delete(id: number): Observable<UserEntity> {
    return this.http.delete<UserEntity>(`${environment.pathAPI}/users/${id}`);
  }
  getAll(): Observable<UserEntity[]> {
    const headers = new HttpHeaders({ autorization: "" });
    return this.http.get<UserEntity[]>(`${environment.pathAPI}/users`, { headers: headers });
  }
  getOne(id: number): Observable<UserEntity> {
    throw new Error("Method not implemented.");
  }

  getByPage(page: number): Observable<any> {
    return this.http.get(`${environment.pathAPI}/users/page/${page}/${environment.pageSize}`)
      .pipe(
        map((data: any) => {
          return {
            records: data.records,
            totalRecords: data.totalRecords
          }
        }),
        take(1))
  }

}