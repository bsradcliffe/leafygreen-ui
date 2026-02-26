import {
  breakpoints,
  spacing,
  transitionDuration,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const CONTAINER_MAX_WIDTH = 1040;
const TRANSITION_DURATION = transitionDuration.slowest;

export const cardStyles = [
  `max-w-[${CONTAINER_MAX_WIDTH}px]`,
  'w-full',
  `p-[${spacing[800]}px]`,
].join(' ');

const baseSectionStyles = [
  `max-w-[${CONTAINER_MAX_WIDTH}px]`,
  'grid',
  'grid-cols-[1fr_1fr]',
  `max-[${breakpoints.Tablet}px]:grid-cols-1`,
].join(' ');

export const getSectionStyles = (className?: string) =>
  cn(baseSectionStyles, className);

export const textContainerStyles = [
  'flex',
  'flex-col',
  `gap-[${spacing[600]}px]`,
].join(' ');

export const mediaCarouselContainerStyles = [
  'flex',
  'justify-center',
  'items-center',
].join(' ');

export const mediaCarouselStyles = [
  'relative',
  'overflow-hidden',
  'h-auto',
  `[transition:height_${TRANSITION_DURATION}ms_ease-in-out]`,
].join(' ');

const baseMediaSlideStyles = [
  'absolute',
  'top-0',
  'left-0',
  'w-full',
  'flex',
  'shrink-0',
  'justify-center',
  'items-center',
  `px-[${spacing[600]}px]`,
  `[transition-property:opacity,visibility]`,
  `[transition-duration:${TRANSITION_DURATION}ms]`,
  '[transition-timing-function:ease-in-out]',
  'opacity-0',
  'invisible',
  '[&_img]:w-full',
  '[&_img]:h-full',
  '[&_img]:object-cover',
].join(' ');

const mediaSlideActiveStyles = [
  'relative',
  'opacity-100',
  'visible',
].join(' ');

export const getMediaSlideStyles = (isActive: boolean) =>
  cn(baseMediaSlideStyles, {
    [mediaSlideActiveStyles]: isActive,
  });
