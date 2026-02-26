import { Theme } from '@leafygreen-ui/lib';
import {
  color,
  InteractionState,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';

const PINNED_SERIES_LIST_MAX_HEIGHT = 102;

export const getSeriesListStyles = ({
  theme,
  tooltipPinned,
}: {
  theme: Theme;
  tooltipPinned: boolean;
}) =>
  [
    '[all:unset]',
    `bg-[${color[theme].background[Variant.InversePrimary][InteractionState.Default]}]`,
    'overflow-y-auto',
    tooltipPinned
      ? `max-h-[${PINNED_SERIES_LIST_MAX_HEIGHT}px]`
      : 'max-h-none',
    `pb-[${spacing[150]}px] px-[${spacing[150]}px]`,
    'grid',
    `gap-[${spacing[100]}px]`,
  ].join(' ');
