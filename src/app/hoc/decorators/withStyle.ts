import { Type, getPlatform } from '@angular/core';
import { Identifiers } from '@angular/compiler';

var test = Identifiers['elementStylingApply'];
console.log(test)
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
