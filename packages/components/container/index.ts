import Container from './src/container.vue';
import Main from './src/main.vue';
import Header from './src/header.vue';
import Footer from './src/footer.vue';
import Aside from './src/aside.vue';
import { type SFCWithInstall, withInstall } from '@vui/utils';

export const VContainer: SFCWithInstall<typeof Container> =
  withInstall(Container);
export const VMain: SFCWithInstall<typeof Main> = withInstall(Main);
export const VHeader: SFCWithInstall<typeof Header> = withInstall(Header);
export const VFooter: SFCWithInstall<typeof Footer> = withInstall(Footer);
export const VAside: SFCWithInstall<typeof Aside> = withInstall(Aside);

export default VContainer;
