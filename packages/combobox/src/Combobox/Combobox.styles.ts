import { type CSSProperties } from 'react';

import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  color,
  focusRing,
  fontFamilies,
  spacing,
  transitionDuration,
  typeScales,
} from '@leafygreen-ui/tokens';

import {
  chipClassName,
  chipWrapperPaddingY,
  fontSize,
  lineHeight,
} from '../ComboboxChip/ComboboxChip.styles';
import { ComboboxSize as Size, Overflow, State } from '../types';

/**
 * Util to get the chip height
 * `lineHeight + (2 * paddingY)`
 */
// Rename the variable defined in chip styles
const inputHeight = (size: Size) => {
  return lineHeight[size] + 2 * chipWrapperPaddingY[size];
};

// Gap between each chip
const flexGap = spacing[100];

/**
 * The min-height of the combobox.
 */
export const wrapperHeight: Record<Size, number> = {
  [Size.XSmall]: 22,
  [Size.Small]: 28,
  [Size.Default]: 36,
  [Size.Large]: 48,
};

/**
 * Util that calculates the Y padding.
 * `(wrapperHeight - inputHeight(- (borderTop + borderBottom)) / 2`
 */
const getYPadding = (size: Size) => {
  return (wrapperHeight[size] - inputHeight(size) - 2) / 2;
};

/**
 * Size of combobox x & y padding (in px)
 * (wrapperHeight - inputHeight(- (borderTop + borderBottom)) / 2
 */
export const comboboxPadding: Record<
  Size,
  {
    y: number;
    xLeftWithChip: number;
    xLeftWithoutChip: number;
    xRight: number;
  }
> = {
  [Size.XSmall]: {
    y: getYPadding(Size.XSmall),
    xLeftWithChip: spacing[25],
    xLeftWithoutChip: spacing[200],
    xRight: spacing[100],
  },
  [Size.Small]: {
    y: getYPadding(Size.Small),
    xLeftWithChip: spacing[100],
    xLeftWithoutChip: spacing[200],
    xRight: spacing[100],
  },
  [Size.Default]: {
    y: getYPadding(Size.Default),
    xLeftWithChip: spacing[150],
    xLeftWithoutChip: spacing[300],
    xRight: spacing[200],
  },
  [Size.Large]: {
    y: getYPadding(Size.Large),
    xLeftWithChip: spacing[300],
    xLeftWithoutChip: spacing[300],
    xRight: spacing[200],
  },
};

/** Width of the clear icon (in px) */
export const clearButtonIconSize = 28;

/** Width of the dropdown caret icon (in px) */
export const caretIconSize = spacing[400];

export const comboboxParentStyle = (size: Size): CSSProperties => ({
  fontFamily: fontFamilies.default,
  width: '100%',
  minWidth: `${fontSize[size] + 2 * comboboxPadding[size].xLeftWithChip + caretIconSize + 2}px`,
});

/**
 * Stylesheet that must be injected for pseudo-element and nested selectors
 * that cannot be expressed as inline styles.
 */
export const comboboxStyleTag = `
.lg-combobox-wrapper {
  transition: ${transitionDuration.default}ms ease-in-out;
  transition-property: background-color, box-shadow, border-color;
}

/* Overflow shadow pseudo-element */
.lg-combobox-wrapper::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 20px;
  bottom: -21px;
  left: 50%;
  translate: -50% 0%;
  border-radius: 20%;
  box-shadow: 0 0 0 0 rgb(255 255 255 / 0%);
  transition: ${transitionDuration.default}ms linear;
  transition-property: box-shadow;
}

/* Light theme overflow shadow */
.lg-combobox-overflow-shadow-light::after {
  box-shadow: 0px 0px 7px 5px rgba(0, 30, 43, 0.15);
}

/* Dark theme overflow shadow */
.lg-combobox-overflow-shadow-dark::after {
  width: 95%;
  box-shadow: 0px -7px 12px 5px rgb(0 0 0 / 50%);
}

/* Focus styles - Light */
.lg-combobox-focus-light:focus-within {
  border-color: transparent;
  box-shadow: ${focusRing[Theme.Light].input};
}

/* Focus styles - Dark */
.lg-combobox-focus-dark:focus-within {
  border-color: transparent;
  box-shadow: ${focusRing[Theme.Dark].input};
}

/* Input element - only add left padding if there are chips */
.lg-combobox-input:not(:first-child) {
  padding-left: ${spacing[100]}px;
}

.lg-combobox-input:placeholder-shown {
  min-width: 100%;
}

.lg-combobox-input:focus {
  outline: none;
}

/* Placeholder colors - Light */
.lg-combobox-input-light::placeholder {
  color: ${palette.gray.base};
}

/* Placeholder colors - Dark */
.lg-combobox-input-dark::placeholder {
  color: ${palette.gray.dark1};
}

/* Disabled placeholder colors - Light */
.lg-combobox-input-disabled-light::placeholder {
  color: ${palette.gray.base};
}

/* Disabled placeholder colors - Dark */
.lg-combobox-input-disabled-dark::placeholder {
  color: ${palette.gray.dark1};
}

/* scrollX overflow chip margins */
.lg-combobox-input-wrapper-scrollx > .${chipClassName} {
  margin-inline: 2px;
}
.lg-combobox-input-wrapper-scrollx > .${chipClassName}:first-child {
  margin-inline-start: 0;
}
.lg-combobox-input-wrapper-scrollx > .${chipClassName}:last-child {
  margin-inline-end: 0;
}

/* scrollX scrollbar hide */
.lg-combobox-input-wrapper-scrollx::-webkit-scrollbar {
  display: none;
}
`;

export const baseComboboxStyles =
  'lg-combobox-wrapper flex items-center cursor-text border border-solid w-full max-w-full relative overflow-hidden';

export const comboboxThemeStyle = (theme: Theme): CSSProperties => ({
  color:
    theme === Theme.Light
      ? color.light.text.primary.default
      : color.dark.text.primary.default,
  backgroundColor:
    theme === Theme.Light
      ? color.light.background.primary.default
      : palette.gray.dark4,
});

export const comboboxSizeStyle = (
  size: Size,
  isMultiselectWithSelections: boolean,
): CSSProperties => ({
  paddingTop: `${comboboxPadding[size].y}px`,
  paddingBottom: `${comboboxPadding[size].y}px`,
  paddingLeft: isMultiselectWithSelections
    ? `${comboboxPadding[size].xLeftWithChip}px`
    : `${comboboxPadding[size].xLeftWithoutChip}px`,
  paddingRight: `${comboboxPadding[size].xRight}px`,
  gap: `${spacing[200]}px`,
  borderRadius: '6px',
});

export const getComboboxDisabledStyle = (
  theme: Theme,
): CSSProperties => ({
  cursor: 'not-allowed',
  color: color[theme].text.disabled.default,
  backgroundColor: color[theme].background.disabled.default,
  borderColor: color[theme].border.disabled.default,
});

export const getComboboxBorderStyle = (
  theme: Theme,
  state: State,
): CSSProperties => {
  const borderColors: Record<State, string> = {
    [State.Error]: color[theme].border.error.default,
    [State.None]: color[theme].border.primary.default,
    [State.Valid]: color[theme].border.success.default,
  };

  return {
    borderColor: borderColors[state],
  };
};

export const comboboxFocusClassName: Record<Theme, string> = {
  [Theme.Light]: 'lg-combobox-focus-light',
  [Theme.Dark]: 'lg-combobox-focus-dark',
};

export const comboboxOverflowShadowClassName: Record<Theme, string> = {
  [Theme.Light]: 'lg-combobox-overflow-shadow-light',
  [Theme.Dark]: 'lg-combobox-overflow-shadow-dark',
};

export const iconsWrapperBaseClassName = 'flex items-center';

export const iconsWrapperSizeStyle = (size: Size): CSSProperties => ({
  gap: size === Size.XSmall ? `${spacing[100]}px` : `${spacing[200]}px`,
});

export const inputWrapperStyle = ({
  overflow,
  size,
}: {
  overflow: Overflow;
  size: Size;
}): { className: string; style: CSSProperties } => {
  const baseClassName = 'grow w-full';

  switch (overflow) {
    case Overflow.scrollX: {
      return {
        className: `${baseClassName} block whitespace-nowrap overflow-x-scroll lg-combobox-input-wrapper-scrollx`,
        style: {
          height: `${inputHeight(size)}px`,
          scrollBehavior: 'smooth',
          scrollbarWidth: 'none',
          lineHeight: 1,
        },
      };
    }

    case Overflow.expandY: {
      return {
        className: `${baseClassName} flex flex-wrap overflow-x-hidden`,
        style: {
          gap: `${flexGap}px`,
          minHeight: `${inputHeight(size)}px`,
          maxHeight: `calc(${inputHeight(size) * 3}px + ${flexGap * 2}px)`,
        },
      };
    }
  }
};

export const baseInputElementClassName =
  'lg-combobox-input w-full border-none cursor-[inherit] bg-[inherit] text-[inherit] box-content p-0 m-0 text-ellipsis align-top';

export const inputElementThemeClassName: Record<Theme, string> = {
  [Theme.Light]: 'lg-combobox-input-light',
  [Theme.Dark]: 'lg-combobox-input-dark',
};

export const inputElementDisabledThemeClassName: Record<Theme, string> = {
  [Theme.Light]: 'lg-combobox-input-disabled-light',
  [Theme.Dark]: 'lg-combobox-input-disabled-dark',
};

export const inputElementSizeStyle = (size: Size): CSSProperties => ({
  height: `${inputHeight(size)}px`,
  fontSize: `${fontSize[size]}px`,
  lineHeight: `${lineHeight[size]}px`,
  minWidth: `${fontSize[size]}px`,
  fontFamily: fontFamilies.default,
});

export const inputElementTransitionStyle = (
  isOpen: boolean,
): CSSProperties => ({
  transition: `width ease-in-out ${isOpen ? '0s' : '100ms'}`,
});

/** Should only be applied to a multiselect */
export const multiselectInputElementStyle = (
  size: Size,
  inputValue?: string,
): CSSProperties => {
  const inputLength = inputValue?.length ?? 0;
  return {
    width: `${inputLength * fontSize[size]}px`,
    maxWidth: '100%',
  };
};

export const clearButtonStyle: CSSProperties = {
  marginBlock: `calc(${caretIconSize / 2}px - 100%)`,
  marginInline: '-6px',
};

export const iconStyle: CSSProperties = {
  height: `${caretIconSize}px`,
  width: `${caretIconSize}px`,
};

export const labelDescriptionContainerClassName = 'flex flex-col';

export const labelDescriptionContainerStyle: CSSProperties = {
  marginBottom: `${spacing[100]}px`,
};

export const labelDescriptionLargeStyle: CSSProperties = {
  fontSize: `${typeScales.large.fontSize}px`,
  lineHeight: `${typeScales.large.lineHeight}px`,
};

export const getCaretIconFill = (theme: Theme) =>
  color[theme].icon.primary.default;

export const getCaretIconDisabledFill = (theme: Theme) =>
  color[theme].icon.disabled.default;
