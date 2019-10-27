import { Injectable } from '@angular/core';

import { PromptService } from './prompt.service';

@Injectable({
  providedIn: "root"
})
export class DialogService {

  constructor (
    private promptService: PromptService,
  ) { }

  prompt(message, caption?) {
    return this.promptService.prompt(message, caption);
  }

  inputBox(message, defaultValue, caption?) {
    return this.promptService.inputBox(message, defaultValue, caption);
  }

  confirm(message, caption?) {
    return this.promptService.confirm(message, caption);
  }

}
