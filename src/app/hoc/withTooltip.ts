import { 
  ChangeDetectionStrategy, ɵComponentType, ɵComponentDef, INJECTOR,
  ɵɵdirectiveInject, ɵɵdefineComponent, ɵRenderFlags, 
  ɵɵelement, ɵɵproperty, ɵɵelementStart, ɵɵelementEnd
} from '@angular/core';
import { HigherOrderComponent } from './base';

export function withTooltip(inner) {

  const ngComponent = inner as ɵComponentType<any>;
  const innerCompDef: any = ngComponent.ɵcmp;
  const originalTemplate = innerCompDef.template;

  // innerCompDef.template = (...args) => {
  //   originalTemplate(args);
  //   console.log(this);
  // }

  return inner;
}
