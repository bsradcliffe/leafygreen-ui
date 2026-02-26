import { type CSSProperties } from 'react';

import { chipTextClassName } from '@leafygreen-ui/chip';
import { createUniqueClassName } from '@leafygreen-ui/lib';
import { typeScales } from '@leafygreen-ui/tokens';

import { ComboboxSize } from '../types';

export const chipClassName = createUniqueClassName('combobox-chip');

/**
 * The line-height of the combobox.
 */
export const lineHeight: Record<ComboboxSize, number> = {
  [ComboboxSize.XSmall]: 16,
  [ComboboxSize.Small]: typeScales.body1.lineHeight,
  [ComboboxSize.Default]: typeScales.body1.lineHeight,
  [ComboboxSize.Large]: typeScales.body2.lineHeight,
};

/**
 * The font-size of the combobox.
 */
export const fontSize: Record<ComboboxSize, number> = {
  [ComboboxSize.XSmall]: typeScales.body1.fontSize,
  [ComboboxSize.Small]: typeScales.body1.fontSize,
  [ComboboxSize.Default]: typeScales.body1.fontSize,
  [ComboboxSize.Large]: typeScales.body2.fontSize,
};

/**
 * Vertical padding on a chip (in px)
 */
export const chipWrapperPaddingY = {
  [ComboboxSize.XSmall]: 1,
  [ComboboxSize.Small]: 0,
  [ComboboxSize.Default]: 2,
  [ComboboxSize.Large]: 4,
} as const;

/**
 * Stylesheet that must be injected for chip size overrides
 * that target nested child selectors (chipTextClassName).
 */
export const chipSizeStyleTag = `
.lg-combobox-chip-xsmall .${chipTextClassName} {
  padding-block: ${chipWrapperPaddingY[ComboboxSize.XSmall]}px;
}
.lg-combobox-chip-small .${chipTextClassName} {
  padding-block: ${chipWrapperPaddingY[ComboboxSize.Small]}px;
}
.lg-combobox-chip-default .${chipTextClassName} {
  padding-block: ${chipWrapperPaddingY[ComboboxSize.Default]}px;
}
.lg-combobox-chip-large .${chipTextClassName} {
  padding-inline-end: 10px;
  padding-block: ${chipWrapperPaddingY[ComboboxSize.Large]}px;
}
`;

export const chipSizeClassName: Record<ComboboxSize, string> = {
  [ComboboxSize.XSmall]: 'lg-combobox-chip-xsmall',
  [ComboboxSize.Small]: 'lg-combobox-chip-small',
  [ComboboxSize.Default]: 'lg-combobox-chip-default',
  [ComboboxSize.Large]: 'lg-combobox-chip-large',
};

export const chipSizeStyle = (size: ComboboxSize): CSSProperties => ({
  fontSize: `${fontSize[size]}px`,
  lineHeight: `${lineHeight[size]}px`,
});
