import { Theme } from '@leafygreen-ui/lib';
import {
  borderRadius,
  color,
  InteractionState,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../../cn';

const TOOL_CARD_MIN_WIDTH = 200;

export const getBaseContainerStyles = ({
  isErrorState,
  theme,
}: {
  isErrorState: boolean;
  theme: Theme;
}) =>
  [
    'overflow-hidden',
    `min-w-[${TOOL_CARD_MIN_WIDTH}px]`,
    'w-full',
    'border',
    `border-[${color[theme].border[isErrorState ? Variant.OnError : Variant.Secondary][InteractionState.Default]}]`,
    `rounded-[${borderRadius[200]}px]`,
    'flex',
    'flex-col',
  ].join(' ');

export const getContainerStyles = ({
  className,
  isErrorState,
  theme,
}: {
  className?: string;
  isErrorState: boolean;
  theme: Theme;
}) => cn(getBaseContainerStyles({ isErrorState, theme }), className);

export const getContentContainerStyles = ({
  isErrorState,
  shouldRenderBorderTop,
  theme,
}: {
  isErrorState: boolean;
  shouldRenderBorderTop: boolean;
  theme: Theme;
}) =>
  shouldRenderBorderTop
    ? `border-t border-t-[${color[theme].border[isErrorState ? Variant.OnError : Variant.Secondary][InteractionState.Default]}]`
    : '';

export const actionsContainerStyles = [
  'w-full',
  `p-[${spacing[300]}px]`,
  'flex',
  `gap-[${spacing[200]}px]`,
].join(' ');
