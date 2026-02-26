import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { BaseFontSize } from '@leafygreen-ui/tokens';

import { Variant } from '../shared.types';

export const baseStyles = 'relative shrink-0';

export const renderedImageStyles = [
  // this margin is set to control text alignment with the base of the renderedImage
  'mt-[3px]',
  'mb-[3px]',
  'w-[32px]',
  'h-[32px]',
  'shrink-0',
].join(' ');

export const bannerIconPositionStyles: Record<BaseFontSize, string> = {
  [BaseFontSize.Body1]: 'top-[2px]', // 18px(height in figma) - 16px(actual height of icon)
  [BaseFontSize.Body2]: 'top-[5.5px]', // 21.5px(height in figma) - 16px(actual height of icon)
};

export const themeStyles: Record<Theme, Record<Variant, string>> = {
  [Theme.Dark]: {
    [Variant.Info]: `text-[${palette.blue.light1}]`,
    [Variant.Warning]: `text-[${palette.yellow.base}]`,
    [Variant.Danger]: `text-[${palette.red.light1}]`,
    [Variant.Success]: `text-[${palette.green.base}]`,
  },
  [Theme.Light]: {
    [Variant.Info]: `text-[${palette.blue.base}]`,
    [Variant.Warning]: `text-[${palette.yellow.dark2}]`,
    [Variant.Danger]: `text-[${palette.red.base}]`,
    [Variant.Success]: `text-[${palette.green.dark1}]`,
  },
};
