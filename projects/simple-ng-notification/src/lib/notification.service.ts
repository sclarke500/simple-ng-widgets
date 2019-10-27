import { Injectable } from '@angular/core';

import { NotificationInternal } from './notification.internal';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor (
    private service: NotificationInternal,
  ) { }

  set busy (isBusy: boolean) {
    setTimeout(() => this.service.busy = isBusy);
  }

  public notify(message) {
    this.service.notify(message);
  }

}
