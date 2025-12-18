import { type SFCWithInstall, withInstall } from '@vui/utils';
import Icon from './src/icon.vue';

export const VIcon: SFCWithInstall<typeof Icon> = withInstall(Icon);

export default VIcon;

export * from './src/icon';
