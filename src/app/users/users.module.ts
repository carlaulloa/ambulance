import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { PageUsersComponent } from './presentation/pages/page-users/page-users.component';
import { UsersRoutingModule } from "./users-routing.module";

@NgModule({
  declarations: [PageUsersComponent], 
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ], 
  exports: []
})
export class UsersModule {

}