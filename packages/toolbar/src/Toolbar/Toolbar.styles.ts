import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { color, focusRing } from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import { TOOLBAR_WIDTH } from '../constants';

export const toolbarClassName = createUniqueClassName('lg-toolbar');

const baseStyle = [
  'h-full',
  `w-[${TOOLBAR_WIDTH}px]`,
  'flex',
  'flex-col',
  'items-center',
  'border',
  'border-solid',
].join(' ');

const themeStyles: Record<Theme, string> = {
  [Theme.Light]: [
    `bg-[${color[Theme.Light].background.primary.default}]`,
    `border-[${color[Theme.Light].border.secondary.default}]`,
    // Show the focus ring on the toolbar itself when a child element is focused and only when navigating with a keyboard
    `[&:has(:focus-visible)]:shadow-[${focusRing[Theme.Light].default.replace(/, /g, ',_')}]`,
    '[&:has(:focus-visible)]:z-[1]',
  ].join(' '),
  [Theme.Dark]: [
    `bg-[${color[Theme.Dark].background.primary.default}]`,
    `border-[${color[Theme.Dark].border.secondary.default}]`,
    `[&:has(:focus-visible)]:shadow-[${focusRing[Theme.Dark].default.replace(/, /g, ',_')}]`,
    '[&:has(:focus-visible)]:z-[1]',
  ].join(' '),
};

export const getBaseStyles = ({
  theme,
  className,
}: {
  theme: Theme;
  className?: string;
}) => cn(baseStyle, themeStyles[theme], toolbarClassName, className);
