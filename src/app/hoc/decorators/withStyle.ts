import { Type, getPlatform } from '@angular/core';

export function withStyle(config: any) {
  return (cmpType) => {
    const originalFactory = cmpType.ɵfac;
    const cmp = cmpType.ɵcmp;
    // TODO: write function that parse and add _ngcontent_ dynamically.
    cmp.styles.push(config.style);
    console.log(cmp.id, cmp.styles, cmp.tView);
    return cmpType;
  };
}
