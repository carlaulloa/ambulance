import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { HistoryOperationRepository } from "../application/history-operation.repository";
import { HistoryEntity } from "../domain/history.entity";

@Injectable()
export class HistoryOperation extends HistoryOperationRepository {

  constructor(private readonly http: HttpClient) {
    super();
  }

  insert(history: HistoryEntity): Observable<HistoryEntity> {
    return this.http.post<HistoryEntity>(`${environment.pathAPI}/histories/`, history);
  }
  update(id: number, history: HistoryEntity): Observable<HistoryEntity> {
    return this.http.put<HistoryEntity>(`${environment.pathAPI}/histories/${id}`, history);
  }
  delete(id: number): Observable<HistoryEntity> {
    return this.http.delete<HistoryEntity>(`${environment.pathAPI}/histories/${id}`);
  }
  getAll(): Observable<HistoryEntity[]> {
    const headers = new HttpHeaders({ autorization: "" });
    return this.http.get<HistoryEntity[]>(`${environment.pathAPI}/histories`, { headers: headers });
  }
  getOne(id: number): Observable<HistoryEntity> {
    throw new Error("Method not implemented.");
  }

  getByPage(page: number): Observable<any> {
    return this.http.get(`${environment.pathAPI}/histories/page/${page}/${environment.pageSize}`)
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