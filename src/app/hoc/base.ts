import { ɵComponentDef, OnInit, ɵɵdirectiveInject, INJECTOR, ElementRef, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class HigherOrderComponent implements OnInit {

  static ɵcmp: ɵComponentDef<HigherOrderComponent>;

  params: any = {};

  constructor(
    private injector: Injector,
  ) {
    this.injector = ɵɵdirectiveInject(INJECTOR)
  }

  ngOnInit() {
    const route = this.injector.get(ActivatedRoute);
    route.params.subscribe(params => {
      this.params = params;
    });
  }
}
