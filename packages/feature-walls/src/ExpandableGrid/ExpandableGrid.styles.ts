import { CSSProperties } from 'react';

import { Theme } from '@leafygreen-ui/lib';
import {
  color,
  fontWeights,
  spacing,
  transitionDuration,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const TRANSITION_DURATION = transitionDuration.slower;

const baseContainerStyles = [
  'flex',
  'flex-col',
  'items-center',
  `gap-[${spacing[400]}px]`,
].join(' ');

export const getContainerStyles = (className?: string) =>
  cn(baseContainerStyles, className);

export const getVisibleChildrenContainerStyle = ({
  repeatCount,
}: {
  repeatCount: number;
}): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${repeatCount}, 1fr)`,
  gap: `${spacing[400]}px`,
  width: '100%',
});

export const childContainerStyles = 'w-full h-fit';

export const getExpandableWrapperStyle = ({
  isExpanded,
}: {
  isExpanded: boolean;
}): CSSProperties => ({
  display: 'grid',
  gridTemplateRows: isExpanded ? '1fr' : '0fr',
  transition: `grid-template-rows ${TRANSITION_DURATION}ms ease-in-out`,
  width: '100%',
});

export const getExpandableChildrenContainerStyle = ({
  repeatCount,
}: {
  repeatCount: number;
}): CSSProperties => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${repeatCount}, 1fr)`,
  gap: `${spacing[400]}px`,
  width: '100%',
  overflow: 'hidden',
  minHeight: 0,
});

export const getExpandButtonStyles = (theme: Theme): string =>
  [
    'h-[20px]',
    'bg-transparent',
    'border-none',
    'shadow-none',
    `font-[${fontWeights.regular}]`,
    'hover:bg-transparent',
    'hover:border-none',
    'hover:shadow-none',
    'focus-visible:bg-transparent',
  ].join(' ');

export const getExpandButtonStyle = (theme: Theme): CSSProperties => ({
  color: color[theme].text.primary.default,
});

export const getExpandButtonIconStyle = (theme: Theme): CSSProperties => ({
  color: color[theme].icon.secondary.default,
});
