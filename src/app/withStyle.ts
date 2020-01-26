import { Type } from '@angular/core';

export function withStyle(config: any) {
  return (cmpType) => {
    const originalFactory = cmpType.ɵfac;
    cmpType.
    cmpType.ɵcmp.factory = (...args: any) => {
      const cmp: any = originalFactory(...args);
      return cmp;
    };
    cmpType.ɵcmp
    return cmpType;
  };
}
