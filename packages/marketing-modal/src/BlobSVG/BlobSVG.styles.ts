import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';

export const baseStyles = 'absolute z-[-1]';

export const themeStyles: Record<Theme, string> = {
  [Theme.Light]: `text-[${palette.purple.light3}]`,
  [Theme.Dark]: `text-[${palette.gray.dark3}]`,
};
