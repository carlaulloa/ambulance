import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { DriverEntity } from "../domain/driver.entity";
import { DriverOperationRepository } from "./driver-operation.repository";

@Injectable()
export class DriverUsecase {
  constructor(private readonly driverepository: DriverOperationRepository){}

  insert(driver: DriverEntity): Observable<DriverEntity> {
    return this.driverepository.insert(driver);
  }

  update(id: number, driver: DriverEntity): Observable<DriverEntity> {
    return this.driverepository.update(id, driver);
  }

  delete(id: number): Observable<DriverEntity> {
    return this.driverepository.delete(id);
  }

  getAll(): Observable<DriverEntity[]> {
    return this.driverepository.getAll();
  }

  getOne(id: number): Observable<DriverEntity> {
    return this.driverepository.getOne(id);
  }

  getByPage(page: number): Observable<DriverEntity[] | DriverEntity>{
    return this.driverepository.getByPage(page);
  }
}