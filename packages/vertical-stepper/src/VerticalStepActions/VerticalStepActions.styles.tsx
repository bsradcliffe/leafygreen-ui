import {
  breakpoints,
  spacing,
  transitionDuration,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';

export const innerStyles = 'overflow-hidden';

export const getBaseStyles = (isCurrent = false) =>
  cn(
    [
      'grid',
      `transition-[grid-template-rows]`,
      `duration-[${transitionDuration.slowest}ms]`,
      'ease-in-out',
      'grid-rows-[0fr]',
      `-ms-[${spacing[200]}px]`,
    ].join(' '),
    {
      ['grid-rows-[1fr]']: isCurrent,
    },
  );

export const getWrapperStyles = (isCurrent = false) =>
  cn(
    [
      `ps-[${spacing[200]}px]`,
      'pb-0',
      `pt-[${spacing[200]}px]`,
      'transition-[padding-block-end]',
      'duration-[400ms]',
      'ease-[ease]',
      'flex',
      `gap-[${spacing[200]}px]`,
      `[@media(max-width:${breakpoints.Tablet}px)]:flex-col`,
    ].join(' '),
    {
      [`pb-[${spacing[200]}px]`]: isCurrent,
    },
  );
