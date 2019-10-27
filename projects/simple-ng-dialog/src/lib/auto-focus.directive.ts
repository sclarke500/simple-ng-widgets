import { Directive, ElementRef, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[scAutoFocus]',
})

export class AutoFocusDirective implements AfterViewInit {

  constructor (
    private elementRef: ElementRef,
  ) { }

  ngAfterViewInit() {
    this.elementRef.nativeElement.focus();
  }

}
