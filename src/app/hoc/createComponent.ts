import { Component } from '@angular/core';

@Component({
    selector: 'app-page-jump',
    template: ''
})
export class PageWithJump { }

export function createComponent(component) {
    PageWithJump['ɵfac'] = component['ɵfac'];
    PageWithJump['ɵcmp'] = component.ɵcmp;
    PageWithJump['decorators'] = component['decorators'];
    PageWithJump['ctorParameters'] = component['ctorParameters'];

    return PageWithJump;
}
