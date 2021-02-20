import { Observable } from "rxjs";
import { MedicEntity } from "../domain/medic.entity";
import { MedicRequest } from "./medic-request";

export abstract class MedicOperationRepository {
  abstract insert(fd: FormData): Observable<MedicEntity>;
  abstract update(id: number, fd: FormData): Observable<MedicEntity>;
  abstract delete(id: number): Observable<MedicEntity>;
  abstract getAll(): Observable<MedicEntity[]>;
  abstract getOne(id: number): Observable<MedicEntity>;
  abstract getByPage(page: number):Observable<MedicRequest[] | MedicRequest>
}