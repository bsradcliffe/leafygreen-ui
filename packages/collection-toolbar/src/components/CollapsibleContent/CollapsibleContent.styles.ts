import { spacing, transitionDuration } from '@leafygreen-ui/tokens';

import { cn } from '../../cn';

export const collapsibleContentBaseStyles = [
  'grid',
  'w-[-webkit-fill-available]',
  `transition-[height,grid-template-rows,opacity,visibility]`,
  `duration-[${transitionDuration.slower}ms]`,
  'ease-in-out',
  'grid-rows-[1fr]',
  'opacity-100',
  'visible',
].join(' ');

const collapsedStyles = [
  'grid-rows-[0fr]',
  'opacity-0',
  'invisible',
].join(' ');

export const getCollapsibleContentStyles = ({
  isCollapsed,
}: {
  isCollapsed?: boolean;
}) =>
  cn(collapsibleContentBaseStyles, {
    [collapsedStyles]: !!isCollapsed,
  });

export const innerContentWrapperStyles = [
  'grid',
  `gap-[${spacing[200]}px]`,
  'overflow-hidden',
  'min-h-0',
].join(' ');
