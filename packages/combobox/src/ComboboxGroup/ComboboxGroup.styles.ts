import { type CSSProperties } from 'react';

import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { fontWeights, spacing } from '@leafygreen-ui/tokens';

export const comboboxGroupStyle: CSSProperties = {
  paddingTop: `${spacing[2]}px`,
};

export const comboboxGroupLabelClassName =
  'cursor-default w-full outline-none uppercase';

export const comboboxGroupLabelStyle: CSSProperties = {
  padding: '0 12px 2px',
  overflowWrap: 'anywhere',
  fontSize: '12px',
  lineHeight: '16px',
  fontWeight: fontWeights.semiBold,
  letterSpacing: '0.4px',
};

export const comboboxGroupLabelThemeStyle: Record<
  Theme,
  CSSProperties
> = {
  [Theme.Light]: {
    color: palette.gray.dark1,
  },
  [Theme.Dark]: {
    color: palette.gray.light1,
  },
};
