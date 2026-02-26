import { spacing } from '@leafygreen-ui/tokens';

import { SeriesListItemColorDotProps } from './SeriesListItemColorDot.types';

export const getColorDotStyle = (
  color: SeriesListItemColorDotProps['color'],
) =>
  [
    'inline-block',
    `mt-[${spacing[100]}px]`,
    `mr-[${spacing[100]}px]`,
    'rounded-full',
    'w-[10px]',
    'h-[10px]',
    `bg-[${color}]`,
  ].join(' ');
