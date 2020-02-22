import { Component } from '@angular/core';

export function createComponent(component) {
    @Component({
        selector: 'app-page-jump',
        template: ''
    })
    class NewHoc { }
    NewHoc['ɵfac'] = component['ɵfac'];
    NewHoc['ɵcmp'] = component['ɵcmp'];
    NewHoc['decorators'] = component['decorators'];
    NewHoc['ctorParameters'] = component['ctorParameters'];
    return NewHoc;
}