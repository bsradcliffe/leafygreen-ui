import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';

import { Variant } from './SplitButton.types';

export const buttonContainerStyles = [
  'relative',
  'flex',
  'z-0', // Establish new stacking context
].join(' ');

export const buttonBaseStyles = [
  'rounded-tr-none',
  'rounded-br-none',
  'z-[1]',
].join(' ');

export const buttonBorderColor: Record<Theme, Record<Variant, string>> = {
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

export const buttonThemeStyles = (theme: Theme, variant: Variant) => {
  const borderColor = buttonBorderColor[theme][variant];
  return [
    `border-r-[${borderColor}]`,
    `hover:border-r-[${borderColor}]`,
    `focus:border-r-[${borderColor}]`,
    `focus-visible:border-r-[${borderColor}]`,
    `active:border-r-[${borderColor}]`,
  ].join(' ');
};
