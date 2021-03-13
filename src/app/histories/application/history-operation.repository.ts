import { Observable } from "rxjs";
import { HistoryEntity } from "../domain/history.entity";

export abstract class HistoryOperationRepository {
  abstract insert(history: HistoryEntity): Observable<HistoryEntity>;
  abstract update(id: number, history: HistoryEntity): Observable<HistoryEntity>;
  abstract delete(id: number): Observable<HistoryEntity>;
  abstract getAll(): Observable<HistoryEntity[]>;
  abstract getOne(id: number): Observable<HistoryEntity>;
  abstract getByPage(page: number):Observable<HistoryEntity[] | HistoryEntity>
}