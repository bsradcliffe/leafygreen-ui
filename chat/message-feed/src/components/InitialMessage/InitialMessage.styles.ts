import { spacing, transitionDuration, typeScales } from '@leafygreen-ui/tokens';

import { cn } from '../../cn';

const FOCUS_RING_WIDTH = 4;

const baseOuterWrapperStyles = [
  'grid',
  'grid-rows-[1fr]',
  `gap-[${spacing[200]}px]`,
  'visible',
].join(' ');

const transitionStyles = [
  'origin-top-left',
  `transition-[grid-template-rows,opacity,transform,visibility]`,
  `duration-[${transitionDuration.slower}ms]`,
  'ease-out',
].join(' ');

const hiddenWrapperStyles = [
  'grid-rows-[0fr]',
  'opacity-0',
  'scale-[0.8]',
  'invisible',
].join(' ');

export const getWrapperStyles = ({ shouldHide }: { shouldHide: boolean }) =>
  cn(baseOuterWrapperStyles, transitionStyles, {
    [hiddenWrapperStyles]: shouldHide,
  });

export const titleStyles = [
  `text-[${typeScales.body2.fontSize}px]`,
  `leading-[${typeScales.body2.lineHeight}px]`,
].join(' ');

export const innerWrapperStyles = [
  'overflow-hidden',
  `-m-[${FOCUS_RING_WIDTH}px]`,
  `p-[${FOCUS_RING_WIDTH}px]`,
  'flex',
  'flex-col',
  `gap-[${spacing[400]}px]`,
].join(' ');
