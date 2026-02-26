import { spacing } from '@leafygreen-ui/tokens';

const BADGE_HEIGHT = spacing[600];
const BADGE_WIDTH = spacing[900];

export const promotionContainerStyles = [
  'flex',
  'flex-row',
  'items-center',
  `gap-x-[${spacing[200]}px]`,
  'gap-y-0',
].join(' ');

export const badgeStyles = [
  'flex',
  'flex-row',
  'justify-center',
  'box-border',
  `min-w-[${BADGE_WIDTH}px]`,
  `min-h-[${BADGE_HEIGHT}px]`,
].join(' ');
