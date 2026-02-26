import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
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

const ASSISTANT_AVATAR_SIZE = 20;
const AVATAR_WRAPPER_HORIZONTAL_PADDING = 14;
/**
 * Adding 1px to the height due to the border being included in the height
 * when `box-sizing: border-box` is used
 */
const HEADER_SUB_CONTAINER_HEIGHT = 48 + 1;

const getBorderBottomStyle = (theme: Theme) =>
  `border-b border-b-[${color[theme].border[Variant.Secondary][InteractionState.Default]}]`;

const getBaseHeaderStyles = (theme: Theme) =>
  [
    'overflow-hidden',
    `bg-[${color[theme].background[Variant.Secondary][InteractionState.Default]}]`,
    'w-full',
    `max-w-[${PINNED_SIDE_NAV_WIDTH}px]`,
    `transition-[max-width]`,
    `duration-[${SIDE_NAV_TRANSITION_DURATION}ms]`,
    'ease-in-out',
    getBorderBottomStyle(theme),
  ].join(' ');

const collapsedHeaderStyles = `max-w-[${COLLAPSED_SIDE_NAV_WIDTH}px]`;

export const getHeaderStyles = ({
  className,
  shouldRenderExpanded,
  theme,
}: {
  className?: string;
  shouldRenderExpanded: boolean;
  theme: Theme;
}) =>
  cn(
    getBaseHeaderStyles(theme),
    {
      [collapsedHeaderStyles]: !shouldRenderExpanded,
    },
    className,
  );

const baseAvatarContainerStyles = [
  `h-[${HEADER_SUB_CONTAINER_HEIGHT}px]`,
  `px-[${AVATAR_WRAPPER_HORIZONTAL_PADDING}px]`,
  'py-0',
  'grid',
  `grid-cols-[${ASSISTANT_AVATAR_SIZE}px_auto]`,
  'items-center',
  `gap-[${spacing[150]}px]`,
  `transition-[grid-template-columns]`,
  `duration-[${SIDE_NAV_TRANSITION_DURATION}ms]`,
  'ease-in-out',
].join(' ');

const collapsedAvatarContainerStyles =
  `grid-cols-[${ASSISTANT_AVATAR_SIZE}px_0fr]`;

export const getAvatarContainerStyles = ({
  addBorderBottom,
  shouldRenderExpanded,
  theme,
}: {
  addBorderBottom: boolean;
  shouldRenderExpanded: boolean;
  theme: Theme;
}) =>
  cn(baseAvatarContainerStyles, {
    [collapsedAvatarContainerStyles]: !shouldRenderExpanded,
    [getBorderBottomStyle(theme)]: addBorderBottom,
  });

const baseAssistantNameStyles = [
  'w-[198px]',
  'opacity-100',
  `transition-opacity`,
  `duration-[${SIDE_NAV_TRANSITION_DURATION}ms]`,
  'ease-in-out',
].join(' ');

const hiddenAssistantNameStyles = 'opacity-0';

export const getAssistantNameStyles = ({
  shouldRender,
}: {
  shouldRender: boolean;
}) =>
  cn(baseAssistantNameStyles, {
    [hiddenAssistantNameStyles]: !shouldRender,
  });

export const getButtonStyles = (theme: Theme) => {
  const textColor = palette.green[theme === Theme.Dark ? 'light2' : 'dark2'];

  return [
    'rounded-none',
    'border-none',
    `h-[${HEADER_SUB_CONTAINER_HEIGHT}px]`,
    // Non-token value used because ButtonContent padding is not customizable
    `py-[${spacing[300]}px]`,
    'px-[9px]',
    'w-full',
    `bg-[${color[theme].background[Variant.Secondary][InteractionState.Default]}]`,
    `text-[${textColor}]`,

    'hover:shadow-none',
    'active:shadow-none',
    `hover:bg-[${color[theme].background[Variant.Secondary][InteractionState.Hover]}]`,
    `active:bg-[${color[theme].background[Variant.Secondary][InteractionState.Hover]}]`,
    `hover:text-[${textColor}]`,
    `active:text-[${textColor}]`,

    'focus-visible:shadow-none',
    `focus-visible:bg-[${color[theme].background[Variant.Secondary][InteractionState.Focus]}]`,
    `focus-visible:text-[${color[theme].text[Variant.Secondary][InteractionState.Focus]}]`,
    `[&:focus-visible_svg]:text-[${color[theme].text[Variant.Secondary][InteractionState.Focus]}]`,

    // Override the justify-content property in ButtonContent
    '[&_div:nth-child(2)]:justify-start',
  ].join(' ');
};

export const buttonChildrenStyles = [
  'grid',
  `grid-cols-[${ASSISTANT_AVATAR_SIZE}px_auto]`,
  'items-center',
  `gap-[${spacing[200]}px]`,
  'text-left',
].join(' ');

const baseButtonTextStyles = [
  'w-[200px]',
  'opacity-100',
  `transition-opacity`,
  `duration-[${SIDE_NAV_TRANSITION_DURATION}ms]`,
  'ease-in-out',
].join(' ');

const hiddenButtonTextStyles = 'opacity-0';

export const getButtonTextStyles = ({
  shouldRender,
}: {
  shouldRender: boolean;
}) =>
  cn(baseButtonTextStyles, {
    [hiddenButtonTextStyles]: !shouldRender,
  });
