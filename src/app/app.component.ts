import { Component, Renderer2, ɵrenderComponent, Injector, ElementRef, Type } from '@angular/core';
import { TestComponent } from './test/test.component';
import { PopoverComponent } from './popover/popover.component';

const selector = 'app-highlight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-hoc';
  comp: Promise<Type<PopoverComponent>>;
  constructor(
    private injector: Injector,
    private el: ElementRef,
    private render: Renderer2,
  ) {}

  loadComponent() {
    this.comp = import('./popover/popover.component').then(i => i.PopoverComponent);
  }

  ngOnInit() {
    const div = document.createElement(selector);
    div.innerHTML = 'Highlight Test';
    this.render.appendChild(this.el.nativeElement, div);
    const testComponent = ɵrenderComponent(TestComponent, {
      host: selector,
      injector: this.injector,
    });
    testComponent.input = 'Something Something';
    this.loadComponent();
  }
}
