import { ElementRef, ɵComponentType, ɵComponentDef, INJECTOR, ɵɵdirectiveInject } from '@angular/core';
import { AnimationBuilder, query, style, stagger, animate } from '@angular/animations';
import { cloneDeep } from 'lodash';

function _buildAnimation(builder) {
  return builder.build([
    query('*', [
      style({ opacity: 0, transform: 'translateY(-50px)' }),
      stagger(100, [
        animate('500ms', style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ]);
}

export function fadeIn() {
  return (cmpType) => {
    const originalFactory = cmpType.ɵfac;
    cmpType.ɵfac = (...args) => {
      const cmp = originalFactory(...args);
      cmp.afterViewInit = function afterViewInit(...args) {
        console.log(cmp, ' cmp');
        const originalAfterViewInit = cmp.afterViewInit;
        if (originalAfterViewInit) {
          originalAfterViewInit.apply(this, ...args);
        }
        const injector = this.injector;
        const el = injector.get(ElementRef);
        const builder = injector.get(AnimationBuilder);
        const animation = _buildAnimation(builder);
        animation.create(el.nativeElement).play();
      }
      return cmp;
    };
    return cmpType;
  };
}
