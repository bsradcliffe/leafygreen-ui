import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  BaseFontSize,
  borderRadius,
  color,
  focusRing,
  fontFamilies,
  fontWeights,
  InteractionState,
  spacing,
  transitionDuration,
  typeScales,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

/**
 * when `InputBar` is used in a drawer (or other context that restricts
 * the width of the container), we need to set a minimum width so that
 * `react-textarea-autosize` can properly calculate the initial height
 * of the textarea element.
 */
const TEXT_AREA_MIN_WIDTH = 150;

const baseFormStyles = 'w-full';

export const getFormStyles = (className?: string) =>
  cn(baseFormStyles, className);

export const outerFocusContainerStyles = 'relative';

const baseFocusContainerStyles = `rounded-[${borderRadius[200]}px]`;

const focusStyles = [
  `shadow-[${focusRing.light.input}]`,
  'border-transparent',
  `transition-[border-color,box-shadow]`,
  `duration-[${transitionDuration.default}ms]`,
  'ease-in-out',
].join(' ');

export const getInnerFocusContainerStyles = ({
  disabled,
  isFocused,
}: {
  disabled: boolean;
  isFocused: boolean;
}) =>
  cn(baseFocusContainerStyles, {
    [focusStyles]: !disabled && isFocused,
  });

const getBaseContentWrapperStyles = ({ theme }: { theme: Theme }) =>
  [
    'overflow-hidden',
    'w-full',
    'flex',
    'flex-col',
    'relative',
    `rounded-[${borderRadius[200]}px]`,
    `border`,
    `border-[${palette.gray.base}]`,
    `bg-[${color[theme].background[Variant.Primary][InteractionState.Default]}]`,
    `text-[${color[theme].text[Variant.Primary][InteractionState.Default]}]`,

    'disabled:cursor-not-allowed',
    'disabled:hover:shadow-none',
    'disabled:active:shadow-none',
  ].join(' ');

const getDisabledThemeStyles = (theme: Theme) =>
  [
    `bg-[${color[theme].background[Variant.Disabled][InteractionState.Default]}]`,
    `border-[${color[theme].border[Variant.Disabled][InteractionState.Default]}]`,
    `text-[${color[theme].text[Variant.Disabled][InteractionState.Default]}]`,
  ].join(' ');

const contentWrapperFocusStyles = 'border-transparent';

export const getContentWrapperStyles = ({
  disabled,
  isFocused,
  theme,
}: {
  disabled: boolean;
  isFocused: boolean;
  theme: Theme;
}) =>
  cn(getBaseContentWrapperStyles({ theme }), {
    [getDisabledThemeStyles(theme)]: disabled,
    [contentWrapperFocusStyles]: isFocused,
  });

const getBaseTextAreaStyles = ({ theme }: { theme: Theme }) =>
  [
    `min-w-[${TEXT_AREA_MIN_WIDTH}px]`,
    `text-[${BaseFontSize.Body1}px]`,
    `font-[${fontFamilies.default}]`,
    `font-[${fontWeights.regular}]`,
    `p-[${spacing[200]}px]`,
    'outline-none',
    'border-none',
    `transition-[border-color,box-shadow]`,
    `duration-[${transitionDuration.default}ms]`,
    'ease-in-out',
    'overflow-y-scroll',
    'resize-none',
    '[box-sizing:content-box]',
    `leading-[${typeScales.body1.lineHeight}px]`,
    'bg-inherit',
    'text-inherit',
    'm-0',
    `bg-[${color[theme].background[Variant.Primary][InteractionState.Default]}]`,
    `text-[${color[theme].text[Variant.Primary][InteractionState.Default]}]`,

    `disabled:bg-[${color[theme].background[Variant.Disabled][InteractionState.Default]}]`,
    `disabled:border-[${color[theme].border[Variant.Disabled][InteractionState.Default]}]`,
    `disabled:text-[${color[theme].text[Variant.Disabled][InteractionState.Default]}]`,
    'disabled:placeholder:text-inherit',
  ].join(' ');

export const getTextAreaStyles = ({
  className,
  theme,
}: {
  className?: string;
  theme: Theme;
}) => cn(getBaseTextAreaStyles({ theme }), className);

export const getActionContainerStyles = ({
  hasAdditionalActions,
}: {
  hasAdditionalActions: boolean;
}) =>
  [
    'flex',
    hasAdditionalActions ? 'justify-between' : 'justify-end',
    `gap-[${spacing[200]}px]`,
    `p-[${spacing[100]}px]`,
  ].join(' ');

export const disclaimerTextStyles = [
  `mt-[${spacing[50]}px]`,
  'text-center',
].join(' ');
