import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SpinCircleComponent} from "./spin-circle.component";
import {NzSpinModule} from "ng-zorro-antd/spin";
import {IconsProviderModule} from "../../../icons-provider.module";



@NgModule({
  declarations: [SpinCircleComponent],
  imports: [
    CommonModule,
    NzSpinModule,
    IconsProviderModule
  ],
  exports: [SpinCircleComponent]
})
export class SpinCircleModule { }
