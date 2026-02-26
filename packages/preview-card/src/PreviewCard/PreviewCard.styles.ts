import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import {
  BaseFontSize,
  borderRadius,
  color,
  fontWeights,
  InteractionState,
  spacing,
  transitionDuration,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

export const contentWrapperClassName = createUniqueClassName(
  'preview_card-content_wrapper',
);

const BUTTON_HEIGHT = 20;
const GRADIENT_HEIGHT = 38;
export const TRANSITION_DURATION = transitionDuration.slower;

/**
 * Converts a hex color string to an rgba string with the given alpha.
 */
function hexToRgba(hex: string, alpha: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r},${g},${b},${alpha})`;
}

export const getBaseCardStyles = (theme: Theme) =>
  [
    'border',
    'border-solid',
    `border-[${color[theme].border[Variant.Secondary][InteractionState.Default]}]`,
    `bg-[${color[theme].background[Variant.Primary][InteractionState.Default]}]`,
    `rounded-[${borderRadius[200]}px]`,
    'flex',
    'flex-col',
    'items-center',
  ].join(' ');

export const getCardStyles = ({
  className,
  theme,
}: {
  className?: string;
  theme: Theme;
}) => cn(getBaseCardStyles(theme), className);

/**
 * Returns the className and inline style for the content wrapper.
 *
 * The `::after` gradient overlay requires a dynamic `background` based on
 * the theme, which is set via the `--pc-gradient` CSS custom property.
 * The Tailwind class `after:[background:var(--pc-gradient)]` references it.
 */
export const getContentWrapperStyles = ({
  collapsedHeight,
  isOpen,
  theme,
}: {
  collapsedHeight: string;
  isOpen: boolean;
  theme: Theme;
}): { className: string; style: Record<string, string> } => {
  const bgColor =
    color[theme].background[Variant.Primary][InteractionState.Default];
  const bgColorTransparent = hexToRgba(bgColor, 0.1);

  const baseClasses = [
    'relative',
    'overflow-hidden',
    'flex',
    'flex-col',
    'items-start',
    `p-[${spacing[300]}px]`,
    'w-full',

    `transition-[max-height]`,
    `duration-[${TRANSITION_DURATION}ms]`,
    'ease-in-out',

    // ::after pseudo-element for gradient overlay
    "after:content-['']",
    'after:absolute',
    'after:bottom-0',
    'after:left-0',
    'after:right-0',
    `after:h-[${GRADIENT_HEIGHT}px]`,
    'after:[background:var(--pc-gradient)]',
    `after:transition-opacity`,
    `after:duration-[${TRANSITION_DURATION}ms]`,
    'after:ease-in-out',
    'after:pointer-events-none',
  ].join(' ');

  const closedClasses = [
    `max-h-[${collapsedHeight}]`,
    'after:opacity-100',
  ].join(' ');

  const openClasses = ['max-h-[1000px]', 'after:opacity-0'].join(' ');

  return {
    className: cn(
      baseClasses,
      isOpen ? openClasses : closedClasses,
      contentWrapperClassName,
    ),
    style: {
      '--pc-gradient': `linear-gradient(180deg, ${bgColorTransparent} 0%, ${bgColor} 100%)`,
    },
  };
};

const buttonBaseStyles = [
  `h-[${BUTTON_HEIGHT}px]`,
  'bg-transparent',
  'mx-auto',
  `mb-[${spacing[300]}px]`,
  'border-none',
  'shadow-none',
  'p-0',
  `text-[${BaseFontSize.Body1}px]`,
  `font-[${fontWeights.regular}]`,
  'normal-case',

  'hover:bg-transparent',
  'hover:border-none',
  'hover:shadow-none',

  'focus-visible:bg-transparent',
].join(' ');

const buttonIconBase = [
  `[&_svg[role='presentation']]:transition-transform`,
  `[&_svg[role='presentation']]:duration-[${TRANSITION_DURATION}ms]`,
  `[&_svg[role='presentation']]:ease-in-out`,
  `[&_svg[role='presentation']]:rotate-0`,
].join(' ');

const buttonIconOpen = `[&_svg[role='presentation']]:rotate-180`;

export const getButtonStyles = ({
  theme,
  isOpen,
}: {
  theme: Theme;
  isOpen: boolean;
}) =>
  cn(
    buttonBaseStyles,
    `text-[${color[theme].text.primary.default}]`,
    `[&_svg[role='presentation']]:text-[${color[theme].icon.secondary.default}]`,
    buttonIconBase,
    isOpen && buttonIconOpen,
  );
