# SimpleNgWidgets

> A collection of widgets for [Angular](http://angularjs.io/) applications.

1. [simple-ng-dialog](#simple-ng-dialog)
2. [simple-ng-notification](#simple-ng-notification)
3. [simple-ng-date-select](#simple-ng-date-select)

> [Live demo here...](https://sclarke500.github.io/simple-ng-widgets-demo)


---

## simple-ng-dialog

### Install

```bash
npm i simple-ng-dialog
```

### Usage
app.module
```javascript
import { DialogService, DialogModule } from 'simple-ng-dialog';
```

add the dialog anchor tag to app.component.html
```html
<sng-dialog-anchor defaultCaption="My Caption"></sng-dialog-anchor>
```

in your component
```html
<sng-dialog *ngIf="showDialog" (close)="showDialog=false" (ok)="onOk($event)">Dialog 1 content</sng-dialog>
```

or in your code:
```javascript
import { DialogService } from 'simple-ng-dialog';
...
constructor (
  private dialogService: DialogService,
) { }
...
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
```

## simple-ng-notification

### Install

```bash
npm i simple-ng-notification
```

### Usage
app.module
```javascript
import { NotificationService, NotificationModule } from 'simple-ng-notification';
```

add the notification anchor tag to app.component.html
```html
<sng-notification></sng-notification>
```

in your code:
```javascript
import { NotificationService } from 'simple-ng-notification';
///
constructor (
  private notificationService: NotificationService,
) { }

// displays a "test message" notification for 4 seconds
notify() {
  this.notificationService.notify('test message');
}

// toggles a busy spinner in center of window
_busy = false;
busy() {
  this._busy = !this._busy;
  this.notificationService.busy = this._busy;
}
```


## simple-ng-date-select

### Install

```bash
npm i simple-ng-date-select
```

### Usage
app.module
```javascript
import { DateSelectModule } from 'simple-ng-date-select';
```

in your component:
```html
<sng-date-select [(ngModel)]="myDate"></sng-date-select>
<sng-date-select formControlName="birthdate"></sng-date-select>
```
