import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { DialogService, DialogModule } from 'simple-ng-dialog';
import { NotificationService, NotificationModule } from 'simple-ng-notification';
import { DateSelectModule } from 'simple-ng-date-select';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DialogModule,
    NotificationModule,
    DateSelectModule,
  ],
  providers: [ NotificationService, DialogService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
