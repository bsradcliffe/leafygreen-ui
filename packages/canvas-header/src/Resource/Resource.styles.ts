import { CSSProperties } from 'react';

import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { palette } from '@leafygreen-ui/palette';
import {
  color,
  focusRing,
  spacing,
  transitionDuration,
  typeScales,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

export const resourceNameButtonClassName = createUniqueClassName(
  'canvas-header-resource',
);

export const resourceBaseStyles = [
  '[line-break:anywhere]',
  'relative',
  'inline',
].join(' ');

export const resourceIconBaseStyles = [
  'inline-block',
  `text-[${palette.gray.base}]`,
  `pr-[${spacing[200]}px]`,
  '[&_svg]:relative',
  '[&_svg]:top-[2px]',
].join(' ');

export const getResourceNameButtonStyles = (theme: Theme): string =>
  cn(
    'inline',
    'cursor-pointer',
    'rounded-[6px]',
  );

export const getResourceNameButtonStyle = (theme: Theme): CSSProperties => ({
  color: color[theme].text.secondary?.default,
});

export const getResourceNameButtonFocusStyle = (theme: Theme): CSSProperties => ({
  outline: '1px solid white',
  boxShadow: focusRing[theme].default,
});

export const getResourceNameStyles = (): string =>
  cn(
    'inline',
    'text-inherit',
    `text-[${typeScales.body2.fontSize}px]`,
    `leading-[${typeScales.body2.lineHeight}px]`,
    `transition-[border-color]`,
    `duration-[${transitionDuration.default}ms]`,
    'ease-in-out',
    'border-b-2',
    'border-b-transparent',
    'pb-[2px]',
  );

export const getResourceNameHoverStyle = (theme: Theme): CSSProperties => ({
  borderColor: color[theme].border.secondary?.default,
});

export const getResourceCopyIconWrapperStyles = (): string =>
  cn(
    'relative',
    'right-0',
    'ml-[-24px]',
    'opacity-0',
    `transition-[border-color,opacity]`,
    `duration-[${transitionDuration.default}ms]`,
    'ease-in-out',
    `px-[${spacing[100]}px]`,
    `rounded-r-[${spacing[150]}px]`,
    'rounded-l-0',
    '[&_svg]:relative',
    `[&_svg]:top-[${spacing[150] / 2}px]`,
  );

export const getResourceCopyIconWrapperStyle = (theme: Theme): CSSProperties => ({
  backgroundColor: color[theme].background.primary.default,
});

export const getResourceCopyIconBeforeStyle = (theme: Theme): CSSProperties => ({
  content: '""',
  position: 'absolute' as const,
  display: 'inline-block',
  left: `-${spacing[300]}px`,
  top: 0,
  width: `${spacing[300]}px`,
  height: '100%',
  background: `linear-gradient(to right, ${palette.transparent}, ${color[theme].background.primary.default})`,
});

export const resourceCopiedStyles = 'opacity-100';

export const resourceVisibleStyles = 'opacity-100';

export const resourceBadgeStyles = [
  'relative',
  'inline-flex',
  'shrink-0',
  `gap-[${spacing[200]}px]`,
  `pl-[${spacing[200]}px]`,
].join(' ');
