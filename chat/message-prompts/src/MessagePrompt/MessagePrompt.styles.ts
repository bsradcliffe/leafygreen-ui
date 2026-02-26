import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  focusRing,
  hoverRing,
  spacing,
  transitionDuration,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const baseStyles = [
  'block',
  `py-[${spacing[200]}px]`,
  `px-[${spacing[300]}px]`,
  'border',
  `border-[${palette.green.dark2}]`,
  'rounded-[12px]',
  `transition-all`,
  `duration-[${transitionDuration.slower}ms]`,
  'ease-[ease]',
  'shadow-none',
  'outline-none',
  'text-left',
  "[&[aria-disabled='false'][aria-pressed='false']]:cursor-pointer",
].join(' ');

const themeStyles: Record<Theme, string> = {
  [Theme.Dark]: [
    `bg-[${palette.black}]`,
    `text-[${palette.gray.light2}]`,
    `[&[aria-pressed='false'][aria-disabled='false']:hover]:shadow-[${hoverRing.dark.green}]`,
    `[&[aria-pressed='false'][aria-disabled='false']:focus-visible]:shadow-[${focusRing.dark.default}]`,
  ].join(' '),
  [Theme.Light]: [
    `bg-[${palette.white}]`,
    `text-[${palette.gray.dark3}]`,
    `[&[aria-pressed='false'][aria-disabled='false']:hover]:shadow-[${hoverRing.light.green}]`,
    `[&[aria-pressed='false'][aria-disabled='false']:focus-visible]:shadow-[${focusRing.light.default}]`,
  ].join(' '),
};

const disabledStyles: Record<Theme, string> = {
  [Theme.Dark]: [
    `border-[${palette.gray.dark1}]`,
    `text-[${palette.gray.dark1}]`,
    `bg-[${palette.gray.dark3}]`,
  ].join(' '),
  [Theme.Light]: [
    `border-[${palette.gray.base}]`,
    `text-[${palette.gray.base}]`,
  ].join(' '),
};

const selectedStyles = `shadow-[0_0_0_2px_${palette.green.dark1}]`;

export const getButtonStyles = ({
  className,
  disabled,
  selected,
  theme,
}: {
  className?: string;
  disabled?: boolean;
  selected?: boolean;
  theme: Theme;
}) =>
  cn(
    baseStyles,
    themeStyles[theme],
    {
      [disabledStyles[theme]]: disabled,
      [selectedStyles]: selected,
    },
    className,
  );
