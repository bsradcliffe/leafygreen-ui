import { Theme } from '@leafygreen-ui/lib';
import {
  addOverflowShadow,
  color,
  InteractionState,
  Side,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import {
  COLLAPSED_SIDE_NAV_WIDTH_WITH_BORDER,
  gridAreas,
  PINNED_SIDE_NAV_WIDTH_WITH_BORDER,
  SIDE_NAV_TRANSITION_DURATION,
} from '../constants';

const getBaseWrapperStyles = (theme: Theme) =>
  [
    `[grid-area:${gridAreas.sideNav}]`,
    'border-r',
    `border-r-[${color[theme].border[Variant.Secondary][InteractionState.Default]}]`,
    'h-full',
    'absolute',
    'left-0',
    'top-0',
    'bottom-0',
    'z-[1]',
  ].join(' ');

export const getWrapperStyles = ({
  className,
  theme,
}: {
  className?: string;
  theme: Theme;
}) => {
  return cn(getBaseWrapperStyles(theme), className);
};

const baseContainerStyles = [
  'relative',
  'z-[1]',
  'h-full',
  'grid',
  'grid-rows-[auto_1fr_auto]',
  `transition-[max-width]`,
  `duration-[${SIDE_NAV_TRANSITION_DURATION}ms]`,
  'ease-in-out',
  `max-w-[${PINNED_SIDE_NAV_WIDTH_WITH_BORDER}px]`,
].join(' ');

const collapsedContainerStyles =
  `max-w-[${COLLAPSED_SIDE_NAV_WIDTH_WITH_BORDER}px]`;

export const getContainerStyles = ({
  shouldRenderExpanded,
  showOverflowShadow,
  theme,
}: {
  shouldRenderExpanded: boolean;
  showOverflowShadow: boolean;
  theme: Theme;
}) =>
  cn(baseContainerStyles, {
    [collapsedContainerStyles]: !shouldRenderExpanded,
    [addOverflowShadow({ isInside: false, side: Side.Right, theme })]:
      showOverflowShadow,
  });
