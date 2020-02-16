import {
    ɵɵdefineComponent,
    ɵComponentDef,
    ChangeDetectionStrategy,
    ɵɵelement,
    ɵɵproperty,
    Type,
    ɵComponentType,
    ɵRenderFlags,
    ElementRef,
    ɵɵdirectiveInject,
} from '@angular/core';

import { HigherOrderComponent } from './base';

export function withRoute(inner: Type<any>) {

    const ngComponent = inner as ɵComponentType<any>;
    const innerCompDef = ngComponent.ɵcmp as ɵComponentDef<any>;
    const elementName = innerCompDef.selectors[0][0] as string;
    
    const higherOrderComponent = HigherOrderComponent;

    (higherOrderComponent as any).ɵfac = () => new higherOrderComponent(ɵɵdirectiveInject(ElementRef));

    higherOrderComponent.ɵcmp = ɵɵdefineComponent({
        consts: [[]],
        vars: 1,
        decls: 1,
        directives: [
            inner
        ],
        changeDetection: ChangeDetectionStrategy.Default,
        selectors: [[]],
        template: (rf, ctx) => {

            if (rf & ɵRenderFlags.Create) {
               ɵɵelement(0, elementName, null);

            }
            if (rf & ɵRenderFlags.Update) {
                for (const routingParam in ctx.params) {
                    const propName = innerCompDef.inputs[routingParam];
                    if (propName) {
                       ɵɵproperty(routingParam, ctx.params[propName]);
                    }
                }
            }
        },
        type: higherOrderComponent,
    });

    return HigherOrderComponent;
}