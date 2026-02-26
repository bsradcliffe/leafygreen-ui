import { spacing, transitionDuration } from '@leafygreen-ui/tokens';

import { cn } from '../../../cn';

const LG_MARKDOWN_CODE_MAX_HEIGHT = 220;
const TRANSITION_DURATION = transitionDuration.slower;

const baseContentWrapperStyles = [
  `px-[${spacing[300]}px]`,
  'py-0',
  'grid',
  `transition-[grid-template-rows,opacity,padding,visibility]`,
  `duration-[${TRANSITION_DURATION}ms]`,
  'ease-in-out',
  'grid-rows-[0fr]',
  'opacity-0',
  'invisible',

  `[&_pre]:max-h-[${LG_MARKDOWN_CODE_MAX_HEIGHT}px]`,
  '[&_pre]:overflow-y-auto',
].join(' ');

const expandedContentWrapperStyles = [
  `p-[${spacing[300]}px]`,
  'grid-rows-[1fr]',
  'opacity-100',
  'visible',
].join(' ');

export const getContentWrapperStyles = ({
  className,
  isExpanded,
}: {
  className?: string;
  isExpanded: boolean;
}) =>
  cn(
    baseContentWrapperStyles,
    {
      [expandedContentWrapperStyles]: isExpanded,
    },
    className,
  );

export const innerContentWrapperStyles = 'overflow-hidden min-h-0';
