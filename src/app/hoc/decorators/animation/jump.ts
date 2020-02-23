import { ElementRef, ɵComponentType, ɵComponentDef } from '@angular/core';
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
export function jump() {
  return (inner) => {
    // const inn =  {...inner};
    let inn: any = cloneDeep(inner);
    const cmp = inn.ɵcmp as any;
    // cmp.type = cloneDeep(cmp.type);
    const selectors = cmp.selectors;
    selectors.length = 0
    const newSelector = `jump`;
    const { selectors: [selector] } = cmp;
    // selector.push(`app-page-${suffix}`);
    inn.decorators[0].args[0].selector = `app-page, app-page-${newSelector}`;
    selectors.push([`app-page-${newSelector}`])
    const originalAfterViewInit = cmp.afterViewInit;
    cmp.afterViewInit = function afterViewInit(...args) {
      if (originalAfterViewInit) {
        originalAfterViewInit(...args);
      }
      const injector = this.injector;
      const el = injector.get(ElementRef);
      const builder = injector.get(AnimationBuilder);
      const animation = _buildAnimation(builder);
      animation.create(el.nativeElement).play();
    }
    return inn as ɵComponentType<any>;
  }
}
