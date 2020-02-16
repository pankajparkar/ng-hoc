import { ɵComponentDef, OnInit, ɵɵdirectiveInject, INJECTOR, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

export class HigherOrderComponent implements OnInit {

  static ɵcmp: ɵComponentDef<HigherOrderComponent>;

  params: any = {};
  injector;

  constructor(
    private el: ElementRef
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
