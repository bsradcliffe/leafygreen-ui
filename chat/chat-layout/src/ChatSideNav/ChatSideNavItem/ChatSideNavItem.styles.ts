import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  borderRadius,
  color,
  fontFamilies,
  fontWeights,
  InteractionState,
  spacing,
  transitionDuration,
  typeScales,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../../cn';
import {
  PINNED_SIDE_NAV_WIDTH,
  SIDE_NAV_TRANSITION_DURATION,
} from '../../constants';

const CHAT_SIDE_NAV_ITEM_HEIGHT = 32;
const WEDGE_HEIGHT_BOUND = 6;
const WEDGE_WIDTH = 4;

const getBaseStyles = (theme: Theme) =>
  [
    // Layout
    'relative',
    `w-[${PINNED_SIDE_NAV_WIDTH}px]`,
    `min-h-[${CHAT_SIDE_NAV_ITEM_HEIGHT}px]`,
    `py-[${spacing[150]}px]`,
    `px-[${spacing[400]}px]`,
    'flex',
    'items-center',

    // Typography
    `font-[${fontFamilies.default}]`,
    `font-[${fontWeights.regular}]`,
    `text-[${typeScales.body1.fontSize}px]`,
    `leading-[${typeScales.body1.lineHeight}px]`,
    'text-left',
    'no-underline',
    `text-[${color[theme].text[Variant.Primary][InteractionState.Default]}]`,

    // Stateful transitions
    `transition-[background-color,opacity]`,
    `duration-[${transitionDuration.faster}ms,${SIDE_NAV_TRANSITION_DURATION}ms]`,
    'ease-in-out',

    // &::before
    "before:content-['']",
    'before:absolute',
    'before:bg-transparent',
    'before:left-0',
    `before:top-[${WEDGE_HEIGHT_BOUND}px]`,
    `before:bottom-[${WEDGE_HEIGHT_BOUND}px]`,
    `before:w-[${WEDGE_WIDTH}px]`,
    `before:rounded-[0_${borderRadius[150]}px_${borderRadius[150]}px_0]`,
    `before:transition-transform`,
    `before:duration-[${transitionDuration.default}ms]`,
    'before:ease-in-out',
    'before:scale-y-[0.3]',

    // &:hover
    'hover:no-underline',
    `hover:bg-[${color[theme].background[Variant.Secondary][InteractionState.Hover]}]`,

    // &:focus-visible
    'focus-visible:outline-none',
    'focus-visible:no-underline',
    `focus-visible:bg-[${color[theme].background[Variant.Secondary][InteractionState.Focus]}]`,
    `focus-visible:text-[${color[theme].text[Variant.Primary][InteractionState.Focus]}]`,
    'focus-visible:before:scale-y-100',
    `focus-visible:before:bg-[${color[theme].icon[Variant.Info][InteractionState.Focus]}]`,
  ].join(' ');

const getActiveStyles = (theme: Theme) =>
  [
    'cursor-default',
    `font-[${fontWeights.semiBold}]`,
    'no-underline',
    `text-[${theme === Theme.Light ? palette.green.dark2 : palette.white}]`,

    `bg-[${color[theme].background[Variant.Success][InteractionState.Hover]}]`,
    `hover:bg-[${color[theme].background[Variant.Success][InteractionState.Hover]}]`,

    'before:scale-y-100',
    `before:bg-[${color[theme].icon[Variant.Success][InteractionState.Default]}]`,
  ].join(' ');

const collapsedItemStyles = 'opacity-0';

export const getItemStyles = ({
  active = false,
  className,
  shouldRenderExpanded,
  theme,
}: {
  active?: boolean;
  className?: string;
  shouldRenderExpanded: boolean;
  theme: Theme;
}) =>
  cn(
    getBaseStyles(theme),
    {
      [getActiveStyles(theme)]: active,
      [collapsedItemStyles]: !shouldRenderExpanded,
    },
    className,
  );

export const textOverflowStyles = [
  'overflow-hidden',
  'text-ellipsis',
  'whitespace-nowrap',
  'min-w-0',
  'flex-1',
].join(' ');
