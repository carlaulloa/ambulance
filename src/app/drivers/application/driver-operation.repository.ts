import { Observable } from "rxjs";
import { DriverEntity } from "../domain/driver.entity";

export abstract class DriverOperationRepository {
  abstract insert(driver: DriverEntity): Observable<DriverEntity>;
  abstract update(id: number, driver: DriverEntity): Observable<DriverEntity>;
  abstract delete(id: number): Observable<DriverEntity>;
  abstract getAll(): Observable<DriverEntity[]>;
  abstract getOne(id: number): Observable<DriverEntity>;
  abstract getByPage(page: number):Observable<DriverEntity[] | DriverEntity>
}