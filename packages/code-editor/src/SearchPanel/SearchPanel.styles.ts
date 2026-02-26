import { Theme } from '@leafygreen-ui/lib';
import {
  BaseFontSize,
  borderRadius,
  boxShadows,
  color,
  InteractionState,
  spacing,
  transitionDuration,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const CONTAINER_MAX_WIDTH = 500;
const SECTION_HEIGHT = 52;
const INPUT_WIDTH = 240;
const INPUT_MIN_WIDTH = 120;

const baseContainerStyle = [
  `rounded-bl-[${borderRadius[150]}px]`,
  `rounded-br-[${borderRadius[150]}px]`,
  'w-full',
  `max-w-[${CONTAINER_MAX_WIDTH}px]`,
  'relative',
  'grid',
  `grid-rows-[${SECTION_HEIGHT}px_0fr]`,
  `transition-[grid-template-rows] duration-[${transitionDuration.slower}ms] ease-in-out`,
  'z-[1]',
  // ::after pseudo-element for shadow with clipped right edge
  "after:content-['']",
  'after:absolute',
  'after:top-0',
  'after:left-0',
  'after:w-full',
  'after:h-full',
  'after:rounded-[inherit]',
  'after:-z-[1]',
  'after:[clip-path:inset(-20px_0px_-20px_-20px)]',
].join(' ');

const containerThemeStyles: Record<Theme, string> = {
  [Theme.Light]: [
    `bg-[${color[Theme.Light].background[Variant.Secondary][InteractionState.Default]}]`,
    `border-r border-solid border-r-[${color[Theme.Light].border[Variant.Secondary][InteractionState.Default]}]`,
    `after:shadow-[${boxShadows[Theme.Light][1].replace(/, /g, ',_')}]`,
  ].join(' '),
  [Theme.Dark]: [
    `bg-[${color[Theme.Dark].background[Variant.Secondary][InteractionState.Default]}]`,
    `border-r border-solid border-r-[${color[Theme.Dark].border[Variant.Secondary][InteractionState.Default]}]`,
    'after:shadow-none',
  ].join(' '),
};

const openContainerStyle = `grid-rows-[${SECTION_HEIGHT}px_1fr]`;

export const getContainerStyles = ({
  theme,
  isOpen,
  baseFontSize,
  hasPanel,
}: {
  theme: Theme;
  isOpen: boolean;
  baseFontSize: BaseFontSize;
  hasPanel: boolean;
}) =>
  cn(
    baseContainerStyle,
    `text-[${baseFontSize}px]`,
    containerThemeStyles[theme],
    isOpen && openContainerStyle,
    !hasPanel && `rounded-tr-[${borderRadius[300]}px]`,
  );

export const findSectionStyles = [
  'flex',
  'items-center',
  `p-[${spacing[200]}px]`,
].join(' ');

export const replaceSectionStyles = 'min-h-0 overflow-hidden';

/**
 * Inner section used for padding and border so that the outer section can
 * fully close to 0px when set to 0fr.
 */
const replaceInnerSectionThemeStyles: Record<Theme, string> = {
  [Theme.Light]: `border-t-[${color[Theme.Light].border[Variant.Secondary][InteractionState.Default]}]`,
  [Theme.Dark]: `border-t-[${color[Theme.Dark].border[Variant.Secondary][InteractionState.Default]}]`,
};

export const getReplaceInnerSectionStyles = (theme: Theme) =>
  [
    'flex',
    'items-center',
    `pt-[${spacing[200]}px] pr-[${spacing[200]}px] pb-[${spacing[200]}px] pl-[${spacing[1000]}px]`,
    'border-t border-solid',
    replaceInnerSectionThemeStyles[theme],
  ].join(' ');

export const toggleButtonStyles = `mr-[${spacing[100]}px]`;

const toggleIconStyle = [
  '-rotate-180',
  `transition-transform duration-[${transitionDuration.slower}ms] ease-in-out`,
].join(' ');

const openToggleIconStyle = 'rotate-0';

export const getToggleIconStyles = (isOpen: boolean) =>
  cn(toggleIconStyle, isOpen && openToggleIconStyle);

export const findInputContainerStyles = [
  'relative',
  `flex-[1_1_${INPUT_WIDTH}px]`,
  `min-w-[${INPUT_MIN_WIDTH}px]`,
  `max-w-[${INPUT_WIDTH}px]`,
  `mr-[${spacing[100]}px]`,
  `[&_input]:pr-[${spacing[1200]}px]`,
].join(' ');

export const closeButtonStyles = 'ml-auto';

export const findOptionsContainerStyles = [
  'absolute',
  `right-[${spacing[100]}px]`,
  `top-[${spacing[100]}px]`,
  'flex',
  'items-center',
].join(' ');

export const replaceInputContainerStyles = [
  'relative',
  `flex-[1_1_${INPUT_WIDTH}px]`,
  'min-w-[100px]',
  `max-w-[${INPUT_WIDTH}px]`,
  'w-full',
].join(' ');

export const replaceButtonStyles = `ml-[${spacing[100]}px]`;
