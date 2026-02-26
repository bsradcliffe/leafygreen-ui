import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';

export const baseStyles = 'p-0';

export const expandedContentThemeStyles: Record<Theme, string> = {
  [Theme.Dark]: `bg-[${palette.gray.dark4}]`,
  [Theme.Light]: `bg-[${palette.gray.light3}]`,
};
