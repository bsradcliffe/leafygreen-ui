import { Theme } from '@leafygreen-ui/lib';
import {
  borderRadius,
  boxShadows,
  color,
  fontFamilies,
  InteractionState,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';

const MESSAGE_LINE_HEIGHT = 20;

export const getTooltipStyles = (theme: Theme) =>
  [
    `bg-[${color[theme].background[Variant.Secondary][InteractionState.Default]}]`,
    `rounded-[${borderRadius[200]}px]`,
    'border border-solid',
    `border-[${color[theme].border[Variant.Secondary][InteractionState.Default]}]`,
    theme === Theme.Light
      ? `shadow-[${boxShadows[Theme.Light][1].replace(/, /g, ',_')}]`
      : 'shadow-none',
    `leading-[${MESSAGE_LINE_HEIGHT}px]`,
    'w-fit',
  ].join(' ');

export const tooltipMessageContainerStyles = `pt-[${spacing[100]}px] px-[${spacing[200]}px] pb-0`;

export const getTooltipMessageStyles = (
  theme: Theme,
  baseFontSize: number,
) =>
  [
    `mb-[${spacing[100]}px]`,
    'mt-0 mx-0',
    `font-[${fontFamilies.code}]`,
    `text-[${baseFontSize}px]`,
    `text-[${color[theme].text[Variant.Primary][InteractionState.Default]}]`,
  ].join(' ');

export const getTooltipLinksContainerStyles = (theme: Theme) =>
  [
    'border-t border-solid',
    `border-[${color[theme].border[Variant.Secondary][InteractionState.Default]}]`,
    `py-[${spacing[100]}px] px-[${spacing[200]}px]`,
  ].join(' ');

export const tooltipLinksListStyles = 'list-none m-0 p-0';

export const tooltipLinksListItemStyles = `inline-block mr-[${spacing[200]}px]`;
