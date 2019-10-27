import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DialogComponent } from './dialog.component';
import { DialogAnchorComponent } from './dialog-anchor.component';
import { AutoFocusDirective } from './auto-focus.directive';

@NgModule({
  declarations: [
    DialogComponent, 
    DialogAnchorComponent,
    AutoFocusDirective,
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [
    DialogAnchorComponent,
    DialogComponent,
    AutoFocusDirective,
  ],
  providers: [],
})
export class DialogModule { }
