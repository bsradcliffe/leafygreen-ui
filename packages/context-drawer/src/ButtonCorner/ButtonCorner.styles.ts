import { Theme } from '@leafygreen-ui/lib';
import { color } from '@leafygreen-ui/tokens';

import { cn } from '../cn';

import { Side } from './ButtonCorner.types';

const CORNER_SIZE = 8;
const CORNER_OFFSET = 15;

const baseWrapperStyles = [
  'flex',
  'absolute',
  'top-0',
  `w-[${CORNER_SIZE}px]`,
  `h-[${CORNER_SIZE}px]`,
].join(' ');

export const getWrapperStyles = (side: Side) =>
  cn(baseWrapperStyles, {
    [`-left-[${CORNER_OFFSET}px]`]: side === Side.Left,
    [`-right-[${CORNER_OFFSET}px] -scale-x-100`]: side === Side.Right,
  });

export const getFill = (theme: Theme) => color[theme].background.info.default;
