import { Injectable } from '@angular/core';

@Injectable({
  providedIn: "root"
})
export class OverlayService {

  private dialogs = [];
  public overlayIndex = null;
  public defaultCaption;

  public register(dialog) {
    this.dialogs.push(dialog);
    this.orderDialogs();
  }

  public unregister(dialog) {
    this.dialogs.splice(this.dialogs.indexOf(dialog), 1);
    if (this.dialogs.length == 0) {
      this.overlayIndex = null;
    } else {
      this.orderDialogs();
    }
  }

  private orderDialogs() {
    // dialog box will have z-index of 10 + its index;
    // last dlg will have z-index of 11 + index, 10 + index for overlay;
    this.dialogs.forEach((dlg, i) => {
      const top = (i == this.dialogs.length - 1);
      dlg.zIndex = (top ? 11 : 10) + i;
    });
    this.overlayIndex = (this.dialogs.length - 1) + 10;
  }

}
