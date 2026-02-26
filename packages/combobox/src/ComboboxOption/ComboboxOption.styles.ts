import { type CSSProperties } from 'react';

import {
  descriptionClassName,
  leftGlyphClassName,
  titleClassName,
} from '@leafygreen-ui/input-option';
import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { fontWeights, spacing, typeScales } from '@leafygreen-ui/tokens';

import { ComboboxSize } from '../types';

/**
 * Stylesheet for nested child selectors that cannot be expressed inline.
 */
export const optionStyleTag = `
/* Base title style */
.lg-combobox-option .${titleClassName} {
  font-weight: ${fontWeights.regular};
}

/* Selected title style */
.lg-combobox-option-selected .${titleClassName} {
  font-weight: ${fontWeights.semiBold};
}

/* Large size styles */
.lg-combobox-option-large .${descriptionClassName},
.lg-combobox-option-large .${titleClassName} {
  font-size: ${typeScales.body2.fontSize}px;
  line-height: 20px;
}

/* Multiselect icon position */
.lg-combobox-option-multiselect-no-icons .${leftGlyphClassName} {
  align-self: baseline;
  position: relative;
  top: 1px;
}

/* Multiselect icon large position */
.lg-combobox-option-multiselect-no-icons-large .${leftGlyphClassName} {
  top: 3px;
}
`;

export const getInputOptionClassName = ({
  size,
  isMultiselectWithoutIcons,
  isSelected,
  className,
}: {
  size: ComboboxSize;
  isMultiselectWithoutIcons: boolean;
  isSelected: boolean;
  className?: string;
}): string => {
  const classes: Array<string | false | undefined | null> = [
    'lg-combobox-option',
    isSelected && 'lg-combobox-option-selected',
    size === ComboboxSize.Large && 'lg-combobox-option-large',
    isMultiselectWithoutIcons && 'lg-combobox-option-multiselect-no-icons',
    isMultiselectWithoutIcons &&
      size === ComboboxSize.Large &&
      'lg-combobox-option-multiselect-no-icons-large',
    className,
  ];

  return classes.filter(Boolean).join(' ');
};

export const checkMarkSizeStyle = (
  size: ComboboxSize,
): CSSProperties => ({
  minWidth:
    size === ComboboxSize.Large ? `${spacing[4]}px` : `${spacing[3]}px`,
});

export const checkBoxBaseClassName = 'pointer-events-none';

export const checkBoxBaseStyle: CSSProperties = {
  gap: 0,
};

export const iconThemeStyle: Record<Theme, CSSProperties> = {
  [Theme.Light]: { color: palette.gray.dark1 },
  [Theme.Dark]: { color: palette.gray.base },
};

export const iconHighlightedStyle: Record<Theme, CSSProperties> = {
  [Theme.Light]: { color: palette.blue.dark1 },
  [Theme.Dark]: { color: palette.blue.light3 },
};

export const iconDisabledStyle: Record<Theme, CSSProperties> = {
  [Theme.Light]: { color: palette.gray.light1 },
  [Theme.Dark]: { color: palette.gray.dark1 },
};

export const checkMarkThemeStyle: Record<Theme, CSSProperties> = {
  [Theme.Light]: { color: palette.blue.base },
  [Theme.Dark]: { color: palette.blue.light1 },
};

export const checkMarkDisabledStyle: Record<Theme, CSSProperties> = {
  [Theme.Light]: { color: palette.gray.light1 },
  [Theme.Dark]: { color: palette.gray.dark1 },
};
