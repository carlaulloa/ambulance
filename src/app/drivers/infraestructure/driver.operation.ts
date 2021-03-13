import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { DriverOperationRepository } from "../application/driver-operation.repository";
import { DriverEntity } from "../domain/driver.entity";

@Injectable()
export class DriverOperation extends DriverOperationRepository {

  constructor(private readonly http: HttpClient) {
    super();
  }

  insert(driver: DriverEntity): Observable<DriverEntity> {
    return this.http.post<DriverEntity>(`${environment.pathAPI}/drivers/`, driver);
  }
  update(id: number, driver: DriverEntity): Observable<DriverEntity> {
    return this.http.put<DriverEntity>(`${environment.pathAPI}/drivers/${id}`, driver);
  }
  delete(id: number): Observable<DriverEntity> {
    return this.http.delete<DriverEntity>(`${environment.pathAPI}/drivers/${id}`);
  }
  getAll(): Observable<DriverEntity[]> {
    const headers = new HttpHeaders({ autorization: "" });
    return this.http.get<DriverEntity[]>(`${environment.pathAPI}/drivers`, { headers: headers });
  }
  getOne(id: number): Observable<DriverEntity> {
    throw new Error("Method not implemented.");
  }

  getByPage(page: number): Observable<any> {
    return this.http.get(`${environment.pathAPI}/drivers/page/${page}/${environment.pageSize}`)
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