import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {

  @Input()
  display: boolean = true;

  constructor() { }

  @HostListener('mouseover')
  onHover() {
    this.display = true;
  }

  @HostListener('mouseout')
  onFocusout() {
    this.display = false;
  }

}
