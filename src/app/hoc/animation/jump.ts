import { 
  ɵɵdirectiveInject, INJECTOR
} from '@angular/core';
import { AnimationBuilder, query, style, stagger, animate } from '@angular/animations';

function _buildAnimation(builder) {
  return builder.build([
    query('h1', [
      style({ opacity: 0, transform: 'translateY(-50px)' }),
      stagger(100, [
        animate('500ms', style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ]);
}
export function jump(inner) {

  const cmp = inner.ɵcmp;
  const originalAfterViewInit = cmp.afterViewInit;
  cmp.afterViewInit = (...args) => {
    originalAfterViewInit(...args);
    const injector = ɵɵdirectiveInject(INJECTOR);
    const builder = injector.get(AnimationBuilder);
    const animation = _buildAnimation(builder);
    // TODO: find better solution for below code.
    animation.create(injector['_lView'][29].el.nativeElement).play();
  }
  return inner;
}
