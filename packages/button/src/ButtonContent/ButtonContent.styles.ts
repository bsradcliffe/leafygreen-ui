import { Theme } from '@leafygreen-ui/lib';

import { Size, Variant } from '../types';

/**
 * Pre-computed transparent ripple colors (replaces polished transparentize)
 */
const rippleOpacity = 0.76;

export const rippleColors: Record<Theme, Record<Variant, string>> = {
  [Theme.Light]: {
    [Variant.Default]: '#E8EDEB',
    [Variant.Primary]: '#00A35C',
    [Variant.PrimaryOutline]: `rgba(0, 237, 100, ${1 - rippleOpacity})`,
    [Variant.Danger]: '#FF6960',
    [Variant.DangerOutline]: `rgba(219, 48, 48, ${1 - rippleOpacity})`,
    [Variant.BaseGreen]: '#71F6BA',
  },
  [Theme.Dark]: {
    [Variant.Default]: '#889397',
    [Variant.Primary]: '#00A35C',
    [Variant.PrimaryOutline]: `rgba(0, 237, 100, ${1 - rippleOpacity})`,
    [Variant.Danger]: '#970606',
    [Variant.DangerOutline]: `rgba(255, 105, 96, ${1 - rippleOpacity})`,
    [Variant.BaseGreen]: '#00A35C',
  },
};

export const rippleClassName =
  'overflow-hidden absolute inset-0 rounded-[5px]';

export const buttonContentClassName =
  'grid grid-flow-col justify-center items-center h-full w-full relative select-none z-0 transition-all duration-[var(--transition-duration-default)] ease-in-out';

export const buttonContentSizeClassName: Record<Size, string> = {
  [Size.XSmall]: 'px-[7px] gap-[6px]',
  [Size.Small]: 'px-[11px] gap-[6px]',
  [Size.Default]: 'px-[11px] gap-[6px]',
  [Size.Large]: 'px-[15px] gap-[8px]',
};

export const centeredSpinnerContainerClassName = 'absolute';

export const centeredSpinnerClassName =
  'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2';

export const buttonSpinnerSize: Record<Size, number> = {
  [Size.XSmall]: 16,
  [Size.Small]: 16,
  [Size.Default]: 16,
  [Size.Large]: 20,
};

export const spinnerColor: Record<Theme, string> = {
  [Theme.Dark]: '#C1C7C6',
  [Theme.Light]: '#5C6C75',
};

export const hiddenContentClassName = 'invisible';

export const leftGlyphClassName = 'justify-self-end';

export const rightGlyphClassName = 'justify-self-start';
