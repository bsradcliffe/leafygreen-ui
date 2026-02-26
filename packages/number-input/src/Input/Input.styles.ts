import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';

import { Size, State } from '../NumberInput/NumberInput.types';

/**
 * Adds an inset box shadow to hide the UA background styles for autofilled inputs
 */
const autofillShadowOverride = (color: string) => `0_0_0_100px_${color}_inset`;

export const wrapperClassName = createUniqueClassName('number-input-wrapper');

// fontFamilies.default = 'Euclid Circular A', 'Helvetica Neue', Helvetica, Arial, sans-serif
// fontWeights.regular = 400
// typeScales.body1.fontSize = 13px, lineHeight = 20px
// transitionDuration.default = 150ms
export const inputBaseStyles = [
  '[all:unset]',
  "font-['Euclid_Circular_A','Helvetica_Neue',Helvetica,Arial,sans-serif]",
  'font-normal',
  'w-full',
  'text-[13px]',
  'leading-[20px]',
  'h-[inherit]',
  'box-border',
  'transition-[background-color]',
  'duration-150',
  'ease-in-out',

  // &::-webkit-outer-spin-button, &::-webkit-inner-spin-button
  '[&::-webkit-outer-spin-button]:appearance-none',
  '[&::-webkit-outer-spin-button]:m-0',
  '[&::-webkit-inner-spin-button]:appearance-none',
  '[&::-webkit-inner-spin-button]:m-0',

  // &[type='number']
  "[&[type='number']]:[-moz-appearance:textfield]",

  // .${wrapperClassName}:hover &, .${wrapperClassName}:focus-within & { transition-property: padding }
  `[.${wrapperClassName}:hover_&]:transition-[padding]`,
  `[.${wrapperClassName}:focus-within_&]:transition-[padding]`,
].join(' ');

// Light: placeholder = #889397 (gray.base)
// Light: autofill text-fill = #001E2B (black), bg shadow = #FFFFFF (white)
// Light: autofill hover text-fill = #001E2B (black)
const inputLightStyles = [
  'placeholder:text-[#889397]',

  '[-webkit-autofill]:[-webkit-text-fill-color:#001E2B]',
  '[-webkit-autofill]:border-0',
  `[-webkit-autofill]:shadow-[${autofillShadowOverride('#FFFFFF')}]`,

  `[-webkit-autofill]:focus-visible:[-webkit-text-fill-color:#001E2B]`,
  `[-webkit-autofill]:hover:[-webkit-text-fill-color:#001E2B]`,
  `[-webkit-autofill]:focus-visible:shadow-[${autofillShadowOverride('#FFFFFF')}]`,
  `[-webkit-autofill]:hover:shadow-[${autofillShadowOverride('#FFFFFF')}]`,
].join(' ');

// Dark: placeholder = #5C6C75 (gray.dark1)
// Dark: autofill text-fill = #E8EDEB (gray.light2), bg shadow = #112733 (gray.dark4)
// Dark: autofill hover text-fill = #E8EDEB (gray.light2)
const inputDarkStyles = [
  'placeholder:text-[#5C6C75]',

  '[-webkit-autofill]:[-webkit-text-fill-color:#E8EDEB]',
  '[-webkit-autofill]:border-0',
  `[-webkit-autofill]:shadow-[${autofillShadowOverride('#112733')}]`,

  `[-webkit-autofill]:focus-visible:[-webkit-text-fill-color:#E8EDEB]`,
  `[-webkit-autofill]:hover:[-webkit-text-fill-color:#E8EDEB]`,
  `[-webkit-autofill]:focus-visible:shadow-[${autofillShadowOverride('#112733')}]`,
  `[-webkit-autofill]:hover:shadow-[${autofillShadowOverride('#112733')}]`,
].join(' ');

export const inputThemeStyles: Record<Theme, string> = {
  [Theme.Light]: inputLightStyles,
  [Theme.Dark]: inputDarkStyles,
};

// transitionDuration.default = 150ms
export const wrapperBaseStyles = [
  'relative',
  'border',
  'border-solid',
  'rounded-[6px]',
  'transition-[border-color,box-shadow]',
  'duration-150',
  'ease-in-out',
  'overflow-hidden',
  'flex',
  'items-center',
  'grow',
  'shrink-0',
  'z-[1]',
].join(' ');

export const selectBaseStyles = [
  'rounded-tr-none',
  'rounded-br-none',
].join(' ');

// Light: bg = #FFFFFF (white), text = #001E2B (black)
// focusRing.light.input = 0 0 0 3px #016BF8
// border.primary.focus light = #0498EC (blue.light1)
const wrapperLightStyles = [
  'bg-[#FFFFFF]',
  'text-[#001E2B]',
  'focus-within:shadow-[0_0_0_3px_#016BF8]',
  'focus-within:border-[#0498EC]',
].join(' ');

// Dark: bg = #112733 (gray.dark4), text = #E8EDEB (gray.light2)
// focusRing.dark.input = 0 0 0 3px #0498EC
// border.primary.focus dark = #0498EC (blue.light1)
const wrapperDarkStyles = [
  'bg-[#112733]',
  'text-[#E8EDEB]',
  'focus-within:shadow-[0_0_0_3px_#0498EC]',
  'focus-within:border-[#0498EC]',
].join(' ');

export const wrapperThemeStyles: Record<Theme, string> = {
  [Theme.Light]: wrapperLightStyles,
  [Theme.Dark]: wrapperDarkStyles,
};

// border.primary.default: light = #889397, dark = #889397
// border.error.default: light = #DB3030, dark = #FF6960
// border.success.default: light = #00A35C, dark = #00A35C
export const getWrapperStateStyles = (theme: Theme) => ({
  [State.Error]: theme === Theme.Light
    ? 'border-[#DB3030]'
    : 'border-[#FF6960]',
  [State.None]: 'border-[#889397]',
  [State.Valid]: 'border-[#00A35C]',
});

// hoverRing.light: gray = 0 0 0 3px #E8EDEB, green = 0 0 0 3px #C0FAE6, red = 0 0 0 3px #FFCDC7
// hoverRing.dark: gray = 0 0 0 3px #3D4F58, green = 0 0 0 3px #023430, red = 0 0 0 3px #4C2100
export const getWrapperHoverStyles = (theme: Theme) => ({
  [State.Error]: theme === Theme.Light
    ? [
        'border-[#DB3030]',
        '[&:hover:not(:focus-within)]:shadow-[0_0_0_3px_#FFCDC7]',
        '[&:active:not(:focus-within)]:shadow-[0_0_0_3px_#FFCDC7]',
      ].join(' ')
    : [
        'border-[#FF6960]',
        '[&:hover:not(:focus-within)]:shadow-[0_0_0_3px_#4C2100]',
        '[&:active:not(:focus-within)]:shadow-[0_0_0_3px_#4C2100]',
      ].join(' '),
  [State.None]: theme === Theme.Light
    ? [
        'border-[#889397]',
        '[&:hover:not(:focus-within)]:shadow-[0_0_0_3px_#E8EDEB]',
        '[&:active:not(:focus-within)]:shadow-[0_0_0_3px_#E8EDEB]',
      ].join(' ')
    : [
        'border-[#889397]',
        '[&:hover:not(:focus-within)]:shadow-[0_0_0_3px_#3D4F58]',
        '[&:active:not(:focus-within)]:shadow-[0_0_0_3px_#3D4F58]',
      ].join(' '),
  [State.Valid]: theme === Theme.Light
    ? [
        'border-[#00A35C]',
        '[&:hover:not(:focus-within)]:shadow-[0_0_0_3px_#C0FAE6]',
        '[&:active:not(:focus-within)]:shadow-[0_0_0_3px_#C0FAE6]',
      ].join(' ')
    : [
        'border-[#00A35C]',
        '[&:hover:not(:focus-within)]:shadow-[0_0_0_3px_#023430]',
        '[&:active:not(:focus-within)]:shadow-[0_0_0_3px_#023430]',
      ].join(' '),
});

// background.disabled.default: light = #E8EDEB, dark = #1C2D38
// border.disabled.default: light = #C1C7C6, dark = #3D4F58
// text.disabled.default: light = #889397, dark = #5C6C75
export const getWrapperDisabledStyles = (theme: Theme) =>
  theme === Theme.Light
    ? 'bg-[#E8EDEB] border-[#C1C7C6] text-[#889397]'
    : 'bg-[#1C2D38] border-[#3D4F58] text-[#5C6C75]';

// spacing[200] = 8, spacing[300] = 12, spacing[600] = 24, spacing[800] = 32
export const inputSizeStyles: Record<Size, string> = {
  [Size.XSmall]: 'h-[22px] pl-[8px] pr-[24px]',
  [Size.Small]: 'h-[28px] pl-[8px] pr-[24px]',
  [Size.Default]: 'h-[36px] pl-[12px] pr-[32px]',
  [Size.Large]: 'h-[48px] pl-[12px] pr-[32px]',
};
