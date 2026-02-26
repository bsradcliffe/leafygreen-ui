import { palette } from '@leafygreen-ui/palette';

import { cn } from '../cn';
import { Size } from '../types';

export const radioBoxSizes: { [K in Size]: string } = {
  [Size.Default]: 'w-[169px]',
  [Size.Compact]: 'px-[12px]',
  [Size.Full]: 'flex-1',
};

export const inputStyles = 'opacity-0 absolute pointer-events-none peer';

interface StateForStyles {
  checked: boolean;
  disabled: boolean;
  size: Size;
  darkMode: boolean;
}

export const getRadioDisplayStyles = ({
  checked,
  disabled,
  size,
  darkMode,
}: StateForStyles) => {
  const baseStyles = [
    'flex',
    'items-center',
    'justify-center',
    'py-[16px]',
    'px-[24px]',
    'text-[13px]',
    'font-semibold',
    'text-center',
    'break-words',
    'rounded-[6px]',
    'border',
    `border-[${palette.gray.base}]`,
    'border-solid',
    'cursor-pointer',
    'pointer-events-auto',
    'transition-[border-color,box-shadow]',
    'duration-[150ms]',
    'ease-in-out',
    darkMode ? `bg-[${palette.gray.dark4}]` : `bg-[${palette.white}]`,
    darkMode ? `text-[${palette.gray.light2}]` : `text-[${palette.black}]`,
  ].join(' ');

  // Hover & active states (only when not checked and not disabled)
  const hoverActiveStyles = darkMode
    ? `hover:shadow-[0_0_0_3px_${palette.gray.dark2}] active:shadow-[0_0_0_3px_${palette.gray.dark2}]`
    : `hover:shadow-[0_0_0_3px_${palette.gray.light2}] active:shadow-[0_0_0_3px_${palette.gray.light2}]`;

  // Focus-visible styles (via peer modifier from sibling input)
  const focusVisibleStyles = darkMode
    ? `peer-focus-visible:border-[${palette.gray.base}] peer-focus-visible:shadow-[0_0_0_2px_${palette.black},0_0_0_4px_${palette.blue.light1}]`
    : `peer-focus-visible:border-[${palette.gray.base}] peer-focus-visible:shadow-[0_0_0_2px_${palette.white},0_0_0_4px_${palette.blue.base}]`;

  const checkedStyles = [
    'border-transparent',
    `shadow-[0_0_0_3px_${palette.green.dark1}]`,
    `hover:shadow-[0_0_0_3px_${palette.green.dark1}]`,
    `active:shadow-[0_0_0_3px_${palette.green.dark1}]`,
  ].join(' ');

  const disabledStyles = [
    darkMode ? `text-[${palette.gray.dark1}]` : `text-[${palette.gray.base}]`,
    darkMode ? `bg-[${palette.gray.dark3}]` : `bg-[${palette.gray.light2}]`,
    'font-normal',
    darkMode ? `border-[${palette.gray.dark2}]` : `border-[${palette.gray.light1}]`,
    'cursor-not-allowed',
    'hover:shadow-none',
    'active:shadow-none',
  ].join(' ');

  return cn(
    baseStyles,
    !checked && !disabled && hoverActiveStyles,
    !disabled && focusVisibleStyles,
    { [checkedStyles]: checked },
    { [disabledStyles]: disabled },
    radioBoxSizes[size],
  );
};

export const radioWrapper = [
  `font-[${`'Euclid_Circular_A','Helvetica_Neue',Helvetica,Arial,sans-serif`}]`,
  'flex',
  'relative',
  '[&:not(:last-of-type)]:mr-[12px]',
].join(' ');
