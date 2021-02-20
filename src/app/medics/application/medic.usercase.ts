import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { MedicEntity } from "../domain/medic.entity";
import { MedicOperationRepository } from "./medic-operation.repository";
import { MedicRequest } from "./medic-request";

@Injectable()
export class MedicUsecase {
  constructor(private readonly medicRepository: MedicOperationRepository){}

  insert(fd: FormData): Observable<MedicEntity> {
    return this.medicRepository.insert(fd);
  }

  update(id: number, fd: FormData): Observable<MedicEntity> {
    return this.medicRepository.update(id, fd);
  }

  delete(id: number): Observable<MedicEntity> {
    return this.medicRepository.delete(id);
  }

  getAll(): Observable<MedicEntity[]> {
    return this.medicRepository.getAll();
  }

  getOne(id: number): Observable<MedicEntity> {
    return this.medicRepository.getOne(id);
  }

  getByPage(page: number): Observable<MedicRequest[] | MedicRequest>{
    return this.medicRepository.getByPage(page);
  }
}