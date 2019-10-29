
## simple-ng-notification

> [Live demo here...](https://sclarke500.github.io/simple-ng-widgets-demo)

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

