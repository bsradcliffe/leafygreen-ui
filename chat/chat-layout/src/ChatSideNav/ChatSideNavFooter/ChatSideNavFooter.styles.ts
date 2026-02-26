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

const BUTTON_HEIGHT = 48;
/**
 * Adding 1px to the height due to the border being included in the height
 * when `box-sizing: border-box` is used
 */
const FOOTER_HEIGHT = 48 + 1;

const getBaseFooterStyles = (theme: Theme) =>
  [
    'overflow-hidden',
    `bg-[${color[theme].background[Variant.Secondary][InteractionState.Default]}]`,
    'w-full',
    `max-w-[${PINNED_SIDE_NAV_WIDTH}px]`,
    `h-[${FOOTER_HEIGHT}px]`,
    'border-t',
    `border-t-[${color[theme].border[Variant.Secondary][InteractionState.Default]}]`,
    'flex',
    'justify-end',
    'items-center',
    `transition-[max-width]`,
    `duration-[${SIDE_NAV_TRANSITION_DURATION}ms]`,
    'ease-in-out',
  ].join(' ');

const collapsedFooterStyles = `max-w-[${COLLAPSED_SIDE_NAV_WIDTH}px]`;

export const getFooterStyles = ({
  className,
  shouldRenderExpanded,
  theme,
}: {
  className?: string;
  shouldRenderExpanded: boolean;
  theme: Theme;
}) =>
  cn(
    getBaseFooterStyles(theme),
    {
      [collapsedFooterStyles]: !shouldRenderExpanded,
    },
    className,
  );

export const getButtonStyles = (theme: Theme) =>
  [
    'rounded-none',
    'border-none',
    `h-[${BUTTON_HEIGHT}px]`,
    'w-full',
    `bg-[${color[theme].background[Variant.Secondary][InteractionState.Default]}]`,

    'hover:shadow-none',
    'active:shadow-none',
    `hover:bg-[${color[theme].background[Variant.Secondary][InteractionState.Hover]}]`,
    `active:bg-[${color[theme].background[Variant.Secondary][InteractionState.Hover]}]`,

    'focus-visible:shadow-none',
    `focus-visible:bg-[${color[theme].background[Variant.Secondary][InteractionState.Focus]}]`,
    `focus-visible:text-[${color[theme].text[Variant.Secondary][InteractionState.Focus]}]`,
    `[&:focus-visible_svg]:text-[${color[theme].text[Variant.Secondary][InteractionState.Focus]}]`,

    // Override the properties in ButtonContent
    `[&_div:nth-child(2)]:p-[${spacing[400]}px]`,
    '[&_div:nth-child(2)]:justify-end',
  ].join(' ');
