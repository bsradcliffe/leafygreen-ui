import { CSSProperties } from 'react';

import { Theme } from '@leafygreen-ui/lib';
import { color, typeScales } from '@leafygreen-ui/tokens';

import { cn } from '../../cn';
import { transitionDurations } from '../Accordion.styles';
import { HORIZONTAL_SPACING, VERTICAL_SPACING } from '../AccordionButton';

const baseGridStyles = [
  'grid',
  `[transition-property:grid-template-rows,margin-bottom,opacity]`,
  `[transition-duration:${transitionDurations.expand}ms]`,
  '[transition-timing-function:ease-in-out]',
  'grid-rows-[0fr]',
  'mb-0',
  'opacity-0',
].join(' ');

const expandedGridStyles = [
  'grid-rows-[1fr]',
  `mb-[${VERTICAL_SPACING}px]`,
  'opacity-100',
].join(' ');

export const getGridStyles = ({
  className,
  isExpanded,
}: {
  className?: string;
  isExpanded: boolean;
}) => cn(baseGridStyles, { [expandedGridStyles]: isExpanded }, className);

export const getContentWrapperStyles = (theme: Theme): { className: string; style: CSSProperties } => ({
  className: [
    'overflow-hidden',
    'min-h-0',
    `pl-[${HORIZONTAL_SPACING}px]`,
    `pr-[${HORIZONTAL_SPACING}px]`,
    `text-[${typeScales.body1.fontSize}px]`,
    `leading-[${typeScales.body1.lineHeight}px]`,
  ].join(' '),
  style: {
    color: color[theme].text.secondary.default,
  },
});
