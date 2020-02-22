import { Component, Renderer2, ɵrenderComponent, Injector, ElementRef, Type } from '@angular/core';

const selector = 'app-highlight';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ng-hoc';
  // comp: Promise<Type<PopoverComponent>>;
  constructor(
    private injector: Injector,
    private el: ElementRef,
    private render: Renderer2,
  ) {}

  // loadComponent() {
  //   this.comp = import('./popover/popover.component').then(i => i.PopoverComponent);
  // }

  ngOnInit() {
    // this.loadComponent();
  }
}
