import { Type, getPlatform } from '@angular/core';
import { Identifiers } from '@angular/compiler';

var test = Identifiers['elementStylingApply'];
console.log(test)
export function withStyle(config: any) {
  return (cmpType) => {
    const originalFactory = cmpType.ɵfac;
    const cmp = cmpType.ɵcmp;
    cmp.styles.push(config.style);
    console.log(cmp.id, cmp.styles, cmp.tView);
    cmpType.ɵcmp.factory = (...args: any) => {
      const cmp: any = originalFactory(...args);
      console.dir('inner cmp', cmp)
      return cmp;
    };
    cmpType.ɵcmp
    return cmpType;
  };
}
