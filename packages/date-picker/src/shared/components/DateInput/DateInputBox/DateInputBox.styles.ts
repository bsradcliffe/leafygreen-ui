import React from 'react';

import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';

export const segmentPartsWrapperClassName = 'flex items-center gap-px';

export const separatorLiteralClassName = 'select-none';

export const separatorLiteralDisabledStyles: Record<Theme, React.CSSProperties> = {
  [Theme.Dark]: {
    color: palette.gray.dark2,
  },
  [Theme.Light]: {
    color: palette.gray.base,
  },
};
