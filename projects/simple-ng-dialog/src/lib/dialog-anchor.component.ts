import { Component, Input } from '@angular/core';

import { OverlayService } from './overlay.service';
import { PromptService } from './prompt.service';

@Component({
  selector: 'sng-dialog-anchor',
  templateUrl: 'dialog-anchor.component.html',
  styleUrls: ['dialog-anchor.component.css'],
})
export class DialogAnchorComponent {

  @Input() defaultCaption;

  constructor (
    public overlayService: OverlayService,
    public service: PromptService,
  ) { }

  ngOnInit() {
    this.overlayService.defaultCaption = this.defaultCaption;
  }


}
