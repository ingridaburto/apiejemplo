import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { todosRoutingModule } from './todos-routing.module';
import {todosComponents } from './todos.component';


@NgModule({
  declarations: [
   todosComponents
  ],
  imports: [
    CommonModule,
    todosRoutingModule
  ]
})
export class TodosModule { }
