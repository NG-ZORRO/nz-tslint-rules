import { NgModule } from '@angular/core';

import {
  NzAddOnModule,
  NzAlertModule as Alter,
  NzButtonModule,
  NZ_CONFIG,
  NzNotificationComponent,
  NzNotificationService,
  NzNotificationData as NotificationData
} from 'ng-zorro-antd';

import { NzNoAnimationModule  } from 'ng-zorro-antd';

@NgModule({
  declarations: [NzNotificationComponent],
  imports: [
    NzNoAnimationModule,
    NzAddOnModule,
    Alter,
    NzButtonModule
  ],
  providers: [
    NzNotificationService,
    {
      provide: NZ_CONFIG,
      useValue: {}
    }
  ]
})
export class Module {}
