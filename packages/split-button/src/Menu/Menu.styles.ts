import { Size } from '@leafygreen-ui/button';
import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';

import { Variant } from '../SplitButton/SplitButton.types';

export const triggerBaseStyles = [
  'rounded-tl-none',
  'rounded-bl-none',
  '-ml-px',
  'focus:z-[1]',
  'focus-visible:z-[1]',
  'hover:z-[1]',
].join(' ');

export const triggerBorderColor: Record<Theme, Record<Variant, string>> = {
  [Theme.Light]: {
    [Variant.Default]: palette.gray.base,
    [Variant.Primary]: palette.green.light2,
    [Variant.Danger]: palette.red.light2,
  },
  [Theme.Dark]: {
    [Variant.Default]: palette.gray.light1,
    [Variant.Primary]: palette.green.base,
    [Variant.Danger]: palette.red.light2,
  },
};

export const triggerCaretColor: Record<Theme, Record<Variant, string>> = {
  [Theme.Light]: {
    [Variant.Default]: palette.gray.dark2,
    [Variant.Primary]: palette.green.light2,
    [Variant.Danger]: palette.red.light3,
  },
  [Theme.Dark]: {
    [Variant.Default]: palette.gray.light2,
    [Variant.Primary]: palette.green.light2,
    [Variant.Danger]: palette.red.light2,
  },
};

export const triggerThemeStyles = (theme: Theme, variant: Variant) => {
  const borderColor = triggerBorderColor[theme][variant];
  const caretColor = triggerCaretColor[theme][variant];
  return [
    `border-l-[${borderColor}]`,
    `hover:border-l-[${borderColor}]`,
    `focus:border-l-[${borderColor}]`,
    `focus-visible:border-l-[${borderColor}]`,
    `active:border-l-[${borderColor}]`,
    `[&_svg]:text-[${caretColor}]`,
  ].join(' ');
};

export const triggerSizeStyles: Record<Size, string> = {
  [Size.XSmall]: 'w-[24px]',
  [Size.Small]: 'w-[32px]',
  [Size.Default]: 'w-[32px]',
  [Size.Large]: 'w-[44px]',
};
