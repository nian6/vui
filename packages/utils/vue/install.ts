import type { App, Plugin } from 'vue';

export type SFCWithInstall<T> = T & Plugin;

export const withInstall = <T>(comp: T) => {
  (comp as SFCWithInstall<T>).install = (app: App) => {
    // @ts-expect-error [comp.name]
    app.component(comp.name, comp);
  };

  return comp as SFCWithInstall<T>;
};
