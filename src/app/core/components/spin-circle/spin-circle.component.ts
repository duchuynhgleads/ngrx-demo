import {Component, Input} from '@angular/core';
import {NzSizeLDSType} from "ng-zorro-antd/core/types";

@Component({
  selector: 'app-spin-circle',
  template: `
    <ng-template #indicatorTemplate><i nz-icon nzType="loading"></i></ng-template>
    <nz-spin nzSimple [nzIndicator]="indicatorTemplate" [nzSize]="nzSize"></nz-spin>
  `,
  styles: [
    `
      :host::ng-deep {
        nz-spin {
          display: inline-block;
        }
        nz-spin > div {
          display: inline-block;
        }
      }
    `
  ]
})
export class SpinCircleComponent {
  @Input() nzSize: NzSizeLDSType = 'default';
}
