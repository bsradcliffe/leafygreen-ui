import { CSS, Transform } from '@dnd-kit/utilities';

import { createUniqueClassName, Theme } from '@leafygreen-ui/lib';
import { color, InteractionState, Variant } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

import { ChartStates } from './Chart.types';

export const chartWrapperClassName = createUniqueClassName('chart-wrapper');

const getBaseContainerStyles = (theme: Theme) =>
  [
    `bg-[${color[theme].background[Variant.Primary][InteractionState.Default]}]`,
    'grid',
    '[grid-template-areas:_"chartHeader"_"chart"]',
    'h-[316px]',
    'grid-cols-[100%]',
    'grid-rows-[auto_1fr]',
    'w-full',
  ].join(' ');

/**
 * The CSS helper is a helper for generating CSS transform strings, and is
 * equivalent to manually constructing the string as such:
 *
 * CSS.Translate.toString(transform) === `translate3d(${translate.x}, ${translate.y}, 0)`
 */
const getDraggableContainerStyles = (
  transform: Transform | null,
  transition?: string,
) => {
  const transformStr = CSS.Transform.toString(transform);
  return [
    `[transform:${transformStr}]`,
    transition ? `[transition:${transition}]` : '',
  ]
    .filter(Boolean)
    .join(' ');
};

const draggingContainerStyles = 'opacity-30';

// TODO: This should be a token once we audit our shadows
const getOverlayContainerStyles = (theme: Theme) =>
  [
    '[box-shadow:0_18px_18px_-15px_rgba(0,30,43,0.2)]',
    `border border-solid border-[${color[theme].border[Variant.Disabled][InteractionState.Default]}]`,
    'border-t-0',
  ].join(' ');

export const getChartContainerStyles = ({
  theme,
  transform,
  transition,
  isDraggable,
  state,
}: {
  theme: Theme;
  transform: Transform | null;
  transition?: string;
  isDraggable: boolean;
  state: ChartStates;
}) =>
  cn(
    getBaseContainerStyles(theme),
    isDraggable && getDraggableContainerStyles(transform, transition),
    state === ChartStates.Dragging && draggingContainerStyles,
    state === ChartStates.Overlay && getOverlayContainerStyles(theme),
  );

export const getChartHeaderContainerStyles = ({
  theme,
  state,
  isDraggable,
}: {
  theme: Theme;
  state: ChartStates;
  isDraggable: boolean;
}) =>
  cn(
    [
      '[grid-area:chartHeader]',
      state === ChartStates.Overlay
        ? `bg-[${color[theme].background[Variant.Primary][InteractionState.Hover]}]`
        : 'bg-transparent',
    ].join(' '),
    isDraggable && 'cursor-move',
  );

const baseChartWrapperStyles = [
  'relative',
  'block',
  '[grid-area:chart]',
  'w-full',
].join(' ');

export const chartWrapperStyles = cn(
  baseChartWrapperStyles,
  chartWrapperClassName,
);

export const chartStyles = 'h-full w-full';

export const getLoadingOverlayStyles = (theme: Theme) =>
  [
    `bg-[${color[theme].background[Variant.Primary][InteractionState.Default]}]`,
    'flex',
    'items-center',
    'justify-center',
    'absolute',
    'h-full',
    'w-full',
    'z-[1]',
  ].join(' ');

export const getLoadingTextStyles = (theme: Theme) =>
  `text-[${color[theme].text[Variant.Secondary][InteractionState.Default]}]`;
