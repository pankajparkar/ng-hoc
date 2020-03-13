import { ɵComponentType } from '@angular/core';

export function withTooltip(inner) {

  const ngComponent = inner as ɵComponentType<any>;
  const innerCompDef: any = ngComponent.ɵcmp;
  return inner;
}
