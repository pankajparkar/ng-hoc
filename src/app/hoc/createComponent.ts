import { Type, Component, ɵɵdefineComponent, ɵRenderFlags, ɵɵelementStart, ɵɵelement } from '@angular/core';


@Component({
    selector: 'app-page-jump',
    template: ''
})
export class PageWithJump { }

export function createComponent(source, target) {

    source['ɵfac'] = target['ɵfac'];
    source['ɵcmp'] = target.ɵcmp;
    source['decorators'] = target['decorators'];
    source['ctorParameters'] = target['ctorParameters'];

    return source;
}
