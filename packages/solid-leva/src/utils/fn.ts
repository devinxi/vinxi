export const debounce = <F extends Function>(
  callback: F,
  wait: number,
  immediate = false
) => {
  let timeout: number = 0;

  return function (this: any) {
    const args = arguments as any;
    const callNow = immediate && !timeout;
    const next = () => callback.apply(this, args);

    window.clearTimeout(timeout);
    timeout = window.setTimeout(next, wait);

    if (callNow) next();
  } as F extends (...args: infer A) => infer B ? (...args: A) => B : never;
};
