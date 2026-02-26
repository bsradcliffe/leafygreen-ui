import { CSSProperties } from 'react';

import { Theme } from '@leafygreen-ui/lib';
import { borderRadius, color, spacing } from '@leafygreen-ui/tokens';

import { cn } from '../../cn';
import { transitionDurations } from '../Accordion.styles';
import { VERTICAL_SPACING } from '../AccordionButton';

const baseStyles = [
  'relative',
  'flex',
  'flex-col',
].join(' ');

export const getStyles = (
  theme: Theme,
  isExpanded: boolean,
  className?: string,
): { className: string; style: CSSProperties } => ({
  className: cn(baseStyles, className),
  style: {},
});

export const getWedgeStyle = (theme: Theme, isExpanded: boolean): CSSProperties => ({
  content: '""',
  pointerEvents: 'none',
  position: 'absolute' as const,
  top: 0,
  bottom: 0,
  left: 0,
  width: '6px',
  margin: `${VERTICAL_SPACING}px 0`,
  borderRadius: `${borderRadius[100]}px`,
  transitionProperty: 'background-color, max-height',
  transitionDuration: `${transitionDurations.expand}ms`,
  transitionTimingFunction: 'ease-out',
  backgroundColor: isExpanded
    ? color[theme].icon.success.default
    : color[theme].icon.secondary.default,
  minHeight: '28px',
  maxHeight: `calc(100% - ${spacing[400]}px)`,
});

export const getWedgeFocusStyle = (theme: Theme): CSSProperties => ({
  backgroundColor: color[theme].icon.secondary.focus,
});
