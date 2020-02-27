import { cloneDeep } from 'lodash';

export function withSelector(inner, sel) {
  const cmp = inner.ɵcmp;
  cmp.type = cloneDeep(cmp.type);
  // TODO: move selector change logic inside createComponent function.
  const selectors = cmp.selectors;
  selectors.length = 0
  inner.decorators[0].args[0].selector = sel;
  selectors.push([sel]);
  return inner;
}
