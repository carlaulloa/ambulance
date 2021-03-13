import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { UserOperationRepository } from "./application/user-operation.repository";
import { UserUsecase } from "./application/user.usecase";
import { UserOperation } from "./infraestructure/user.operation";
import { PageUsersComponent } from './presentation/pages/page-users/page-users.component';
import { UsersRoutingModule } from "./users-routing.module";
import { FormUserComponent } from './presentation/views/form-user/form-user.component';

@NgModule({
  declarations: [PageUsersComponent, FormUserComponent], 
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ], 
  exports: [],
  providers: [
    UserUsecase,
    {
      provide: UserOperationRepository,
      useClass: UserOperation
    }
  ]
})
export class UsersModule {

}