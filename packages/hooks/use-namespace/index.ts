export const defaultNamespace = 'v';

const _bem = (
  namespace: string,
  block: string,
  blockSuffix: string,
  element: string,
  modifier: string,
) => {
  let cls = `${namespace}-${block}`;
  if (blockSuffix) {
    cls += `-${blockSuffix}`;
  }
  if (element) {
    cls += `__${element}`;
  }
  if (modifier) {
    cls += `--${modifier}`;
  }
  return cls;
};

export const useNamespace = (block: string) => {
  const namespace = defaultNamespace;

  const b = (blockSuffix = '') => _bem(namespace, block, blockSuffix, '', '');
  const e = (element?: string) =>
    element ? _bem(namespace, block, '', element, '') : '';
  const m = (modifier?: string) =>
    modifier ? _bem(namespace, block, '', '', modifier) : '';
  const be = (blockSuffix?: string, element?: string) =>
    blockSuffix && element
      ? _bem(namespace, block, blockSuffix, element, '')
      : '';
  const em = (element?: string, modifier?: string) =>
    element && modifier ? _bem(namespace, block, '', element, modifier) : '';
  const bm = (blockSuffix?: string, modifier?: string) =>
    blockSuffix && modifier
      ? _bem(namespace, block, blockSuffix, '', modifier)
      : '';
  const bem = (blockSuffix?: string, element?: string, modifier?: string) =>
    blockSuffix && element && modifier
      ? _bem(namespace, block, blockSuffix, element, modifier)
      : '';
  const is = (name: string, state?: boolean) => (state ? `is-${name}` : '');

  const cssVarBlock = (object: Record<string, string>) => {
    const styles: Record<string, string> = {};
    for (const key in object) {
      if (object[key]) {
        styles[`--${namespace}-${block}-${key}`] = object[key];
      }
    }
    return styles;
  };

  return {
    b,
    e,
    m,
    be,
    em,
    bm,
    bem,
    is,
    cssVarBlock,
  };
};
