import { Component, Renderer2, ɵrenderComponent, Injector } from '@angular/core';
import { TooltipDirective } from './tooltip.directive';
import {} from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-hoc';

  constructor(
    private injector: Injector
  ) {}

  ngOnInt() {
    ɵrenderComponent(TooltipDirective, { host: 'app-highlight', injector: this.injector });
  }
}
