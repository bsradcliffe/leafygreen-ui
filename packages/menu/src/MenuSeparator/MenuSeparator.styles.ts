import { Theme } from '@leafygreen-ui/lib';
import { color } from '@leafygreen-ui/tokens';

import { menuColor } from '../styles';

export const borderStyle = [
  'h-4',
  'relative',
  "before:content-['']",
  'before:absolute',
  'before:h-px',
  'before:w-full',
  'before:left-0',
  'before:top-1/2',
  'before:-translate-y-1/2',
].join(' ');

export const borderThemeStyle: Record<Theme, string> = {
  [Theme.Light]: `before:bg-[${menuColor.light.border.default}]`,
  [Theme.Dark]: `before:bg-[${menuColor.dark.border.default}]`,
};

export const borderDarkInLightModeStyles = `before:bg-[${color.dark.border.secondary.default}]`;
