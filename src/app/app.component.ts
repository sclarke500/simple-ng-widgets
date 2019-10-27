import { Component } from '@angular/core';

import { DialogService } from 'simple-ng-dialog';
import { NotificationService } from 'simple-ng-notification';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  showDialog1 = false;
  showDialog2 = false;

  myDate;

  constructor (
    private dialogService: DialogService,
    private notificationService: NotificationService,
  ) { }

  ngOnInit () {

  }

  onOk(num) {
    alert('Dialog ' + num + ' is OK!');
    this['showDialog' + num] = false;
  }

  notify() {
    this.notificationService.notify('test message');
  }

  _busy = false;
  busy() {
    this._busy = !this._busy;
    this.notificationService.busy = this._busy;
  }

  prompt() {
    this.dialogService.prompt('My test prompt', 'Prompt caption');
  }

  confirm() {
    this.dialogService.confirm('Are you sure?').then(resp => alert(resp));
  }

  inputBox() {
    this.dialogService.inputBox('Type some input', 'default val').then(v => {
      alert('new value: ' + v);
    })
  }

}
