import { NgModule } from '@angular/core';

import {
  NzOutletModule,
  NzAlertModule as Alter,
  NzButtonModule,
  NZ_CONFIG,
  NzNotificationComponent,
  NzNotificationService,
  NzNotificationData as NotificationData
} from 'ng-zorro-antd';

import { NzNoAnimationModule  } from 'ng-zorro-antd';

export type NotificationDataA = NotificationData

@NgModule({
  declarations: [NzNotificationComponent],
  imports: [
    NzNoAnimationModule,
    NzOutletModule,
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
