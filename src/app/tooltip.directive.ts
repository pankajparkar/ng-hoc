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
    console.log('display', this.display);
  }

  @HostListener('mouseout')
  onFocusout() {
    this.display = false;
    console.log('display', this.display);
  }

}
