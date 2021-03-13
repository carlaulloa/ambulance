import { Observable } from "rxjs";
import { UserEntity } from "../domain/user.entity";

export abstract class UserOperationRepository {
  abstract insert(user: UserEntity): Observable<UserEntity>;
  abstract update(id: number, user: UserEntity): Observable<UserEntity>;
  abstract delete(id: number): Observable<UserEntity>;
  abstract getAll(): Observable<UserEntity[]>;
  abstract getOne(id: number): Observable<UserEntity>;
  abstract getByPage(page: number):Observable<UserEntity[] | UserEntity>
}