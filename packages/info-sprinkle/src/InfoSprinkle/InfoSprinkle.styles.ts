import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { focusRing, transitionDuration } from '@leafygreen-ui/tokens';

export const themeColor: Record<
  Theme,
  {
    iconBackgroundColor: string;
    iconBackgroundHoverColor: string;
  }
> = {
  [Theme.Dark]: {
    iconBackgroundColor: palette.gray.light1,
    iconBackgroundHoverColor: palette.gray.light2,
  },
  [Theme.Light]: {
    iconBackgroundColor: palette.gray.dark1,
    iconBackgroundHoverColor: palette.gray.dark2,
  },
};

export const iconBaseStyles = [
  '[all:unset]',
  'flex',
  'cursor-pointer',
  `transition-all`,
  `duration-[${transitionDuration.default}ms]`,
  'ease-in-out',
].join(' ');

export const iconThemeStyles = (theme: Theme) =>
  [
    `text-[${themeColor[theme].iconBackgroundColor}]`,
    `hover:text-[${themeColor[theme].iconBackgroundHoverColor}]`,
    `focus-visible:shadow-[${focusRing[theme].default}]`,
    'focus-visible:outline-none',
    'focus-visible:rounded-full',
  ].join(' ');
