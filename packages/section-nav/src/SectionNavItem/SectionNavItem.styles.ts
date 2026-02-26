import { Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import { color, fontWeights, spacing, typeScales } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

import {
  INDENTATION,
  TRANSITION_DURATION,
  WEDGE_BORDER_RADIUS,
  WEDGE_WIDTH,
} from './SectionNavItem.constants';

// This component currently only supports two levels of indentation.
// If more levels are needed, this function can be extended.
const getIndentation = (level: number) => {
  if (level === 1) return INDENTATION['level1'];
  return INDENTATION['level2'];
};

export const itemStyles = 'list-none';

const activeWedgeColor: Record<Theme, string> = {
  [Theme.Light]: palette.black,
  [Theme.Dark]: palette.gray.light2,
};

const getBaseStyles = ({
  theme,
  level,
}: {
  theme: Theme;
  level: number;
}) =>
  [
    '[all:unset]',
    'cursor-pointer',
    'block',
    `text-[${color[theme].text.secondary.default}]`,
    `py-[${spacing[150]}px]`,
    `text-[${typeScales.body1.fontSize}px]`,
    `font-[${fontWeights.regular}]`,
    `leading-[${typeScales.body1.lineHeight}px]`,
    'relative',
    `pl-[calc(${getIndentation(level)}px+${WEDGE_WIDTH}px)]`,
    `pr-[${spacing[400]}px]`,
    'transition-[font-weight]',
    `duration-[${TRANSITION_DURATION}ms]`,
    'ease-in-out',
    // ::before pseudo-element for the wedge indicator
    "before:content-['']",
    'before:absolute',
    'before:left-[-1px]',
    'before:top-0',
    `before:w-[${WEDGE_WIDTH}px]`,
    'before:h-full',
    'before:bg-transparent',
    `before:rounded-tr-[${WEDGE_BORDER_RADIUS}px]`,
    `before:rounded-br-[${WEDGE_BORDER_RADIUS}px]`,
  ].join(' ');

const getHoverStyles = ({ theme }: { theme: Theme }) =>
  `hover:bg-[${color[theme].background.primary.hover}] [&[data-hover='true']]:bg-[${color[theme].background.primary.hover}]`;

const getFocusStyles = ({ theme }: { theme: Theme }) =>
  [
    `focus-visible:text-[${color[theme].text.secondary.focus}]`,
    `[&[data-focus='true']]:text-[${color[theme].text.secondary.focus}]`,
    `focus-visible:bg-[${color[theme].background.primary.focus}]`,
    `[&[data-focus='true']]:bg-[${color[theme].background.primary.focus}]`,
    `focus-visible:before:bg-[${color[theme].icon.primary.focus}]`,
    `[&[data-focus='true']]:before:bg-[${color[theme].icon.primary.focus}]`,
  ].join(' ');

const getActiveStyles = ({ theme }: { theme: Theme }) =>
  [
    `text-[${color[theme].text.primary.default}]`,
    `font-[${fontWeights.semiBold}]`,
    `before:bg-[${activeWedgeColor[theme]}]`,
  ].join(' ');

export const getLinkStyles = ({
  active = false,
  theme = Theme.Light,
  className,
  level,
}: {
  active?: boolean;
  theme?: Theme;
  className?: string;
  level: number;
}) =>
  cn(
    getBaseStyles({ theme, level }),
    getHoverStyles({ theme }),
    active && getActiveStyles({ theme }),
    getFocusStyles({ theme }),
    className,
  );

export const listStyles = 'p-0 m-0';
