import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MedicOperationRepository } from "../application/medic-operation.repository";
import { MedicEntity } from "../domain/medic.entity";

@Injectable()
export class MedicOperation extends MedicOperationRepository {

  constructor(private readonly http: HttpClient){
    super();
  }

  insert(medic: MedicEntity): Observable<MedicEntity> {
    throw new Error("Method not implemented.");
  }
  update(id: string, medic: MedicEntity): Observable<MedicEntity> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Observable<MedicEntity> {
    throw new Error("Method not implemented.");
  }
  getAll(): Observable<MedicEntity[]> {
    const headers = new HttpHeaders({autorization: ""});
    return this.http.get<MedicEntity[]>("https://angular03.cursos-dev.com/medics", { headers: headers });
  }
  getOne(id: string): Observable<MedicEntity> {
    throw new Error("Method not implemented.");
  }
  getByPage(page: number): Observable<MedicEntity[]> {
    throw new Error("Method not implemented.");
  }

}