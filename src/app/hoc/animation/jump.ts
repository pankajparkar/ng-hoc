import { 
  ɵɵdirectiveInject, INJECTOR, ElementRef, InjectFlags
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
  cmp.afterViewInit = function afterViewInit(...args) {
    if (originalAfterViewInit) {
      originalAfterViewInit(...args);
    }
    console.log(this, this.injector)
    const injector = this.injector;
    const el = injector.get(ElementRef);
    const builder = injector.get(AnimationBuilder);
    const animation = _buildAnimation(builder);
    animation.create(el.nativeElement).play();
  }
  return inner;
}
