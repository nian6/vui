import { SFCWithInstall, withInstall } from '@vui/utils';
import Radio from './src/radio.vue';
import RadioGroup from './src/radio-group.vue';

export const VRadio: SFCWithInstall<typeof Radio> = withInstall(Radio);

export const VRadioGroup: SFCWithInstall<typeof RadioGroup> =
  withInstall(RadioGroup);

export default VRadio;

export * from './src/radio';
export * from './src/constants';
