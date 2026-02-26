import { Theme } from '@leafygreen-ui/lib';
import {
  color,
  InteractionState,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../../cn';
import {
  COLLAPSED_SIDE_NAV_WIDTH,
  PINNED_SIDE_NAV_WIDTH,
  SIDE_NAV_TRANSITION_DURATION,
} from '../../constants';

/**
 * Adding 1px to the height due to the border being included in the height
 * when `box-sizing: border-box` is used
 */
const CONTENT_HEADER_HEIGHT = 48 + 1;
const ICON_SIZE = 16;

const getBaseContentStyles = (theme: Theme) =>
  [
    `bg-[${color[theme].background[Variant.Secondary][InteractionState.Default]}]`,
    'flex-1',
    'overflow-x-hidden',
    'overflow-y-auto',
    'min-h-0',
    `max-w-[${PINNED_SIDE_NAV_WIDTH}px]`,
    `transition-[max-width]`,
    `duration-[${SIDE_NAV_TRANSITION_DURATION}ms]`,
    'ease-in-out',
  ].join(' ');

const collapsedContentStyles = `max-w-[${COLLAPSED_SIDE_NAV_WIDTH}px]`;

export const getContentStyles = ({
  className,
  shouldRenderExpanded,
  theme,
}: {
  className?: string;
  shouldRenderExpanded: boolean;
  theme: Theme;
}) =>
  cn(
    getBaseContentStyles(theme),
    {
      [collapsedContentStyles]: !shouldRenderExpanded,
    },
    className,
  );

const baseContentHeaderStyles = [
  'overflow-hidden',
  `h-[${CONTENT_HEADER_HEIGHT}px]`,
  'border-b',
  'border-b-transparent',
  `px-[${spacing[400]}px]`,
  'py-0',
  'grid',
  'items-center',
  `gap-[${spacing[200]}px]`,
  `transition-[grid-template-columns,border-bottom-color]`,
  `duration-[${SIDE_NAV_TRANSITION_DURATION}ms]`,
  'ease-in-out',
  `grid-cols-[${ICON_SIZE}px_auto]`,
].join(' ');

const getCollapsedContentHeaderStyles = (theme: Theme) =>
  [
    `grid-cols-[${ICON_SIZE}px_0fr]`,
    `border-b-[${color[theme].border[Variant.Secondary][InteractionState.Default]}]`,
  ].join(' ');

export const getContentHeaderStyles = ({
  shouldRenderExpanded,
  theme,
}: {
  shouldRenderExpanded: boolean;
  theme: Theme;
}) =>
  cn(baseContentHeaderStyles, {
    [getCollapsedContentHeaderStyles(theme)]: !shouldRenderExpanded,
  });

export const getIconFill = (theme: Theme) =>
  color[theme].icon[Variant.Primary][InteractionState.Default];

const getBaseOverlineStyles = (theme: Theme) =>
  [
    'w-[200px]',
    `text-[${color[theme].text[Variant.Secondary][InteractionState.Default]}]`,
    'opacity-100',
    `transition-opacity`,
    `duration-[${SIDE_NAV_TRANSITION_DURATION}ms]`,
    'ease-in-out',
  ].join(' ');

const hiddenOverlineStyles = 'opacity-0';

export const getOverlineStyles = ({
  shouldRender,
  theme,
}: {
  shouldRender: boolean;
  theme: Theme;
}) =>
  cn(getBaseOverlineStyles(theme), {
    [hiddenOverlineStyles]: !shouldRender,
  });
