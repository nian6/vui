import Components from './components';

import type { App, Plugin } from 'vue';

const makeInstaller = (comps: Plugin[] = []) => {
  const install = (app: App) => {
    comps.forEach((c) => app.use(c));
  };

  return {
    install,
  };
};

export default makeInstaller(Components);
