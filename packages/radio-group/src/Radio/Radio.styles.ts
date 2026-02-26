import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';

import { cn } from '../cn';
import { Size } from '../types';

export const containerStyle = [
  'grid',
  `grid-cols-[var(--radio-col-size)_auto]`,
  `[grid-template-areas:'label_label''.description']`,
  'gap-x-[8px]',
  'gap-y-0',
].join(' ');

export const containerSizeStyle: Omit<Record<Size, string>, 'xsmall'> = {
  [Size.Small]: '[--radio-col-size:14px]',
  [Size.Default]: '[--radio-col-size:20px]',
};

export const labelBaseStyle = [
  '[grid-area:label]',
  'flex',
  'leading-[20px]',
  'cursor-pointer',
  'items-start',
  'font-semibold',
].join(' ');

export const disabledStyle = 'cursor-not-allowed';

export const labelWeightStyle = 'font-normal';

export const inputBaseStyle = 'peer h-0 w-0 opacity-0 m-0';

export const descriptionStyles = '[grid-area:description]';

/** Styles for the radio box wrapper (the relative container around the radio circle) */
export const radioBoxBaseStyle = 'relative shrink-0';

export const radioBoxSizeStyles: Omit<Record<Size, string>, 'xsmall'> = {
  [Size.Small]: 'h-[14px] w-[14px] mt-[3px] mr-[8px]',
  [Size.Default]: 'h-[20px] w-[20px] mr-[8px]',
};

/** Base styles for the visual radio circle (inputDisplay) */
const inputDisplayBase = [
  'absolute',
  'inset-0',
  'inline-flex',
  'items-center',
  'justify-center',
  'shrink-0',
  'rounded-full',
  'border-solid',

  // ::before pseudo-element
  "before:content-['']",
  'before:absolute',
  'before:rounded-full',

  // ::after pseudo-element (the inner dot)
  "after:content-['']",
  'after:bg-white',
  'after:rounded-full',
  'after:scale-0',
].join(' ');

const inputDisplaySizeStyles: Omit<Record<Size, string>, 'xsmall'> = {
  [Size.Small]: [
    'border-[2px]',
    'after:w-[6px]',
    'after:h-[6px]',
    'after:transition-[transform,border-color]',
    'after:duration-[150ms]',
    'after:[transition-timing-function:cubic-bezier(0.16,1.54,0,1.31),ease-in-out]',
  ].join(' '),
  [Size.Default]: [
    'border-[3px]',
    'after:w-[8px]',
    'after:h-[8px]',
    'after:transition-[transform,border-color]',
    'after:duration-[150ms]',
    'after:[transition-timing-function:cubic-bezier(0.175,0.885,0.32,1.275),ease-in-out]',
  ].join(' '),
};

interface InputDisplayState {
  theme: Theme;
  size: Size.Small | Size.Default;
  checked: boolean;
  disabled: boolean;
}

/** Get class names for the visual radio circle based on state */
export function getInputDisplayStyles({
  theme,
  size,
  checked,
  disabled,
}: InputDisplayState): string {
  const isLight = theme === Theme.Light;

  // Default (unchecked, enabled) border and background
  const defaultBorderColor = isLight
    ? `border-[${palette.gray.dark2}]`
    : `border-[${palette.gray.base}]`;
  const defaultBgColor = isLight
    ? `bg-[${palette.white}]`
    : `bg-[${palette.black}]`;

  // Checked + enabled
  const checkedStyles = isLight
    ? `bg-[${palette.blue.base}] border-[${palette.blue.base}] after:scale-100`
    : `bg-[${palette.blue.light1}] border-[${palette.blue.light1}] after:scale-100`;

  // Disabled + unchecked
  const disabledUncheckedStyles = isLight
    ? `border-[${palette.gray.light2}] bg-[${palette.gray.light3}] after:scale-100 after:bg-[${palette.gray.light3}] after:shadow-none`
    : `border-[${palette.gray.dark2}] bg-[${palette.gray.dark3}] after:scale-100 after:bg-[${palette.gray.dark3}] after:shadow-none`;

  // Checked + disabled
  const checkedDisabledStyles = isLight
    ? `bg-[${palette.gray.light2}] border-[${palette.gray.light2}] after:scale-100 after:bg-[${palette.gray.light3}] after:shadow-none`
    : `border-[${palette.gray.dark3}] after:scale-100 after:bg-[${palette.gray.dark2}] after:shadow-none`;

  // Focus-visible ring (applied via peer modifier from the sibling input)
  const focusVisibleStyles = isLight
    ? `peer-focus-visible:shadow-[0_0_0_2px_${palette.white},0_0_0_4px_${palette.blue.base}]`
    : `peer-focus-visible:shadow-[0_0_0_2px_${palette.black},0_0_0_4px_${palette.blue.light1}]`;

  // Hover ring (applied via group-hover from the wrapper)
  const hoverStyles = !disabled
    ? isLight
      ? `group-hover:shadow-[0_0_0_3px_${palette.gray.light2}]`
      : `group-hover:shadow-[0_0_0_3px_${palette.gray.dark2}]`
    : '';

  let stateStyles: string;

  if (checked && disabled) {
    stateStyles = checkedDisabledStyles;
  } else if (checked) {
    stateStyles = checkedStyles;
  } else if (disabled) {
    stateStyles = disabledUncheckedStyles;
  } else {
    stateStyles = cn(defaultBorderColor, defaultBgColor);
  }

  return cn(
    inputDisplayBase,
    inputDisplaySizeStyles[size],
    stateStyles,
    !disabled && focusVisibleStyles,
    hoverStyles,
  );
}
