import { Theme } from '@leafygreen-ui/lib';
import {
  color,
  InteractionState,
  spacing,
  transitionDuration,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const CONTAINER_MAX_WIDTH = 400;
const FOCUS_RING_WIDTH = 4;

const baseOuterWrapperStyles = [
  `max-w-[${CONTAINER_MAX_WIDTH}px]`,
  'overflow-hidden',
  `-m-[${FOCUS_RING_WIDTH}px]`,
  `p-[${FOCUS_RING_WIDTH}px]`,
  'grid',
  'grid-rows-[1fr]',
  `gap-[${spacing[200]}px]`,
].join(' ');

const transitionStyles = [
  'origin-bottom-right',
  `transition-[grid-template-rows,opacity,transform]`,
  `duration-[${transitionDuration.slower}ms]`,
  'ease-out',
].join(' ');

const hiddenWrapperStyles = [
  'grid-rows-[0fr]',
  'opacity-0',
  'scale-[0.8]',
].join(' ');

export const getOuterWrapperStyles = ({
  enableTransition,
  shouldHide,
}: {
  enableTransition: boolean;
  shouldHide: boolean;
}) =>
  cn(baseOuterWrapperStyles, {
    [transitionStyles]: enableTransition,
    [hiddenWrapperStyles]: shouldHide,
  });

export const innerWrapperStyles = [
  'min-h-0',
  'flex',
  'flex-col',
  `gap-[${spacing[200]}px]`,
  'items-start',
].join(' ');

export const headerStyles = [
  'flex',
  'items-center',
  `gap-[${spacing[50]}px]`,
].join(' ');

export const getLabelStyles = (theme: Theme) =>
  `text-[${color[theme].text[Variant.Secondary][InteractionState.Default]}]`;

export const childrenContainerStyles = [
  'flex',
  'flex-col',
  `gap-[${spacing[200]}px]`,
].join(' ');
