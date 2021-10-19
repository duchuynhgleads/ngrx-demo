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


@NgModule({
  imports: [WelcomeRoutingModule, NzGridModule, NzCardModule, NzListModule, NzTypographyModule, CommonModule],
  declarations: [WelcomeComponent, TodoMiniListComponent, TodoFilterPipe],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
