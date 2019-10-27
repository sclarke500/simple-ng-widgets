import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { OverlayService } from './overlay.service';

@Component({
  selector: 'sng-dialog',
  templateUrl: 'dialog.component.html',
  styleUrls: ['dialog.component.css'],
})
export class DialogComponent {

  @Input() caption = '';
  @Input() custom = false;
  @Input() showDelete = false;
  @Input() showCancel = true;
  @Input() cancelCaption = 'Cancel';
  @Input() okCaption = 'OK';
  @Input() deleteCaption = 'Delete';
  @Output() close = new EventEmitter();
  @Output() ok = new EventEmitter();
  @Output() delete = new EventEmitter();

  @ViewChild('dialogBox', { static: true }) dialogBox;

  zIndex; // set by service

  constructor(
    private overlayService: OverlayService,
  ) { }

  ngOnInit() {
    this.overlayService.register(this);
    this.caption = this.caption || this.overlayService.defaultCaption;
  }

  ngOnDestroy() {
    this.overlayService.unregister(this);
  }

  trackMovement(eventA) {
    const box = this.dialogBox.nativeElement;
    const osX = eventA.clientX - box.offsetLeft;
    const osY = eventA.clientY - box.offsetTop;
    const maxLeft = window.innerWidth - 100;
    const maxTop = window.innerHeight - 100;
    window.onmousemove = (eventB) => {
      if (eventB.clientX > 0 && eventB.clientY > 0 && eventB.clientX < maxLeft && eventB.clientY < maxTop) {
        box.style.top = eventB.clientY - osY + 'px';
        box.style.left = eventB.clientX - osX + 'px';
      } else {
        return false;
      }
    }
    window.onmouseup = function () {
      window.onmousemove = null;
      window.onmouseup = null;
    }
  }

}
