import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { usersRoutingModule } from './users-routing.module';
import {usersComponents } from './users.component';


@NgModule({
  declarations: [
   usersComponents
  ],
  imports: [
    CommonModule,
    usersRoutingModule
  ]
})
export class UsersModule { }
