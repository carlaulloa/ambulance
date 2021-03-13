import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserEntity } from "../domain/user.entity";
import { UserOperationRepository } from "./user-operation.repository";

@Injectable()
export class UserUsecase {
  constructor(private readonly userepository: UserOperationRepository){}

  insert(user: UserEntity): Observable<UserEntity> {
    return this.userepository.insert(user);
  }

  update(id: number, user: UserEntity): Observable<UserEntity> {
    return this.userepository.update(id, user);
  }

  delete(id: number): Observable<UserEntity> {
    return this.userepository.delete(id);
  }

  getAll(): Observable<UserEntity[]> {
    return this.userepository.getAll();
  }

  getOne(id: number): Observable<UserEntity> {
    return this.userepository.getOne(id);
  }

  getByPage(page: number): Observable<UserEntity[] | UserEntity>{
    return this.userepository.getByPage(page);
  }
}