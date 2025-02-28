import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { MedicOperationRepository } from "../application/medic-operation.repository";
import { mapping } from "../application/medic.dto";
import { MedicEntity } from "../domain/medic.entity";

@Injectable()
export class MedicOperation extends MedicOperationRepository {

  constructor(private readonly http: HttpClient) {
    super();
  }

  insert(fd: FormData): Observable<MedicEntity> {
    return this.http.post<MedicEntity>(`${environment.pathAPI}/medics/`, fd);
  }
  update(id: number, fd: FormData): Observable<MedicEntity> {
    return this.http.put<MedicEntity>(`${environment.pathAPI}/medics/${id}`, fd);
  }
  delete(id: number): Observable<MedicEntity> {
    return this.http.delete<MedicEntity>(`${environment.pathAPI}/medics/${id}`);
  }
  getAll(): Observable<MedicEntity[]> {
    const headers = new HttpHeaders({ autorization: "" });
    return this.http.get<MedicEntity[]>("https://angular03.cursos-dev.com/medics", { headers: headers });
  }
  getOne(id: number): Observable<MedicEntity> {
    throw new Error("Method not implemented.");
  }

  getByPage(page: number): Observable<any> {
    return this.http.get(`${environment.pathAPI}/medics/page/${page}/${environment.pageSize}`)
      .pipe(
        map((data: any) => {
          return {
            records: mapping(data.records),
            totalRecords: data.totalRecords
          }
        }),
        take(1))
  }

}