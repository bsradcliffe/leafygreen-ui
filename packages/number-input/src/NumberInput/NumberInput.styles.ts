import { Theme } from '@leafygreen-ui/lib';

import { Size } from './NumberInput.types';

// spacing[1] = 4px
export const labelDescriptionStyles = [
  'mb-[4px]',
  'flex',
  'flex-col',
].join(' ');

export const wrapperBaseStyles = [
  'flex',
  'relative',
  'z-0',
].join(' ');

export const wrapperSizeStyles: Record<Size, string> = {
  [Size.XSmall]: 'h-[22px]',
  [Size.Small]: 'h-[28px]',
  [Size.Default]: 'h-[36px]',
  [Size.Large]: 'h-[48px]',
};

// gap: 12px
export const wrapperGapStyles = 'gap-[12px]';

// fontWeights.semiBold = 600
export const unitBaseStyles = [
  'self-center',
  'font-semibold',
].join(' ');

// color.light.text.secondary.default = #5C6C75, dark = #C1C7C6
export const getUnitThemeStyles = (theme: Theme) =>
  theme === Theme.Light
    ? 'text-[#5C6C75]'
    : 'text-[#C1C7C6]';

// color.light.text.disabled.default = #889397, dark = #5C6C75
export const getUnitDisabledStyles = (theme: Theme) =>
  theme === Theme.Light
    ? 'text-[#889397]'
    : 'text-[#5C6C75]';
