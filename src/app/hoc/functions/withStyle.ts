export function withStyle(cmpType, config) {
  const originalFactory = cmpType.ɵfac;
  const cmp = cmpType.ɵcmp;
  cmp.styles.push(config.style);
  console.log(cmp.id, cmp.styles, cmp.tView);
  cmpType.ɵcmp.factory = (...args: any) => {
    const cmp: any = originalFactory(...args);
    console.dir('inner cmp', cmp)
    return cmp;
  };
  return cmpType;
};
