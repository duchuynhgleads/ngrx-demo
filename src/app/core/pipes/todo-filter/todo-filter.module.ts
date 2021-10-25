import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TodoFilterPipe} from "./todo-filter.pipe";



@NgModule({
  declarations: [TodoFilterPipe],
  imports: [
    CommonModule
  ],
  exports: [TodoFilterPipe]
})
export class TodoFilterModule { }
