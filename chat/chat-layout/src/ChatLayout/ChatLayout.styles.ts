import {
  COLLAPSED_SIDE_NAV_WIDTH_WITH_BORDER,
  gridAreas,
  PINNED_SIDE_NAV_WIDTH_WITH_BORDER,
  SIDE_NAV_TRANSITION_DURATION,
} from '../constants';
import { cn } from '../cn';

const baseContainerStyles = [
  'overflow-hidden',
  'h-full',
  'w-full',
  'max-h-screen',
  'max-w-[100vw]',
  'grid',
  `[grid-template-areas:'${gridAreas.sideNav}_${gridAreas.main}']`,
  `grid-cols-[${PINNED_SIDE_NAV_WIDTH_WITH_BORDER}px_auto]`,
  `transition-[grid-template-columns]`,
  `duration-[${SIDE_NAV_TRANSITION_DURATION}ms]`,
  'ease-in-out',
].join(' ');

const collapsedContainerStyles =
  `grid-cols-[${COLLAPSED_SIDE_NAV_WIDTH_WITH_BORDER}px_auto]`;

export const getContainerStyles = ({
  className,
  isPinned,
}: {
  className?: string;
  isPinned: boolean;
}) =>
  cn(
    baseContainerStyles,
    {
      [collapsedContainerStyles]: !isPinned,
    },
    className,
  );
