import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HistoryEntity } from "../domain/history.entity";
import { HistoryOperationRepository } from "./history-operation.repository";

@Injectable()
export class HistoryUsecase {
  constructor(private readonly historyepository: HistoryOperationRepository){}

  insert(history: HistoryEntity): Observable<HistoryEntity> {
    return this.historyepository.insert(history);
  }

  update(id: number, history: HistoryEntity): Observable<HistoryEntity> {
    return this.historyepository.update(id, history);
  }

  delete(id: number): Observable<HistoryEntity> {
    return this.historyepository.delete(id);
  }

  getAll(): Observable<HistoryEntity[]> {
    return this.historyepository.getAll();
  }

  getOne(id: number): Observable<HistoryEntity> {
    return this.historyepository.getOne(id);
  }

  getByPage(page: number): Observable<HistoryEntity[] | HistoryEntity>{
    return this.historyepository.getByPage(page);
  }
}