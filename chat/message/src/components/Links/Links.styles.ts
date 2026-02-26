import { spacing, transitionDuration } from '@leafygreen-ui/tokens';

import { cn } from '../../cn';

/**
 * The length of the box shadow for the RichLink component that
 * renders when a link is hovered.
 */
const LINK_BOX_SHADOW_LENGTH = 4;
const TRANSITION_DURATION = transitionDuration.slower;

export const containerStyles = 'flex flex-col';

export const headerStyles = [
  'flex',
  'items-center',
  `gap-[${spacing[200]}px]`,
].join(' ');

const baseIconStyles = [
  `transition-transform`,
  `duration-[${TRANSITION_DURATION}ms]`,
  'ease-in-out',
  'rotate-0',
].join(' ');

const expandedIconStyles = 'rotate-180';

export const getIconStyles = (isExpanded: boolean) =>
  cn(baseIconStyles, {
    [expandedIconStyles]: isExpanded,
  });

const baseLinksWrapperStyles = [
  'grid',
  `pt-[${spacing[100]}px]`,
  `transition-[height,grid-template-rows,opacity,visibility]`,
  `duration-[${TRANSITION_DURATION}ms]`,
  'ease-in-out',
  'grid-rows-[0fr]',
  'opacity-0',
  'invisible',
].join(' ');

const expandedLinksWrapperStyles = [
  'grid-rows-[1fr]',
  'opacity-100',
  'visible',
].join(' ');

export const getLinksWrapperStyles = (isExpanded: boolean) =>
  cn(baseLinksWrapperStyles, {
    [expandedLinksWrapperStyles]: isExpanded,
  });

export const linksInnerWrapperStyles = [
  'overflow-hidden',
  `-m-[${LINK_BOX_SHADOW_LENGTH}px]`,
  `p-[${LINK_BOX_SHADOW_LENGTH}px]`,
].join(' ');
