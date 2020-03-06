import { cloneDeep } from 'lodash';

export function withSelector(inn, sel) {
  const inner = cloneDeep(inn);
  const cmp = inner.ɵcmp;
  // TODO: move selector change logic inside createComponent function.
  const selectors = cmp.selectors;
  selectors.length = 0
  inner.decorators[0].args[0].selector = sel;
  selectors.push([sel]);
  return inner;
}
