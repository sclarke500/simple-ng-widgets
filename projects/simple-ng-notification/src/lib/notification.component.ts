import { Component } from '@angular/core';

import { NotificationInternal } from './notification.internal';

@Component({
  selector: 'sng-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['notification.component.css'],
})

export class NotificationComponent {

  constructor (
    public service: NotificationInternal,
  ) { }

}
