import { Theme } from '@leafygreen-ui/lib';

import { Size, State } from './PasswordInput.types';

function cn(
  ...classes: Array<string | false | undefined | null>
): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Resolved token values:
 *
 * spacing[1] / spacing[100] = 4px
 * spacing[200] = 8px
 * spacing[300] = 12px
 * spacing[800] = 32px
 * spacing[1000] = 40px
 * spacing[50] = 2px
 *
 * typeScales.body1.fontSize = 13px, lineHeight = 20px
 * typeScales.large.fontSize = 18px, lineHeight = 24px
 *
 * fontFamilies.default = 'Euclid Circular A', 'Helvetica Neue', Helvetica, Arial, sans-serif
 * fontWeights.regular = 400
 * transitionDuration.default = 150ms
 *
 * Palette:
 * palette.white = #FFFFFF
 * palette.black = #001E2B
 * palette.gray.dark4 = #112733
 * palette.gray.dark2 = #3D4F58
 * palette.gray.dark1 = #5C6C75
 * palette.gray.base = #889397
 * palette.gray.light1 = #C1C7C6
 * palette.gray.light2 = #E8EDEB
 *
 * Color tokens (light):
 * color.light.text.primary.default = #001E2B (palette.black)
 * color.light.text.disabled.default = #889397
 * color.light.text.disabled.focus = #889397
 * color.light.text.error.default = #DB3030
 * color.light.text.secondary.default = #5C6C75
 * color.light.background.primary.default = #FFFFFF
 * color.light.background.disabled.default = #E8EDEB
 * color.light.background.disabled.focus = #E8EDEB
 * color.light.border.primary.default = #889397
 * color.light.border.primary.focus = #0498EC (palette.blue.light1)
 * color.light.border.error.default = #DB3030
 * color.light.border.success.default = #00A35C (palette.green.dark1)
 * color.light.border.disabled.default = #C1C7C6
 *
 * Color tokens (dark):
 * color.dark.text.primary.default = #E8EDEB
 * color.dark.text.disabled.default = #5C6C75
 * color.dark.text.disabled.focus = #5C6C75
 * color.dark.text.error.default = #FF6960
 * color.dark.text.secondary.default = #C1C7C6
 * color.dark.background.primary.default = #001E2B (palette.black)
 * color.dark.background.disabled.default = #1C2D38
 * color.dark.background.disabled.focus = #1C2D38
 * color.dark.border.primary.default = #889397
 * color.dark.border.error.default = #FF6960
 * color.dark.border.success.default = #00A35C
 * color.dark.border.disabled.default = #3D4F58
 *
 * focusRing.light.input = 0 0 0 3px #016BF8
 * focusRing.dark.input = 0 0 0 3px #0498EC
 *
 * hoverRing.light.gray = 0 0 0 3px #E8EDEB
 * hoverRing.light.green = 0 0 0 3px #C0FAE6
 * hoverRing.light.red = 0 0 0 3px #FFCDC7
 * hoverRing.dark.gray = 0 0 0 3px #3D4F58
 * hoverRing.dark.green = 0 0 0 3px #023430
 * hoverRing.dark.red = 0 0 0 3px #4C2100
 */

/**
 * Adds an inset box shadow to hide the UA background styles for autofilled inputs
 */
const autofillShadowOverride = (color: string) => `0_0_0_100px_${color}_inset`;

export const labelBaseStyles = 'block mb-[4px]';

export const labelLargeOverrideStyles = 'text-[18px]';

export const inheritTypeScale = 'text-[inherit] leading-[inherit]';

export const inputWrapperStyles = 'relative';

export const inputBaseStyles = [
  "font-[family-name:'Euclid_Circular_A','Helvetica_Neue',Helvetica,Arial,sans-serif]",
  'w-full',
  'h-[36px]',
  'font-normal',
  'border',
  'border-solid',
  'z-[1]',
  'outline-none',
  'rounded-[6px]',
  '[transition:150ms_ease-in-out]',
  '[transition-property:border-color,box-shadow]',
  'disabled:cursor-not-allowed',
  'disabled:hover:shadow-none',
  'disabled:active:shadow-none',
  'placeholder:text-[inherit]',
  'placeholder:leading-[inherit]',
].join(' ');

export const inputBaseThemeStyles: Record<Theme, string> = {
  [Theme.Light]: [
    'text-[#001E2B]',
    'bg-[#FFFFFF]',
    'focus-visible:shadow-[0_0_0_3px_#016BF8]',
    'focus-visible:border-[#0498EC]',
    // autofill
    '[-webkit-autofill:text-fill-color:#001E2B]',
    `[-webkit-autofill:shadow:${autofillShadowOverride('#FFFFFF')}]`,
    '[-webkit-autofill:bg:#FFFFFF]',
    // placeholder
    'placeholder:text-[#889397]',
  ].join(' '),
  [Theme.Dark]: [
    'bg-[#112733]',
    'text-[#E8EDEB]',
    'focus-visible:shadow-[0_0_0_3px_#0498EC]',
    'focus-visible:border-[#112733]',
    // placeholder
    'placeholder:text-[#5C6C75]',
  ].join(' '),
};

export const inputSizeStyles: Record<Size, string> = {
  [Size.XSmall]: 'text-[13px] leading-[20px] h-[22px] pl-[8px] pr-[32px]',
  [Size.Small]: 'text-[13px] leading-[20px] h-[28px] pl-[8px] pr-[32px]',
  [Size.Default]: 'text-[13px] leading-[20px] h-[36px] pl-[12px] pr-[40px]',
  [Size.Large]: 'text-[18px] leading-[24px] h-[48px] pl-[12px] pr-[40px]',
};

const errorWarningLightThemeStyles = [
  'border-[#DB3030]',
  'hover:not-focus-visible:shadow-[0_0_0_3px_#FFCDC7]',
  'active:not-focus-visible:shadow-[0_0_0_3px_#FFCDC7]',
].join(' ');

const errorWarningDarkThemeStyles = [
  'border-[#FF6960]',
  'hover:not-focus-visible:shadow-[0_0_0_3px_#4C2100]',
  'active:not-focus-visible:shadow-[0_0_0_3px_#4C2100]',
].join(' ');

export const inputThemeStyles: Record<Theme, Record<State, string>> = {
  [Theme.Light]: {
    [State.Error]: errorWarningLightThemeStyles,
    [State.Warning]: errorWarningLightThemeStyles,
    [State.Valid]: [
      'border-[#00A35C]',
      'hover:not-focus-visible:shadow-[0_0_0_3px_#C0FAE6]',
      'active:not-focus-visible:shadow-[0_0_0_3px_#C0FAE6]',
    ].join(' '),
    [State.None]: [
      'border-[#889397]',
      'hover:not-focus-visible:shadow-[0_0_0_3px_#E8EDEB]',
      'active:not-focus-visible:shadow-[0_0_0_3px_#E8EDEB]',
    ].join(' '),
  },
  [Theme.Dark]: {
    [State.Error]: errorWarningDarkThemeStyles,
    [State.Warning]: errorWarningDarkThemeStyles,
    [State.Valid]: [
      'border-[#00A35C]',
      'hover:not-focus-visible:shadow-[0_0_0_3px_#023430]',
      'active:not-focus-visible:shadow-[0_0_0_3px_#023430]',
    ].join(' '),
    [State.None]: [
      'border-[#889397]',
      'hover:not-focus-visible:shadow-[0_0_0_3px_#3D4F58]',
      'active:not-focus-visible:shadow-[0_0_0_3px_#3D4F58]',
    ].join(' '),
  },
};

export const getInputDisabledStyles = (theme: Theme) => {
  const styles: Record<Theme, string> = {
    [Theme.Light]: [
      'cursor-not-allowed',
      'bg-[#E8EDEB]',
      'border-[#C1C7C6]',
      'text-[#889397]',
    ].join(' '),
    [Theme.Dark]: [
      'cursor-not-allowed',
      'bg-[#1C2D38]',
      'border-[#3D4F58]',
      'text-[#5C6C75]',
    ].join(' '),
  };

  return styles[theme];
};
