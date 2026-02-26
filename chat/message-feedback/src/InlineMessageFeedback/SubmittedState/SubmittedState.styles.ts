import { Theme } from '@leafygreen-ui/lib';
import {
  color,
  InteractionState,
  spacing,
  transitionDuration,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../../cn';

const containerStyles = [
  'flex',
  `gap-[${spacing[100]}px]`,
  'items-center',
  'opacity-100',
  `transition-[opacity,display]`,
  `duration-[${transitionDuration.slower}ms]`,
  'ease-out',
  '[transition-behavior:allow-discrete]',
].join(' ');

const fadedContainerStyles = 'opacity-0 hidden';

export const getContainerStyles = (shouldFade: boolean) =>
  cn(containerStyles, {
    [fadedContainerStyles]: shouldFade,
  });

export const getIconFill = (theme: Theme) =>
  color[theme].icon[Variant.Success][InteractionState.Default];

export const getTextStyles = (theme: Theme) =>
  `text-[${color[theme].text[Variant.Secondary][InteractionState.Default]}]`;
