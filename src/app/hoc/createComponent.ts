export function createComponent(source, target) {
    source['ɵfac'] = target['ɵfac'];
    source['ɵcmp'] = target.ɵcmp;
    source['decorators'] = target.decorators;
    source['ctorParameters'] = target.ctorParameters;
    source['propDecorators'] = target.propDecorators;
    return source;
}
