import { NgModule } from '@angular/core';

import { WelcomeRoutingModule } from './welcome-routing.module';

import { WelcomeComponent } from './welcome.component';
import {NzGridModule} from "ng-zorro-antd/grid";
import {NzCardModule} from "ng-zorro-antd/card";
import { TodoMiniListComponent } from './components/todo-mini-list/todo-mini-list.component';
import {NzListModule} from "ng-zorro-antd/list";
import {NzTypographyModule} from "ng-zorro-antd/typography";
import {CommonModule} from "@angular/common";
import { TodoFilterPipe } from './pipes/todo-filter.pipe';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import {NzFormModule} from "ng-zorro-antd/form";
import {NzInputModule} from "ng-zorro-antd/input";
import {ReactiveFormsModule} from "@angular/forms";
import {NzSelectModule} from "ng-zorro-antd/select";
import {NzButtonModule} from "ng-zorro-antd/button";
import {ScrollingModule} from "@angular/cdk/scrolling";


@NgModule({
  imports: [WelcomeRoutingModule, NzGridModule, NzCardModule, NzListModule, NzTypographyModule, CommonModule, NzFormModule, NzInputModule, ReactiveFormsModule, NzSelectModule, NzButtonModule, ScrollingModule],
  declarations: [WelcomeComponent, TodoMiniListComponent, TodoFilterPipe, TodoFormComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
