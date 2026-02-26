import { CSSProperties } from 'react';

import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { color, spacing } from '@leafygreen-ui/tokens';

export const containerStyles = [
  'max-w-[1184px]',
  'flex',
  'flex-col',
  'items-center',
  `py-[${spacing[1600]}px]`,
  `px-[${spacing[800]}px]`,
  `gap-[${spacing[600]}px]`,
].join(' ');

export const textContainerStyles = [
  'flex',
  'flex-col',
  'items-center',
  `gap-[${spacing[300]}px]`,
  'text-center',
].join(' ');

export const getTextStyles = (theme: Theme): {
  subtitle: CSSProperties;
  title: CSSProperties;
  description: CSSProperties;
} => ({
  subtitle: {
    color: palette.green[theme === Theme.Light ? 'dark2' : 'base'],
  },
  title: {
    color: color[theme].text.primary.default,
  },
  description: {
    color: color[theme].text.secondary.default,
  },
});

export const buttonsContainerStyles = [
  'flex',
  'justify-center',
  'items-center',
  `gap-[${spacing[200]}px]`,
].join(' ');
