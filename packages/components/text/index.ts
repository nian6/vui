import { SFCWithInstall, withInstall } from '@vui/utils';
import Text from './src/text.vue';

export const VText: SFCWithInstall<typeof Text> = withInstall(Text);

export default VText;

export * from './src/text';
