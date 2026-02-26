import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  color,
  InteractionState,
  Variant as ColorVariant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

/**
 * Try to fit all the content on one line (until it hits max-width)
 * Overrides default behavior, which is to set width to size of the trigger.
 */
export const tooltipPopoverStyles = 'w-max';

/**
 * borderRadius[400] = 16, borderRadius[150] = 6
 * spacing[300] = 12, spacing[400] = 16
 * spacing[100] = 4, spacing[150] = 6
 * TOOLTIP_MAX_WIDTH = 256
 * palette.black = #001E2B
 * transparentize(0.85, palette.black) = rgba(0, 30, 43, 0.15)
 */

const baseStyles = [
  'flex',
  'items-center',
  'rounded-[16px]',
  'py-[12px]',
  'px-[16px]',
  'shadow-[0px_2px_4px_-1px_rgba(0,30,43,0.15)]',
  'cursor-default',
  'w-fit',
  'max-w-[256px]',
].join(' ');

const themeStyles: Record<Theme, string> = {
  [Theme.Light]: `bg-[${palette.black}] text-[${palette.gray.light1}]`,
  [Theme.Dark]: `bg-[${palette.gray.light2}] text-[${palette.black}]`,
};

/**
 * minSize = NOTCH_WIDTH + 2 * borderRadius[400] = 26 + 32 = 58
 */
const minHeightStyle = 'min-h-[58px]';

const compactStyles = 'rounded-[6px] py-[4px] px-[6px]';

export const getTooltipStyles = ({
  className,
  isCompact,
  isLeftOrRightAligned,
  theme,
}: {
  className?: string;
  isCompact: boolean;
  isLeftOrRightAligned: boolean;
  theme: Theme;
}) =>
  cn(
    baseStyles,
    themeStyles[theme],
    {
      [compactStyles]: isCompact,
      [minHeightStyle]: !isCompact && isLeftOrRightAligned,
    },
    className,
  );

export const textStyles = [
  'w-full',
  '[overflow-wrap:anywhere]',
  'normal-case',
  'text-inherit',
].join(' ');

export const getNotchFill = (theme: Theme) =>
  color[theme].background[ColorVariant.InversePrimary][
    InteractionState.Default
  ];

export const baseTriggerStyles = 'relative';

export const getTriggerStyles = (className?: string) =>
  cn(baseTriggerStyles, className);
