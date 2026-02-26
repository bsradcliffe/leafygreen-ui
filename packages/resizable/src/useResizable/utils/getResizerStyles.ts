import { palette } from '@leafygreen-ui/palette';

import { cn } from '../../cn';
import { RESIZER_SIZE } from '../useResizable.constants';

/**
 * Generates styles for the resizer element based on its orientation and resizing state
 */
export const getResizerStyles = (isVertical: boolean, isResizing: boolean) =>
  cn(
    isVertical
      ? `w-[${RESIZER_SIZE}px] h-full`
      : `h-[${RESIZER_SIZE}px] w-full`,
    isVertical ? 'cursor-col-resize' : 'cursor-row-resize',
    'bg-transparent',
    `hover:bg-[${palette.blue.light1}] focus-visible:bg-[${palette.blue.light1}] hover:outline-none focus-visible:outline-none`,
    isResizing && `bg-[${palette.blue.light1}]`,
  );
