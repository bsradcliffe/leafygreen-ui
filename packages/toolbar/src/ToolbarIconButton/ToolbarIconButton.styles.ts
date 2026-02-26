import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { borderRadius } from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import { ICON_BUTTON_HEIGHT } from '../constants';

const baseIconButtonStyle = [
  `[&]:rounded-[${borderRadius[150]}px]`,
  `[&:hover]:rounded-[${borderRadius[150]}px]`,
  `[&[data-hover='true']]:rounded-[${borderRadius[150]}px]`,
  `[&::before]:rounded-[${borderRadius[150]}px]`,
  '[&::before]:bg-transparent',
].join(' ');

const iconButtonActiveStyles: Record<Theme, string> = {
  [Theme.Light]: [
    `[&]:bg-[${palette.green.light3}]`,
    `[&]:text-[${palette.green.dark2}]`,
    `[&:is(:hover,[data-hover='true'],:focus-visible,[data-focus='true'])]:bg-[${palette.green.light3}]`,
    `[&:is(:hover,[data-hover='true'],:focus-visible,[data-focus='true'])]:text-[${palette.green.dark2}]`,
    `[&:is(:hover,[data-hover='true'],:focus-visible,[data-focus='true'])::before]:bg-transparent`,
  ].join(' '),
  [Theme.Dark]: [
    `[&]:bg-[${palette.green.dark3}]`,
    `[&]:text-[${palette.green.light1}]`,
    `[&:is(:hover,[data-hover='true'],:focus-visible,[data-focus='true'])]:bg-[${palette.green.dark3}]`,
    `[&:is(:hover,[data-hover='true'],:focus-visible,[data-focus='true'])]:text-[${palette.green.light1}]`,
    `[&:is(:hover,[data-hover='true'],:focus-visible,[data-focus='true'])::before]:bg-transparent`,
  ].join(' '),
};

export const getIconButtonStyles = ({
  active,
  theme,
  disabled,
  className,
}: {
  active: boolean;
  theme: Theme;
  disabled: boolean;
  className?: string;
}) =>
  cn(
    baseIconButtonStyle,
    active && !disabled && iconButtonActiveStyles[theme],
    className,
  );

export const triggerStyles = [
  'flex',
  `h-[${ICON_BUTTON_HEIGHT}px]`,
  'items-center',
].join(' ');
