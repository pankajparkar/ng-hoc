import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  display: boolean;

  constructor() { }

  @HostListener('mouseover')
  onHover() {
    this.display = true;
  }

  @HostListener('mouseover')
  onFocusout() {
    this.display = false;
  }

}
