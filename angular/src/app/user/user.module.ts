import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import {UserService} from './servies/user.service';
import {HttpClientModule} from '@angular/common/http';
import { UserOnlynameComponent } from './components/user-onlyname/user-onlyname.component';
import {PostService} from '../post/services/post.service';



@NgModule({
  declarations: [UsersComponent, UserComponent, UserOnlynameComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    HttpClientModule,
  ],
  providers: [UserService]
})
export class UserModule { }

