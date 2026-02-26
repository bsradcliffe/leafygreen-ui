import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';

import { Size, Variant } from '../ProgressBar.types';

/**
 * Pre-computed transparent color values, replacing polished `transparentize()`.
 *
 * transparentize(amount, color) reduces alpha by `amount`:
 *   0.5  => 50% alpha => hex suffix 80
 *   0.25 => 75% alpha => hex suffix BF
 */
const customFadePalette = {
  blue: '#C3E7FE',
  green: '#C0FAE6',
};

export const barSizeStyles = {
  [Size.Small]: {
    height: '4px',
    borderRadius: '4px',
  },
  [Size.Default]: {
    height: '8px',
    borderRadius: '4px',
  },
  [Size.Large]: {
    height: '16px',
    borderRadius: '8px',
  },
};

export const barColorStyles = {
  [Theme.Light]: {
    track: palette.gray.light2,
    disabledBar: palette.gray.light1,

    [Variant.Info]: {
      bar: palette.blue.base,
      icon: palette.blue.base,
      shimmerFade: `${customFadePalette.blue}80`,
    },
    [Variant.Success]: {
      bar: palette.green.dark1,
      icon: palette.green.dark1,
      shimmerFade: `${customFadePalette.green}80`,
    },
    [Variant.Warning]: {
      bar: palette.yellow.base,
      icon: palette.yellow.dark2,
    },
    [Variant.Error]: {
      bar: palette.red.base,
      icon: palette.red.base,
    },
  },
  [Theme.Dark]: {
    track: palette.gray.dark2,
    disabledBar: palette.gray.dark1,

    [Variant.Info]: {
      bar: palette.blue.light1,
      icon: palette.blue.light1,
      shimmerFade: `${customFadePalette.blue}BF`,
    },
    [Variant.Success]: {
      bar: palette.green.base,
      icon: palette.green.base,
      shimmerFade: `${customFadePalette.green}BF`,
    },
    [Variant.Warning]: {
      bar: palette.yellow.base,
      icon: palette.yellow.base,
    },
    [Variant.Error]: {
      bar: palette.red.light1,
      icon: palette.red.light1,
    },
  },
};
