## simple-ng-dialog

> [Live demo here...](https://sclarke500.github.io/simple-ng-widgets-demo)

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

