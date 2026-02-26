import React from 'react';

import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  BaseFontSize,
  fontFamilies,
  Size,
  typeScales,
} from '@leafygreen-ui/tokens';

import { characterWidth, charsPerSegment } from '../../../constants';
import { DateSegment } from '../../../types';

export const baseClassName = 'text-center border-none rounded-none p-0 focus:outline-none';

export const baseInlineStyle: React.CSSProperties = {
  fontFamily: fontFamilies.default,
  fontSize: `${BaseFontSize.Body1}px`,
  fontVariant: 'tabular-nums',
  // Hide spinner buttons
  WebkitAppearance: 'none',
  MozAppearance: 'textfield' as string,
  margin: 0,
};

export const segmentThemeStyles: Record<Theme, React.CSSProperties> = {
  [Theme.Light]: {
    backgroundColor: 'transparent',
    color: palette.black,
  },
  [Theme.Dark]: {
    backgroundColor: 'transparent',
    color: palette.gray.light2,
  },
};

export const segmentThemePlaceholderColor: Record<Theme, string> = {
  [Theme.Light]: palette.gray.light1,
  [Theme.Dark]: palette.gray.dark1,
};

export const segmentThemeFocusBg: Record<Theme, string> = {
  [Theme.Light]: palette.blue.light3,
  [Theme.Dark]: palette.blue.dark3,
};

export const fontSizeVars: Record<BaseFontSize, React.CSSProperties> = {
  [BaseFontSize.Body1]: {
    // @ts-expect-error -- CSS custom property
    '--base-font-size': `${BaseFontSize.Body1}px`,
  },
  [BaseFontSize.Body2]: {
    // @ts-expect-error -- CSS custom property
    '--base-font-size': `${BaseFontSize.Body2}px`,
  },
};

export const segmentSizeFontSize: Record<Size, string> = {
  [Size.XSmall]: `${typeScales.body1.fontSize}px`,
  [Size.Small]: `${typeScales.body1.fontSize}px`,
  [Size.Default]: `var(--base-font-size, ${typeScales.body1.fontSize}px)`,
  [Size.Large]: '18px', // Intentionally off-token
};

export const segmentWidths: Record<DateSegment, string> = {
  day: `${charsPerSegment.day * characterWidth.D}ch`,
  month: `${charsPerSegment.month * characterWidth.M}ch`,
  year: `${charsPerSegment.year * characterWidth.Y}ch`,
};
