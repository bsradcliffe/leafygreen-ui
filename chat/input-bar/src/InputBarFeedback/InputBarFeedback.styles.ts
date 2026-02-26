import { Theme } from '@leafygreen-ui/lib';
import {
  color,
  InteractionState,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

const ELLIPSIS_WIDTH = 10;

export const statusContainerStyles = 'w-full relative';

export const loadingContainerStyles = [
  'flex',
  'items-center',
  `gap-[${spacing[150]}px]`,
  `mb-[${spacing[150]}px]`,
].join(' ');

const getBaseLoadingTextStyles = (theme: Theme) =>
  `text-[${color[theme].text[Variant.Secondary][InteractionState.Default]}]`;

export const loadingEllipsisStyles = [
  "after:content-['']",
  'after:animate-[ellipsis_1.5s_infinite]',
  'after:inline-block',
  `after:w-[${ELLIPSIS_WIDTH}px]`,
].join(' ');

export const getLoadingTextStyles = (theme: Theme) =>
  cn(getBaseLoadingTextStyles(theme), loadingEllipsisStyles);

export const bannerStyles = `mb-[${spacing[300]}px]`;

export const bannerContentContainerStyles = [
  'flex',
  `gap-[${spacing[200]}px]`,
].join(' ');
