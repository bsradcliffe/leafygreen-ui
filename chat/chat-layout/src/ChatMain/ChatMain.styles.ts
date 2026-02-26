import { spacing } from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import { gridAreas } from '../constants';

const CHAT_WINDOW_MAX_WIDTH = 800;

const baseContainerStyles = [
  `[grid-area:${gridAreas.main}]`,
  'flex',
  'flex-col',
  'min-w-0',
  'h-full',
].join(' ');

export const getContainerStyles = ({ className }: { className?: string }) =>
  cn(baseContainerStyles, className);

export const chatWindowWrapperStyles = [
  'h-full',
  'w-full',
  `max-w-[${CHAT_WINDOW_MAX_WIDTH}px]`,
  `px-[${spacing[800]}px]`,
  'py-0',
  'flex',
  'self-center',
].join(' ');
