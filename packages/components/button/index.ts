import Button from './src/button.vue';
import ButtonGroup from './src/button-group.vue';
import { withInstall, type SFCWithInstall } from '@vui/utils';

export const VButton: SFCWithInstall<typeof Button> = withInstall(Button);
export const VButtonGroup: SFCWithInstall<typeof ButtonGroup> =
  withInstall(ButtonGroup);

export default VButton;

export * from './src/button';
export * from './src/constants';
