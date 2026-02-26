import { CSS, Transform } from '@dnd-kit/utilities';

import { Theme } from '@leafygreen-ui/lib';
import {
  borderRadius,
  color,
  InteractionState,
  spacing,
  transitionDuration,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

import { ChartCardStates } from './ChartCard.types';

const getBaseContainerStyles = (theme: Theme) =>
  [
    `bg-[${color[theme].background[Variant.Primary][InteractionState.Default]}]`,
    `border border-solid border-[${color[theme].border[Variant.Disabled][InteractionState.Default]}]`,
    `rounded-[${borderRadius[200]}px]`,
    'overflow-hidden',
    'w-full',
    'grid',
    'grid-rows-[40px_0fr]',
    `[transition:grid-template-rows_${transitionDuration.slower}ms_ease-in-out]`,
  ].join(' ');

const getSortableContainerStyles = (
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
const overlayContainerStyles = '[box-shadow:0_18px_18px_-15px_rgba(0,30,43,0.2)]';

export const openContainerStyles = 'grid-rows-[40px_1fr]';

export const getContainerStyles = ({
  theme,
  transition,
  transform,
  isDraggable,
  isOpen,
  state,
  className,
}: {
  theme: Theme;
  transition?: string;
  transform: Transform | null;
  isDraggable: boolean;
  isOpen: boolean;
  state: ChartCardStates;
  className?: string;
}) =>
  cn(
    getBaseContainerStyles(theme),
    isOpen && openContainerStyles,
    isDraggable && getSortableContainerStyles(transform, transition),
    state === ChartCardStates.Dragging && draggingContainerStyles,
    state === ChartCardStates.Overlay && overlayContainerStyles,
    className,
  );

export const getHeaderStyles = ({
  theme,
  state,
  isDraggable,
  className,
}: {
  theme: Theme;
  state: ChartCardStates;
  isDraggable: boolean;
  className?: string;
}) =>
  cn(
    [
      'w-full',
      'h-full',
      `p-[${spacing[150]}px_${spacing[300]}px]`,
      'grid',
      'grid-cols-[auto_1fr]',
    ].join(' '),
    isDraggable && 'cursor-move',
    state === ChartCardStates.Overlay &&
      `bg-[${color[theme].background[Variant.Primary][InteractionState.Hover]}]`,
    className,
  );

export const childrenContainerStyles = 'overflow-hidden';

export const toggleButtonStyles = `mr-[${spacing[100]}px]`;

export const toggleIconStyles = [
  '-rotate-90',
  `[transition:transform_${transitionDuration.slower}ms_ease-in-out]`,
].join(' ');

export const openToggleIconStyles = 'rotate-0';

export const leftInnerContainerStyles = 'flex items-center';
