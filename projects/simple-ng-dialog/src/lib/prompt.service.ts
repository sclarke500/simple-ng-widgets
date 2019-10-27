import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class PromptService {

  promptMessage;
  promptResolve;
  inputPrompt;
  inputValue;
  confirmPrompt;
  caption;

  prompt(message, caption?) {
    this.caption = caption || null;
    return new Promise((resolve, reject) => {
      this.promptMessage = message;
      this.promptResolve = resolve;
    });
  }
  promptOk() {
    this.promptResolve();
    this.promptMessage = null;
    this.promptResolve = null;
  }

  inputBox(message, defaultValue, caption?) {
    this.caption = caption || null;
    return new Promise((resolve, reject) => {
      this.inputPrompt = message;
      this.inputValue = defaultValue;
      this.promptResolve = resolve;
    });
  }
  inputOk() {
    this.promptResolve(this.inputValue);
    this.inputClose();
  }
  inputClose() {
    this.inputPrompt = null;
    this.inputValue = null;
    this.promptResolve = null;
  }

  confirm(message, caption?) {
    this.caption = caption || null;
    return new Promise((resolve, reject) => {
      this.confirmPrompt = message;
      this.promptResolve = resolve;
    });
  }
  confirmYes() {
    this.promptResolve();
    this.confirmClose();
  }
  confirmClose() {
    this.confirmPrompt = null;
    this.promptResolve = null;
  }

}
