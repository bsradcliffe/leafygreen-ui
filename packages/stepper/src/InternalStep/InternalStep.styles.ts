import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { spacing } from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import { stepIconClassName } from '../constants';

export const baseStyles = [
  'flex',
  'm-auto',
  'flex-col',
  'items-center',
  `pb-[${spacing[1]}px]`,
  'relative',
  'focus-visible:outline-none',
].join(' ');

export const themeStyles: Record<Theme, string> = {
  [Theme.Dark]: [
    `[&:focus-visible_.${stepIconClassName}]:shadow-[0px_0px_0px_2px_${palette.black},0px_0px_0px_4px_${palette.blue.light1}]`,
  ].join(' '),
  [Theme.Light]: [
    `[&:focus-visible_.${stepIconClassName}]:shadow-[0px_0px_0px_2px_${palette.white},0px_0px_0px_4px_${palette.blue.light1}]`,
  ].join(' '),
};

export const lineStyles = (iconSize: number, darkMode: boolean) =>
  [
    "after:content-['']",
    'after:h-px',
    'after:w-full',
    'after:absolute',
    `after:top-[${iconSize / 2}px]`,
    'after:left-1/2',
    'after:z-0',
    `after:bg-[${darkMode ? palette.gray.light1 : palette.gray.base}]`,
  ].join(' ');

export const completedLineStyles: Record<Theme, string> = {
  [Theme.Dark]: `after:bg-[${palette.green.base}]`,
  [Theme.Light]: `after:bg-[${palette.green.dark1}]`,
};

export const getInternalStepStyles = ({
  shouldDisplayLine,
  isCompleted,
  iconSize,
  darkMode,
  theme,
  className,
}: {
  shouldDisplayLine: boolean;
  isCompleted: boolean;
  iconSize: number;
  darkMode: boolean;
  theme: Theme;
  className?: string;
}) =>
  cn(
    baseStyles,
    themeStyles[theme],
    {
      [lineStyles(iconSize, darkMode)]: shouldDisplayLine,
      [completedLineStyles[theme]]: isCompleted && shouldDisplayLine,
    },
    className,
  );
