
## simple-ng-date-select

> [Live demo here...](https://sclarke500.github.io/simple-ng-widgets-demo)

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