export function withTheme() {
    return (cmpType) => {
      const originalFactory = cmpType.ngComponentDef.factory;
      cmpType.ngComponentDef.factory = (...args) => {
        const cmp = originalFactory(...args);
        console.log(cmp);
        return cmp;
      };
    };
}