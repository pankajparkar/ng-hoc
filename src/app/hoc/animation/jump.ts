import { Type, ɵɵdirectiveInject, ElementRef } from '@angular/core';
import { Identifiers } from '@angular/compiler';
import { AnimationBuilder, query, style, stagger, animate } from '@angular/animations';

const _buildAnimation = (builder) => {
  return builder.build([
    query('.photo-record', [
      style({ opacity: 0, transform: 'translateY(-50px)' }),
      stagger(100, [
        animate('500ms', style({ opacity: 1, transform: 'none' }))
      ])
    ])
  ]);
}

/*
constructor(private _builder: AnimationBuilder, private _element: ElementRef) {}

private _buildPlayer() {
  const animation = this._buildAnimation();
  animation.create(this._element.nativeElement).play();
}
*/

var test = Identifiers['elementStylingApply'];
console.log(test)
export function jump(config) {
  return (cmpType) => {
    const originalFactory = cmpType.ɵfac;
    const cmp = cmpType.ɵcmp;
    const animationBuilder = ɵɵdirectiveInject(AnimationBuilder);
    const el = ɵɵdirectiveInject(ElementRef);
    const animation = _buildAnimation(animationBuilder);
    animation.create(this.el.nativeElement).play();
    cmp.styles.push(config.style);
    console.log(cmp.id, cmp.styles, cmp.tView);
    cmpType.ɵcmp.factory = (...args: any) => {
      const cmp: any = originalFactory(...args);
      console.dir('inner cmp', cmp)
      return cmp;
    };
    return cmpType;
  };
}
