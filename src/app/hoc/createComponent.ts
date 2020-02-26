import { Type, Component, ɵɵdefineComponent, ɵRenderFlags, ɵɵelementStart, ɵɵelement } from '@angular/core';

export const PageComponentMetadata = {
    selector: 'app-page-jump',
    template: ''
};

@Component(PageComponentMetadata)
export class PageWithJump { }

export function createComponent(source, target): Type<PageWithJump> {

    source['ɵfac'] = target['ɵfac'];
    source['ɵcmp'] = target.ɵcmp;
    source['decorators'] = target['decorators'];
    source['ctorParameters'] = target['ctorParameters'];

    return source;
}
