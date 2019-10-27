import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationInternal {

  public message: string;
  public busy: boolean;

  promptResolve;
  promptMessage;
  inputPrompt;
  inputValue;
  confirmPrompt;

  constructor() { }

  public notify(message) {
    // show message for 4 seconds
    this.message = message;
    setTimeout(() => this.message = '', 4000);
  }


}
