import React from 'react';

import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';

const baseInlineStyle: React.CSSProperties = {
  padding: `${spacing[3]}px`,
  paddingTop: `${spacing[4]}px`,
  borderRadius: `${spacing[2] + spacing[1]}px`,
  outline: '1px solid',
  outlineOffset: '-1px',
  boxShadow: `0 4px 7px rgba(0, 0, 0, 0.15)`,
};

export const menuInlineStyles: Record<Theme, React.CSSProperties> = {
  [Theme.Light]: {
    ...baseInlineStyle,
    backgroundColor: palette.white,
    outlineColor: palette.gray.light2,
  },
  [Theme.Dark]: {
    ...baseInlineStyle,
    backgroundColor: palette.gray.dark3,
    outlineColor: palette.gray.dark2,
  },
};
