import { createUniqueClassName, injectStyles, Theme } from '@leafygreen-ui/lib';
import {
  addOverflowShadow,
  borderRadius,
  color,
  InteractionState,
  Side,
  spacing,
  Variant,
} from '@leafygreen-ui/tokens';

import { cn } from '../cn';
import { TRANSITION_DURATION } from '../constants';

const BORDER_WIDTH = 1;

export const referenceWrapperClassName = createUniqueClassName(
  'context_drawer-reference_wrapper',
);

const baseOuterContainerStyles = 'flex flex-col';

export const getOuterContainerStyles = ({
  className,
}: {
  className?: string;
}) => cn(baseOuterContainerStyles, className);

/**
 * Inner container: border color is a dynamic token with a transition.
 */
export const getInnerContainerStyles = ({
  theme,
}: {
  theme: Theme;
}): string => {
  const id = `lg-context-drawer-inner-${theme}`;
  injectStyles(
    id,
    `
    .${id} {
      display: flex;
      flex-direction: column;
      border-radius: ${borderRadius[400]}px;
      border: ${BORDER_WIDTH}px solid
        ${color[theme].border[Variant.Secondary][InteractionState.Default]};
      transition: border ${TRANSITION_DURATION}ms ease-in-out;
    }
  `,
  );
  return id;
};

/**
 * Negative margins offset the border width so reference and content appear
 * flush with the border.
 */
export const referenceWrapperStyles = cn(
  `-m-[${BORDER_WIDTH}px]`,
  referenceWrapperClassName,
);

/**
 * Content wrapper: animates height/opacity/visibility from 0 to dynamic height.
 */
const contentWrapperId = 'lg-context-drawer-content-wrapper';
injectStyles(
  contentWrapperId,
  `
  .${contentWrapperId} {
    position: relative;
    overflow: hidden;
    transition-property: height, opacity, visibility;
    transition-duration: ${TRANSITION_DURATION}ms;
    transition-timing-function: ease-in-out;
    height: 0;
    opacity: 0;
    visibility: hidden;
  }

  .${contentWrapperId}:focus-visible {
    outline: none;
  }
`,
);

/**
 * Expanded state: height set to a dynamic value, opacity 1, visible.
 */
function getExpandedContentClass(height: string): string {
  // Normalize the height value to create a stable id
  const normalizedHeight = height.replace(/[^a-zA-Z0-9]/g, '_');
  const id = `lg-context-drawer-expanded-${normalizedHeight}`;
  injectStyles(
    id,
    `
    .${id} {
      height: ${height};
      opacity: 1;
      visibility: visible;
    }
  `,
  );
  return id;
}

export const getContentWrapperStyles = ({
  hasBottomShadow,
  hasTopShadow,
  height,
  isOpen,
  theme,
}: {
  hasBottomShadow: boolean;
  hasTopShadow: boolean;
  height: string;
  isOpen: boolean;
  theme: Theme;
}) =>
  cn(contentWrapperId, {
    [getExpandedContentClass(height)]: isOpen,
    [addOverflowShadow({ side: Side.Top, theme, isInside: true })]:
      hasTopShadow,
    [addOverflowShadow({ side: Side.Bottom, theme, isInside: true })]:
      hasBottomShadow,
  });

export const contentScrollContainerStyles = [
  'flex',
  'flex-col',
  'h-full',
  'overflow-y-auto',
  'overscroll-contain',
].join(' ');

export const bottomInterceptStyles = 'pb-px';

export const triggerWrapperStyles = [
  'flex',
  `px-[${spacing[600]}px]`,
  'py-0',
].join(' ');
