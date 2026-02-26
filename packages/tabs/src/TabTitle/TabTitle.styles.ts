import { Theme } from '@leafygreen-ui/lib';
import { BaseFontSize } from '@leafygreen-ui/tokens';
import { bodyTypeScaleStyles } from '@leafygreen-ui/typography';

import { cn } from '../cn';
import { Size } from '../Tabs';

const BODY_1_HEIGHT = 44;
const BODY_2_HEIGHT = 52;
const MAX_WIDTH = 300;
const SMALL_HEIGHT = 32;

/**
 * Base styles for the tab title element.
 *
 * Includes pseudo-element setup for:
 *  - `::before` — invisible bold-width text to prevent layout shift on hover
 *  - `::after` — bottom indicator bar with animated transform/color
 */
const baseStyles = [
  // Layout & box model
  "font-[family-name:'Euclid_Circular_A',Helvetica_Neue,Helvetica,Arial,sans-serif]",
  'font-medium',
  'relative',
  'inline-flex',
  'flex-col',
  'items-start',
  'justify-center',
  `max-w-[${MAX_WIDTH}px]`,
  'w-min',
  'py-[12px]',
  'px-[16px]',
  'bg-transparent',
  'border-0',
  'm-0',
  'no-underline',
  'transition-[color,font-weight]',
  'duration-[150ms]',
  'ease-in-out',

  // Focus (not disabled)
  'focus:[&:not(:disabled)]:outline-none',
  'focus:[&:not(:disabled)]:font-semibold',

  // ::before pseudo-element — bold-width reservation to prevent layout shift
  'before:content-[attr(data-text)]',
  'before:h-0',
  'before:font-semibold',
  'before:invisible',
  'before:overflow-hidden',
  'before:select-none',
  'before:pointer-events-none',

  // ::after pseudo-element — bottom indicator bar
  "after:content-['']",
  'after:absolute',
  'after:left-0',
  'after:right-0',
  'after:bottom-0',
  'after:h-[4px]',
  'after:rounded-t-[4px]',
  'after:transition-[background-color,transform]',
  'after:duration-[150ms]',
  'after:ease-in-out',
  'after:bg-transparent',
  'after:scale-x-[0.8]',

  // ::after hover / active transforms
  'hover:after:scale-x-[0.95]',
  'active:after:scale-x-100',
].join(' ');

export const defaultSizeHeightStyles: Record<BaseFontSize, string> = {
  [BaseFontSize.Body1]: `h-[${BODY_1_HEIGHT}px]`,
  [BaseFontSize.Body2]: `h-[${BODY_2_HEIGHT}px]`,
};

interface ListTitleMode {
  base: string;
  hover: string;
  focus: string;
  selected: string;
  disabled: string;
}

const modeStyles: Record<Theme, ListTitleMode> = {
  [Theme.Light]: {
    // gray.dark1
    base: 'text-[#5C6C75]',
    hover: [
      'hover:cursor-pointer',
      // gray.dark3
      'hover:text-[#1C2D38]',
      // gray.light2
      'hover:after:bg-[#E8EDEB]',
    ].join(' '),
    focus: [
      // blue.base
      'focus-visible:text-[#016BF8]',
      // blue.light1
      'focus-visible:after:bg-[#0498EC]',
    ].join(' '),
    selected: [
      // green.dark2
      'text-[#00684A]',
      'font-semibold',
      'after:scale-x-100',
      // green.dark1
      'after:bg-[#00A35C]',
      'hover:text-[#00684A]',
      'hover:font-semibold',
      'hover:after:scale-x-100',
      'hover:after:bg-[#00A35C]',
    ].join(' '),
    // gray.light1
    disabled: 'cursor-not-allowed text-[#C1C7C6]',
  },
  [Theme.Dark]: {
    // gray.light1
    base: 'text-[#C1C7C6]',
    hover: [
      'hover:cursor-pointer',
      // white
      'hover:text-[#FFFFFF]',
      // gray.dark2
      'hover:after:bg-[#3D4F58]',
    ].join(' '),
    focus: [
      // blue.light1
      'focus-visible:text-[#0498EC]',
      // blue.light1
      'focus-visible:after:bg-[#0498EC]',
    ].join(' '),
    selected: [
      // gray.light2
      'text-[#E8EDEB]',
      'font-semibold',
      'after:scale-x-100',
      // green.dark1
      'after:bg-[#00A35C]',
      'hover:text-[#E8EDEB]',
      'hover:font-semibold',
      'hover:after:scale-x-100',
      'hover:after:bg-[#00A35C]',
    ].join(' '),
    // gray.dark2
    disabled: 'cursor-not-allowed text-[#3D4F58]',
  },
};

const sizeStyles: Record<Size, string> = {
  small: [
    'py-[6px]',
    'px-[8px]',
    'text-[13px]',
    'leading-[20px]',
    `h-[${SMALL_HEIGHT}px]`,
    'after:h-[2px]',
  ].join(' '),
  default: '',
};

export const getStyles = ({
  baseFontSize,
  className,
  disabled,
  isSelected,
  size,
  theme,
}: {
  baseFontSize: BaseFontSize;
  className?: string;
  disabled: boolean;
  isSelected: boolean;
  size: Size;
  theme: Theme;
}) =>
  cn(
    baseStyles,
    bodyTypeScaleStyles[baseFontSize],
    defaultSizeHeightStyles[baseFontSize],
    modeStyles[theme].base,
    sizeStyles[size],
    !disabled && isSelected && modeStyles[theme].selected,
    !disabled && !isSelected && modeStyles[theme].hover,
    disabled && modeStyles[theme].disabled,
    modeStyles[theme].focus,
    className,
  );

export const childrenContainerStyles = [
  'w-full',
  'whitespace-nowrap',
  'overflow-hidden',
  'text-ellipsis',
  // Cannot use flexbox here to center children because it breaks text-overflow: ellipsis
  '[&>svg]:align-text-bottom',
  '[&>svg]:mr-[4px]',
].join(' ');
