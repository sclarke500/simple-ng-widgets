import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DateSelectComponent } from './date-select.component';

@NgModule({
  declarations: [
    DateSelectComponent,
  ],
  imports: [ 
    CommonModule, 
    FormsModule, 
  ],
  exports: [
    DateSelectComponent,
  ],
  providers: [
    DatePipe,
  ]
})
export class DateSelectModule { }
