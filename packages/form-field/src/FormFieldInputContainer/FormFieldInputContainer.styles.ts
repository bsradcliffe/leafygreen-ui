import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { Size } from '@leafygreen-ui/tokens';

import { FormFieldState } from '../FormField/FormField.types';
import { FormFieldContextProps } from '../FormFieldContext';

const inputElementClassName = createUniqueClassName('form-field-input');
const iconClassName = createUniqueClassName('form-field-icon');

function cn(...classes: Array<string | false | undefined | null>): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Palette color values inlined to remove runtime dependency on palette/tokens
 */
// palette.gray.dark4
const GRAY_DARK4 = '#112733';
// palette.white (color.light.background.primary.default)
const WHITE = '#FFFFFF';
// palette.black
const BLACK = '#001E2B';
// palette.gray.base
const GRAY_BASE = '#889397';
// palette.gray.light1
const GRAY_LIGHT1 = '#C1C7C6';
// palette.gray.light2
const GRAY_LIGHT2 = '#E8EDEB';
// palette.gray.dark1
const GRAY_DARK1 = '#5C6C75';
// palette.gray.dark2
const GRAY_DARK2 = '#3D4F58';
// palette.gray.dark3
const GRAY_DARK3 = '#1C2D38';

// color.light.text.primary.default = black
// color.dark.text.primary.default = gray.light2 (#E8EDEB)
// color.light.text.placeholder.default = gray.dark1 (#5C6C75)
// color.dark.text.placeholder.default = gray.light1 (#C1C7C6)
// color.light.text.secondary.default = gray.dark1
// color.dark.text.secondary.default = gray.light1
// color.light.text.disabled.default = gray.base (#889397)
// color.dark.text.disabled.default = gray.dark1 (#5C6C75)

// color.light.border.primary.default = gray.base (#889397)
// color.dark.border.primary.default = gray.base (#889397)
// color.light.border.error.default = red.base (#DB3030)
// color.dark.border.error.default = red.light1 (#FF6960)
// color.light.border.success.default = green.dark1 (#00A35C)
// color.dark.border.success.default = green.dark1 (#00A35C)
// color.light.border.disabled.default = gray.light1 (#C1C7C6)
// color.dark.border.disabled.default = gray.dark2 (#3D4F58)

// color.light.background.disabled.default = gray.light2 (#E8EDEB)
// color.dark.background.disabled.default = gray.dark3 (#1C2D38)

// color.light.icon.secondary.default = gray.base (#889397)
// color.dark.icon.secondary.default = gray.base (#889397)
// color.light.icon.disabled.default = gray.light1 (#C1C7C6)
// color.dark.icon.disabled.default = gray.dark1 (#5C6C75)
// color.light.icon.disabled.hover = gray.light1
// color.dark.icon.disabled.hover = gray.dark1
// color.light.icon.disabled.focus = gray.light1
// color.dark.icon.disabled.focus = gray.dark1

// focusRing.light.input = 0 0 0 3px #016BF8 (palette.blue.base)
// focusRing.dark.input = 0 0 0 3px #0498EC (palette.blue.light1)

// hoverRing.light.gray = 0 0 0 3px #E8EDEB (palette.gray.light2)
// hoverRing.dark.gray = 0 0 0 3px #3D4F58 (palette.gray.dark2)
// hoverRing.light.green = 0 0 0 3px #C0FAE6 (palette.green.light2)
// hoverRing.dark.green = 0 0 0 3px #023430 (palette.green.dark3)
// hoverRing.light.red = 0 0 0 3px #FFCDC7 (palette.red.light2)
// hoverRing.dark.red = 0 0 0 3px #4C2100 (palette.yellow.dark3)

const FOCUS_RING_LIGHT_INPUT = '0_0_0_3px_#016BF8';
const FOCUS_RING_DARK_INPUT = '0_0_0_3px_#0498EC';

const HOVER_RING = {
  light: {
    gray: '0_0_0_3px_#E8EDEB',
    green: '0_0_0_3px_#C0FAE6',
    red: '0_0_0_3px_#FFCDC7',
  },
  dark: {
    gray: '0_0_0_3px_#3D4F58',
    green: '0_0_0_3px_#023430',
    red: '0_0_0_3px_#4C2100',
  },
} as const;

const inputChildSelector = `[&_.${inputElementClassName}]`;
const iconButtonSelector = `[&:has(button.${iconClassName})]`;

const inputWrapperBaseStyles = [
  'flex',
  'items-center',
  'gap-[4px]',
  'text-[length:inherit]',
  'leading-[inherit]',
  "font-[family-name:'Euclid_Circular_A',_'Helvetica_Neue',_Helvetica,_Arial,_sans-serif]",
  'w-full',
  'h-[36px]',
  'font-normal',
  'border',
  'border-solid',
  'outline-none',
  'rounded-[6px]',
  'transition-[border-color,box-shadow]',
  'duration-150',
  'ease-in-out',
  'z-0',
  // Child input element styles
  `${inputChildSelector}:font-[family-name:'Euclid_Circular_A',_'Helvetica_Neue',_Helvetica,_Arial,_sans-serif]`,
  `${inputChildSelector}:text-inherit`,
  `${inputChildSelector}:bg-inherit`,
  `${inputChildSelector}:text-[length:inherit]`,
  `${inputChildSelector}:leading-[inherit]`,
  `${inputChildSelector}:outline-none`,
  `${inputChildSelector}:border-none`,
  // SVG min-size
  '[&_svg]:min-h-[16px]',
  '[&_svg]:min-w-[16px]',
].join(' ');

const inputWrapperModeStyles: Record<Theme, string> = {
  [Theme.Light]: [
    `text-[${BLACK}]`,
    `bg-[${WHITE}]`,
    'border',
    'border-solid',
    // Autofill
    `${inputChildSelector}:autofill:text-[${BLACK}]`,
    `${inputChildSelector}:autofill:bg-[${WHITE}]`,
    `${inputChildSelector}:autofill:[-webkit-text-fill-color:${BLACK}]`,
    `${inputChildSelector}:autofill:[box-shadow:0_0_0_100px_${WHITE}_inset]`,
    // Placeholder
    `${inputChildSelector}:placeholder:font-normal`,
    `${inputChildSelector}:placeholder:text-[${GRAY_DARK1}]`,
  ].join(' '),
  [Theme.Dark]: [
    `text-[${GRAY_LIGHT2}]`,
    `bg-[${GRAY_DARK4}]`,
    'border',
    'border-solid',
    // Autofill
    `${inputChildSelector}:autofill:text-[${GRAY_LIGHT2}]`,
    `${inputChildSelector}:autofill:bg-[${GRAY_DARK4}]`,
    `${inputChildSelector}:autofill:[-webkit-text-fill-color:${GRAY_LIGHT2}]`,
    `${inputChildSelector}:autofill:[box-shadow:0_0_0_100px_${GRAY_DARK4}_inset]`,
    // Placeholder
    `${inputChildSelector}:placeholder:font-normal`,
    `${inputChildSelector}:placeholder:text-[${GRAY_LIGHT1}]`,
  ].join(' '),
};

const inputWrapperFocusStyles: Record<Theme, string> = {
  [Theme.Light]:
    `focus-within:shadow-[${FOCUS_RING_LIGHT_INPUT}] focus-within:border-[${WHITE}]`,
  [Theme.Dark]:
    `focus-within:shadow-[${FOCUS_RING_DARK_INPUT}] focus-within:border-[${GRAY_DARK4}]`,
};

const inputWrapperSizeStyles: Record<Size, string> = {
  [Size.XSmall]: cn(
    'h-[22px] px-[8px]',
    `${iconButtonSelector}:pe-[4px]`,
  ),
  [Size.Small]: cn(
    'h-[28px] px-[8px]',
    `${iconButtonSelector}:pe-[4px]`,
  ),
  [Size.Default]: cn(
    'h-[36px] px-[12px]',
    `${iconButtonSelector}:pe-[6px]`,
  ),
  [Size.Large]: cn(
    'h-[48px] px-[12px]',
    `${iconButtonSelector}:pe-[8px]`,
  ),
};

const inputWrapperStateStyles: Record<
  Theme,
  Record<FormFieldState, string>
> = {
  [Theme.Light]: {
    [FormFieldState.Error]: cn(
      `border-[#DB3030]`,
      `hover:not-focus:shadow-[${HOVER_RING.light.red}]`,
      `active:not-focus:shadow-[${HOVER_RING.light.red}]`,
    ),
    [FormFieldState.None]: cn(
      `border-[${GRAY_BASE}]`,
      `hover:not-focus:shadow-[${HOVER_RING.light.gray}]`,
      `active:not-focus:shadow-[${HOVER_RING.light.gray}]`,
    ),
    [FormFieldState.Valid]: cn(
      `border-[#00A35C]`,
      `hover:not-focus:shadow-[${HOVER_RING.light.green}]`,
      `active:not-focus:shadow-[${HOVER_RING.light.green}]`,
    ),
  },
  [Theme.Dark]: {
    [FormFieldState.Error]: cn(
      `border-[#FF6960]`,
      `hover:not-focus:shadow-[${HOVER_RING.dark.red}]`,
      `active:not-focus:shadow-[${HOVER_RING.dark.red}]`,
    ),
    [FormFieldState.None]: cn(
      `border-[${GRAY_BASE}]`,
      `hover:not-focus:shadow-[${HOVER_RING.dark.gray}]`,
      `active:not-focus:shadow-[${HOVER_RING.dark.gray}]`,
    ),
    [FormFieldState.Valid]: cn(
      `border-[#00A35C]`,
      `hover:not-focus:shadow-[${HOVER_RING.dark.green}]`,
      `active:not-focus:shadow-[${HOVER_RING.dark.green}]`,
    ),
  },
};

const inputWrapperDisabledStyles: Record<Theme, string> = {
  [Theme.Light]: [
    'cursor-not-allowed',
    `text-[${GRAY_BASE}]`,
    `bg-[${GRAY_LIGHT2}]`,
    `border-[${GRAY_LIGHT1}]`,
    'hover:not-focus:shadow-inherit',
    'active:not-focus:shadow-inherit',
    // Disabled child input styles
    `${inputChildSelector}:cursor-not-allowed`,
    `${inputChildSelector}:pointer-events-none`,
    `${inputChildSelector}:text-[${GRAY_BASE}]`,
    `${inputChildSelector}:placeholder:text-inherit`,
  ].join(' '),
  [Theme.Dark]: [
    'cursor-not-allowed',
    `text-[${GRAY_DARK1}]`,
    `bg-[${GRAY_DARK3}]`,
    `border-[${GRAY_DARK2}]`,
    'hover:not-focus:shadow-inherit',
    'active:not-focus:shadow-inherit',
    // Disabled child input styles
    `${inputChildSelector}:cursor-not-allowed`,
    `${inputChildSelector}:pointer-events-none`,
    `${inputChildSelector}:text-[${GRAY_DARK1}]`,
    `${inputChildSelector}:placeholder:text-inherit`,
  ].join(' '),
};

export const getInputWrapperStyles = ({
  disabled,
  size: sizeProp,
  state,
  theme,
  className,
}: Pick<FormFieldContextProps, 'disabled' | 'size' | 'state'> & {
  theme: Theme;
  className?: string;
}) =>
  cn(
    inputWrapperBaseStyles,
    inputWrapperModeStyles[theme],
    inputWrapperSizeStyles[sizeProp],
    !disabled && inputWrapperStateStyles[theme][state],
    !disabled && inputWrapperFocusStyles[theme],
    disabled && inputWrapperDisabledStyles[theme],
    className,
  );

export const childrenWrapperStyles = 'w-full';

export const getChildrenStyles = (className?: string) =>
  cn(inputElementClassName, className);

export const additionalChildrenWrapperStyles = 'flex items-center gap-[4px]';

const optionalTextBaseStyles = [
  'text-[12px]',
  'leading-[12px]',
  'italic',
  'font-normal',
  'flex',
  'items-center',
  '[&>p]:m-0',
].join(' ');

export const getOptionalTextStyle = (theme: Theme) => {
  const colorValue =
    theme === Theme.Light ? GRAY_DARK1 : GRAY_LIGHT1;
  return cn(optionalTextBaseStyles, `text-[${colorValue}]`);
};

const iconThemeStyles: Record<Theme, string> = {
  [Theme.Light]: `text-[${GRAY_BASE}]`,
  [Theme.Dark]: `text-[${GRAY_BASE}]`,
};

const iconDisabledThemeStyles: Record<Theme, string> = {
  [Theme.Light]: cn(
    `text-[${GRAY_LIGHT1}]`,
    `active:text-[${GRAY_LIGHT1}]`,
    `hover:text-[${GRAY_LIGHT1}]`,
    `focus:text-[${GRAY_LIGHT1}]`,
  ),
  [Theme.Dark]: cn(
    `text-[${GRAY_DARK1}]`,
    `active:text-[${GRAY_DARK1}]`,
    `hover:text-[${GRAY_DARK1}]`,
    `focus:text-[${GRAY_DARK1}]`,
  ),
};

export const getContentEndStyles = (
  theme: Theme,
  disabled: boolean,
  className?: string,
) =>
  cn(
    iconClassName,
    iconThemeStyles[theme],
    disabled && iconDisabledThemeStyles[theme],
    className,
  );
